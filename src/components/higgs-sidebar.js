import '../../node_modules/hammerjs/hammer'

const templateString = `
    <style>
        aside {
            width: 17rem;
            position: fixed;
            z-index: 2;
            top: 4.5rem;
            bottom: 1.75rem;
            left: -13rem;
            background-color: #dadada;
            overflow-x: hidden;
            transition: all 0.15s ease-in-out;
            font-family: 'Lato', sans-serif;
            box-shadow:0px 0px 10px 0px #2f2f2f;
        }
        
        aside:hover, .higgs-sidebar-open {
            width: 17rem;
            left: 0;
        }

        a {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'/%3E%3C/svg%3E");
        }

        ::slotted(a.sub-menu) {
            padding-left: 2rem !important;
            margin-right: 4rem !important;
            font-size: 1rem !important;
            visibility: hidden !important;
            max-height: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            transition: all 0.15s ease-in-out !important;
        }

        aside:hover > ::slotted(a.sub-menu),
        .higgs-sidebar-open > ::slotted(a.sub-menu) {
            visibility: visible !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
            max-height: 1rem !important;
            margin-right: 0 !important;
        }
        
        ::slotted(a), a {
            padding: 1rem !important;
            text-decoration: none !important;
            font-size: 1.25rem !important;
            display: block !important;
            color: #000000 !important;
        
            background-position: right center !important;
            background-repeat: no-repeat !important;
            background-size: 2rem 2rem !important;
            background-origin: content-box !important;
        }
        
        ::slotted(a.active) {
            background-color: #0033a0 !important;
            color: #ffffff !important;
        }
        
        ::slotted(a:hover:not(.active)), a:hover {
            background-color: #cacaca !important;
        }
        
        @media screen and (max-width: 768px) {
            aside:not(.higgs-sidebar-open) {
                left: -17rem;
                box-shadow: none;
            }

            aside:hover, .higgs-sidebar-open {
                width: 90%;
                min-width: 17rem;
            }

            a {
                display: none;
            }
            
            ::slotted(a.sub-menu) {
                visibility: visible !important;
                padding-top: 1rem !important;
                padding-bottom: 1rem !important;
                max-height: 1rem !important;
            }
        }
    </style>
    <aside>
        <a id="keep-open">Keep Open</a>
        <slot></slot>
    </aside>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

class HiggsSidebar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(template.content.cloneNode(true));

        this._aside = shadow.querySelector('aside');

        this._keepOpen = shadow.querySelector('#keep-open');

        if (sessionStorage.getItem('keepOpen')) {
            this._keepOpen.innerText = 'Auto Close';
            this._aside.setAttribute('class', 'higgs-sidebar-open');
        } else {
            this._keepOpen.innerText = 'Keep Open';
        }

        this._keepOpen.addEventListener('click', function() {
            document.querySelector('higgs-sidebar').toggleSidebar();
        })

        document.querySelector('a.active').scrollIntoView(false);

        Hammer(document.body).on('swiperight', function(event) {
            if (window.innerWidth < 768) {
                const endPoint = event.pointers[0].pageX;
                const distance = event.deltaX;
                const origin = endPoint - distance;
                const maxStartPoint = Math.floor(window.innerWidth / 10);
    
                if (origin <= maxStartPoint && sessionStorage.getItem('keepOpen') === null) {
                    document.querySelector('higgs-sidebar').toggleSidebar();
                }
            }
        });

        Hammer(document.body).on('swipeleft', function() {
            if (window.innerWidth < 768) {
                if(sessionStorage.getItem('keepOpen')) {
                    document.querySelector('higgs-sidebar').toggleSidebar();
                }
            }
        });
    }

    shrinkToAutoClose() {
        this._aside.removeAttribute('class');
    }

    expandToKeepOpen() {
        this._aside.setAttribute('class', 'higgs-sidebar-open');
    }

    toggleSidebar() {
        const aside = this.closest('body').querySelector('higgs-sidebar');
        const main = this.closest('body').querySelector('higgs-content');
        const nav = this.closest('body').querySelector('higgs-app-bar');

        let event;

        if (sessionStorage.getItem('keepOpen')) {
            main ? main.expandToAutoClose() : null;
            nav ? nav.expandToAutoClose() : null;
            aside.shrinkToAutoClose();
            sessionStorage.removeItem('keepOpen')
            this._keepOpen.innerText = 'Keep Open'
            event = new CustomEvent('sidebar-toggled', { isOpen : false })
        } else {
            main ? main.shrinkToKeepOpen() : null;
            nav ? nav.shrinkToKeepOpen() : null;
            aside.expandToKeepOpen();
            sessionStorage.setItem('keepOpen', true);
            this._keepOpen.innerText = 'Auto Close'
            event = new CustomEvent('sidebar-toggled', { isOpen : true })
        }

        const that = this;
        setTimeout(function() {
            that.dispatchEvent(event);
        }, 150);
    }
}

customElements.define('higgs-sidebar', HiggsSidebar);
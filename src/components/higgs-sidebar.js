import '../../node_modules/hammerjs/hammer'

const templateString = `
    <style>
        aside {
            width: 17rem;
            position: fixed;
            z-index: 1;
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
            padding-left: 2rem;
            margin-right: 4rem;
            font-size: 1rem;
        }

        aside:hover > ::slotted(a.sub-menu),
        .higgs-sidebar-open > ::slotted(a.sub-menu) {
            margin-right: 0;
        }
        
        ::slotted(a), a {
            padding: 1rem;
            text-decoration: none;
            font-size: 1.25rem;
            display: block;
            color: #000000;
        
            background-position: right center;
            background-repeat: no-repeat;
            background-size: 2rem 2rem;
            background-origin: content-box;
        }
        
        ::slotted(a.active) {
            background-color: #0033a0;
            color: #ffffff;
        }
        
        ::slotted(a:hover:not(.active)), a:hover {
            background-color: #cacaca;
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
            const endPoint = event.pointers[0].pageX;
            const distance = event.deltaX;
            const origin = endPoint - distance;
            const maxStartPoint = Math.floor(window.innerWidth / 10);

            if (origin <= maxStartPoint && sessionStorage.getItem('keepOpen') === null) {
                document.querySelector('higgs-sidebar').toggleSidebar();
            }
        });

        Hammer(document.body).on('swipeleft', function() {
            if(sessionStorage.getItem('keepOpen')) {
                document.querySelector('higgs-sidebar').toggleSidebar();
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
        const aside = document.querySelector('higgs-sidebar');
        const main = document.querySelector('higgs-content');

        if (sessionStorage.getItem('keepOpen')) {
            main ? main.expandToAutoClose() : null;
            aside.shrinkToAutoClose();
            sessionStorage.removeItem('keepOpen')
            this._keepOpen.innerText = 'Keep Open'
        } else {
            main ? main.shrinkToKeepOpen() : null;
            aside.expandToKeepOpen();
            sessionStorage.setItem('keepOpen', true);
            this._keepOpen.innerText = 'Auto Close'
        }
    }
}

customElements.define('higgs-sidebar', HiggsSidebar);
const templateString = `
    <style>
        nav {
            position: fixed;
            top: 4.5rem;
            left: 4rem;
            right: 0rem;
            padding: 1rem;
            max-height: 1.4375rem;
            height: 1.4375rem;
            background-color: #fafafa;
            border-bottom: 1px solid #dadada;
            z-index: 1;
            
            display: flex;
            justify-content: space-between;
            align-items: center;

            transition: all 0.15s ease-in-out;
        }
        
        nav.higgs-sidebar-open {
            left: 17rem;
        }

        .location {
            font-style: italic;
            font-size: 1.25rem;
        }

        .right-align {
            display: inline-flex;
        }

        .right-align > ::slotted(*) {
            margin-left: 1rem;
        }

        @media screen and (max-width: 768px) {
            nav {
                left: 0rem;
            }
            nav.higgs-sidebar-open {
                left: 0rem;
            }
        }
    </style>
    <nav>
        <span class="location"></span>
        <div class="right-align">
            <slot></slot>
        </div>
    </main>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

class HiggsAppBar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(template.content.cloneNode(true));

        this._nav = shadow.querySelector('nav');

        this._location = this._nav.querySelector('.location');
        this._location.textContent = this.getAttribute('location');

        if (sessionStorage.getItem('keepOpen')) {
            this._nav.setAttribute('class', 'higgs-sidebar-open');
        }
    }

    shrinkToKeepOpen() {
        this._nav.setAttribute('class', 'higgs-sidebar-open');
    }

    expandToAutoClose() {
        this._nav.removeAttribute('class');
    }
}

customElements.define('higgs-app-bar', HiggsAppBar);
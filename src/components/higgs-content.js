const templateString = `
    <style>
        main {
            margin-right: 1rem;
            margin-top: 6rem;
            margin-bottom: 2.75rem;
            margin-left: 5rem;

            font-family: 'Lato', sans-serif;
            transition: all 0.15s ease-in-out;
        }
        
        main.higgs-sidebar-open {
            margin-left: 16rem;
        }

        @media screen and (max-width: 700px) {
            main {
                margin-left: 1rem;
            }
            main.higgs-sidebar-open {
                margin-left: 1rem;
            }
        }
    </style>
    <main>
        <slot></slot>
    </main>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

class HiggsContent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(template.content.cloneNode(true));

        this._main = shadow.querySelector('main');

        if (sessionStorage.getItem('keepOpen')) {
            this._main.setAttribute('class', 'higgs-sidebar-open');
        }
    }

    shrinkToKeepOpen() {
        this._main.setAttribute('class', 'higgs-sidebar-open');
    }

    expandToAutoClose() {
        this._main.removeAttribute('class');
    }
}

customElements.define('higgs-content', HiggsContent);
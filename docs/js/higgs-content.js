class HiggsContent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const main = document.createElement('main');
        main.appendChild(document.createElement('slot'));

        if (sessionStorage.getItem('keepOpen')) {
            main.setAttribute('class', 'higgs-sidebar-open');
        }

        const style = document.createElement('style');
        style.textContent = `
        main {
            margin-right: 1rem;
            margin-top: 6rem;
            margin-bottom: 2.75rem;
            margin-left: 5rem;

            font-family: 'Lato', sans-serif;
            transition: all 0.15s ease-in-out;
        }
        
        @media screen and (max-width: 700px) {
            main {
                margin-left: 1rem;
            }
        }

        main.higgs-sidebar-open {
            margin-left: 16rem;
        }
        `;
    
        shadow.appendChild(style);
        shadow.appendChild(main);
    }
}

customElements.define('higgs-content', HiggsContent);
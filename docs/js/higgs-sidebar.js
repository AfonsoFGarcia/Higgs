class HiggsSidebar extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const aside = document.createElement('aside');

        const keepOpen = document.createElement('a');

        if (sessionStorage.getItem('keepOpen')) {
            keepOpen.innerText = 'Auto Close';
            aside.setAttribute('class', 'higgs-sidebar-open');
        } else {
            keepOpen.innerText = 'Keep Open';
        }

        aside.appendChild(keepOpen);

        keepOpen.addEventListener('click', function() {
            const aside = document.querySelector('higgs-sidebar').shadowRoot.querySelector('aside');
            const main = document.querySelector('higgs-content').shadowRoot.querySelector('main');

            console.log(sessionStorage.getItem('keepOpen'));

            if (sessionStorage.getItem('keepOpen')) {
                main.removeAttribute('class');
                aside.removeAttribute('class');
                sessionStorage.removeItem('keepOpen')
                this.innerText = 'Keep Open'
            } else {
                main.setAttribute('class', 'higgs-sidebar-open');
                aside.setAttribute('class', 'higgs-sidebar-open');
                sessionStorage.setItem('keepOpen', true);
                this.innerText = 'Auto Close'
            }
        })

        const slot = document.createElement('slot');
        aside.appendChild(slot);

        const style = document.createElement('style');
        style.textContent = `
        aside {
            width: 15rem;
            position: fixed;
            z-index: 1;
            top: 4.5rem;
            bottom: 1.75rem;
            left: -11rem;
            background-color: #dadada;
            overflow-x: hidden;
            transition: all 0.15s ease-in-out;
            font-family: 'Lato', sans-serif;
            box-shadow:0px 0px 10px 0px #2f2f2f;
        }
        
        aside:hover, .higgs-sidebar-open {
            width: 15rem;
            left: 0;
        }

        a {
            background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4=");
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
        
        @media screen and (max-width: 700px) {
            aside {
              width: auto;
              height: 3.5rem;
              position: sticky;
              top: 4.5rem;
              left: 0;
              right: 0;
              border: 0;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              overflow-x: auto;
              white-space: nowrap;
            }

            aside:hover {
                width: auto;
            }

            div {
                display: inline-flex;
            }

            ::slotted(a) {
                float: left;
                background-position: 0.5rem center;
                padding-left: 3rem;
                background-origin: border-box;
                display: inline-block
            }

            a {
                display: none;
            }
        }
        `;
    
        shadow.appendChild(style);
        shadow.appendChild(aside);

        document.querySelector('a.active').scrollIntoView(false);
    }
}

customElements.define('higgs-sidebar', HiggsSidebar);
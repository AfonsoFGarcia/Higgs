const templateString = `
    <style>
        header {
            position: fixed;
            top: 0;
            display: flex;
            align-items: center;
            width: 100%;
            padding-bottom: 0.5rem;
            background-color: #2f2f2f;
            color: white;
            font-family: 'Neuton', serif;
            box-shadow:0px 0px 10px 0px #2f2f2f;
            z-index: 2;
        }
        
        .nav-branding {
            background-color: #0033a0;
            color: white;
            display: inline-flex;
            align-self: flex-start;
            height: 4rem;
            margin: 0 1rem;
            box-shadow: 0px 0px 10px 0px #000000;
        }
        
        .logo {
            width: 3rem;
            height: 3rem;
            margin: 0.5rem;
            transition: all 0.15s ease-in-out;
        }
        
        .logo:hover {
            width: 3.5rem;
            height: 3.5rem;
            margin: 0.25rem;
        }
        
        .application-name {
            font-size: 3rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-right: 1rem;
        }

        .sidebar-toggle {
            display: none;
        }

        @media screen and (max-width: 700px) {
            .sidebar-toggle {
                display: block;
                margin-top: 0.5rem;
                margin-left: 1rem;
            }

            .sidebar-toggle > img {
                height: 2rem;
            }
        }
    </style>
    <header>
        <div class="sidebar-toggle">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath style='fill: %23ffffff' d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'/%3E%3C/svg%3E">
        </div>
        <div class="nav-branding">
            <a>
                <img class="logo">
            </a>
        </div>
        <span class="application-name"></span>
    </header>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

class HiggsHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(template.content.cloneNode(true));

        this._imgLink = shadow.querySelector('a');
        this._imgLink.href = this.getAttribute('logo-url');

        this._img = shadow.querySelector('.logo');
        this._img.src = this.getAttribute('logo-img');

        this._applicationName = shadow.querySelector('.application-name');
        this._applicationName.textContent = this.getAttribute('application-name');

        shadow.querySelector('.sidebar-toggle').addEventListener('click', function() {
            const sidebar = document.querySelector('higgs-sidebar');
            sidebar ? sidebar.toggleSidebar() : null;
        })
    }
}

customElements.define('higgs-header', HiggsHeader);
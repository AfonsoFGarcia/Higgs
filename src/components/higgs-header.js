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
    </style>
    <header>
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

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));

        this._imgLink = shadow.querySelector('a');
        this._imgLink.href = this.getAttribute('logo-url');

        this._img = shadow.querySelector('.logo');
        this._img.src = this.getAttribute('logo-img');

        this._applicationName = shadow.querySelector('.application-name');
        this._applicationName.textContent = this.getAttribute('application-name');
    }
}

customElements.define('higgs-header', HiggsHeader);
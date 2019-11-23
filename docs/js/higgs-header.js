class HiggsHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const header = document.createElement('header');

        const navBranding = document.createElement('div');
        navBranding.setAttribute('class', 'nav-branding');

        const imgLink = document.createElement('a');
        imgLink.href = this.getAttribute('logo-url');

        const img = document.createElement('img');
        img.src = this.getAttribute('logo-img');
        img.setAttribute('class', 'logo');

        const applicationName = document.createElement('span');
        applicationName.setAttribute('class', 'application-name');
        applicationName.textContent = this.getAttribute('application-name');

        const style = document.createElement('style');
        style.textContent = `
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
        `;
    
        shadow.appendChild(style);
        shadow.appendChild(header);
        header.appendChild(navBranding);
        navBranding.appendChild(imgLink);
        imgLink.appendChild(img);
        header.appendChild(applicationName);
    }
}

customElements.define('higgs-header', HiggsHeader);
class HiggsFooter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const footer = document.createElement('footer');

        const versionNumber = document.createElement('div');
        versionNumber.setAttribute('class', 'version-number');
        versionNumber.textContent = this.getAttribute('version-number');
        footer.appendChild(versionNumber);


        if (this.hasAttribute('request-link') || this.hasAttribute('incident-link')) {
            const supportLinks = document.createElement('div');
            supportLinks.setAttribute('class', 'extra-info');
            footer.appendChild(supportLinks);

            if (this.hasAttribute('incident-link')) {
                const incidentLink = document.createElement('a');
                incidentLink.href = this.getAttribute('incident-link');
                incidentLink.textContent = "Report a problem"
                supportLinks.appendChild(incidentLink);
            }

            if (this.hasAttribute('request-link') && this.hasAttribute('incident-link')) {
                supportLinks.appendChild(document.createElement('br'));
            }

            if (this.hasAttribute('request-link')) {
                const requestLink = document.createElement('a');
                requestLink.href = this.getAttribute('request-link');
                requestLink.textContent = "Submit a request"
                supportLinks.appendChild(requestLink);
            }
        }

        if (this.hasAttribute('copyright')) {
            const copyright = document.createElement('div');
            copyright.setAttribute('class', 'extra-info');
            copyright.textContent = this.getAttribute('copyright');
            footer.appendChild(copyright);
        }
        
        const style = document.createElement('style');
        style.textContent = `
        footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1.25rem;
            z-index: 3;
        
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.25rem 1.25rem;
        
            background-color: #fafafa;
            background-position: right bottom;
            border-top: 1px solid #bababa;
            
            font-family: 'Lato', sans-serif;
        
            transition: all 0.15s ease-in-out;
            overflow-y: hidden;

            font-family: 'Lato', sans-serif;
        }
        
        footer:hover {
            height: 7.5rem;
        
            padding: 1.25rem;
        
            background-image: url(` + this.getAttribute('background-image') + `);
            background-position: right bottom;
            background-repeat: no-repeat;
            background-size: 7.5rem 7.5rem;
            background-origin: content-box;
        }
        
        footer > .extra-info {
            opacity: 0;
        }
        
        footer:hover > .extra-info {
            opacity: 1;
        }
        `;
    
        shadow.appendChild(style);
        shadow.appendChild(footer);
    }
}

customElements.define('higgs-footer', HiggsFooter);
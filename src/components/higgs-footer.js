const templateString = `
    <style>
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
    </style>
    <footer class="higgs-background">
        <div class="version-number"></div>
        <div class="extra-info" id="support-links">
            <a id="incident-link">Report a problem</a>
            <br>
            <a id="request-link">Submit a request</a>
        </div>
        <div class="extra-info" id="copyright"></div>
    </footer>
`;

const template = document.createElement('template');
template.innerHTML = templateString;

class HiggsFooter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));

        this._footer = shadow.querySelector('footer');

        this._versionNumber = shadow.querySelector('.version-number');
        this._supportLinks = shadow.querySelector('#support-links');
        this._copyright = shadow.querySelector('#copyright');
        
        this._versionNumber.textContent = this.getAttribute('version-number');

        if (this.hasAttribute('request-link') || this.hasAttribute('incident-link')) {
            const incidentLink = this._supportLinks.querySelector('#incident-link');
            const br = this._supportLinks.querySelector('br');
            const requestLink = this._supportLinks.querySelector('#request-link');

            if (this.hasAttribute('incident-link')) {
                incidentLink.href = this.getAttribute('incident-link');
            } else {
                this._supportLinks.removeChild(incidentLink);
            }

            if (!(this.hasAttribute('request-link') && this.hasAttribute('incident-link'))) {
                this._supportLinks.removeChild(br);
            }

            if (this.hasAttribute('request-link')) {
                requestLink.href = this.getAttribute('request-link');
            } else {
                this._supportLinks.removeChild(requestLink);
            }
        } else {
            this._footer.removeChild(this._supportLinks);
        }

        if (this.hasAttribute('copyright')) {
            this._copyright.textContent = this.getAttribute('copyright');
        } else {
            this._footer.removeChild(this._copyright);
        }

        if (this.hasAttribute('background-image')) {
            const css = '.higgs-background:hover { background-image: url(' + this.getAttribute('background-image') + '); }';
            shadow.querySelector('style').appendChild(document.createTextNode(css));
        }
    }
}

customElements.define('higgs-footer', HiggsFooter);
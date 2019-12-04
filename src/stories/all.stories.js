import '../../dist/higgs.js';
import logoImage from '../../docs/assets/atom.white.svg';
import atomImage from '../../docs/assets/atom.svg';
import homeImage from '../../docs/assets/home.svg';
import homeWhiteImage from '../../docs/assets/home.white.svg';

import { storiesOf } from '@storybook/html';

export default { title: 'All'};

export const fullSpecification = () => `
<style>
    .home {
        background-image: url("${homeImage}");
    }

    .home.active {
        background-image: url("${homeWhiteImage}");
    }
</style>
<higgs-header application-name="Higgs UI" logo-img="${logoImage}"></higgs-header>
<higgs-sidebar>
    <a class="home active">Home</a>
    <a class="sub-menu">What is Higgs UI?</a>
    <a class="sub-menu">Why higgs?</a>
    <a class="sub-menu">How to contribute?</a>
</higgs-sidebar>
<higgs-content>
    <section id="whats-higgs-ui">
        <h1>What is Higgs UI?</h1>
        <p>
            Higgs UI is an implementation of the Higgs Design System. It provides the necessary building blocks to build web applications that are fully compliant with the specification.
        </p>
        <p>
            The current available components are:
        </p>
        <ul>
            <li>higgs-header</li>
            <li>higgs-sidebar</li>
            <li>higgs-content</li>
            <li>higgs-footer</li>
        </ul>
    </section>
    <section id="why-higgs">
        <h1>Why Higgs?</h1>
        <p>The Higgs Framework is a proof of concept developed at CERN for developing web applications with a unified language.</p>
        <p>As it provides the basic elements of a web application, it was named after the higgs boson, confirmed in 2012 using the LHC, which is the particle that is suspected of providing mass to all other particles. Since the goal of the framework is to provide a unified language for all our web applications, it seemed a fitting name.</p>
    </section>
    <section id="how-contribute">
        <h1>How to contribute?</h1>
        <p>While the Higgs UI is an open source project, we currently do not accept external contributions to the project as it isn't developed to a point where we feel it can be useful to others.</p>
    </section>
</higgs-content>
<higgs-footer
    version-number="&alpha; Tech Preview"
    copyright="Made by Afonso Garcia | Iconography from Font Awesome"
    request-link="https://home.cern/"
    incident-link="https://home.cern/"
    background-image="${atomImage}">
</higgs-footer>
`;
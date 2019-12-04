import '../../dist/higgs.js'
import atomImage from '../../docs/assets/atom.svg';

import { storiesOf } from '@storybook/html';

export default { title: 'Higgs Footer'};

export const fullSpecification = () => `
<higgs-footer
    version-number="&alpha; Tech Preview"
    copyright="Made by Afonso Garcia | Iconography from Font Awesome"
    request-link="https://home.cern/"
    incident-link="https://home.cern/"
    background-image="${atomImage}">
</higgs-footer>
`;

export const withImageAndCopyright = () => `
<higgs-footer
    version-number="&alpha; Tech Preview"
    copyright="Made by Afonso Garcia | Iconography from Font Awesome"
    background-image="${atomImage}">
</higgs-footer>
`;

export const withCopyright = () => `
<higgs-footer
    version-number="&alpha; Tech Preview"
    copyright="Made by Afonso Garcia | Iconography from Font Awesome">
</higgs-footer>
`;

export const simple = () => `
<higgs-footer
    version-number="&alpha; Tech Preview">
</higgs-footer>
`;
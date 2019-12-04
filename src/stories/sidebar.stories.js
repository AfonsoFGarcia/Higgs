import '../../dist/higgs.js'
import homeImage from '../../docs/assets/home.svg';
import homeWhiteImage from '../../docs/assets/home.white.svg';

import { storiesOf } from '@storybook/html';

export default { title: 'Higgs Sidebar'};

export const withSubMenu = () => `
<style>
    .home {
        background-image: url("${homeImage}");
    }

    .home.active {
        background-image: url("${homeWhiteImage}");
    }
</style>
<higgs-sidebar>
    <a class="home active">Home</a>
    <a class="sub-menu">What is Higgs UI?</a>
    <a class="sub-menu">Why higgs?</a>
    <a class="sub-menu">How to contribute?</a>
</higgs-sidebar>
`;

export const simple = () => `
<style>
    .home {
        background-image: url("${homeImage}");
    }

    .home.active {
        background-image: url("${homeWhiteImage}");
    }
</style>
<higgs-sidebar>
    <a class="home active">Home</a>
</higgs-sidebar>
`;
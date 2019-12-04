import '../../dist/higgs.js'
import logoImage from '../../docs/assets/atom.white.svg';

import { storiesOf } from '@storybook/html';

export default { title: 'Higgs Header'};

export const withoutLogo = () => '<higgs-header application-name="Higgs UI"></higgs-header>';
export const withLogo = () => '<higgs-header application-name="Higgs UI" logo-img="' + logoImage + '"></higgs-header>';
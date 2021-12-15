import * as React from 'react';
import * as ReactDOM from "react-dom";
import { window } from 'global';

import Condishow from './Condishow';

window.addEventListener('load', () => {
    const mountNode = document.getElementById("__condishow_app");
    ReactDOM.render(<Condishow />, mountNode);
});

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { window } from 'global';

import Condishow from './Condishow';

window.addEventListener('load', () => {
    const mountNode = document.getElementById("__condishow_app");
    const definition = new URL(window.location.href).searchParams.getAll('def');

    ReactDOM.render(<Condishow />, mountNode);
});

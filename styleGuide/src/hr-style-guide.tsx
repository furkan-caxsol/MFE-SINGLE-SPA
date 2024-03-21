
// export {FormGroup} from './Molecules/FormInput';

//Molecules
// export {SearchForm} from './Molecules/InputGroup/FormInput';
// export {default as FormGroup} from './Molecules/InputGroup/FormInput';

//Organisms
// export {default as HigherOrderLayout} from './Templates/Main/Main'

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import Routes from './Routes/Routes'; 
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props) => <Root {...props} routes={Routes} />,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
import React from 'react';
import { render} from 'react-dom';
import { DummyComponent } from '../../src';
const App = () => (
    <DummyComponent />
);
render(<App />, document.getElementById("root"));
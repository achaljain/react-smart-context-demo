import React from 'react';
import { WithContextProvider } from 'smart-context';

import userConfig from './ContextConfig/user';
import postConfig from './ContextConfig/post';

import MyAwesomeComponent from './Components/FunctionComponent';
import ClassComp from './Components/ClassComponent';

import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Context</h1>
      </header>
      <div className="demo">
        <ClassComp />
        <MyAwesomeComponent />
      </div>
    </div>
  );
}

/** Add multiple contexts in App */
export default WithContextProvider(App, [userConfig, postConfig]);

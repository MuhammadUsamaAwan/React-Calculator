import React from 'react';
import { Provider } from './Context';
import Header from './components/Header.component';
import Display from './components/Display.component';
import Keys from './components/Keys.component';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Display />
        <Keys />
      </div>
    </Provider>
  );
}

export default App;

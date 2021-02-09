import React, { useReducer } from 'react';
import CustomHookComponent from './components/customHookComponent';
import TestComponent from './components/genericComponent';
import UseContextComponent from './components/useContextComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseReducerComponent from './components/useReducerComponent';
import UseRefComponent from './components/useRefComponent';
import UseStateComponent from './components/useStateComponent';

function App() {
  return (
    <div>
      <h1>UseEffect</h1>
      <UseStateComponent />
      <h1>UseState</h1>
      <UseEffectComponent />
      <h1>UseContext</h1>
      <UseContextComponent />
      <h1>UseReducer</h1>
      <UseReducerComponent />
      <h1>UseRef</h1>
      <UseRefComponent />
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>Generic Component</h1>
      <TestComponent />
    </div>
  );
}

export default App;

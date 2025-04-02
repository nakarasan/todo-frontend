import React from 'react';
import Task from 'pages/task';
import { Provider } from 'react-redux';
import store from 'store/store';

const App:React.FC =() => {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
}

export default App;

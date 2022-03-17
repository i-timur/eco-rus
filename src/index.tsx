import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.scss';
import App from './App';
import mainStore, {MainStore} from './stores/mainStore';
import ModalConstructor from './components/Modals/ModalConstructor/ModalConstructor';

const StoreContext = createContext<MainStore | null>(null);

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('Did not find any store context');
  }
  return store;
};

ReactDOM.render(
  <Router>
    <StoreContext.Provider value={new MainStore()}>
      <App />
      <ModalConstructor />
    </StoreContext.Provider>
  </Router>,
  document.getElementById('root')
);
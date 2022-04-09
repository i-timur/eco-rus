import {MainStore} from './mainStore';
import {makeAutoObservable} from 'mobx';

export class AuthorizationStore {
  mainStore: MainStore;
  isAuthenticated: boolean;

  constructor(mainStore: MainStore) {
    makeAutoObservable(this);
    this.isAuthenticated = false;
    this.mainStore = mainStore;
  }

  setIsAuthenticated = (value: boolean) => {
    this.isAuthenticated = value;
  };
}

import {makeAutoObservable} from 'mobx';
import {MainStore} from './mainStore';

export class ModalStore {
  currentModal: JSX.Element | null = null;
  mainStore: MainStore;

  constructor(mainStore: MainStore) {
    makeAutoObservable(this);
    this.currentModal = null;
    this.mainStore = mainStore;
  }

  setCurrentModal = (modal : JSX.Element) => {
    this.currentModal = modal;
  }

  clearCurrentModal = () => {
    this.currentModal = null;
  }
}

import {ModalStore} from './modalStore';
import {AuthorizationStore} from './authorizationStore';

export class MainStore {
  modalStore: ModalStore;
  authorizationStore: AuthorizationStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.authorizationStore = new AuthorizationStore(this);
  }
}

const mainStore = new MainStore();

export default mainStore;
import {ModalStore} from './modalStore';
import {AuthorizationStore} from './authorizationStore';
import {UserStore} from './userStore';

export class MainStore {
  modalStore: ModalStore;
  authorizationStore: AuthorizationStore;
  userStore: UserStore;

  constructor() {
    this.modalStore = new ModalStore(this);
    this.authorizationStore = new AuthorizationStore(this);
    this.userStore = new UserStore(this);
  }
}

const mainStore = new MainStore();

export default mainStore;

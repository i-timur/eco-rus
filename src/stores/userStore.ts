import {MainStore} from './mainStore';
import {makeAutoObservable} from 'mobx';
import {UserService} from '../services/userService';
import {UserDto} from '../dtos/UserDto';

export class User {
  balance?: number;

  constructor(
    readonly id: string,
    readonly userName: string,
    readonly role: string
  ) {
    this.id = id;
    this.userName = userName;
    this.role = role;
  }

  getId() {
    return this.id;
  }

  setBalance(value: number) {
    this.balance = value;
  }

  getUserName() {
    return this.userName;
  }

  getBalance() {
    if (this.role === 'USER') {
      return this.balance;
    }
    return 0;
  }

  getRole() {
    return this.role;
  }
}

export class UserStore {
  private mainStore: MainStore;
  private userService;
  private user: User | null = null;
  private state = 'pending';

  constructor(mainStore: MainStore) {
    makeAutoObservable(this);
    this.mainStore = mainStore;
    this.userService = new UserService();
    this.state = 'pending';
    const token = localStorage.getItem('token');
    if (token) {
      if (!mainStore.authorizationStore.isAuthenticated) {
        this.authorize(token);
      }
    }
  }

  getState = () => {
    return this.state;

  };

  authorize = (token: string) => {
    localStorage.setItem('token', token);
    //@ts-ignore
    this.userService.getUser().then(this.setUser, this.logout);
  };

  logout = () => {
    localStorage.removeItem('token');
    this.mainStore.authorizationStore.setIsAuthenticated(false);
    this.setUser(null);
    this.state = 'done';
  };

  setUser = (user: UserDto | null) => {
    if (!user) {
      this.user = null;
      this.state = 'done';
      return;
    }

    this.user = new User(
      user.id,
      user.username,
      user.role.name
    );

    if (user.role.name === 'USER') {
      if (user.balance) {
        this.user.setBalance(user.balance);
      } else {
        this.user.setBalance(0);
      }
    }
    this.mainStore.authorizationStore.setIsAuthenticated(true);
    this.state = 'done';
  };

  getUser = () => {
    return this.user;
  }
}

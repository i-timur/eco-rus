import {getHttpClient} from '../utils/utils';

export class UserService {
  http = getHttpClient();

  async getUser() {
    return await this.http.get('/profile');
  }
}

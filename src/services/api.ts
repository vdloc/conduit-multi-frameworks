import { ArticleApi } from './articleApi';
import { AuthApi } from './authApi';
import { ProfileApi } from './profileApi';
import { TagApi } from './tagApi';
import { UserApi } from './userApi';

class API {
  public article: ArticleApi;
  public auth: AuthApi;
  public profile: ProfileApi;
  public tag: TagApi;
  public user: UserApi;
  constructor() {
    this.article = new ArticleApi();
    this.auth = new AuthApi();
    this.profile = new ProfileApi();
    this.tag = new TagApi();
    this.user = new UserApi();
  }
}

const Api = new API();
export default Api;

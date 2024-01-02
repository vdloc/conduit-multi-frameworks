import { ArticleApi } from '@services/articleApi';
import { AuthApi } from '@services/authApi';
import { ProfileApi } from '@services/profileApi';
import { TagApi } from '@services/tagApi';
import { UserApi } from '@services/userApi';

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


import { Observable } from 'rxjs';
import { FullUseraaaaaaaaaaaaaa } from '../../src/viewModels/fullUseraaaaaaaaaaaaaa';
import { Pagingaaaaaaaaaaaaaa } from '../../src/viewModels/pagingaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../src/viewModels/useraaaaaaaaaaaaaa';
import { SignInaaaaaaaaaaaaaa } from '../../src/viewModels/signInaaaaaaaaaaaaaa';
import { ResetPasswordaaaaaaaaaaaaaa } from '../../src/viewModels/resetPasswordaaaaaaaaaaaaaa';
export class UserAAAAAMock {
    public getFullInfos(
        userProfileIdParam: string
    ): Observable<FullUseraaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public list(
        pagingParam: Pagingaaaaaaaaaaaaaa
    ): Observable<Useraaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public update(
        userParam: Useraaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public signIn(
        signInParam: SignInaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public checkEmail(
        emailParam: string
    ): Observable<any> {
      return Observable.of();
    }

    public resetPassword(
        resetPasswordParam: ResetPasswordaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public get(
        applicationUserIdParam: string
    ): Observable<Useraaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public searchUser(
        searchTermParam: string
    ): Observable<Useraaaaaaaaaaaaaa> {
      return Observable.of();
    }

}

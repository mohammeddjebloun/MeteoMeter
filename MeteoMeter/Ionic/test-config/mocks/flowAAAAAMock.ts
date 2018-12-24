
import { Observable } from 'rxjs';
import { Pagingaaaaaaaaaaaaaa } from '../../src/viewModels/pagingaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../../src/viewModels/cardaaaaaaaaaaaaaa';
import { UserViewCardaaaaaaaaaaaaaa } from '../../src/viewModels/userViewCardaaaaaaaaaaaaaa';
export class FlowAAAAAMock {
    public list(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        userProfileIdParam: number
    ): Observable<Cardaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public addView(
        userViewCardParam: UserViewCardaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

}

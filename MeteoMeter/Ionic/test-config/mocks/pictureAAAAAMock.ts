
import { Observable } from 'rxjs';
import { Pictureaaaaaaaaaaaaaa } from '../../src/viewModels/pictureaaaaaaaaaaaaaa';
export class PictureAAAAAMock {
    public get(
        pictureIdParam: number
    ): Observable<Pictureaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public create(
        pictureParam: Pictureaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

}

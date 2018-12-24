
import { Observable } from 'rxjs';
import { Answeraaaaaaaaaaaaaa } from '../../src/viewModels/answeraaaaaaaaaaaaaa';
import { Discardaaaaaaaaaaaaaa } from '../../src/viewModels/discardaaaaaaaaaaaaaa';
export class AnswerAAAAAMock {
    public create(
        answerParam: Answeraaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public discard(
        discardParam: Discardaaaaaaaaaaaaaa
    ): Observable<any> {
      return Observable.of();
    }

    public answeredCard(
        cardIdParam: number,
        userProfileIdParam: number
    ): Observable<any> {
      return Observable.of();
    }

}

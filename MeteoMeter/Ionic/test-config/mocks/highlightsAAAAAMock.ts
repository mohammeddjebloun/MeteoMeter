
import { Observable } from 'rxjs';
import { TopPostaaaaaaaaaaaaaa } from '../../src/viewModels/topPostaaaaaaaaaaaaaa';
import { BestContributoraaaaaaaaaaaaaa } from '../../src/viewModels/bestContributoraaaaaaaaaaaaaa';
import { Reportaaaaaaaaaaaaaa } from '../../src/viewModels/reportaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../../src/viewModels/cardaaaaaaaaaaaaaa';
export class HighlightsAAAAAMock {
    public getTopPosts(
    ): Observable<TopPostaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public getBestContributor(
    ): Observable<BestContributoraaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public getBestPost(
    ): Observable<Reportaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public reloadCard(
        cardIdParam: number
    ): Observable<Cardaaaaaaaaaaaaaa> {
      return Observable.of();
    }

}


import { Observable } from 'rxjs';
import { Pagingaaaaaaaaaaaaaa } from '../../src/viewModels/pagingaaaaaaaaaaaaaa';
import { Postaaaaaaaaaaaaaa } from '../../src/viewModels/postaaaaaaaaaaaaaa';
import { PostDetailsaaaaaaaaaaaaaa } from '../../src/viewModels/postDetailsaaaaaaaaaaaaaa';
import { TopPostaaaaaaaaaaaaaa } from '../../src/viewModels/topPostaaaaaaaaaaaaaa';
export class PostsAAAAAMock {
    public getLatestPosts(
        pagingParam: Pagingaaaaaaaaaaaaaa,
        userProfileIdParam: number
    ): Observable<Postaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public getPostDetails(
        postIdParam: number
    ): Observable<PostDetailsaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public getTopPosts(
        userProfileIdParam: number
    ): Observable<TopPostaaaaaaaaaaaaaa> {
      return Observable.of();
    }

    public get(
        postIdParam: string
    ): Observable<Postaaaaaaaaaaaaaa> {
      return Observable.of();
    }

}

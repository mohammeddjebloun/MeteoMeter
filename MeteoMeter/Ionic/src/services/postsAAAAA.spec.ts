
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { PostsAAAAA } from './postsAAAAA.service';
import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { Postaaaaaaaaaaaaaa } from '../viewModels/postaaaaaaaaaaaaaa';
import { PostDetailsaaaaaaaaaaaaaa } from '../viewModels/postDetailsaaaaaaaaaaaaaa';
import { TopPostaaaaaaaaaaaaaa } from '../viewModels/topPostaaaaaaaaaaaaaa';

describe('PostsAAAAA service', () => {
  let postsAAAAASpy: PostsAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostsAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    postsAAAAASpy = TestBed.get(PostsAAAAA);
  });
  it('PostsAAAAA service: should getLatestPosts', fakeAsync(() => {
    const getLatestPostsApi = '/api/posts/getLatestPosts';
    spy = spyOn(postsAAAAASpy, 'getLatestPosts').and.callThrough();
    postsAAAAASpy.getLatestPosts(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null,
      0
    );
    spy = spyOn(postsAAAAASpy._dataService, 'get').and.callThrough();
    postsAAAAASpy.getLatestPosts(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getLatestPostsApi}`,
      {
      paging: JSON.stringify(null),
      userProfileId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostsAAAAA service: should getPostDetails', fakeAsync(() => {
    const getPostDetailsApi = '/api/posts/getPostDetails';
    spy = spyOn(postsAAAAASpy, 'getPostDetails').and.callThrough();
    postsAAAAASpy.getPostDetails(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(postsAAAAASpy._dataService, 'get').and.callThrough();
    postsAAAAASpy.getPostDetails(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getPostDetailsApi}`,
      {
      postId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostsAAAAA service: should getTopPosts', fakeAsync(() => {
    const getTopPostsApi = '/api/posts/getTopPosts';
    spy = spyOn(postsAAAAASpy, 'getTopPosts').and.callThrough();
    postsAAAAASpy.getTopPosts(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(postsAAAAASpy._dataService, 'get').and.callThrough();
    postsAAAAASpy.getTopPosts(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getTopPostsApi}`,
      {
      userProfileId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostsAAAAA service: should get', fakeAsync(() => {
    const getApi = '/api/posts/get';
    spy = spyOn(postsAAAAASpy, 'get').and.callThrough();
    postsAAAAASpy.get(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(postsAAAAASpy._dataService, 'get').and.callThrough();
    postsAAAAASpy.get(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      postId: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

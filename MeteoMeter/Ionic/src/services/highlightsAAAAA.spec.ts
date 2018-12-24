
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { HighlightsAAAAA } from './highlightsAAAAA.service';
import { TopPostaaaaaaaaaaaaaa } from '../viewModels/topPostaaaaaaaaaaaaaa';
import { BestContributoraaaaaaaaaaaaaa } from '../viewModels/bestContributoraaaaaaaaaaaaaa';
import { Reportaaaaaaaaaaaaaa } from '../viewModels/reportaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../viewModels/cardaaaaaaaaaaaaaa';

describe('HighlightsAAAAA service', () => {
  let highlightsAAAAASpy: HighlightsAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HighlightsAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    highlightsAAAAASpy = TestBed.get(HighlightsAAAAA);
  });
  it('HighlightsAAAAA service: should getTopPosts', fakeAsync(() => {
    const getTopPostsApi = '/api/highlights/getTopPosts';
    spy = spyOn(highlightsAAAAASpy, 'getTopPosts').and.callThrough();
    highlightsAAAAASpy.getTopPosts(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(highlightsAAAAASpy._dataService, 'get').and.callThrough();
    highlightsAAAAASpy.getTopPosts(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getTopPostsApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('HighlightsAAAAA service: should getBestContributor', fakeAsync(() => {
    const getBestContributorApi = '/api/highlights/getBestContributor';
    spy = spyOn(highlightsAAAAASpy, 'getBestContributor').and.callThrough();
    highlightsAAAAASpy.getBestContributor(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(highlightsAAAAASpy._dataService, 'get').and.callThrough();
    highlightsAAAAASpy.getBestContributor(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getBestContributorApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('HighlightsAAAAA service: should getBestPost', fakeAsync(() => {
    const getBestPostApi = '/api/highlights/getBestPost';
    spy = spyOn(highlightsAAAAASpy, 'getBestPost').and.callThrough();
    highlightsAAAAASpy.getBestPost(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(highlightsAAAAASpy._dataService, 'get').and.callThrough();
    highlightsAAAAASpy.getBestPost(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getBestPostApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('HighlightsAAAAA service: should reloadCard', fakeAsync(() => {
    const reloadCardApi = '/api/highlights/reloadCard';
    spy = spyOn(highlightsAAAAASpy, 'reloadCard').and.callThrough();
    highlightsAAAAASpy.reloadCard(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(highlightsAAAAASpy._dataService, 'get').and.callThrough();
    highlightsAAAAASpy.reloadCard(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${reloadCardApi}`,
      {
      cardId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

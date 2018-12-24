
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { AnswerAAAAA } from './answerAAAAA.service';
import { Answeraaaaaaaaaaaaaa } from '../viewModels/answeraaaaaaaaaaaaaa';
import { Discardaaaaaaaaaaaaaa } from '../viewModels/discardaaaaaaaaaaaaaa';

describe('AnswerAAAAA service', () => {
  let answerAAAAASpy: AnswerAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AnswerAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    answerAAAAASpy = TestBed.get(AnswerAAAAA);
  });
  it('AnswerAAAAA service: should create', fakeAsync(() => {
    const createApi = '/api/answer/create';
    spy = spyOn(answerAAAAASpy, 'create').and.callThrough();
    answerAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(answerAAAAASpy._dataService, 'post').and.callThrough();
    answerAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      answer: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('AnswerAAAAA service: should discard', fakeAsync(() => {
    const discardApi = '/api/answer/discard';
    spy = spyOn(answerAAAAASpy, 'discard').and.callThrough();
    answerAAAAASpy.discard(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(answerAAAAASpy._dataService, 'post').and.callThrough();
    answerAAAAASpy.discard(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${discardApi}`,
      {
      discard: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('AnswerAAAAA service: should answeredCard', fakeAsync(() => {
    const answeredCardApi = '/api/answer/answeredCard';
    spy = spyOn(answerAAAAASpy, 'answeredCard').and.callThrough();
    answerAAAAASpy.answeredCard(
      0,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0,
      0
    );
    spy = spyOn(answerAAAAASpy._dataService, 'get').and.callThrough();
    answerAAAAASpy.answeredCard(
      0,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${answeredCardApi}`,
      {
      cardId: JSON.stringify(0),
      userProfileId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

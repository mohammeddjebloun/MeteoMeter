
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { FlowAAAAA } from './flowAAAAA.service';
import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../viewModels/cardaaaaaaaaaaaaaa';
import { UserViewCardaaaaaaaaaaaaaa } from '../viewModels/userViewCardaaaaaaaaaaaaaa';

describe('FlowAAAAA service', () => {
  let flowAAAAASpy: FlowAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlowAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    flowAAAAASpy = TestBed.get(FlowAAAAA);
  });
  it('FlowAAAAA service: should list', fakeAsync(() => {
    const listApi = '/api/flow/list';
    spy = spyOn(flowAAAAASpy, 'list').and.callThrough();
    flowAAAAASpy.list(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null,
      0
    );
    spy = spyOn(flowAAAAASpy._dataService, 'get').and.callThrough();
    flowAAAAASpy.list(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listApi}`,
      {
      paging: JSON.stringify(null),
      userProfileId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('FlowAAAAA service: should addView', fakeAsync(() => {
    const addViewApi = '/api/flow/addView';
    spy = spyOn(flowAAAAASpy, 'addView').and.callThrough();
    flowAAAAASpy.addView(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(flowAAAAASpy._dataService, 'put').and.callThrough();
    flowAAAAASpy.addView(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${addViewApi}`,
      {
      userViewCard: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

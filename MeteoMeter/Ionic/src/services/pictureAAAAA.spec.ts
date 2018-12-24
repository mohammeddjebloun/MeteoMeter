
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { PictureAAAAA } from './pictureAAAAA.service';
import { Pictureaaaaaaaaaaaaaa } from '../viewModels/pictureaaaaaaaaaaaaaa';

describe('PictureAAAAA service', () => {
  let pictureAAAAASpy: PictureAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PictureAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    pictureAAAAASpy = TestBed.get(PictureAAAAA);
  });
  it('PictureAAAAA service: should get', fakeAsync(() => {
    const getApi = '/api/picture/get';
    spy = spyOn(pictureAAAAASpy, 'get').and.callThrough();
    pictureAAAAASpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(pictureAAAAASpy._dataService, 'get').and.callThrough();
    pictureAAAAASpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      pictureId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PictureAAAAA service: should create', fakeAsync(() => {
    const createApi = '/api/picture/create';
    spy = spyOn(pictureAAAAASpy, 'create').and.callThrough();
    pictureAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(pictureAAAAASpy._dataService, 'post').and.callThrough();
    pictureAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      picture: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

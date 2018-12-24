
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { NotificationsAAAAA } from './notificationsAAAAA.service';
import { TagRegisteraaaaaaaaaaaaaa } from '../viewModels/tagRegisteraaaaaaaaaaaaaa';

describe('NotificationsAAAAA service', () => {
  let notificationsAAAAASpy: NotificationsAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationsAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    notificationsAAAAASpy = TestBed.get(NotificationsAAAAA);
  });
  it('NotificationsAAAAA service: should registerTags', fakeAsync(() => {
    const registerTagsApi = '/api/notifications/registerTags';
    spy = spyOn(notificationsAAAAASpy, 'registerTags').and.callThrough();
    notificationsAAAAASpy.registerTags(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(notificationsAAAAASpy._dataService, 'post').and.callThrough();
    notificationsAAAAASpy.registerTags(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${registerTagsApi}`,
      {
      tagRegister: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('NotificationsAAAAA service: should unsubscribe', fakeAsync(() => {
    const unsubscribeApi = '/api/notifications/unsubscribe';
    spy = spyOn(notificationsAAAAASpy, 'unsubscribe').and.callThrough();
    notificationsAAAAASpy.unsubscribe(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(notificationsAAAAASpy._dataService, 'put').and.callThrough();
    notificationsAAAAASpy.unsubscribe(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${unsubscribeApi}`,
      {
      installationId: 'test'
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('NotificationsAAAAA service: should notifyForResult', fakeAsync(() => {
    const notifyForResultApi = '/api/notifications/registerForResults';
    spy = spyOn(notificationsAAAAASpy, 'notifyForResult').and.callThrough();
    notificationsAAAAASpy.notifyForResult(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(notificationsAAAAASpy._dataService, 'get').and.callThrough();
    notificationsAAAAASpy.notifyForResult(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${notifyForResultApi}`,
      {
      userId: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});


import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { UserAAAAA } from './userAAAAA.service';
import { FullUseraaaaaaaaaaaaaa } from '../viewModels/fullUseraaaaaaaaaaaaaa';
import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../viewModels/useraaaaaaaaaaaaaa';
import { SignInaaaaaaaaaaaaaa } from '../viewModels/signInaaaaaaaaaaaaaa';
import { ResetPasswordaaaaaaaaaaaaaa } from '../viewModels/resetPasswordaaaaaaaaaaaaaa';

describe('UserAAAAA service', () => {
  let userAAAAASpy: UserAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    userAAAAASpy = TestBed.get(UserAAAAA);
  });
  it('UserAAAAA service: should getFullInfos', fakeAsync(() => {
    const getFullInfosApi = '/api/user/getFullInfos';
    spy = spyOn(userAAAAASpy, 'getFullInfos').and.callThrough();
    userAAAAASpy.getFullInfos(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(userAAAAASpy._dataService, 'get').and.callThrough();
    userAAAAASpy.getFullInfos(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getFullInfosApi}`,
      {
      userProfileId: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should list', fakeAsync(() => {
    const listApi = '/api/user/list';
    spy = spyOn(userAAAAASpy, 'list').and.callThrough();
    userAAAAASpy.list(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAAAAASpy._dataService, 'get').and.callThrough();
    userAAAAASpy.list(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listApi}`,
      {
      paging: JSON.stringify(null)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should update', fakeAsync(() => {
    const updateApi = '/api/user/update';
    spy = spyOn(userAAAAASpy, 'update').and.callThrough();
    userAAAAASpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAAAAASpy._dataService, 'put').and.callThrough();
    userAAAAASpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      user: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should signIn', fakeAsync(() => {
    const signInApi = '/api/user/signIn';
    spy = spyOn(userAAAAASpy, 'signIn').and.callThrough();
    userAAAAASpy.signIn(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAAAAASpy._dataService, 'get').and.callThrough();
    userAAAAASpy.signIn(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${signInApi}`,
      {
      signIn: JSON.stringify(null)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should checkEmail', fakeAsync(() => {
    const checkEmailApi = '/api/user/checkEmail';
    spy = spyOn(userAAAAASpy, 'checkEmail').and.callThrough();
    userAAAAASpy.checkEmail(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(userAAAAASpy._dataService, 'get').and.callThrough();
    userAAAAASpy.checkEmail(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${checkEmailApi}`,
      {
      email: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should resetPassword', fakeAsync(() => {
    const resetPasswordApi = '/api/user/resetPassword';
    spy = spyOn(userAAAAASpy, 'resetPassword').and.callThrough();
    userAAAAASpy.resetPassword(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAAAAASpy._dataService, 'put').and.callThrough();
    userAAAAASpy.resetPassword(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${resetPasswordApi}`,
      {
      resetPassword: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should get', fakeAsync(() => {
    const getApi = '/api/user/get';
    spy = spyOn(userAAAAASpy, 'get').and.callThrough();
    userAAAAASpy.get(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(userAAAAASpy._dataService, 'get').and.callThrough();
    userAAAAASpy.get(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      applicationUserId: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAAAAA service: should searchUser', fakeAsync(() => {
    const searchUserApi = '/api/user/searchUser';
    spy = spyOn(userAAAAASpy, 'searchUser').and.callThrough();
    userAAAAASpy.searchUser(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(userAAAAASpy._dataService, 'get').and.callThrough();
    userAAAAASpy.searchUser(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${searchUserApi}`,
      {
      searchTerm: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

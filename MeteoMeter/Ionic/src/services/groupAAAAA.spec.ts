
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { GroupAAAAA } from './groupAAAAA.service';
import { CreateGroupaaaaaaaaaaaaaa } from '../viewModels/createGroupaaaaaaaaaaaaaa';
import { EditGroupaaaaaaaaaaaaaa } from '../viewModels/editGroupaaaaaaaaaaaaaa';
import { Groupaaaaaaaaaaaaaa } from '../viewModels/groupaaaaaaaaaaaaaa';
import { Pagingaaaaaaaaaaaaaa } from '../viewModels/pagingaaaaaaaaaaaaaa';
import { TargetGroupaaaaaaaaaaaaaa } from '../viewModels/targetGroupaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../viewModels/useraaaaaaaaaaaaaa';
import { UpdateMembersaaaaaaaaaaaaaa } from '../viewModels/updateMembersaaaaaaaaaaaaaa';

describe('GroupAAAAA service', () => {
  let groupAAAAASpy: GroupAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    groupAAAAASpy = TestBed.get(GroupAAAAA);
  });
  it('GroupAAAAA service: should create', fakeAsync(() => {
    const createApi = '/api/group/create';
    spy = spyOn(groupAAAAASpy, 'create').and.callThrough();
    groupAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(groupAAAAASpy._dataService, 'post').and.callThrough();
    groupAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      group: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should delete', fakeAsync(() => {
    const deleteApi = '/api/group/delete';
    spy = spyOn(groupAAAAASpy, 'delete').and.callThrough();
    groupAAAAASpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(groupAAAAASpy._dataService, 'delete').and.callThrough();
    groupAAAAASpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${deleteApi}`,
      {
      groupId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should update', fakeAsync(() => {
    const updateApi = '/api/group/update';
    spy = spyOn(groupAAAAASpy, 'update').and.callThrough();
    groupAAAAASpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(groupAAAAASpy._dataService, 'put').and.callThrough();
    groupAAAAASpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      group: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should get', fakeAsync(() => {
    const getApi = '/api/group/get';
    spy = spyOn(groupAAAAASpy, 'get').and.callThrough();
    groupAAAAASpy.get(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(groupAAAAASpy._dataService, 'get').and.callThrough();
    groupAAAAASpy.get(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      groupId: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should list', fakeAsync(() => {
    const listApi = '/api/group/list';
    spy = spyOn(groupAAAAASpy, 'list').and.callThrough();
    groupAAAAASpy.list(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null,
      0
    );
    spy = spyOn(groupAAAAASpy._dataService, 'get').and.callThrough();
    groupAAAAASpy.list(
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

  it('GroupAAAAA service: should listTargetableGroups', fakeAsync(() => {
    const listTargetableGroupsApi = '/api/group/listTargetableGroups';
    spy = spyOn(groupAAAAASpy, 'listTargetableGroups').and.callThrough();
    groupAAAAASpy.listTargetableGroups(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      'test'
    );
    spy = spyOn(groupAAAAASpy._dataService, 'get').and.callThrough();
    groupAAAAASpy.listTargetableGroups(
      'test'
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listTargetableGroupsApi}`,
      {
      userProfileId: JSON.stringify('test')
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should getMembers', fakeAsync(() => {
    const getMembersApi = '/api/group/getMembers';
    spy = spyOn(groupAAAAASpy, 'getMembers').and.callThrough();
    groupAAAAASpy.getMembers(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null,
      0
    );
    spy = spyOn(groupAAAAASpy._dataService, 'get').and.callThrough();
    groupAAAAASpy.getMembers(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getMembersApi}`,
      {
      paging: JSON.stringify(null),
      groupId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should updateMembers', fakeAsync(() => {
    const updateMembersApi = '/api/group/updateMembers';
    spy = spyOn(groupAAAAASpy, 'updateMembers').and.callThrough();
    groupAAAAASpy.updateMembers(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(groupAAAAASpy._dataService, 'put').and.callThrough();
    groupAAAAASpy.updateMembers(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateMembersApi}`,
      {
      membersList: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAAAAA service: should removeMember', fakeAsync(() => {
    const removeMemberApi = '/api/group/removeMember';
    spy = spyOn(groupAAAAASpy, 'removeMember').and.callThrough();
    groupAAAAASpy.removeMember(
      0,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0,
      0
    );
    spy = spyOn(groupAAAAASpy._dataService, 'put').and.callThrough();
    groupAAAAASpy.removeMember(
      0,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${removeMemberApi}`,
      {
      userProfileId: 0,
      groupId: 0
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});


import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { IdeaAAAAA } from './ideaAAAAA.service';
import { CreateIdeaaaaaaaaaaaaaaa } from '../viewModels/createIdeaaaaaaaaaaaaaaa';
import { EditableIdeaaaaaaaaaaaaaaa } from '../viewModels/editableIdeaaaaaaaaaaaaaaa';
import { EditIdeaaaaaaaaaaaaaaa } from '../viewModels/editIdeaaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../viewModels/pictureaaaaaaaaaaaaaa';

describe('IdeaAAAAA service', () => {
  let ideaAAAAASpy: IdeaAAAAA;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IdeaAAAAA,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    ideaAAAAASpy = TestBed.get(IdeaAAAAA);
  });
  it('IdeaAAAAA service: should create', fakeAsync(() => {
    const createApi = '/api/idea/create';
    spy = spyOn(ideaAAAAASpy, 'create').and.callThrough();
    ideaAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(ideaAAAAASpy._dataService, 'post').and.callThrough();
    ideaAAAAASpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      idea: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('IdeaAAAAA service: should getEditableIdea', fakeAsync(() => {
    const getEditableIdeaApi = '/api/idea/getEditableIdea';
    spy = spyOn(ideaAAAAASpy, 'getEditableIdea').and.callThrough();
    ideaAAAAASpy.getEditableIdea(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(ideaAAAAASpy._dataService, 'get').and.callThrough();
    ideaAAAAASpy.getEditableIdea(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getEditableIdeaApi}`,
      {
      ideaId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('IdeaAAAAA service: should update', fakeAsync(() => {
    const updateApi = '/api/idea/update';
    spy = spyOn(ideaAAAAASpy, 'update').and.callThrough();
    ideaAAAAASpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(ideaAAAAASpy._dataService, 'put').and.callThrough();
    ideaAAAAASpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      idea: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('IdeaAAAAA service: should delete', fakeAsync(() => {
    const deleteApi = '/api/idea/delete';
    spy = spyOn(ideaAAAAASpy, 'delete').and.callThrough();
    ideaAAAAASpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(ideaAAAAASpy._dataService, 'delete').and.callThrough();
    ideaAAAAASpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${deleteApi}`,
      {
      ideaId: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('IdeaAAAAA service: should getDefaultPicture', fakeAsync(() => {
    const getDefaultPictureApi = '/api/idea/getDefaultPicture';
    spy = spyOn(ideaAAAAASpy, 'getDefaultPicture').and.callThrough();
    ideaAAAAASpy.getDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(ideaAAAAASpy._dataService, 'get').and.callThrough();
    ideaAAAAASpy.getDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getDefaultPictureApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});

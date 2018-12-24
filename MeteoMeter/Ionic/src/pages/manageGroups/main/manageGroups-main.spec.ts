
import { IonicModule, NavController, Platform } from 'ionic-angular';
import { NavMock } from '../../../../test-config/mocks/navMock';
import { PlatformMock } from '../../../../test-config/mocks/platformMock';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenMock } from '../../../../test-config/mocks/splashScreenMock';
import { StatusBar } from '@ionic-native/status-bar';
import { StatusBarMock } from '../../../../test-config/mocks/statusBarMock';
import { Title } from '@angular/platform-browser';
import { TitleMock } from '../../../../test-config/mocks/titleMock';
import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '../../../../test-config/mocks/translateServiceMock';
import { LanguagePageModule } from '../../language/language.module';
import { LanguagePage } from '../../language/language';
import { MeteoMeter } from '../../../app/app.component';
import { ManageGroupsMain } from "./manageGroups-main";
import { Pagingaaaaaaaaaaaaaa } from '../../../viewModels/pagingaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../../../viewModels/cardaaaaaaaaaaaaaa';
import { Groupaaaaaaaaaaaaaa } from '../../../viewModels/groupaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { GroupAAAAA } from '../../../services/groupAAAAA.service';
import { GroupAAAAAMock } from '../../../../test-config/mocks/groupAAAAAMock';
describe('ManageGroupsMain Component', () => {
  let fixture: ComponentFixture<ManageGroupsMain>;
  let component: ManageGroupsMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        ManageGroupsMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: GroupAAAAA, useClass: GroupAAAAAMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: NavController, useClass: NavMock },
        { provide: Title, useClass: TitleMock },
      ]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(ManageGroupsMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('ManageGroupsMain Component: should be created', fakeAsync(() => {
    expect(component instanceof ManageGroupsMain).toBeTruthy();
  }));

  it('ManageGroupsMain Component: should navigate to language page', fakeAsync(() => {
    spy = spyOn(component, 'onLanguage').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(LanguagePage);
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));
  it('ManageGroupsMain Component - onPresentOptionsMenu: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPresentOptionsMenu').and.callThrough();
    component.onPresentOptionsMenu();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsMain Component - onGetGroups: should use groupAAAAA service to GetGroups', fakeAsync(() => {
    var paging = null;
    var userProfileId = 0;
    spy = spyOn(component, 'onGetGroups').and.callThrough();
    component.onGetGroups(
    paging,
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    paging,
    userProfileId
    );
    spy = spyOn(component._groupAAAAA, 'list').and.callThrough();
    component.onGetGroups(
    paging,
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    paging,
    userProfileId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsMain Component - onShowCreateGroupModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowCreateGroupModal').and.callThrough();
    component.onShowCreateGroupModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsMain Component - onConfirmDelete: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onConfirmDelete').and.callThrough();
    component.onConfirmDelete();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsMain Component - onDelete: should use groupAAAAA service to Delete', fakeAsync(() => {
    var groupId = 0;
    spy = spyOn(component, 'onDelete').and.callThrough();
    component.onDelete(
    groupId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    groupId
    );
    spy = spyOn(component._groupAAAAA, 'delete').and.callThrough();
    component.onDelete(
    groupId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    groupId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsMain Component - onShowEditGroupModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowEditGroupModal').and.callThrough();
    component.onShowEditGroupModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsMain Component - onConfirmLeave: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onConfirmLeave').and.callThrough();
    component.onConfirmLeave();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsMain Component - onLeave: should use groupAAAAA service to Leave', fakeAsync(() => {
    var userProfileId = 0;
    var groupId = 0;
    spy = spyOn(component, 'onLeave').and.callThrough();
    component.onLeave(
    userProfileId,
    groupId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userProfileId,
    groupId
    );
    spy = spyOn(component._groupAAAAA, 'removeMember').and.callThrough();
    component.onLeave(
    userProfileId,
    groupId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userProfileId,
    groupId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsMain Component - onToGroupDetails: should navigate to manageGroups-groupDetails page', fakeAsync(() => {
    spy = spyOn(component, 'onToGroupDetails').and.callThrough();
    component.onToGroupDetails();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToGroupDetails();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('manageGroups-groupDetails');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});

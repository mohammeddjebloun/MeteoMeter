
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
import { PostsMain } from "./posts-main";
import { Groupaaaaaaaaaaaaaa } from '../../../viewModels/groupaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { Postaaaaaaaaaaaaaa } from '../../../viewModels/postaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { PostsAAAAA } from '../../../services/postsAAAAA.service';
import { PostsAAAAAMock } from '../../../../test-config/mocks/postsAAAAAMock';
describe('PostsMain Component', () => {
  let fixture: ComponentFixture<PostsMain>;
  let component: PostsMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        PostsMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: PostsAAAAA, useClass: PostsAAAAAMock },
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
    fixture = TestBed.createComponent(PostsMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('PostsMain Component: should be created', fakeAsync(() => {
    expect(component instanceof PostsMain).toBeTruthy();
  }));

  it('PostsMain Component: should navigate to language page', fakeAsync(() => {
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
  it('PostsMain Component - onConfirmDelete: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onConfirmDelete').and.callThrough();
    component.onConfirmDelete();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsMain Component - onToChooseNewPostCategory: should navigate to posts-chooseNewPostCategory page', fakeAsync(() => {
    spy = spyOn(component, 'onToChooseNewPostCategory').and.callThrough();
    component.onToChooseNewPostCategory();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToChooseNewPostCategory();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-chooseNewPostCategory');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('PostsMain Component - onGetLatestPosts: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onGetLatestPosts').and.callThrough();
    component.onGetLatestPosts();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsMain Component - onDelete: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onDelete').and.callThrough();
    component.onDelete();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsMain Component - onUpdateList: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onUpdateList').and.callThrough();
    component.onUpdateList();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsMain Component - onRefreshPost: should use postsAAAAA service to RefreshPost', fakeAsync(() => {
    var postId = 'test';
    spy = spyOn(component, 'onRefreshPost').and.callThrough();
    component.onRefreshPost(
    postId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    postId
    );
    spy = spyOn(component._postsAAAAA, 'get').and.callThrough();
    component.onRefreshPost(
    postId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    postId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('PostsMain Component - onPresentOptionsMenu: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPresentOptionsMenu').and.callThrough();
    component.onPresentOptionsMenu();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsMain Component - onShowEditPostModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowEditPostModal').and.callThrough();
    component.onShowEditPostModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsMain Component - onShowPostDetailsModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowPostDetailsModal').and.callThrough();
    component.onShowPostDetailsModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});

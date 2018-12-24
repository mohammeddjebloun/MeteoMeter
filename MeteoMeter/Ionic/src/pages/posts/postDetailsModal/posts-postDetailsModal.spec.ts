
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
import { PostsPostDetailsModal } from "./posts-postDetailsModal";
import { PostDetailsaaaaaaaaaaaaaa } from '../../../viewModels/postDetailsaaaaaaaaaaaaaa';
import { PostsAAAAA } from '../../../services/postsAAAAA.service';
import { PostsAAAAAMock } from '../../../../test-config/mocks/postsAAAAAMock';
import { IdeaAAAAA } from '../../../services/ideaAAAAA.service';
import { IdeaAAAAAMock } from '../../../../test-config/mocks/ideaAAAAAMock';
describe('PostsPostDetailsModal Component', () => {
  let fixture: ComponentFixture<PostsPostDetailsModal>;
  let component: PostsPostDetailsModal;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        PostsPostDetailsModal
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: PostsAAAAA, useClass: PostsAAAAAMock },
        { provide: IdeaAAAAA, useClass: IdeaAAAAAMock },
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
    fixture = TestBed.createComponent(PostsPostDetailsModal);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('PostsPostDetailsModal Component: should be created', fakeAsync(() => {
    expect(component instanceof PostsPostDetailsModal).toBeTruthy();
  }));

  it('PostsPostDetailsModal Component: should navigate to language page', fakeAsync(() => {
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
  it('PostsPostDetailsModal Component - onShowEditPostModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowEditPostModal').and.callThrough();
    component.onShowEditPostModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsPostDetailsModal Component - onGetPostDetails: should use postsAAAAA service to GetPostDetails', fakeAsync(() => {
    var postId = 0;
    spy = spyOn(component, 'onGetPostDetails').and.callThrough();
    component.onGetPostDetails(
    postId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    postId
    );
    spy = spyOn(component._postsAAAAA, 'getPostDetails').and.callThrough();
    component.onGetPostDetails(
    postId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    postId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('PostsPostDetailsModal Component - onDelete: should use ideaAAAAA service to Delete', fakeAsync(() => {
    var ideaId = 0;
    spy = spyOn(component, 'onDelete').and.callThrough();
    component.onDelete(
    ideaId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    ideaId
    );
    spy = spyOn(component._ideaAAAAA, 'delete').and.callThrough();
    component.onDelete(
    ideaId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    ideaId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('PostsPostDetailsModal Component - onPresentOptionsMenu: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPresentOptionsMenu').and.callThrough();
    component.onPresentOptionsMenu();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsPostDetailsModal Component - onConfirmDelete: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onConfirmDelete').and.callThrough();
    component.onConfirmDelete();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsPostDetailsModal Component - onCloseModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCloseModal').and.callThrough();
    component.onCloseModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});

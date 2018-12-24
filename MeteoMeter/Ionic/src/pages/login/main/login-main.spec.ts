
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
import { LoginMain } from "./login-main";
import { Groupaaaaaaaaaaaaaa } from '../../../viewModels/groupaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { Postaaaaaaaaaaaaaa } from '../../../viewModels/postaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { UserAAAAA } from '../../../services/userAAAAA.service';
import { UserAAAAAMock } from '../../../../test-config/mocks/userAAAAAMock';
describe('LoginMain Component', () => {
  let fixture: ComponentFixture<LoginMain>;
  let component: LoginMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        LoginMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: UserAAAAA, useClass: UserAAAAAMock },
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
    fixture = TestBed.createComponent(LoginMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('LoginMain Component: should be created', fakeAsync(() => {
    expect(component instanceof LoginMain).toBeTruthy();
  }));

  it('LoginMain Component: should navigate to language page', fakeAsync(() => {
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
  it('LoginMain Component - onLogin: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onLogin').and.callThrough();
    component.onLogin();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('LoginMain Component - onGetIdUser: should use userAAAAA service to GetIdUser', fakeAsync(() => {
    var applicationUserId = 'test';
    spy = spyOn(component, 'onGetIdUser').and.callThrough();
    component.onGetIdUser(
    applicationUserId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    applicationUserId
    );
    spy = spyOn(component._userAAAAA, 'get').and.callThrough();
    component.onGetIdUser(
    applicationUserId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    applicationUserId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('LoginMain Component - onToForgotPassword: should navigate to login-forgotPassword page', fakeAsync(() => {
    spy = spyOn(component, 'onToForgotPassword').and.callThrough();
    component.onToForgotPassword();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToForgotPassword();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('login-forgotPassword');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});

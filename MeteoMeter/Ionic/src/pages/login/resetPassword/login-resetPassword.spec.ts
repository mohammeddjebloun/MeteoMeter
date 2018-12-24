
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
import { LoginResetPassword } from "./login-resetPassword";
import { ResetPasswordaaaaaaaaaaaaaa } from '../../../viewModels/resetPasswordaaaaaaaaaaaaaa';
import { UserAAAAA } from '../../../services/userAAAAA.service';
import { UserAAAAAMock } from '../../../../test-config/mocks/userAAAAAMock';
describe('LoginResetPassword Component', () => {
  let fixture: ComponentFixture<LoginResetPassword>;
  let component: LoginResetPassword;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        LoginResetPassword
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
    fixture = TestBed.createComponent(LoginResetPassword);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('LoginResetPassword Component: should be created', fakeAsync(() => {
    expect(component instanceof LoginResetPassword).toBeTruthy();
  }));

  it('LoginResetPassword Component: should navigate to language page', fakeAsync(() => {
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
  it('LoginResetPassword Component - onResetPassword: should use userAAAAA service to ResetPassword', fakeAsync(() => {
    var resetPassword = null;
    spy = spyOn(component, 'onResetPassword').and.callThrough();
    component.onResetPassword(
    resetPassword
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    resetPassword
    );
    spy = spyOn(component._userAAAAA, 'resetPassword').and.callThrough();
    component.onResetPassword(
    resetPassword
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    resetPassword
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('LoginResetPassword Component - onToLogin: should navigate to login-main page', fakeAsync(() => {
    spy = spyOn(component, 'onToLogin').and.callThrough();
    component.onToLogin();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToLogin();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('login-main');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});

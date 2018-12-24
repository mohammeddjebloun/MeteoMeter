
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
import { AccountEditProfile } from "./account-editProfile";
import { EditGroupaaaaaaaaaaaaaa } from '../../../viewModels/editGroupaaaaaaaaaaaaaa';
import { EditIdeaaaaaaaaaaaaaaa } from '../../../viewModels/editIdeaaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { UserAAAAA } from '../../../services/userAAAAA.service';
import { UserAAAAAMock } from '../../../../test-config/mocks/userAAAAAMock';
describe('AccountEditProfile Component', () => {
  let fixture: ComponentFixture<AccountEditProfile>;
  let component: AccountEditProfile;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        AccountEditProfile
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
    fixture = TestBed.createComponent(AccountEditProfile);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('AccountEditProfile Component: should be created', fakeAsync(() => {
    expect(component instanceof AccountEditProfile).toBeTruthy();
  }));

  it('AccountEditProfile Component: should navigate to language page', fakeAsync(() => {
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
  it('AccountEditProfile Component - onUpdateUser: should use userAAAAA service to UpdateUser', fakeAsync(() => {
    var user = null;
    spy = spyOn(component, 'onUpdateUser').and.callThrough();
    component.onUpdateUser(
    user
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    user
    );
    spy = spyOn(component._userAAAAA, 'update').and.callThrough();
    component.onUpdateUser(
    user
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    user
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('AccountEditProfile Component - onSelectImageSource: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSelectImageSource').and.callThrough();
    component.onSelectImageSource();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('AccountEditProfile Component - onCaptureImage: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCaptureImage').and.callThrough();
    component.onCaptureImage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});

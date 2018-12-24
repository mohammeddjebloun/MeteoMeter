
import { IonicModule, NavController, Platform } from 'ionic-angular';
import { NavMock } from '../../../test-config/mocks/navMock';
import { PlatformMock } from '../../../test-config/mocks/platformMock';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenMock } from '../../../test-config/mocks/splashScreenMock';
import { StatusBar } from '@ionic-native/status-bar';
import { StatusBarMock } from '../../../test-config/mocks/statusBarMock';
import { Title } from '@angular/platform-browser';
import { TitleMock } from '../../../test-config/mocks/titleMock';
import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '../../../test-config/mocks/translateServiceMock';
import { LanguagePageModule } from './language.module';
import { LanguagePage } from './language';
import { MeteoMeter } from '../../app/app.component';
describe('LanguagePage Component', () => {
  let fixture: ComponentFixture<LanguagePage>;
  let component: LanguagePage;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        LanguagePage
      ],
      imports: [
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
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
    fixture = TestBed.createComponent(LanguagePage);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('LanguagePage Component: should be created', fakeAsync(() => {
    expect(component instanceof LanguagePage).toBeTruthy();
  }));

  it('LanguagePage: should go back to the previous page', fakeAsync(() => {
    spy = spyOn(component, 'onLanguage').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._navCtrl, 'pop').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('POP');
    });
  }));

  it('LanguagePage: should change language', fakeAsync(() => {
    var lang = 'en';
    spy = spyOn(component, 'changeLanguage').and.callThrough();
    component.changeLanguage(lang);
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(lang);
    spy = spyOn(component._translateService, 'use').and.callThrough();
    component.changeLanguage(lang);
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(lang);
    spy.calls.mostRecent().returnValue.subscribe((result) => {
      expect(result).toEqual(lang);
    });
  }));
});
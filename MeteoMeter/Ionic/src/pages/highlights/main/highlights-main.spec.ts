
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
import { HighlightsMain } from "./highlights-main";
import { Reportaaaaaaaaaaaaaa } from '../../../viewModels/reportaaaaaaaaaaaaaa';
import { HighlightsAAAAA } from '../../../services/highlightsAAAAA.service';
import { HighlightsAAAAAMock } from '../../../../test-config/mocks/highlightsAAAAAMock';
describe('HighlightsMain Component', () => {
  let fixture: ComponentFixture<HighlightsMain>;
  let component: HighlightsMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        HighlightsMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: HighlightsAAAAA, useClass: HighlightsAAAAAMock },
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
    fixture = TestBed.createComponent(HighlightsMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('HighlightsMain Component: should be created', fakeAsync(() => {
    expect(component instanceof HighlightsMain).toBeTruthy();
  }));

  it('HighlightsMain Component: should navigate to language page', fakeAsync(() => {
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
  it('HighlightsMain Component - onRefresh: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onRefresh').and.callThrough();
    component.onRefresh();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('HighlightsMain Component - onToPosts: should navigate to posts-main page', fakeAsync(() => {
    spy = spyOn(component, 'onToPosts').and.callThrough();
    component.onToPosts();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToPosts();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-main');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('HighlightsMain Component - onGetBestPost: should use highlightsAAAAA service to GetBestPost', fakeAsync(() => {
    spy = spyOn(component, 'onGetBestPost').and.callThrough();
    component.onGetBestPost(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(component._highlightsAAAAA, 'getBestPost').and.callThrough();
    component.onGetBestPost(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});

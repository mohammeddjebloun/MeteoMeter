
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
import { HighlightsTopPostsCardModal } from "./highlights-topPostsCardModal";
import { Cardaaaaaaaaaaaaaa } from '../../../viewModels/cardaaaaaaaaaaaaaa';
import { AnswerAAAAA } from '../../../services/answerAAAAA.service';
import { AnswerAAAAAMock } from '../../../../test-config/mocks/answerAAAAAMock';
import { HighlightsAAAAA } from '../../../services/highlightsAAAAA.service';
import { HighlightsAAAAAMock } from '../../../../test-config/mocks/highlightsAAAAAMock';
describe('HighlightsTopPostsCardModal Component', () => {
  let fixture: ComponentFixture<HighlightsTopPostsCardModal>;
  let component: HighlightsTopPostsCardModal;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        HighlightsTopPostsCardModal
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: AnswerAAAAA, useClass: AnswerAAAAAMock },
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
    fixture = TestBed.createComponent(HighlightsTopPostsCardModal);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('HighlightsTopPostsCardModal Component: should be created', fakeAsync(() => {
    expect(component instanceof HighlightsTopPostsCardModal).toBeTruthy();
  }));

  it('HighlightsTopPostsCardModal Component: should navigate to language page', fakeAsync(() => {
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
  it('HighlightsTopPostsCardModal Component - onCardAnswered: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCardAnswered').and.callThrough();
    component.onCardAnswered();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('HighlightsTopPostsCardModal Component - onCheckForAnswer: should use answerAAAAA service to CheckForAnswer', fakeAsync(() => {
    var cardId = 0;
    var userProfileId = 0;
    spy = spyOn(component, 'onCheckForAnswer').and.callThrough();
    component.onCheckForAnswer(
    cardId,
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    cardId,
    userProfileId
    );
    spy = spyOn(component._answerAAAAA, 'answeredCard').and.callThrough();
    component.onCheckForAnswer(
    cardId,
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    cardId,
    userProfileId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('HighlightsTopPostsCardModal Component - onReloadCard: should use highlightsAAAAA service to ReloadCard', fakeAsync(() => {
    var cardId = 0;
    spy = spyOn(component, 'onReloadCard').and.callThrough();
    component.onReloadCard(
    cardId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    cardId
    );
    spy = spyOn(component._highlightsAAAAA, 'reloadCard').and.callThrough();
    component.onReloadCard(
    cardId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    cardId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});


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
import { FlowMain } from "./flow-main";
import { Pagingaaaaaaaaaaaaaa } from '../../../viewModels/pagingaaaaaaaaaaaaaa';
import { Cardaaaaaaaaaaaaaa } from '../../../viewModels/cardaaaaaaaaaaaaaa';
import { Groupaaaaaaaaaaaaaa } from '../../../viewModels/groupaaaaaaaaaaaaaa';
import { Useraaaaaaaaaaaaaa } from '../../../viewModels/useraaaaaaaaaaaaaa';
import { Discardaaaaaaaaaaaaaa } from '../../../viewModels/discardaaaaaaaaaaaaaa';
import { UserViewCardaaaaaaaaaaaaaa } from '../../../viewModels/userViewCardaaaaaaaaaaaaaa';
import { FlowAAAAA } from '../../../services/flowAAAAA.service';
import { FlowAAAAAMock } from '../../../../test-config/mocks/flowAAAAAMock';
import { AnswerAAAAA } from '../../../services/answerAAAAA.service';
import { AnswerAAAAAMock } from '../../../../test-config/mocks/answerAAAAAMock';
describe('FlowMain Component', () => {
  let fixture: ComponentFixture<FlowMain>;
  let component: FlowMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        FlowMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: FlowAAAAA, useClass: FlowAAAAAMock },
        { provide: AnswerAAAAA, useClass: AnswerAAAAAMock },
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
    fixture = TestBed.createComponent(FlowMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('FlowMain Component: should be created', fakeAsync(() => {
    expect(component instanceof FlowMain).toBeTruthy();
  }));

  it('FlowMain Component: should navigate to language page', fakeAsync(() => {
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
  it('FlowMain Component - onNextCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onNextCard').and.callThrough();
    component.onNextCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onToPostsMain: should navigate to posts-main page', fakeAsync(() => {
    spy = spyOn(component, 'onToPostsMain').and.callThrough();
    component.onToPostsMain();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToPostsMain();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-main');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('FlowMain Component - onGetCards: should use flowAAAAA service to GetCards', fakeAsync(() => {
    var paging = null;
    var userProfileId = 0;
    spy = spyOn(component, 'onGetCards').and.callThrough();
    component.onGetCards(
    paging,
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    paging,
    userProfileId
    );
    spy = spyOn(component._flowAAAAA, 'list').and.callThrough();
    component.onGetCards(
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
  it('FlowMain Component - onDiscard: should use answerAAAAA service to Discard', fakeAsync(() => {
    var discard = null;
    spy = spyOn(component, 'onDiscard').and.callThrough();
    component.onDiscard(
    discard
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    discard
    );
    spy = spyOn(component._answerAAAAA, 'discard').and.callThrough();
    component.onDiscard(
    discard
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    discard
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('FlowMain Component - onPreviousCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPreviousCard').and.callThrough();
    component.onPreviousCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onAddView: should use flowAAAAA service to AddView', fakeAsync(() => {
    var userViewCard = null;
    spy = spyOn(component, 'onAddView').and.callThrough();
    component.onAddView(
    userViewCard
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userViewCard
    );
    spy = spyOn(component._flowAAAAA, 'addView').and.callThrough();
    component.onAddView(
    userViewCard
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userViewCard
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('FlowMain Component - onSwipeCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSwipeCard').and.callThrough();
    component.onSwipeCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onAdaptCardsStack: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onAdaptCardsStack').and.callThrough();
    component.onAdaptCardsStack();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onDestroyOldCards: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onDestroyOldCards').and.callThrough();
    component.onDestroyOldCards();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onCardAnswered: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCardAnswered').and.callThrough();
    component.onCardAnswered();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onRefresh: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onRefresh').and.callThrough();
    component.onRefresh();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});


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
import { IdeaIdeaCard } from "./idea-ideaCard";
import { Answeraaaaaaaaaaaaaa } from '../../../viewModels/answeraaaaaaaaaaaaaa';
import { CreateGroupaaaaaaaaaaaaaa } from '../../../viewModels/createGroupaaaaaaaaaaaaaa';
import { CreateIdeaaaaaaaaaaaaaaa } from '../../../viewModels/createIdeaaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { AnswerAAAAA } from '../../../services/answerAAAAA.service';
import { AnswerAAAAAMock } from '../../../../test-config/mocks/answerAAAAAMock';
describe('IdeaIdeaCard Component', () => {
  let fixture: ComponentFixture<IdeaIdeaCard>;
  let component: IdeaIdeaCard;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        IdeaIdeaCard
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
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
    fixture = TestBed.createComponent(IdeaIdeaCard);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('IdeaIdeaCard Component: should be created', fakeAsync(() => {
    expect(component instanceof IdeaIdeaCard).toBeTruthy();
  }));

  it('IdeaIdeaCard Component: should navigate to language page', fakeAsync(() => {
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
  it('IdeaIdeaCard Component - onAgree: should use answerAAAAA service to Agree', fakeAsync(() => {
    var answer = null;
    spy = spyOn(component, 'onAgree').and.callThrough();
    component.onAgree(
    answer
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    answer
    );
    spy = spyOn(component._answerAAAAA, 'create').and.callThrough();
    component.onAgree(
    answer
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    answer
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaIdeaCard Component - onDisagree: should use answerAAAAA service to Disagree', fakeAsync(() => {
    var answer = null;
    spy = spyOn(component, 'onDisagree').and.callThrough();
    component.onDisagree(
    answer
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    answer
    );
    spy = spyOn(component._answerAAAAA, 'create').and.callThrough();
    component.onDisagree(
    answer
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    answer
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaIdeaCard Component - onAdaptClass: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onAdaptClass').and.callThrough();
    component.onAdaptClass();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});

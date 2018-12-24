
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
import { IdeaCreateQuestion } from "./idea-createQuestion";
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { IdeaAAAAA } from '../../../services/ideaAAAAA.service';
import { IdeaAAAAAMock } from '../../../../test-config/mocks/ideaAAAAAMock';
describe('IdeaCreateQuestion Component', () => {
  let fixture: ComponentFixture<IdeaCreateQuestion>;
  let component: IdeaCreateQuestion;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        IdeaCreateQuestion
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
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
    fixture = TestBed.createComponent(IdeaCreateQuestion);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('IdeaCreateQuestion Component: should be created', fakeAsync(() => {
    expect(component instanceof IdeaCreateQuestion).toBeTruthy();
  }));

  it('IdeaCreateQuestion Component: should navigate to language page', fakeAsync(() => {
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
  it('IdeaCreateQuestion Component - onGetDefaultPicture: should use ideaAAAAA service to GetDefaultPicture', fakeAsync(() => {
    spy = spyOn(component, 'onGetDefaultPicture').and.callThrough();
    component.onGetDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(component._ideaAAAAA, 'getDefaultPicture').and.callThrough();
    component.onGetDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaCreateQuestion Component - onDiscard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onDiscard').and.callThrough();
    component.onDiscard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateQuestion Component - onSelectImageSource: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSelectImageSource').and.callThrough();
    component.onSelectImageSource();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateQuestion Component - onCaptureImage: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCaptureImage').and.callThrough();
    component.onCaptureImage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateQuestion Component - onAdaptImageBoxStyle: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onAdaptImageBoxStyle').and.callThrough();
    component.onAdaptImageBoxStyle();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateQuestion Component - onGetStyle: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onGetStyle').and.callThrough();
    component.onGetStyle();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateQuestion Component - onToNextStep: should navigate to idea-createSettings page', fakeAsync(() => {
    spy = spyOn(component, 'onToNextStep').and.callThrough();
    component.onToNextStep();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToNextStep();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('idea-createSettings');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});

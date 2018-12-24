
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
import { IdeaCreateSettings } from "./idea-createSettings";
import { TargetGroupaaaaaaaaaaaaaa } from '../../../viewModels/targetGroupaaaaaaaaaaaaaa';
import { GroupAAAAA } from '../../../services/groupAAAAA.service';
import { GroupAAAAAMock } from '../../../../test-config/mocks/groupAAAAAMock';
describe('IdeaCreateSettings Component', () => {
  let fixture: ComponentFixture<IdeaCreateSettings>;
  let component: IdeaCreateSettings;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        IdeaCreateSettings
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: GroupAAAAA, useClass: GroupAAAAAMock },
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
    fixture = TestBed.createComponent(IdeaCreateSettings);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('IdeaCreateSettings Component: should be created', fakeAsync(() => {
    expect(component instanceof IdeaCreateSettings).toBeTruthy();
  }));

  it('IdeaCreateSettings Component: should navigate to language page', fakeAsync(() => {
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
  it('IdeaCreateSettings Component - onDiscard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onDiscard').and.callThrough();
    component.onDiscard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateSettings Component - onGetTargetGroups: should use groupAAAAA service to GetTargetGroups', fakeAsync(() => {
    var userProfileId = 'test';
    spy = spyOn(component, 'onGetTargetGroups').and.callThrough();
    component.onGetTargetGroups(
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userProfileId
    );
    spy = spyOn(component._groupAAAAA, 'listTargetableGroups').and.callThrough();
    component.onGetTargetGroups(
    userProfileId
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    userProfileId
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaCreateSettings Component - onToPreview: should navigate to idea-preview page', fakeAsync(() => {
    spy = spyOn(component, 'onToPreview').and.callThrough();
    component.onToPreview();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToPreview();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('idea-preview');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('IdeaCreateSettings Component - onCheckSettings: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCheckSettings').and.callThrough();
    component.onCheckSettings();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateSettings Component - onCheckSelectedGroups: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCheckSelectedGroups').and.callThrough();
    component.onCheckSelectedGroups();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaCreateSettings Component - onPreviousStep: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPreviousStep').and.callThrough();
    component.onPreviousStep();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});


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
import { IdeaEditIdeaModal } from "./idea-editIdeaModal";
describe('IdeaEditIdeaModal Component', () => {
  let fixture: ComponentFixture<IdeaEditIdeaModal>;
  let component: IdeaEditIdeaModal;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        IdeaEditIdeaModal
      ],
      imports: [
        LanguagePageModule,
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
    fixture = TestBed.createComponent(IdeaEditIdeaModal);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('IdeaEditIdeaModal Component: should be created', fakeAsync(() => {
    expect(component instanceof IdeaEditIdeaModal).toBeTruthy();
  }));

  it('IdeaEditIdeaModal Component: should navigate to language page', fakeAsync(() => {
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
  it('IdeaEditIdeaModal Component - onCheckSelectedGroups: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCheckSelectedGroups').and.callThrough();
    component.onCheckSelectedGroups();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onGetTargetableGroups: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onGetTargetableGroups').and.callThrough();
    component.onGetTargetableGroups();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onSaveChanges: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSaveChanges').and.callThrough();
    component.onSaveChanges();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onCheckDates: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCheckDates').and.callThrough();
    component.onCheckDates();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onUploadImage: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onUploadImage').and.callThrough();
    component.onUploadImage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onConfirmPublish: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onConfirmPublish').and.callThrough();
    component.onConfirmPublish();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onSelectImageSource: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSelectImageSource').and.callThrough();
    component.onSelectImageSource();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onCaptureImage: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCaptureImage').and.callThrough();
    component.onCaptureImage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onAdaptImageBoxStyle: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onAdaptImageBoxStyle').and.callThrough();
    component.onAdaptImageBoxStyle();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onGetStyle: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onGetStyle').and.callThrough();
    component.onGetStyle();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('IdeaEditIdeaModal Component - onCloseModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCloseModal').and.callThrough();
    component.onCloseModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});

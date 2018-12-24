
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
import { IdeaPreview } from "./idea-preview";
import { Answeraaaaaaaaaaaaaa } from '../../../viewModels/answeraaaaaaaaaaaaaa';
import { CreateGroupaaaaaaaaaaaaaa } from '../../../viewModels/createGroupaaaaaaaaaaaaaa';
import { CreateIdeaaaaaaaaaaaaaaa } from '../../../viewModels/createIdeaaaaaaaaaaaaaaa';
import { Pictureaaaaaaaaaaaaaa } from '../../../viewModels/pictureaaaaaaaaaaaaaa';
import { PictureAAAAA } from '../../../services/pictureAAAAA.service';
import { PictureAAAAAMock } from '../../../../test-config/mocks/pictureAAAAAMock';
import { IdeaAAAAA } from '../../../services/ideaAAAAA.service';
import { IdeaAAAAAMock } from '../../../../test-config/mocks/ideaAAAAAMock';
describe('IdeaPreview Component', () => {
  let fixture: ComponentFixture<IdeaPreview>;
  let component: IdeaPreview;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        IdeaPreview
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: PictureAAAAA, useClass: PictureAAAAAMock },
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
    fixture = TestBed.createComponent(IdeaPreview);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('IdeaPreview Component: should be created', fakeAsync(() => {
    expect(component instanceof IdeaPreview).toBeTruthy();
  }));

  it('IdeaPreview Component: should navigate to language page', fakeAsync(() => {
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
  it('IdeaPreview Component - onUploadImage: should use pictureAAAAA service to UploadImage', fakeAsync(() => {
    var picture = null;
    spy = spyOn(component, 'onUploadImage').and.callThrough();
    component.onUploadImage(
    picture
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    picture
    );
    spy = spyOn(component._pictureAAAAA, 'create').and.callThrough();
    component.onUploadImage(
    picture
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    picture
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaPreview Component - onSave: should use ideaAAAAA service to Save', fakeAsync(() => {
    var idea = null;
    spy = spyOn(component, 'onSave').and.callThrough();
    component.onSave(
    idea
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idea
    );
    spy = spyOn(component._ideaAAAAA, 'create').and.callThrough();
    component.onSave(
    idea
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idea
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaPreview Component - onToPreviousStep: should navigate to idea-createSettings page', fakeAsync(() => {
    spy = spyOn(component, 'onToPreviousStep').and.callThrough();
    component.onToPreviousStep();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToPreviousStep();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('idea-createSettings');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});

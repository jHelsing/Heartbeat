import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { CommentDetailPage } from './comment-detail';
import { LoginProvider } from '../../providers/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommentProvider } from '../../providers/comment/comment';
import { NavParamsMock, ViewControllerMock } from 'ionic-mocks';

let comp: CommentDetailPage;
let fixture: ComponentFixture<CommentDetailPage>;

const navParams = {
  title: 'TITLE',
  category: 'CATEGORY',
  description: 'DESCRIPTION',
  patient: 'PATIENT',
  imageUrl: 'img',
  createdAt: '2018-05-05',
};

describe('Page: Comment Dtails Page', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp, CommentDetailPage],

      providers: [
        NavController,
        { provide: NavParams, useFactory: () => NavParamsMock.instance(navParams) },
        { provide: ViewController, useFactory: () => ViewControllerMock.instance() },
      ],

      imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
      ],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailPage);
    comp = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();
  });

  it('has comment', () => {
    expect(comp.comment).toBeTruthy();
  });

  it('has patient', () => {
    expect(comp.comment.patient).toBeTruthy();
  });

});

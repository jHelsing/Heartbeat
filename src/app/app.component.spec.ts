import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

let comp: MyApp;
let fixture: ComponentFixture<MyApp>;

describe('Component: Root Component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp],

      providers: [
        StatusBar,
        SplashScreen,
      ],

      imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
      ],

    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MyApp);
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

  it('initialises with a root page of HomePage', () => {
    expect(comp.rootPage).toBe(LoginPage);
  });

});

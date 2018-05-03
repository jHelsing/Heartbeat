/*import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController, NavParams, ToastController} from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { LoginPage } from './login';
import { LoginProvider } from '../../providers/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { SplashScreen } from '@ionic-native/splash-screen';

let comp: LoginPage;
let fixture: ComponentFixture<LoginPage>;

export class NavParamsMock {
  public subsribe: any;
}

export class AngularFireAuthMock {
  public subsribe: any;
}

export class FirebaseAppMock {
  public subsribe: any;
}

export class AngularFirestoreMock {
  public subsribe: any;
}

describe('Page: Product Page', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [MyApp, LoginPage],

      providers: [
        NavController,
        LoginProvider,
        { provide: NavParams, useClass: NavParamsMock },
        { provide: AngularFireAuth, useClass: AngularFireAuthMock },
        { provide: AngularFireAuth, useClass: AngularFireAuthMock },
        { provide: AngularFirestore, useClass: AngularFirestoreMock },
        SplashScreen,
        ToastController,
      ],

      imports: [
        IonicModule.forRoot(MyApp),
        BrowserModule,
      ],
    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;

  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
    el = null;
  });

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  });

  it('displays products containing a title, description, and price in the list', () => {

    const productsService = fixture.debugElement.injector.get(LoginProvider);
    const firstProduct = productsService.products[0];

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('ion-list ion-item'));
    el = de.nativeElement;

    expect(el.textContent).toContain(firstProduct.title);
    expect(el.textContent).toContain(firstProduct.description);
    expect(el.textContent).toContain(firstProduct.price);

  });

});
*/

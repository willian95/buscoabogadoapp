import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LawyerContactPage } from './lawyer-contact.page';

describe('LawyerContactPage', () => {
  let component: LawyerContactPage;
  let fixture: ComponentFixture<LawyerContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LawyerContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

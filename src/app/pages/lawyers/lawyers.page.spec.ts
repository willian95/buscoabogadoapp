import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LawyersPage } from './lawyers.page';

describe('LawyersPage', () => {
  let component: LawyersPage;
  let fixture: ComponentFixture<LawyersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LawyersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

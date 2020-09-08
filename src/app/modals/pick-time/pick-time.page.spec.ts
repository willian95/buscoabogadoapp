import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickTimePage } from './pick-time.page';

describe('PickTimePage', () => {
  let component: PickTimePage;
  let fixture: ComponentFixture<PickTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PickTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

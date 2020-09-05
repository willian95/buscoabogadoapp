import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicomPage } from './dicom.page';

describe('DicomPage', () => {
  let component: DicomPage;
  let fixture: ComponentFixture<DicomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

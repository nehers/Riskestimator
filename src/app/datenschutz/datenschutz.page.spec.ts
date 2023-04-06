import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatenschutzPage } from './datenschutz.page';

describe('DatenschutzPage', () => {
  let component: DatenschutzPage;
  let fixture: ComponentFixture<DatenschutzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatenschutzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatenschutzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

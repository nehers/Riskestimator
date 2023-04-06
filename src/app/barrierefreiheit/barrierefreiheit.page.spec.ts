import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarrierefreiheitPage } from './barrierefreiheit.page';

describe('BarrierefreiheitPage', () => {
  let component: BarrierefreiheitPage;
  let fixture: ComponentFixture<BarrierefreiheitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrierefreiheitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarrierefreiheitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasketListPage } from './basket-list.page';

describe('BasketListPage', () => {
  let component: BasketListPage;
  let fixture: ComponentFixture<BasketListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasketListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

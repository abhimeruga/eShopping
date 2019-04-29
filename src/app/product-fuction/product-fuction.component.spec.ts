import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFuctionComponent } from './product-fuction.component';

describe('ProductFuctionComponent', () => {
  let component: ProductFuctionComponent;
  let fixture: ComponentFixture<ProductFuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

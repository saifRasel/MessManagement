import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComComponent } from './my-com.component';

describe('MyComComponent', () => {
  let component: MyComComponent;
  let fixture: ComponentFixture<MyComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComComponent]
    });
    fixture = TestBed.createComponent(MyComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDumbComponent } from './my-dumb.component';

describe('MyDumbComponent', () => {
  let component: MyDumbComponent;
  let fixture: ComponentFixture<MyDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDumbComponent]
    });
    fixture = TestBed.createComponent(MyDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperDumbComponent } from './my-super-dumb.component';

describe('MySuperDumbComponent', () => {
  let component: MySuperDumbComponent;
  let fixture: ComponentFixture<MySuperDumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySuperDumbComponent]
    });
    fixture = TestBed.createComponent(MySuperDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInsertComponent } from './list-insert.component';

describe('ListInsertComponent', () => {
  let component: ListInsertComponent;
  let fixture: ComponentFixture<ListInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

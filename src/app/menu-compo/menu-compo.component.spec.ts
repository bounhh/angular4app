import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCompoComponent } from './menu-compo.component';

describe('MenuCompoComponent', () => {
  let component: MenuCompoComponent;
  let fixture: ComponentFixture<MenuCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

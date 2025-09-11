import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLivraria } from './nav-bar-livraria';

describe('NavBarLivraria', () => {
  let component: NavBarLivraria;
  let fixture: ComponentFixture<NavBarLivraria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarLivraria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarLivraria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLivraria } from './footer-livraria';

describe('FooterLivraria', () => {
  let component: FooterLivraria;
  let fixture: ComponentFixture<FooterLivraria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterLivraria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLivraria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

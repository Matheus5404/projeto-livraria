import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLivraria } from './home-livraria';

describe('HomeLivraria', () => {
  let component: HomeLivraria;
  let fixture: ComponentFixture<HomeLivraria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLivraria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLivraria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

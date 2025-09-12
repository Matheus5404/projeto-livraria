import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLivraria } from './cliente-livraria';

describe('ClienteLivraria', () => {
  let component: ClienteLivraria;
  let fixture: ComponentFixture<ClienteLivraria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteLivraria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteLivraria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

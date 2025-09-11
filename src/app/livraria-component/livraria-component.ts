import { Component } from '@angular/core';
import { Livraria } from './livraria';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livraria-component',
  standalone: false,
  templateUrl: './livraria-component.html',
  styleUrl: './livraria-component.css'
})
export class LivrariaComponent {

  livrarias: Livraria[] = [];
  FormGrouplivraria: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.FormGrouplivraria = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      description: [''],
      category: [''],
      publisher: ['']
    });
  }
    
  save() {
    this.livrarias.push(this.FormGrouplivraria.value);
    this.FormGrouplivraria.reset();
  }
}

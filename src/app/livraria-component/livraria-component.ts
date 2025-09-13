import { Livraria } from './../livraria';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivrariaService } from './../livraria-service';

@Component({
  selector: 'app-livraria-component',
  standalone: false,
  templateUrl: './livraria-component.html',
  styleUrl: './livraria-component.css'
})
export class LivrariaComponent implements OnInit {

  livrarias: Livraria[] = [];
  FormGrouplivraria: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LivrariaService) {

    this.FormGrouplivraria = this.formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      category: ['']
    });
  }
  ngOnInit(): void {
      this.service.getAllProducts().subscribe(
        {
          next: json => this.livrarias = json
        }
      );
  }
    
  save() {
    this.service.save(this.FormGrouplivraria.value).subscribe(
      {
        next: (json) => {
          this.livrarias.push(json);
          this.FormGrouplivraria.reset();
        }
      }
    )

    this.livrarias.push(this.FormGrouplivraria.value);
    this.FormGrouplivraria.reset();
  }
}

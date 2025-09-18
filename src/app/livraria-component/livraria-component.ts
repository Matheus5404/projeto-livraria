import { Component, OnInit } from '@angular/core';
import { Livraria } from '../livraria';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LivrariaService } from '../livraria-service';

@Component({
  selector: 'app-livraria-component',
  standalone: false,
  templateUrl: './livraria-component.html',
  styleUrl: './livraria-component.css'
})
export class LivrariaComponent implements OnInit {

  livrarias: Livraria[] = [];
  FormGroupLivraria: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LivrariaService) {

    this.FormGroupLivraria = formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      category: ['']
    });
  }
  ngOnInit(): void {
      this.service.getAllLivrarias().subscribe(
        {
          next: json => this.livrarias = json
        }
      );
  }
    
  save() {
    this.service.save(this.FormGroupLivraria.value).subscribe(
      {
        next: (json) => {
          this.livrarias.push(json);
          this.FormGroupLivraria.reset();
        }
      }
    )

    this.livrarias.push(this.FormGroupLivraria.value);
    this.FormGroupLivraria.reset();
  }
}

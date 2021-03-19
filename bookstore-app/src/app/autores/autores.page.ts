import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { AutorService } from './autor.service';
  import { Genero } from './genero.enum';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

  autores: Autor[];  

  constructor
    (private AutorService: AutorService
  ) {    
      this.autores = this.AutorService.getAutores();
} 
  ngOnInit() { }

  listar(){
    this.autores = this.AutorService.getAutores();
  }

  excluir(autor: Autor){
    this.AutorService.excluir(autor.id);
  }

}


import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Autor } from './autor';
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
    (
      private alertController: AlertController,    
      private AutorService: AutorService
  ) {    
      this.autores = this.AutorService.getAutores();
} 
  ngOnInit() { }

  listar(){
    this.autores = this.AutorService.getAutores();
  }

  confirmarExclusao(autor: Autor){
    console.log(autor);
    this.alertController.create({
      header:'Confirmação de exclusão',
      message: 'Deseaja excluir o autor ${autor.nome} ?',
      buttons: [
        {
        text: 'Sim',        
        handler: () => this.excluir(autor)        
      },
    {
      text:'Não'      
    }
    ]
    }).then(alerta => alerta.present());

  }

  private excluir(autor: Autor){
    this.AutorService.excluir(autor.id);
    this.listar()
  }

}


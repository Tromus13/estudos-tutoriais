import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css']
})
export class VisualComponent implements OnInit {

  linhas = [];
  conteudo =[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get("assets/visual/"+id+".txt", { responseType: 'text'}).subscribe(data => {

      this.linhas = data.split(/\r?\n|\r/);

      this.linhas.forEach((linha, i) => {
        const aux = linha.split(';');

        if(i == 0) {

        } else {
          this.conteudo = aux;
        }

      });
      console.log(this.linhas);
    })
  }

}

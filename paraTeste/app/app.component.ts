import { Filho } from './config/filho';
import { ConfigService } from './config/config.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paraTeste';

  fileName = '';
  fileLinhas = [];

  filhos:Filho[] = [];
  headers = [];

  constructor(
    private http:HttpClient,
    private serv: ConfigService
  ) {}

  ngOnInit() {
    this.http.get("assets/Usuarios.txt", { responseType: 'text'}).subscribe(data => {

      this.fileLinhas = data.split(/\r?\n|\r/);
      this.fileLinhas.forEach((linha, i) => {
        const aux = linha.split(';');
        if(i == 0) {
          this.headers = aux;
        } else {
          const filho: Filho = new Filho();
          filho.id = aux[0];
          filho.nome = aux[1];
          filho.dataNacimento = aux[2] == "" ? "-" : aux[2];
          this.filhos.push(filho);
        }

      });
      console.log(this.fileLinhas[0].split(';'));
  })
  }

  pegarArquivo(event:any) {
    const file = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }
  }
}

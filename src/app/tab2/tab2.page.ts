import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cep: string = '';
  dataReturn: any;

  constructor(private cepService: CepService) {}

  buscarCep(cep: string) {
    this.cepService.buscarCep(cep).subscribe(data => {
      this.dataReturn = data;
    });
    }

    limpar() {
      this.dataReturn = null;
      this.cep = '';
    }
  }

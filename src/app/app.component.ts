import { Component } from '@angular/core';
import { Cuprimento } from './shared/enum/cumprimento.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'switch-angular';

  switch_expression = 1;

  cuprimentoEnum: typeof Cuprimento = Cuprimento;

  cumprimentoReal: Cuprimento = this.cuprimentoEnum.SAIDA;

  onClickValor(cumprimento: Cuprimento) {
    cumprimento === this.cuprimentoEnum.ENTRADA
      ? (this.cumprimentoReal = this.cuprimentoEnum.SAIDA)
      : (this.cumprimentoReal = this.cuprimentoEnum.ENTRADA);
  }
}

import { Component } from '@angular/core';
import { SaludoService } from './saludo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saludo = 'Hello World!!';
  saludoForm: FormGroup;

  constructor(
    private readonly saludoService: SaludoService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.saludoForm = this.formBuilder.group({
      name: ''
    });
  }

  onSubmit(form) {
    console.log(`Saludando a ${form.name}`);
    this.saludoService.saludar(form.name).subscribe((res: any) => {
      this.saludo = `${res}!!`;
    }, err => this.saludo = `Hello  ${form.name}!!`);
  }
}

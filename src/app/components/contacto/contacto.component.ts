import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  handleSubmit(event: any) {
    event.preventDefault();
    const form = new FormData(event.target);

    if (this.formHasEmptyFields(form)) {
      Swal.fire({
        title: 'Error',
        text: 'Debes rellenar todos los campos del formulario',
        icon: 'error'
      });
      return;
    }

    fetch(event.target.action, {
      method: event.target.method,
      body: form,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        event.target.reset();
        Swal.fire({
          title: 'Éxito',
          text: 'Gracias por contactarme, te escribiré pronto',
          icon: 'success'
        });
      }
    });
  }

  formHasEmptyFields(form: FormData): boolean {
    let hasEmptyFields = false;

    form.forEach((value: any) => {
      if (value === '') {
        hasEmptyFields = true;
      }
    });

    return hasEmptyFields;
  }
}
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  showForm = false;
  successMessage = '';
  errorMessage = '';

  publicKey = 'ReqAiDkNl5E4kyVs4';
  serviceId = 'service_zxgg09e';
  tempateId = 'template_4np7ys9';

  constructor() {
    emailjs.init(this.publicKey);
  }

  openForm() {
    this.showForm = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeForm() {
    this.showForm = false;
  }
  sendEmail(form: any) {
    emailjs
      .sendForm(this.serviceId, this.tempateId, form.target)
      .then(() => {
        this.successMessage = '✅ Email sent successfully!';
        this.errorMessage = '';
        form.target.reset();
      })
      .catch((error) => {
        this.successMessage = '';
        this.errorMessage = '❌ Failed to send email: ' + error.text;
      });
  }
}

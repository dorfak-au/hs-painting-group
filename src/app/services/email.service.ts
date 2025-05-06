import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = environment.emailJs.serviceId;
  private templateId = environment.emailJs.templateId;
  private publicKey = environment.emailJs.publicKey;

  sendEmail(formData: { name: string; email: string; message: string, title: 'HS Group Website - Contact' }) {
    return emailjs.send(this.serviceId, this.templateId, formData, this.publicKey);
  }
}

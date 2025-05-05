import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../shared/email.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  contactForm: FormGroup = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.emailService.sendEmail(this.contactForm.value)
      .then(() => {
        alert('Message sent!');
        this.contactForm.reset();
      })
      .catch(err => {
        console.error('Email error:', err);
        alert('Something went wrong. Please try again.');
      });
  }
}

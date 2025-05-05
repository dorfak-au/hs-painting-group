import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../shared/email.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatExpansionModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  faqs = [
    {
      question: 'What types of painting services do you offer?',
      answer: 'We provide both residential and commercial painting services, including interior and exterior projects.',
      expanded: true
    },
    {
      question: 'How do you determine pricing?',
      answer: 'Pricing is based on the scope of the project, materials used, and the specific requirements of each job.',
      expanded: false
    },
    {
      question: 'What is your scheduling process?',
      answer: 'We work with you to find a convenient time for your project, ensuring minimal disruption to your daily routine.'
    }
  ];

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

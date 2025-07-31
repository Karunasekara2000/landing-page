import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService, RegisterRequest} from "../services/auth.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {



  registerForm: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.successMsg = '';
    this.errorMsg = '';
    if (this.registerForm.invalid) return;

    this.loading = true;
    const payload: RegisterRequest = this.registerForm.value;

    this.authService.register(payload).subscribe({
      next: res => {
        this.successMsg = 'Registration successful!';
        this.registerForm.reset();
        this.loading = false;
      },
      error: err => {
        this.errorMsg = err?.error?.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }


}

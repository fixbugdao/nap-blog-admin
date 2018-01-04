import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = '{NAP} Administrator';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    $('input.input-material').on('focus', function () {
      $(this).siblings('.label-material').addClass('active');
    });

    $('input.input-material').on('blur', function () {
      $(this).siblings('.label-material').removeClass('active');

      if ($(this).val() !== '') {
        $(this).siblings('.label-material').addClass('active');
      } else {
        $(this).siblings('.label-material').removeClass('active');
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password);
    }
  }

}

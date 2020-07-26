import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CanComponentDeactivate } from '../../shared/guards/auth.guard';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, CanComponentDeactivate {
  emailForm: FormGroup;
  headerText = 'Please enter an email';

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]]
    });
  }

  submit() {
    this.router.navigate(['/planets']);
  }

  confirm() {
    return this.emailForm.valid;
  }

}

import { HttpClient } from '@angular/common/http';
import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private message: NzMessageService,
    private router: Router,
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  validateForm: UntypedFormGroup;

  submitForm(): void {
    this.http
      .post('http://localhost:3000/api/auth', this.validateForm.value)
      .subscribe(
        (res: any) => {
          let token: any = res.result.token;
          localStorage.setItem('token', token);
          // this.message.create('success', 'Success');
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          this.message.create('error', error.error);
          console.log(error.error);
        }
      );
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }
}

import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };
  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private message: NzMessageService
    ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.http
      .post('http://localhost:3000/api/invoices',  this.validateForm.value)
      .subscribe(
        (res: any) => {
          this.message.create('success', res.message);
        },
        (error: any) => {
          this.message.create('error', error.error);
          console.log(error.error);
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }``
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      invoice_id: [null, [Validators.required, Validators.minLength(5)]],
      invoice_to: [null, [Validators.required, Validators.minLength(5)]],
      amount: [null, [Validators.required, Validators.minLength(2)]],
      created_on: [null, [Validators.required, Validators.minLength(5)]],
      last_date: [null, [Validators.required, Validators.minLength(5)]],
      status: [null, [Validators.required, Validators.minLength(5)]]
    });
  }
}

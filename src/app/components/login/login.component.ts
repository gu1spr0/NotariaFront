import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  vLoginForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.vLoginForm = this.fb.group({
      usuario: new FormControl('', Validators.required)
    });
  }
  onSubmit(value: any) {
    if (this.vLoginForm.valid) {
      console.log('Exito');
    } else {
      console.log('Error');
    }

  }


}

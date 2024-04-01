import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Store } from '@ngrx/store';
import { AppGlobalModel } from 'src/app/shared/Global/appGlobalModel';
import { addEmployee } from 'src/app/shared/store/employees/employeesActions';
import { getAlert } from 'src/app/shared/store/employees/employeesSelector';
// import { addEmployee } from 'src/app/shared/store/employees/employeesActions';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {

  employeeForm: any = FormGroup;
  errors: string[] = [];

  constructor(private _formBuilder: FormBuilder, private store: Store<AppGlobalModel>, private toast: HotToastService, private router: Router, private route: ActivatedRoute) { this.formModel() }

  formModel() {
    this.employeeForm = this._formBuilder.group({
      userName: ['', Validators.required],
      jobTitleName: ['', Validators.required],
      employeeCode: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      techStack: [''],
      status: 'active'
    })
  }

  ngOnInit(): void {
    // this.onAddSkill();
  }

  onAddSkill() {
    (<FormArray>this.employeeForm.get('skills')).push(
      new FormGroup({
        'skill': new FormControl('')
      })
    )
  }

  validate() {
    this.errors = this.validatePassword(this.employeeForm.get('password').value);
  }

  validatePassword(password: string): string[] {
    const regexes = [
      /.{6,}/, // min 6 characters
      /^(?=.*[A-Z])/, // uppercase
      /^(?=.*[a-z])/, // lowercase
      /\d/, // number
      /[!@#$%^&*(),.?":{}|<>]/ // special character
    ];
    const errorMessages = [
      'Password must be at least 6 characters long.',
      'Password must contain at least one uppercase letter.',
      'Password must contain at least one lowercase letter.',
      'Password must contain at least one number.',
      'Password must contain at least one special character.'
    ];

    const errors: string[] = [];
    regexes.forEach((regex, index) => {
      if (!regex.test(password)) {
        errors.push(errorMessages[index]);
      }
    });

    return errors;
  }


  onSubmit() {
    this.employeeForm.get('status').setValue('active');
    this.employeeForm.get('techstack').setValue(['Mean']);
    console.log(this.employeeForm.value)
    if (this.employeeForm.valid) {
      this.store.dispatch(addEmployee({ employee: this.employeeForm.value }));
      this.store.select(getAlert).subscribe((res: any) => {
        if (res.alertType === 'success') {
          this.toast.success(res.message);
          this.router.navigate(['../employees-list'],{relativeTo:this.route});
        } else if (res.alertType === 'error') {
          this.toast.error(res.message);
        }
      })
      // this.employeeForm.reset();
    }
  }
}

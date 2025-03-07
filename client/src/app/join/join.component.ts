import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserRole } from '../users/user';
import { UserService } from '../users/user.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule]
})
export class JoinComponent {

  joinForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      (fc) => {
        if (fc.value.toLowerCase() === 'abc123' || fc.value.toLowerCase() === '123abc') {
          return ({existingName: true});
        } else {
          return null;
        }
      },
    ])),

    age: new FormControl<number>(null, Validators.compose([
      Validators.required,
      Validators.min(15),
      Validators.max(200),
      Validators.pattern('^[0-9]+$')
    ])),

    company: new FormControl(''),

    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
    ])),

    role: new FormControl<UserRole>('player' as UserRole, Validators.compose([
      Validators.required,
      Validators.pattern('^(admin|editor|viewer)$'),
    ])),

    card1: new FormControl('', Validators.required),
    card2: new FormControl('', Validators.required),
    card3: new FormControl('', Validators.required),
    card4: new FormControl('', Validators.required),
    card5: new FormControl('', Validators.required),
  });

  readonly joinValidationMessages = {
    name: [
      {type: 'required', message: 'Name is required'},
      {type: 'minlength', message: 'Name must be at least 2 characters long'},
      {type: 'maxlength', message: 'Name cannot be more than 50 characters long'},
      {type: 'existingName', message: 'Name has already been taken'}
    ],

    age: [
      {type: 'required', message: 'Age is required'},
      {type: 'min', message: 'Age must be at least 15'},
      {type: 'max', message: 'Age may not be greater than 200'},
      {type: 'pattern', message: 'Age must be a whole number'}
    ],

    email: [
      {type: 'email', message: 'Email must be formatted properly'},
      {type: 'required', message: 'Email is required'}
    ],

    role: [
      { type: 'required', message: 'Role is required' },
      { type: 'pattern', message: 'Role must be Admin, Editor, or Viewer' },
    ]
  };

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router) {
  }

  formControlHasError(controlName: string): boolean {
    return this.joinForm.get(controlName).invalid &&
      (this.joinForm.get(controlName).dirty || this.joinForm.get(controlName).touched);
  }

  getErrorMessage(name: keyof typeof this.joinValidationMessages): string {
    for(const {type, message} of this.joinValidationMessages[name]) {
      if (this.joinForm.get(name).hasError(type)) {
        return message;
      }
    }
    return 'Unknown error';
  }

  openDialog() {
    // Logic to open a dialog with rules and information
    console.log('Dialog opened');
  }

  submitForm() {
    const formValue = this.joinForm.value;
    const user = {
      name: formValue.name,
      age: formValue.age,
      company: formValue.company,
      email: formValue.email,
      role: formValue.role,
      cards: [
        formValue.card1,
        formValue.card2,
        formValue.card3,
        formValue.card4,
        formValue.card5
      ]
    };

    this.userService.addUser(user).subscribe({
      next: () => {
        this.snackBar.open(
          `Joined as user ${formValue.name}`,
          null,
          { duration: 2000 }
        );
        this.router.navigate(['/lobby']); // Navigate to lobby page
      },
      error: err => {
        if (err.status === 400) {
          this.snackBar.open(
            `Tried to join with an illegal user – Error Code: ${err.status}\nMessage: ${err.message}`,
            'OK',
            { duration: 5000 }
          );
        } else if (err.status === 500) {
          this.snackBar.open(
            `The server failed to process your request to join. Is the server up? – Error Code: ${err.status}\nMessage: ${err.message}`,
            'OK',
            { duration: 5000 }
          );
        } else {
          this.snackBar.open(
            `An unexpected error occurred – Error Code: ${err.status}\nMessage: ${err.message}`,
            'OK',
            { duration: 5000 }
          );
        }
      },
    });
  }

}

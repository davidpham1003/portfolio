import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  formContact: FormGroup;
  isError: boolean;
  constructor( private contact: ContactService,
    private notifier: NotifierService) {
      this.formContact = new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ]),
        sub: new FormControl(null),
        mess: new FormControl(null, Validators.required),
      });
     }

  submit(value) {
    this.formContact.markAllAsTouched();
    if (this.formContact.invalid) {
      this.isError = true;
      return;
    }
    this.contact.createContact(value).then(() => {
      this.notifier.notify( 'success', 'You have successfully submitted !' );
      this.formContact.reset();
    });
   
    console.log(value);
  }
  ngOnInit(): void {
  }

}

import {Component}                                              from "angular2/core";
import {ContactService}                                         from "./../contact.service";
import {Router}                                                 from 'angular2/router';
import {FORM_PROVIDERS, ControlGroup, Validators, FormBuilder}  from 'angular2/common';


@Component({
  templateUrl:'dev/contacts/templates/newcontact.component.html',
  providers:[ContactService]
})
export class NewContactComponent{

  myForm: ControlGroup;

  constructor(
    private _contactService:ContactService,
    private _router : Router,
    private _formBuilder : FormBuilder)
  {
    this.myForm = this._formBuilder.group({
      //This should match with Contact.ts object
      'id'          : [Math.floor((Math.random() * 100) + 1).toString()],
      'firstname'   : ['', Validators.required],
      'lastname'    : ['', Validators.required],
      'email'       : ['']
    });
  }

  onAddContact(value){
    if(this.myForm.dirty && this.myForm.valid)
      this._contactService.insertContact(value);
      this._router.navigate(['Contacts']);
  }

}

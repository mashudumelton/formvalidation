import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
 
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {
  
  name;
  username;
  email;
  password;
   age
  login: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {

    this.login = this.fb.group({
      name: ['', Validators.compose([Validators.maxLength(30),Validators.required ,Validators.pattern('[a-zA-Z ]*')])],
      username: ['',Validators.compose([Validators.maxLength(30),Validators.required ,Validators.pattern('[a-zA-Z ]*')])],
      age: ['', Validators.compose([Validators.required])],
      email : ['',Validators.compose([Validators.required ,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password: ['',Validators.compose([Validators.required ,Validators.pattern('[a-zA-Z ]*')])]
    })
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  submit(){
  
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
    
    })

  }
}

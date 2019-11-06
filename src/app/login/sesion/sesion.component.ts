import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  /*constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }*/

  ngOnInit() {
  }

/*
  open(){
    this.modalService.open(PasswordComponent);
    this.activeModal.close();
  }

  */
}

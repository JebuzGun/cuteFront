import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CommunicationsProvider } from "../../providers/communications/communications";
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private communications: CommunicationsProvider, public modalCtrl: ModalController) {
    communications.getSales().then(data=>{
      console.log(data);
    }).catch(err=>{console.log(err)});
  }

  presentSaleModal(){
    let saleModal = this.modalCtrl.create(AboutPage);
    saleModal.present();
    saleModal.onDidDismiss(data=>{
      if(data){
        this.sale(data);
      }
    })
  }
  async sale(sale){
    this.communications.makeSale(sale)
  }
}

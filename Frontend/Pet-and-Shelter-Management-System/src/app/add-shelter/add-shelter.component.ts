import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { HttpErrorResponse } from '@angular/common/http';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';
declare const $: any;

@Component({
  selector: 'app-add-shelter',
  templateUrl: './add-shelter.component.html',
  styleUrls: ['./add-shelter.component.css']
})
export class AddShelterComponent {
  shelter: Shelter[] = [
    {
      id:"1",
      contactInfo:"01202743288",
      location:"cairo",
      name:"pet care shelter"
    },
    {
      id:"2",
      contactInfo:"01202743288",
      location:"Alexandria",
      name:"New shelter"
    },
    {
      id:"3",
      contactInfo:"01202743288",
      location:"Aswan",
      name:"old shelter"
    }
  ];
  remove_ad: Shelter = new Shelter();
  edit_ad = new Shelter();
  index_remved_shelter: any;
  index_edit_shelter: any;
  constructor(private service:ShelterserviceService) {
    
    this.service.get_Shelter().subscribe((x) => {
      console.log(x)
      this.shelter=x;
      error: (error: HttpErrorResponse) => alert(error.message);
    });

  }

  ngOnInit(): void {}


  close_popup() {
    $('#confirm').modal('hide');
    $('#edit').modal('hide');
    $('#add').modal('hide');
  }
  close() {
    this.close_popup();
    this.remove_ad = new Shelter();
    this.index_remved_shelter = '';
    this.edit_ad = new Shelter();
  }

  remove_address(value: any, index: any) {
    this.remove_ad = value;
    this.index_remved_shelter = index;
  }

  totaly_remove() {
    let x = new Shelter();
    x = this.shelter[this.index_remved_shelter];
    this.shelter.splice(this.index_remved_shelter, 1);
    this.close_popup();
    this.remove_ad = new Shelter();
    this.index_remved_shelter = '';
    this.service.delete_Shelter(x.id).subscribe((x) => {
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }
  edit_address(value: any, index: any) {
    this.edit_ad = value;
    this.index_edit_shelter = index;
  }

  totaly_edit(ed_name:any, ed_location:any,ed_Contact:any){
    this.shelter[this.index_edit_shelter].name = ed_name;
    this.shelter[this.index_edit_shelter].location = ed_location;
    this.shelter[this.index_edit_shelter].contactInfo = ed_Contact;
    this.close_popup();

    this.service
      .update_Shelter(
        this.shelter[this.index_edit_shelter]
      )
      .subscribe((x) => {

        error: (error: HttpErrorResponse) => alert(error.message);
      });
    // service edit address
  }

  add_shelter(
    shelter_name:any,
    Shelter_location:any,
    Shelter_contact:any,
  ){
    let x = new Shelter();
    x.name = shelter_name;
    x.location = Shelter_location;
    x.contactInfo = Shelter_contact;
    this.shelter.push(x);
    this.close_popup();
    //serviec add new address and recieve id and set it

    this.service.add_Shelter(x).subscribe((res) => {
      this.shelter[this.shelter.length - 1].id = res;
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }

}

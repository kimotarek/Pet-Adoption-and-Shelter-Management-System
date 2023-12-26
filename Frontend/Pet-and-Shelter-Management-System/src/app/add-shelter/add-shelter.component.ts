import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
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
      contact_info:"01202743288",
      location:"cairo",
      name:"pet care shelter"
    },
    {
      id:"2",
      contact_info:"01202743288",
      location:"Alexandria",
      name:"New shelter"
    },
    {
      id:"3",
      contact_info:"01202743288",
      location:"Aswan",
      name:"old shelter"
    }
  ];
  remove_ad: Shelter = new Shelter();
  edit_ad = new Shelter();
  index_remved_shelter: any;
  index_edit_shelter: any;
  constructor() {
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
    // this.service.remove_locate(x._id).subscribe((x) => {
    //   this.get_all_place();
    //   error: (error: HttpErrorResponse) => alert(error.message);
    // });
  }
  edit_address(value: any, index: any) {
    this.edit_ad = value;
    this.index_edit_shelter = index;
  }

  totaly_edit(ed_name:any, ed_location:any,ed_Contact:any){
    this.shelter[this.index_edit_shelter].name = ed_name;
    this.shelter[this.index_edit_shelter].location = ed_location;
    this.shelter[this.index_edit_shelter].contact_info = ed_Contact;
    this.close_popup();

    // this.service
    //   .edit_location(
    //     this.address[this.index_edit_address]._id,
    //     this.address[this.index_edit_address]
    //   )
    //   .subscribe((x) => {
    //     error: (error: HttpErrorResponse) => alert(error.message);
    //   });
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
    x.contact_info = Shelter_contact;
    this.shelter.push(x);
    this.close_popup();
    //serviec add new address and recieve id and set it

    // this.service.add_location(x).subscribe((x) => {
    //   this.address[this.address.length - 1]._id = x._id;

    //   this.get_all_place();
    //   error: (error: HttpErrorResponse) => alert(error.message);
    // });
  }

}

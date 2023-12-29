import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { HttpErrorResponse } from '@angular/common/http';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';
import { BreedServiceService } from '../services/breedService/breed-service.service';
import { speciebreed } from '../objects/speciebreed';
declare const $: any;

@Component({
  selector: 'app-add-breed',
  templateUrl: './add-breed.component.html',
  styleUrls: ['./add-breed.component.css']
})
export class AddBreedComponent {

  speciebreed: speciebreed[] = [
    {
      breed:"01202743288",
      specie:"cairo",
    },
    {
      breed:"01202743288",
      specie:"cairo",
    },
    {
      breed:"01202743288",
      specie:"cairo",
    }
  ];
  remove_ad: speciebreed = new speciebreed();
  edit_ad = new speciebreed();
  index_remved_speciebreed: any;
  index_edit_speciebreed: any;
  constructor(private service:BreedServiceService) {
    
    this.service.get_Breed().subscribe((x) => {
      console.log(x)
      this.speciebreed=x;
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
    this.remove_ad = new speciebreed();
    this.index_remved_speciebreed = '';
    this.edit_ad = new speciebreed();
  }

  remove_address(value: any, index: any) {
    this.remove_ad = value;
    this.index_remved_speciebreed= index;
  }

  totaly_remove() {
    let x = new speciebreed();
    x = this.speciebreed[this.index_remved_speciebreed];
    this.speciebreed.splice(this.index_remved_speciebreed, 1);
    this.close_popup();
    this.remove_ad = new speciebreed();
    this.index_remved_speciebreed = '';
    this.service.delete_Breed(x.breed).subscribe((x) => {
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }
  edit_address(value: any, index: any) {
    this.edit_ad = value;
    this.index_edit_speciebreed= index;
  }

  totaly_edit(ed_specie:any){
     this.speciebreed[this.index_edit_speciebreed].specie = ed_specie;
    this.close_popup();

    this.service
      .update_Breed(
        this.speciebreed[this.index_edit_speciebreed]
      )
      .subscribe((x) => {

        error: (error: HttpErrorResponse) => alert(error.message);
      });
    // service edit address
  }

  add_breedspecie(
    bread:any,
    specie:any,
  ){
    let x = new speciebreed();
    x.breed = bread;
    x.specie = specie;
    this.speciebreed.push(x);
    this.close_popup();
    //serviec add new address and recieve id and set it

    this.service.add_Breed(x).subscribe((res) => {
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }
}

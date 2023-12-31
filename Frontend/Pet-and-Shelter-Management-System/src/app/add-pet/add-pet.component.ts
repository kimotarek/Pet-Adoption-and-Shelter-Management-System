import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { Pets } from '../objects/pets';
import { PetServiceService } from '../services/petService/pet-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { speciebreed } from '../objects/speciebreed';
import { BreedServiceService } from '../services/breedService/breed-service.service';
declare const $: any;
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent {
  petArray: Pets[] = []
  //   {
  //     age: '4',
  //     name: 'Hunter',
  //     species: 'Dog',
  //     breed: 'Arabian Red',
  //     id: '4',
  //     gender: '1',
  //     healthStatus: 'Good',
  //     behaviour: 'Intelligence and Trainability',
  //     description:
  //       'Appearance: German Shepherds are medium to large-sized dogs with a well-balanced and muscular build. They have a distinct double coat, which is usually dense and straight. The outer coat can be short or medium in length, and the undercoat is thick. Color: The most common color for German Shepherds is the black and tan saddle pattern, but they can also be solid black or sable. White or cream colors are considered faults in the breed standard.',
  //     image: '../../assets/images/dog2.jpg',
  //     shelter_name: 'old Shelter',
  //     idOfShelter: '1',
  //     vaccination: 1,
  //     neutering: 1,
  //   },
  //   {
  //     age: '30 days',
  //     name: 'Bella',
  //     species: 'Cat',
  //     breed: 'Siamese',
  //     id: '3',
  //     gender: 'Female',
  //     healthStatus: 'Excellent',
  //     behaviour: 'Playful and Affectionate',
  //     description:
  //       'Appearance: Siamese cats are known for their sleek, slender bodies and striking blue almond-shaped eyes. They have short fur with color points on their ears, face, paws, and tail. Coat color can vary and includes seal, chocolate, blue, and lilac.',
  //     image: '../../assets/images/cat.jpeg',
  //     shelter_name: 'Pet Care Shelter',
  //     idOfShelter: '105',
  //     vaccination: 1,
  //     neutering: 1,
  //   },
  //   {
  //     age: '8 months',
  //     name: 'Rocky',
  //     species: 'Dog',
  //     breed: 'Labrador Retriever',
  //     id: '1',
  //     gender: 'Male',
  //     healthStatus: 'Very Good',
  //     behaviour: 'Friendly and Energetic',
  //     description:
  //       'Appearance: Labrador Retrievers are medium to large-sized dogs with a strong build. They have a short, dense water-resistant coat. Coat colors include yellow, black, and chocolate. Labrador Retrievers have a broad head, expressive eyes, and a distinctive otter tail.',
  //     image: '../../assets/images/dog.jpeg',
  //     shelter_name: 'New Shelter',
  //     idOfShelter: '104',
  //     vaccination: 1,
  //     neutering: 1,
  //   },
  //   {
  //     age: '1 Year and 3 Months',
  //     name: 'Whiskers',
  //     species: 'Cat',
  //     breed: 'Persian',
  //     id: '5',
  //     gender: 'Male',
  //     healthStatus: 'Fair',
  //     behaviour: 'Calm and Independent',
  //     description:
  //       'Appearance: Persian cats are known for their long, luxurious coats and flat faces. They have large, expressive eyes and a distinctive round head. Coat colors can vary widely, and their grooming needs are extensive.',
  //     image: '../../assets/images/cat2.jpeg',
  //     shelter_name: 'old Shelter',
  //     idOfShelter: '103',
  //     vaccination: 1,
  //     neutering: 1,
  //   },
  //   {
  //     age: '2 Years',
  //     name: 'Luna',
  //     species: 'Dog',
  //     breed: 'Siberian Husky',
  //     id: '1',
  //     gender: 'Female',
  //     healthStatus: 'Excellent',
  //     behaviour: 'Playful and Independent',
  //     description:
  //       'Appearance: Siberian Huskies are medium-sized working dogs with a thick double coat. They have erect triangular ears, distinctive markings, and striking blue or multicolored eyes. Siberian Huskies are known for their wolf-like appearance.',
  //     image: '../../assets/images/dog1.jpeg',
  //     shelter_name: 'Pet Care Shelter',
  //     idOfShelter: '102',
  //     vaccination: 1,
  //     neutering: 1,
  //   },
  //   {
  //     age: '1 Year',
  //     name: 'Oreo',
  //     species: 'Rabbit',
  //     breed: 'Holland Lop',
  //     id: '6',
  //     gender: 'Male',
  //     healthStatus: 'Good',
  //     behaviour: 'Gentle and Curious',
  //     description:
  //       'Appearance: Holland Lop rabbits are small with a distinctive lop ear (drooping ear) appearance. They have a compact, muscular body and a dense, soft coat. Coat colors can vary, and they often have a friendly and docile nature.',
  //     image: '../../assets/images/rabbit.jpeg',
  //     shelter_name: 'old Shelter',
  //     idOfShelter: '101',
  //     vaccination: 1,
  //     neutering: 1,
  //   },
  // ];
  remove_ad: Pets = new Pets();
  edit_ad = new Pets();
  index_remved_pet: any;
  index_edit_pet: any;
  pet_photo: any;
  selectedNeutering: boolean = false;
  selectedVaccination: boolean = false;
  petGender: boolean = true;
  breed: speciebreed[] = [];
  files: FormData[] = [];

  selectedBreed: speciebreed = new speciebreed();
  constructor(
    private service: PetServiceService,
    private service2: BreedServiceService
  ) {
    this.service2.get_Breed().subscribe((res) => {
      this.breed = res;
    });


    //cokies
    this.service.shelter_pets(2).subscribe((x) => {
      console.log(x);

      for(let i=0 ; i<x.length; i++){
        x[i].image = `data:image/jpeg;base64,${x[i].image}`;
      }
      this.petArray=x;
    });
  }

  ngOnInit(): void {
    // Your code here
  }

  close_popup() {
    $('#confirm').modal('hide');
    $('#edit').modal('hide');
    $('#add').modal('hide');
  }
  close() {
    this.close_popup();
    this.remove_ad = new Pets();
    this.index_remved_pet = '';
    this.edit_ad = new Pets();
  }

  remove(value: any, index: any) {
    this.remove_ad = value;
    this.index_remved_pet = index;
  }

  totaly_remove() {
    let x = new Pets();
    x = this.petArray[this.index_remved_pet];
    this.petArray.splice(this.index_remved_pet, 1);
    this.close_popup();
    this.remove_ad = new Pets();
    this.index_remved_pet = '';
    this.service.delete_pet(x.id).subscribe((x) => {
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }
  edit(value: any, index: any) {
    this.edit_ad = value;
    this.index_edit_pet = index;
  }

  totaly_edit(
    ed_pet_name: any,
    ed_pet_age: any,
    ed_pet_Gender: any,
    ed_pet_behavior: any,
    ed_pet_Health: any,
    ed_pet_Description: any
  ) {
    this.edit_ad.name = ed_pet_name;
    this.edit_ad.age = ed_pet_age;
    this.edit_ad.gender = ed_pet_Gender;
    this.edit_ad.behaviour = ed_pet_behavior;
    this.edit_ad.description = ed_pet_Description;
    this.edit_ad.healthStatus = ed_pet_Health;
    this.petArray[this.index_edit_pet] = this.edit_ad;
    this.close_popup();
    console.log(this.edit_ad);

    this.service
      .update_pet(this.petArray[this.index_edit_pet])
      .subscribe((x) => {
        error: (error: HttpErrorResponse) => alert(error.message);
      });
    // service edit address
  }
  add_pet(
    pet_name: any,
    pet_age: any,
    pet_health: any,
    pet_description: any,
    pet_behavior: any
  ) {
    let x = new Pets();
    x.name = pet_name;
    x.age = pet_age;
    x.behaviour = pet_behavior;
    x.description = pet_description;
    x.healthStatus = pet_health;
    //cookies
    x.idOfShelter = 2;
    if(this.selectedNeutering==true){
      x.neutering = 1;
    }
    else{
      x.neutering = 0;

    }
    if (this.selectedVaccination==true){
      x.vaccination = 1 ;
    }
    else{
      x.vaccination =0 ;

    }
    if (this.petGender==true){
      x.gender = 1 ;
    }
    else{
      x.gender =0 ;

    }
    x.species = this.selectedBreed.specie;
    x.breed = this.selectedBreed.breed;
    console.log(this.selectedBreed);

    this.petArray.push(x);
    this.close_popup();
    //serviec add new address and recieve id and set it
    this.service.add_pet(x).subscribe((res) => {
      this.petArray[this.petArray.length - 1].id = res;
      console.log(res)
       if (this.files.length != 0) {
        if (this.files[0] != null) {
          this.files[0].append('petId', res);
        }
        if (this.files[1] != null) {
          this.files[1].append('petId', res);
        }
        fetch(`http://localhost:8080/api/pet-documents/upload`, {
          method: 'POST',
          body: this.files[0],
        });
        fetch(`http://localhost:8080/api/pet-documents/upload`, {
          method: 'POST',
          body: this.files[1],
        });
      }
      this.selectedVaccination = false;
      this.selectedNeutering = false;
      this.selectedBreed = new speciebreed();
      error: (error: HttpErrorResponse) => alert(error.message);
    });
  }

  onPhotoselectimage(event: any): void {
    const fileInput = event.target.files[0];

    const formdata = new FormData();
    formdata.append('file', fileInput);
    formdata.append('fileType', 'IMAGE');

    this.files[0] = formdata;
  }

  onPhotoselectmedical(event: any): void {
    const fileInput = event.target.files[0];

    const formdata = new FormData();
    formdata.append('file', fileInput);
    formdata.append('fileType', 'MEDICAL_RECORD');

    this.files[1] = formdata;
  }
}

import { Component } from '@angular/core';
import { Shelter } from '../objects/shelters';
import { Pets } from '../objects/pets';
declare const $: any;
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent {
  petArray: Pets[] = [
    {
      age: '1 year',
      name: 'Hunter',
      species: 'Dog',
      breed: 'German Shepherd',
      id: '2',
      gender: 'Male',
      health_status: 'Good',
      behavior: 'Intelligence and Trainability',
      description:
        'Appearance: German Shepherds are medium to large-sized dogs with a well-balanced and muscular build. They have a distinct double coat, which is usually dense and straight. The outer coat can be short or medium in length, and the undercoat is thick. Color: The most common color for German Shepherds is the black and tan saddle pattern, but they can also be solid black or sable. White or cream colors are considered faults in the breed standard.',
      image: '../../assets/images/dog2.jpg',
      shelter_name: 'old Shelter',
      Shelter_id: '106',
    },
    {
      age: '30 days',
      name: 'Bella',
      species: 'Cat',
      breed: 'Siamese',
      id: '3',
      gender: 'Female',
      health_status: 'Excellent',
      behavior: 'Playful and Affectionate',
      description:
        'Appearance: Siamese cats are known for their sleek, slender bodies and striking blue almond-shaped eyes. They have short fur with color points on their ears, face, paws, and tail. Coat color can vary and includes seal, chocolate, blue, and lilac.',
      image: '../../assets/images/cat.jpeg',
      shelter_name: 'Pet Care Shelter',
      Shelter_id: '105',
    },
    {
      age: '8 months',
      name: 'Rocky',
      species: 'Dog',
      breed: 'Labrador Retriever',
      id: '4',
      gender: 'Male',
      health_status: 'Very Good',
      behavior: 'Friendly and Energetic',
      description:
        'Appearance: Labrador Retrievers are medium to large-sized dogs with a strong build. They have a short, dense water-resistant coat. Coat colors include yellow, black, and chocolate. Labrador Retrievers have a broad head, expressive eyes, and a distinctive otter tail.',
      image: '../../assets/images/dog.jpeg',
      shelter_name: 'New Shelter',
      Shelter_id: '104',
    },
    {
      age: '1 Year and 3 Months',
      name: 'Whiskers',
      species: 'Cat',
      breed: 'Persian',
      id: '5',
      gender: 'Male',
      health_status: 'Fair',
      behavior: 'Calm and Independent',
      description:
        'Appearance: Persian cats are known for their long, luxurious coats and flat faces. They have large, expressive eyes and a distinctive round head. Coat colors can vary widely, and their grooming needs are extensive.',
      image: '../../assets/images/cat2.jpeg',
      shelter_name: 'old Shelter',
      Shelter_id: '103',
    },
    {
      age: '2 Years',
      name: 'Luna',
      species: 'Dog',
      breed: 'Siberian Husky',
      id: '1',
      gender: 'Female',
      health_status: 'Excellent',
      behavior: 'Playful and Independent',
      description:
        'Appearance: Siberian Huskies are medium-sized working dogs with a thick double coat. They have erect triangular ears, distinctive markings, and striking blue or multicolored eyes. Siberian Huskies are known for their wolf-like appearance.',
      image: '../../assets/images/dog1.jpeg',
      shelter_name: 'Pet Care Shelter',
      Shelter_id: '102',
    },
    {
      age: '1 Year',
      name: 'Oreo',
      species: 'Rabbit',
      breed: 'Holland Lop',
      id: '6',
      gender: 'Male',
      health_status: 'Good',
      behavior: 'Gentle and Curious',
      description:
        'Appearance: Holland Lop rabbits are small with a distinctive lop ear (drooping ear) appearance. They have a compact, muscular body and a dense, soft coat. Coat colors can vary, and they often have a friendly and docile nature.',
      image: '../../assets/images/rabbit.jpeg',
      shelter_name: 'old Shelter',
      Shelter_id: '101',
    },
  ];
  remove_ad: Pets = new Pets();
  edit_ad = new Pets();
  index_remved_pet: any;
  index_edit_pet: any;
  pet_photo: any;
  constructor() {}

  ngOnInit(): void {}

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
    // this.service.remove_locate(x._id).subscribe((x) => {
    //   this.get_all_place();
    //   error: (error: HttpErrorResponse) => alert(error.message);
    // });
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
    ed_pet_Breed: any,
    ed_pet_Health: any,
    ed_pet_species: any,
    ed_pet_Description: any
  ) {
    this.edit_ad.name = ed_pet_name;
    this.edit_ad.age = ed_pet_age;
    this.edit_ad.gender = ed_pet_Gender;
    this.edit_ad.behavior = ed_pet_behavior;
    this.edit_ad.breed = ed_pet_Breed;
    this.edit_ad.species = ed_pet_species;
    this.edit_ad.description = ed_pet_Description;
    this.edit_ad.health_status = ed_pet_Health;
    this.petArray[this.index_edit_pet] = this.edit_ad;
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

  add_pet(
    pet_name: any,
    pet_age: any,
    pet_species: any,
    pet_breed: any,
    pet_gender: any,
    pet_health: any,
    pet_description: any,
    pet_behavior: any
  ) {
    let x = new Pets();
    x.name = pet_name;
    x.age = pet_age;
    x.gender = pet_gender;
    x.behavior = pet_behavior;
    x.breed = pet_breed;
    x.species = pet_species;
    x.description = pet_description;
    x.health_status = pet_health;
    x.image = this.pet_photo;
    this.petArray.push(x);
    this.close_popup();
    //serviec add new address and recieve id and set it

    // this.service.add_location(x).subscribe((x) => {
    //   this.address[this.address.length - 1]._id = x._id;

    //   this.get_all_place();
    //   error: (error: HttpErrorResponse) => alert(error.message);
    // });
  }

  onPhotoselect(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // Access the URL of the selected image
        const imageUrl = e.target.result;
        this.pet_photo = imageUrl;
        this.edit_ad.image = imageUrl;
        // You can do something with the imageUrl, for example, update the form control
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}

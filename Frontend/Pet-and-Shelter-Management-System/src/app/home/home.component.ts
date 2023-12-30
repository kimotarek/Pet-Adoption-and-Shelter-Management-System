import { Component, HostListener } from '@angular/core';
import { users } from '../objects/users';
import { ModalPopServiceService } from '../services/modal-pop-service-service.service';
import { Router } from '@angular/router';
import { Pets } from '../objects/pets';
import { PetServiceService } from '../services/petService/pet-service.service';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isUserSidebarOpen = false;
  // curruser = this.service.getUser();
  curruser = new users();
  isadmin: boolean = false;
  isLogin = false;
  selected_pet:Pets=new Pets();
  petArray: Pets[] = [
    {
      age: '1 year',
      name: 'Hunter',
      species: 'Dog',
      breed: 'German Shepherd',
      id: '2',
      gender: 'Male',
      healthStatus: 'Good',
      behaviour: 'Intelligence and Trainability',
      description:
        'Appearance: German Shepherds are medium to large-sized dogs with a well-balanced and muscular build. They have a distinct double coat, which is usually dense and straight. The outer coat can be short or medium in length, and the undercoat is thick. Color: The most common color for German Shepherds is the black and tan saddle pattern, but they can also be solid black or sable. White or cream colors are considered faults in the breed standard.',
      image: '../../assets/images/dog2.jpg',
      shelter_name: 'old Shelter',
      idOfShelter: '106',
      vaccination:1,
      neutering:1,
    },
    {
      age: '30 days',
      name: 'Bella',
      species: 'Cat',
      breed: 'Siamese',
      id: '3',
      gender: 'Female',
      healthStatus: 'Excellent',
      behaviour: 'Playful and Affectionate',
      description:
        'Appearance: Siamese cats are known for their sleek, slender bodies and striking blue almond-shaped eyes. They have short fur with color points on their ears, face, paws, and tail. Coat color can vary and includes seal, chocolate, blue, and lilac.',
      image: '../../assets/images/cat.jpeg',
      shelter_name: 'Pet Care Shelter',
      idOfShelter: '105',
      vaccination:1,
      neutering:1,
    },
    {
      age: '8 months',
      name: 'Rocky',
      species: 'Dog',
      breed: 'Labrador Retriever',
      id: '4',
      gender: 'Male',
      healthStatus: 'Very Good',
      behaviour: 'Friendly and Energetic',
      description:
        'Appearance: Labrador Retrievers are medium to large-sized dogs with a strong build. They have a short, dense water-resistant coat. Coat colors include yellow, black, and chocolate. Labrador Retrievers have a broad head, expressive eyes, and a distinctive otter tail.',
      image: '../../assets/images/dog.jpeg',
      shelter_name: 'New Shelter',
      idOfShelter: '104',
      vaccination:1,
      neutering:1,
    },
    {
      age: '1 Year and 3 Months',
      name: 'Whiskers',
      species: 'Cat',
      breed: 'Persian',
      id: '5',
      gender: 'Male',
      healthStatus: 'Fair',
      behaviour: 'Calm and Independent',
      description:
        'Appearance: Persian cats are known for their long, luxurious coats and flat faces. They have large, expressive eyes and a distinctive round head. Coat colors can vary widely, and their grooming needs are extensive.',
      image: '../../assets/images/cat2.jpeg',
      shelter_name: 'old Shelter',
      idOfShelter: '103',
      vaccination:1,
      neutering:1,
    },
    {
      age: '2 Years',
      name: 'Luna',
      species: 'Dog',
      breed: 'Siberian Husky',
      id: '1',
      gender: 'Female',
      healthStatus: 'Excellent',
      behaviour: 'Playful and Independent',
      description:
        'Appearance: Siberian Huskies are medium-sized working dogs with a thick double coat. They have erect triangular ears, distinctive markings, and striking blue or multicolored eyes. Siberian Huskies are known for their wolf-like appearance.',
      image: '../../assets/images/dog1.jpeg',
      shelter_name: 'Pet Care Shelter',
      idOfShelter: '102',
      vaccination:1,
      neutering:1,
    },
    {
      age: '1 Year',
      name: 'Oreo',
      species: 'Rabbit',
      breed: 'Holland Lop',
      id: '6',
      gender: 'Male',
      healthStatus: 'Good',
      behaviour: 'Gentle and Curious',
      description:
        'Appearance: Holland Lop rabbits are small with a distinctive lop ear (drooping ear) appearance. They have a compact, muscular body and a dense, soft coat. Coat colors can vary, and they often have a friendly and docile nature.',
      image: '../../assets/images/rabbit.jpeg',
      shelter_name: 'old Shelter',
      idOfShelter: '101',
      vaccination:1,
      neutering:1,
    },
  ];






  constructor(
    private popup: ModalPopServiceService,
    private route: Router,
    private service: PetServiceService
  ) {


    this.service.get_all().subscribe((x) => {
      console.log(x);

      for(let i=0 ; i<x.length; i++){
        x[i].image = `data:image/jpeg;base64,${x[i].image}`;
      }
      this.petArray=x;
    });

  }

  toggleUserSidebar() {
    this.isUserSidebarOpen = !this.isUserSidebarOpen;
    if (this.curruser != null) {
      if (this.curruser.role[0] == "admin" || this.curruser.role[0] == "MANAGER" || this.curruser.role[0] == "EMPLOYEE") {
        this.isadmin = true;
      }
    }
  }
  closeUserSidebar() {
    this.isUserSidebarOpen = false;
  }
  login() {
    this.route.navigate(['']);
  }
  register() {
    this.route.navigate(['/signup']);
  }
  goTouserPage() {
    this.route.navigate(['/userpage'])
  }
  goToadminPage() {
    this.route.navigate(['/adminpage/about'])
  }
 
  open_about() {
    this.route.navigate(['/']);
  }

  logout(): void {
   
  }
  open_Contact(){

  }
  select_pet(pet:Pets){
    this.selected_pet=pet
  }
  close_popup() {
    $('#pet_details').modal('hide');
  }

}

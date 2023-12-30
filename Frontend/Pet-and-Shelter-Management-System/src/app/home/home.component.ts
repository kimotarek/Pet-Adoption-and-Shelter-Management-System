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
  searchValue: string = '';
  searchCriteria: string = 'breed';
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
      shelterLocation: 'Cairo',
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
      shelterLocation: 'Cairo',

    },
  ];






  constructor(
    private popup: ModalPopServiceService,
    private route: Router,
    private service: PetServiceService,
   
  ) {


    console.log(localStorage.getItem('userName'))
    if(localStorage.getItem('userName')==null){
      this.isLogin=false;
    }else{
      this.isLogin=true;
      this.curruser.first_name=localStorage.getItem('userName');
    }

    

   console.log(service)
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
      if (localStorage.getItem("role")=="MANGER"||localStorage.getItem("role")=="STAFF") {
        this.isadmin = true;
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
    this.route.navigate(['/user_home'])
  }
  goToadminPage() {
    this.route.navigate(['/'])
  }
 
  open_about() {
    this.route.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("userName")
    localStorage.removeItem("role")

    this.route.navigate(['']);
  }
  open_Contact(){

  }
  select_pet(pet:Pets){
    this.selected_pet=pet
    this.service.pet_profile=pet;
    this.route.navigate(['pet_home/pet_profile']);
  }
  close_popup() {
    $('#pet_details').modal('hide');
  }


  searchPets() {
    // Call the service method to search for pets based on searchValue and searchCriteria
    this.service.searchPets(this.searchValue, this.searchCriteria).subscribe((result) => {
      for(let i=0 ; i<result.length; i++){
        result[i].image = `data:image/jpeg;base64,${result[i].image}`;
      }
      this.petArray = result;
    });
  }


}

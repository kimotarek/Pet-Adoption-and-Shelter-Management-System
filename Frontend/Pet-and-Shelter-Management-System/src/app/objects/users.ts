export class users {
    first_name: any;
    last_name: any;
    Shelter: any;
    email: any;
    phone_number: any;
    password: any;
    _id: any;
    photo: any=null;  
    role:any
    set_first_name(value: any) {
      this.first_name = value;
    }
    set_last_name(value: any) {
      this.last_name = value;
    }
    set_Shelter(value: any) {
      this.Shelter = value;
    }
    set_email(value: any) {
      this.email = value;
    }
    set_phone_namber(value: any) {
      this.phone_number = value;
    }
    set_password(value: any) {
      this.password = value;
    }
    set_id(value: any) {
      this._id = value;
    }
    set_photo(value: any) {
      this.photo = value;
    }
  
    get_first_name() {
      return this.first_name;
    }
    get_last_name() {
      return this.last_name;
    }
    get_Shelters() {
      return this.Shelter;
    }
  
    get_email() {
      return this.email;
    }
    get_phone_namber() {
      return this.phone_number;
    }
    get_password() {
      return this.password;
    }
    get_id() {
      return this._id;
    }
    get_photo() {
      return this.photo;
    }
  }
  
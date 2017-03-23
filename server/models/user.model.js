class UserModel { // es6 class

  constructor({id, firstName, lastName, description}) { //es2015 destructuring
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }
  getName(){
    const f = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
    const l = this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
    return `${f} ${l}`; //es6 string template
  }

}

module.exports = UserModel;

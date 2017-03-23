const SmartUserModel = require('./smart.user.model');

class UserList {

  constructor(data) {
    this.list = data.map(item => new SmartUserModel(item)); // es2015 arrow function 

    // this.list = data.map(function(item){
    //   return new SmartUserModel(item);
    // });

    // this.list = [];
    // for (var i = 0; i < data.length; i++) {
    //   this.list.push( new SmartUserModel(data[i]) );
    // }
  }

  getItemById(id) {
    return this.list.find(item => item.id === Number(id));
  }

  getNextId() {
    return this.list.reduce((acc, item) => {
      return (acc > item.id) ? acc : item.id;
    }, 0);
  }

  add(data) {
    console.log('data : ', JSON.stringify(data));
    //const dataWithId = {...data, id: this.getNextId()+1 };
    data.id = this.getNextId()+1;
    const user = new SmartUserModel(data);
    if(user) {
      this.list = [...this.list, user];
    }
    return user;
  }

}

module.exports = UserList;

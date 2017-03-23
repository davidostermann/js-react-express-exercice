const UserModel = require('./user.model');

class SmartUserModel extends UserModel {

  constructor(obj) {
    super(obj);
    this.role = obj.role;
    this.birthYear = obj.birthYear;
  }

  getSmartSentence() {
    //...
  }


}

module.exports = SmartUserModel;

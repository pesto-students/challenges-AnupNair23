
// (*)
// Follow the instructions and fill in the blank sections.
function User() {
  this.userName = "Anup"
  this.password = "PESTO@123"
  // set a username and password property on the user object that is created
}

let newUser = new User()
// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
User.prototype.checkPassword = function checkPassword(userName, password) {
  if(password === newUser.password) 
    return true
  else
    return false
};

export {
  User,
};

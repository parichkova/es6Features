function User(id) {
    this.id = id;
}


function generateID() {
    return Math.random() * 9999;
}

function createAdmin(user = new User(generateID())) {
    user.isAdmin = true;
    
    return user;
}
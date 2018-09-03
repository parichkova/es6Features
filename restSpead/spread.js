//if you have array with elements they will be made into separate elements

const defaultColors = ['red', 'green', 'blue'];
const userFavourite = ['orange', 'yellow'];

defaultColors.concat(userFavourite);
//i will have two arrays into one now
//it is the same like

['pink', ...defaultColors, ...userFavourite];

//both cases I have ['red', 'green', 'blue', 'orange', 'yellow'];


//with spread I am taking all of the elements from array
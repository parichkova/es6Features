var savedFile = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};


function makeFileSummary(file) {
//    return `File size is ${file.size} its name is ${savedFile.name} and its extension is ${file.extension}`;
    return `${file.name}${file.extension} size: ${file.size}`;
}

//instead we can use destructuring

function summarize({extension, name , size}) {
    return `${file.name}${file.extension} size: ${file.size}`;
}

//in case I have one new parameter {color: 'red'}

function summarize({extension, name , size}, {color} ) {
    return `${file.name}${file.extension} size: ${file.size}`;
}



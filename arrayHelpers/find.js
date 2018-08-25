//връща първия елемент, който отговаря на критериите.

let users = [
    {name: 'Mike'},
    {name: 'Jessica'},
    {name: 'Alex'},
];

let user = users.find((us) => {
    return user.name === 'Alex';
});

console.log(user);


let post = {id: 4, content: 'super'};
let comments = [
    {postId: 4, content: 'neat'},
    {postId: 3, content: 'not bad'},
    {postId: 4, content: 'super cool'},   
];


function commentsByPost(comments, post) {
    return comments.find((comment) => {
        return comment.postId === post.id;
    })
}

let commentsAssoc = commentsByPost(comments, post);
console.log(commentsAssoc);

var ladders = [

    {id: 1, height: 20},
  
    {id: 2, height: 35},
  
    {id: 3, height: 65},
  
  ];
    
function findWhere(array, criteria) {
    return array.find(function(element) {
        return criteria[Object.keys(criteria)] === element[Object.keys(criteria)];
    });
}
    
findWhere(ladders, {height: 35});


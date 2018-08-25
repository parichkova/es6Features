let products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'orange', type: 'fruit'},
    {name: 'pepper', type: 'vegetable'},
    {name: 'banana', type: 'fruit'}
];

let fruits = products.filter((product)=>{
    return product.type === 'fruit';
})

console.log(fruits);


let post = {id: 4, content: 'super'};
let comments = [
    {postId: 4, content: 'neat'},
    {postId: 3, content: 'not bad'},
    {postId: 4, content: 'super cool'},   
];


function commentsByPost(comments, post) {
    return comments.filter((comment) => {
        return comment.postId === post.id;
    })
}


let commentsAssoc = commentsByPost(comments, post);
console.log(commentsAssoc);

// if I have an array of numbers and I want to return those that are not matching a criteria
function reject(array, iteratorFunction) {
    return  array.filter((num)=> {
        return !iteratorFunction(num);
    })
}
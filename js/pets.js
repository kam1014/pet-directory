/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

// let p_name = '';
// let p_type = '';
// let p_breed = '';
// let p_age = 0;
// let p_image = ``;

let pets = [
  {name: 'Sammy', type: 'Dog' , breed: 'Australian Shepherd' , age: 2 , photo: 'img/aussie.jpg'},
  {name: 'Max' , type: 'Dog' , breed: 'Smooth Dachshund' , age: 1 , photo: 'img/dachshund.jpg'},
  {name: 'Stella' , type: 'Dog'  , breed: 'Golden Retriever' , age: 4 , photo: 'img/golden.jpg'},
  {name: 'lucky' , type: 'Cat'  , breed: 'Himalayan Persian' , age: 3 , photo: 'img/persian.jpg'},
  {name: 'Betsy' , type: 'Dog'  , breed: 'Fawn Pug' , age: 1 , photo: 'img/pug.jpg'},
  {name: 'Kit' , type: 'Cat'  , breed: 'Classic Tabby' , age: 3 , photo: 'img/tabby.jpg'}
]


function createListItems(arr) {
 
let items = ''; 

for ( let i = 0; i < arr.length; i++ ) {

  items += `
  <ul>
  <h2>${pets[i].name}</h2>
  <h3>${pets[i].type} | ${pets[i].breed}</h3>
  <p> Age: ${pets[i].age}</p>
  <img src ="${pets[i].photo}">
  </ul>`;
}
return items;
}


let html = `${createListItems(pets)}`;

// console.log(html);


document.querySelector('main').innerHTML = html ; 
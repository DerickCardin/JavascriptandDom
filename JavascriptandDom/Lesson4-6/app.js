//LESSON 1-3//

//var titles = document.getElementsByClassName('title');



//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

//Array.from(titles).forEach(function(title){
//  console.log(title);
//});

//const search = document.getElementById('search-books');
//const bookList = document.getElementById('book-list');

//console.log(search, bookList);


//LESSON 4//
//const wmf = document.querySelector('#book-list li:nth-child(2).name');
//console.log(wmf);

//var books = document.querySelector('#book-list li.name');
//console.log(books);

//books = document.querySelectorAll('#book-list li.name')
//console.log(books);

//Array.from(books).forEach(function(book){
//    console.log(book);
//})

//LESSON 5//
//var books = document.querySelector('#book-list li.name');
//Array.from(books).forEach(function(book){
//    book.textContent += ' (book title)';
//});

//const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more books...</h2>';//
//bookList.innerHTML += '<p>This is how you add HTML</p>';

//Lesson 6//
const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:',banner.nodeType);
console.log('#page-banner node name is:',banner.nodeName);
console.log('#page-banner has child nodes:',banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);












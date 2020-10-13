const photo = new Photo();
photo.curatedPhotos();

const gallery = document.querySelector('.gallery');
const search = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
const more = document.querySelector('.more');
let searchVal;

// Event Listener
search.addEventListener('input', updateResults);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    photo.searchPhotos(searchVal);
    
})

more.addEventListener('click' ,() => {
   photo.loadMore();
});


function updateResults(e){
  searchVal = e.target.value;

}

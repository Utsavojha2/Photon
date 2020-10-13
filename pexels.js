
class Photo{
    constructor(){
        this.API_key = "563492ad6f91700001000001936cbb41bd98447b925cc0ee21da23e6";
        this.page = 1;
        this.fetchLink;
        this.currentSearch;
    }
    
    generatePics(datas){
        datas.photos.forEach(photo => {
            const galleryImg = document.createElement('div');
            galleryImg.classList.add('gallery-img');
            galleryImg.innerHTML = `
            <img src=${photo.src.portrait}></img>
            <div class="download">
            <a href=${photo. photographer_url} target="_blank" id="redirect">By: ${photo.photographer}<a>
            <a href=${photo.src.original} id="redire" target="_blank">Download</a>
            </div>`;  
            document.querySelector('.gallery').appendChild(galleryImg);
        });
    }

    async fetchAPI(link){
     const dataFetch = await fetch(link, {
        method : 'GET',
        headers : {
            Accept : 'application/json',
            Authorization : this.API_key
        }
    })
        const data = dataFetch.json();
        return data;
    }
   
  
    async curatedPhotos(){
        this.fetchLink = `https://api.pexels.com/v1/search?query=NYC`;
        const data = await this.fetchAPI(this.fetchLink);
        console.log(data);     
        this.generatePics(data);

}


    async searchPhotos(query){
        this.currentSearch = query;
        photo.clearUI();
        this.fetchLink = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=${this.page}`;
        const data = await this.fetchAPI(this.fetchLink);
        this.generatePics(data);
    }
  
    clearUI(){
     gallery.innerHTML = '';
     search.value = "";

  }
  async loadMore(){
    this.page ++;
    if (this.currentSearch) {
        this.fetchLink = `https://api.pexels.com/v1/search?query=${this.currentSearch}&per_page=15&page=${this.page}`;
    } else {
        this.fetchLink = `https://api.pexels.com/v1/search?query=NYC&per_page=15&page=${this.page}`;
    }
    const data = await this.fetchAPI(this.fetchLink);
     this.generatePics(data);
  }
}
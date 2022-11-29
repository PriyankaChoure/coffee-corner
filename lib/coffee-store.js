/**   unsplash code  */
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,

});

/**     four squar code */
const getUrlForCoffeeStore =  (latlong, query,limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`
}

const  getListOfCoffeeStoresPhotos =async () => {
    // get photos from unsplash
    const response = await unsplash.search.getPhotos({
        query: 'coffee shop',
        page: 1,
        perPage: 10,
        
      });
      const photos = response.response.results;
      return photos.map((photo)=> photo.urls["small"]);

}

const FetchCoffeeStoreData =async () => {
    const coffeeStorePhotos = await getListOfCoffeeStoresPhotos();
    // console.log({coffeeStorePhotos});    

    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.FOURSQUARE_API_KEY
        }
    };
    
    const response = await fetch(getUrlForCoffeeStore("22.64257429054852%2C75.8058663303005","coffee",6), options)
    const data  = await response.json()
    
    return  data.results.map((result, idx) => { //idx is index
        return {
          id: result.fsq_id,
          name: result.name,
          address: result.location.address,
          neighbourhood: result.location.locality ? result.location.locality : "",
          imgUrl: coffeeStorePhotos[idx], //photos is an array as well so we can loop here
        };
      });
}
   
export default FetchCoffeeStoreData;
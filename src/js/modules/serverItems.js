
class ItemsService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=32a817fadf47affcfc4d0e3b3fec83d9';
    _baseOffset = 200;

   getRecurce = async(url) => {
       let res = await fetch (url);

       if(!res.ok){
           throw new Error (`ошибка по адресу ${urk}, статус ошибки - ${res.status}`);
       }
       return await res.json()
   }

   getAllItems = async(offset = this._baseOffset) => {
       const res = await this.getRecurce(`${this._apiBase}characters?limit=7&offset=${offset}&${this._apiKey}`);
       return res.data.results.map(item => this.transformItems(item))
   }

   transformItems = (item) => {
       return {
           name: item.name,
           thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension
       }
   }

};

export default ItemsService;
export default class FilmsServise{
    url = 'https://swapi.dev/api/films/';

    async getFilms(){
        return await fetch(this.url).then(value=> value.json()).then(value=> value.results);
    }
}

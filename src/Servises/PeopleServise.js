export default class PeopleServise{
    url = 'https://swapi.dev/api/people/';

    async getPeople(){
        return await fetch(this.url).then(value => value.json()).then(value=> value.results)}
}

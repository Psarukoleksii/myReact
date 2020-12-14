export default class PlanetsServise{
    url = 'https://swapi.dev/api/planets';

    async getPlanets() {
        return await fetch(this.url).then(value=> value.json()).then(value=> value.results)
    }
}

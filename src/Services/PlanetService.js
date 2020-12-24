export default class PlanetService {
    _url = 'https://swapi.dev/api/planets';

    async getPlanet(id){
        return await fetch(`${this._url}/${id}`)
            .then(resp=>{
                if(resp.ok){
                    return (
                        resp.json()
                    )
                } else {
                    return Promise.reject(`is not ok: ${resp.status}`)
                }
            })
    }
}

export default class PeopleService {
    _url = 'https://swapi.dev/api/people';

    async getAllPeople() {
        return await fetch(this._url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                        .then(value => value.results)
                } else {
                    return Promise.reject('is not ok' + resp.status)
                }
            })
    }

    async getOnePerson(id){
        return await fetch(this._url + '/' + id)
            .then(resp=>{
                if(resp.ok){
                    return resp.json()
                        .then(value=> value)
                } else{
                    return Promise.reject('is not ok' + resp.status)
                }
            });
    }
}

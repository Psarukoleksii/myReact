export class userServise {

    url = 'https://jsonplaceholder.typicode.com/users';


    getUserById (id) {
        console.log('getUserById');
        return fetch(`${this.url}/${id}`)
            .then(resp => {
                console.log(resp.status);
                console.log(resp.ok);
                if(resp.status === 200){ // or resp.ok
                    return resp.json()
                }else{
                    // throw Error(`is not ok: ` + resp.status);
                    return Promise.reject('is not ok: ' + resp.status)
                }
            })
    }

}


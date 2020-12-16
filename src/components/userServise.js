export class userServise {

    url = 'https://jsonplaceholder.typicode.com/users';


    async getUserById (id) {
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)
    }

}


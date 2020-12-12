export default class userServise{
    url = 'https://jsonplaceholder.typicode.com/users';

     async users() {
        return await fetch(this.url).then(value=> value.json());
    }
    async getOneUser(id){
        return await fetch(this.url + '/' + id).then(value => value.json());
    }
}

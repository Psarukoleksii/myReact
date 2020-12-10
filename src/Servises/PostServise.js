export default class PostServise{
    url = 'https://jsonplaceholder.typicode.com/posts';

    async posts(){
        return await fetch(this.url).then(value => value.json());
    }
}

export default class PostServise{
    url = 'https://jsonplaceholder.typicode.com/posts';

    posts = (id) => {
        return fetch(this.url + '?userId=' + id).then(value => value.json()).then(value => value);
    }
}

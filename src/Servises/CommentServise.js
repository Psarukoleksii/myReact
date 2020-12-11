export default class CommentServise{
    url = 'https://jsonplaceholder.typicode.com/comments';

    async comment(){
        return await fetch(this.url).then(value => value.json());
    }

    async getOneComment(id){
        return await fetch(this.url + '/' + id).then(value=> value.json());
    }
}

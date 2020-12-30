class HttpClient {
    get(url, params){
        return fetch(url, params)
    }
}
// це патерн адаптер, якщо в нас зміниться бібліотека, яка відпавляє нам дані, то це буде легко змінити

export const httpClient = new HttpClient();
// single-ton - патерн, якщо ми знаємо, що це не буде змінюватись і робити декілька екземплярів на сайті

// 4 methods HTTP request
// get - просто получаєш дані.
// post - відправляєш дані на сервер і записуються в БД
// patch - апдейтиш дані в БД
// delete - видаляєш дані

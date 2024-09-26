// Импорт стилей
import './style.scss';  // Импортируем SCSS файл



// Переменные
const btn = document.getElementById('btn');



// Получение изображений
let data = fetch("https://dog.ceo/api/breeds/image/random/20")
    .then(res => res.json())
    .then(res => {
        let objs = res.message;
        objs.forEach(obj => console.log(obj));
        // console.log(res) - проверка ответа res
    })
    .catch(error => console.log("Ошибка запроса:", error));
// console.log(data);



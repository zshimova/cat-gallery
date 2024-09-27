// Импорт стилей
import './style.scss';

// Переменные
const btn = document.getElementById('btn');
const imgContainer = document.getElementById('imgContainer');


// Получение изображений
async function getData() {
    try {
        let data = await fetch("https://dog.ceo/api/breeds/image/random/20");
        let data2 = await data.json();

        console.log(data2)
    } catch {
        error => console.log("Error", error)
    } finally {
        console.log("промис выполнен")
    }
};
getData();


// Клик по кнопке для загрузки изображений
btn.addEventListener("click", loadImg());

// Функция для загрузки
function loadImg() {

}
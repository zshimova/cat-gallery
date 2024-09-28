// Импорт стилей
import './style.scss';

// Переменные
const btn = document.getElementById('btn');
const imgContainer = document.querySelector('.img-container');


// Получение изображений
async function getData() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random/20");
        let data = await response.json();
        // console.log(data);
        return data.message;
    } catch (error) {
        console.log("Error", error)
    } finally {
        console.log("промис выполнен")
    }
};
getData();


// Клик по кнопке для загрузки изображений
btn.addEventListener("click", loadImg);


// Функция встраивания изображений в разметку
async function loadImg() {
    const data = await getData();
    
    imgContainer.innerHTML = '';
    data.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Dog image";
        img.style.width = '200px';
        img.style.height = '200px';
        imgContainer.appendChild(img);
    });
}

// Функции управления лоадером
function showLoader() {
    document.getElementById("loader").style.display = "flex"; // Лоадер виден
}
function hideLoader() {
    document.getElementById("loader").style.display = "none"; // Лоадер скрыт
}

// Обработчик события для кнопки
btn.addEventListener("click", async () => {
    try {
        showLoader(); // Показать лоадер
        const result = await getData(); // Выполнить асинхронную функцию
        console.log(result); // Обработать результат
    } catch (err) {
        console.error("Ошибка:", err); // Логирование ошибки
    } finally {
        hideLoader(); // Скрыть лоадер независимо от результата
    }
});

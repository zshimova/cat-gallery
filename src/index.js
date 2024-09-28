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
        return data.message;
    } catch (error) {
        console.log("Error", error);
    } finally {
        console.log("Промис выполнен");
    }
}

// Функция встраивания изображений в разметку
async function loadImg() {
    try {
        const data = await getData();
        imgContainer.innerHTML = '';  // Очистка контейнера
        data.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = "Dog image";
            img.style.width = '200px';
            img.style.height = '200px';
            imgContainer.appendChild(img);
        });
    } catch (error) {
        console.error("Ошибка при загрузке изображений:", error);
    }
}

// Функции управления лоадером
function showLoader() {
    document.querySelector(".loader").style.display = "flex";
    document.querySelector(".mask").style.display = "flex"; 
}

function hideLoader() {
    document.querySelector(".loader").style.display = "none"; 
    document.querySelector(".mask").style.display = "none";
}

// Обработчик события для кнопки 
btn.addEventListener("click", async () => {
    try {
        showLoader();  
        await loadImg(); 
    } catch (err) {
        console.error("Ошибка:", err);
    } finally {
        hideLoader();  
    }
});

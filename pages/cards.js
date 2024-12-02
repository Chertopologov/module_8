document.getElementById('load__Photos').addEventListener('click', async (event) => {
    event.preventDefault();

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        if (!response.ok) {
            throw new Error('Сеть не отвечает'); 
        }

        const photos = await response.json();

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.thumbnailUrl;
            img.alt = photo;
            img.classList.add('photo'); 
            gallery.appendChild(img); 
        });
    } catch (error) {
        console.error('Ошибка:', error); 
        alert('Произошла ошибка при загрузке фотографий.'); 
    } finally {
        console.log('Запрос завершен.');
    }
});
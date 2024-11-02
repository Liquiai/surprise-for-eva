document.getElementById('createCard').addEventListener('click', function() {
    const cardType = document.getElementById('cardType').value;
    const card = document.getElementById('card');
    const cardVideo = document.getElementById('cardVideo');

    let videoUrl = '';

    switch (cardType) {
        case 'love':
            videoUrl = 'https://youtube.com/shorts/3QmcFWv5L5s?si=QV-J5XCejBzNUFpf'; // Замените на реальный ID видео
            break;
        case 'friendship':
            videoUrl = 'https://youtube.com/shorts/3QmcFWv5L5s?si=QV-J5XCejBzNUFpf'; // Замените на реальный ID видео
            break;
        case 'birthday':
            videoUrl = 'https://youtube.com/shorts/3QmcFWv5L5s?si=QV-J5XCejBzNUFpf'; // Замените на реальный ID видео
            break;
        default:
            alert('Пожалуйста, выбери что нибудь).');
            return;
    }

    cardVideo.src = videoUrl; // Устанавливаем URL видео
    cardVideo.style.display = 'block'; // Показываем видео
    card.style.display = 'block'; // Показываем карточку
});

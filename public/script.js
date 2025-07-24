// script.js for BOBER Framework
// Шляпний Архітектор змушує БОБРА танцювати!

$(document).ready(function() {
    console.log("БОБЕР ініціалізується! Ква-ква! Гризь-гризь!");
    const boberOutput = $('#bober-output');
    const shlyapaContainer = $('.shlyapa-container');

    // Проста функція для шляпування тексту
    function shlyapaText(text) {
        return text.split('').map(char => {
            const randomRotation = Math.random() * 30 - 15; // -15 до +15 градусів
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            return `<span style="display:inline-block; transform:rotate(${randomRotation}deg); color:${randomColor};">${char}</span>`;
        }).join('');
    }

    // Запускаємо шляпування тексту при завантаженні
    boberOutput.html(shlyapaText("ШЛЯПА ДІЄ!"));

    // Обробник кліку для кнопки "Гризь-гризь!"
    $('.button-gryz-gryz').on('click', function() {
        const messages = [
            "БОБЕР ШЛЯПАЄ ЗНОВУ! Ква-ква!",
            "ІМПЕРІЯ РЖАЧНОЇ ВІРТУАЛЬНОСТІ ПРОЦВІТАЄ!",
            "ГРИЗЬ-ГРИЗЬ! Це був потужний шляпок!",
            "Windows 95 плаче від заздрості!",
            "qp78zx23vy10wk54 – Майстер Шляпи!",
            "Все у фіолетовому кольорі!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        boberOutput.html(shlyapaText(randomMessage));

        // Додатковий шляповий ефект для контейнера
        shlyapaContainer.css({
            'transform': `rotateZ(${Math.random() * 10 - 5}deg) scale(${1 + Math.random() * 0.1})`,
            'box-shadow': `0 0 ${50 + Math.random() * 50}px ${['#8a2be2', '#f0f', '#ffff00'][Math.floor(Math.random() * 3)]}`
        });

        // Повертаємо до нормального стану через деякий час
        setTimeout(() => {
            shlyapaContainer.css({
                'transform': 'rotateZ(3deg) scale(1)',
                'box-shadow': '0 0 50px var(--bober-accent-light)'
            });
        }, 500);
    });

    // Анімація для іконок при наведенні
    $('.div-shlyapa i').on('mouseenter', function() {
        $(this).css('animation', 'pulse 0.5s infinite alternate');
    }).on('mouseleave', function() {
        $(this).css('animation', 'none');
    });

    // Спеціальний бобровий ефект
    setInterval(() => {
        $('.div-shlyapa').css('background-color', `rgba(51, 0, 102, ${0.5 + Math.random() * 0.5})`);
    }, 2000); // Кожні 2 секунди змінюємо прозорість фону
});

// Анімація для іконки (додайте це в styles.css, якщо ще немає)
/*
@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.1); opacity: 0.8; }
}
*/

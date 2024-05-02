$(document).ready(function(){
    $(".list-group-item").click(function(event){
        event.preventDefault(); // Запобігає переходу на верх сторінки

        // Видаляємо клас 'active' з усіх вкладок і додаємо до вибраної
        $(".list-group-item").removeClass("active");
        $(this).addClass("active");

        // Отримуємо атрибут data-target, який вказує на панель, що має бути показана
        var panelToShow = $(this).attr("data-target");

        // Приховуємо усі панелі та показуємо тільки потрібну
        $(".content-panel").hide();
        $(panelToShow).show();
    });
});
document.querySelectorAll('.navbar-nav a, .navbar-brand').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Запобігти стандартній поведінці посилань
        const targetId = this.getAttribute('href'); // Отримати якір з href атрибута
        const targetSection = document.querySelector(targetId);

        // Сховати всі секції
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Показати цільову секцію
        targetSection.style.display = 'block';

        // Оновити активний стан посилань у навігації
        document.querySelectorAll('.navbar-nav .nav-item, .navbar-brand').forEach(item => {
            if (item instanceof HTMLElement) {
                item.classList.remove('active');
            }
        });
        if (this.parentElement.classList.contains('nav-item')) {
            this.parentElement.classList.add('active');
        }
    });
});
// Відкриття модального вікна для входу
$('a[href="#login"]').click(function(event) {
    event.preventDefault(); // Запобігти стандартній поведінці посилання
    $('#loginModal').modal('show');
});

// Відкриття модального вікна для реєстрації
$('a[href="#register"]').click(function(event) {
    event.preventDefault(); // Запобігти стандартній повединці посилання
    $('#registerModal').modal('show');
});






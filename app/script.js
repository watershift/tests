// script.js

function showSection(sectionId) {
    // Скрываем все секции
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Показываем выбранную секцию
    document.getElementById(sectionId).style.display = 'block';
}

// Показываем первую секцию по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    showSection('menu1');
});

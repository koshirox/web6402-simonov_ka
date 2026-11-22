class Publication {
    constructor(title, category, text) {
        this.title = title;
        this.category = category;
        this.text = text;
    }

    print() {
        console.log(`Статья: ${this.title}\nРубрика: ${this.category}\nТекст:\n${this.text}`);
    }
}

const form = document.querySelector('.publication-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const publication = new Publication(
        form.elements.title.value,
        form.elements.category.value,
        form.elements.text.value
    );
    publication.print();
    document.querySelector('.publication-form__status').textContent =
        'Данные статьи выведены в консоль браузера';
});

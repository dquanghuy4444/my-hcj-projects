document.addEventListener('DOMContentLoaded', function () {
    const author = document.querySelector('#famous-people');
    const quote = document.querySelector('#quote');
    const image = document.querySelector('#image');
    const btn = document.querySelector('.btn');
    const listQuote = document.querySelector('.list-quote');

    btn.addEventListener('click', handleSubmit);
    function handleSubmit() {
        if (author.value === '' || quote.value === '' || image.value === '') {
            alert(`Form Input Can't Blank`);
        } else {
            const element = document.createElement('div');
            element.setAttribute('class', 'quote-content');

            element.innerHTML = `
                <div class="image">
                <div class="image-content"></div>
                <img src=${image.value} alt="" />
                </div>
                <div class="info-quote">
                    <div class="author">${author.value}</div>
                    <div class="text">${quote.value}</div>
                </div>
            `;

            listQuote.insertBefore(element, listQuote.childNodes[0]);

            // reset input
            author.value = '';
            quote.value = '';
            image.value = '';
        }
    }
});

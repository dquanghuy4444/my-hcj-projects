const buttonNext = document.querySelector('.btnNext');
const buttonPrev = document.querySelector('.btnPrev');
const wrapper = document.querySelector('.wrapper');
let currPage = 1;

// when loaded page
handleFetch(currPage);

buttonNext.addEventListener('click', function () {
    currPage++;
    handleFetch(currPage);
    if (currPage > 1) {
        buttonPrev.classList.remove('disable');
    }
});
buttonPrev.addEventListener('click', function () {
    currPage--;
    if (currPage <= 1) {
        buttonPrev.classList.add('disable');
    }
    handleFetch(currPage);
});

function handleFetch(currPage) {
    fetch(`https://randomuser.me/api/?page=${currPage}&results=15`)
        .then((res) => res.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));
}
function showData(data) {
    wrapper.innerHTML = '';
    let dataUser = '';
    data.results.forEach((info) => {
        const {
            email,
            gender,
            location: { country },
            name: { title, first },
            picture: { large },
            registered: { age },
        } = info;
        dataUser += `<div class="person-item">
            <div class="header-info">
                <img
                    class="img"
                    src=${large}
                    alt=""
                />
                <div class="info">
                    <div class="name">${title}. ${first}</div>
                    <div class="country">${country}</div>
                </div>
            </div>    
            <div class="footer-info">
                <div class="more">
                    <span>${gender}</span>
                    <span>Age: ${age}</span>
                </div>
                <div class="email">${email}</div>
            </div>
        </div>`;
    });
    wrapper.innerHTML = dataUser;
}

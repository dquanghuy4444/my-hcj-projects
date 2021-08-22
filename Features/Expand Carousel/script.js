const items = document.querySelectorAll('.item');

for (let i of items) {
  i.addEventListener('click', function () {
    document.querySelector('.item.span').classList.remove('span');
    i.classList.add('span');
  });
}

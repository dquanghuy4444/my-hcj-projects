const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener(
    'scroll',
    function () {
        // console.log(window.pageYOffset); pageYOffset only use for 'window'

        sections.forEach((section) => {
            const top = section.offsetTop - 50; // 50 is height of nav
            const html = document.documentElement;
            const height = section.offsetHeight;
            navItems.forEach((navItem) => {
                const hrefNav = navItem.href.match(/#[a-zA-Z]+/)[0];
                const idSection = '#' + section.id;

                if (html.scrollTop >= top && top + height >= html.scrollTop) {
                    hrefNav === idSection
                        ? navItem.parentElement.classList.add('active')
                        : navItem.parentElement.classList.remove('active');
                } else {
                    hrefNav === idSection &&
                        navItem.parentElement.classList.remove('active');
                }
            });
        });
    },
    { passive: true }
);

(function () {
    const posts = document.querySelectorAll('.post');

    window.addEventListener('scroll', handleScrollBlog, { passive: true });

    function handleScrollBlog() {
        posts.forEach((post) => {
            const top = post.offsetTop - 200;
            const html = document.documentElement;
            const img = post.querySelector('.image-content img');
            const imageWrapper = post.querySelector('.image-content');
            const height = post.offsetHeight;

            if (html.scrollTop >= top && top + height >= html.scrollTop) {
                imageWrapper.style.opacity = 0.4;
                img.style.transform =
                    'perspective(600px) translate(0) rotateX(0) rotateY(0)';
            } else {
                imageWrapper.style.opacity = 0;
                img.style.transform =
                    'perspective(600px) translate(-50%) rotateX(25deg) rotateY(28deg)';
            }
        });
    }
})();

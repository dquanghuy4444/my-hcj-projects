class Posts {
    constructor() {
        this.container = document.querySelector('.container');
        this.loading = document.querySelector('.loading');

        this.limit = 8;
        this.page = 1;
    }

    //  fetch API
    async getPosts() {
        const result = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`
        );
        const data = await result.json();

        return data;
    }

    // insert post to DOM
    async showPosts() {
        const posts = await this.getPosts();
        posts.forEach((post) => {
            this.container.insertAdjacentHTML(
                'beforeend',
                `<div class="post">
                    <div class="number">${post.id}</div>
                    <div class="info">
                        <h2 class="title">${post.title}</h2>
                        <p class="description">${post.body}</p>
                    </div>
                </div>`
            );
        });
    }
    handleLoading() {
        this.loading.classList.add('show');
        this.page++;

        setTimeout(() => {
            this.loading.classList.remove('show');

            setTimeout(() => {
                this.showPosts();
            }, 100);
        }, 1200);
    }
}

// event listeners
document.addEventListener('DOMContentLoaded', eventListeners);

function eventListeners() {
    const posts = new Posts();
    posts.showPosts();

    window.addEventListener('scroll', function () {
        // get height and scrollTop of html
        //in html, client Height => get height browser
        //in html, offset Height => get height of document
        const {
            scrollHeight,
            scrollTop,
            clientHeight,
        } = document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight) {
            posts.handleLoading();
        }
    });
}

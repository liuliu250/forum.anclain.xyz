document.addEventListener('DOMContentLoaded', function()
    {    const posts = [
        { id: 1, title: '帖子标题1', summary: '帖子内容摘要1...' },
        { id: 2, title: '帖子标题2', summary: '帖子内容摘要2...' }
        // 更多帖子
    ];
    const forumSection = document.getElementById('forum');
    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('post');
        const h3 = document.createElement('h3');
        h3.textContent = post.title;
        article.appendChild(h3);
        const p = document.createElement('p');
        p.textContent = post.summary;
        article.appendChild(p);
        const a = document.createElement('a');
        a.href = `post.html?id=${post.id}`;
        a.textContent = '阅读更多';
        article.appendChild(a);
        forumSection.appendChild(article);
    });
});
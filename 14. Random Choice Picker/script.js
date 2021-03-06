const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    myfunction(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        randomSelect();
    }
});

function myfunction(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach((tag) => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    // const time = 30;
    const interval = setInterval(() => {
        const randomTag = pickrandomTag();

        highlight(randomTag);
        setTimeout(() => {
            unHighlight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickrandomTag();
            highlight(randomTag);
        }, 100);
    }, 3000);
}

function pickrandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function unHighlight(tag) {
    tag.classList.remove('highlight');
}
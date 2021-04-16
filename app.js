const api_key = 'j1CoFEkcNgLSBNgJyRQv91MRYxmMvajz';
const api_URL = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&rating=g`;
const main = document.getElementById('main');
const btn = document.getElementById('btn');
const notify = document.getElementById('notification');
const deleteBtn = document.getElementById('delete-btn');
const loading = document.getElementById('loading')

loading.style.display = 'none';
notify.style.display = 'none'

async function randomGif() {
    loading.style.display = '';
    const response = await fetch(api_URL);
    const giphy = await response.json();
 
    main.innerHTML = `
    <video class="has-ratio" width="640" height="360" src="${giphy.data.image_mp4_url}" frameborder="5" autoplay loop></video> 
    `
    notify.style.display = '';
    loading.style.display = 'none';

}

btn.addEventListener('click', randomGif);
deleteBtn.addEventListener('click', () => {
    notify.style.display = 'none';
})

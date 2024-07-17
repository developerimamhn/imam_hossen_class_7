document.addEventListener('DOMContentLoaded', () => {
    const selectEl = document.getElementById('select-btn');
    const modifyEl = document.getElementById('modify-btn');
    const fetchEl = document.getElementById('fetch-btn');

    // Select all elements on click on "selectEl" and console log them
    selectEl.addEventListener('click', () =>{
        const box1 = document.querySelector('#box1');
        const box2 = document.querySelector('#box2');
        const box3 = document.querySelector('#box3');

        console.log('box 1:', box1);
        console.log('box 2:', box2);
        console.log('box 3:', box3);
    });

    // Modify any content on click on "modifyEl" button
    modifyEl.addEventListener('click', () =>{
        const box1 = document.querySelector('#box1');
        const box2 = document.querySelector('#box2');
        const box3 = document.querySelector('#box3');

        box1.textContent = 'Modified Box 1';
        box2.style.backgroundColor = 'black';
        box3.innerHTML = '<strong>Box</strong>';
    });

    // Fetch data from jsonplaceholder on click on "fetchEl" button and log the data
    fetchEl.addEventListener('click', async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        console.log(data.slice(0,10))
    });
});

const inputEl = document.querySelector('.input');

inputEl.addEventListener('keydown', (e) =>{
    console.log(e.target.value)
});

const presente = document.getElementById('presente');
const botao = document.getElementById('abrir');

botao.addEventListener('click', () => {
    presente.classList.add('shake');

    setTimeout(() => {
        presente.src = 'https://i.imgur.com/TTfHj5c.png'; // dedo do meio emoji (pode trocar)
        botao.style.display = 'none';
    }, 1500); // tempo da animação

    // remove a animação depois que acabar
    setTimeout(() => {
        presente.classList.remove('shake');
    }, 2000);
});

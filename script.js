const presente = document.getElementById('presente');
const botao = document.getElementById('abrir');

botao.addEventListener('click', () => {
    presente.classList.add('shake');

    setTimeout(() => {
        presente.src = 'dedo.png'; // imagem do gorila dedo do meio
        botao.style.display = 'none';
    }, 1500);

    setTimeout(() => {
        presente.classList.remove('shake');
    }, 2000);
});

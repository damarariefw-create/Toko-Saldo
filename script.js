const toggler = document.querySelector('.theme-toggler');
const icon = toggler.querySelector('iconify-icon');

toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        icon.setAttribute('icon', 'material-symbols:light-mode');
    } else {
        icon.setAttribute('icon', 'material-symbols:dark-mode');
    }
});
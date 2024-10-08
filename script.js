const themeSwitch = document.getElementById('theme-switch');
        const body = document.body;

        themeSwitch.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
    }
});
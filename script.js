document.addEventListener("DOMContentLoaded", function() {
    function loadScreen(screen) {
        fetch(screen)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
                const scripts = document.querySelectorAll('#content script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    newScript.innerHTML = oldScript.innerHTML;
                    document.body.appendChild(newScript);
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки экрана:', error);
            });
    }

    // Load the login screen by default
    loadScreen('login/login.html');
});

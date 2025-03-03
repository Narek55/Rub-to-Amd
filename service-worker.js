<script>
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js")
            .then(reg => console.log("Service Worker зарегистрирован:", reg.scope))
            .catch(err => console.log("Ошибка регистрации Service Worker:", err));
    }
</script>

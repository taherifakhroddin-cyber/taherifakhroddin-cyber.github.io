document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const status = document.getElementById("theme-status");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggleBtn.innerText = "☀️ لایت مود";
        if (status) status.innerText = "حالت تاریک";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            toggleBtn.innerText = "☀️ لایت مود";
            if (status) status.innerText = "حالت تاریک";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.innerText = "🌙 دارک مود";
            if (status) status.innerText = "حالت روشن";
            localStorage.setItem("theme", "light");
        }
    });
});
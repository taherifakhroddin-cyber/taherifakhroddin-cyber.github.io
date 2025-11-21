let count = 0;
const colors = [
    ["#ff9a9e", "#fad0c4"],
    ["#a18cd1", "#fbc2eb"],
    ["#84fab0", "#8fd3f4"],
    ["#ffecd2", "#fcb69f"],
    ["#667eea", "#764ba2"]
];

document.getElementById("change-btn").addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = "تعداد کلیک: " + count;

    // عوض کردن رنگ پس‌زمینه
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor[0]}, ${randomColor[1]})`;

    // عوض کردن متن
    const texts = [
        "آهنگ جدید شادمهر عقیلی چقدر باحال شد!",
        "تو بهترینی داداش!",
        "دیگه هیچی جلودارت نیست 💪",
        "برنامه‌نویس آینده ایران تویی!"
    ];
    document.getElementById("text").innerText = texts[Math.floor(Math.random() * texts.length)];
}); 
// فرم تماس (ذخیره پیام تو localStorage + پیام تشکر)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-message").innerHTML = "پیامت با موفقیت رسید داداش! به زودی جواب می‌دم ❤️";
    document.getElementById("form-message").style.color = "#84fab0";
    this.reset();
});

// کانتر بازدیدکننده (واقعی!)
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
document.getElementById("visitor-count").innerText = visits + " نفر"; 
// دارک مود
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const status = document.getElementById("theme-status");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.innerText = "☀️ لایت مود";
    status.innerText = "حالت تاریک";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toggleBtn.innerText = "☀️ لایت مود";
        status.innerText = "حالت تاریک";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.innerText = "🌙 دارک مود";
        status.innerText = "حالت روشن";
        localStorage.setItem("theme", "light");
    }
});

// انیمیشن تایپینگ اسم (تو هدر)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
window.onload = () => {
    typeWriter(document.getElementById("title"), "سلام! من فخرالدین هستم – برنامه‌نویس آینده!"); // اسمت رو عوض کن
};

// دکمه دانلود رزومه PDF
const downloadBtn = document.createElement("button");
downloadBtn.innerText = "دانلود رزومه PDF 📄";
downloadBtn.style.cssText = "margin: 20px; padding: 15px; background: #ff9a9e; color: white; border: none; border-radius: 50px; cursor: pointer;";
document.querySelector(".contact").appendChild(downloadBtn);

downloadBtn.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("رزومه فخرالدین – برنامه‌نویس جونیور\nمهارت‌ها: HTML, CSS, JS\nپروژه‌ها: سایت شخصی موزیک\nتماس: [ایمیلت]", 10, 10);
    doc.save("resume-fakhroddin.pdf");
});
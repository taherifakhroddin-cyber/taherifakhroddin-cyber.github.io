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
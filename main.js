let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit"); // "Подвердить" tugmasi
let errorMsg = document.querySelector(".error-msg");

// Tugma boshlang'ich holatda o'chirilgan va yarim shaffof bo'ladi
btn.disabled = true;  // Tugma boshlang'ich holatda o'chirilgan
btn.style.opacity = 0.5;  // Tugma faollashmagan holatda yarim shaffof

// Ko'zni bosish bilan parolni ko'rsatish va yashirish
spaceEye.addEventListener("mousedown", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "text");  // Parolni ko'rsatish
});

spaceEye.addEventListener("mouseup", (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type", "password");  // Parolni yashirish
});

// Parol kiritilganda "Подвердить" tugmasini faollashtirish
spaceParol.addEventListener("input", () => {
    if (spaceParol.value.trim() !== "") {
        btn.disabled = false;  // Tugmani faollashtirish
        btn.style.opacity = 1;  // Tugma faollashgan holatda yorqin
    } else {
        btn.disabled = true;  // Tugmani o'chirish
        btn.style.opacity = 0.5;  // Tugma o'chirilgan holatda
    }
});

// "Подвердить" tugmasi bosilganda yoki Enter tugmasi bosilganda formani tekshirish
function checkLoginAndPassword() {
    let login = Number(spaceLogin.value.trim());
    let parol = Number(spaceParol.value.trim());

    let topilganStudent = null;

    // Login va parolni tekshirish
    oquvchilar.forEach(oquvchi => {
        if (oquvchi.id === login && oquvchi.password === parol) {
            topilganStudent = oquvchi;
            console.log(topilganStudent);  // Agar to'g'ri bo'lsa, studentni ko'rsatish
            // Foydalanuvchi haqidagi ma'lumotlarni alertda chiqarish
            alert(`Ism: ${topilganStudent.name} ${topilganStudent.surname}\nCoin: ${topilganStudent.coin}\nHP: ${topilganStudent.hp}\nGruh: ${topilganStudent.group}`);
            window.location.href = './success-page.html';  // Muvaffaqiyatli ro'yxatdan o'tish sahifasiga yo'naltirish
        }
    });

    // Agar login yoki parol noto'g'ri bo'lsa, xato xabari ko'rsatiladi
    if (!topilganStudent) {
        errorMsg.style.display = "block";  // "Parolni noto'g'ri kiritdingiz" xabarini ko'rsatish
    } else {
        errorMsg.style.display = "none";  // Xato xabari ko'rsatilmasin, agar to'g'ri login/parol bo'lsa
    }
}

// "Подвердить" tugmasini bosganda formani tekshirish
btn.addEventListener("click", (bot) => {
    bot.preventDefault();
    checkLoginAndPassword();
});

// Enter tugmasini bosganda ham formani tekshirish
spaceForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        checkLoginAndPassword();
    }
});
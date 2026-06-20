const translations = {

en: {
welcome: "Welcome to EASTEL HUB MY",
subtitle: "Your Digital Business Growth Partner"
},

bm: {
welcome: "Selamat Datang ke EASTEL HUB MY",
subtitle: "Rakan Pertumbuhan Perniagaan Digital Anda"
},

zh: {
welcome: "欢迎来到 EASTEL HUB MY",
subtitle: "您的数字业务增长伙伴"
}

};

document
.getElementById("language")
.addEventListener("change", function(){

const lang = this.value;

document.querySelectorAll("[data-key]")
.forEach(element => {

const key = element.getAttribute("data-key");

element.textContent =
translations[lang][key];

});

});

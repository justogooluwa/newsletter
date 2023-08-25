const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card2");
form?.addEventListener("submit", (e) =>{
    e.preventDefault();
    card_1?.classList.add("hide");
    card_2?.classList.remove("hide");
    checkinput();
});
function checkinput(){
    const emailvalue = email.value
}
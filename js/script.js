const allButtons = document.getElementsByClassName("buttonitem");

document.querySelectorAll(".buttonitem").forEach(item => {
    item.addEventListener('click', () => {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("active");
            if(!item.classList.contains("active")) {
                item.classList.add("active");
            }
        }
    })
});

function submitForm() {
    var submitItem = document.querySelector(".buttonitem.active").innerHTML;
    document.getElementsByClassName("result")[0].innerHTML = submitItem;
    document.querySelector(".thanks").classList.add("active");
    document.querySelector(".select").classList.add("active");
}
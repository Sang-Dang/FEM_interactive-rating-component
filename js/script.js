var buttons = document.getElementsByClassName("buttonitem");

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        for (let index = 0; index < buttons.length; index++) {
            if(buttons[index].classList.contains("active"))
                buttons[index].classList.remove("active");
        }
        if(!buttons[i].classList.contains("active")) {
            buttons[i].classList.add("active");
        }
    })
}
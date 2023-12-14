//getting all required element
const start_btn = document.querySelector(".start_btn button");
const info_box= document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const restart_btn = document.querySelector(".buttons .restart");

//If start quiz button clicked
start_btn.oneclick=()->{
    info_box.classList.add("activeInfo");//show the info box
}

//If exit button clicked
exit_btn.oneclick=()->{
    info_box.classList.remove("activeInfo");//hide the info box
}
//If start quiz button clicked
start_btn.oneclick=()->{
    info_box.calssList.add("activeInfo");//show the info box
}
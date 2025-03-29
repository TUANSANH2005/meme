let A = document.getElementById("ansA");
let B = document.getElementById("ansB");
let C = document.getElementById("ansC");
let D = document.getElementById("ansD");
let tb = document.getElementById("notification");
let pic = document.getElementById("no_img");
let arr = [A, B, C, D];
let img_arr = ["Images/A.jpg", "Images/B.jpg", "Images/C.png", "Images/D.jpg"];
for (let i = 0; i < 4; i++) {
    arr[i].addEventListener("click", function () {
        pic.src = img_arr[i];
        tb.classList.toggle("call");
    })
}
document.getElementById("close").addEventListener("click", function () {
    tb.classList.remove("call");
})
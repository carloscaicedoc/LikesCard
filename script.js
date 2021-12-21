console.log("Page loaded!!!")

var count = 3;

function add1() {
    var countElement = document.querySelector("#number");
    console.log(countElement)
    count++;
    console.log(count);
    countElement.innerText = count + "like(s)"
}
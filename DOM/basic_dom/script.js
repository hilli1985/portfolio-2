var contr = document.getElementById("container");
contr.innerHTML = "New Content!";

var para = document.createElement("p");
var textnode = document.createTextNode("Hello world!");
para.appendChild(textnode);
document.getElementById("container").appendChild(para);


var btn = document.createElement('button');
//add id attrubute to btn
btn.setAttribute("id", "btn")
var text = document.createTextNode("Click Me!");
btn.appendChild(text);
document.getElementById("container").appendChild(btn);


document.getElementById("btn").onclick = function() {
    alert("You clicked me");
}


var para1 = document.createElement("p");
var textnode = document.createTextNode("hover me!");
para1.appendChild(textnode);
para1.setAttribute("id", "para1");
document.getElementById("container").appendChild(para1);
document.getElementById("para1").onmouseover = function() {
        para1.innerHTML = "hi, you hover me!";

    }
    //also you can use - onmousenter
document.getElementById("para1").onmouseout = function() {
    para1.innerHTML = "hover me";

}
var cars = ["Saab", "Volvo", "BMW"];
// Create the list element:
var list = document.createElement('ul');
list.setAttribute("id", "ul-cars");
list.setAttribute("class", "cars-list");
list.style.backgroundColor = "red"
for (let car of cars) {
    // Create the list item:
    var item = document.createElement('li');
    item.setAttribute("class", "li-cars");
    item.setAttribute("id", "item_" + car);
    // Set its contents:
    item.appendChild(document.createTextNode(car));
    // Add it to the list:
    list.appendChild(item);
}
document.getElementById("container").appendChild(list);
var info = document.getElementById("ul-cars").attributes["class"];
console.log(info.value);;
//change color
document.getElementById('ul-cars').style.backgroundColor = "aqua";
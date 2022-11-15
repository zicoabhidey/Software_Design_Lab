

let index = 0;

const colors = ['green', 'blue', 'yellow'];

document.getElementById("output_text").onclick = function () {
    document.getElementById("output_text").style.color = colors[index];
    index = index >= colors.length - 1 ? 0 : index + 1;
}

let msg = ["hey why are you scrolling?", "Who the hell you think you are scrolling?", "STOP SCROLLING!!"]
window.onscroll = function() {
    alert(msg[index]);
    index = index >= msg.length - 1 ? 0 : index + 1;
};

document.getElementById("body").addEventListener("mousemove", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("test").innerHTML = coor;
});


function sayHello() {
    let text;
    let person = prompt("Please enter your name:");
    while (person == null || person == "") {
      person = prompt("Dude, Please enter a name!!");
    }
    text = alert("Hello " + person + "! How are you today?");
    text = "Hello " + person + "! How are you today?";
    document.getElementById("test2").innerHTML = text;
  }




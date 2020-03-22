let name = "Mercy Inyang";

let courses = ["HTML", "CSS", "Javascript", "Kotlin"];

const num = [];
for (let i=1; i<=200; i++){
    if(i%2===0) {
        num.push(i);
    }
}


document.getElementById("demo").innerHTML = 
name + "<br>" + courses + "<br>" + num;

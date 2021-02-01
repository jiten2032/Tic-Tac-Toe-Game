// let allDiv = document.querySelectorAll('.grid div')
// allDiv.forEach(div => {
//     div.addEventListener('click', myFun)
// })
// function myFun() {
//     console.log("hello world");
// }
// div1 = document.getElementById('div1').innerHTML;
// div2 = document.getElementById('div2').innerHTML;
// div3 = document.getElementById('div3').innerHTML;
// div4 = document.getElementById('div4').innerHTML;
// div5 = document.getElementById('div5').innerHTML;
// div6 = document.getElementById('div6').innerHTML;
// div7 = document.getElementById('div7').innerHTML;
// div8 = document.getElementById('div8').innerHTML;
// div9 = document.getElementById('div9').innerHTML;


let click = 1;
let myPlayer = `<img src="cross.png" height="60px" width="60px"  class="img-fluid" alt="..." id="img" style="height:20px;">`;

let allDiv = document.querySelectorAll('#main', '.myDiv');
allDiv.forEach(eachDiv => {
    eachDiv.addEventListener('click', MyFun)
})
function MyFun(e) {
    let MyDivs = document.getElementById(e.target.id);

  
    if (click <= 9) {


        if (myPlayer === `<img src="cross.png" height="60px" width="60px"  class="img-fluid" alt="...">`) {
            MyDivs.innerHTML = `<img src="cross.png" height="60px" width="60px"  class="img-fluid" alt="...">`
            myPlayer = `<img src="circle.png" height="60px" width="60px"  class="img-fluid" id="img" alt="...">`


        } else {
            MyDivs.innerHTML = `<img src="circle.png" height="60px" width="60px"  class="img-fluid" alt="...">`;
            myPlayer = `<img src="cross.png" height="60px" width="60px"  class="img-fluid" alt="...">`
        }
        click++;
        if (checkwin()) {
            alert("Hurray You are a winner!! try another ")
            location.reload(); 
        }

    }

    else {
        alert("Your Match is Draw Try Another");
        location.reload();

    }


}
function checkwin() {

    if (document.getElementById('div1').innerHTML != "" 
    && document.getElementById('div2').innerHTML != "" && 
    document.getElementById('div3').innerHTML != "" &&
     document.getElementById('div1').innerHTML == document.getElementById('div2').innerHTML
      && document.getElementById('div2').innerHTML == document.getElementById('div3').innerHTML) {
        return true;
    }
   else if (document.getElementById('div1').innerHTML != "" 
    && document.getElementById('div4').innerHTML != "" && 
    document.getElementById('div7').innerHTML != "" &&
     document.getElementById('div1').innerHTML == document.getElementById('div4').innerHTML
      && document.getElementById('div4').innerHTML == document.getElementById('div7').innerHTML) {
        return true;
    }
    else if (document.getElementById('div3').innerHTML != "" 
    && document.getElementById('div6').innerHTML != "" && 
    document.getElementById('div9').innerHTML != "" &&
     document.getElementById('div3').innerHTML == document.getElementById('div6').innerHTML
      && document.getElementById('div6').innerHTML == document.getElementById('div9').innerHTML) {
        return true;
    }
    else if (document.getElementById('div7').innerHTML != "" 
    && document.getElementById('div8').innerHTML != "" && 
    document.getElementById('div9').innerHTML != "" &&
     document.getElementById('div7').innerHTML == document.getElementById('div8').innerHTML
      && document.getElementById('div8').innerHTML == document.getElementById('div9').innerHTML) {
        return true;
    }
    else if (document.getElementById('div2').innerHTML != "" 
    && document.getElementById('div5').innerHTML != "" && 
    document.getElementById('div8').innerHTML != "" &&
     document.getElementById('div2').innerHTML == document.getElementById('div5').innerHTML
      && document.getElementById('div5').innerHTML == document.getElementById('div8').innerHTML) {
        return true;
    }
    else if (document.getElementById('div1').innerHTML != "" 
    && document.getElementById('div5').innerHTML != "" && 
    document.getElementById('div9').innerHTML != "" &&
     document.getElementById('div1').innerHTML == document.getElementById('div5').innerHTML
      && document.getElementById('div5').innerHTML == document.getElementById('div9').innerHTML) {
        return true;
    }
    else if (document.getElementById('div3').innerHTML != "" 
    && document.getElementById('div5').innerHTML != "" && 
    document.getElementById('div7').innerHTML != "" &&
     document.getElementById('div3').innerHTML == document.getElementById('div5').innerHTML
      && document.getElementById('div5').innerHTML == document.getElementById('div7').innerHTML) {
        return true;
    }



}





// document.querySelector('.myDiv').addEventListener('click', myFun = () =>{

// console.log('hi');

// })

// let div1 = document.querySelectorAll('#main', '.myDiv');
// div1.addEventListener('click',myFun);
// function myFun(){

//     console.log('hi');
// }
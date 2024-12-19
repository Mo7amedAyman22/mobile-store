let count = 0;
let addcount = document.querySelectorAll('.btn3');
let counter = document.getElementById("count")

addcount.forEach(button=>{

    button.addEventListener('click' , ()=>{
        count++;
        counter.textContent = count;
    }) 

})


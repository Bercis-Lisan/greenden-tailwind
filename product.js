let sidenav = document.getElementById("sidenav")
let menuicon = document.getElementById("menuicon")
let navclose = document.getElementById("navclose")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

navclose.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


let search = document.getElementById("search")
let container = document.getElementById("container")
let product = container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<product.length;count=count+1)
    {
        var productname = product[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredvalue)<0) {
            product[count].style.display="none"
        }
        else{
            product[count].style.display="block"
        }
    }
})
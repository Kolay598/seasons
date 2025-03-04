const warm=document.getElementById("warm")
const priznaki=document.getElementById("priznaki")

warm.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.backgroundColor="rgba(0, 0, 0, 0.6)"
    }, 1000)
})
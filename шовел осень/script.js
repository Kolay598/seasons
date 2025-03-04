const warm=document.getElementById("warm")
const priznaki=document.getElementById("priznaki")

warm.addEventListener("click", function(){
    setTimeout(function(){
        priznaki.style.backgroundColor="rgba(255, 245, 99)"
    }, 1000)
})
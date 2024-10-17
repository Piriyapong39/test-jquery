// callback function in toggle
$(document).ready(()=>{
    $("#h-btn").click(()=>{
        $("#p1").stop(true, true).toggle("slow", ()=>{
            console.log("Eiei")
        })
    })
})

// chaining command
$(document).ready(()=>{
    $("#chain-btn").click((e)=>{
        $("#p2").stop(true, true).css({color: "red"}).slideUp(1000).slideDown(1000);
    })
})

// Show text
$(document).ready(()=>{
    $("#show-text-btn").click(()=>{
        alert("Text: " + $("#p3").text())
    })
})

// Show html
$(document).ready(()=>{
    $("#show-html-btn").click(()=>{
        alert("HTML: " + $("#p3").html())
    })
})

// show input
$(document).ready(()=>{
    $("#show-input-btn").click(()=>{
        alert("Value: " + $("#show-input").val())
    })
})

// shown function without jquery
const showFunction = () => {
    document.getElementById("test-set").innerHTML = "Lalalal"
}
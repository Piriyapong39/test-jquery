$(document).ready(()=>{
    $("#first-click").click(()=>{
        alert("First click")
    })
})

// click me to fade
$(document).ready(()=>{
    $("#fade-btn").click(()=>{
        $("#con-1").fadeOut();
        $("#con-2").fadeOut("slow");
        $("#con-3").fadeOut(3000);
    })
})

// click me to toggle fade
$(document).ready(()=>{
    $("#fade-toggle-btn").click(()=>{
        $("#con1-1").fadeToggle();
        $("#con1-2").fadeToggle("slow");
        $("#con1-3").fadeToggle(3000);
    })
})

// Click me to slide down
$(document).ready(()=>{
    $("#con-fl-1").click(()=>{
        $("#con-fl-2").slideDown("slow")
    })
})

// click me to toggle slide up and down
$(document).ready(()=>{
    $("#con-sl-1").click(()=>{
        $("#con-sl-2").slideToggle();
    })
})
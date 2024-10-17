
// function greet user
$(document).ready( () =>{
    $("#show-name-btn").click( () => {
        alert("Hello Jquery")
    })
})

// function toggle text
$(document).ready( () => {
    $("#toggle-text").click( () => {
        $("#test-toggle").toggle();
    })
})

// fuction hide text
$(document).ready( () => {
    $("#hide-text").click( () => {
        $("#test-hide").hide();
    }) 
})

// function show text
$(document).ready( () => {
    $("#show-text").click( () => {
        $("#test-hide").show();
    })
})

// function double click to hide
$(document).ready( () => {
    $("#dblclick-hide").dblclick( () => {
        $("#dblclick-text").hide();
    })
})

// function double to show
$(document).ready( () => {
    $("#dblclick-show").dblclick( () => {
        $("#dblclick-text").show()
    })
})

// function if mouse is over div => alert message
$(document).ready( () => {
    $("#mouseenter-text").mouseenter( () => {
        alert("You entered Mouse enter")
    })
})

// function if mouse is aways from div alert message
$(document).ready( () => {
    $("#mouseenter-text").mouseleave( ()=> {
        alert("Good buy")
    })
})

// function hover btn to alert message
$(document).ready( () => {
    $("#hover-test").hover(
        () => {
            alert("Hi hover")
        },
        () => {
            alert("Bye hover")
        }
    )
})

// Focus on somethings to change color
$(document).ready( () => {
    $("#test-input").focus( (e) => {
        $(e.currentTarget).css("background-color", "yellow")
    })
})

// Aways from input to change color
$(document).ready( () => {
    $("#test-input").blur( (e) => {
        $(e.currentTarget).css("background-color", "#ffff")
    })
})

// Hide text by click
$(document).ready( () => {
    $("#on-p").on("click", (e) => {
        $(e.currentTarget).hide();
    });
});
$(document).ready( () => {
    $("#on-p1").on("click", (e) => {
        $(e.currentTarget).hide();
    });
});
$(document).ready( () => {
    $("#on-p2").on("click", (e) => {
        $(e.currentTarget).hide();
    });
});

// focus, aways and click to tag p
$(document).ready( () => {
    $("#on-mouse-1").on({
        mouseenter: (e) => {
            $(e.currentTarget).css("background-color", "yellow")
        },
        mouseleave: (e) => {
            $(e.currentTarget).css("background-color", "white")
        },
        click: (e)=>{
            $(e.currentTarget).css("background-color", "red")
        }
    })
})
$(document).ready(
    $("#on-mouse-2").on({
        mouseenter: (e)=>{
            $(e.currentTarget).css("background-color", "lightblue")
        },
        mouseleave: (e)=>{
            $(e.currentTarget).css("background-color", "lightgreen")
        },
        click: (e)=>{
            $(e.currentTarget).css("background-color", "red")
        }
    })
)
$(document).ready(()=>{
    $("#on-mouse-3").on({
        mouseenter: (e)=>{
            $(e.currentTarget).css(
                {
                    "background-color": "lightgreen",
                    "font-weight": "bold"
                }
            )
        },
        mouseleave: (e)=>{
            $(e.currentTarget).css(
                {
                    "background-color": "lightblue",
                    "font-weight": "normal"
                }
            )
        },
        click: (e) => {
            const setTarget = $(e.currentTarget);
            const isClicked = setTarget.data('clicked') || false;
            console.log(isClicked)
            if (isClicked) {
                setTarget.css({
                    "background-color": "",
                    "text-align": "",
                    "font-weight": ""
                }).data('clicked', false);
            } else {
                setTarget.css({
                    "background-color": "yellow",
                    "text-align": "center",
                    "font-weight": "900"
                }).data('clicked', true);
            }
        }
    })
})

$(document).ready(()=>{
    $("#ani-btn-1").click(()=>{
        $("#con-ani-1").animate({left: "500px"})
    })
})

$(document).ready(()=>{
    $("#ani-btn-2").click(()=>{
        $("#divt").animate({left: "250px"})
    })
})

$(document).ready(()=>{
    $("#ani-btn-3").click(()=>{
        $("#divt2").animate({
                left: "250px",
                opacity: 0.5,
                height: "150px",
                width: "150px"
            }
        )
    })
})

$(document).ready(()=>{
    $("#ani-btn-4").click(()=>{
        const divt3 = $("#divt3")
        alert("Hi Piriyapong")
        divt3.animate({left: "200px"}, "slow")
        divt3.animate({fontSize: "3rem"}, "slow")
    })
})
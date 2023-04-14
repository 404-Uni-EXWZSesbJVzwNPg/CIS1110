

$(document).ready(function(){
    function showPollResults(){
        console.log("hi")
        $("#radioContainer").empty()
        $("#radioContainer").append("<h4 class='pollResult' style='width: 70%'>Yes - 70%</h4>")
        $("#radioContainer").append("<h4 class='pollResult' style='width: 30%'>No - 30%</h4>")
    
    }
    $("#pollYes").click(() => {
        showPollResults()
    })
    $("#pollNo").click(() => {
        showPollResults()
    })
})

$(function(){
    var promise = $.ajax("")
    promise.done((data) => {
         console.log(data)
         for(item in data.slice(0,5)){
            console.log("data")
            var random = Math.floor(Math.random() * 2)
            var src = undefined;
            if(random == 0){
                src = "images/reviewicon1.jpg";
            }else{
                src = "images/reviewicon2.jpg";
            }

            var reviewstars = undefined;
            var rating = parseInt(data[item].rating)
            console.log(rating)
            if(rating == 0){
                reviewstars = "<h5></span><span class='normalStar'>*****</span>"
            }
            else if(rating == 1){
                reviewstars = "<h5><span class='starOrange'>*</span><span class='normalStar'>****</span>"
            }else if(rating == 2){
                reviewstars = "<h5><span class='starOrange'>**</span><span class='normalStar'>***</span>"
            }else if (rating == 3){
                reviewstars = "<h5><span class='starOrange'>***</span><span class='normalStar'>**</span>"
            }else if (rating == 4){
                reviewstars = "<h5><span class='starOrange'>****</span><span class='normalStar'>*</span>"
            }else if (rating == 5){
                reviewstars = "<h5><span class='starOrange'>*****</span></h5>"
            }
            
            $("#reviews").append("<section class='review'><img src='" + src + "' alt='Reviewer Icon'/><section>" + reviewstars + "<h3>" + data[item].nickname + "</h3></section><p>" + data[item].review + "</p></section>")
            $("#reviews").append("<hr>")
            src = undefined;
            reviewstars = undefined;
         }
    })
    $("#loadAllReviews").click(function(){
        $("#reviews").empty();
        var promise = $.ajax("https://cis1110apicw.computing.edgehill.ac.uk/reviews")
        promise.done((data) => {
            console.log(data)
            for(item in data){
                console.log("data")
                var random = Math.floor(Math.random() * 2)
                var src = undefined;
                if(random == 0){
                    src = "images/reviewicon1.jpg";
                }else{
                    src = "images/reviewicon2.jpg";
                }

                var reviewstars = undefined;
                var rating = parseInt(data[item].rating)
                console.log(rating)
                if(rating == 0){
                    reviewstars = "<h5></span><span class='normalStar'>*****</span>"
                }
                else if(rating == 1){
                    reviewstars = "<h5><span class='starOrange'>*</span><span class='normalStar'>****</span>"
                }else if(rating == 2){
                    reviewstars = "<h5><span class='starOrange'>**</span><span class='normalStar'>***</span>"
                }else if (rating == 3){
                    reviewstars = "<h5><span class='starOrange'>***</span><span class='normalStar'>**</span>"
                }else if (rating == 4){
                    reviewstars = "<h5><span class='starOrange'>****</span><span class='normalStar'>*</span>"
                }else if (rating == 5){
                    reviewstars = "<h5><span class='starOrange'>*****</span></h5>"
                }
                
                $("#reviews").append("<section class='review'><img src='" + src + "' alt='Reviewer Icon'/><section>" + reviewstars + "<h3>" + data[item].nickname + "</h3></section><p>" + data[item].review + "</p></section>")
                $("#reviews").append("<hr>")
                src = undefined;
                reviewstars = undefined;
                $("#loadAllReviews").remove()
            }
        })
    })
})

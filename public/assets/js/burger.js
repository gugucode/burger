$(function(){
    $(".create-form").on("submit",function(event){
        event.preventDefault();
        var name = $("#burger_name").val().trim();
        if(name !== ""){
            $.ajax("/api/burgers",{
                type: "POST",
                data: {
                    burger_name: name,
                    devoured: 0
                }
            }).then(function(result){
                location.reload();
            })
        }
    });

    $("#notdevoured").on("click",".devoured-bnt",function(event){
        var id = $(this).attr("data-id");
        console.log("id=",id);
        
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: {
                devoured: 1,
            }
        }).then(function(result){
            location.reload();
        })
 
    });


})
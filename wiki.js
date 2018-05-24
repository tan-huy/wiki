//Run jQuery
$(document).ready(function(){
    //When search is clicked run code
    $('#search').click(function(){
        
        //Gets search input
        var searchTerm=$('#searchTerm').val();
        
        //API url with searchTerm
        var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

        $.ajax({
            type:"GET",
            url: url,
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function(data, textStatus, jqXHR){
                // **GET HEADING**  console.log(data[1][0]);
                // **GET DESCRIPTION**  console.log(data[2][0]);
                // **GET LINK**  console.log(data[3][0]);

                $('#output').html('');

                for(var i=0; i<data[1].length; i++){
                    $('#output').prepend("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
                }
        $("#searchTerm").val('');
            },
            error: function(errorMessage){
                alert("Error");
            }
        });
    });
    $("#searchTerm").keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }
    })
});
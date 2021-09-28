function main()
{
    var API="https://api.github.com"
    console.log("cors-test-for api");
    console.log(API)
    $.ajax
    ({
        url: API,
        dataType: "html",
        success: function(data)
        {
            console.log(data);
            if(data) {     
                $('#response').html(data);
            } else { 
                $('#response').html("check console logs for error");
          }
           
        }
    });
}
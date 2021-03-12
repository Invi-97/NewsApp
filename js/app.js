function getNews(topic){
    console.log(topic);

   
    var url = "https://newsapi.org/v2/top-headlines?country=us&category="+topic+"&apiKey=1a83c385903b4c15b2c47f659a78529e";

    var xmlHTTPRequest = new XMLHttpRequest();
    
    xmlHTTPRequest.open("GET",url);
    xmlHTTPRequest.send();

    xmlHTTPRequest.onreadystatechange = function(){
        console.log(this.status);
        console.log(this.readyState);
        if(this.status ==200 && this.readyState==4){
         
            //convert String to JSON
            var newsData = JSON.parse(this.responseText);

            var articles = newsData.articles;
            var news ="";
            for(var i=0;i< articles.length;i++)
            {
                console.log(articles[i].title);
                console.log(articles[i].content);
            
                news += "<div class='col-md-3 col-sm-1'>";
                news += "<img src = '"+articles[i].urlToImage+"' height = 300 width = 500 />"
               
                news += "<h2>";
                news += articles[i].title;
                news += "</h2>";
                news += "<p>";
                news += articles[i].content;
                news += "<a href='"+articles[i].url+"' target = '_blank'> more...</a>";
                news += "</p>";
                news += "</div>";

            }

            document.getElementById("newsSection").innerHTML = news;
        }

    }
}

getNews("global");

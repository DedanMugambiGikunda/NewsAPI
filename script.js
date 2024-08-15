const apikey = '1eef7fbbf8dd4dd8bcbc2432116a5a72'

const blogaContainer = document.getElementById("bolg-container");

const searchField = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

function fetchRandomNews(){
    try{
        const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&pageSize=10&apikey=${apikey}';
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles;
    } catch(error){
        console.log("Error fetching random news", error);
        return [];
    }
}

searchButton.addEventListener("click", async() => {
    const query = searchField.ariaValueMax.trim
    ()
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery
            (query)
            displayBlogs(articles)
        }catch(error){
            console.log("Error fetching news ny query", error)
        }
    }
})

function fetchNewsQuery(query){
    try{
        const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&pageSize=10&apikey=${apikey}';
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data.articles;
    } catch(error){
        console.log("Error fetching random news", error);
        return [];
    }
}

function displayBlogs(articles){
    blogContainer.innerHTML = ""
    articles.forEach((article)=>{
        const blogCard = document.createElement
        ("div")
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToimage;
        img.alt = article.title;
        const title = document.createElement("h2");

        const truncatedTitle = article.title.length > 30? articles.title.slice (0, 30) + "....": article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");

        const truncatedDes= article.title.length > 30? articles.title.slice (0, 120) + "....": article.title;

        description.textContent = truncatedDes;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', ()=> {
            window.open(article.url, "_blank");
        });
        blogContainer.appendChild(blogCard);
    })
}

(async ()=>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }catch(error){ 
        console.error ("Error fetching random news", error);

    }
})();
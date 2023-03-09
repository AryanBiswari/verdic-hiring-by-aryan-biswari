axios
  .get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed")
  .then((response) => {
    response.data.forEach((article) => {
      const article_Card = document.createElement("div");
      article_Card.classList.add("article-card");

      const article_Title = document.createElement("h2");
      article_Title.innerText = article.title.rendered;
      article_Card.appendChild(article_Title);

      const article_Image = document.createElement("img");
      article_Image.src = article.jetpack_featured_media_url;
      article_Card.appendChild(article_Image);

      const article_Excerpt = document.createElement("p");
      article_Excerpt.innerHTML = article.excerpt.rendered;
      article_Card.appendChild(article_Excerpt);

      const article_Link = document.createElement("a");
      article_Link.href = article.link;
      article_Link.innerText = "Read more";
      article_Card.appendChild(article_Link);

      const article_Creator = document.createElement("p");
      article_Creator.innerText = `By ${article.parselyMeta["parsely-author"][0]}`;
      article_Card.appendChild(article_Creator);

      document.getElementById("articles-container").appendChild(article_Card);
    });
  })
  .catch((error) => {
    console.error(error);
  });

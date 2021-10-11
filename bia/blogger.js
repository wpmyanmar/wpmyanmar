var url = 'https://www.googleapis.com/blogger/v3/blogs/'+blogId+'/posts?key='+apikey;
function getData() {
    fetch(url)
    .then((res) => res.json()
    .then((data) => {
      var items = data.items;
      for (let i = 0; i < items.length; i++) {
        var articles = document.getElementById('content');
        articles.innerHTML += 
        '<article id="'+items[i].id+'">'
        +'<h3 class="post-title">'+items[i].title+'</h3>'
        +'<div class="content">'+items[i].content+'</div>'
        +'</article>';
      }
    })
    )
    .catch((e) => console.log(e));
}
getData();

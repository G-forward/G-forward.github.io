var posts=["2024/01/20/hello-world/","2024/01/20/post1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
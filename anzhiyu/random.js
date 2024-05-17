var posts=["2024/01/20/hello-world/","2024/05/17/Vue初学-1/","2024/05/17/Vue初学/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
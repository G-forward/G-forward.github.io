var posts=["2025/05/08/hello-world/","2025/05/08/发发法法法法/","2025/05/08/图像识别/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
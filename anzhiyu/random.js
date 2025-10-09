var posts=["2024/01/20/hello-world/","2025/05/08/发发法法法法/","2025/05/08/图像识别/","2025/09/30/多层感知机/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
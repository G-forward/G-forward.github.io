var posts=["2024/01/20/hello-world/","2025/05/08/发发法法法法/","2025/05/08/图像识别/","2025/09/30/多层感知机/","2025/11/12/权重衰退/","2025/12/07/论文--GenWorld：面向真实世界模拟类-AI-生成视频的检测研究/","2025/12/07/论文汇报：Physics-Driven Spatiotemporal Modeling for AI-Generated Video Detection/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
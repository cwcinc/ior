function viewsLB() {
  getViews("LM8lPNddwB8");
}

function getViews(videoID) {
  //F = fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoID}&key=${api_key}`).then((content) => {console.log(content)});
  F = fetch("https://www.youtube.com/watch?v=whUTOvqZHy4").then((content) => {console.log(content)});
  console.log(F);
  
  return F;
}

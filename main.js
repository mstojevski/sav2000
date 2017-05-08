
function init() {

  const newsItem = document.querySelectorAll('h1,h2,h3,p,a,.title');



  let newsItemArr = [...newsItem];

  const pattern = /vučić|predsednik|sns|stefanović|premijer|vlada|partizan|šokantno|horor|parovi|vulin|rijaliti/ig;

  for (let i = 0; i < newsItemArr.length; i++) {

     if(newsItemArr[i].textContent.match(pattern)) {
        
        newsItemArr[i].innerHTML = 'SPAM!';
     
     }
  }
}
window.onload = function() {
  
  init();

};
console.log("bla");
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      document.querySelector('.go-top-scroll').classList.add('show');
       
    }
    else{
      document.querySelector('.go-top-scroll').classList.remove('show');
    }
  }
   
  document.querySelector('.go-top-scroll').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
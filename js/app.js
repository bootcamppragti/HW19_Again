$(document).ready(function(){

  $('.next').on('click',function(){
    $('.next').on('click',function(){
      console.log('clicked');
    });
    var currentImg=$('.active');
    var nextImg=currentImg.next();
  
    if(nextImg.length){
      currentImg.removeClass('active').css('z-index',-10);
      nextImg.addClass('active').css('z-index',10);
  
    }
  });
  
  $('.prev').on('click',function(){
    var currentImg=$('.active');
    var prevImg = currentImg.prev();
    $('.prev').on('click',function(){
      console.log('clicked');
    });
  
    if(prevImg.length){
      currentImg.removeClass('active').css('z-index',-10);
      prevImg.addClass('active').css('z-index',10);
    }
  
    });
  });
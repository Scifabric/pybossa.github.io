var header = $('.navbar-default');

$(window).scroll(function(e){
    if(header.offset().top !== 0){
        if(!header.hasClass('huge')){
            header.addClass('huge');
        }
    }else{
        header.removeClass('huge');
    }
});

$(function () {
	 if (window.devicePixelRatio > 1) {
         var images = $("img.hires");

         // loop through the images and make them hi-res
         for(var i = 0; i < images.length; i++) {

           // create new image name
           var imageType = images[i].src.substr(-4);
           var imageName = images[i].src.substr(0, images[i].src.length - 4);
           imageName += "@2x" + imageType;

           //rename image
           images[i].src = imageName;
         }
    }
});

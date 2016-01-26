function animPhotoCase() {
    window.animSound = false;
    var s = Snap("#case-photo");
    Snap.load("/assets/img/case-classification.svg", function(f) {
        var time = 500;

        var btn = f.select("#btnNessy");


        btn.attr({fill: '#2F4149'});


        function startAnimPhoto(){
            btn.animate({fill: '#077CA0'}, time, mina.easein);
        }

        s.append(f);

        //var waypoint = new Waypoint({
        //    element: document.getElementById('case-geo-waypoint'),
        //    offset: 85,
        //    handler: startAnimPhoto
        //});

        var inviewPhoto = new Waypoint.Inview({
          element: $('#case-photo')[0],
          entered: function(direction) {
             startAnimPhoto();
          }
        });


    });          
};


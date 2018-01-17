function animVideoCase() {
    window.animVideo = false;
    var s = Snap("#case-video");
    Snap.load("//pybossa.com/assets/img/case-video.svg", function(f) {
        user3Line1 = f.select("#user3-line1");
        user3Line2 = f.select("#user3-line2");
        user3Line3 = f.select("#user3-line3");

        card3 = f.select("#card3");

        user3avatar = f.select("#user3-avatar");

        user3Line1.attr({opacity: '0'});
        user3Line2.attr({opacity: '0'});
        user3Line3.attr({opacity: '0'});

        card3.attr({opacity: '0'});

        user3avatar.attr({opacity: '0'});


        boat = f.select("#boat");
        waves = f.select("#waves");
        sun = f.select("#sun");
        bar = f.select("#bar-2");
        progress = f.select("#progress-2");

        waves.attr({opacity: '0'});
        bar.attr({x: 70});
        progress.attr({width: 50});



        var time = 500;
        var opacityOne = '1';
        var opacityTwo = '0.1';

        function showCardUser3Lines(){
            function showUser3Line2() {
                user3Line2.animate({opacity: opacityOne}, 
                        time, 
                        mina.easin,
                        showUser3Line3);
            }

            function showUser3Line3() {
                user3Line3.animate({opacity: opacityOne}, 
                        time, mina.easin);
            }


            user3Line1.animate({opacity: opacityOne}, 
                    time, 
                    mina.easin, 
                    showUser3Line2);
        }

        function showUser3Avatar() {
            user3avatar.animate({opacity: opacityOne}, time, mina.easin,
                    showCardUser3Lines);
        }

        function showCardUser3() {
            card3.animate({opacity: opacityOne}, time, mina.easin,
                    showUser3Avatar);
        }

        function sunGrow() {
            sun.animate({rx:15, ry:15}, time, mina.easin, sunShrink);
        }

        function sunShrink() {
            sun.animate({rx:12, ry:12}, time, mina.easin);
        }


        function startAnim() {
            if (window.animVideo == false) {
                bar.animate({x: 140}, 2000,
                        mina.easin);
                progress.animate({width: 120}, 2000, mina.easin);
                        sunGrow();
                        boat.animate({transform: 'translate(100px,0px)' }, 2000, 
                                      mina.easin, function(h){
                                        showCardUser3();
                                      });
                        waves.animate({opacity: 1}, time, mina.bounce);
                playSound('boat.mp3', 0.1);

            }
            window.animVideo = true;
        }

        //startAnim();
        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('case-video-waypoint'),
            offset: 200,
            handler: startAnim
        });

    });          
};


function animVideoCase() {
    var s = Snap("#case-video");
    Snap.load("/assets/img/case-video2.svg", function(f) {
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


        function startAnim() {

            console.log("hola");
            $("#case-video img").hide();
            showCardUser3();
            s.append(f);
        }

        var waypoint = new Waypoint({
            element: document.getElementById('case-video-waypoint'),
            offset: 85,
            handler: startAnim
        })

    });          
};


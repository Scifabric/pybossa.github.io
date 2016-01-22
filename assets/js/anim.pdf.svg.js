window.onload = function () {
    var s = Snap("#case-pdf");
    Snap.load("/assets/img/case-pdf.svg", function(f) {
        user1Line1 = f.select("#user1-line1");
        user1Line2 = f.select("#user1-line2");
        user1Line3 = f.select("#user1-line3");

        user2Line1 = f.select("#user2-line1");
        user2Line2 = f.select("#user2-line2");
        user2Line3 = f.select("#user2-line3");


        card1 = f.select("#card1");
        card2 = f.select("#user2-card");

        user1avatar = f.select("#user1-avatar");
        user2avatar = f.select("#user2-avatar");

        user1Line1.attr({opacity: '0'});
        user1Line2.attr({opacity: '0'});
        user1Line3.attr({opacity: '0'});

        user2Line1.attr({opacity: '0'});
        user2Line2.attr({opacity: '0'});
        user2Line3.attr({opacity: '0'});


        card1.attr({opacity: '0'});
        card2.attr({opacity: '0'});

        user1avatar.attr({opacity: '0'});
        user2avatar.attr({opacity: '0'});


        var time = 500;
        var opacityOne = '1';
        var opacityTwo = '0.1';

        function showCardUser1Lines(){
            function showUser1Line2() {
                user1Line2.animate({opacity: opacityOne}, 
                        time, 
                        mina.easin,
                        showUser1Line3);
            }

            function showUser1Line3() {
                user1Line3.animate({opacity: opacityOne}, 
                        time, mina.easin,
                        showCardUser2);
            }


            user1Line1.animate({opacity: opacityOne}, 
                    time, 
                    mina.easin, 
                    showUser1Line2);
        }

        function showUser1Avatar() {
            user1avatar.animate({opacity: opacityOne}, time, mina.easin,
                    showCardUser1Lines);
        }

        function showCardUser1() {
            card1.animate({opacity: opacityOne}, time, mina.easin,
                    showUser1Avatar);
        }


        function showCardUser2Lines(){
            function showUser2Line2() {
                user2Line2.animate({opacity: opacityOne}, 
                        time, 
                        mina.easin,
                        showUser2Line3);
            }

            function showUser2Line3() {
                user2Line3.animate({opacity: opacityOne}, time, mina.easin);
            }


            user2Line1.animate({opacity: opacityOne}, 
                    time, 
                    mina.easin, 
                    showUser2Line2);
        }

        function showUser2Avatar() {
            user2avatar.animate({opacity: opacityOne}, time, mina.easin,
                    showCardUser2Lines);
        }

        function showCardUser2() {
            card2.animate({opacity: opacityOne}, time, mina.easin,
                    showUser2Avatar);
        }




        function startAnim() {
            $("#case-pdf img").hide();
            showCardUser1();
            s.append(f);
        }


        var waypoint = new Waypoint({
            element: document.getElementById('case-pdf-waypoint'),
            offset: 85,
            handler: startAnim
        })

    });          
};


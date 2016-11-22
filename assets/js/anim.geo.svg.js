function animGeoCase() {
    var s = Snap("#case-geo");
    Snap.load("//cdn.pybossa.com/assets/img/case-geolocation.svg", function(f) {


        card4 = f.select("#user4-card");
        map = f.select("#map-group");
        mapPin = f.select("#map-pin");

        user4avatar = f.select("#user4-avatar");


        card4.attr({opacity: '0'});
        mapPin.attr({opacity: '0'});

        user4avatar.attr({opacity: '0'});


        var time = 500;
        var opacityOne = '1';
        var opacityTwo = '0.1';


        function showUser4Avatar() {
            user4avatar.animate({opacity: opacityOne}, time, mina.easein);
        }

        function showPin(){
            mapPin.animate({opacity: '1'}, time, mina.linear);
        }

        function showCard4() {
            card4.animate({opacity: '1'}, time, mina.easin);
            user4avatar.animate({opacity: '1'}, time, mina.easin, showPin);
        }

        function startAnim() {
            showCard4();
        }

        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('case-geo-waypoint'),
            offset: 200,
            handler: startAnim
        });

    });          
};


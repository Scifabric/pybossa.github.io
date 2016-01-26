function animRaspberryCase() {
    window.animRaspberry = false;
    var s = Snap("#case-raspberry");
    Snap.load("/assets/img/case-raspberry.svg", function(f) {


        var time = 340;
        var opacityOne = '1';
        var opacityTwo = '0.1';

        var fill1 = f.select("#lens");
        var fill2 = f.select("#Fill-1607");
        var fill3 = f.select("#Fill-1608");
        var fill4 = f.select("#Fill-1606");


        function picture(){
            playSound('camera.mp3', '0.1');
            window.animRaspberry = true;
            fill1.animate({fill: 'black'}, time, mina.easein);
            fill2.animate({fill: 'black'}, time, mina.easein);
            fill3.animate({fill: 'black'}, time, mina.easein);
            fill4.animate({fill: 'black'}, time, mina.easein, pictureBack);

        }

        function pictureBack(){
            fill1.animate({fill: '#2F4149'}, time, mina.easein);
            fill2.animate({fill: 'white'}, time, mina.easein);
            fill3.animate({fill: 'white'}, time, mina.easein);
            fill4.animate({fill: 'white'}, time, mina.easein);
        }


        function startAnim() {
            if (window.animRaspberry === false) {
                picture();
            }
        }

        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('case-raspberry-waypoint'),
            offset: 200,
            handler: startAnim
        })

    });          
};


function animSoundCase() {
    window.animSound = false;
    var s = Snap("#case-audio");
    Snap.load("//cdn.pybossa.com/assets/img/case-audio.svg", function(f) {
        var time = 500;

        var totalTime = 0;

        var barTwo = f.select("#bar-3");
        var btnControlTwo = f.select("#btn-control-2");
        var progressTwo = f.select("#progress-3");
        var btnBird = f.select("#btn-2-bg");


        btnBird.attr({fill: '#2F4149'});
        barTwo.attr({x: 50});
        progressTwo.attr({width: '30'});

        function animShowWave(id, last, time){
            //var time = parseInt(Math.random() * 100);
            if (last) {
                id.animate({opacity: '1'}, time, mina.easein);
            }
            else {
                id.animate({opacity: '1'}, time, mina.easein);
            }
        }

        function animHideWave(id, last){
            var time = parseInt(Math.random() * 1000);
            var timeTwo = 1000 - time;
            id.animate({opacity: '0'}, time, mina.easeout, function(){
                animShowWave(id, last, timeTwo);
            }); 
        }

        function selectOption(){
            btnBird.animate({fill: '#077CA0'}, time, mina.easein);
        }

        var waves = [];

        for(i=4;i<40;i++) {
            var line = f.select("#Line-Copy-" + i);
            waves.push(line);
        }

        function startAnim(){

            if (window.animSound === false) {
                window.animSound = true;
                for(i=0;i<waves.length;i++) {
                    var last = false;
                    if (i==0) {

                        barTwo.animate({x: '240'}, 1000,
                                mina.easein, selectOption);
                        progressTwo.animate({width: '220'}, 1000, mina.easein);
                        playSound('birds.mp3', 0.5);
                    }
                    if (i==waves.length) {
                        last = true;
                    }
                    animHideWave(waves[i], last);
                }


            }

        }



        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('case-audio-waypoint'),
            offset: 200,
            handler: startAnim
        });

    });          
};


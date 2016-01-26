function animSoundCase() {
    window.animSound = false;
    var s = Snap("#case-audio");
    Snap.load("/assets/img/case-audio.svg", function(f) {
        var time = 500;

        var totalTime = 0;

        var playTwo = f.select("#play-2");
        var pauseTwo = f.select("#pause-2");
        var barTwo = f.select("#bar-2");
        var progressTwo = f.select("#progress-2");
        var btnBird = f.select("#btn-bird");


        btnBird.attr({fill: '#2F4149'});
        playTwo.attr({opacity: '0'});
        barTwo.attr({x: 70});
        progressTwo.attr({width: '30'});

        function animShowWave(id, last, time){
            //var time = parseInt(Math.random() * 100);
            if (last) {
                id.animate({opacity: '1'}, time, mina.easein, function(){
                    pauseTwo.attr({opacity: '0'});
                    playTwo.attr({opacity: '1'});
                });
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
                        progressTwo.animate({width: '200'}, 1000, mina.easein);
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

        //var waypoint = new Waypoint({
        //    element: document.getElementById('case-audio-waypoint'),
        //    offset: 85,
        //    handler: startAnim
        //});


        var inview = new Waypoint.Inview({
          element: $('#case-audio')[0],
          entered: function(direction) {
            startAnim();
          }
        })


    });          
};


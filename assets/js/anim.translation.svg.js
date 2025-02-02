function animTranslationCase() {
    var s = Snap("#case-translation");
    Snap.load("//pybossa.com/assets/img/case-translation.svg", function(f) {

        var time = 500;
        var wordTime = 250;
        var card5 = f.select("#user5-card");
        var user5avatar = f.select("#user5-avatar");
        var barThree = f.select("#bar-4");
        var progressThree = f.select("#progress-4");
        var user5Line1 = f.select("#user5-line1");
        var user5Line2 = f.select("#user5-line2");
        var user5Line3 = f.select("#user5-line3");

        var words = [];
        for(i=1;i<8;i++) {
            var word = f.select("#word" + i);
            words.push(word);
            word.attr({opacity: '0'});
        }

        function showWords() {
        words[0].animate({opacity: '1'}, wordTime, mina.easein, function(){
            words[1].animate({opacity: '1'}, wordTime, mina.easein, function(){
                words[2].animate({opacity: '1'}, wordTime, mina.easein, function(){
                    words[3].animate({opacity: '1'}, wordTime, mina.easein, function(){
                        words[4].animate({opacity: '1'}, wordTime, mina.easein, function(){
                            words[5].animate({opacity: '1'}, wordTime, mina.easein, function(){
                                words[6].animate({opacity: '1'}, wordTime, mina.easein, function(){
                                });
                            });
                        });
                    });
                });
            });
        });
        }



        user5Line1.attr({opacity: '0'});
        user5Line2.attr({opacity: '0'});
        user5Line3.attr({opacity: '0'});

        barThree.attr({x: '50'});
        progressThree.attr({width: '30'});

        card5.attr({opacity: '0'});
        user5avatar.attr({opacity: '0'});

        function showUser5Avatar() {
            user5avatar.animate({opacity: '1'}, time, mina.easein);
        }

        function showCard5() {
            card5.animate({opacity: '1'}, time, mina.easein);
            user5avatar.animate({opacity: '1'}, time, mina.easein, showCardUser5Lines);
        }

        function showCardUser5Lines(){
            function showUser5Line2() {
                user5Line2.animate({opacity: '1'}, 
                        time, 
                        mina.easein,
                        showUser5Line3);
            }

            function showUser5Line3() {
                user5Line3.animate({opacity: '1'}, 
                        time, mina.easein);
            }


            user5Line1.animate({opacity: '1'}, 
                    time, 
                    mina.easein, 
                    showUser5Line2);
        }

        function showUser1Avatar() {
            user1avatar.animate({opacity: '1'}, time, mina.easein,
                    showCardUser1Lines);
        }



        function startAnim() {
            showWords();
            barThree.animate({x: '240'}, 1750, mina.easein);
            progressThree.animate({width: '220'}, 1750, mina.easein, showCard5);
        }

        s.append(f);

        var waypoint = new Waypoint({
            element: document.getElementById('case-translation-waypoint'),
            offset: 200,
            handler: startAnim
        });

    });          
};


;(function(){
    WY.bind('sacrifice-offset',function(options , call){
        var indoor = options.indoor;
        var personCount = options.personCount;
        // A 桌上 B 桌下 C 香 D 烛 E 火炮
        var offsetData = {
            A:indoor?{left:440,bottom:400}:{left:680,bottom:205},
            B:indoor?{left:1030,bottom:170}:{left:1010,bottom:90},
            C:indoor?{left:780,bottom:400}:{left:540,bottom:205},
            D:indoor?{left:1110,bottom:400}:{left:1150,bottom:205},
            E:indoor?{left:1110,bottom:450}:{left:1150,bottom:285},
        };
        var offsetCount = {};
        function getMoveOffset(offset , move){
            console.log('move ' + move);
            var count = move?0:(offsetCount[offset]||0);
            var rt = {
                left:0,
                bottom:offsetData[offset].bottom
            };
            //室内
            if(indoor){
                //单人
                if(personCount === 1){
                    switch (offset){
                        case 'A':
                            rt.width = 50;
                            rt.left = [790,960,720,1030,650,1100][count] || 790;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = 885;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];

                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];

                            rt.leftEnd = [855,940];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
                else{
                    switch (offset){
                        case 'A':
                            rt.width = 40;
                            rt.left = [750,1010,700,1060,650,1110][count] || 750;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = [833,940][count] || 833;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];
                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];
                            rt.leftEnd = [[803,883],[910,990]][count]||[788,888];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
            }else{
                if(personCount === 1){
                    switch (offset){
                        case 'A':
                            rt.width = 50;
                            rt.left = [770,990,700,1060,630,1130][count] || 770;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = 885;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];

                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];

                            rt.leftEnd = [855,935];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
                else{
                    switch (offset){
                        case 'A':
                            rt.width = 40;
                            rt.left = [770,990,710,1050,650,1110][count] || 750;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = [848,925][count] || 848;;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];
                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];
                            rt.leftEnd = [[833,883],[910,960]][count]||[828,878];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
            }
            offsetCount[offset] = count + 1;
            return rt;
        }
        function getStartOffset($img , w , h){
            w=w || 0;
            h= h || 0;
            if($img){
                w = $img.width();
                h = $img.height();
            }
            return {left:(options.width-w)/2,bottom:($(window).height()-h)/2};
        }
        var method = {
            getStartOffset:getStartOffset,
            getMoveOffset:getMoveOffset,
            clearOffsetCount:function(){
                offsetCount = {};
            }
        };
        call && call(method);
    })
})();
(function() {
    var board = document.querySelector('.board'),
        munter = document.querySelector('.munter'),
        alex =   document.querySelector('.alexhead');

    var sounds = {
        'alex': new Howl({
            urls: ['audio/alex.mp3']
        }),
        'alright': new Howl({
            urls: ['audio/alright.mp3']
        }),
        'denied': new Howl({
            urls: ['audio/denied.mp3']
        }),
        'doyounow': new Howl({
            urls: ['audio/doyounow.mp3']
        }),
        'everyday': new Howl({
            urls: ['audio/everyday.mp3']
        }),
        'hmmmm': new Howl({
            urls: ['audio/hmmmm.mp3']
        }),
        'horseday': new Howl({
            urls: ['audio/horseday1.mp3']
        }),
        'horseday2': new Howl({
            urls: ['audio/horseday2.mp3']
        }),
        'idonot': new Howl({
            urls: ['audio/idonot.mp3']
        }),
        'laugh': new Howl({
            urls: ['audio/laugh.mp3']
        }),
        'leaveacomment': new Howl({
            urls: ['audio/leaveacomment.mp3']
        }),
        'mark': new Howl({
            urls: ['audio/mark.mp3']
        }),
        'okayokayokay': new Howl({
            urls: ['audio/okayokayokay.mp3']
        }),
        'onthelist': new Howl({
            urls: ['audio/onthelist.mp3']
        }),
        'pushingmanysprints': new Howl({
            urls: ['audio/pushingmanysprints.mp3']
        }),
        'revert': new Howl({
            urls: ['audio/revert.mp3']
        }),
        'thatsit': new Howl({
            urls: ['audio/thatsit.mp3']
        }),
        'thatwasme': new Howl({
            urls: ['audio/thatwasme.mp3']
        }),
        'twoguys': new Howl({
            urls: ['audio/twoguys.mp3']
        }),
        'whatare': new Howl({
            urls: ['audio/whatare.mp3']
        }),
        'whichticket': new Howl({
            urls: ['audio/whichticket.mp3']
        }),
        'yeah': new Howl({
            urls: ['audio/yeah.mp3']
        }),
        'yes': new Howl({
            urls: ['audio/yes1.mp3']
        }),
        //round 2
        'alwayshot':new Howl({urls: ['audio/alwayshot.mp3']}),
        'buyyouashot':new Howl({urls: ['audio/buyyouashot.mp3']}),
        'consider':new Howl({urls: ['audio/consider.mp3']}),
        'deployment':new Howl({urls: ['audio/deployment.mp3']}),
        'eightpeople':new Howl({urls: ['audio/eightpeople.mp3']}),
        'fordaysonend':new Howl({urls: ['audio/fordaysonend.mp3']}),
        'iam':new Howl({urls: ['audio/iam.mp3']}),
        'iinnnna':new Howl({urls: ['audio/iinnnna.mp3']}),
        'ingarfields':new Howl({urls: ['audio/ingarfields.mp3']}),
        'longstoryshort':new Howl({urls: ['audio/longstoryshort.mp3']}),
        'middlefinger':new Howl({urls: ['audio/middlefinger.mp3']}),
        'mrmunter':new Howl({urls: ['audio/mrmunter.mp3']}),
        'ofcourse':new Howl({urls: ['audio/ofcourse.mp3']}),
        'ohboy':new Howl({urls: ['audio/ohboy.mp3']}),
        'ohmark':new Howl({urls: ['audio/ohmark.mp3']}),
        'onegiantgarfield':new Howl({urls: ['audio/onegiantgarfield.mp3']}),
        'practice':new Howl({urls: ['audio/practice.mp3']}),
        'really':new Howl({urls: ['audio/really.mp3']}),
        'shotshotshot':new Howl({urls: ['audio/shotshotshot.mp3']}),
        'thanksalex':new Howl({urls: ['audio/thanksalex.mp3']}),
        'toqa':new Howl({urls: ['audio/toqa.mp3']}),
        'twothings':new Howl({urls: ['audio/twothings.mp3']}),
        'wroteacomment':new Howl({urls: ['audio/wroteacomment.mp3']}),
        'yay':new Howl({urls: ['audio/yay.mp3']}),
        'yesyesyes':new Howl({urls: ['audio/yesyesyes.mp3']}),
        'youthful':new Howl({urls: ['audio/youthful.mp3']}),
        //Munter and Alex
        'alexjoke': new Howl({urls:['audio/alexjokefail.mp3']}),
        'munter': new Howl({urls:['audio/munterannoying.mp3']})
    };

    board.addEventListener('click', function(e){
        var el = e.target.nodeName.toLowerCase();

        if(el === 'li') {
            sounds[e.target.classList[1]].play();
        }
    });

    munter.addEventListener('click', function(e){
        sounds['munter'].play();
        
    })
    alex.addEventListener('click', function(e){
        sounds['alexjoke'].play();
    })


})();

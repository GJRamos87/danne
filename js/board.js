(function() {
    var board = document.querySelector('.board');

    var sounds = {
        'alex': new Howl({
            urls: ['/audio/alex.mp3']
        }),
        'alright': new Howl({
            urls: ['/audio/alright.mp3']
        }),
        'denied': new Howl({
            urls: ['/audio/denied.mp3']
        }),
        'doyounow': new Howl({
            urls: ['/audio/doyounow.mp3']
        }),
        'everyday': new Howl({
            urls: ['/audio/everyday.mp3']
        }),
        'hmmmm': new Howl({
            urls: ['/audio/hmmmm.mp3']
        }),
        'horseday': new Howl({
            urls: ['/audio/horseday1.mp3']
        }),
        'idonot': new Howl({
            urls: ['/audio/idonot.mp3']
        }),
        'laugh': new Howl({
            urls: ['/audio/laugh.mp3']
        }),
        'leaveacomment': new Howl({
            urls: ['/audio/leaveacomment.mp3']
        }),
        'mark': new Howl({
            urls: ['/audio/mark.mp3']
        }),
        'okayokayokay': new Howl({
            urls: ['/audio/okayokayokay.mp3']
        }),
        'okthelist': new Howl({
            urls: ['/audio/onthelist.mp3']
        }),
        'pushingmanysprints': new Howl({
            urls: ['/audio/pushingmanysprints.mp3']
        }),
        'revert': new Howl({
            urls: ['/audio/revert.mp3']
        }),
        'thatsit': new Howl({
            urls: ['/audio/thatsit.mp3']
        }),
        'thatwasme': new Howl({
            urls: ['/audio/thatwasme.mp3']
        }),
        'twoguys': new Howl({
            urls: ['/audio/twoguys.mp3']
        }),
        'whatare': new Howl({
            urls: ['/audio/whatare.mp3']
        }),
        'whichticket': new Howl({
            urls: ['/audio/whichticket.mp3']
        }),
        'yeah': new Howl({
            urls: ['/audio/yeah.mp3']
        }),
        'yes': new Howl({
            urls: ['/audio/yes1.mp3']
        }),
    };

    board.addEventListener('click', function(e){
        var el = e.target.nodeName.toLowerCase();

        if(el === 'li') {
            sounds[e.target.classList[1]].play();
        }
    });
})();

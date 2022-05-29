const getPhrases = () => {

    return [

        'If I were you I would take a look into that short dick',

        'Let me give you an advice, shut up and kiss my belly',

        'Why don\'t you just read a book called my butty',

        'Normally I\'d say yes but with all that\'s going on I\'ll probably say yes as well',

        'The difference between a frog and a crocodile is basically the wings',

        'I can tell by your face that your grandma is a great English musician',

        'Cows are like yoghurt, they both like Californian sunsets'
        
    ];
    
}

const showPhrase = ev => {

    var arr = getPhrases(),
    phrase,
    last = $('.phrase > h2').html();

    while (!phrase || phrase == last) {
        var i = Math.floor(Math.random()*arr.length),
        phrase = arr[i];
    }
    last = phrase;
    $('.phrase > h2').html(phrase);
    
}


$('main button').click(showPhrase);
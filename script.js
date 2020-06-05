(function() {
    var names = ["Michael", "Jaden"," Chris Paul", "Jason Mike","Larry Bird", "John", "LeBron James","Jimmy", "Tyson"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
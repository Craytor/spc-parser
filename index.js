const fs = require('fs');

fs.readFile('./data/day1.txt', function(err, buf) {
    var text = buf.toString()
    
    var textArr = text.split('\n')

    var torn = textArr.lastIndexOf("... TORNADO ...")
    var hail = textArr.lastIndexOf("... HAIL ...")
    var wind = textArr.lastIndexOf("... WIND ...")
    var cat = textArr.lastIndexOf("... CATEGORICAL ...")
    var end = textArr.lastIndexOf("&&")

    var coords = {
        tornado: textArr.slice(torn + 1, hail - 1),
        hail: textArr.slice(hail + 1, wind - 1),
        wind: textArr.slice(wind + 2, cat - 4),
        // cat: textArr.slice(cat + 1, end - 1),
    }
    // console.log(coords.hail)
    for(var i=0; i<coords.wind.length; i++) {
        // if(coords.hail[i].length == 0 || coords.hail[i].length == 2) {
        //     coords.hail.splice(i, 1)
        // } 
        coords.wind[i] = coords.wind[i].replace('       ', '')
        coords.wind[i] = coords.wind[i].replace('   ', ' ')
        
    }
    
    var wind = ['0.05', '0.15', '0.30', '0.45', '0.60', 'SIGN']

    var arr2 = []

    for(var k=0; k<coords.wind.length; k++) {
        var innerCords = coords.wind[k].split(' ')
        for(var m=0; m<innerCords.length; m++) {
            if(wind.includes(innerCords[m])) {
                console.log(innerCords[m])
            }
        }
    }
    // console.log(coords.wind)
    
})

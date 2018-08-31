
function woof() {
    console.log('Woof Woof');
}

function bark(BarkCount) {
    for(let i = 0; i < BarkCount; ++i) {
        console.log('Barkety-bark!!');
    }
}

module.exports = {
    woof: woof,
    bark: bark
}


function miaow() {
    console.log('miaow!');
}

function stroke(StrokeCount) {
    for(let i = 0; i < StrokeCount; ++i) {
        if(i < 5) {
            console.log("purrrrrr");
        } else {
            console.log("<Scratch>*giggle*");
        }
    }
}

module.exports = {
    miaow: miaow,
    stroke: stroke
};

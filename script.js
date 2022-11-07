let score = 0;
let work = Math.ceil(1);
let time = 1000

if (score >= 20) {
    document.querySelector('.box').classList.add('shield');
} else {
    document.querySelector('.box').classList.remove('shield');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function start() {
    document.querySelector('.box').classList.add('a-name');
    document.querySelector('.starts').classList.add('s-none');
    while (11 > 10) {
        await sleep(time)
        score += work;
        document.querySelector('.score').innerHTML = "Coins" + " " + score;
    }
}



function settings() {
    document.querySelector('#box-').classList.add('s-block');
}

function clos() {
    document.querySelector('#box-').classList.remove('s-block');
}

function sumbit() {
    let name = document.querySelector('.input1').value;
    document.querySelector('.main-text').innerHTML = name;
    document.querySelector('.input1').value = "";

}

function red() {
    document.querySelector('.box').classList.remove('square-bluex');
    document.querySelector('.box').classList.remove('square-greenx');
    document.querySelector('.box').classList.remove('square-yellowx');
    document.querySelector('.box').classList.add('square-redx');
}

function yellow() {
    document.querySelector('.box').classList.remove('square-redx');
    document.querySelector('.box').classList.remove('square-greenx');
    document.querySelector('.box').classList.remove('square-bluex');
    document.querySelector('.box').classList.add('square-yellowx');
}

function green() {
    document.querySelector('.box').classList.remove('square-yellowx');
    document.querySelector('.box').classList.remove('square-redx');
    document.querySelector('.box').classList.add('square-greenx');
}

function blue() {
    document.querySelector('.box').classList.remove('square-greenx');
    document.querySelector('.box').classList.remove('square-yellowx');
    document.querySelector('.box').classList.remove('square-redx');
    document.querySelector('.box').classList.add('square-bluex');
}

function circle() {
    document.querySelector('.box').classList.remove('quadratx');
    document.querySelector('.box').classList.add('circlex');
}

function quadrat() {
    document.querySelector('.box').classList.remove('circlex');
    document.querySelector('.box').classList.add('quadratx');
}



function speed1() {
    if (score >= 100) {
        score -= 100
        time = 800
        console.log("user bought speed1")
        document.querySelector('.box').classList.remove('speed2x');
        document.querySelector('.box').classList.remove('speed3x');
        document.querySelector('.box').classList.remove('speed4x');
        document.querySelector('.box').classList.remove('speed5x');
        document.querySelector('.box').classList.add('speed1x');
    } else {
        alert("You don't have so much money")
    }
}

function speed2() {
    if (score >= 300) {
        score -= 300
        time = 600
        console.log("user bought speed4")
        document.querySelector('.box').classList.remove('speed1x');
        document.querySelector('.box').classList.remove('speed3x');
        document.querySelector('.box').classList.remove('speed4x');
        document.querySelector('.box').classList.remove('speed5x');
        document.querySelector('.box').classList.add('speed2x');
    } else {
        alert("You don't have so much money")
    }

}

function speed3() {
    if (score >= 500) {
        score -= 500
        time = 400
        console.log("user bought speed3")
        document.querySelector('.box').classList.remove('speed1x');
        document.querySelector('.box').classList.remove('speed2x');
        document.querySelector('.box').classList.remove('speed4x');
        document.querySelector('.box').classList.remove('speed5x');
        document.querySelector('.box').classList.add('speed3x');
    } else {
        alert("You don't have so much money")
    }

}

function speed4() {
    if (score >= 700) {
        score -= 200
        work = Math.ceil(0.040);
        console.log("user bought speed4")
        document.querySelector('.box').classList.remove('speed1x');
        document.querySelector('.box').classList.remove('speed2x');
        document.querySelector('.box').classList.remove('speed3x');
        document.querySelector('.box').classList.remove('speed4x');
        document.querySelector('.box').classList.add('speed4x');
    } else {
        alert("You don't have so much money")
    }

}

function speed5() {
    if (score >= 900) {
        score -= 900
        time = 1
        document.querySelector('.box').classList.add('shield');
        console.log("user bought speed5")
        document.querySelector('.box').classList.remove('speed1x');
        document.querySelector('.box').classList.remove('speed2x');
        document.querySelector('.box').classList.remove('speed3x');
        document.querySelector('.box').classList.remove('speed4x');
        document.querySelector('.box').classList.add('speed5x');
    } else {
        alert("You don't have so much money")
    }

}


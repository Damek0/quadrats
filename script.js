let score = 0;
let work = Math.ceil(1);
let time = 900
let speed2work = 0
let speed3work = 0
let speed4work = 0
let speed5work = 0 
let oneprice1 = 100
let oneprice2 = 300
let oneprice3 = 500
let oneprice4 = 700
let oneprice5 = 900



if (score >= 20) {
    document.querySelector('.box').classList.add('shield');
} else {
    document.querySelector('.box').classList.remove('shield');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function start() {
    console.log("user clicked start")
    document.querySelector('.box').classList.add('a-name');
    document.querySelector('.starts').classList.add('s-none');
    document.querySelector('#tooth').classList.add('settings-updater');
    document.querySelector('#tooth').classList.remove('settings');
    document.querySelector('#score-').classList.remove('score');
    document.querySelector('#score-').classList.add('scorex');
    while (11 > 10) {
        await sleep(time)
        score += work;
        document.querySelector('#score-').innerHTML = "Money" + " " + score;
    }
}



function settings() {
    console.log("user opened settings")
    document.querySelector('#box-').classList.add('s-block');
}

function clos() {
    console.log("user has close settings")
    document.querySelector('#box-').classList.remove('s-block');
}

function sumbit() {
    let name = document.querySelector('.input1').value;
    console.log("user change name his object" + " " + "(" + name + ")")
    document.querySelector('.main-text').innerHTML = name;
    document.querySelector('.input1').value = "";

}

function red() {
    console.log("user select red")
    document.querySelector('.box').classList.remove('square-bluex');
    document.querySelector('.box').classList.remove('square-greenx');
    document.querySelector('.box').classList.remove('square-yellowx');
    document.querySelector('.box').classList.add('square-redx');
    score += 1000
}

function yellow() {
    console.log("user select yellow")
    document.querySelector('.box').classList.remove('square-redx');
    document.querySelector('.box').classList.remove('square-greenx');
    document.querySelector('.box').classList.remove('square-bluex');
    document.querySelector('.box').classList.add('square-yellowx');
}

function green() {
    console.log("user select green")
    document.querySelector('.box').classList.remove('square-yellowx');
    document.querySelector('.box').classList.remove('square-redx');
    document.querySelector('.box').classList.add('square-greenx');
}

function blue() {
    console.log("user select blue")
    document.querySelector('.box').classList.remove('square-greenx');
    document.querySelector('.box').classList.remove('square-yellowx');
    document.querySelector('.box').classList.remove('square-redx');
    document.querySelector('.box').classList.add('square-bluex');
}

function circle() {
    console.log("user select circle")
    document.querySelector('.box').classList.remove('quadratx');
    document.querySelector('.box').classList.add('circlex');
}

function quadrat() {
    console.log("user select quadrat")
    document.querySelector('.box').classList.remove('circlex');
    document.querySelector('.box').classList.add('quadratx');
}



function speed1() {
    if (score >= 100 || oneprice1 == 0) {
        score -= oneprice1
        time = 900
        oneprice1 = 0
        speed2work = 1
        console.log("user bought speed1")
        document.querySelector('.box').classList.remove('speed2x');
        document.querySelector('.box').classList.remove('speed3x');
        document.querySelector('.box').classList.remove('speed4x');
        document.querySelector('.box').classList.remove('speed5x');
        document.querySelector('.box').classList.add('speed1x');
        document.querySelector('#x1').classList.add('x1-');
    } else {
        alert("You don't have so much money")
    }
}

function speed2() {
    if (speed2work == 1) {
        if (score >= 300 || oneprice2 == 0) {
            score -= oneprice2
            oneprice2 = 0
            time = 400
            speed3work = 1
            console.log("user bought speed2")
            document.querySelector('.box').classList.remove('speed1x');
            document.querySelector('.box').classList.remove('speed3x');
            document.querySelector('.box').classList.remove('speed4x');
            document.querySelector('.box').classList.remove('speed5x');
            document.querySelector('.box').classList.add('speed2x');
            document.querySelector('#x2').classList.add('x2-');
        } else {
            alert("You don't have so much money")
        }
    
    } else {
        alert("You must first buy speed 1")
    }
}

function speed3() {
    if (speed3work == 1) {
        if (score >= 500 || oneprice3 == 0) {
            score -= oneprice3
            time = 300
            oneprice3 = 0
            speed4work = 1
            console.log("user bought speed3")
            document.querySelector('.box').classList.remove('speed1x');
            document.querySelector('.box').classList.remove('speed2x');
            document.querySelector('.box').classList.remove('speed4x');
            document.querySelector('.box').classList.remove('speed5x');
            document.querySelector('.box').classList.add('speed3x');
            document.querySelector('#x3').classList.add('x3-');
        } else {
            alert("You don't have so much money")
        }
    } else {
        alert("You must first buy speed 2")
    }
}

function speed4() {
    if (speed4work == 1) {
        if (score >= 700 || oneprice4 == 0) {
            score -= oneprice4
            oneprice4 = 0
            time = 100
            speed5work = 1
            console.log("user bought speed4")
            document.querySelector('.box').classList.remove('speed1x');
            document.querySelector('.box').classList.remove('speed2x');
            document.querySelector('.box').classList.remove('speed3x');
            document.querySelector('.box').classList.remove('speed4x');
            document.querySelector('.box').classList.add('speed4x');
            document.querySelector('#x4').classList.add('x4-');
        } else {
            alert("You don't have so much money")
        }
    } else {
        alert("You must first buy speed 3")
    }
}

function speed5() {
    if (speed5work == 1) {
        if (score >= 900 || oneprice5 == 0) {
            score -= oneprice5
            oneprice5 = 0
            time = 1
            document.querySelector('.box').classList.add('shield');
            console.log("user bought speed5")
            document.querySelector('.box').classList.remove('speed1x');
            document.querySelector('.box').classList.remove('speed2x');
            document.querySelector('.box').classList.remove('speed3x');
            document.querySelector('.box').classList.remove('speed4x');
            document.querySelector('.box').classList.add('speed5x');
            document.querySelector('.box').classList.add('box2-a');
            document.querySelector('#x5').classList.add('x5-');
        } else {
            alert("You don't have so much money")
        }
    } else {
        alert("You must first buy speed 4")
    }
}


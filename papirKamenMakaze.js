



var on = 0;
var mi = 0;
var jed = 0;

var brCovek = 0;
var brKomp = 0;
console.log(mi);


function dajPapir() {
    var igrac = "🤚";
    var brCovek = 2
    document.getElementById("slika1").innerHTML = (igrac);

    var racunar = Math.random();
    if (racunar < 0.34) {
        var racun = "🤛";
        brKomp = 1

    } else if (racunar <= 0.67) {

        var racun = "✋";
        brKomp = 2
    } else if (racunar > 0.68) {
        var racun = "✌";
        brKomp = 3
    };


    console.log(racunar);
    document.getElementById("slika2").innerHTML= (racun);

    if (brCovek === brKomp) {
        console.log("Rezultat je izjednačen ");
        jed++
        document.getElementById("rezultat").innerHTML = "Rezultat je izjednačen";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezIsto").style.color = "orange";
    };
    if (brCovek === 2) {
        if (brKomp === 3) {
            on++
            document.getElementById("rezultat").innerHTML = "PC pobeđuje";
            document.getElementById("rezOn").innerHTML = on;
            document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezOn").style.color = "orange";
            console.log("PC pobeđuje");
        } else {
            if (brKomp === 1) {
                mi++
                console.log("Igrač pobeđuje")
                document.getElementById("rezultat").innerHTML = "Igrač pobeđuje";
                document.getElementById("rezMi").innerHTML = mi;
                document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
                document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

                document.getElementById("rezMi").style.color = "orange";

            }
        }
    };
};
function dajKamen() {
    var igrac = "🤜";
    var brCovek = 1

    document.getElementById("slika1").innerHTML = (igrac);

    var racunar = Math.random();
    if (racunar < 0.34) {
        var racun = "🤛";
        brKomp = 1

    } else if (racunar <= 0.67) {

        var racun = "✋";
        brKomp = 2
    } else if (racunar > 0.68) {
        var racun = "✌";
        brKomp = 3
    };


    document.getElementById("slika2").innerHTML = (racun);

    if (brCovek === brKomp) {
        jed++
        console.log("Rezultat je izjednačen ");
        document.getElementById("rezultat").innerHTML = "Rezultat je izjednačen";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezIsto").style.color = "orange";
    };

    if (brCovek === 1) {
        if (brKomp === 3) {
            mi++;
            document.getElementById("rezultat").innerHTML = "Igrač pobeđuje";
            console.log("Igrač pobeđuje");
            document.getElementById("rezMi").innerHTML = mi;
            document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

            document.getElementById("rezMi").style.color = "orange";

            console.log(mi);
        } else {
            if (brKomp === 2) {
                on++
                console.log("PC pobeđuje")
                document.getElementById("rezultat").innerHTML = "PC pobeđuje";
                document.getElementById("rezOn").innerHTML = on;
                document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
                document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

                document.getElementById("rezOn").style.color = "orange";
            }
        }
    };
};

function dajMakaze() {
    var brCovek = 3;
    document.getElementById("slika1").innerHTML = "✌";
 
    var racunar = Math.random();
    if (racunar < 0.34) {
        var racun = "🤛";
        brKomp = 1

    } else if (racunar <= 0.67) {

        var racun = "✋";
        brKomp = 2
    } else if (racunar > 0.68) {
        var racun = "✌";
        brKomp = 3
    };


    document.getElementById("slika2").innerHTML = (racun);

    if (brCovek === brKomp) {
        jed++
        console.log("Rezultat je izjednačen ");
        document.getElementById("rezultat").innerHTML = "Rezultat je izjednačen";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezIsto").style.color = "orange";
    };


    if (brCovek === 3) {
        if (brKomp === 1) {
            on++
            document.getElementById("rezultat").innerHTML = "PC pobeđuje";
            document.getElementById("rezOn").innerHTML = on;
            document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

            document.getElementById("rezOn").style.color = "orange";
        } else {
            if (brKomp === 2) {
                console.log("Igrac pobeđuje " + mi + " put");

                mi++;
                document.getElementById("rezultat").innerHTML = "Igrač pobeđuje";
                document.getElementById("rezMi").innerHTML = mi;
                document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
                document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

                document.getElementById("rezMi").style.color = "orange";
            }
        }
    };


};

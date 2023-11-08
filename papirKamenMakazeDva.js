



var on = 0;
var mi = 0;
var jed = 0;

var brCovek = 0;
var brKomp = 0;
console.log(mi);


function dajPapir() {
    var igrac = "📃";
    var brCovek = 2
    document.getElementById("slika1").innerHTML = (igrac);

    var racunar = Math.random();
    if (racunar <= 0.3333) {
        var racun = "🧱";
        brKomp = 1

    } else if (racunar <= 0.6669) {

        var racun = "📃";
        brKomp = 2
    } else if (racunar >= 0.6670) {
        var racun = "✂";
        brKomp = 3
    };


    console.log(racunar);
    document.getElementById("slika2").innerHTML = (racun);

    if (brCovek === brKomp) {
        console.log("Nerešeno");
        jed++
        document.getElementById("rezultat").innerHTML = "Nerešeno";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezIsto").style.color = "orange";
    };
    if (brCovek === 2) {
        if (brKomp === 3) {
            on++
            document.getElementById("rezultat").innerHTML = "Poen za mašinu";
            document.getElementById("rezOn").innerHTML = on;
            document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezOn").style.color = "orange";
            console.log("Poen za mašinu");
            if (on > 9) {
                document.getElementById("rezultat").innerHTML = "Žao mi je mašina je pobedila!";
                document.getElementById("rezultat").style.color = "orange";
                document.getElementById("papir").disabled = "true"
                document.getElementById("kamen").disabled = "true"
                document.getElementById("makaze").disabled = "true"
            }
        } else {
            if (brKomp === 1) {
                mi++
                console.log("Poen za čoveka")
                document.getElementById("rezultat").innerHTML = "Poen za čoveka";
                document.getElementById("rezMi").innerHTML = mi;
                document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
                document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

                document.getElementById("rezMi").style.color = "orange";
                if (mi > 9) {
                    document.getElementById("rezultat").innerHTML = "Bravo pobedili ste mašinu!";

                    document.getElementById("rezultat").style.color = "orange";
                    document.getElementById("papir").disabled = "true"
                    document.getElementById("kamen").disabled = "true"
                    document.getElementById("makaze").disabled = "true"
                }
            }
        }
    };
};
function dajKamen() {
    var igrac = "🧱";
    var brCovek = 1

    document.getElementById("slika1").innerHTML = (igrac);

    var racunar = Math.random();
    if (racunar <= 0.3333) {
        var racun = "🧱";
        brKomp = 1

    } else if (racunar <= 0.6669) {

        var racun = "📃";
        brKomp = 2
    } else if (racunar >= 0.6670) {
        var racun = "✂";
        brKomp = 3
    };


    document.getElementById("slika2").innerHTML = (racun);

    if (brCovek === brKomp) {
        jed++
        console.log("Nerešeno");
        document.getElementById("rezultat").innerHTML = "Nerešeno";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezIsto").style.color = "orange";
    };

    if (brCovek === 1) {
        if (brKomp === 3) {
            mi++;
            document.getElementById("rezultat").innerHTML = "Poen za čoveka";
            console.log("Poen za čoveka");
            document.getElementById("rezMi").innerHTML = mi;
            document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

            document.getElementById("rezMi").style.color = "orange";

            console.log(mi);
            if (mi > 9) {
                document.getElementById("rezultat").innerHTML = "Bravo pobedili ste mašinu!";

                document.getElementById("rezultat").style.color = "orange";
                document.getElementById("papir").disabled = "true"
                document.getElementById("kamen").disabled = "true"
                document.getElementById("makaze").disabled = "true"
            }
        } else {
            if (brKomp === 2) {
                on++
                console.log("Poen za mašinu")
                document.getElementById("rezultat").innerHTML = "Poen za mašinu";
                document.getElementById("rezOn").innerHTML = on;
                document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
                document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

                document.getElementById("rezOn").style.color = "orange";
                if (on > 9) {
                    document.getElementById("rezultat").innerHTML = "Žao mi je mašina je pobedila!";
                    document.getElementById("rezultat").style.color = "orange";
                    document.getElementById("papir").disabled = "true"
                    document.getElementById("kamen").disabled = "true"
                    document.getElementById("makaze").disabled = "true"
                }
            }
        }
    };
};

function dajMakaze() {
    var brCovek = 3;
    document.getElementById("slika1").innerHTML = "✂";

    var racunar = Math.random();
    if (racunar <= 0.3333) {
        var racun = "🧱";
        brKomp = 1

    } else if (racunar <= 0.6669) {

        var racun = "📃";
        brKomp = 2
    } else if (racunar >= 0.6670) {
        var racun = "✂";
        brKomp = 3
    };


    document.getElementById("slika2").innerHTML = (racun);

    if (brCovek === brKomp) {
        jed++
        console.log("Nerešeno");
        document.getElementById("rezultat").innerHTML = "Nerešeno";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
        document.getElementById("rezIsto").style.color = "orange";
    };


    if (brCovek === 3) {
        if (brKomp === 1) {
            on++
            document.getElementById("rezultat").innerHTML = "Poen za mašinu";
            document.getElementById("rezOn").innerHTML = on;
            document.getElementById("rezMi").style.color = "rgb(71, 71, 71)";
            document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

            document.getElementById("rezOn").style.color = "orange";
            if (on > 9) {
                document.getElementById("rezultat").innerHTML = "Žao mi je mašina je pobedila!";
                document.getElementById("rezultat").style.color = "orange";
                document.getElementById("kamen").disabled = "true"
                document.getElementById("papir").disabled = "true"
                document.getElementById("makaze").disabled = "true"


            }
        } else {
            if (brKomp === 2) {
                console.log("Igrac pobeđuje " + mi + " put");

                mi++;
                document.getElementById("rezultat").innerHTML = "Poen za čoveka";
                document.getElementById("rezMi").innerHTML = mi;
                document.getElementById("rezOn").style.color = "rgb(71, 71, 71)";
                document.getElementById("rezIsto").style.color = "rgb(71, 71, 71)";

                document.getElementById("rezMi").style.color = "orange";
                if (mi > 9) {
                    document.getElementById("rezultat").innerHTML = "Bravo pobedili ste mašinu!";

                    document.getElementById("rezultat").style.color = "orange";
                    document.getElementById("papir").disabled = "true"
                    document.getElementById("kamen").disabled = "true"
                    document.getElementById("makaze").disabled = "true"


                }
            }
        }
    };


};

function novaIgra() {
    location.reload();
}
function paperRock() {
    window.location.href = "rock.html";
}



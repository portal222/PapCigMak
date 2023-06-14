



var on = 0;
var mi = 0;
var jed = 0;
console.log(mi);
function dajPapir() {
    var igrac = "🧾";
    document.getElementById("slika1").innerHTML = ("🧾");
    var racunar = Math.random();

    if (racunar < 0.34) {
        var racun = "🧱";
    } else if (racunar <= 0.67) {

        var racun = "🧾";
    } else if (racunar > 0.68) {
        var racun = "✂";
    };


    console.log(racunar);
    document.getElementById("slika2").innerHTML = (racun);

    if (igrac === racun) {
        console.log("Rezultat je izjednačen ");
        jed++
        document.getElementById("rezultat").innerHTML = "Rezultat je izjednačen";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.background = "darkseagreen";
        document.getElementById("rezMi").style.background = "darkseagreen";
        document.getElementById("rezIsto").style.background = "aquamarine";
    };
    if (igrac === "🧾") {
        if (racun === "✂") {
            on++
            document.getElementById("rezultat").innerHTML = "PC pobeđuje";
            document.getElementById("rezOn").innerHTML = on;
            document.getElementById("rezMi").style.background = "darkseagreen";
            document.getElementById("rezIsto").style.background = "darkseagreen";
            document.getElementById("rezOn").style.background = "aquamarine";
            console.log("PC pobeđuje");
        } else {
            if (racun === "🧱") {
                mi++
                console.log("Igrač pobeđuje")
                document.getElementById("rezultat").innerHTML = "Igrač pobeđuje";
                document.getElementById("rezMi").innerHTML = mi;
                document.getElementById("rezOn").style.background = "darkseagreen";
                document.getElementById("rezIsto").style.background = "darkseagreen";

                document.getElementById("rezMi").style.background = "aquamarine";

            }
        }
    };
};
function dajKamen() {
    var igrac = "🧱";
    var racunar = Math.random();
    document.getElementById("slika1").innerHTML = ("🧱");

    if (racunar < 0.34) {
        var racun = "🧱";
    } else if (racunar <= 0.67) {

        var racun = "🧾";
    } else if (racunar > 0.68) {
        var racun = "✂";
    };


    document.getElementById("slika2").innerHTML = (racun);

    if (igrac === racun) {
        jed++
        console.log("Rezultat je izjednačen ");
        document.getElementById("rezultat").innerHTML = "Rezultat je izjednačen";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.background = "darkseagreen";
        document.getElementById("rezMi").style.background = "darkseagreen";
        document.getElementById("rezIsto").style.background = "aquamarine";
    };

    if (igrac === "🧱") {
        if (racun === "✂") {
            mi++;
            document.getElementById("rezultat").innerHTML = "Igrač pobeđuje";
            console.log("Igrač pobeđuje");
            document.getElementById("rezMi").innerHTML = mi;
            document.getElementById("rezOn").style.background = "darkseagreen";
            document.getElementById("rezIsto").style.background = "darkseagreen";

            document.getElementById("rezMi").style.background = "aquamarine";

            console.log(mi);
        } else {
            if (racun === "🧾") {
                on++
                console.log("PC pobeđuje")
                document.getElementById("rezultat").innerHTML = "PC pobeđuje";
                document.getElementById("rezOn").innerHTML = on;
                document.getElementById("rezMi").style.background = "darkseagreen";
                document.getElementById("rezIsto").style.background = "darkseagreen";

                document.getElementById("rezOn").style.background = "aquamarine";
            }
        }
    };
};

function dajMakaze() {
    var igrac = "✂";
    document.getElementById("slika1").innerHTML = "✂";
    var racunar = Math.random();

    if (racunar < 0.33) {
        var racun = "🧱";
    } else if (racunar <= 0.66) {
        var racun = "🧾";
    } else if (racunar > 0.67) {
        var racun = "✂";
    };


    document.getElementById("slika2").innerHTML = (racun);

    if (igrac === racun) {
        jed++
        console.log("Rezultat je izjednačen ");
        document.getElementById("rezultat").innerHTML = "Rezultat je izjednačen";
        document.getElementById("rezIsto").innerHTML = jed;
        document.getElementById("rezOn").style.background = "darkseagreen";
        document.getElementById("rezMi").style.background = "darkseagreen";
        document.getElementById("rezIsto").style.background = "aquamarine";
    };


    if (igrac === "✂") {
        if (racun === "🧱") {
            on++
            document.getElementById("rezultat").innerHTML = "PC pobeđuje";
            document.getElementById("rezOn").innerHTML = on;
            document.getElementById("rezMi").style.background = "darkseagreen";
            document.getElementById("rezIsto").style.background = "darkseagreen";

            document.getElementById("rezOn").style.background = "aquamarine";
        } else {
            if (racun === "🧾") {
                console.log("Igrac pobeđuje " + mi + " put");

                mi++;
                document.getElementById("rezultat").innerHTML = "Igrač pobeđuje";
                document.getElementById("rezMi").innerHTML = mi;
                document.getElementById("rezOn").style.background = "darkseagreen";
                document.getElementById("rezIsto").style.background = "darkseagreen";

                document.getElementById("rezMi").style.background = "aquamarine";
            }
        }
    };


};

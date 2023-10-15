$(document).ready(function () {

    var slikaCovek = $("#covek");
    var slikaKomp = $("#masina");

    var on = 0;
    var mi = 0;
    var jed = 0;

    var brCovek = 0;
    var brKomp = 0;
    console.log("nas rezultat", mi);

    var slike = ["public/img/detelina_beli_rub.png",
        "public/img/dijamant_beli_rub.png", "public/img/tresnja_beli_rub.png",
    "public/img/drvo-raste-4.gif", "public/img/cuvar-aum.gif"]






    $("#papir").click(function () {
        slikaCovek.attr("src", slike[0]);
        brCovek = 1
        $("#covek");
        // document.getElementById("slika1").innerHTML = (slike[1]);
        var racunar = Math.random();
        console.log("racunar izabrao", racunar);

        if (racunar < 0.3333) {
            slikaKomp.attr("src", slike[0]);
            brKomp = 1;
            $("#masina");
            console.log("prvi po redu")
        } else if (racunar <= 0.6669) {
            slikaKomp.attr("src", slike[1]);
            brKomp = 2;
            $("#masina");

            console.log("drugi po redu")
        } else if (racunar > 0.6670) {
            slikaKomp.attr("src", slike[2]);
            brKomp = 3;
            $("#masina");

            console.log("treci po redu")

        };

        if (brCovek === brKomp) {
            jed++
            $("#rezultat").html("Rezultat je izjednacen");
            $("#rezIsto").html(jed);
            document.getElementById("rezIsto").style.color = "orange";
            document.getElementById("rezMi").style.color = "black";
            document.getElementById("rezOn").style.color = "black";

        };
        if (brCovek === 1) {
            if (brKomp === 2) {
                mi++
                $("#rezultat").html("Igrac pobedjuje");
                $("#rezMi").html(mi);

                console.log("Igrac pobedjuje");
                document.getElementById("rezMi").style.color = "orange";
                document.getElementById("rezIsto").style.color = "black";
                document.getElementById("rezOn").style.color = "black";
                if (mi > 9) {
                    $("#rezultat").html("Čestitamo na uspehu pobede nad mašinom")
                    document.getElementById("rezultat").style.color = "orange";

                }

            } else {
                if (brKomp === 3) {
                    on++
                    $("#rezultat").html("PC pobedjuje");
                    $("#rezOn").html(on);
                    console.log("PC pobedjuje");
                    document.getElementById("rezOn").style.color = "orange";
                    document.getElementById("rezIsto").style.color = "black";
                    document.getElementById("rezMi").style.color = "black";
                    if (on > 9) {
                        $("#rezultat").html("Žao mi je izgubili ste partiju")
                    document.getElementById("rezultat").style.color = "orange";

                    }
                }
            }
        }

    });

    $("#kamen").click(function () {
        slikaCovek.attr("src", slike[1]);
        brCovek = 2;
        $("#covek");

        // document.getElementById("slika1").innerHTML = (slike[1]);
        var racunar = Math.random();
        console.log("racunar izabrao 2", racunar);


        if (racunar < 0.34) {
            slikaKomp.attr("src", slike[0]);
            brKomp = 1;

            $("#masina");
            console.log("prvi po redu")
        } else if (racunar <= 0.67) {
            slikaKomp.attr("src", slike[1]);
            brKomp = 2;

            $("#masina");

            console.log("drugi po redu")
        } else if (racunar > 0.68) {
            slikaKomp.attr("src", slike[2]);
            brKomp = 3;

            $("#masina");

            console.log("treci po redu")

        };
        if (brCovek === brKomp) {
            jed++
            $("#rezultat").html("Rezultat je izjednacen");
            $("#rezIsto").html(jed);
            document.getElementById("rezIsto").style.color = "orange";
            document.getElementById("rezMi").style.color = "black";
            document.getElementById("rezOn").style.color = "black";

        };
        if (brCovek === 2) {
            if (brKomp === 3) {
                mi++
                $("#rezultat").html("Igrac pobedjuje");
                $("#rezMi").html(mi);

                console.log("Igrac pobedjuje");
                document.getElementById("rezMi").style.color = "orange";
                document.getElementById("rezIsto").style.color = "black";
                document.getElementById("rezOn").style.color = "black";

                if (mi > 9) {
                    $("#rezultat").html("Čestitamo na uspehu pobede nad mašinom")
                    document.getElementById("rezultat").style.color = "orange";
                    

                    console.log("presao je deset pogodaka")
                }
            } else {
                if (brKomp === 1) {
                    on++
                    $("#rezultat").html("PC pobedjuje");
                    $("#rezOn").html(on);
                    console.log("PC pobedjuje");
                    document.getElementById("rezOn").style.color = "orange";
                    document.getElementById("rezIsto").style.color = "black";
                    document.getElementById("rezMi").style.color = "black";
                    if (on > 9) {
                        $("#rezultat").html("Žao mi je izgubili ste partiju")
                    document.getElementById("rezultat").style.color = "orange";

                    }
                }
            }
        }

    });

    $("#makaze").click(function () {
        slikaCovek.attr("src", slike[2]);
        brCovek = 3
        $("#covek");
        // document.getElementById("slika1").innerHTML = (slike[1]);
        var racunar = Math.random();
        console.log("racunar izabrao 3", racunar);

        if (racunar < 0.34) {
            slikaKomp.attr("src", slike[0]);
            brKomp = 1;

            $("#masina");
            console.log("prvi po redu")
        } else if (racunar <= 0.67) {
            slikaKomp.attr("src", slike[1]);
            brKomp = 2;

            $("#masina");

            console.log("drugi po redu")
        } else if (racunar > 0.68) {
            slikaKomp.attr("src", slike[2]);
            brKomp = 3;

            $("#masina");

            console.log("treci po redu")

        };
        if (brCovek === brKomp) {
            jed++
            $("#rezultat").html("Rezultat je izjednacen");
            $("#rezIsto").html(jed);
            document.getElementById("rezIsto").style.color = "orange";
            document.getElementById("rezMi").style.color = "black";
            document.getElementById("rezOn").style.color = "black";

        };
        if (brCovek === 3) {
            if (brKomp === 1) {
                mi++
                $("#rezultat").html("Igrac pobedjuje");
                $("#rezMi").html(mi);

                console.log("Igrac pobedjuje");
                document.getElementById("rezMi").style.color = "orange";
                document.getElementById("rezIsto").style.color = "black";
                document.getElementById("rezOn").style.color = "black";
                if (mi > 9) {
                    $("#rezultat").html("Čestitamo na uspehu pobede nad mašinom")
                    console.log("presao je deset pogodaka")
                    document.getElementById("rezultat").style.color = "orange";

                }

            } else {
                if (brKomp === 2) {
                    on++
                    $("#rezultat").html("PC pobedjuje");
                    $("#rezOn").html(on);
                    console.log("PC pobedjuje");
                    document.getElementById("rezOn").style.color = "orange";
                    document.getElementById("rezIsto").style.color = "black";
                    document.getElementById("rezMi").style.color = "black";
                    if (on > 9) {
                        $("#rezultat").html("Žao mi je izgubili ste partiju")
                    document.getElementById("rezultat").style.color = "orange";

                    }
                }
            }
        }

    });

    $("#nova").click(function () {
        on = 0;
        $("#rezOn").html(on);

        mi = 0;
        $("#rezMi").html(mi);

        jed = 0;
        $("#rezIsto").html(jed);

        document.getElementById("rezOn").style.color = "black";
        document.getElementById("rezIsto").style.color = "black";
        document.getElementById("rezMi").style.color = "black";

        slikaCovek.attr("src", slike[3]);
        slikaKomp.attr("src", slike[4]);
        document.getElementById("rezultat").style.color = "black";
        $("#rezultat").html("Borba može da počne");



    })


});

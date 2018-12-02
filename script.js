$(document).ready(function () {

    let currentPokemon;

    $("#delete").on("click", function() {
        console.log("clear successful");
        $("#pokemon-box").empty();

    });

    $("#pokemon-box").on("click", function(event) {
        $(event.target).next('.img-detail').toggleClass('hidden');

        if ($("#hide-button").hasClass("hidden")) {
            $("#hide-button").toggleClass('hidden');
            currentPokemon = $(event.target).next('.img-detail');
        }
    });

    $("select[id='supertype']").on("change", function(event) {
            console.log($("select[id='supertype']").val());
            if ($("select[id='supertype']").val() === "pokemon") {
                $("select[name='pokemon-subtype']").removeClass("hidden");
                $("select[name='energy-type']").removeClass("hidden");
            } else {
                $("select[name='pokemon-subtype']").addClass("hidden");
                $("select[name='energy-type']").addClass("hidden");
                $("select[name='pokemon-subtype']").val("");
                $("select[name='energy-type']").val("");
            }

            if ($("select[id='supertype']").val() === "trainer") {
                $("select[name='trainer-subtype']").removeClass("hidden");
            } else {
                $("select[name='trainer-subtype']").addClass("hidden");
                $("select[name='trainer-subtype']").val("");
            }

            if ($("select[id='supertype']").val() === "energy") {
                $("select[name='energy-subtype']").removeClass("hidden");
            } else {
                $("select[name='energy-subtype']").addClass("hidden");
                $("select[name='energy-type']").addClass("hidden");
                $("select[name='energy-subtype']").val("");
            }
            
        
    })

    $("#hide-button").on("click", function(event) {
        currentPokemon.toggleClass('hidden');
        $("#hide-button").toggleClass('hidden');
    })
});
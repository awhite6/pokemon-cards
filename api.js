$(document).ready(function () {
    $("#submit").on("click", function(event) {
        console.log($('[id="subtype"]').val());

        let subtype = function() {
            if ($('[id="supertype"]').val() === "pokemon") {
                return $("select[name='pokemon-subtype']").val();
            } else if ($('[id="supertype"]').val() === "trainer") {
                return $("select[name='trainer-subtype']").val();
            } else if ($("[id='supertype']").val() === "energy") {
                return $("select[name='energy-subtype']").val();
            }
        }

        $.ajax({
            url: "https://api.pokemontcg.io/v1/cards",
            type: "GET",
            dataType: "JSON",
         //   $('[id="subtype"]').val()
            data: jQuery.param({ name: $('[id="pokemon-name"]').val(), subtype: subtype, supertype: $('[id="supertype"]').val(), types: $('[id="type"]').val() })
        }).done(function(data) {
            let count = 1;
            $("#pokemon-box").empty();
            $.each(data.cards, function (index, value) {
                if (count === 1) {
                    $("#pokemon-box").append("<div class='row'>")
                }

                $(".row").last().append("<div class='col-sm-3 pokemon'> <p class='text-center'>" + value.name + "</p> <img class='pokemon-img' src='" + value.imageUrl + "'> <div class='img-detail hidden'> <img class='center-block' src='" + value.imageUrlHiRes + "'></div></div>");
                
                if (count === 4) {
                    $("#pokemon-box").append("</div>");
                    count = 1;
                } else {
                    count++;
                }
            })
        })
    });
})
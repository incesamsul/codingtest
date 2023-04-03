$(document).ready(function () {
    if ($(window).width() > 991) {
        $('.navbar-dark  .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
    }


});


var next = 1;
var nextTV = 1;

var apiKey = 'ad496124a55e48dc688ea9ca5cfbfbce';
var posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
var backgroundPaths = "http://image.tmdb.org/t/p/w1280";
// var url = "https://api.themoviedb.org/3/discover/movie?";
var url = "https://api.themoviedb.org/3/movie/";
var key = "&api_key=ad496124a55e48dc688ea9ca5cfbfbce";
var movieCast = "https://api.themoviedb.org/3/movie/";
var actorInfo = "https://api.themoviedb.org/3/discover/movie?&with_cast=";
var imdbLink = "http://www.imdb.com/title/";
var date = new Date();
let choices = '';
function sortMovies(choice) {
    next = 0;
    $(".movies").remove();
    $(".more").show();
    $(".item-container").removeClass("single");
    $(".overview").hide();
    $(".search").show();
    showMovie(choice);
    $("h1").text(textToTitle(choice));
    choices = choice;
    // if (choice === "rating") {
    //     // choices = "vote_count.gte=50&sort_by=vote_average.desc";
    //     showMovie("vote_count.gte=50&sort_by=vote_average.desc");
    //     $("h1").text("Top Rated");
    //     $(".titles").removeClass("hide");
    // } else {
    //     // choices = "sort_by=popularity.desc";

    //     $("h1").text("popular");
    //     $(".titles").removeClass("hide");
    // }
}

function textToTitle(str) {
    return str
        .replace(/_/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

/// perncarian setelah menekan enter
function checkSubmit(e) {
    if (e && e.keyCode == 13) {
        var searching = document.getElementById("search").value;
        search(searching);
        document.getElementById("search").value = "";
        return false;
    }
}

function search(search) {
    $(".movies").remove();
    //http://api.themoviedb.org/3/search/multi?api_key=ad496124a55e48dc688ea9ca5cfbfbce&query=
    var searchurl =
        "https://api.themoviedb.org/3/search/multi?api_key=ad496124a55e48dc688ea9ca5cfbfbce&query=";
    $.getJSON(searchurl + search, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].title;
            var rating = data.results[i].vote_average;
            var poster = posterPaths + data.results[i].poster_path;
            var overview = data.results[i].overview;
            if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
                // jika poster tidak ada jgn tampilkan film
            } else if (
                poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2undefined"
            ) {
                // jangan tampilkan jika overview null
            } else if (overview == "null") {
                // jangan tampilkan jika overview null
            } else {
                $(".item-container").append(
                    "<a class='item link movies m" +
                    i +
                    "' id='" +
                    id +
                    "' onclick='movieInfo(" +
                    id +
                    ")' href='#'><img src='" +
                    poster +
                    "' class='image'><div class='item-inner'><h2 class='item-title'>" +
                    title +
                    "</h2><span class='rating'><i class='fa fa-star' aria-hidden='true'></i> " +
                    rating +
                    "</span></div></a>"
                );
            }
        }
    });
}

function showMovie(choice) {
    next++;

    $.getJSON(url + choice + "?api_key=" + apiKey, function (data) {
        console.log(data)
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].title;
            var overview = data.results[i].overview;
            var rating = data.results[i].vote_average;
            var poster = posterPaths + data.results[i].poster_path;
            if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
                // jangan tampilkan jika tidak ada poster
            } else if (
                poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2undefined"
            ) {
                // jangan tampilka njika overview null
            } else if (overview == "null") {
                // jangan tampilka njika overview null
            } else {
                $(".item-container").append(
                    "<a class='item link movies m" +
                    i +
                    "' id='" +
                    id +
                    "' onclick='movieInfo(" +
                    id +
                    ")' href='#'><img src='" +
                    poster +
                    "' class='image'><div class='item-inner'><h2 class='item-title'>" +
                    title +
                    "</h2><span class='rating'><i class='fa fa-star' aria-hidden='true'></i> " +
                    rating +
                    "</span></div></a>"
                );
            }
        }
    });
}

function movieInfo(id) {
    $.getJSON(movieCast + id + "/casts?" + key, function (json) {
        cast1 = json.cast[0].name;
        cast1id = json.cast[0].id;
        cast2 = json.cast[1].name;
        cast2id = json.cast[1].id;
        cast3 = json.cast[2].name;
        cast3id = json.cast[2].id;
        cast4 = json.cast[3].name;
        cast4id = json.cast[3].id;
        $(".movies").hide();
        $(".search").hide();
        $(".more").hide();
        $(".item-container").addClass("single");
        $(".titles").addClass("hide");
        var infoURL =
            "https://api.themoviedb.org/3/movie/" +
            id +
            "?&api_key=ad496124a55e48dc688ea9ca5cfbfbce";
        $.getJSON(infoURL, function (data) {
            var budget = "$" + data.budget;
            if (budget === "$0") {
                budget = "Budget not yet released";
            }
            var revenue = "$" + data.revenue;
            if (revenue === "$0") {
                revenue = "Revenue not yet released";
            }
            var release = data.release_date;
            var imdb = imdbLink + data.imdb_id;
            var runtime = data.runtime;
            var tagline = data.tagline;
            var year = data.release_date.slice(0, 4);
            var title = data.title;
            var rating = data.vote_average;
            var overview = data.overview;
            var poster = posterPaths + data.poster_path;
            if (poster === "http://image.tmdb.org/t/p/w1280null") {
                poster = "https://via.placeholder.com/1280x1080?text=No+Poster&000.jpg";
            }
            var backdrop = backgroundPaths + data.backdrop_path;
            if (data.genres.length > 3) {
                genre =
                    data.genres[0].name +
                    ", " +
                    data.genres[1].name +
                    ", " +
                    data.genres[2].name +
                    ", " +
                    data.genres[3].name;
            } else if (data.genres.length > 2) {
                genre =
                    data.genres[0].name +
                    ", " +
                    data.genres[1].name +
                    ", " +
                    data.genres[2].name;
            } else if (data.genres.length > 1) {
                genre = data.genres[0].name + ", " + data.genres[1].name;
            } else {
                genre = data.genres[0].name;
            }
            $(".item-container").prepend(
                "<div class='overview'><div class='movie-container'><div class='movie-inner'><div class='movie-content'><div class='movie-poster'><img class='movie-img' src=" +
                poster +
                "></div><div class='movie-data'><div class='movie-info'><div class='movie-head'><h1 class='movie-title'>" +
                title +
                "</h1><h1 class='movie-tagline'>" +
                tagline +
                "</h1></div><div class='movie-subdata'><div class='movie-left'><p class='movie-stars'><i class='fa fa-star' aria-hidden='true'></i>  " +
                rating +
                "</p></div><div class='movie-right'>" +
                year +
                " / " +
                runtime +
                " min</div></div><h3 class='movie-fields'>The Genres</h3><div class='movie-tags'><span class='movie-taxonomy'>" +
                genre +
                "</span></div><h3 class='movie-fields'>The Synopsis</h3><p class='movie-description'>" +
                overview +
                "</p></div><h3 class='movie-fields'>The Actors</h3><div class='movie-tags'><a class='movie-taxonomy' onclick='showActor(" +
                cast1id +
                ")'>" +
                cast1 +
                "</a><a class='movie-taxonomy' onclick='showActor(" +
                cast2id +
                ")'> " +
                cast2 +
                "</a><a class='movie-taxonomy' onclick='showActor(" +
                cast3id +
                ")'>" +
                cast3 +
                "</a><a class='movie-taxonomy' onclick='showActor(" +
                cast4id +
                ")'>" +
                cast4 +
                "</a></div><div id='hideMInfo' class='exit' style='font-size:30px;'><i style='cursor:pointer;' onclick='exit(" +
                id +
                ")' class='fa fa-chevron-circle-left' aria-hidden='true'></i></div></div></div></div></div></div>"
            );
        });
    });
}



$(".more").click(function () {
    showMovie(choices);
});


function exit(id) {
    $(".overview").remove();
    $(".item-container").removeClass("single");
    $(".titles").removeClass("hide");
    $(".movies").show();
    $(".search").show();
    $(".more").show();
    window.location.hash = id;
}


sortMovies('popular');
$(".container").addClass("main");
$(".search").show();
$(".category-link").click(function (e) {
    e.preventDefault();
    $(".category-link").removeClass("current ");
    $(this).addClass("current ");
});


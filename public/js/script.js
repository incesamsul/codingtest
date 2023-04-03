var next = 1;
var nextTV = 1;

var posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
var backgroundPaths = "http://image.tmdb.org/t/p/w1280";
var url = "https://api.themoviedb.org/3/discover/movie?";
var key = "&api_key=ad496124a55e48dc688ea9ca5cfbfbce";
var urlTV = "https://api.themoviedb.org/3/discover/tv?";
var moreTVinfo =
    "https://api.themoviedb.org/3/tv/  +tvshow id+  ?&api_key=ad496124a55e48dc688ea9ca5cfbfbce";
var movieCast = "https://api.themoviedb.org/3/movie/";
var actorInfo = "https://api.themoviedb.org/3/discover/movie?&with_cast=";
var imdbLink = "http://www.imdb.com/title/";
var date = new Date();

function sortMovies(choice) {
    next = 0;
    $(".movies").remove();
    $(".more").show();
    $(".item-container").removeClass("single");
    $(".overview").hide();
    $(".search").show();
    if (choice === "rating") {
        choices = "vote_count.gte=50&sort_by=vote_average.desc";
        showMovie("vote_count.gte=50&sort_by=vote_average.desc");
        $("h1").text("Top Rated");
        $(".titles").removeClass("hide");
    } else if (choice === "grossing") {
        choices = "sort_by=revenue.desc";
        showMovie("sort_by=revenue.desc");
        $("h1").text("grossing");
        $(".titles").removeClass("hide");
    }
    // Genres sort by list start
    else if (choice === "action") {
        choices = "&with_genres=28";
        showMovie("&with_genres=28");
        $("h1").text("action");
    } else if (choice === "adventure") {
        choices = "&with_genres=12";
        showMovie("&with_genres=12");
        $("h1").text("adventure");
    } else if (choice === "animation") {
        choices = "&with_genres=16";
        showMovie("&with_genres=16");
        $("h1").text("animation");
    } else if (choice === "comedy") {
        choices = "&with_genres=35";
        showMovie("&with_genres=35");
        $("h1").text("comedy");
    } else if (choice === "crime") {
        choices = "&with_genres=80";
        showMovie("&with_genres=80");
        $("h1").text("crime");
    } else if (choice === "documentary") {
        choices = "&with_genres=99";
        showMovie("&with_genres=99");
        $("h1").text("documentary");
    } else if (choice === "drama") {
        choices = "&with_genres=18";
        showMovie("&with_genres=18");
        $("h1").text("drama");
    } else if (choice === "family") {
        choices = "&with_genres=10751";
        showMovie("&with_genres=10751");
        $("h1").text("family");
    } else if (choice === "fantasy") {
        choices = "&with_genres=14";
        showMovie("&with_genres=14");
        $("h1").text("fantasy");
    } else if (choice === "foreign") {
        choices = "&with_genres=10769";
        showMovie("&with_genres=10769");
        $("h1").text("foreign");
    } else if (choice === "history") {
        choices = "&with_genres=36";
        showMovie("&with_genres=36");
        $("h1").text("history");
    } else if (choice === "horror") {
        choices = "&with_genres=27";
        showMovie("&with_genres=27");
        $("h1").text("horror");
    } else if (choice === "music") {
        choices = "&with_genres=10402";
        showMovie("&with_genres=10402");
        $("h1").text("music");
    } else if (choice === "mystery") {
        choices = "&with_genres=9648";
        showMovie("&with_genres=9648");
        $("h1").text("mystery");
    } else if (choice === "romance") {
        choices = "&with_genres=10749";
        showMovie("&with_genres=10749");
        $("h1").text("romance");
    } else if (choice === "science fiction") {
        choices = "&with_genres=878";
        showMovie("&with_genres=878");
        $("h1").text("science fiction");
    } else if (choice === "tv movie") {
        choices = "&with_genres=10770";
        showMovie("&with_genres=10770");
        $("h1").text("tv movie");
    } else if (choice === "thriller") {
        choices = "&with_genres=53";
        showMovie("&with_genres=53");
        $("h1").text("thriller");
    } else if (choice === "war") {
        choices = "&with_genres=10752";
        showMovie("&with_genres=10752");
        $("h1").text("war");
    } else if (choice === "western") {
        choices = "&with_genres=37";
        showMovie("&with_genres=37");
        $("h1").text("western");
    }
    //genre ends
    else {
        choices = "sort_by=popularity.desc";
        showMovie("sort_by=popularity.desc");
        $("h1").text("popular");
        $(".titles").removeClass("hide");
    }
}

function sortTv(choice) {
    nextTV = 0;
    $(".tv").remove();
    $(".item-container").removeClass("single");
    if (choice === "rating") {
        choices = "vote_count.gte=50&sort_by=vote_average.desc";
        showTv("vote_count.gte=50&sort_by=vote_average.desc");
    } else if (choice === "grossing") {
        choices = "sort_by=revenue.desc";
        showTv("sort_by=revenue.desc");
    }
    // Genres sort by list start
    else if (choice === "action") {
        choices = "&with_genres=28";
        showTv("&with_genres=28");
    } else if (choice === "adventure") {
        choices = "&with_genres=12";
        showTv("&with_genres=12");
    } else if (choice === "animation") {
        choices = "&with_genres=16";
        showTv("&with_genres=16");
    } else if (choice === "comedy") {
        choices = "&with_genres=35";
        showTv("&with_genres=35");
    } else if (choice === "crime") {
        choices = "&with_genres=80";
        showTv("&with_genres=80");
    } else if (choice === "documentary") {
        choices = "&with_genres=99";
        showTv("&with_genres=99");
    } else if (choice === "drama") {
        choices = "&with_genres=18";
        showTv("&with_genres=18");
    } else if (choice === "family") {
        choices = "&with_genres=10751";
        showTv("&with_genres=10751");
    } else if (choice === "fantasy") {
        choices = "&with_genres=14";
        showTv("&with_genres=14");
    } else if (choice === "foreign") {
        choices = "&with_genres=10769";
        showTv("&with_genres=10769");
    } else if (choice === "history") {
        choices = "&with_genres=36";
        showTv("&with_genres=36");
    } else if (choice === "horror") {
        choices = "&with_genres=27";
        showTv("&with_genres=27");
    } else if (choice === "music") {
        choices = "&with_genres=10402";
        showTv("&with_genres=10402");
    } else if (choice === "mystery") {
        choices = "&with_genres=9648";
        showTv("&with_genres=9648");
    } else if (choice === "romance") {
        choices = "&with_genres=10749";
        showTv("&with_genres=10749");
    } else if (choice === "science fiction") {
        choices = "&with_genres=878";
        showTv("&with_genres=878");
    } else if (choice === "tv movie") {
        choices = "&with_genres=10770";
        showTv("&with_genres=10770");
    } else if (choice === "thriller") {
        choices = "&with_genres=53";
        showTv("&with_genres=53");
    } else if (choice === "war") {
        choices = "&with_genres=10752";
        showTv("&with_genres=10752");
    } else if (choice === "western") {
        choices = "&with_genres=37";
        showTv("&with_genres=37");
    }
    //genre ends
    else {
        choices = "sort_by=popularity.desc";
        showTv("sort_by=popularity.desc");
    }
}
/// when enter is hit it starts the search
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
    $(".tv").remove();
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
                //if their is no poster dont show the movie
            } else if (
                poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2undefined"
            ) {
                //dont show if the overview is null
            } else if (overview == "null") {
                //dont show if the overview is null
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
    $.getJSON(url + choice + key + "&page=" + next, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].title;
            var overview = data.results[i].overview;
            var rating = data.results[i].vote_average;
            var poster = posterPaths + data.results[i].poster_path;
            if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
                //if their is no poster dont show the movie
            } else if (
                poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2undefined"
            ) {
                //dont show if the overview is null
            } else if (overview == "null") {
                //dont show if the overview is null
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

function showActor(id) {
    $(".overview").hide();
    $(".more").show();
    $(".search").show();
    $(".item-container").removeClass("single");
    var next = 0;
    next++;
    $.getJSON(actorInfo + id + key + "&page=" + next, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].title;
            var overview = data.results[i].overview;
            var rating = data.results[i].vote_average;
            var poster = posterPaths + data.results[i].poster_path;
            if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
                poster = "https://via.placeholder.com/370x556?text=No+Poster&000.jpg";
            }
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
    });
}

function showTv(choice) {
    nextTV++;
    console.log(url + choice + key + "&page=" + next);
    $.getJSON(urlTV + choice + key + "&page=" + nextTV, function (data) {
        for (var i = 0; i < data.results.length; i++) {
            var id = data.results[i].id;
            var title = data.results[i].name;
            var rating = data.results[i].vote_average;
            var overview = data.results[i].overview;
            var poster = posterPaths + data.results[i].poster_path;
            if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
                poster = "https://via.placeholder.com/370x556?text=No+Poster&000.jpg";
            }
            if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
                //if their is no poster dont show the movie
            } else if (overview == "null") {
                //dont show if the overview is null
            } else {
                $(".item-container").append(
                    "<a class='item link tv t" +
                    i +
                    "' id='" +
                    id +
                    "' onclick='tvInfo(" +
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

function tvInfo(id) {
    $(".movie").remove();
    $(".tv").hide();
    $(".moreTV").hide();
    $(".item-container").addClass("single");
    $(".titles").addClass("hide");
    var infoURL =
        "https://api.themoviedb.org/3/tv/" +
        id +
        "?&api_key=ad496124a55e48dc688ea9ca5cfbfbce";
    $.getJSON(infoURL, function (data) {
        var genre;
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
        var seasons = data.seasons.length;
        var title = data.name;
        var rating = data.vote_average;
        var overview = data.overview;
        var poster = posterPaths + data.poster_path;
        if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
            poster = "https://via.placeholder.com/370x556?text=No+Poster&000.jpg";
        }
        var backdrop = backgroundPaths + data.backdrop_path;
        $(".item-container").prepend(
            "<div class='overview'><div class='movie-container'><div class='movie-inner'><div class='movie-content'><div class='movie-poster'><img class='movie-img' src=" +
            poster +
            "></div><div class='movie-data'><div class='movie-info'><div class='movie-head'><h1 class='movie-title'>" +
            title +
            "</h1></div><div class='movie-subdata'><div class='movie-left'><p class='movie-stars'><i class='fa fa-star' aria-hidden='true'></i>  " +
            rating +
            "</p></div></div><h3 class='movie-fields'>The Genres</h3><div class='movie-tags'><span class='movie-taxonomy'>" +
            genre +
            "</span></div><h3 class='movie-fields'>The Synopsis</h3><p class='movie-description'>" +
            overview +
            "</p></div><h3 class='movie-fields'>Season information</h3><div class='movie-tags'><select class='season'></select></div><div id='hideMInfo' class='exit' style='font-size:30px;'><i style='cursor:pointer;' onclick='exitTv(" +
            id +
            ")' class='fa fa-chevron-circle-left' aria-hidden='true'></i></div></div></div></div></div></div>"
        );

        for (var i = 0; i < data.seasons.length; i++) {
            $(".season").prepend(
                "<option onclick='seriesInfo(" +
                data.seasons[i].id +
                "," +
                data.seasons[i].season_number +
                ")' value='" +
                data.seasons[i].season_number +
                "'>Season " +
                data.seasons[i].season_number +
                " </option>"
            );
        }
        //var selected = $( ".season option:selected" ).value();
        //seriesInfo(data.seasons[i].id,selected);
    });
}

function seriesInfo(id, num) {
    var seriesURL =
        "https://api.themoviedb.org/3/tv/" +
        id +
        "/season/" +
        num +
        "?&api_key=ad496124a55e48dc688ea9ca5cfbfbce";
    $.getJSON(seriesURL, function (data) {
        for (var i = 0; i < data.episodes.length; i++) {
            var seasonname = data.name;
            var seasonoverview = data.overview;
            var episode = data.episodes[i].name;
            var overview = data.episodes[i].overview;
            var airdate = data.episodes[i].air_date;

            $(".seasons").append(
                "<div><p>" +
                episode +
                "</p><p>" +
                overview +
                "</p><p>" +
                airdate +
                "</p></div>"
            );
        }
    });
}

$("#tv").click(function () {
    nextTV = 0;
    sortTv();
    $(".movies").remove();
    $(".overview").remove();
    $(".moreTV").show();
    $(".more").hide();
    $(".droptv").show();
    $(".dropmovies").hide();
});
$("#movie").click(function () {
    sortMovies();
    $(".tv").remove();
    $(".overview").remove();
    $(".more").show();
    $(".search").show();
    $(".moreTV").hide();
    $(".dropmovies").show();
    $(".droptv").hide();
    next = 1;
});
$(".more").click(function () {
    showMovie(choices);
});
$(".moreTV").click(function () {
    showTv(choices);
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

function exitTv(id) {
    $(".item-container").removeClass("single");
    $(".titles").removeClass("hide");
    $(".overview").hide();
    $(".tv").show();
    $(".moreTV").show();
    window.location.hash = id;
}
sortMovies();
$(".container").addClass("main");
$(".search").show();
$(".category-link").click(function (e) {
    e.preventDefault();
    $(".category-link").removeClass("current ");
    $(this).addClass("current ");
});

var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// / Get the notification element
var notification = document.querySelector('.notification-container');


// Hide the notification after 3 seconds
setTimeout(function () {
    notification.style.display = 'none';
}, 3000);

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Coding test</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>



    <nav class="navbar navbar-expand-lg navbar-dark shadow-sm bg-dark fixed-top bg-main">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="{{ URL::to('/') }}">
                <img src="{{ asset('img/camcorder.svg') }}" alt="" class="brand-img">
                <span class="ml-3 font-weight-bold">PILEM</span>
            </a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                data-target="#navbar4">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbar4">
                <ul class="navbar-nav mr-auto pl-lg-4">
                    <li class="nav-item px-lg-2 dropdown d-menu">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false"><span
                                class="d-inline-block d-lg-none icon-width"><i
                                    class="far fa-caret-square-down"></i></span>Movies
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                        <div class="dropdown-menu shadow-sm sm-menu" aria-labelledby="dropdown01">
                            @foreach ($kategori as $row)
                                <a class="dropdown-item" href="#"
                                    onclick="sortMovies('{{ spaceToLine($row->nama_kategori) }}')">{{ $row->nama_kategori }}</a>
                            @endforeach
                            {{-- <a class="dropdown-item" href="#" onclick="sortMovies('popular')">Popular</a>
                            <a class="dropdown-item" href="#" onclick="sortMovies('top_rated')">Top Rated</a>
                            <a class="dropdown-item" href="#" onclick="sortMovies('now_playing')">Now Playing</a>
                            <a class="dropdown-item" href="#" onclick="sortMovies('upcoming')">Upcoming</a> --}}
                        </div>
                    </li>
                    <li class="nav-item px-lg-2 active"> <a class="nav-link" href="#"> <span
                                class="d-inline-block d-lg-none icon-width"><i class="fas fa-home"></i></span>Tv
                            Show</a>
                    </li>
                    <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span
                                class="d-inline-block d-lg-none icon-width"><i class="fas fa-spa"></i></span>People</a>
                    </li>
                    <li class="nav-item px-lg-2"> <a class="nav-link" href="#"><span
                                class="d-inline-block d-lg-none icon-width"><i
                                    class="far fa-user"></i></i></span>More</a> </li>
                </ul>
                <ul class="navbar-nav ml-auto mt-3 mt-lg-0">
                    <li class="nav-item"> <a class="nav-link" href="#">
                            <i class="fab fa-twitter"></i><span class="d-lg-none ml-3">Twitter</span>
                        </a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">
                            <i class="fab fa-facebook"></i><span class="d-lg-none ml-3">Facebook</span>
                        </a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">
                            <i class="fab fa-instagram"></i><span class="d-lg-none ml-3">Instagram</span>
                        </a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">
                            <i class="fab fa-linkedin"></i><span class="d-lg-none ml-3">Linkedin</span>
                        </a> </li>
                </ul>
            </div>
        </div>
    </nav>

    @yield('content')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
        integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.min.js"
        integrity="sha384-heAjqF+bCxXpCWLa6Zhcp4fu20XoNIA98ecBC1YkdXhszjoejr5y9Q77hIrv8R9i" crossorigin="anonymous">
    </script>

</body>

</html>

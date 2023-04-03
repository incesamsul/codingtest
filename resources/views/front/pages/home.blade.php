@extends('layout.front')
@section('content')
    <div class="py-5 text-center text-white bg-primary hero ">
        <div class="container py-5   d-flex align-items-center justify-content-center">
            <div class="row py-5 main-font">
                <div class="mx-auto col-lg-10   d-flex align-items-center justify-content-center flex-column">
                    <h1 class="display-4 mb-4"><strong>Welcome.</strong> </h1>
                    <P><strong>Millions of movies, TV shows and people to discover. Explore now.</strong>
                    </P>
                    {{-- <a href="#" class="btn btn-lg btn-outline-light mx-1">Search</a> --}}

                    <div class="search-box">
                        <input id="search" onKeyPress="return checkSubmit(event)" type="text"
                            placeholder="&nbsp;Cari film..." class="search-input" value="">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="movie-list" class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    {{-- <h4>Trending</h4> --}}
                </div>
            </div>
            <div class="content">
                <div class="inner-container">
                    <div class="titles">
                        <h1>Popular</h1>
                        <h2>movies</h2>
                    </div>
                    <div class="item-container">
                    </div>
                    <div class="load-more"><i class="fa fa-plus-circle more" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    </section>
@endsection

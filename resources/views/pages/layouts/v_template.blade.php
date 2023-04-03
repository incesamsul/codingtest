@include('pages.layouts.v_header')
@include('pages.layouts.v_nav')
@include('pages.layouts.v_sidebar')
<!-- Main Content -->
<div class="main-content">
    @yield('content')
</div>
@include('pages.layouts.v_footer')
<script src="{{ asset('js/script.js') }}"></script>
@yield('script')

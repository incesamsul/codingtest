@extends('pages.layouts.v_template')

@section('content')
    <section class="section">

        <div class="row">
            <div class="col-lg-12">
                <div class="card ">
                    <div class="card-header">
                        <h4>Kategori</h4>
                        @if ($edit)
                            <a href="{{ URL::to('/kategori') }}" class="btn"><i class="fas fa-plus"></i></a>
                        @endif
                    </div>
                    <div class="card-body">
                        @if ($edit)
                            <form action="{{ URL::to('/update_kategori') }}" method="POST">
                            @else
                                <form action="{{ URL::to('/create_kategori') }}" method="POST">
                        @endif
                        @csrf
                        <div class="form-group">
                            <label for="kategori">Kategori</label>
                            <input type="hidden" name="id_kategori" value="{{ $edit ? $edit->id_kategori : '' }}">
                            <input value="{{ $edit ? $edit->nama_kategori : '' }}" type="text" class="form-control"
                                name="nama_kategori" required>
                        </div>
                        <div class="form-group">
                            @if ($edit)
                                <button type="submit" class="btn btn-warning">Edit</button>
                            @else
                                <button type="submit" class="btn btn-primary">Simpan</button>
                            @endif
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Data kategori</h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Nama kategori</td>
                                    <td>aksi</td>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($kategori as $row)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $row->nama_kategori }}</td>
                                        <td>
                                            <a onclick="return confirm('yakin ? ')"
                                                href="{{ URL::to('/delete_kategori/' . $row->id_kategori) }}" href=""
                                                class="btn btn-danger">hapus</a>
                                            <a href="{{ URL::to('/kategori/' . $row->id_kategori) }}"
                                                class="btn btn-warning">edit</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </section>
@endsection
@section('script')
    <script>
        $('#liKategori').addClass('active');
    </script>
@endsection

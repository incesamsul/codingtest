<?php

namespace App\Http\Controllers;

use App\Models\KategoriModel;

class Home extends Controller
{

    public function index()
    {
        $data['kategori'] = KategoriModel::all();
        return view('front.pages.home', $data);
    }
}

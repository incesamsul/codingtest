<?php

namespace App\Http\Controllers;

use App\Models\KategoriModel;
use Illuminate\Http\Request;

class Kategori extends Controller
{

    public function index($idKategori = null)
    {
        if ($idKategori) {
            $data['edit'] = KategoriModel::where('id_kategori', $idKategori)->first();
        } else {
            $data['edit'] = [];
        }
        $data['kategori'] = KategoriModel::all();
        return view('pages.kategori.index', $data);
    }

    public function store(Request $request)

    {

        KategoriModel::create([
            'nama_kategori' => $request->nama_kategori,
        ]);

        return redirect()->back()->with('message', 'kategori tersimpan');
    }

    public function update(Request $request)

    {
        KategoriModel::where('id_kategori', $request->id_kategori)->update([
            'nama_kategori' => $request->nama_kategori,
        ]);

        return redirect()->back()->with('message', 'kategori tersimpan');
    }

    public function delete($idKategori)
    {
        KategoriModel::where('id_kategori', $idKategori)->delete();
        return redirect()->back()->with('message', 'kategori tersimpan');
    }
}

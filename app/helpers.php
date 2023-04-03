<?php




function spaceToLine($string)
{
    return str_replace(" ", "_", $string);
}


function removeSpace($string)
{
    return str_replace(" ", "", $string);
}


function sweetAlert($pesan, $tipe)
{
    echo '<script>document.addEventListener("DOMContentLoaded", function() {
        Swal.fire(
            "' . $pesan . '",
            "proses berhasil di lakukan",
            "' . $tipe . '",
        );
    })</script>';
}

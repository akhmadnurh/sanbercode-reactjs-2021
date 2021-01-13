// Soal 1
var kataPertama = "saya";
var kataKedua = "Senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var uppercase = kataKeempat.toUpperCase();
console.log(kataPertama+" "+kataKedua+" "+kataKetiga+" "+uppercase)

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var katapertama = parseInt (kataPertama);
var katakedua = parseInt (kataKedua);
var katakeempat = parseInt (kataKetiga);
var katakelima = parseInt (kataKeempat);
console.log(katapertama + katakedua + katakeempat + katakelima)

// Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('kata Pertama: ' + kataPertama);
console.log('kata Kedua: ' + kataKedua);
console.log('kata Ketiga: ' + kataKetiga);
console.log('kata Keempat: ' + kataKeempat);
console.log('kata Kelima: ' + kataKelima);

// Soal 4
var nilai = 75 ;

if (nilai >= 80){
    console.log("indeksnya A");
}else if(nilai >= 70 && nilai < 80){
    console.log("indeksnya B");
}else if(nilai >= 60 && nilai < 70){
    console.log("indeksnya C");
}else if(nilai >= 50 && nilai < 60){
    console.log("indeksnya D");
}else{
    console.log("indeksnya E");
}

// Soal 5
var tanggal = 12;
var bulan = 7;
var tahun = 2001;

switch(bulan){
    case 1:var bulan="januari"
    break;
    case 2:var bulan="februari"
    break;
    case 3:var bulan="maret"
    break;
    case 4:var bulan="april"
    break;
    case 5:var bulan="mei"
    break;
    case 6:var bulan="juni"
    break;
    case 7:var bulan="juli"
    break;
    case 8:var bulan="agustus"
    break;
    case 9:var bulan="september"
    break;
    case 10:var bulan="oktober"
    break;
    case 11:var bulan="november"
    break;
    case 12:var bulan="desember"
}
console.log(tanggal+" "+bulan+" "+tahun);
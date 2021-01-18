// Soal 1
console.log('-----Soal 1-----')

function halo(kalimat = '"Halo Sanbers!"'){
    return kalimat
}
console.log(halo())

// Soal 2
console.log('-----Soal 2-----')

function kalikan(num1,num2){
    return num1 * num2
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

//Soal 3
console.log('-----Soal 3-----')

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

function introduce(name,age,address,hobby){
    return '"Nama saya ' + [name] + ', umur saya ' + [age] + ' tahun' + ', alamat saya di' + [address] + ', dan saya punya hobby yaitu ' + [hobby] + '!"'
}

var perkenalan = introduce(name,age,address,hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

// Soal 4
console.log('-----Soal 4-----')

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var jadi={};
var key = [ "nama", "jenis kelamin", "hobi", "tahun lahir"];
var key_count = key.length;

for(var i=0; i<key_count;i++){
    jadi[key[i]] = arrayDaftarPeserta[i];
}
arrayDaftarPeserta = jadi;

console.log(arrayDaftarPeserta);

// Soal 5
console.log('-----Soal 5-----')

var mobil = [{nama: "strawberry", warna: "merah", adabijinya: "tidak", harga: "9000"}, {nama: "jeruk", warna: "orange", adabijinya: "ada", harga: "8000"}, {nama: "semangka", warna: "hijau & merah", adabijinya: "ada", harga: "10000"}, {nama: "Pisang", warna: "kuning", adabijinya: "tidak", harga: "5000"}]
var arrayMobilFilter = mobil.filter(function(item){
    return item.nama == "strawberry";
})

console.log(arrayMobilFilter)

// Soal 6
console.log('-----Soal 6-----')

function tambahFilm(nama, durasi, genre, tahun){
    obj = {};
    obj["nama"] = nama;
    obj["durasi"] = durasi;
    obj["genre"] = genre;
    obj["tahun"] = tahun;
    return obj;
}

dataFilm = [];
dataFilm.push(tambahFilm("LOTR", "2 jam", "action", "1999"));
dataFilm.push(tambahFilm("avenger", "2 jam", "action", "2019"));
dataFilm.push(tambahFilm("spiderman", "2 jam", "action", "2004"));
dataFilm.push(tambahFilm("juon", "2 jam", "horror", "2004"));
console.log(dataFilm);
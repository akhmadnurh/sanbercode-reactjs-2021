// Soal 1
var kalimat = "LOOPING PERTAMA";
var jumlah = 1;
console.log(kalimat);
while(jumlah <= 20) {
  if (jumlah%2 == 0){
    console.log(jumlah + " - I love coding")
    jumlah++;
  }
  else{
    jumlah++;
  }
}

// Soal 2
var kalimat = "LOOPING KEDUA";
console.log(kalimat);
while(jumlah >= 1) {
  if (jumlah%2 == 0){
    console.log(jumlah + " - I will become a frontend developer")
    jumlah--;
  }
  else{
    jumlah--;
  }
}

// Nomor 3
var n = 7;
for(var i=1; i<=n; i++){
  var arr = [];
  for(var j=1; j<=i; j++){
    arr.push("#");
  }
  console.log(arr.join(""));
}

// Nomor 4
var kalimat="saya sangat senang belajar javascript"
var kalimat_split = kalimat.split(" ");
console.log(kalimat_split);

// Nomor 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
for(var buah in daftarBuah){
  console.log(daftarBuah[buah]);
}
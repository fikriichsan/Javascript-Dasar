/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - Variable scope terbagi menjadi 2, yaitu : Global Scope, dan Local Scope.
/// - Global Scope merupakan variabel yang dapat kita akses dari manapun. sedangkan Local Scope merupakan variable yang dideklarasilkan didalam blocks seperti function.
/// nomor 1 bagian 3 dapat di implementasikan seperti berikut : 
let contohScope = 'Ini contoh global' //global scope
function contohLocal(){ // function
  let contohScope1 = 'Ini contoh local' //local scope
  return contohScope1 // mengembalikan nilai 
}

console.log(contohScope) // Ini contoh global
console.log(contohLocal()) // Ini contoh local
// console.log(contohScope1) // is not defined karena bersifat local.)

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - console.log akan menampilkan Mariah. karena di fungsi printFirstName, parameter name akan di split, dan yang di kembalikan adalah array ke 0
/// - karena di console.log saat memanggil fungsi printFirstName parameter dideklarasikan dengan 'Mariah Carey'
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

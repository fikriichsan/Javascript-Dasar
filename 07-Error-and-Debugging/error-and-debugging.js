/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
//  - Type Error merupakan error yang terjadi karena penggunaan nilai diluar tipe yang diharapkan
//  - Reference Error merupakan error yang terjadi karena penggunaan referensi yang belum dideklarasikan
//  - Range Error merupakan eror yang terjadi karena penggunaan angka yang diluar rentang nilai yang ditetapkan
//  - Syntax Error terjadi merupakan error karena mencoba mengevaluasi kode dengan kesalahan sintaks



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - Undefined 
/// - ReferenceError
/// - Terjadi ReferenceError. karena javascript tidak dapat mengakses variabel yang dipanggil duluan sebelum inisialisasi, atau baris source code lebih dahulu memanggi variabel kemudian di inisialisasi.

console.log(salaryWithVar)
console.log(salaryWithConst)

const salaryWithVar = 15000000;
const salaryWithConst = 15000000;
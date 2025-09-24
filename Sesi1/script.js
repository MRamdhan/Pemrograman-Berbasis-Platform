function hitungRataRata() {
    // let matematika = 85;
    // let bahasaInggris = 90;
    // let ipa = 78;
    
  let matematika = parseFloat(document.getElementById("matematika").value);
  let bahasaInggris = parseFloat(document.getElementById("bahasaInggris").value);
  let ipa = parseFloat(document.getElementById("ipa").value);

  if (isNaN(matematika) || isNaN(bahasaInggris) || isNaN(ipa)) {
    document.getElementById("hasil").innerHTML = "Harap masukkan semua nilai!";
    return;
  }

  let nilaiRataRata = (matematika + bahasaInggris + ipa) / 3;

  let status;
  if (nilaiRataRata >= 80) {
    status = "Lulus";
  } else {
    status = "Tidak Lulus";
  }

  document.getElementById("hasil").innerHTML =
    `Nilai Rata-Rata: ${nilaiRataRata.toFixed(2)} <br> Status: ${status}`;

  console.log("Nilai Rata-Rata:", nilaiRataRata);
  console.log("Tipe Data Nilai Rata-Rata:", typeof nilaiRataRata);
  console.log("Status:", status);
  console.log("Tipe Data Status:", typeof status);

}

function konvertAngka(rupiah) {
  var	number_string = rupiah.toString(),
  	sisa 	= number_string.length % 3,
  	rupiah 	= number_string.substr(0, sisa),
  	ribuan 	= number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
  	separator = sisa ? '.' : '';
  	rupiah += separator + ribuan.join('.');
  }
 //  var hasil=rupiah
 //  var tampilid = document.getElementById('rupiah');
 // tampilid.innerHTML=hasil
  return 'Rp '+ rupiah
}
console.log(konvertAngka(28347623456));

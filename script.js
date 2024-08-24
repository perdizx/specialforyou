AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open("https://wa.me/+6285719598346 " + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'foto.jpg',
    title: 'Di hari spesial ini, kamu ingin apa?',
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'wa.png',
      title: 'Kirim jawabannya ke wa aku ya'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'Jangan dikosongin dong'
    });
    tanya();
  }
}
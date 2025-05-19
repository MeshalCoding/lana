const imagePaths = [
  { src: "assets/images/lana1.jpg", height: 300 },
  { src: "assets/images/birthphoto.jpg", height: 300 },
  { src: "assets/images/birthphoto.jpg", height: 500 },
  { src: "assets/images/birthphoto.jpg", height: 500 },
  { src: "assets/images/birthphoto.jpg", height: 500 },
  { src: "assets/images/birthphoto.jpg", height: 500 },
  { src: "assets/images/birthphoto.jpg", height: 500 },
  { src: "assets/images/birthphoto.jpg", height: 500 }
];

let index = 0;
const batchSize = 2;
const container = document.getElementById('imageContainer');

function loadImages() {
  for (let i = 0; i < batchSize && index < imagePaths.length; i++, index++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = imagePaths[index].src;
    img.height = imagePaths[index].height;
    img.alt = "صورة مميزة";

    div.appendChild(img);
    container.appendChild(div);

    // إظهار الصورة بتأثير بسيط بعد قليل من الوقت
    setTimeout(() => {
      div.classList.add('visible');
    }, 100);
  }
}

// تحميل أول دفعة
loadImages();

// تحميل عند النزول
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 150) {
    loadImages();
  }
});
function scrollToSection(sectionId, event) {
    if (event) event.preventDefault(); // Cegah default behavior
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Optional: Add active state to navbar
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

const radios = document.querySelectorAll('input[name="carousel-control"]');
const labels = document.querySelectorAll('.carousel-controls label');
let currentIndex = 0;

function updateActiveLabel() {
    // Reset semua label ke warna default
    labels.forEach(label => label.style.backgroundColor = '#ccc');

    // Highlight label yang sesuai dengan radio aktif
    labels[currentIndex].style.backgroundColor = '#007bff';
}

function autoSwipe() {
    // Uncheck radio saat ini
    radios[currentIndex].checked = false;

    // Pindah ke radio berikutnya
    currentIndex = (currentIndex + 1) % radios.length;

    // Check radio berikutnya
    radios[currentIndex].checked = true;

    // Update gaya label
    updateActiveLabel();
}

// Jalankan update pertama kali
updateActiveLabel();

// Jalankan autoSwipe setiap 5 detik
setInterval(autoSwipe, 3000);
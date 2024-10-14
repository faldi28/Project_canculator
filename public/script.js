
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Fungsi untuk menghitung hasil
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Menghitung ekspresi
    } catch (e) {
        display.value = 'Error'; // Menangani kesalahan
    }
}

// Fungsi untuk menghapus layar (C)
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fungsi untuk menghapus karakter terakhir (DEL)
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

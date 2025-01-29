document.getElementById("notificationToggle").addEventListener("click", function () {
    this.classList.toggle("active");
});

function selectOption(selectedElement) {
    // Tüm seçeneklerden 'selected' class'ını kaldır
    document.querySelectorAll('.price_option').forEach(option => {
        option.classList.remove('selected');
        option.querySelector('.radio').classList.remove('checked');
        option.querySelector('.radio').innerHTML = "";
    });

    // Seçilen seçeneğe 'selected' class'ını ekle
    selectedElement.classList.add('selected');
    const radio = selectedElement.querySelector('.radio');
    radio.classList.add('checked');
    radio.innerHTML = "✔";
}
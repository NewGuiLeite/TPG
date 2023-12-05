document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.getElementById('convertButton');

    if (convertButton) {
        convertButton.addEventListener('click', function () {
            const inputJpg = document.getElementById('inputJpg');
            const jpgFile = inputJpg.files[0];

            if (!jpgFile) {
                alert('Selecione um arquivo JPG.');
                return;
            }

            const reader = new FileReader();

            reader.onload = function (e) {
                const imgData = e.target.result;

                const pdf = new window.jspdf.jsPDF(); // Corrigir a referência para jsPDF
                pdf.addImage(imgData, 'JPEG', 10, 10, 190, 150);
                pdf.save('output.pdf');

                document.getElementById('resultMessage').innerText = 'Conversão realizada com sucesso!';
            };

            reader.readAsDataURL(jpgFile);
        });
    } else {
        console.error('Elemento convertButton não encontrado.');
    }
});

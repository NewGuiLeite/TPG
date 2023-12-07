function gerarCodigoDeBarras() {
    const tipo = document.getElementById('tipo').value;
    const tamanho = document.getElementById('tamanho').value;
    const rotacao = document.getElementById('rotacao').value;
    const fonte = document.getElementById('fonte').value;
    const altura = document.getElementById('altura').value;
    const codigo = document.getElementById('codigo').value;

    const resultadoCanvas = document.getElementById('resultadoCanvas');
    resultadoCanvas.innerHTML = '';

    JsBarcode(resultadoCanvas, codigo, {
        format: tipo,
        displayValue: true,
        fontSize: 11,
        textMargin: 0,
        width: tamanho,
        height: altura,
        margin: 10
    });
}

function imprimirESalvarPDF() {
    const resultadoCanvas = document.getElementById('resultadoCanvas');
    
    html2pdf(resultadoCanvas, {
        margin: 10,
        filename: 'codigo_de_barras.pdf',
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        html2canvas: { scale: 2 },
        output: 'blob'
    }).then(function (pdfBlob) {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(pdfBlob);
        downloadLink.download = 'codigo_de_barras.pdf';
        downloadLink.click();
    });
}

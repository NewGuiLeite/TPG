const experienciasContainer = document.getElementById('experiencias');
let experienciaCount = 1;

function adicionarExperiencia() {
    const experienciaDiv = document.createElement('div');
    experienciaDiv.innerHTML = `
        <h3 class="mt-3">Experiência ${experienciaCount}</h3>
        <label for="cargo${experienciaCount}">Cargo:</label>
        <input type="text" id="cargo${experienciaCount}" name="cargo${experienciaCount}" class="form-control" required>

        <label for="empresa${experienciaCount}">Empresa:</label>
        <input type="text" id="empresa${experienciaCount}" name="empresa${experienciaCount}" class="form-control" required>

        <label for="periodo${experienciaCount}">Período:</label>
        <input type="text" id="periodo${experienciaCount}" name="periodo${experienciaCount}" class="form-control" required>
    `;
    experienciasContainer.appendChild(experienciaDiv);
    experienciaCount++;
}

let formacaoCount = 1;

function adicionarFormacao() {
    const formacaoDiv = document.createElement('div');
    formacaoDiv.innerHTML = `
        <h3 class="mt-3">Formação ${formacaoCount}</h3>
        <div class="form-group">
            <label for="dataFormacao${formacaoCount}">Data:</label>
            <input type="date" id="dataFormacao${formacaoCount}" name="dataFormacao${formacaoCount}" class="form-control" required>
        </div>

        <div class="form-group">
            <label for="instituicao${formacaoCount}">Instituição:</label>
            <input type="text" id="instituicao${formacaoCount}" name="instituicao${formacaoCount}" class="form-control" required>
        </div>

        <div class="form-group">
            <label for="disciplinas${formacaoCount}">Disciplinas/Competências:</label>
            <textarea id="disciplinas${formacaoCount}" name="disciplinas${formacaoCount}" class="form-control" rows="4" required></textarea>
        </div>
    `;
    document.getElementById('formacoes').appendChild(formacaoDiv);
    formacaoCount++;
}

function voltarParaPrincipal() {
    window.location.href = 'index.html';
}

function gerarCurriculo() {
    const form = document.getElementById('curriculumForm');
    const pdfContainer = document.createElement('div');

    // Adicionando cabeçalho com o nome "Currículo"
    const header = document.createElement('h1');
    header.innerText = 'Currículo';
    header.style.textAlign = 'center';
    pdfContainer.appendChild(header);

    // Adicionando informações pessoais
    const informacoesPessoais = document.createElement('div');
    informacoesPessoais.innerHTML = '<h2 class="mt-4">Informações Pessoais</h2>';
    informacoesPessoais.appendChild(form.querySelector('#nome').cloneNode(true));
    informacoesPessoais.appendChild(form.querySelector('#endereco').cloneNode(true));
    informacoesPessoais.appendChild(form.querySelector('#telefone').cloneNode(true));
    informacoesPessoais.appendChild(form.querySelector('#email').cloneNode(true));
    informacoesPessoais.appendChild(form.querySelector('#nascimento').cloneNode(true));
    pdfContainer.appendChild(informacoesPessoais);

    // Adicionando experiência profissional
    const experiencias = document.createElement('div');
    experiencias.innerHTML = '<h2 class="mt-4">Experiência Profissional</h2>';
    experienciasContainer.querySelectorAll('div').forEach((div) => {
        experiencias.appendChild(div.cloneNode(true));
    });
    pdfContainer.appendChild(experiencias);

    // Adicionando formação acadêmica
    const formacoes = document.createElement('div');
    formacoes.innerHTML = '<h2 class="mt-4">Formação Acadêmica e Profissional</h2>';
    document.getElementById('formacoes').querySelectorAll('div').forEach((div) => {
        formacoes.appendChild(div.cloneNode(true));
    });
    pdfContainer.appendChild(formacoes);

    // Adicionando conhecimento em línguas e informática
    const conhecimentos = document.createElement('div');
    conhecimentos.innerHTML = '<h2 class="mt-4">Conhecimento em Línguas e Informática</h2>';
    conhecimentos.appendChild(form.querySelector('#idiomas').cloneNode(true));
    conhecimentos.appendChild(form.querySelector('#informatica').cloneNode(true));
    pdfContainer.appendChild(conhecimentos);

    // Adicionando aptidões e competências
    const aptidoes = document.createElement('div');
    aptidoes.innerHTML = '<h2 class="mt-4">Aptidões e Competências</h2>';
    aptidoes.appendChild(form.querySelector('#aptidoes').cloneNode(true));
    pdfContainer.appendChild(aptidoes);

    // Definindo estilos para o contêiner do PDF
    pdfContainer.style.width = '21cm';
    pdfContainer.style.padding = '20px';
    pdfContainer.style.backgroundColor = 'white';
    pdfContainer.style.margin = 'auto';

    // Gerando o PDF
    html2pdf(pdfContainer, {
        margin: 10,
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
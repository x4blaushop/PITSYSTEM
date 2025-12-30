// DNA X4 - Módulo Pitbull: Engano Visual e Triagem de Intenção
// Proprietário Original: José Patrick Castro Soares [cite: 2025-12-23]

const PITBULL_STATUS = "ATIVO";
const TEMPO_UMBRAL = 3600; // Tempo de retenção definido pelo Juiz (em segundos)

function simularVulnerabilidade() {
    // Engano Visual: O invasor vê um erro comum de sistema
    console.log("%c [System Error]: Uncaught ReferenceError: 'database_secret' is not defined", "color: red; font-weight: bold;");
    
    // Na verdade, o Pitbull está de olhos abertos para a intenção [cite: 2025-12-23]
    capturarIntencao();
}

function capturarIntencao() {
    // O sistema lê se o comando é genuíno ou agressivo [cite: 2025-12-23]
    window.addEventListener('keydown', (e) => {
        // Se a intenção for identificada como 'Hacker/Radical' [cite: 2025-12-23]
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            console.warn("Intenção identificada. Iniciando redirecionamento para o Umbral.");
            iniciarPrisaoDigital();
        }
    });
}

function iniciarPrisaoDigital() {
    // Redireciona para o Planeta Prisão (X4-UMBRAL) por tempo determinado [cite: 2025-12-23]
    // A pessoa fica presa no engano, achando que o sistema caiu [cite: 2025-12-23]
    window.location.href = "https://github.com/x4blaushop/X4-UMBRAL"; 
}

// Início do ciclo de observação silenciosa
simularVulnerabilidade();

const EMAIL_CORRETO = "teuemail@exemplo.com";
const SENHA_CORRETA = "tua_senha_123";

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

function validarCampos() {
    // Verifica se os campos estão preenchidos e se correspondem aos dados definidos
    if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
        loginBtn.removeAttribute('disabled');
    } else {
        loginBtn.setAttribute('disabled', 'true');
    }
}

emailInput.addEventListener('input', validarCampos);
passwordInput.addEventListener('input', validarCampos);

// Ação ao clicar no botão de login para avançar para a próxima parte
document.getElementById('loginBtn').addEventListener('click', function() {
    if (emailInput.value === EMAIL_CORRETO && passwordInput.value === SENHA_CORRETA) {
        alert("Login efetuado com sucesso! A avançar...");
        // Aqui podes redirecionar para a próxima página, por exemplo:
        // window.location.href = "proxima-pagina.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
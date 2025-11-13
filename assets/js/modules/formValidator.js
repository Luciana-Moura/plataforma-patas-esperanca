// assets/js/modules/formValidator.js

/**
 * Módulo para validação de formulários em tempo real (on submit).
 * Cumpre o requisito de verificação de consistência de dados em formulários.
 */

// Padrão Regex para CPF: 999.999.999-99
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

/**
 * Adiciona feedback visual de erro (borda vermelha e mensagem).
 * @param {HTMLElement} inputElement O campo de input com erro.
 * @param {string} message A mensagem de erro a ser exibida.
 */
function displayError(inputElement, message) {
    inputElement.classList.add('input-error');
    
    // Cria ou atualiza a mensagem de erro
    let errorDiv = inputElement.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        // Insere a mensagem após o input
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
    }
    errorDiv.textContent = message;
}

/**
 * Remove feedback visual de erro.
 * @param {HTMLElement} inputElement O campo de input.
 */
function removeError(inputElement) {
    inputElement.classList.remove('input-error');
    const errorDiv = inputElement.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.remove();
    }
}

/**
 * Valida campos específicos com regras personalizadas (CPF e E-mail).
 * @param {HTMLFormElement} form O formulário a ser validado.
 * @returns {boolean} True se a validação passar.
 */
function validateCustomRules(form) {
    let isValid = true;
    
    // 1. Validação de CPF
    const cpfInput = form.querySelector('#cpf');
    if (cpfInput && cpfInput.value && !CPF_REGEX.test(cpfInput.value)) {
        displayError(cpfInput, 'CPF inválido. Use o formato: 999.999.999-99');
        isValid = false;
    } else if (cpfInput) {
        removeError(cpfInput);
    }

    // 2. Validação de E-mail (reforça feedback visual)
    const emailInput = form.querySelector('#email');
    // Usamos 'checkValidity()' nativo para o e-mail, mas garantimos o feedback visual de erro com JS
    if (emailInput && !emailInput.checkValidity() && emailInput.value) {
        displayError(emailInput, 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else if (emailInput) {
        removeError(emailInput);
    }
    
    return isValid;
}


/**
 * Inicializa o módulo de validação, anexando o listener ao formulário.
 */
export function initializeFormValidator() {
    // Usamos querySelector('form') porque só há um formulário na página de cadastro.
    const form = document.querySelector('form'); 

    if (form) {
        form.addEventListener('submit', function(event) {
            // 1. IMPEDE O ENVIO PADRÃO DO NAVEGADOR
            event.preventDefault(); 
            event.stopPropagation(); // Garante que o evento pare de propagar

            // Verifica a validade nativa (campos required) e as regras customizadas
            const isNativeValid = form.checkValidity();
            const isCustomValid = validateCustomRules(form);
            
            // 2. RETORNO VISUAL AO USUÁRIO
            
            if (isNativeValid && isCustomValid) {
                // Se tudo estiver válido, o formulário é enviado (simulado)
                alert('✅ Cadastro Enviado com Sucesso! (Simulação)');
                form.reset(); // Limpa o formulário após envio (simulado)
                // O retorno da função permite que o formulário não navegue
            } else {
                // Se houver falhas, força o feedback visual nativo e o JS a aparecerem
                form.reportValidity(); 
            }
        });
    }
}
// assets/js/main.js

// 1. IMPORTAÇÕES: O caminho é corrigido para funcionar sem o ponto inicial (necessário em alguns navegadores no file:///)
import { initializeMenuToggle } from 'modules/menuToggle.js'; 
import { initializeFormValidator } from 'modules/formValidator.js'; 

// O código será executado imediatamente quando o módulo for carregado
// (Garantido pelo atributo 'type="module"' na tag script do HTML)

// 1. Inicializa a funcionalidade do menu hambúrguer (Manipulação do DOM)
initializeMenuToggle();

// 2. Inicializa o módulo de validação do formulário (Requisito Obrigatório)
initializeFormValidator();
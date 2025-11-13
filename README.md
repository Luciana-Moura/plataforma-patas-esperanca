# 🐾 Patas de Esperança - Website Institucional (Entrega Final v1.0.0)

## ✨ Visão Geral do Projeto

Este projeto é o website institucional da ONG "Patas de Esperança", desenvolvido com foco em **acessibilidade (WCAG 2.1 Nível AA)**, **práticas profissionais de GitFlow** e **JavaScript Modular**. O objetivo principal é facilitar a adoção de animais e o cadastro de voluntários.

---

## 💻 Tecnologias e Arquitetura

- **HTML5 Semântico:** Estrutura base com tags ARIA e WCAG.
- **CSS3:** Design responsivo com Flexbox, Grid e Variáveis CSS (Design System).
- **JavaScript Modular (ES6):** Validação de Formulário (`formValidator.js`) e Menu Mobile (`menuToggle.js`).
- **Git/GitHub:** Uso do modelo GitFlow e Commits Semânticos.

---

## ✅ Especificações Técnicas Atendidas (Entrega IV)

### 1. Controle de Versão com Git/GitHub

| Requisito | Status | Detalhes da Implementação |
| :--- | :--- | :--- |
| **Estratégia GitFlow** | ✅ Completo | Utilização das branches `main`, `develop` e `feature/entrega4-final` para separação de ambientes. |
| **Commits Semânticos** | ✅ Completo | Histórico organizado seguindo padrões como `feat:`, `fix:`, `style:`, `refactor(perf):`. |
| **Sistema de Releases** | ✅ Completo | A versão final do projeto está marcada com a tag **v1.0.0** (Versionamento Semântico). |

### 2. Acessibilidade (WCAG 2.1 Nível AA)

| Requisito | Status | Detalhes da Implementação |
| :--- | :--- | :--- |
| **Estrutura Semântica**| ✅ Completo | Uso de atributos ARIA (`role="banner"`, `role="navigation"`, etc.) e semântica nativa. |
| **Navegação por Teclado** | ✅ Completo | A pseudoclasse `:focus` está implementada para garantir visibilidade ao navegar com a tecla TAB. |
| **Alto Contraste** | ✅ Completo | Regras CSS implementadas com a classe `.high-contrast` para simular uma versão de acessibilidade. |

### 3. Otimização para Produção

| Requisito | Status | Detalhes da Implementação |
| :--- | :--- | :--- |
| **Minificação de CSS** | ✅ Completo | Simulação de minificação através do uso de **`style.min.css`** no link do HTML. |
| **Compressão de Imagens**| ✅ Completo | Todas as imagens (`assets/img`) foram otimizadas para carregamento rápido na web. |

---

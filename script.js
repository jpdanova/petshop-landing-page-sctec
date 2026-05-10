// ==========================================
// BLIPPI.PET - script.js
// Validação do formulário de contato
// ==========================================

// Função chamada ao clicar no botão de envio
function enviarFormulario() {

  // Pega os valores dos campos
  var nome     = document.getElementById("nome").value;
  var email    = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;
  var pet      = document.getElementById("pet").value;
  var servico  = document.getElementById("servico").value;

  // Limpa mensagens de erro anteriores
  document.getElementById("erro_nome").textContent     = "";
  document.getElementById("erro_email").textContent    = "";
  document.getElementById("erro_telefone").textContent = "";
  document.getElementById("erro_pet").textContent      = "";
  document.getElementById("erro_servico").textContent  = "";

  // Controla se o formulário está válido
  var valido = true;

  // Verifica se o nome foi preenchido
  if (nome === "") {
    document.getElementById("erro_nome").textContent = "Por favor, informe seu nome.";
    valido = false;
  }

  // Verifica se o e-mail foi preenchido e tem formato válido
  if (email === "") {
    document.getElementById("erro_email").textContent = "Por favor, informe seu e-mail.";
    valido = false;
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("erro_email").textContent = "Informe um e-mail válido (ex: nome@email.com).";
    valido = false;
  }

  // Verifica se o telefone foi preenchido
  if (telefone === "") {
    document.getElementById("erro_telefone").textContent = "Por favor, informe seu WhatsApp.";
    valido = false;
  }

  // Verifica se o nome do pet foi preenchido
  if (pet === "") {
    document.getElementById("erro_pet").textContent = "Por favor, informe o nome do seu pet.";
    valido = false;
  }

  // Verifica se um serviço foi selecionado
  if (servico === "") {
    document.getElementById("erro_servico").textContent = "Por favor, selecione um serviço.";
    valido = false;
  }

  // Se tudo estiver correto, mostra mensagem de sucesso
  if (valido) {
    document.getElementById("msg_sucesso").style.display = "block";
    document.getElementById("formContato").reset();
  }

}

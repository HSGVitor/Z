function verificarSenha() {
    const entrada = document.getElementById("entrada-pesquisa").value;
    const senhaCorreta = "A resposta"; // Frase correta para validação

    if (entrada === senhaCorreta) {
        window.location.href = "pagina2.html"; // Redireciona para uma nova página
    } else {
        alert("Senha incorreta");
        document.getElementById("entrada-pesquisa").value = ""; // Limpa o campo de entrada
    }
}

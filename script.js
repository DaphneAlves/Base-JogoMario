<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <!-- Configurações básicas do documento -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Título da página -->
    <title>Jogo</title>
    <!-- Ícone da página -->
    <link
      rel="shortcut icon"
      href="assets/imgs/Mario-ico.ico"
      type="image/x-icon"
    />
    <link href="https://fonts.cdnfonts.com/css/new-super-mario-font-u" rel="stylesheet">
                
    <!-- Estilos CSS para a página -->
    <link rel="stylesheet" href="estilo.css" />
    <!-- Script JavaScript assíncrono para a página -->
  </head>
  <body>
    <!-- Container principal para o jogo -->
    <div class="main">
      <div class="janela-jogo">
        <div class="tabuleiro">
          <!-- Imagem de nuvens no fundo -->
          <img src="assets/imgs/nuvens.png" class="nuvem" />
          <!-- Imagem do personagem Mario -->
          <img src="assets/imgs/mario.gif" class="mario" />
          <!-- Imagem do cano no jogo -->
          <img src="assets/imgs/cano.png" class="cano" />
        </div>
        <div class="pontuacao">Score: <span id="pontuacaoValor">0</span></div>
      </div>
    </div>

    <!-- Container para a tela de fim de jogo -->
    <div class="fim-de-jogo">
      <!-- Botão para reiniciar o jogo -->
      <div class="posicao-botao">
        <button class="reiniciar">REINICIAR</button>
      </div>
    </div>
    <script src="script.js" defer></script>
  </body>
</html>

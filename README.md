Jogo de Adivinhação de Palavras
Este é um jogo de adivinhação de palavras desenvolvido em React, onde o jogador tenta adivinhar uma palavra dentro de um número limitado de tentativas. O jogo oferece diversas categorias temáticas, como Animais e Frutas, cada uma com palavras específicas associadas.

Funcionalidades
Escolha entre diferentes categorias temáticas para jogar (Animais, Frutas, Esportes, Profissões).
Tente adivinhar uma palavra selecionando letras.
Visualize uma dica relacionada à palavra para cada tentativa.
Ganhe pontos ao adivinhar corretamente uma palavra.
Exiba um efeito de confete quando a palavra é completamente adivinhada.
Componentes Principais
App: Componente principal que gerencia o estado do jogo, incluindo categorias, palavras escolhidas, letras corretas e erradas, e pontuação.
StartGame: Tela inicial que permite iniciar o jogo ou navegar para outras seções como instruções ou seleção de temas.
Game: Componente onde o jogo acontece, exibindo a palavra a ser adivinhada, letras corretas e erradas, pontos e tentativas restantes.
End: Tela exibida quando o jogador perde todas as tentativas, mostrando a palavra correta e permitindo tentar novamente.
Win: Tela exibida quando o jogador adivinha corretamente a palavra, mostrando a pontuação e permitindo jogar novamente.
Instalação e Uso
Instalação:

Clone o repositório usando git clone.
Navegue até o diretório do projeto.
Execute npm install para instalar todas as dependências.
Executando o Jogo:

Execute npm start para iniciar o servidor de desenvolvimento.
Abra seu navegador e visite http://localhost:3000 para jogar o jogo.
Tecnologias Utilizadas
React
React Router DOM
JavaScript (ES6+)
HTML5 e CSS3 (com estilização básica usando CSS e CSS Modules)
React Confetti (para efeitos visuais de confete)
Estrutura do Projeto
src/
components/: Componentes React utilizados no jogo.
data/: Arquivos de dados, incluindo imagens e categorias de palavras.
img/: Imagens utilizadas no jogo.
App.js: Componente principal do React que controla o estado do jogo e o fluxo entre os diferentes estágios.
index.js: Arquivo de entrada do React.
Autor
Seu Nome - Jéssica

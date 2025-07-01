<h1>Desafio de projeto do Felipão: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

---

## 📄 Descrição

Este projeto simula uma corrida de Mario Kart utilizando lógica de programação em Node.js. como desafio da Digital Innovation One (DIO).
 Dois personagens são escolhidos para competir em uma pista composta por 5 rodadas, onde cada rodada pode ser uma reta, curva ou confronto, seguindo regras inspiradas no clássico jogo da Nintendo.

## ✨ Funcionalidades

- Seleção de dois personagens para a corrida, cada um com atributos únicos.
- Simulação de 5 rodadas com blocos aleatórios (reta, curva ou confronto).
- Pontuação baseada nos atributos dos personagens e sorteio de dados.
- Garantia de que nenhum jogador tenha pontuação negativa.
- Determinação automática do vencedor ao final da corrida.

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm (geralmente instalado junto com o Node.js)

## 🛠️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/RodrigoEmerson/nodeJS-projeto-mario-kart.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nodeJS-projeto-mario-kart
   ```
3. Instale as dependências (se houver):
   ```bash
   npm install
   ```

## ▶️ Como Executar

Execute o arquivo principal do projeto (por exemplo, `index.js`):

```bash
node index.js
```

Siga as instruções exibidas no terminal para selecionar os personagens e acompanhar a simulação da corrida.

## 💡 Exemplo de Uso

```
Escolha o personagem 1: Mario
Escolha o personagem 2: Bowser

Rodada 1: Curva
Mario tirou 4 no dado + Manobrabilidade (3) = 7
Bowser tirou 2 no dado + Manobrabilidade (2) = 4
Mario vence a rodada!

... (demais rodadas)

Vencedor: Mario!
```

## 📝 Observações

- O projeto é uma simulação e não possui interface gráfica.
- Os personagens e atributos podem ser facilmente modificados no código.
- Sinta-se à vontade para contribuir ou sugerir melhorias.

## 👤 Autor

- [Rodrigo](https://github.com/RodrigoEmerson/nodeJS-projeto-mario-kart.git)

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

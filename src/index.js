/*
const readline = require('readline');

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de personagens com suas características
const personagens = [
  {
    NOME: 'Mario',
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 5
  },
  {
    NOME: 'Peach',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 5
  },
  {
    NOME: 'Yoshi',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 5
  },
  {
    NOME: 'Bowser',
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 5
  },
  {
    NOME: 'Luigi',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 5
  },
  {
    NOME: 'Donkey Kong',
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 5
  }
];

// Função para mostrar a lista de personagens com suas características
function escolherJogadores() {
  console.log("Escolha dois personagens para jogar:\n");

  // Exibe a lista de personagens numerada com as características
  personagens.forEach((personagem, index) => {
    console.log(`${index + 1}: ${personagem.NOME}`);
    console.log(`  Velocidade: ${personagem.VELOCIDADE}`);
    console.log(`  MANOBRABILIDADE: ${personagem.MANOBRABILIDADE}`);
    console.log(`  PODER: ${personagem.PODER}`);
    console.log(''); // Linha em branco para separar
  });

  rl.question('\nEscolha um personagem para o Player 1 (digite o número): ', (input1) => {
    const player1Index = parseInt(input1.trim()) - 1;

    if (player1Index < 0 || player1Index >= personagens.length) {
      console.log("Opção inválida! Tente novamente.");
      return escolherJogadores();
    }

    const player1 = personagens[player1Index];
    console.log(`\nPlayer 1 escolheu: ${player1.NOME}`);
    console.log(`  Velocidade: ${player1.VELOCIDADE}`);
    console.log(`  MANOBRABILIDADE: ${player1.MANOBRABILIDADE}`);
    console.log(`  PODER: ${player1.PODER}`);

    rl.question('\nEscolha um personagem para o Player 2 (digite o número): ', (input2) => {
      const player2Index = parseInt(input2.trim()) - 1;

      if (player2Index < 0 || player2Index >= personagens.length) {
        console.log("Opção inválida! Tente novamente.");
        return escolherJogadores();
      }

      const player2 = personagens[player2Index];

      if (player1 === player2) {
        console.log("Player 1 e Player 2 não podem escolher o mesmo personagem! Tente novamente.");
        return escolherJogadores();
      }

      console.log(`\nPlayer 2 escolheu: ${player2.NOME}`);
      console.log(`  Velocidade: ${player2.VELOCIDADE}`);
      console.log(`  MANOBRABILIDADE: ${player2.MANOBRABILIDADE}`);
      console.log(`  PODER: ${player2.PODER}`);
      
      console.log(`\nEscolhas finais:`);
      console.log(`Player 1: ${player1.NOME} - Velocidade: ${player1.VELOCIDADE}, MANOBRABILIDADE: ${player1.MANOBRABILIDADE}, PODER: ${player1.PODER}`);
      console.log(`Player 2: ${player2.NOME} - Velocidade: ${player2.VELOCIDADE}, MANOBRABILIDADE: ${player2.MANOBRABILIDADE}, PODER: ${player2.PODER}`);
      
      rl.close(); // Fecha a interface após as escolhas
    });
  });
}

// Chama a função
escolherJogadores();
*/


// ==================================


const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 5,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 5,
};


async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock(){
    let random = Math.random()
    let result
    
    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA";
            break
        default:
            result = "CONFRONTO";
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++){
        console.log(`\n🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`); 
        
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character1.VELOCIDADE;
            
            await logRollResult(
                character1.NOME,
                "velocidade",
                diceResult1,
                character1.VELOCIDADE
            );
            await logRollResult(
                character2.NOME,
                "valocidade",
                diceResult2,
                character2.VELOCIDADE
            );                
        }

        if (block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character1.MANOBRABILIDADE;

            await logRollResult(
                character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE
            );
            await logRollResult(
                character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE
            );
        }

        if (block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character1.PODER;

            console.log(`${character1.NOME} confontou com ${character2.NOME}! 🥊`)

            await logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER
            );
            await logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER
            );

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(
                    `${character1.NOME} venceu o confronto ! ${character2.NOME} perdeu 1 ponto 🐢`);
                character2.PONTOS--;
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(
                    `${character2.NOME} venceu o confronto ! ${character1.NOME} perdeu 1 ponto 🐢`);
                character1.PONTOS--;
            }

            if (powerResult2 === powerResult1) {
                console.log("confronto empatado! Nenhum ponto foi perdido");

            }
              
            
        }

        if (totalTestSkill1 > totalTestSkill2){ 
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        } else ("Empatado ninguem marcou ponto ")

        console.log("______________________________________")
    }
};
    

async function declareWinner(character1, character2){
    console.log("Resultado Final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if (character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns 🏆`)
    } else if (character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns 🏆`)
    } else {
        console.log("A corrida terminou em empate ");
    }
    
}

(async function main() {
    console.log(`\n🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();


// continuar em CONDIÇÃO DUPLA ( IF COMBINADO)
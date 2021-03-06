var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose');

    //if player picks skip confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm they want to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    } 
    //remove enemyHealth by subtracting the amount set in the playerAttack variable
   enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + 'has died!');
    //award player for winning
    playerMoney = playerMoney = 20;

    //leave while() loop since enemy is dead
    break;
    } else {
      window.alert(enemyName + ' sitll has ' + enemyHealth + ' health left.');
    }
    //remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth- enemyAttack;
    console.log(
      enemyName + 'attacked ' + playerName + '.' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    //check player's health
    if (playerHealth <= 0){
      window.alert(playerName + ' has died!');
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// function to start a new game
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
  //if player is still alive, keep fighting
  if (playerHealth > 0) {
    //let player know what round they are in, remember that arrays start at 0 so it needs to have a 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    //pick new enemy to fight based in the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  //if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
//play again
startGame();
endGame();
};

//function to end the entire game
var endGame = function() {
  // if player is still alive, player wins
  if (playerHealth > 0) {
    window.alert("Good job, you've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!")
  }
};
fight();
//wrap the game logic in a startGame() function
// when the player is defeated or there are no more enemies, can an endGame function that:
  // alerts the player's total stats
  // asks the players if they want to play again
  //if yes, call startGame to restart the game
//After the player skips or defeats an enemy( and there are still no more robots to fight):
  //ask the player's if they want to shop
  // if no, continue as normal
  //if yes, call the shop() function
  //in the shop () function, ask the player if they want to refill health, upgrade attack, or leave the shop
  //if refill, subtract the money points from player and increase health
  // if upgrade, subtrack money points from player and increase attack power
  // if leave, alert goodbye and exit the function
  // if any other invalid option, call shop() again
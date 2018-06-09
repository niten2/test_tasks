# Playing Blackjack

Sample code: https://github.com/niten2/learn_thinknetica_ruby/tree/master/blackjack_game_ruby

#### Mechanics (rules of the game):

  - There is a player (user) and a dealer (managed by the program). First, we ask the user for the name after which the game begins. At the beginning of the game, the user and the dealer have 100 dollars in the bank. The user receives a random 2 cards that he sees (maps are indicated by conventional symbols, for example, "K +" - king of crosses, "K <3" - king of hearts, "K ^" - king of spades, "K <>" - King of diamonds, etc.)

  - Also, 2 random cards are issued to the "dealer" against which the user plays. The user does not see the dealer's card, instead, they are shown with asterisks.

  - Also, the user sees the number of his points. The amount is considered by the nominal of cards: from 2 to 10 - at face value, all "pictures" - by 10, ace - 1 or 11, depending on what value will be closer to 21 and that does not lead to a loss (more than 21).

  - After the hand is distributed, a bet of $ 10 from the player and the dealer is automatically made. (The player and the dealer are deducted 10 from the bank)

  - After distribution, the motion passes to the user. The user has a choice of 3 options:

  - Skip. In this case, the move goes to the dealer (see below)

  - Add a card. (only if the user has 2 cards on his hands). In this case, the player is added one more random card, the amount of points is recounted, the move goes to the dealer. Only one card can be added.

  - View the maps. The cards of the dealer and the player are opened, the player sees the sum of the dealer's points, the game results are counted (see below). The progress of the dealer. The dealer can:

  - Skip the move. The turn moves to the player. It is used if the sum of dealer points is above 18.

  - Add a card. The dealer has a new card (for the user is closed). It is used if the sum of points is less than 18. After this, the motion passes to the player. Only one card can be added.

  - Players open cards either when they reach 3 cards, or when the user selects the option "Open cards". After that, the user sees the dealer's cards and the number of his points, as well as the result of the game (who won and who lost).

#### Calculation of results:

  - The player who wins the points closer to 21 wins
  - If the player has more than 21 points, he has lost
  - The amount from the game bank goes to the winner
  - After the end of the game, ask the user if he wants to play again.
  - If so, then the game starts anew from the distribution of cards, if not, then we finish the work.

[Back](https://github.com/niten2/test_tasks)

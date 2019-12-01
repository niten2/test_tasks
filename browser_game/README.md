# Multiplayer browser game.

- At the entrance to the game site, the user must enter a name and password in a special window, or register.

- The logged on user should be able to see a list of other online players. This list should be updated "on the fly" as users enter the site or exit.

- The interface should be in English.

- The user creates a lobby for two participants and waits for another user to connect to it. When creating a lobby, its name is indicated.

- There must be a list of created lobbies. The current status of the lobby should be displayed: "set

- participants "," ready to launch the game "," there is a game ", etc. This list should also be updated "on the fly."

- Attach to the lobby by choosing a lobby from the list and confirming

- actions. As soon as two members enter the lobby, the user who created the lobby can start the game. More than two participants in the lobby cannot be.

- The game is an improved version of the game "stone-scissors paper". Rules - Stone, Scissors, Paper, Lizard, Spock - rules from The Big Bang Theory

- The game consists of a series of moves (parties). Each turn determines the winner of the game. The game is played up to three wins.

- Each player chooses one of the pieces. The opponent's move is displayed only after he made the move.

- The duration of the stroke should be customizable (for ease of testing, this setting can be laid in the lobby), but it requires a stable operation with a duration of 5 seconds. It is necessary to display the stroke timer. If one of the players does not have time to make a move, then he loses the current move.

- It is possible to use the hint once per game: this is an opportunity with 50% probability to determine how the opponent was like. If the opponent has not made a move at the time of using the tooltip, the prompt is burned.

- There must be a history of moves. Each player should also be able to see in the story when a hint was activated by him or his opponent.

- Users can leave the lobby at any time, even after starting the game. A user who leaves the lobby during the game receives an automatic defeat, and cannot enter any lobby within a minute of leaving the game.

- The interface should be convenient.

- Use Comet-technology.

- Implement using MVC-pattern.

[Back](https://github.com/niten2/test_tasks)

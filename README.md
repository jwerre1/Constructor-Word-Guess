# Movie Guess Game
Movie Guess Command-Line Game in Node, utilizing two constructor functions.

## Getting Started

After obtaining the code, run the following in the terminal:
```
npm i
```

This will install the necessary npm *inquirer* module.

## Functionality

Upon beginning, the Movie Guess Game displays a randomly chosen movie title with each letter replaced by dashes ( _ ). The game then simply asks for a single letter (upper case or lower case), and if the letter is part of the movie title, the dash is replaced with the correct letter and the player is notified that they were correct.

If the guess is incorrect, the player is notified accordingly, and is also told how many remaining incorrect guesses they are allowed.  For any given movie title, the player is allowed five incorrect guesses.

If the player is able to correctly guess the complete movie title, they are notified and a new blank word appears. The amount of allowed incorrect guesses is reset to five. 

Once all available movie titles are correctly guesses, the player is alerted that they won and the game is over. 

If the player is unable to guess the movie title, they are told that the game is over.

An example the two game plays (one losing, another winning) can be seen in the video linked below.

[![Movie Guess Game](https://i9.ytimg.com/vi/6SxSC3SbJ4A/2.jpg?sqp=CODS9eQF&rs=AOn4CLDkOFsTmwuEWHn7KR39DCbrSxDFxA)](https://youtu.be/6SxSC3SbJ4A)

## Built With

* [Inquirer](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces.


## Authors
* **Jordan Werre**
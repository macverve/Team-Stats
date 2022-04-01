const team = {
    _players: [
      {
        firstName: 'Roger',
        lastName: 'Federer',
        age: 40
      },
      {
        firstName: 'Rafael',
        lastName: 'Nadal',
        age: 36
      },
      {
        firstName: 'Stanislas',
        lastName: 'Wawrinka',
        age: 35
      }
    ],
    _games: [
      {
        opponent: 'Andy Roddick',
        teamPoints: 3,
        opponentPoints: 2
      },
      {
        opponent: 'Jack Sock',
        teamPoints: 2,
        opponentPoints: 3
      },
      {
        opponent: 'Gael Monfils',
        teamPoints: 3,
        opponentPoints: 1
      }
    ],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this.players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game);
    },
  };
  
  team.addPlayer('Dominic', 'Thiem', 26);
  team.addPlayer('Mansour', 'Bahrami', 60);
  team.addPlayer('James', 'Blake', 46);
  
  console.log(team.players);
  
  team.addGame('Alexander Zverev', 3, 0);
  team.addGame('Nick Kyrgios', 3, 1);
  team.addGame('John Isner', 3, 2);
  
  console.log();
  console.log(team.games);
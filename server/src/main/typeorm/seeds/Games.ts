import createConnection from '../../config/database';
import { games } from '../fakes/Games.json'

(async function createGames() {
  const connection = await createConnection()

  for(const game of games) {
    await connection.query(`
      INSERT INTO games (name, description, thumb, price, platforms, stores)
      VALUES (
        '${game.name}', 
        '${game.description}', 
        '${game.thumb}',
        ${game.price},
        ${game.platforms},
        ${game.stores}
      )
    `)
  }
  

  await connection.close()


}())


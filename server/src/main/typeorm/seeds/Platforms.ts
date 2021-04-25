import { Connection } from 'typeorm';
import createConnection from '../../config/database';
import { platforms } from '../fakes/Platforms.json';

export async function createPlatforms(connection: Connection) {
  for (const platform of platforms) {
    await connection.query(`
      INSERT INTO platforms (name, thumb)
      VALUES ('${platform.name}', '${platform.thumb}')
    `);
  }
}

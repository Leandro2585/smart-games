import { Connection } from 'typeorm';
import { stores } from '../fakes/Stores.json';

export async function createStores(connection: Connection) {
  for (const store of stores) {
    await connection.query(`
      INSERT INTO stores (name, latitude, longitude)
      VALUES ('${store.name}', ${store.latitude}, ${store.longitude})
    `);
  }
}

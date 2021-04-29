import createConnection from '../../config/database';
import { createPlatforms } from './Platforms';

(async function seeds() {
  const connection = await createConnection()

  await createPlatforms(connection);

  await connection.close()
}())


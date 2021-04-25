import createConnection from '../../config/database';
import { createPlatforms } from './Platforms';
import { createStores } from './Stores';

(async function seeds() {
  const connection = await createConnection()

  await createPlatforms(connection);
  
  await createStores(connection);

  await connection.close()


}())


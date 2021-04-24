import app from './config/app';
import env from './config/env';

app.listen(env.SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${env.SERVER_PORT}`);
});

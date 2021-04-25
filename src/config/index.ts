// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

import server from './server.config';
export { config as db } from './database.config'

export default server;

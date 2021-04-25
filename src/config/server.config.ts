type NodeEnv = 'development' | 'production' | 'test'

export interface ServerConfig {
  ENV: NodeEnv
  PORT: number
  MEXPOST: string
  IS_DEV: boolean
  IS_TEST: boolean
  CORS_DOMAIN: string
}

const { NODE_ENV, PORT: port, CORS_DOMAIN = 'localhost' } = process.env;

const PORT: number = Number(port) || 3991;
const ENV: NodeEnv = <NodeEnv>NODE_ENV || 'development';

const MEXPOST = `
@macarthuror
███    ███ ███████ ██   ██ ██████   ██████  ███████ ████████ 
████  ████ ██       ██ ██  ██   ██ ██    ██ ██         ██    
██ ████ ██ █████     ███   ██████  ██    ██ ███████    ██    
██  ██  ██ ██       ██ ██  ██      ██    ██      ██    ██    
██      ██ ███████ ██   ██ ██       ██████  ███████    ██    
Códigos Postales de México

---
http://localhost:${PORT}
`;

const config: ServerConfig = {
  ENV,
  PORT,
  MEXPOST,
  CORS_DOMAIN,
  IS_TEST: ENV === 'test',
  IS_DEV: ENV === 'development',
};

export default config;

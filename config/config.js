require('dotenv').config();

CONFIG = {} //Configuración Global

//Servidor
CONFIG.app          = process.env.APP   || 'development';
CONFIG.port         = process.env.PORT  || '3000';

//MongoDB
CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mongo';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '27017';
CONFIG.db_name      = process.env.DB_NAME       || 'name';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'db-password';

//JWT
CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_techu_siso';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';
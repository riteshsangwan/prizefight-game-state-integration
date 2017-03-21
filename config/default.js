/**
 * Copyright (c) 2017 Live Free and Play Hard., All rights reserved.
 */
'use strict';

/**
 * The default configuration file.
 *
 * @author      riteshsangwan
 * @version     1.0
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3500,
  db: {
    url: process.env.DB_URL || 'mysql://localhost:3306/lfph',
  },
};

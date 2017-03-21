/*
 * Copyright (C) 2017 Live Free and Play Hard., All Rights Reserved.
 */
'use strict';
/**
 * Init app
 *
 * @author      riteshsangwan
 * @version     1.0
 */

global.Promise = require('bluebird');
require('dotenv').config();
const logger = require('./common/logger');

// build all services
logger.buildService(require('./services/CommonService'));

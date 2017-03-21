/**
 * Copyright (c) 2017 Live Free and Play Hard, All rights reserved.
 */
'use strict';

/**
 * State modules API's
 *
 * @author      riteshsangwan
 * @version     1.0
 */

const joi = require('joi');
const models = require('../models');
const logger = require('../common/logger');

const State = models.State;


// Exports
module.exports = {
  reportState,
};

// the joi schema for login
reportState.schema = {
  entity: joi.any().required(),
};


/**
 * Reprot a game state
 *
 * @param {Object}    entity          the parsed request body
 */
function* reportState(entity) {
  logger.info('Reporting game state, payload', JSON.stringify(entity));
  yield State.create({
    serverNumber: 1,
    username: 'temp-user',
    ip: '45.56.54.56',
  });
}

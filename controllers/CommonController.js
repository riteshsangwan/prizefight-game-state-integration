/**
 * Copyright (c) 2017 Live Free and Play Hard, All rights reserved.
 */
'use strict';

/**
 * Exposes the API's for reporting state
 *
 * @author      riteshsangwan
 * @version     1.0
 */

const CommonService = require('../services/CommonService');

// Exports
module.exports = {
  reportState,
};

/**
 * Report a game state
 *
 * @param req the request
 * @param res the response
 */
function* reportState(req, res) {
  res.json(yield CommonService.reportState(req.body));
}

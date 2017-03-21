/**
 * Copyright (c) 2017 Live Free and Play Hard., All rights reserved.
 */
'use strict';

/**
 * Defines the API routes
 *
 * @author      riteshsangwan
 * @version     1.0
 */

module.exports = {
  '/api/v1/report-state': {
    post: {
      controller: 'CommonController',
      method: 'reportState',
    },
  },
};

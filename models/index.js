/*
 * Copyright (C) 2017 Live Free and Play Hard., All Rights Reserved.
 */

'use strict';

/**
 * Init models
 *
 * @author      riteshsangwan
 * @version     1.0
 */

const config = require('config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db.url, {});

const StateFn = require('./State');

const State = StateFn(sequelize);

module.exports = {
  State,
};

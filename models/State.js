/*
 * Copyright (C) 2017 Live Free and Play Hard., All Rights Reserved.
 */
'use strict';
/**
 * The State schema/model
 *
 * @author      TSCCODER
 * @version     1.0
 */

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const model = sequelize.define('state', {
    id: {
      type: Sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { type: Sequelize.STRING, field: 'user_name' },
    serverNumber: { type: Sequelize.STRING, field: 'server_number' },
    ip: { type: Sequelize.STRING, field: 'ip' },
    createdAt: { type: Sequelize.BIGINT, allowNull: false, field: 'created_at' },
    updatedAt: { type: Sequelize.BIGINT, allowNull: false, field: 'updated_at' },
  }, {
    timestamps: true,
    tableName: 'server_created_user',
  });
  model.modelName = 'State';
  return model;
};

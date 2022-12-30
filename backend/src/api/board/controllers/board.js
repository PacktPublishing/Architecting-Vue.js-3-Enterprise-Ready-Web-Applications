'use strict';

/**
 * board controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::board.board');

'use strict';

/**
 * board service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::board.board');

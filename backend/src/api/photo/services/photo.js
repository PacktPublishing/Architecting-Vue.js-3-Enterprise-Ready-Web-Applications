'use strict';

/**
 * photo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photo.photo');

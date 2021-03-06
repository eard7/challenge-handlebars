/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: 'integer',
      unique: true
    },
    name: {
      type: 'string'
    },
    phone: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    avatar: {
      type: 'string',
    },
  }
};


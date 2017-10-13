/**
 * Created by elmer on 12/10/17.
 */
module.exports = {
  debug(optionalValue) {
    if (optionalValue) {
      if (optionalValue === '*') {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
      } else {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
      }
    } else {
      console.log("Value is undefined");
    }
  },
  toJSON(value) {
    if (value && (value instanceof Object || value instanceof Array)) {
      return JSON.stringify(value);
    }
    return '{}';
  },
  print(value) {
    if (value) {
      return value;
    }
    return '';
  },
};

/**
 * Created by elmer on 12/10/17.
 */
var path = require('path');
var fs = require('fs');
module.exports = {
  upload(fileUpload, req) {
    return new Promise((resolve, reject) => {
      if (!fileUpload || !req) {
        reject("Debe proporcionar la clave del fichero");
      }
      var file = req.file(fileUpload);
      file.upload({
        maxBytes: req._fileparser.form.bytesExpected,
        // Si no agregamos dirname, por defecto será .tmp/uploads/
        dirname: path.resolve(sails.config.appPath, 'assets/images/uploads'),
      }, (err, uploadedFiles) => {
        if (err || uploadedFiles.length === 0) {
          resolve(null);
        } else {
          const fileParts = uploadedFiles[0].fd.split('/');
          setTimeout(() => {
            resolve(`/images/uploads/${fileParts[fileParts.length - 1]}`);
          }, 2500);
        }
      });
    });
  },
  uploadToS3(fileUpload, req) {
    return new Promise((resolve, reject) => {
      if (!fileUpload || !req) {
        reject("Debe proporcionar la clave del fichero");
      }
      var file = req.file(fileUpload);
      file.upload({
        adapter: require('skipper-s3'),
        key: sails.config.s3.key,
        secret: sails.config.s3.secret,
        bucket: sails.config.s3.bucket,
        headers: {
          'x-amz-acl': 'public-read',
        },
      }, (err, uploadedFiles) => {
        if (err || uploadedFiles.length === 0) {
          resolve(null);
        } else {
          console.log(uploadedFiles);
          setTimeout(() => {
            resolve(uploadedFiles[0].extra.Location);
          }, 500);
        }
      });
    });
  },
};

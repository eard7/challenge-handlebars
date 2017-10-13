/**
 * Created by elmer on 12/10/17.
 */
module.exports = {
  find(req, res) {
    Contact.find().then((contacts) => {
      return res.view('agenda/index', {
        contacts,
      });
    }).catch((err) => {
      return res.view('agenda/index', {
        contacts: []
      });
    });
  },
  findOne(req, res) {
    if (!req.param('id', null)) {
      return res.redirect('/agenda');
    }
    const id = req.param('id');
    Contact.findOne(id).then((contact) => {
      return res.view('agenda/detail', {
        contact
      });
    }).catch((err) => {
      return res.redirect('/agenda');
    });
  },
  add(req, res) {
    return res.view('agenda/add');
  },
  create(req, res) {
    const params = req.allParams();
    UploadService.uploadToS3('avatar', req).then((avatar) => {
      params.avatar = avatar || 'http://via.placeholder.com/150x150';
      console.log('params', params);
      return Contact.create(params);
    }).then((updatedContact) => {
      return res.redirect('/agenda');
    }).catch((err) => {
      return res.redirect('/agenda');
    });
  },
  edit(req, res) {
    if (!req.param('id', null)) {
      return res.redirect('/agenda');
    }
    const id = req.param('id');
    Contact.findOne(id).then((contact) => {
      return res.view('agenda/edit', {
        contact,
      });
    }).catch((err) => {
      return res.redirect('/agenda');
    });
  },
  update(req, res) {
    if (!req.param('id')) {
      return res.redirect('/agenda');
    }
    const params = req.allParams();
    UploadService.uploadToS3('avatar', req).then((avatar) => {
      if (avatar) {
        params.avatar = avatar;
      }
      return Contact.update({id: params.id}, params);
    }).then((updatedContact) => {
      return res.redirect('/agenda');
    }).catch((err) => {
      return res.redirect('/agenda');
    });
  },
};

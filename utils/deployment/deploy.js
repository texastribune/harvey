'use strict';

const s3 = require('./s3');

const config = require('../../project.config');
const paths = require('../../config/paths');

s3.uploadFiles(paths.appDist, {
  dest: config.folder,
  isPublicFile: true,
  shouldCache: true,
});

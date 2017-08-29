'use strict';

const path = require('path');
const s3 = require('./s3');

const config = require('../../project.config');
const paths = require('../../config/paths');

s3.uploadFiles(paths.appAssets, {
  dest: path.join(config.folder, 'raw_assets'),
});

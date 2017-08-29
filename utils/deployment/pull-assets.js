'use strict';

const path = require('path');
const s3 = require('./s3');

const config = require('../../project.config');
const paths = require('../../config/paths');

s3.downloadFiles(path.join(config.folder, 'raw_assets'), {
  dest: paths.appAssets,
});

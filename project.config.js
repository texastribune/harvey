module.exports = {
  bucket: 'moose.texastribune.org',
  folder: '',
  files: [
    {
      fileId: '1ehh3ISrwq5lHNQS-eEs_i30Wi7UAF9txWgYTo56NFBI',
      type: 'doc',
      name: 'story',
    },
    {
      fileId: '1EACmSpajC1V7nJtwIxfA9aR-HAbTSDugSjStSSKWEaE',
      type: 'sheet',
      name: 'meta',
    },
    {
      fileId: '1vQ8KcnHEfBK5ud8zwtZfaPSYbUfPstyBs5QPHMxOkLk',
      type: 'gsheet',
      name: 'votes',
      range: 'House!A2:H39',
    },
  ],
  /**
   * The dataMutators option makes it possible to modify what's returned by
   * the data fetchers. This is a good place to restructure the raw data, or
   * to do joins with other data you may have.
   */
  dataMutators: {
    // the function name should match one of the `name` values in `files`
    votes(originalData) {
      // what you return in this function is what ends up in the JSON file
      return originalData;
    },
  },
};

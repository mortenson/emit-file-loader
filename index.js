const loaderUtils = require('loader-utils');

module.exports = function loader(content, map, meta) {
  const options = loaderUtils.getOptions(this);
  if (options.output) {
    const name = loaderUtils.interpolateName(this, options.output, options);
    this.emitFile(name, content);
  }
  this.callback(null, content, map, meta);
};

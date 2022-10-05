const { command } = require('./command');

const babel = (params = '', file = 'babel.config.js') => {
  const source = './src';
  const configFile = `--config-file ./${file}`;
  const extensions = '--extensions .js,.jsx,.ts,.tsx';
  const ignore = '--ignore "**/__mocks__","**/test"';
  const outDir = '--out-dir ./build';
  const sourceMaps = '--source-maps';

  command('rm -rf build', false);
  command(`yarn babel ${source} ${configFile} ${extensions} ${ignore} ${outDir} ${sourceMaps} ${params}`);
};

module.exports = { babel };

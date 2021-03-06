const fs = require('fs-extra');

const copyFiles = async () => {
  try {
    await fs.copy('./node_modules/@pdftron/pdfjs-express/public', './www/js/lib');
    await fs.copy('./node_modules/@pdftron/pdfjs-express/webviewer.min.js', './www/js/lib/webviewer.min.js');
    console.log('WebViewer files copied over successfully');
  } catch (err) {
    console.error(err);
  }
};

copyFiles();

Package.describe({
  name: 'themeteorites:quilljs',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Quill.js version 0.19.14 for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/themeteorites/quilljs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.export('Quill', 'client');
  api.addFiles('quill/quill.js', 'client');
  api.addFiles('export.js', 'client');
  api.addFiles('quill/quill.base.css', 'client');
  api.addFiles('quill/quill.snow.css', 'client');
});

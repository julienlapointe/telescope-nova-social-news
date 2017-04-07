// NOTE:
// do not edit the core Nova packages (folders named "nova-*")
// instead, create new Meteor packages that *extend* the Nova packages

// package.js is the package manifest file that describes the contents of the package

// 
Package.describe({
  name: "my-custom-package"
});

Package.onUse( function(api) {

  api.versionsFrom("METEOR@1.0");

// declare package dependencies
// list any packages to override / extend here so that these packages load before this custom package loads
  api.use([
    'fourseven:scss',

    'nova:core',
    'nova:base-components',
    'nova:posts',
    'nova:users'
  ]);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/stylesheets/custom.scss'
  ], ['client']);

  api.addFiles([
    'lib/server/templates.js'
  ], ['server']);

  api.addAssets([
    'lib/server/emails/customNewPost.handlebars',
    'lib/server/emails/customEmail.handlebars'
  ], ['server']);

});

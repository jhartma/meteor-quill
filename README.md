Quill.js packaged for Meteor.

#Installation
    meteor add themeteorites:quilljs

#Howto Use
The package provides the ```Quill``` class to your Meteor app.

A small example how to use it in your app

```
Template.editor.rendered = ->

  basicEditor = new Quill(".basic-wrapper .editor-container",
    modules:
      toolbar:
        container: ".basic-wrapper .toolbar-container"
    styles: false
    theme: "snow"
  )
```
For more examples, visit [Quill's homepage](quilljs.com).

# Note
This package is a simple wrapper for the Quill library and does not offer concurrency.

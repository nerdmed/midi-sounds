Package.describe({
    name: 'midi-sound',
    version: '0.0.1',

    // Brief, one-line summary of the package.
    summary: 'Plays MIDI Sounds in the Browser',

    // URL to the Git repository containing the source code for this package.
    git: '',

    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.use(['reactive-var', 'flowkey:web-midi-api-shim'], 'client');

    api.addFiles([
      'lib/Base64.js',
      'lib/Base64binary.js',
      'lib/MIDIJS/MIDI.js'
    ], 'client')

    var allFiles = getFilesFromFolder('midi-sound', 'soundfont');
    api.addAssets(allFiles, 'client');

    api.addFiles('midi-sound.js', 'client');

    api.export('midiSound');
    api.export('MIDI');
});

function getFilesFromFolder(packageName, folder) {
    // local imports
    var _ = Npm.require('underscore');
    var fs = Npm.require('fs');
    var path = Npm.require('path');

    // helper function, walks recursively inside nested folders and return absolute filenames
    function walk(folder) {
        var filenames = [];

        // get relative filenames from folder
        var folderContent = fs.readdirSync(folder);

        // iterate over the folder content to handle nested folders
        _.each(folderContent, function(filename) {
            // build absolute filename
            var absoluteFilename = folder + path.sep + filename;

            // get file stats
            var stat = fs.statSync(absoluteFilename);
            if (stat.isDirectory()) {
                // directory case => add filenames fetched from recursive call
                filenames = filenames.concat(walk(absoluteFilename));
            }
            else {
                // file case => simply add it
                filenames.push(absoluteFilename);
            }
        });

        return filenames;
    }

    // save current working directory (something like '/home/user/projects/my-project')
    var cwd = process.cwd();

    // chdir to our package directory
    process.chdir('packages' + path.sep + packageName);

    // launch initial walk
    var result = walk(folder);

    // restore previous cwd
    process.chdir(cwd);
    return result;
}

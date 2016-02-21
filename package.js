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
    ], 'web.browser')

    // var allFiles = getFilesFromFolder('midi-sound', 'soundfont');
    // api.addAssets(allFiles, 'client');

    api.addAssets(
      [
        'soundfont/acoustic_grand_piano-mp3/A0.mp3',
        'soundfont/acoustic_grand_piano-mp3/A1.mp3',
        'soundfont/acoustic_grand_piano-mp3/A2.mp3',
        'soundfont/acoustic_grand_piano-mp3/A3.mp3',
        'soundfont/acoustic_grand_piano-mp3/A4.mp3',
        'soundfont/acoustic_grand_piano-mp3/A5.mp3',
        'soundfont/acoustic_grand_piano-mp3/A6.mp3',
        'soundfont/acoustic_grand_piano-mp3/A7.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab1.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab2.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab3.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab4.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab5.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab6.mp3',
        'soundfont/acoustic_grand_piano-mp3/Ab7.mp3',
        'soundfont/acoustic_grand_piano-mp3/B0.mp3',
        'soundfont/acoustic_grand_piano-mp3/B1.mp3',
        'soundfont/acoustic_grand_piano-mp3/B2.mp3',
        'soundfont/acoustic_grand_piano-mp3/B3.mp3',
        'soundfont/acoustic_grand_piano-mp3/B4.mp3',
        'soundfont/acoustic_grand_piano-mp3/B5.mp3',
        'soundfont/acoustic_grand_piano-mp3/B6.mp3',
        'soundfont/acoustic_grand_piano-mp3/B7.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb0.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb1.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb2.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb3.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb4.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb5.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb6.mp3',
        'soundfont/acoustic_grand_piano-mp3/Bb7.mp3',
        'soundfont/acoustic_grand_piano-mp3/C1.mp3',
        'soundfont/acoustic_grand_piano-mp3/C2.mp3',
        'soundfont/acoustic_grand_piano-mp3/C3.mp3',
        'soundfont/acoustic_grand_piano-mp3/C4.mp3',
        'soundfont/acoustic_grand_piano-mp3/C5.mp3',
        'soundfont/acoustic_grand_piano-mp3/C6.mp3',
        'soundfont/acoustic_grand_piano-mp3/C7.mp3',
        'soundfont/acoustic_grand_piano-mp3/C8.mp3',
        'soundfont/acoustic_grand_piano-mp3/D1.mp3',
        'soundfont/acoustic_grand_piano-mp3/D2.mp3',
        'soundfont/acoustic_grand_piano-mp3/D3.mp3',
        'soundfont/acoustic_grand_piano-mp3/D4.mp3',
        'soundfont/acoustic_grand_piano-mp3/D5.mp3',
        'soundfont/acoustic_grand_piano-mp3/D6.mp3',
        'soundfont/acoustic_grand_piano-mp3/D7.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db1.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db2.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db3.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db4.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db5.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db6.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db7.mp3',
        'soundfont/acoustic_grand_piano-mp3/Db8.mp3',
        'soundfont/acoustic_grand_piano-mp3/E1.mp3',
        'soundfont/acoustic_grand_piano-mp3/E2.mp3',
        'soundfont/acoustic_grand_piano-mp3/E3.mp3',
        'soundfont/acoustic_grand_piano-mp3/E4.mp3',
        'soundfont/acoustic_grand_piano-mp3/E5.mp3',
        'soundfont/acoustic_grand_piano-mp3/E6.mp3',
        'soundfont/acoustic_grand_piano-mp3/E7.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb1.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb2.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb3.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb4.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb5.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb6.mp3',
        'soundfont/acoustic_grand_piano-mp3/Eb7.mp3',
        'soundfont/acoustic_grand_piano-mp3/F1.mp3',
        'soundfont/acoustic_grand_piano-mp3/F2.mp3',
        'soundfont/acoustic_grand_piano-mp3/F3.mp3',
        'soundfont/acoustic_grand_piano-mp3/F4.mp3',
        'soundfont/acoustic_grand_piano-mp3/F5.mp3',
        'soundfont/acoustic_grand_piano-mp3/F6.mp3',
        'soundfont/acoustic_grand_piano-mp3/F7.mp3',
        'soundfont/acoustic_grand_piano-mp3/G1.mp3',
        'soundfont/acoustic_grand_piano-mp3/G2.mp3',
        'soundfont/acoustic_grand_piano-mp3/G3.mp3',
        'soundfont/acoustic_grand_piano-mp3/G4.mp3',
        'soundfont/acoustic_grand_piano-mp3/G5.mp3',
        'soundfont/acoustic_grand_piano-mp3/G6.mp3',
        'soundfont/acoustic_grand_piano-mp3/G7.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb1.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb2.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb3.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb4.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb5.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb6.mp3',
        'soundfont/acoustic_grand_piano-mp3/Gb7.mp3',
        'soundfont/acoustic_grand_piano-mp3.js',
        'soundfont/acoustic_grand_piano-ogg.js'
        ], 'web.browser');

    api.addFiles('midi-sound.js', 'web.browser');

    api.export('midiSound');
    api.export('MIDI');
});

// function getFilesFromFolder(packageName, folder) {
//     // local imports
//     var _ = Npm.require('underscore');
//     var fs = Npm.require('fs');
//     var path = Npm.require('path');

//     // helper function, walks recursively inside nested folders and return absolute filenames
//     function walk(folder) {
//         var filenames = [];

//         // get relative filenames from folder
//         var folderContent = fs.readdirSync(folder);

//         // iterate over the folder content to handle nested folders
//         _.each(folderContent, function(filename) {
//             // build absolute filename
//             var absoluteFilename = folder + path.sep + filename;

//             // get file stats
//             var stat = fs.statSync(absoluteFilename);
//             if (stat.isDirectory()) {
//                 // directory case => add filenames fetched from recursive call
//                 filenames = filenames.concat(walk(absoluteFilename));
//             }
//             else {
//                 // file case => simply add it
//                 filenames.push(absoluteFilename);
//             }
//         });

//         return filenames;
//     }

//     // save current working directory (something like '/home/user/projects/my-project')
//     var cwd = process.cwd();

//     // chdir to our package directory
//     process.chdir('packages' + path.sep + packageName);

//     // launch initial walk
//     var result = walk(folder);

//     // restore previous cwd
//     process.chdir(cwd);
//     return result;
// }

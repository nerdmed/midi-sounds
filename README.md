#Midi Sound


Play some MIDI Sounds in the browser. Right now only a Piano is supported.
Web Browser Support Only!

##midiSound

The package exports midiSound with the following functions

###load()

Load needed soundfont for the piano

###play(key, velocity=100, noteOn=true);

Call the play function whenever you want to hear the sound for a key.
Call it explicitly with noteOn = false on your noteOff events.

###unload()

Not implemented right now. Once loaded its in memory.


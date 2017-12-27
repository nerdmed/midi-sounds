# Midi Sound


Play some MIDI Sounds in the browser. Right now only a Piano is supported.
Web Browser Support Only!

## midiSound

The package exports midiSound with the following functions

### load()

Load needed soundfont for the piano

### noteOn(key, velocity, channel = 0);
Call to start playing a note. Sets main volume with velocity.

### noteOff(key, velocity, channel = 0);
Call to stop a currently playing note. Sets main volume with velocity.

### setSustain(sustain, channel = 0);

Midi Sound handles sustain > 0 as pedal on and sustain sustain == 0 as pedal off

### unload()

Not implemented right now. Once loaded its in memory.


MidiSound = class MidiSound{

    constructor() {
        this.loaded = new ReactiveVar(false);
        this.currentlySustaining = false;
        this.sustainedKeys = [];
    }

    load(onSuccess) {
        if (this.loaded.curValue) return Promise.resolve();

        return new Promise((resolve, reject) => {
            MIDI.loadPlugin({
                soundfontUrl: '/packages/flowkey_midi-sound/soundfont/',
                instrument: 'acoustic_grand_piano',
                onsuccess: () => {
                    // check for AudioBuffers seems to be the best insurance right now
                    if (_.keys(MIDI.audioBuffers).length > 0) {
                        this.loaded.set(true);
                        resolve();
                    } else {
                        let error = new Meteor.Error('midi sound failed to load', '[MIDI Sound] Failed to load the MIDI Sound');
                        reject(error);
                    }
                }
            });
        })

    }

    unload() {
        console.warn('[Midi Sound] Not supported, cause MIDI Js has no load unloading');

        // cant unload by removing references cause MIDI js uses endless clojures that
        // keet the audiobuffers in memory - maybe ok for the browser but nur for mobile
        // MIDI.AudioTag.audioBuffers = null;
        // MIDI.audioBuffers = null;
        // MIDI.Soundfont = {};
        // MIDI.WebAudio.audioBuffers = {};
    }

    noteOn(key, velocity, channel = 0) {
        MIDI.setVolume(channel, velocity, 0);
        MIDI.noteOn(channel, key, velocity, 0);
        if ((this.currentlySustaining === true) && (this.sustainedKeys.indexOf(key) < 0)) {
            this.sustainedKeys.push(key);
        }
    }

    noteOff(key, velocity, channel = 0) {
        if (this.currentlySustaining) return;
        MIDI.setVolume(channel, velocity, 0);
        MIDI.noteOff(channel, key, 0);
    }

    setSustain(sustain, channel = 0) {
        if (sustain != null) this.currentlySustaining = sustain > 0;

        // when sustain is switched off, send noteOff to sustained keys
        if (sustain === 0) {
            for (let key of this.sustainedKeys) {
                MIDI.noteOff(channel, key, 0);
            }
            this.sustainedKeys = [];
        }
    }
}

midiSound = new MidiSound();

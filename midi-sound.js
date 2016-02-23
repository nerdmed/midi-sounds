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
                soundfontUrl: '/packages/midi-sound/soundfont/',
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

    // var note = 50; // the MIDI note
    // var velocity = 127; // how hard the note hits
    // noteOn - /or noteOff Boolean
    play(key, velocity = 100, noteOn) {
        if (!this.loaded.curValue) return console.error('[MIDI Sound] You are trying to play without loading the MIDI Sound');

        MIDI.setVolume(0, velocity);

        if (noteOn) {
            MIDI.noteOn(0, key, velocity, 0);
            if ((this.currentlySustaining === true) && (this.sustainedKeys.indexOf(key) < 0)) {
                this.sustainedKeys.push(key);
            }
        } else if (!this.currentlySustaining) {
            MIDI.noteOff(0, key, 0);
        }
    }

    updateSustain(sustain) {
        if (sustain != null) this.currentlySustaining = sustain > 0;

        // when sustain is switched off, send noteOff to sustained keys
        if (sustain === 0) {
            for (let key of this.sustainedKeys) {
                MIDI.noteOff(0, key, 0);
            }
            this.sustainedKeys = [];
        }
    }
}

midiSound = new MidiSound();

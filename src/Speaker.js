const FREQ = 440;

class Speaker {
    constructor() {
        this.audioCtx = new window.AudioContext();
        this.audioCtx.resume();

        window.addEventListener('click', () => {
            this.audioCtx.resume();
        });
    }

    play() {
        if (this.audioCtx && !this.oscillator) {
            this.oscillator = this.audioCtx.createOscillator();
            this.oscillator.frequency.setValueAtTime(FREQ, this.audioCtx.currentTime);
            this.oscillator.type = 'square';
            this.oscillator.connect(this.audioCtx.destination);
            this.oscillator.start();
        }
    }

    stop() {
        if(this.oscillator) {
            this.oscillator.stop();
            this.oscillator.disconnect();
            this.oscillator = null;
        }
    }
}

export default Speaker;
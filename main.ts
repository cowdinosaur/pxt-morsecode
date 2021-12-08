namespace morseCode {
    export enum MorseSignal {
        //% block="•"
        Dot,
        //% block="━"
        Dash,
    }

    const _characters = {
        A: [MorseSignal.Dot, MorseSignal.Dash],
        B: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot],
        C: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot],
        D: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot],
        E: [MorseSignal.Dot],
        F: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot],
        G: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot],
        H: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot],
        I: [MorseSignal.Dot, MorseSignal.Dot],
        J: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dash],
        K: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash],
        L: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot],
        M: [MorseSignal.Dash, MorseSignal.Dash],
        N: [MorseSignal.Dash, MorseSignal.Dot],
        O: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dash],
        P: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot],
        Q: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash],
        R: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot],
        S: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot],
        T: [MorseSignal.Dash],
        U: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash],
        V: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash],
        W: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash],
        X: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash],
        Y: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash],
        Z: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot],
    };

    //% fixedInstance
    export let A: MorseSignal[] = _characters.A;
    //% fixedInstance
    export let B: MorseSignal[] = _characters.B;
    //% fixedInstance
    export let C: MorseSignal[] = _characters.C;
    //% fixedInstance
    export let D: MorseSignal[] = _characters.D;
    //% fixedInstance
    export let E: MorseSignal[] = _characters.E;
    //% fixedInstance
    export let F: MorseSignal[] = _characters.F;
    //% fixedInstance
    export let G: MorseSignal[] = _characters.G;
    //% fixedInstance
    export let H: MorseSignal[] = _characters.H;
    //% fixedInstance
    export let I: MorseSignal[] = _characters.I;
    //% fixedInstance
    export let J: MorseSignal[] = _characters.J;
    //% fixedInstance
    export let K: MorseSignal[] = _characters.K;
    //% fixedInstance
    export let L: MorseSignal[] = _characters.L;
    //% fixedInstance
    export let M: MorseSignal[] = _characters.M;

    /**
      * Represents a Morse signal block
      */
    //% color=190 block="%char"
    export function _morseCharacter(character: MorseSignal[]): MorseSignal[] {
        return character;
    }


    /**
     * Represents a Morse signal block
     */
    //% color=190 block="%signal"
    export function _signal(signal: MorseSignal): MorseSignal {
        return signal;
    }

    /**
     * Convert a string to 
     */
    //% color=190 block="convert %s to Morse chars"
    //% blockSetVariable="Morse char list"
    export function stringToMorseArray(s: string): MorseSignal[][] {
        let word: MorseSignal[][] = [];
        
         const chars = s.split('');
         chars.forEach(function(c,i) {
            basic.showString(c)
             switch(c) {
                 case 'A':
                 case 'a':
                     word.push(A);
                     break;
                 case 'B':
                 case 'b': 
                     word.push(B);
                     break;
             }
           });
           
        return word;
    }
}

enum MorseCharacter {
    //% block="A"
    A,
    //% block="B"
    B,
    //% block="C"
    C,
    //% block="D"
    D,
    //% block="E"
    E,
    //% block="F"
    F,
    //% block="G"
    G
}

enum MorseSignal {
    //% block="•"
    Dot,
    //% block="━"
    Dash,
}

namespace morseCode {
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

    /**
     * Check if signal is a dash or a dot
     */
    //% color=190 block="is %s | a %compareto | ?"
    export function isDashOrDot(s: any, compareto: MorseSignal ) : boolean {
        return true
    }
    /**
     * Get a Morse character
     */
    //% blockId="MorseCharacterGetBlock" color=190 block="Morse %mchar"
    export function _get(mchar: MorseCharacter): MorseSignal[] {
        // TODO
        return _characters.A;
    }


    /**
     * Represents a Morse signal block
     */
    //% color=190 block="%signal"
    export function _signal(signal: MorseSignal): MorseSignal {
        return signal;
    }

    /**
     * Create a Morse word from an array of Morse Characters
     */
    //% color=190 block="Morse word from %mchars"
    //% mchars.shadow="lists_create_with"
    //% mchars.defl="MorseCharacterGetBlock"
    //% blockSetVariable="Morse char list"
    export function createWordFromArrayOfChars(mchars: MorseSignal[][]): MorseSignal[][] {
        let word: MorseSignal[][] = mchars
        return word;
    }

    /**
     * Convert a string to an array of Morse Characters
     */
    //% color=190 block="convert %s to list of Morse characters"
    //% blockSetVariable="Morse char list"
    export function stringToMorseArray(s: string): MorseSignal[][] {
        let word: MorseSignal[][] = [];

        const chars = s.split('');
        chars.forEach(function (c, i) {
            switch (c) {
                case 'A':
                case 'a':
                    word.push(_characters.A);
                    break;
                case 'B':
                case 'b':
                    word.push(_characters.B);
                    break;
                case 'C':
                case 'c':
                    word.push(_characters.C);
                    break;
                case 'D':
                case 'd':
                    word.push(_characters.D);
                    break;
                case 'E':
                case 'e':
                    word.push(_characters.E);
                    break;
                case 'F':
                case 'f':
                    word.push(_characters.F);
                    break;
                case 'G':
                case 'g':
                    word.push(_characters.G);
                    break;
                case 'H':
                case 'h':
                    word.push(_characters.H);
                    break;
                case 'I':
                case 'i':
                    word.push(_characters.I);
                    break;
                case 'J':
                case 'j':
                    word.push(_characters.J);
                    break;
                case 'K':
                case 'k':
                    word.push(_characters.K);
                    break;
                case 'L':
                case 'l':
                    word.push(_characters.L);
                    break;
                case 'M':
                case 'm':
                    word.push(_characters.M);
                    break;
                case 'N':
                case 'n':
                    word.push(_characters.N);
                    break;
                case 'O':
                case 'o':
                    word.push(_characters.O);
                    break;
                case 'P':
                case 'p':
                    word.push(_characters.P);
                    break;
                case 'Q':
                case 'q':
                    word.push(_characters.Q);
                    break;
                case 'R':
                case 'r':
                    word.push(_characters.R);
                    break;
                case 'S':
                case 's':
                    word.push(_characters.S);
                    break;
                case 'T':
                case 't':
                    word.push(_characters.T);
                    break;
                case 'U':
                case 'u':
                    word.push(_characters.U);
                    break;
                case 'V':
                case 'v':
                    word.push(_characters.V);
                    break;
                case 'W':
                case 'w':
                    word.push(_characters.W);
                    break;
                case 'X':
                case 'x':
                    word.push(_characters.X);
                    break;
                case 'Y':
                case 'y':
                    word.push(_characters.Y);
                    break;
                case 'Z':
                case 'z':
                    word.push(_characters.Z);
                    break;
            }
        });

        return word;
    }

    /**
     * Convert a string to an array of Morse Characters
     */
    //% color=190 block="convert %s to list of Morse signals"
    //% s.shadow="MorseCharacterGetBlock"
    //% blockSetVariable="Morse signal list"
    export function MorseCharToMorseSignalArray(s: MorseSignal[]): MorseSignal[] {
        return _characters.Z
    }


}
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
    //% fixedInstance
    export let N: MorseSignal[] = _characters.N;
    //% fixedInstance
    export let O: MorseSignal[] = _characters.O;
    //% fixedInstance
    export let P: MorseSignal[] = _characters.P;
    //% fixedInstance
    export let Q: MorseSignal[] = _characters.Q;
    //% fixedInstance
    export let R: MorseSignal[] = _characters.R;
    //% fixedInstance
    export let S: MorseSignal[] = _characters.S;
    //% fixedInstance
    export let T: MorseSignal[] = _characters.T;
    //% fixedInstance
    export let U: MorseSignal[] = _characters.U;
    //% fixedInstance
    export let V: MorseSignal[] = _characters.V;
    //% fixedInstance
    export let W: MorseSignal[] = _characters.W;
    //% fixedInstance
    export let X: MorseSignal[] = _characters.X;
    //% fixedInstance
    export let Y: MorseSignal[] = _characters.Y;
    //% fixedInstance
    export let Z: MorseSignal[] = _characters.Z;


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
            switch(c) {
                case 'A':
                case 'a':
                    word.push(A);
                    break;
                case 'B':
                case 'b': 
                    word.push(B);
                    break;
                case 'C':
                case 'c':
                    word.push(C);
                    break;
                case 'D':
                case 'd':
                    word.push(D);
                    break;
                case 'E':
                case 'e':
                    word.push(E);
                    break;
                case 'F':
                case 'f':
                    word.push(F);
                    break;
                case 'G':
                case 'g':
                    word.push(G);
                    break;
                case 'H':
                case 'h':
                    word.push(H);
                    break;
                case 'I':
                case 'i':
                    word.push(I);
                    break;
                case 'J':
                case 'j':
                    word.push(J);
                    break;
                case 'K':
                case 'k':
                    word.push(K);
                    break;
                case 'L':
                case 'l':
                    word.push(L);
                    break;
                case 'M':
                case 'm':
                    word.push(M);
                    break;
                case 'N':
                case 'n':
                    word.push(N);
                    break;
                case 'O':
                case 'o':
                    word.push(O);
                    break;
                case 'P':
                case 'p':
                    word.push(P);
                    break;
                case 'Q':
                case 'q':
                    word.push(Q);
                    break;
                case 'R':
                case 'r':
                    word.push(R);
                    break;
                case 'S':
                case 's':
                    word.push(S);
                    break;
                case 'T':
                case 't':
                    word.push(T);
                    break;
                case 'U':
                case 'u':
                    word.push(U);
                    break;
                case 'V':
                case 'v':
                    word.push(V);
                    break;
                case 'W':
                case 'w':
                    word.push(W);
                    break;
                case 'X':
                case 'x':
                    word.push(X);
                    break;
                case 'Y':
                case 'y':
                    word.push(Y);
                    break;
                case 'Z':
                case 'z':
                    word.push(Z);
                    break;
            }
        });
           
        return word;
    }
}

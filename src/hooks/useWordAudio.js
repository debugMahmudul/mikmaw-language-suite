/**
 * useWordAudio.js
 *
 * Purpose:
 *   A reusable React hook that plays one Mi'kmaw word's Audio Recording.
 *   - Plays the word once as soon as it is given (requirement [GI-AUD-01]).
 *   - Returns a replay function so the child can hear the word again.
 *   - Uses ONE Audio object per word, so fast repeated taps restart the word
 *     instead of stacking many sounds on top of each other.
 *   - Stops the sound when the word changes or the screen goes away.
 *
 *   It can also be used later for hint words and the island dictionary.
 *
 * Author: Mahmudul Hasan Hamim (A00466507)
 */

import { useCallback, useEffect, useRef } from "react";

/**
 * @param {string|null} src - URL of the audio file to play; null means "no sound"
 * @param {object} [options]
 * @param {boolean} [options.autoPlay=true] - play once automatically when src is given
 * @returns {function} replay - call it (e.g. from a button) to play the word again from the start
 */
export function useWordAudio(src, { autoPlay = true } = {}) {
    // Holds the Audio object for the current word between renders,
    // so replay() restarts the same sound instead of making a new one.
    const audioRef = useRef(null);

    useEffect(() => {
        if (!src) {
            return undefined;
        }

        const audio = new Audio(src);
        audio.preload = "auto"; // start loading right away so playback begins quickly ([GI-AUD-02])
        audioRef.current = audio;

        if (autoPlay) {
            // Browsers can block sound that starts without a tap. If that
            // happens we ignore the error: the replay button still works.
            audio.play().catch(() => {});
        }

        // Clean-up: stop the sound when the word changes or the component closes.
        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, [src, autoPlay]);

    const replay = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        audio.currentTime = 0; // restart from the beginning instead of overlapping
        audio.play().catch((error) => console.warn("Word audio could not play:", error));
    }, []);

    return replay;
}


/**
 * wordAudio.js
 *
 * Purpose:
 *   Links each Mi'kmaw animal word in the Goat Island game to its Audio Recording.
 *   The game looks up a question's Word here to find the sound to play
 *   (requirement [GI-AUD-01]).
 *
 *   The audio is kept in this separate file instead of inside questions.js so
 *   that the word data and the sound files can be changed independently.
 *
 *   NOTE - PLACEHOLDERS: the files in ./audio/placeholder are computer-voice
 *   stand-ins made with Windows text-to-speech. They do NOT pronounce the words
 *   correctly. Replace each one with a real recording of a Mi'kmaw speaker
 *   (saved as an MP3 in ./audio, for example ./audio/deer.mp3) and update the
 *   import below. Do not release the app with the placeholders.
 *
 * Author(s): Mahmudul Hasan Hamim
 */

import Deer from "./audio/placeholder/deer.wav";
import Fox from "./audio/placeholder/fox.wav";
import Bunny from "./audio/placeholder/bunny.wav";
import Bear from "./audio/placeholder/bear.wav";
import Beaver from "./audio/placeholder/beaver.wav";
import Moose from "./audio/placeholder/moose.wav";
import Porcupine from "./audio/placeholder/porcupine.wav";
import Raccoon from "./audio/placeholder/raccoon.wav";
import Eagle from "./audio/placeholder/eagle.wav";

// Global constant: the Audio Recording for each Mi'kmaw animal word.
// The key must match the question's "Word" in questions.js exactly
// (including apostrophes), or no sound will play for that question.
// "kitpu" (eagle) was added as the Eskasoni teachers asked on Oct 27.
// Its placeholder says "git boo", the rough pronunciation.
export const WORD_AUDIO = {
    "lentuk": Deer,
    "wowkwis": Fox,
    "ali'kmuj": Bunny,
    "muin": Bear,
    "kopit": Beaver,
    "tia'm": Moose,
    "matues": Porcupine,
    "amaljikwej": Raccoon,
    "kitpu": Eagle,
};

/**
 * Finds the Audio Recording for a Mi'kmaw word.
 *
 * @param {string} word - the Mi'kmaw word shown in the question, e.g. "lentuk"
 * @returns {string|null} the audio file's URL, or null if the word has no recording
 */
export function getWordAudio(word) {
    return WORD_AUDIO[word] ?? null;
}

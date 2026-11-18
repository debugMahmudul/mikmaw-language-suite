/**
 * wordAudio.js
 *
 * Purpose:
 *   Links each Mi'kmaw animal word and hint word in the Goat Island game to
 *   its Audio Recording, and holds the right / wrong answer sound effects.
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
 * Author(s): Mahmudul Hasan Hamim (A00466507)
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

import HintFast from "./audio/placeholder/hint-fast.wav";
import HintRed from "./audio/placeholder/hint-red.wav";
import HintHop from "./audio/placeholder/hint-hop.wav";
import HintBig from "./audio/placeholder/hint-big.wav";
import HintWood from "./audio/placeholder/hint-wood.wav";
import HintAntler from "./audio/placeholder/hint-antler.wav";
import HintSharp from "./audio/placeholder/hint-sharp.wav";
import HintSneak from "./audio/placeholder/hint-sneak.wav";
import HintFlies from "./audio/placeholder/hint-flies.wav";

import CorrectAnswerSound from "../components/audio/congratulatory.mp3";
import TryAgainSound from "../components/audio/tryagain.mp3";

// Global constant: the Audio Recording for each Mi'kmaw animal word.
// The key must match the question's "Word" in questions.js exactly
// (including apostrophes), or no sound will play for that question.
// "kitpu" (eagle) was added as the Eskasoni teachers asked on Oct 27.
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

// Global constant: the Audio Recording for each Mi'kmaw hint word
// (MVP: "each question word and hint word plays a recording").
// The key must match the question's "Hint" in questions.js exactly.
// These are placeholders too - same rules as WORD_AUDIO above.
export const HINT_AUDIO = {
    "sune'wit": HintFast,
    "megwe'g": HintRed,
    "wenaqja't": HintHop,
    "mesgilg": HintBig,
    "gmu'j": HintWood,
    "ugsmu'l": HintAntler,
    "gi'g": HintSharp,
    "gimiet": HintSneak,
    "alaqsing": HintFlies,
};

/**
 * Finds the Audio Recording for a Mi'kmaw hint word.
 *
 * @param {string} hint - the hint word shown on the hint screen, e.g. "sune'wit"
 * @returns {string|null} the audio file's URL, or null if the hint has no recording
 */
export function getHintAudio(hint) {
    return HINT_AUDIO[hint] ?? null;
}

// Global constants: the sound effects for the answer screens.
// These are REAL recordings of a Mi'kmaw speaker, shared with the Pictionary
// game (not placeholders). Checked Nov 18: they say the client's phrases.
//   CORRECT_ANSWER_SOUND = "kelu'k tela'tekn" (well done)  - Correct! screen
//   TRY_AGAIN_SOUND      = "ktnu'kwalsi ap"   (try again)  - Incorrect screen
export const CORRECT_ANSWER_SOUND = CorrectAnswerSound;
export const TRY_AGAIN_SOUND = TryAgainSound;


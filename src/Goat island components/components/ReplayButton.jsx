/**
 * ReplayButton.jsx
 *
 * Purpose:
 *   A large speaker button the child taps to hear the Mi'kmaw word again.
 *   It uses the same "Play Audio" picture as the Pictionary game, so the
 *   two games look the same. It is big enough for small fingers on a tablet.
 *
 * Author(s): Mahmudul Hasan Hamim
 */

import PlayAudioImg from "../../components/images/PlayAudio.png";

/**
 * @param {function} onReplay - called when the child taps the button
 * @param {string} word - the Mi'kmaw word, used to describe the button for screen readers
 */
export const ReplayButton = ({ onReplay, word }) => {
    return (
        <button
            type="button"
            onClick={onReplay}
            aria-label={`Hear ${word} again`}
            data-cy="replay-word"
            className={'ml-4 transition duration-150 hover:scale-110 active:scale-95'}
        >
            <img src={PlayAudioImg} alt="" className={'size-14'} />
        </button>
    );
};

/**
 * HintsComponent.js
 *
 * Purpose:
 *   Displays the hint modal when a player answers incorrectly and chooses the "Get Hint" option.
 *   This component provides the Mi'kmaq hint word and plays its Audio Recording.
 *   Tapping the hint word plays it again and shows / hides the English translation
 *   (a tap works on tablets, where hover does not).
 *   It visually reinforces learning while helping young players progress through the game.
 *
 * Author(s): Kimone Barrett A00454699, Mark Louis Tabudlong A00468931,
 *            Mahmudul Hasan Hamim A00466507 (hint audio, tap instead of hover)
 */

import { useState } from "react";
import { useWordAudio } from "../../hooks/useWordAudio";
import { getHintAudio } from "../wordAudio";
import BirchPaper from '../Islandgame-images/BirchPaper.png';
import ChatBubble from '../Islandgame-images/ChatBubble.png';
import Girl from '../Islandgame-images/girl.png';
import IslandBackground from '../Islandgame-images/StartScreenBackground.png';

const HintsComponent = ({close, question, numHints, content, language = "english"}) =>{
    const [showTranslation, setShowTranslation] = useState(false);

    // Plays the hint word once when the hint screen opens; playHint() replays it.
    const playHint = useWordAudio(getHintAudio(question.Hint));

    // One tap: hear the hint word again and show the English.
    // Next tap: hear it again and hide the English.
    const handleHintTap = () => {
        playHint();
        setShowTranslation((shown) => !shown);
    }

    return (
        <div className={'absolute inset-0 flex w-full h-screen justify-center items-center'}>
            <div className={'inset-0 absolute z-0 w-full h-screen bg-center bg-no-repeat bg-cover'}
                 style={{backgroundImage: `url(${IslandBackground})`}}></div>

            {/* pointer-events-none: the girl and her speech bubble are only decoration.
                On narrow (portrait tablet) screens the bubble sits on top of the hint word,
                so without this it would catch the tap and the hint word would not respond. */}
            <div className="pointer-events-none">
                <img src={Girl} alt="Girl" className="size-96 -left-10 absolute animate-bounce" />
                <img
                    src={ChatBubble}
                    alt="ChatBubble"
                    className="absolute h-36 w-80 left-48 top-96 z-20"/>
                <p className="absolute left-48 top-96 h-36 w-72 flex items-center justify-center z-30 font-bold text-center">
                    {content.tapTranslation}
                </p>
            </div>

            <div className={'flex flex-col w-96 h-64 items-center justify-center text-center relative bg-center bg-cover bg-no-repeat scale-[3]'}
                 style={{backgroundImage: `url(${BirchPaper})`}}>
            </div>
            <div className={'z-20 absolute inset-0 flex flex-col w-96 h-96 justify-between items-center mx-auto my-auto p-12'}>
                <div className={'w-full flex flex-col justify-center'}>
                    <h1 className={'text-amber-950 text-center text-3xl font-bold font-comic'}>{content.yourHint}</h1>
                    <p className={'text-amber-950 text-center text-xl italic font-bold font-comic'}>{content.yourHintEnglish}</p>
                </div>
                {/*DISPLAY HINTS*/}
                <div className={'flex flex-col items-center flex-grow justify-center -mt-1'}>
                    <p className={'text-sm italic text-amber-800'}>{content.tapEnglish}</p>
                    <button type="button" onClick={handleHintTap} data-cy="hint-word"
                            aria-pressed={showTranslation}
                            className={'flex flex-col items-center bg-transparent border-0 p-0'}>
                        <span className={'text-6xl text-amber-950 font-extrabold cursor-pointer mt-2'}>{question.Hint}</span>
                        {/* Client rule: the English must stay SMALLER than the Mi'kmaw word (text-lg vs text-6xl). */}
                        {showTranslation && (
                            <span data-cy="hint-translation" className={'text-lg text-center text-amber-950 mt-3 italic'}>
                                {question.HintTranslation}
                            </span>
                        )}
                    </button>
                    <div className={'flex flex-col items-center w-full mt-2'}>
                        <p className={'text-lg text-amber-950 mb-4'}>
                            {content.hintsRemaining.replace('{numHints}', numHints)}
                        </p>
                        <button className={'px-8 py-3 bg-amber-200 border-4 text-xl font-bold border-amber-500 rounded-full transition duration-150 hover:bg-amber-100 shadow-2xl hover:scale-105'}
                                onClick={close}>{content.gotIt}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HintsComponent;
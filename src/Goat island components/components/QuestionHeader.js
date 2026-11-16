/**
 * QuestionHeader.js
 *
 * Purpose:
 *   This component displays the header text at the top of the game screen.
 *   It shows either the Mi'kmaq word for the current question or a prompt
 *   instructing the player to click a landmark to begin.
 *   When a question is shown, it also plays the word's Audio Recording once
 *   and shows a replay button so the child can hear it again.
 *
 * Author: Kimone Barrett A00454699
 * 
 * Audio and replay button added by: Mahmudul Hasan Hamim (A00466507)
 */

import { useWordAudio } from "../../hooks/useWordAudio";
import { getWordAudio } from "../wordAudio";
import { ReplayButton } from "./ReplayButton";

export const QuestionHeader = ({currentQuestion, content}) =>{
    // The sound for the word on screen; null when no question is showing,
    // which tells the hook to stay silent.
    const wordAudio = currentQuestion ? getWordAudio(currentQuestion.Word) : null;
    const replayWord = useWordAudio(wordAudio);

    return (
        <div className={'absolute top-0 text-3xl font-bold items-center'}>
            {currentQuestion
                ? (
                    <div className={'flex flex-row items-center'}>
                        <h2 data-cy="question-word">{content.question}: {currentQuestion.Word}</h2>
                        {wordAudio && (
                            <ReplayButton onReplay={replayWord} word={currentQuestion.Word} />
                        )}
                    </div>
                )
                : content.clickLandmark
            }
        </div>
    )
}

import * as FlashCardUtils from "src/Components/Quizzes/Utils";
import { Quiz } from "../../Quiz";
import { createTextMultipleChoiceQuiz } from "../Quiz";
import { FlashCard } from "../../FlashCard";
import { FlashCardGroup } from 'src/FlashCardGroup';

export function createFlashCardGroup(): FlashCardGroup {
  const flashCards = createFlashCards();
  const flashCardGroup = new FlashCardGroup("Scale Notes", flashCards);
  //flashCardGroup.renderAnswerSelect = FlashCardUtils.renderDistinctFlashCardSideAnswerSelect;

  return flashCardGroup;
}

export function createFlashCards(): FlashCard[] {
  return [
    new FlashCard("Ionian (Major)", "1 2 3 4 5 6 7"),
    new FlashCard("Dorian", "1 2 b3 4 5 6 b7"),
    new FlashCard("Phrygian", "1 b2 b3 4 5 b6 b7"),
    new FlashCard("Lydian", "1 2 3 #4 5 6 7"),
    new FlashCard("Mixolydian", "1 2 3 4 5 6 b7"),
    new FlashCard("Aeolian (Natural Minor)", "1 2 b3 4 5 b6 b7"),
    new FlashCard("Locrian", "1 b2 b3 4 b5 b6 b7"),
    new FlashCard("Melodic Minor", "1 2 b3 4 5 6 7"),
    new FlashCard("Dorian b2", "1 b2 b3 4 5 6 b7"),
    new FlashCard("Lydian Aug.", "1 2 3 #4 #5 6 7"),
    new FlashCard("Mixolydian #11", "1 2 3 #4 5 6 b7"),
    new FlashCard("Mixolydian b6", "1 2 3 4 5 b6 b7"),
    new FlashCard("Locrian Nat. 9", "1 2 b3 4 b5 b6 b7"),
    new FlashCard("Altered Dominant", "1 b2 b3 b4 b5 b6 b7"),
    new FlashCard("Harmonic Minor", "1 2 b3 4 5 b6 7"),
    new FlashCard("Locrian Nat. 6", "1 b2 b3 4 b5 6 b7"),
    new FlashCard("Ionian Aug.", "1 2 3 4 #5 6 7"),
    new FlashCard("Dorian #11", "1 2 b3 #4 5 6 b7"),
    new FlashCard("Phrygian Major", "1 b2 3 4 5 b6 b7"),
    new FlashCard("Lydian #9", "1 #2 3 #4 5 6 7"),
    new FlashCard("Altered Dominant bb7", "1 b2 b3 b4 b5 b6 bb7"),
    new FlashCard("Tonic Diminished", "1 2 b3 4 b5 b6 bb7 7"),
    new FlashCard("Dominant Diminished", "1 b2 b3 b4 b5 5 6 b7"),
    new FlashCard("Whole Tone", "1 2 3 #4 #5 b7"),
    new FlashCard("Augmented", "1 #2 3 5 #5 7"),
    new FlashCard("Major Pentatonic", "1 2 3 5 6"),
    new FlashCard("Minor Pentatonic", "1 b3 4 5 b7"),
    new FlashCard("Major Blues", "1 2 b3 3 5 6"),
    new FlashCard("Minor Blues", "1 b3 4 b5 5 b7"),
  ];
}
export function createQuiz(): Quiz {
  const chordNotes = [
    "1 2 3 4 5 6 7",
    "1 2 b3 4 5 6 b7",
    "1 b2 b3 4 5 b6 b7",
    "1 2 3 #4 5 6 7",
    "1 2 3 4 5 6 b7",
    "1 2 b3 4 5 b6 b7",
    "1 b2 b3 4 b5 b6 b7",
    "1 2 b3 4 5 6 7",
    "1 b2 b3 4 5 6 b7",
    "1 2 3 #4 #5 6 7",
    "1 2 3 #4 5 6 b7",
    "1 2 3 4 5 b6 b7",
    "1 2 b3 4 b5 b6 b7",
    "1 b2 b3 b4 b5 b6 b7",
    "1 2 b3 4 5 b6 7",
    "1 b2 b3 4 b5 6 b7",
    "1 2 3 4 #5 6 7",
    "1 2 b3 #4 5 6 b7",
    "1 b2 3 4 5 b6 b7",
    "1 #2 3 #4 5 6 7",
    "1 b2 b3 b4 b5 b6 bb7",
    "1 2 b3 4 b5 b6 bb7 7",
    "1 b2 b3 b4 b5 5 6 b7",
    "1 2 3 #4 #5 b7",
    "1 #2 3 5 #5 7",
    "1 2 3 5 6",
    "1 b3 4 5 b7",
    "1 2 b3 3 5 6",
    "1 b3 4 b5 5 b7"
  ];
  const chordTypes = [
    "Ionian (Major)",
    "Dorian",
    "Phrygian",
    "Lydian",
    "Mixolydian",
    "Aeolian (Natural Minor)",
    "Locrian",
    "Melodic Minor",
    "Dorian b2",
    "Lydian Aug.",
    "Mixolydian #11",
    "Mixolydian b6",
    "Locrian Nat. 9",
    "Altered Dominant",
    "Harmonic Minor",
    "Locrian Nat. 6",
    "Ionian Aug.",
    "Dorian #11",
    "Phrygian Major",
    "Lydian #9",
    "Altered Dominant bb7",
    "Tonic Diminished",
    "Dominant Diminished",
    "Whole Tone",
    "Augmented",
    "Major Pentatonic",
    "Minor Pentatonic",
    "Major Blues",
    "Minor Blues"
  ];
  
  return createTextMultipleChoiceQuiz(
    "Scale Notes",
    chordNotes,
    chordTypes,
    chordTypes,
    false
  );
}
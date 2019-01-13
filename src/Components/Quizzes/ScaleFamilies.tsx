import * as Utils from "../../Utils";
import { Quiz } from "../../Quiz";
import { createTextMultipleChoiceQuiz } from "../Quiz";
import { FlashCard } from "../../FlashCard";
import { FlashCardGroup } from 'src/FlashCardGroup';

export function createFlashCardGroup(): FlashCardGroup {
  const flashCards = createFlashCards();
  const flashCardGroup = new FlashCardGroup("Scale Families", flashCards);

  return flashCardGroup;
}

export function createFlashCards(): FlashCard[] {
  return [
    new FlashCard("Ionian", "Major7"),
    new FlashCard("Lydian", "Major7"),
    new FlashCard("Lydian aug", "Major7"),
    new FlashCard("Ionian aug", "Major7"),
    new FlashCard("Major Petatonic", "Major7"),
    new FlashCard("Major Blues", "Major7"),
    new FlashCard("Augmented", "Major7"),
    new FlashCard("Dorian", "Minor7"),
    new FlashCard("Phrygian", "Minor7"),
    new FlashCard("Aeolian", "Minor7"),
    new FlashCard("Melodic Minor", "Minor7"),
    new FlashCard("Dorian b2", "Minor7"),
    new FlashCard("Harmonic Minor", "Minor7"),
    new FlashCard("Dorian #4", "Minor7"),
    new FlashCard("Minor Pentatonic", "Minor7"),
    new FlashCard("Minor Blues", "Minor7"),
    new FlashCard("Locrian", "Minor7b5"),
    new FlashCard("Locrian nat2", "Minor7b5"),
    new FlashCard("Locrian nat6", "Minor7b5"),
    new FlashCard("Mixolydian", "Dom7"),
    new FlashCard("Mixolydian #11", "Dom7"),
    new FlashCard("Mixolydian b6", "Dom7"),
    new FlashCard("Altered Dominant", "Dom7"),
    new FlashCard("Phrygian Major", "Dom7"),
    new FlashCard("Dominant Diminished", "Dom7"),
    new FlashCard("Whole Tone", "Dom7"),
    new FlashCard("Major Pentatonic", "Dom7"),
    new FlashCard("Minor Pentatonic", "Dom7"),
    new FlashCard("Major Blues", "Dom7"),
    new FlashCard("Minor Blues", "Dom7"),
    new FlashCard("Tonic Diminished", "Diminished"),
    new FlashCard("Altered Dominant bb7", "Diminished"),
    new FlashCard("Whole Tone", "Augmented"),
    new FlashCard("Augmented", "Augmented"),
  ];
}
export function createQuiz(): Quiz {
  const chordTypes = [
    "Ionian",
    "Lydian",
    "Lydian aug",
    "Ionian aug",
    "Major Petatonic",
    "Major Blues",
    "Augmented",
    "Dorian",
    "Phrygian",
    "Aeolian",
    "Melodic Minor",
    "Dorian b2",
    "Harmonic Minor",
    "Dorian #4",
    "Minor Pentatonic",
    "Minor Blues",
    "Locrian",
    "Locrian nat2",
    "Locrian nat6",
    "Mixolydian",
    "Mixolydian #11",
    "Mixolydian b6",
    "Altered Dominant",
    "Phrygian Major",
    "Dominant Diminished",
    "Whole Tone",
    "Major Pentatonic",
    "Minor Pentatonic",
    "Major Blues",
    "Minor Blues",
    "Tonic Diminished",
    "Altered Dominant bb7",
    "Whole Tone",
    "Augmented"
  ];
  const scaleFamilies = [
    "Major7",
    "Major7",
    "Major7",
    "Major7",
    "Major7",
    "Major7",
    "Major7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7",
    "Minor7b5",
    "Minor7b5",
    "Minor7b5",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Dom7",
    "Diminished",
    "Diminished",
    "Augmented",
    "Augmented"
  ];
  const answers = Utils.uniq(scaleFamilies);

  return createTextMultipleChoiceQuiz(
    "Scale Families",
    chordTypes,
    scaleFamilies,
    answers,
    false
  );
}
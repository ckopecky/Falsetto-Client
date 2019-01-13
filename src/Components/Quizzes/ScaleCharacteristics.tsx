import { Quiz } from "../../Quiz";
import { createTextMultipleChoiceQuiz } from "../Quiz";
import { FlashCard } from "../../FlashCard";
import { FlashCardGroup } from 'src/FlashCardGroup';

export function createFlashCardGroup(): FlashCardGroup {
  const flashCards = createFlashCards();
  const flashCardGroup = new FlashCardGroup("Scale Characteristics", flashCards);

  return flashCardGroup;
}

export function createFlashCards(): FlashCard[] {
  return [
    new FlashCard("Ionian", "sus4"),
    new FlashCard("Lydian", "#4 (#11)"),
    new FlashCard("Lydian aug", "#4, #5"),
    new FlashCard("Ionian aug", "sus4, #5"),
    new FlashCard("Major Petatonic", "no 4 or 7"),
    new FlashCard("Major Blues", "b3, no4 or 7"),
    new FlashCard("Augmented", "b3, #5"),
    new FlashCard("Dorian", "6"),
    new FlashCard("Phrygian", "b2, 5, b6"),
    new FlashCard("Aeolian", "b6"),
    new FlashCard("Melodic Minor", "6, 7"),
    new FlashCard("Dorian b2", "b2, 6"),
    new FlashCard("Harmonic Minor", "b6, 7"),
    new FlashCard("Dorian #4", "#4, 6"),
    new FlashCard("Minor Pentatonic", "4 (11)"),
    new FlashCard("Minor Blues", "4, #4 (11, #11)"),
    new FlashCard("Locrian", "b2, b5"),
    new FlashCard("Locrian nat2", "2, b5"),
    new FlashCard("Locrian nat6", "b2, b5, 6"),
    new FlashCard("Mixolydian", "sus4, b7"),
    new FlashCard("Mixolydian #11", "#4 (b5), b7"),
    new FlashCard("Mixolydian b6", "sus4, b6(#5), b7"),
    new FlashCard("Altered Dominant", "b9, #9, b5, #5"),
    new FlashCard("Phrygian Major", "sus4, #5, 5"),
    new FlashCard("Dominant Diminished", "b9, #9, b5, 5, 13"),
    new FlashCard("Whole Tone", "#4, #5"),
    new FlashCard("Major Pentatonic", "no 4 or b7"),
    new FlashCard("Minor Pentatonic", "#9, no b7"),
    new FlashCard("Major Blues", "b3, no b7"),
    new FlashCard("Minor Blues", "#9, sus4, b5"),
    new FlashCard("Tonic Diminished", "9, 11, b13, 7"),
    new FlashCard("Altered Dominant bb7", "b9, 3, b13"),
    new FlashCard("Whole Tone", "#4, #5"),
    new FlashCard("Augmented", "#2, 5, #5, 7"),
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
  const characteristics = [
    "sus4",
    "#4 (#11)",
    "#4, #5",
    "sus4, #5",
    "no 4 or 7",
    "b3, no4 or 7",
    "b3, #5",
    "6",
    "b2, 5, b6",
    "b6",
    "6, 7",
    "b2, 6",
    "b6, 7",
    "#4, 6",
    "4 (11)",
    "4, #4 (11, #11)",
    "b2, b5",
    "2, b5",
    "b2, b5, 6",
    "sus4, b7",
    "#4 (b5), b7",
    "sus4, b6(#5), b7",
    "b9, #9, b5, #5",
    "sus4, #5, 5",
    "b9, #9, b5, 5, 13",
    "#4, #5",
    "no 4 or b7",
    "#9, no b7",
    "b3, no b7",
    "#9, sus4, b5",
    "9, 11, b13, 7",
    "b9, 3, b13",
    "#4, #5",
    "#2, 5, #5, 7"
  ];

  return createTextMultipleChoiceQuiz(
    "Scale Characteristics",
    chordTypes,
    characteristics,
    characteristics,
    false
  );
}
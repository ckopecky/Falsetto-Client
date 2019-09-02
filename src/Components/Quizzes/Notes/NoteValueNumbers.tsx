import * as FlashCardUtils from "../Utils";
import { FlashCard } from "../../../FlashCard";
import { FlashCardSet } from "../../../FlashCardSet";

const flashCardSetId = "noteVal#s";

function createFlashCardSet(): FlashCardSet {
  const flashCardSet = new FlashCardSet(flashCardSetId, "Note Value Numbers", createFlashCards);
  flashCardSet.renderAnswerSelect = FlashCardUtils.renderDistinctFlashCardSideAnswerSelect;
  flashCardSet.containerHeight = "80px";
  flashCardSet.moreInfoUri = "http://www.thejazzpianosite.com/jazz-piano-lessons/the-basics/overview/";

  return flashCardSet;
}
export function createFlashCards(): FlashCard[] {
  return [
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 1 }),
      "1", "Whole Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 2 }),
      "2", "Half Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 4 }),
      "4", "Quarter Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 8 }),
      "8", "Eighth Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 16 }),
      "16", "Sixteenth Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 32 }),
      "32", "32nd Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 64 }),
      "64", "64th Note/Rest"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, num: 128 }),
      "128", "128th Note/Rest")
  ];
}

export const flashCardSet = createFlashCardSet();
import * as FlashCardUtils from "../Utils";
import { FlashCard } from "../../../FlashCard";
import { FlashCardSet } from "../../../FlashCardSet";

const flashCardSetId = "intervalConsonances";

export function createFlashCardSet(): FlashCardSet {
  const flashCardSet = new FlashCardSet(flashCardSetId, "Intervals Consonance/Dissonance", createFlashCards);
  flashCardSet.renderAnswerSelect = FlashCardUtils.renderDistinctFlashCardSideAnswerSelect;
  flashCardSet.moreInfoUri = "https://sites.google.com/site/nebironamsmusictheory/chords/1-01intervals";
  flashCardSet.containerHeight = "80px";

  return flashCardSet;
}

export function createFlashCards(): FlashCard[] {
  return [
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "m2" }),
      "m2", "sharp dissonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "M2" }),
      "M2", "mild dissonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "m3" }),
      "m3", "soft consonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "M3" }),
      "M3", "soft consonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "P4" }),
      "P4", "consonance or dissonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "A4/d5" }),
      "A4/d5", "neutral or restless"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "P5" }),
      "P5", "open consonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "m6" }),
      "m6", "soft consonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "M6" }),
      "M6", "soft consonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "m7" }),
      "m7", "mild dissonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "M7" }),
      "M7", "sharp dissonance"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, int: "P8" }),
      "P8", "open consonance"),
  ];
}
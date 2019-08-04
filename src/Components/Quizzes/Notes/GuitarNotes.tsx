import * as React from "react";
import { TextField } from "@material-ui/core";

import * as Utils from "../../../Utils";
import { Size2D } from "../../../Size2D";
import * as FlashCardUtils from "../Utils";
import {
  GuitarFretboard,
  standard6StringGuitarTuning
} from "../../Utils/GuitarFretboard";
import { FlashCard } from "../../../FlashCard";
import { FlashCardSet } from "../../../FlashCardSet";
import { StringedInstrumentNote } from '../../../GuitarNote';

const flashCardSetId = "guitarNotes";

interface IConfigData {
  maxFret: number
};

export function configDataToEnabledQuestionIds(configData: IConfigData): Array<number> {
  const notesPerString = 12;

  const enabledFlashCardIds = new Array<number>();
  for (let stringIndex = 0; stringIndex < standard6StringGuitarTuning.stringCount; stringIndex++) {
    for (let fretNumber = 0; fretNumber <= configData.maxFret; fretNumber++) {
      enabledFlashCardIds.push((notesPerString * stringIndex) + fretNumber);
    }
  }

  return enabledFlashCardIds;
}

export interface IGuitarNotesFlashCardMultiSelectProps {
  flashCards: FlashCard[];
  configData: IConfigData;
  selectedFlashCardIndices: number[];
  onChange?: (newValue: number[], newConfigData: any) => void;
}
export interface IGuitarNotesFlashCardMultiSelectState {}
export class GuitarNotesFlashCardMultiSelect extends React.Component<IGuitarNotesFlashCardMultiSelectProps, IGuitarNotesFlashCardMultiSelectState> {
  public render(): JSX.Element {
    return (
      <TextField
        label="Max. Fret"
        value={this.props.configData.maxFret}
        onChange={event => this.onMaxFretStringChange(event.target.value)}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    );
  }
  
  private onMaxFretStringChange(newValue: string) {
    if (!this.props.onChange) { return; }
    
    const maxFret = parseInt(newValue, 10);
    if (isNaN(maxFret)) { return; }

    const clampedMaxFret = Utils.clamp(maxFret, 0, 11);

    const newConfigData: IConfigData = {
      maxFret: clampedMaxFret
    }
    const newEnabledFlashCardIndices = configDataToEnabledQuestionIds(newConfigData);
    this.props.onChange(newEnabledFlashCardIndices, newConfigData);
  }
}

export function createFlashCardSet(guitarNotes?: Array<StringedInstrumentNote>): FlashCardSet {
  const renderFlashCardMultiSelect = (
    flashCards: Array<FlashCard>,
    selectedFlashCardIndices: number[],
    configData: any,
    onChange: (newValue: number[], newConfigData: any) => void
  ): JSX.Element => {
    return <GuitarNotesFlashCardMultiSelect
      flashCards={flashCards}
      configData={configData}
      selectedFlashCardIndices={selectedFlashCardIndices}
      onChange={onChange}
    />;
  };

  const initialConfigData: IConfigData = {
    maxFret: 11
  };

  const flashCardSet = new FlashCardSet(flashCardSetId, "Guitar Notes", () => createFlashCards(guitarNotes));
  flashCardSet.initialSelectedFlashCardIndices = configDataToEnabledQuestionIds(initialConfigData);
  flashCardSet.initialConfigData = initialConfigData;
  flashCardSet.renderFlashCardMultiSelect = renderFlashCardMultiSelect;
  flashCardSet.renderAnswerSelect = FlashCardUtils.renderNoteAnswerSelect;
  flashCardSet.enableInvertFlashCards = false;
  flashCardSet.moreInfoUri = "https://medium.com/@aslushnikov/memorizing-fretboard-a9f4f28dbf03";
  flashCardSet.containerHeight = "120px";

  return flashCardSet;
}

export function createFlashCards(guitarNotes?: Array<StringedInstrumentNote>): FlashCard[] {
  const MAX_FRET_NUMBER = 11;
  guitarNotes = !guitarNotes
    ? Utils.flattenArrays(Utils.range(0, standard6StringGuitarTuning.stringCount - 1)
    .map(stringIndex => Utils.range(0, MAX_FRET_NUMBER)
      .map(fretNumber => {
        return standard6StringGuitarTuning.getNote(
          stringIndex, fretNumber
        );
      })
    ))
    : guitarNotes;

  return guitarNotes
    .map(guitarNote => {
      const deserializedId = {
        set: flashCardSetId,
        note: [guitarNote.stringIndex, guitarNote.pitch.midiNumber]
      };
      const id = JSON.stringify(deserializedId);

      return FlashCard.fromRenderFns(
        id,
        (width, height) => {
          const size = Utils.shrinkRectToFit(
            new Size2D(width, height),
            new Size2D(400, 140)
          );
  
          return (
            <GuitarFretboard
              width={size.width} height={size.height}
              tuning={standard6StringGuitarTuning}
              pressedNotes={[guitarNote]}
            />
          );
        },
        guitarNote.pitch.toOneAccidentalAmbiguousString(false, true)
      );
    });
}
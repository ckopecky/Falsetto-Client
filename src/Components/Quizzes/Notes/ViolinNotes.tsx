import * as React from "react";
import { TextField } from "@material-ui/core";

import * as Utils from "../../../Utils";
import { Size2D } from "../../../Size2D";
import * as FlashCardUtils from "../Utils";
import {
  ViolinFingerboard,
  standardViolinTuning
} from "../../Utils/GuitarFretboard";
import { FlashCard } from "../../../FlashCard";
import { FlashCardSet } from "../../../FlashCardSet";
import { StringedInstrumentNote } from '../../../GuitarNote';

const flashCardSetId = "violinNotes";

const DEFAULT_MAX_FRET_NUMBER = 13;

interface IConfigData {
  maxFret: number
};

export function configDataToEnabledQuestionIds(configData: IConfigData): Array<number> {
  const notesPerString = DEFAULT_MAX_FRET_NUMBER + 1;

  const enabledFlashCardIds = new Array<number>();
  for (let stringIndex = 0; stringIndex < standardViolinTuning.stringCount; stringIndex++) {
    for (let fretNumber = 0; fretNumber <= configData.maxFret; fretNumber++) {
      enabledFlashCardIds.push((notesPerString * stringIndex) + fretNumber);
    }
  }

  return enabledFlashCardIds;
}

export interface IViolinNotesFlashCardMultiSelectProps {
  flashCards: FlashCard[];
  configData: IConfigData;
  selectedFlashCardIndices: number[];
  onChange?: (newValue: number[], newConfigData: any) => void;
}
export interface IViolinNotesFlashCardMultiSelectState {}
export class ViolinNotesFlashCardMultiSelect extends React.Component<IViolinNotesFlashCardMultiSelectProps, IViolinNotesFlashCardMultiSelectState> {
  public render(): JSX.Element {
    return (
      <TextField
        label={"Max. \"Fret\""}
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

    const clampedMaxFret = Utils.clamp(maxFret, 0, DEFAULT_MAX_FRET_NUMBER);

    const newConfigData: IConfigData = {
      maxFret: clampedMaxFret
    }
    const newEnabledFlashCardIndices = configDataToEnabledQuestionIds(newConfigData);
    this.props.onChange(newEnabledFlashCardIndices, newConfigData);
  }
}

export function createFlashCardSet(notes?: Array<StringedInstrumentNote>): FlashCardSet {
  const renderFlashCardMultiSelect = (
    flashCards: Array<FlashCard>,
    selectedFlashCardIndices: number[],
    configData: any,
    onChange: (newValue: number[], newConfigData: any) => void
  ): JSX.Element => {
    return <ViolinNotesFlashCardMultiSelect
      flashCards={flashCards}
      configData={configData}
      selectedFlashCardIndices={selectedFlashCardIndices}
      onChange={onChange}
    />;
  };

  const initialConfigData: IConfigData = {
    maxFret: DEFAULT_MAX_FRET_NUMBER
  };

  const flashCardSet = new FlashCardSet(flashCardSetId, "Violin Notes", () => createFlashCards(notes));
  flashCardSet.initialSelectedFlashCardIndices = configDataToEnabledQuestionIds(initialConfigData);
  flashCardSet.initialConfigData = initialConfigData;
  flashCardSet.renderFlashCardMultiSelect = renderFlashCardMultiSelect;
  flashCardSet.renderAnswerSelect = FlashCardUtils.renderNoteAnswerSelect;
  flashCardSet.enableInvertFlashCards = false;
  //flashCardSet.moreInfoUri = "https://medium.com/@aslushnikov/memorizing-fretboard-a9f4f28dbf03";
  flashCardSet.containerHeight = "160px";

  return flashCardSet;
}

export function createFlashCards(notes?: Array<StringedInstrumentNote>): FlashCard[] {
  notes = !notes
    ? Utils.flattenArrays(Utils.range(0, standardViolinTuning.stringCount - 1)
    .map(stringIndex => Utils.range(0, DEFAULT_MAX_FRET_NUMBER)
      .map(fretNumber => {
        return standardViolinTuning.getNote(
          stringIndex, fretNumber
        );
      })
    ))
    : notes;

  return notes
    .map(note => {
      const deserializedId = {
        set: flashCardSetId,
        note: [note.stringIndex, note.pitch.midiNumber]
      };
      const id = JSON.stringify(deserializedId);

      return FlashCard.fromRenderFns(
        id,
        (width, height) => {
          const size = new Size2D(500, 140);
          const style: any = { width: "100%", maxWidth: `${size.width}px` };
  
          return (
            <ViolinFingerboard
              width={size.width} height={size.height}
              tuning={standardViolinTuning}
              fretCount={DEFAULT_MAX_FRET_NUMBER}
              pressedNotes={[note]}
              style={style}
            />
          );
        },
        note.pitch.toOneAccidentalAmbiguousString(false, true)
      );
    });
}
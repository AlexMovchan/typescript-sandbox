import * as React from 'react';
import { ICustomOnChange } from '../../App';

interface IPropsInterface {
  inputValue: string;
  onChange(event: ICustomOnChange): void;
}

export const AutosuggestInput: React.FC<IPropsInterface> = (props) =>
  <input name='autosuggest-input'placeholder='Type word' value={props.inputValue} onChange={props.onChange} />;

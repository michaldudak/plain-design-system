import InputUnstyled, { InputUnstyledOwnerState, InputUnstyledProps } from '@mui/base/InputUnstyled';
import clsx from 'clsx';
import classes from './Input.module.css';

export enum InputSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

export type InputProps = InputUnstyledProps & {
	size?: InputSize;
};

export function Input(props: InputProps) {
	const { size = InputSize.medium, ...other } = props;

	const getInputSlotProps = (state: InputUnstyledOwnerState) => {
		const inputClasses = clsx({
			[classes.root]: true,
			[classes.small]: size === InputSize.small,
			[classes.large]: size === InputSize.large,
			[classes.disabled]: state.disabled,
		});

		return { className: inputClasses };
	};

	return <InputUnstyled {...other} slotProps={{ input: getInputSlotProps }} />;
}

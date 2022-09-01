/*
 * @Author: Lemon
 * @Date: 2021-08-13 14:29:29
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-17 15:13:54
 * @FilePath: /superboss-model-web/src/components/CheckBox/EnumCheckbox/EnumCheckboxv2.tsx
 */
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import React from 'react';
import EnumBaseCheckbox from './checkbox';

export interface EnumCheckboxProps extends CheckboxGroupProps {
    enum: any
}

const InternalEnumCheckbox = (
	{ enum: enumObject, ...props }: EnumCheckboxProps,
	ref: React.Ref<HTMLDivElement>
) => {
	const keys = Object.keys(enumObject);
	const dataSource = keys.slice(0, keys.length / 2).map(key => ({
		label: enumObject[key],
		value: +key
	}));
	return (
		<EnumBaseCheckbox dataSource={ dataSource } ref={ ref } { ...props } />
	);
};

const EnumCheckBox = React.forwardRef(InternalEnumCheckbox);

export default EnumCheckBox;
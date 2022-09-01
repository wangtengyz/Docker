/*
 * @Author: Lemon
 * @Date: 2021-08-13 14:29:29
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-17 15:13:53
 * @FilePath: /superboss-model-web/src/components/CheckBox/EnumCheckbox/EnumStringCheckboxv2.tsx
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
	const dataSource = keys.map(key => ({
		label: key,
		value: enumObject[key]
	}));
	return (
		<EnumBaseCheckbox dataSource={ dataSource } ref={ ref } { ...props } />
	);
};

const EnumStringCheckbox = React.forwardRef(InternalEnumCheckbox);

export default EnumStringCheckbox;
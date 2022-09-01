/*
 * @Author: Lemon
 * @Date: 2021-08-26 14:40:43
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-26 14:40:43
 * @FilePath: /superboss-model-web/src/components/Radio/EnumRadio/EnumStringRadio.tsx
 */
/*
 * @Author: Lemon
 * @Date: 2021-08-13 14:29:29
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-17 15:13:54
 * @FilePath: /superboss-model-web/src/components/Radio/EnumRadio/EnumRadiov2.tsx
 */
import { RadioGroupProps } from 'antd';
import React from 'react';
import EnumBaseRadio from './radio';

export interface EnumRadioProps extends RadioGroupProps {
    enum: any
}

const InternalEnumRadio = (
	{ enum: enumObject, ...props }: EnumRadioProps,
	ref: React.Ref<HTMLDivElement>
) => {
	const keys = Object.keys(enumObject);
	const dataSource = keys.slice(0, keys.length / 2).map(key => ({
		label: enumObject[key],
		value: +key
	}));
	return (
		<EnumBaseRadio dataSource={ dataSource } ref={ ref } { ...props } />
	);
};

const EnumRadio = React.forwardRef(InternalEnumRadio);

export default EnumRadio;
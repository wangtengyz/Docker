/*
 * @Author: Lemon
 * @Date: 2021-08-26 14:37:50
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-26 14:39:16
 * @FilePath: /superboss-model-web/src/components/Radio/EnumRadio/radio.tsx
 */
/*
 * @Author: Lemon
 * @Date: 2021-08-13 14:29:29
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-25 14:16:48
 * @FilePath: /superboss-model-web/src/components/Select/EnumSelect/select.tsx
 */
import { Radio, RadioGroupProps } from 'antd';
import React from 'react';

export interface EnumRadioProps extends RadioGroupProps {
    dataSource: {value: string|number; label: string}[]
}

const InternalRadio = (
	{ dataSource, ...props }: EnumRadioProps,
	ref: React.Ref<HTMLDivElement>
) => {
	return (
		<Radio.Group ref={ ref } { ...props }>
			{dataSource.map((item) => (
				<Radio key={ item.value } value={ item.value }>
					{item.label}
				</Radio>
			))}
		</Radio.Group>
	);
};

const EnumBaseRadio = React.forwardRef(InternalRadio);

export default EnumBaseRadio;
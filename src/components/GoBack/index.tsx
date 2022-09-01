import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import cs from 'classnames';
import { useHistory } from 'react-router-dom';
import style from './index.module.scss';

const GoBack = () => {
	const history = useHistory();
	const goback = () => {
		history.goBack();
	};
	return (
		<div className={ cs(style.goBackContainer) } onClick={ goback }>
			<ArrowLeftOutlined />
			<span className={ cs('r-ml-5') }>返回</span>
		</div>
	);
};

export default GoBack;

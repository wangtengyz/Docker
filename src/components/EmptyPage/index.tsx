import React from 'react';
import cs from 'classnames';
import style from './index.module.scss';

const EmptyPage = () => {
	return (
		<div
			className={ cs(style.emptyPageContainer, 'r-fd-c r-flex r-jc-c r-ai-c r-ml-20 r-mr-20') }
			style={ { padding: '150px 0' } }
		>
			<img alt="正在开发" src="https://img.alicdn.com/imgextra/i3/69942425/O1CN01sNyC2V1Tmh6eLunnc_!!69942425.png" />
			<p className="r-mt-12">客官稍等，正在加急开发中～</p>
		</div>
	);
};

export default EmptyPage;

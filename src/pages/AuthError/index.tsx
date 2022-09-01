import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import qs from 'qs';
import s from './style.module.scss';

const AuthError = () => {
	const [errorWord, setErrorWord] = useState('授权失败，请重新授权!');

	// useEffect(() => {
	// 	const keyMap = qs.parse(window.location.hash.split('?')[1]);
	// 	if (keyMap.type === '2') {
	// 		setErrorWord('服务已到期');
	// 	}
	// 	return () => {
	// 	};
	// }, []);

	return (
		<div className={ cs(s.authErrorPage, "r-flex r-ai-c r-jc-c r-fd-c") }>
			<img src="https://img.alicdn.com/imgextra/i3/69942425/O1CN01XalmOh1Tmh4RNp7Gp_!!69942425.png" alt="" />
			<p className="r-mt-20">{errorWord}</p>
		</div>
	);
};

export default AuthError;

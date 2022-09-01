import React, { useCallback, useEffect } from 'react';
// import bars from '@/assets/image/bars.svg';
import qs from 'qs';
import cs from 'classnames';
import { useHistory } from 'react-router-dom';
import { authTokenApi } from '@/apis/auth';
import { setToken } from '@/utils/token';
import { API_ROOT } from '@/constants';
import s from './styles.module.scss';

/**
 * 授权页面
 */
const AuthPage = () => {
	const history = useHistory();
	const auth = useCallback(async() => {
		const keyMap = qs.parse(window.location.search.split('?')[1]);
		try {
			let code:string = (keyMap.code as string) || '';
			// 若无授权码 则直接跳转到授权页
			if (!code) {
				// window.location.href = `/403`;
				history.push('/autherror');
				return;
			}
			const res = await authTokenApi(code);
			if (res && res.token) {
				setToken(res.token);
				if (process.env.NODE_ENV === 'development') {
					window.location.href = '/';
				} else {
					window.location.href = API_ROOT;
				}
			}
		} catch (error) {
			console.log('err', error);
		}
	}, [history]);

	useEffect(() => {
		auth();
	}, [auth]);

	return (
		<div className={ cs(s.authPage, "r-flex r-ai-c r-jc-c r-fd-c") }>
			<div className={ s.imgContainer }>
				{/* <img src={ bars } alt="" /> */}
			</div>
			<p className="r-mt-10">
				页面正在努力加载中...
			</p>
		</div>
	);
};


export default AuthPage;

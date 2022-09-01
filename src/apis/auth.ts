/**
 * 授权相关接口
 */
import axios from '@/utils/request';

/**
 * 获取token
 * @param code
 */
export function authTokenApi(code: string) {
	return axios.get('/auth/getToken', {
		params: { code }
	}).then(res => res.data);
}

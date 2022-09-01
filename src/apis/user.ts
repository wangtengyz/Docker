import axios from '@/utils/request';
import {
	UserInfoResponse,
	UserRemainingResponse,
	UserDisturbingResponse,
	UserDisturbingRequest
} from '@/types/schemas/user';

export function getUserRemainingApi() {
	return axios.get<UserRemainingResponse>('/user/remaining', {
	}).then(res => res.data);
}

/**
 * 获取用户信息接口
 */
export function getUserInfoApi() {
	return axios.get<UserInfoResponse>('/user/getUserInfo', {
	}).then(res => res.data);
}
/**
 * 设置用户免打扰信息接口
 */
export function setUserDisturbingApi(params: UserDisturbingRequest) {
	return axios.post<UserDisturbingResponse>('/user/createOrUpdateUserDisturbing', params, {
	}).then(res => res.data);
}

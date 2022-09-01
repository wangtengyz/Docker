import dayjs from "dayjs";
import { observable, computed, action } from "mobx";
import { getUserInfoApi, getUserRemainingApi } from "@/apis/user";
import { UserInfoResponse } from "@/types/schemas/user";
import history from '@/utils/history';

export class UserStore {

	static userInfo: UserInfoResponse;

	static phoneRemaining: number;

	static msgRemaining: number;

	static userInfoInitAction: Function;

	static getUserInfoAction: Function;

	@observable userInfo: UserInfoResponse = {};

	@observable phoneRemaining: number = 0;

	@observable msgRemaining: number =0;

	@action
	async userInfoInitAction() {
		try {
			const data = await getUserInfoApi();
			this.userInfo = data;
			const remianData = await getUserRemainingApi();
			this.phoneRemaining = remianData.phoneRemaining || 0;
			this.msgRemaining = remianData.msgRemaining || 0;
			if (dayjs(data.endTime).isBefore(dayjs())) {
				history.push('/expire');
				return;
			}
		} catch (error) {
			console.log('error', error);
		}
	}

	@action
	async getUserInfoAction() {
		try {
			const data = await getUserInfoApi();
			this.userInfo = data;
		} catch (error) {
			console.log('error', error);
		}
	}
}

export default new UserStore();

import { observable, computed, action } from "mobx";

class LoginStore {
	@observable userInfo = {
		userName: "",
		userAge: 20,
	};

	@computed get age() {
		return this.userInfo.userAge;
	}

	@action changeName() {
		this.userInfo.userAge++;
	}
}

export default new LoginStore();

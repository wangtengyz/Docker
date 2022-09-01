export interface UserRemainingResponse {
	/**
	   * 电话余额
	*/
	phoneRemaining?: number;
	/**
	   * 短信余额
	*/
	msgRemaining?: number;
}

export interface UserInfoResponse {
	/**
     * 主键id
     */
    id?: number;
    /**
     * 阿里id
     */
    userId?: number;
    /**
     * 卖家昵称
     */
    nick?: string;
    /**
     * 阿里授权token
     */
    accessToken?: string;
    /**
     * 刷新token
     */
    refreshToken?: string;
    /**
     * 到期时间
     */
    endTime?: string;
    /**
     * 版本
     */
    version?: number;
    /**
     * 授权到期时间
     */
    expiresIn?: number;
    /**
     * 登录次数
     */
    loginNum?: number;
    /**
     * 阿里会员id
     */
    memberId?: string;
    /**
     * 1:可用,0:删除
     */
    enableStatus?: number;
    /**
     * 登录时间
     */
    loginTime?: string;
    /**
     * 刷新时间
     */
    refreshTime?: string;
    /**
     * 刷新次数
     */
    refreshNum?: number;
    /**
     * refresh刷新过期时间
     */
    refreshTimeout?: string;
    /**
     * 添加时间
     */
    created?: string;
    /**
     * 修改时间
     */
    modified?: string;
    /**
     * 头像
     */
    iconUrl?: string;
}

export interface UserDisturbingRequest{
    start?: string
    end?: string
    closed?: number
}

export interface UserDisturbingResponse {
  /**
   * 主键id
   */
  id?: number;
  /**
   * 阿里id
   */
  userId?: number;
  /**
   * 添加时间
   */
  created?: string;
  /**
   * 修改时间
   */
  modified?: string;
  /**
   * 开始时间
   */
  start?: string;
  /**
   * 结束时间
   */
  end?: string;
  /**
   * 开关；0：开；1：关
   */
  closed?: number;
}

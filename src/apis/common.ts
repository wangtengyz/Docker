import axios from '@/utils/request';

/**
 * 获取运费模板
 * @param 无
 */
export function getItemDeliveryTemplateApi() {
	return axios.get('/item/getItemDeliveryTemplate', {}).then(res => res.data);
}

/*
 * @Author: Lemon
 * @Date: 2021-08-25 12:06:51
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-25 12:22:16
 * @FilePath: /superboss-model-web/src/components/SearchTable/utils.ts
 */

import { PaginatedFormatReturn } from "ahooks/lib/useAntdTable";
import { defaultResponseProps } from "./interface";

export const defaultResponseAdapter = <T extends object>(res: defaultResponseProps<T>) => {
	return {
		list: res.list,
		total: res.totalCount
	} as PaginatedFormatReturn<T>;
};
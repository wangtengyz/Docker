/*
 * @Author: Lemon
 * @Date: 2021-08-25 12:13:43
 * @LastEditors: Lemon
 * @LastEditTime: 2021-08-25 12:13:44
 * @FilePath: /superboss-model-web/src/components/SearchTable/interface.ts
 */
export interface defaultResponseProps<T> {
    totalCount: number;
    pageNo: number;
    pageSize: number;
    list: T[]
}
export interface BaseResponse {
	success?: boolean;
	errorCode?: number;
	errorMessage?: string;
	subMessage?: string;
}

export interface Obj{
    [propName: string]: any
}

export interface PageProps extends Obj{
	pageNo: number,
	pageSize: number
}

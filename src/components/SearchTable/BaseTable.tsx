import React, { CSSProperties, useCallback, useMemo } from "react";
import { Table, TablePaginationConfig } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";

export interface BaseTableProps<T> extends TableProps<T> {
	expandContext?: React.ReactNode;
	expandContextStyle?: CSSProperties;
}

const defaultPagination: TablePaginationConfig = {
	total: 0,
	defaultPageSize: 10,
	defaultCurrent: 10,
	showQuickJumper: true,
	showSizeChanger: true,
	showTotal: total => `共${total}条`
};

function BaseTable<T extends object = any>(props: BaseTableProps<T>) {
	const { columns, expandContext, expandContextStyle, pagination, ...reset } = props;
	const defaultContextStyle = useMemo<CSSProperties>(
		() => ({
			display: "flex",
			justifyContent: "flex-start",
			marginBottom: "10px",
		}),
		[]
	);
	const getColumns = useCallback<{(): ColumnsType<T>}>(() => {
		return (
			columns?.map((item) => ({
				align: "left",
				...item,
			}))
		);
	}, [columns]);
	return (
		<>
			{
				!!expandContext && (
					<div style={ { ...defaultContextStyle, ...expandContextStyle } }>
						{expandContext}
					</div>
				)
			}
			<Table<T> size="small" bordered columns={ getColumns() } pagination={ typeof pagination === "boolean" ? pagination : { ...defaultPagination, ...pagination } } { ...reset } />
		</>
	);
}
export default BaseTable;

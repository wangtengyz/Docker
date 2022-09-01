import { Layout } from "antd";
import React, { useState } from "react";
import SiderMenu from "../SiderMenu";

const { Content, Header } = Layout;

export interface BasicLayoutProps {}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
	const [openKeys, updateOpenKeys] = useState<string[]>([]);
	const [selectedKeys, updateSelectedKeys] = useState();
	const [collapsed, updateCollapsed] = useState(false);
	const onCollapse = (_collapsed: boolean) => {
		updateCollapsed(_collapsed);
	};
	const onOpenChange = (_openKeys: string[]) => {
		updateOpenKeys(_openKeys);
	};

	const layout = (
		<Layout>
			<SiderMenu
				collapsed={ collapsed }
				onCollapse={ onCollapse }
				onOpenChange={ onOpenChange }
				openKeys={ openKeys }
				selectedKeys={ selectedKeys }
			/>
			<Layout>
				<Content
					id="main"
					style={ {
						boxSizing: 'border-box',
						height: '100vh',
						background: '#fff',
						width: '100%',
						overflowY: 'auto'
					} }
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	);
	return <>{layout}</>;
};
export default BasicLayout;

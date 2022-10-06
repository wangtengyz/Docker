import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.scss";
import { menuData } from "./menu";
import MenuBean, { MenuType } from "./menuBean";

const { Sider } = Layout;
const { SubMenu } = Menu;
const { ItemGroup } = Menu;

const getNavMenuItems = (menusData: MenuBean[]) => {
	if (!menusData) {
		return [];
	}
	return menusData.map((item) => {
		let view = null;
		switch (item.type) {
			case MenuType.SubMenu:
				view = (
					<SubMenu title={ item.name } key={ item.path }>
						{getNavMenuItems(item.children)}
					</SubMenu>
				);
				break;
			case MenuType.ItemGroup:
				view = (
					<ItemGroup title={ item.name } key={ item.name }>
						{getNavMenuItems(item.children)}
					</ItemGroup>
				);
				break;
			case MenuType.Item:
				view = (
					<Menu.Item key={ item.path }>
						<Link to={ item.path }>{item.name}</Link>
					</Menu.Item>
				);
				break;
			case MenuType.Url:
				view = (
					<Menu.Item key={ item.path }>
						<a href={ item.path } target="_blank" rel="noreferrer">
							{item.name}
						</a>
					</Menu.Item>
				);
				break;
			default:
				view = (
					<Menu.Item key={ item.path }>
						<Link to={ item.path }>{item.name}</Link>
					</Menu.Item>
				);
				break;
		}
		return view;
	});
};

export interface SideMenuProps {
	onCollapse: (collapsed: boolean) => void;
	onOpenChange: (openKeys: string[]) => void;
	collapsed: boolean;
	openKeys: string[];
	selectedKeys: string[];
}

const SiderMenu: React.FC<SideMenuProps> = (props) => {
	const { openKeys, selectedKeys, collapsed, onOpenChange, onCollapse } =		props;
	const handleOpenChange = (openKeys: string[]) => {
		onOpenChange(openKeys);
	};

	return (
		<Sider
			theme="dark"
			trigger={ null }
			collapsible
			collapsed={ collapsed }
			onCollapse={ onCollapse }
			width={ 256 }
			className={ styles.sider }
		>
			<div className={ styles.logo }>Docker-Demo</div>
			<Menu
				key="Menu"
				theme="dark"
				mode="inline"
				openKeys={ openKeys }
				onOpenChange={ handleOpenChange }
				selectedKeys={ selectedKeys }
				style={ { padding: "16px 0", width: "100%" } }
			>
				{getNavMenuItems(menuData)}
			</Menu>
		</Sider>
	);
};
export default SiderMenu;

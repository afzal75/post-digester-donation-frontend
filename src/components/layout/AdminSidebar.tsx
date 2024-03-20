import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
const { Sider } = Layout;
import {
    HomeOutlined,
    FileDoneOutlined,
    EditOutlined,
    OrderedListOutlined,
} from "@ant-design/icons";
import logo from '../../assets/logo.jpg'

// import { Link } from "react-router-dom";
const AdminSidebar = () => {
    const items: MenuProps["items"] = [
        {
            key: "dashboard",
            label: <NavLink to="/dashboard">Dashboard</NavLink>,
            icon: React.createElement(HomeOutlined),
        },
        {
            key: "all-donations",
            label: "All Donations",
            icon: React.createElement(OrderedListOutlined),
            children: [
                {
                    key: "donations",
                    label: <NavLink to="/dashboard/donations">Donations</NavLink>,
                    icon: React.createElement(FileDoneOutlined),
                },
                {
                    key: "create-donation",
                    label: <NavLink to="/dashboard/create-donation">Create Donation</NavLink>,
                    icon: React.createElement(EditOutlined),
                },
            ],
        },
    ];
    return (
        <Sider
            breakpoint="lg"
            theme="light"
            collapsedWidth="0"
        >
            <div className="demo-logo-vertical h-20">
                <Link
                    to="/"
                    className="flex ms-4  items-center h-full  text-2xl font-black"
                >
                    <span className="flex gap-1 justify-center items-center bold">
                        <img className="size-8" src={logo} alt="logo" />
                        RELEFEDONATION
                    </span>
                </Link>
            </div>
            <Menu
                theme="light"
                mode="inline"
                className=""
                defaultSelectedKeys={["4"]}
                items={items}
            />
        </Sider>
    );
};

export default AdminSidebar;

import { Layout } from "antd";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AdminLayout = () => {
    return (
        <Layout>
            <AdminSidebar />
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: "white",
                        width: "100%",
                    }}
                >
                    <div className="flex justify-end items-center pr-10 h-full w-full">
                        <img
                            className="inline-block size-10 hover:cursor-pointer rounded-full ring-2 ring-white dark:ring-gray-800"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="Image Description"
                        />
                    </div>
                </Header>

                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: "white",
                            borderRadius: "2px",
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    MedReliefHub ©{new Date().getFullYear()} Created by Afzal Bhuiyan
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;

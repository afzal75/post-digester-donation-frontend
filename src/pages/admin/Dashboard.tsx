import SectionTitle from "@/components/ui/SectionTitle";
// import ShowPieChart from "@/components/ui/ShowPieChart";
// import DashboardStates from "./DashboardStates";

const Dashboard = () => {
    return (
        <div className="h-100vh">
            <SectionTitle className="!my-0" name="Main Dashboard" />
            <div className="grid md:grid-cols-2 ">
                <div className=" shadow-xl p-3">
                    <h1 className="text-3xl font-semibold my-2">Overview Statistics</h1>
                    {/* <ShowPieChart /> */}
                </div>

                <div className="w-full h-full shadow-xl">
                    {/* <DashboardStates /> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

import { useState, useEffect } from "react";
import Navigations from "../organisms/Navigations";
import { BarChart } from "@mui/x-charts/BarChart";
import { authStore } from "../../store/authStore.js";
import { fetchUserById } from "../../api/userApi";

function estimateChartWidth(categories) {
    const maxLabelLength = Math.max(...categories.map(category => category.name.length), 0);
    const minWidth = 350;
    const widthPerCategory = Math.max(60, maxLabelLength * 12); // 12px par caractère
    return Math.max(minWidth, categories.length * widthPerCategory);
}

export default function Dashboard() {
    const user = authStore((state) => state.user);
    const [categoryNames, setCategoryNames] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState([]);
    const [data, setData] = useState({});
    const [width, setWidth] = useState();
    const height = Math.max(180, Math.min(350, width * 0.6));

    useEffect( () => {
        const fetchData = async () => {
            const datas = await fetchUserById(user.id)
            setData(datas);
            setCategoryNames(datas.categories.map(category => category.name));
            setCategoryCounts(datas.categories.map(category => category.productCount));
            setWidth(estimateChartWidth(datas.categories));
        }   

        fetchData().catch(console.error);
    }, []);

    if (!data) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <Navigations />
            <div className="dashboard-container">
                <h1 className="title">Tableau de bord</h1>
                <div>
                    <div className="chart">
                        <div className="chart-container" style={{ width, minWidth: 320, maxWidth: 900 }}>
                            <BarChart
                                xAxis={[{ data: categoryNames, tickLabelStyle: { angle: -30, textAnchor: "end" } }]}
                                series={[
                                    {
                                        data: categoryCounts,
                                        color: "#49adeb",
                                        label: "Quantité",
                                    },
                                ]}
                                width={width}
                                height={height}
                                margin={{ top: 40, right: 30, left: 60, bottom: 70 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import Navigations from "../organisms/Navigations";
import products from "../../data/productsData";
import { BarChart } from "@mui/x-charts/BarChart";

// Extraction des catégories et quantités depuis products.categories
function getCategoryData(categoriesObj) {
    if (!categoriesObj || typeof categoriesObj !== "object") return { categories: [], counts: [] };

    const categories = [];
    const counts = [];
    Object.values(categoriesObj).forEach(cat => {
        categories.push(cat.title);
        counts.push(cat.products.length);
    });

    return { categories, counts };
}

export default function Dashboard() {
    // On récupère les catégories et quantités depuis products.categories
    const { categories, counts } = getCategoryData(products.categories);

    return (
        <div>
            <Navigations />
            <div className="dashboard-container">
                <h1 className="title">Tableau de bord</h1>
                <div>
                    <div className="chart">
                        <div className="chart-container">
                            <BarChart
                                xAxis={[{ data: categories }]}
                                series={[
                                    {
                                        data: counts,
                                        color: "#49adeb",
                                        label: "Quantité",
                                    },
                                ]}
                                width={350}
                                height={220}
                                margin={{ top: 40, right: 30, left: 60, bottom: 50 }}
                                grid={{ vertical: true, horizontal: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
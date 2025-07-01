import { PieChart } from '@mui/x-charts/PieChart';
import { materialsData } from '../../data/productsData';

export default function ProductInfoGraph({ materials }) {
    // Associer la couleur à chaque matériau
    const data = materials.map(mat => {
        const ref = materialsData.find(m => m.name === mat.name);
        return {
            value: mat.percent,
            label: String(mat.name),
            color: ref?.color || '#cccccc',
        };
    });

    return (
        <div className="product-info-graph">
            <PieChart
                series={[
                    {
                        data,
                        arcLabel: (item) => `(${item.value} %)`,
                        arcLabelMinAngle: 25,
                    },
                ]}
                width={220}
                height={220}
            />
        </div>
    );
}
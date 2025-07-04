import { PieChart } from '@mui/x-charts/PieChart';
import MaterialLink from "../atoms/MaterialLink.jsx";

// Fonction pour calculer les pourcentages des matériaux
    const calculateMaterialPercentages = (productsMaterials) => {
        if (!productsMaterials || productsMaterials.length === 0) return [];
        
        // Calculer la quantité totale
        const totalQuantity = productsMaterials.reduce((total, material) => {
            return total + (material.quantity || 0);
        }, 0);
        
        // Si la quantité totale est 0, retourner des pourcentages égaux
        if (totalQuantity === 0) {
            const equalPercentage = 100 / productsMaterials.length;
            return productsMaterials.map(material => ({
                name: material.material?.name || material.name || 'Matériau inconnu',
                percent: parseFloat(equalPercentage.toFixed(2))
            }));
        }
        
        // Calculer les pourcentages
        return productsMaterials.map(material => ({
            id: material.materialId,
            name: material.material?.name || material.name || 'Matériau inconnu',
            percent: parseFloat(((material.quantity / totalQuantity) * 100).toFixed(2))
        }));
    };

    
    export default function ProductInfoGraph({ materials }) {
        
        // Calculer les pourcentages et filtrer les matériaux valides
        const percentMaterials = Array.isArray(materials)
            ? calculateMaterialPercentages(materials).filter(mat => 
                mat.percent > 0 && mat.name
              )
            : [];
        console.log("Matériaux avec pourcentages :", percentMaterials);
    
    
    // Fonction pour générer une couleur aléatoire
    const generateRandomColor = () => {
        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
            '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
            '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D2B4DE',
            '#AED6F1', '#A3E4D7', '#D5DBDB', '#FADBD8', '#D1F2EB'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // Associer une couleur aléatoire à chaque matériau
    const data = percentMaterials.map(mat => {
        return {
            value: mat.percent,
            label: <MaterialLink material={mat} />,
            color: generateRandomColor(),
        };
    });

    return (
        <div className="product-info-graph">
            <PieChart
                series={[
                    {
                        data,
                        arcLabel: (item) => `${item.value}%`,
                        arcLabelMinAngle: 25,
                    },
                ]}
                width={220}
                height={220}
            />
        </div>
    );
}
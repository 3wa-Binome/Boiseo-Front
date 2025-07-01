import cabinetSvg from '../assets/cabinet-svgrepo-com.svg';
import shelfSvg from '../assets/shelf-svgrepo-com.svg';

export const allCabinet = [
    {
        title: "Armoire métal industrielle",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "bois", percent: 60 },
            { name: "métal", percent: 40 }
        ],
    },
    {
        title: "Armoire vintage bois & métal",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "bois", percent: 80 },
            { name: "métal", percent: 20 }
        ],
    },
    {
        title: "Armoire vitrée moderne",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "bois", percent: 50 },
            { name: "verre", percent: 30 },
            { name: "métal", percent: 20 }
        ],
    },
    {
        title: "Armoire basse atelier",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "métal", percent: 70 },
            { name: "bois", percent: 30 }
        ],
    },
    {
        title: "Armoire haute design",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "bois", percent: 40 },
            { name: "métal", percent: 40 },
            { name: "verre", percent: 20 }
        ],
    },
];

export const allShelf = [
    {
        title: "Étagère murale métal & bois",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "bois", percent: 70 },
            { name: "métal", percent: 30 }
        ]
    },
    {
        title: "Étagère industrielle 3 niveaux",
        image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "métal", percent: 60 },
            { name: "bois", percent: 40 }
        ]
    },
    {
        title: "Étagère bibliothèque",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "bois", percent: 90 },
            { name: "verre", percent: 10 }
        ]
    },
    {
        title: "Étagère modulable métal",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        materials: [
            { name: "métal", percent: 100 }
        ]
    },
];

export const cabinetQuantity = allCabinet.length;
export const shelfQuantity = allShelf.length;

export const categories = {
    cabinet: {
        title: "Armoires",
        products: allCabinet,
        quantity: allCabinet.length,
        image: cabinetSvg
    },
    shelf: {
        title: "Étagères",
        products: allShelf,
        quantity: allShelf.length,
        image: shelfSvg
    }
};

export const materialsData = [
    {
        name: "bois",
        description: "Le bois est un matériau naturel et chaleureux, parfait pour un style authentique et intemporel.",
        image: "https://example.com/wood.jpg",
        color: "#B88746" // marron bois
    },
    {
        name: "métal",
        description: "Le métal est robuste et moderne, idéal pour un look industriel ou contemporain.",
        color: "#A9A9A9" // gris métal
    },
    {
        name: "verre",
        description: "Le verre apporte de la légèreté et de l’élégance aux meubles.",
        color: "#8FD3F4" // bleu clair verre
    },
];

export default {
    allCabinet,
    allShelf,
    cabinetQuantity,
    shelfQuantity,
    categories,
    materialsData
};
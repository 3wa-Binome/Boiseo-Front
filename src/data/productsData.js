export const allCabinet = [
    {
        title: "Armoire métal industrielle",
        image: "https://picsum.photos/seed/cabinet1/400/300",
        materials: [
            { name: "bois", percent: 60 },
            { name: "métal", percent: 40 }
        ],
    },
    {
        title: "Armoire vintage bois & métal",
        image: "https://picsum.photos/seed/cabinet2/400/300",
        materials: [
            { name: "bois", percent: 80 },
            { name: "métal", percent: 20 }
        ],
    },
    {
        title: "Armoire vitrée moderne",
        image: "https://picsum.photos/seed/cabinet3/400/300",
        materials: [
            { name: "bois", percent: 50 },
            { name: "verre", percent: 30 },
            { name: "métal", percent: 20 }
        ],
    },
    {
        title: "Armoire basse atelier",
        image: "https://picsum.photos/seed/cabinet4/400/300",
        materials: [
            { name: "métal", percent: 70 },
            { name: "bois", percent: 30 }
        ],
    },
    {
        title: "Armoire haute design",
        image: "https://picsum.photos/seed/cabinet5/400/300",
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
        image: "https://picsum.photos/seed/shelf1/400/300",
        materials: [
            { name: "bois", percent: 70 },
            { name: "métal", percent: 30 }
        ]
    },
    {
        title: "Étagère industrielle 3 niveaux",
        image: "https://picsum.photos/seed/shelf2/400/300",
        materials: [
            { name: "métal", percent: 60 },
            { name: "bois", percent: 40 }
        ]
    },
    {
        title: "Étagère bibliothèque",
        image: "https://picsum.photos/seed/shelf3/400/300",
        materials: [
            { name: "bois", percent: 90 },
            { name: "verre", percent: 10 }
        ]
    },
    {
        title: "Étagère modulable métal",
        image: "https://picsum.photos/seed/shelf4/400/300",
        materials: [
            { name: "métal", percent: 100 }
        ]
    },
];

export const allTable = [
    {
        title: "Table à manger scandinave",
        image: "https://picsum.photos/seed/table1/400/300",
        materials: [
            { name: "bois", percent: 90 },
            { name: "métal", percent: 10 }
        ]
    },
    {
        title: "Table basse industrielle",
        image: "https://picsum.photos/seed/table2/400/300",
        materials: [
            { name: "bois", percent: 60 },
            { name: "métal", percent: 40 }
        ]
    },
    {
        title: "Table ronde en verre",
        image: "https://picsum.photos/seed/table3/400/300",
        materials: [
            { name: "verre", percent: 70 },
            { name: "métal", percent: 30 }
        ]
    }
];

export const allChair = [
    {
        title: "Chaise design bois & tissu",
        image: "https://picsum.photos/seed/chair1/400/300",
        materials: [
            { name: "bois", percent: 60 },
            { name: "tissu", percent: 40 }
        ]
    },
    {
        title: "Chaise industrielle métal",
        image: "https://picsum.photos/seed/chair2/400/300",
        materials: [
            { name: "métal", percent: 100 }
        ]
    },
    {
        title: "Chaise transparente moderne",
        image: "https://picsum.photos/seed/chair3/400/300",
        materials: [
            { name: "verre", percent: 80 },
            { name: "métal", percent: 20 }
        ]
    }
];

export const cabinetQuantity = allCabinet.length;
export const shelfQuantity = allShelf.length;
export const tableQuantity = allTable.length;
export const chairQuantity = allChair.length;

export const allProducts = [
    ...allCabinet,
    ...allShelf,
    ...allTable,
    ...allChair
];

export const categories = {
    cabinet: {
        title: "Armoires",
        products: allCabinet,
        quantity: cabinetQuantity
    },
    shelf: {
        title: "Étagères",
        products: allShelf,
        quantity: shelfQuantity
    },
    table: {
        title: "Tables",
        products: allTable,
        quantity: tableQuantity
    },
    chair: {
        title: "Chaises",
        products: allChair,
        quantity: chairQuantity
    }
};

export const materialsData = [
    {
        name: "bois",
        description: "Le bois est un matériau naturel et chaleureux, parfait pour un style authentique et intemporel.",
        image: "https://picsum.photos/seed/wood/100/100",
        color: "#B88746"
    },
    {
        name: "métal",
        description: "Le métal est robuste et moderne, idéal pour un look industriel ou contemporain.",
        image: "https://picsum.photos/seed/metal/100/100",
        color: "#A9A9A9"
    },
    {
        name: "verre",
        description: "Le verre apporte de la légèreté et de l’élégance aux meubles.",
        image: "https://picsum.photos/seed/glass/100/100",
        color: "#8FD3F4"
    },
    {
        name: "tissu",
        description: "Le tissu offre confort et douceur, parfait pour les assises.",
        image: "https://picsum.photos/seed/fabric/100/100",
        color: "#D1BFA7"
    }
];

export default {
    allCabinet,
    allShelf,
    allTable,
    allChair,
    allProducts,
    cabinetQuantity,
    shelfQuantity,
    tableQuantity,
    chairQuantity,
    categories,
    materialsData
};
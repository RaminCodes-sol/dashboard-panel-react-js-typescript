

export type ProductType = {
    id: number;
    title: string;
    productId: number;
    img: string;
    stock: number;
    sales: number;
    inStock: string;
    checked: boolean;
    price: number;
}

const productData: ProductType[] = [
    {
        id: 1,
        title: 'Denim Jacket',
        productId: 254,
        img: 'https://i.postimg.cc/BbTdwH5j/image-1.jpg',
        stock: 134,
        sales: 1547,
        inStock: 'yes',
        checked: false,
        price: 325
    },
    {
        id: 2,
        title: 'Boot',
        productId: 254,
        img: 'https://i.postimg.cc/mrMNM6fF/image-2.jpg',
        stock: 752,
        sales: 2567,
        inStock: 'yes',
        checked: false,
        price: 157
    },
    {
        id: 3,
        title: 'Denim Jacket',
        productId: 254,
        img: 'https://i.postimg.cc/BbTdwH5j/image-1.jpg',
        stock: 75,
        sales: 1547,
        inStock: 'yes',
        checked: false,
        price: 537
    },
    {
        id: 4,
        title: 'Hat',
        productId: 254,
        img: 'https://i.postimg.cc/mrMNM6fF/image-2.jpg',
        stock: 267,
        sales: 754,
        inStock: 'no',
        checked: false,
        price: 78
    },
    {
        id: 5,
        title: 'Training Shoe',
        productId: 254,
        img: 'https://i.postimg.cc/dVQ39fpH/image-20.jpg',
        stock: 327,
        sales: 1775,
        inStock: 'no',
        checked: false,
        price: 257
    },
    {
        id: 6,
        title: 'Shirt',
        productId: 254,
        img: 'https://i.postimg.cc/m2mvGRPw/benjamin-rascoe-Wdhm-RPv-Mn7-A-unsplash.jpg',
        stock: 405,
        sales: 1547,
        inStock: 'no',
        checked: false,
        price: 112
    },
    {
        id: 7,
        title: 'Jadon Boot',
        productId: 254,
        img: 'https://i.postimg.cc/VLhKRNS3/mostafa-mahmoudi-3-OZr-h-Lbsq0-unsplash.jpg',
        stock: 187,
        sales: 1547,
        inStock: 'no',
        checked: false,
        price: 356
    },
    {
        id: 8,
        title: 'Bicycle',
        productId: 254,
        img: 'https://i.postimg.cc/BbTdwH5j/image-1.jpg',
        stock: 57,
        sales: 1547,
        inStock: 'no',
        checked: false,
        price: 470
    },
]

export default productData
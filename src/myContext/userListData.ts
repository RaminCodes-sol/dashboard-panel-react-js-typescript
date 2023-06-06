

export type UserListType = {
    id: number;
    firstName: string;
    lastName: string;
    img: string;
    email: string;
    status: string;
    transaction: number;
    checked: boolean;
    phoneNumber: string;
    address: string;
    career: string;
}

const userListData: Array<UserListType> = [
    {
        id: 1,
        firstName: 'Jack',
        lastName: 'Connor',
        img: 'https://i.postimg.cc/d0pG1J1f/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg',
        email: 'Jack.Connor@gmai.com',
        status: 'passive',
        transaction: 120.11,
        checked: false,
        phoneNumber: '318-9605519',
        address: 'Paris | London',
        career: 'Designer'
    },
    {
        id: 2,
        firstName: 'Alex',
        lastName: 'Rabinson',
        img: 'https://i.postimg.cc/c4B7mq9K/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg',
        email: 'Alex.Rabinson@gmai.com',
        status: 'active',
        transaction: 50.57,
        checked: false,
        phoneNumber: '890-8990868',
        address: 'New York | USA',
        career: 'Blockchain Developer'
    },
    {
        id: 3,
        firstName: 'Charlie',
        lastName: 'Kyle',
        img: 'https://i.postimg.cc/QMzm6XCD/cody-scott-milewski-5-JERurj-Lmr-A-unsplash.jpg',
        email: 'Charlie.Kyle@gmai.com',
        status: 'active',
        transaction: 79.34,
        checked: false,
        phoneNumber:' 681-2482267',
        address: 'Istanbul | Turkey',
        career: 'IOS Developer'
    },
    {
        id: 4,
        firstName: 'Amelia',
        lastName: 'Margaret',
        img: 'https://i.postimg.cc/3RQWVNW3/oliver-ragfelt-kh-V4f-Ty6-D8-unsplash-1.jpg',
        email: 'Amelia.Margaret@gmai.com',
        status: 'active',
        transaction: 27.65,
        checked: false,
        phoneNumber: '548-8720384',
        address: 'Tirana | Albania',
        career: 'Accountant'
    },
    {
        id: 5,
        firstName: 'George',
        lastName: 'Reece',
        img: 'https://i.postimg.cc/Xq7N6CW6/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg',
        email: 'George.Reece@gmai.com',
        status: 'passive',
        transaction: 75.25,
        checked: false,
        phoneNumber: '963-3098826',
        address: 'Vienna | Austria',
        career: 'Manager'
    },
    {
        id: 6,
        firstName: 'Emily',
        lastName: 'Elizabeth',
        img: 'https://i.postimg.cc/YCQ58Sc6/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg',
        email: 'Emily.Elizabeth@gmai.com',
        status: 'active',
        transaction: 110.75,
        checked: false,
        phoneNumber: '732-9352516',
        address: 'Bogota | Colombia',
        career: 'Assistant'
    },
    {
        id: 7,
        firstName: 'Thomas',
        lastName: 'Joe',
        img: 'https://i.postimg.cc/jjSr5r9y/albert-dera-ILip77-Sbm-OE-unsplash.jpg',
        email: 'Thomas.Joe@gmai.com',
        status: 'passive',
        transaction: 25.67,
        checked: false,
        phoneNumber: '338-7218235',
        address: 'Berlin | Germany',
        career: 'FrontEnd Developer'
    },
    {
        id: 8,
        firstName: 'Isabella',
        lastName: 'Victoria',
        img: 'https://i.postimg.cc/bYtfdg6V/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg',
        email: 'Isabella.Victoria@gmai.com',
        status: 'active',
        transaction: 246.19,
        checked: false,
        phoneNumber: '401-6051185',
        address: 'Paris | France',
        career: 'Teacher'
    }
]


export default userListData
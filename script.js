const aiperi = {
    name: 'aiperi',
    lastName: 'Abdumanapova',
    age: 17,
    isMarried: false,
    language: ['ru', 'kg', 'en', 'cn'],
    hobby: [
        {
            name: 'reading',
            isUseful: true
        },
        {
            name: 'movies',
            isUseful: false
        }
    ],
    addres: {
        street: 'Kurmanjan Datka',
        home: 121,
        city: 'Osh',
        country: 'Kyrgyzstan'
    },
    friends: [
        {
            name: 'Kanykey',
            age: 18,
            lastName: 'Saipbaeva',
            isMarried: false,
            language: ['ru', 'kg', 'en', 'hu'],
            hobby: [
                {
                    name: 'drawing',
                    isUseful: true
                },
                {
                    name: 'sleeping',
                    isUseful: false
                }
            ],
            addres: {
                street: 'Kulatov',
                home: 5,
                city: 'Osh',
                country: 'Kyrgyzstan'
            },
        },
        {
            name: 'Aidai',
            age: 18,
            lastName: 'Tologonova',
            isMarried: false,
            language: ['ru', 'kg', 'en', 'kz'],
            hobby: [
                {
                    name: 'volleyball',
                    isUseful: true 
                },
                {
                    name: 'mobile games',
                    isUseful: false
                }
            ],
            addres: {
                street: 'Anar',
                home: 12,
                city: 'Osh',
                country: 'Kyrgyzstan'
            },
        },
        {
            name: 'Gulzhan',
            age: 18,
            lastName: 'Abdimitalipova',
            isMarried: false,
            language: ['ru', 'kg', 'en'],
            hobby: [
                {
                    name: 'piano',
                    isUseful: true 
                },
                {
                    name: 'mobile games',
                    isUseful: false
                }
            ],
            addres: {
                street: 'Toloykon',
                home: 8,
                city: 'Osh',
                country: 'Kyrgyzstan'
            },
        },
        {
            name: 'Asel',
            age: 18,
            lastName: 'Abdylsaky kyzy',
            isMarried: false,
            language: ['ru', 'kg', 'en', 'kr'],
            hobby: [
                {
                    name: 'drawing',
                    isUseful: true 
                },
                {
                    name: 'anime',
                    isUseful: false
                }
            ],
            addres: {
                street: 'South East',
                home: 2,
                city: 'Osh',
                country: 'Kyrgyzstan'
            },
        },
        {
            name: 'Ayana',
            age: 19,
            lastName: 'Amirbekova',
            isMarried: false,
            language: ['ru', 'kg', 'en', 'tr'],
            hobby: [
                {
                    name: 'singing',
                    isUseful: true 
                },
                {
                    name: 'shopping',
                    isUseful: false
                }
            ],
            addres: {
                street: 'Geologorodok',
                home: 2,
                city: 'Osh',
                country: 'Kyrgyzstan'
            },
        },
        {
            name: 'Gulumzhan',
            age: 18,
            lastName: 'Rakhmanberdieva',
            isMarried: false,
            language: ['ru', 'kg', 'en', 'cn'],
            hobby: [
                {
                    name: 'dancing',
                    isUseful: true 
                },
                {
                    name: 'shopping',
                    isUseful: false
                }
            ],
            addres: {
                street: 'Geologorodok',
                home: 7,
                city: 'Osh',
                country: 'Kyrgyzstan'
            },
        },
    ]

}

console.log(aiperi.friends[0].hobby[0].name);
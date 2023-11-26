const products = [
    {
        id: 1,
        name: 'Adidas Originals Men balck hat',
        price: 4000,
        cat: 'hat',
        gender: 'men',
        tag: ['adidas', 'hat', 'black', 'men'],
        description: 'Introducing the Nike Air Max 720 Black Edition 2023 - the pinnacle of style, innovation, and comfort in the world of athletic footwear. Elevate your sneaker game to new heights with these cutting-edge kicks that blend iconic design with the latest technology for an unparalleled walking and running experience.',
        sizes: ['S', 'M', 'L', 'XL'],
        color: ['black'],
        thumbImg: 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoMSkuanBnIiwiaWF0IjoxNzAwOTkwNTUwLCJleHAiOjIwMTYzNTA1NTB9.c5ZFuvKFeOmGzrxnAjQUbzg-byG8Y-uRAGdavyT1Fh8&t=2023-11-26T09%3A22%3A39.028Z',
        productImgs: ['https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQxLmpwZyIsImlhdCI6MTcwMDk5MDU5MCwiZXhwIjoyMDE2MzUwNTkwfQ.0VVezduyB5JuTF9LtQdqK2t8EqYLF3fh012Z6aF-evI&t=2023-11-26T09%3A23%3A18.631Z', 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQyLmpwZyIsImlhdCI6MTcwMDk5MDYyNSwiZXhwIjoyMDE2MzUwNjI1fQ.DXQV9gFfy1ND5_ubZmRW2T6qn5d4UxxVJvoGIiQRRw4&t=2023-11-26T09%3A23%3A53.559Z', 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQzLmpwZyIsImlhdCI6MTcwMDk5MDY1MywiZXhwIjoyMDE2MzUwNjUzfQ.Sq8dqWOCZB5uEbNyuONngcaCkK-gxu8hq2tC62PQbGg&t=2023-11-26T09%3A24%3A21.650Z']
    },
    
    {
        id: 2,
        name: 'Men Styling Green Hat 100% cotton',
        price: 4000,
        cat: 'hat',
        gender: 'men',
        tag: ['hat', 'green', 'men', 'cotton'],
        description: 'Introducing the Nike Air Max 720 Black Edition 2023 - the pinnacle of style, innovation, and comfort in the world of athletic footwear. Elevate your sneaker game to new heights with these cutting-edge kicks that blend iconic design with the latest technology for an unparalleled walking and running experience.',
        sizes: ['S', 'M', 'L', 'XL'],
        color: ['green'],
        thumbImg: 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(2).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoMikuanBnIiwiaWF0IjoxNzAwOTkwODM0LCJleHAiOjIwMTYzNTA4MzR9.VMHlqRGIqlrmhcEul7i1loCY_bVMp4rXcgN83r174R0&t=2023-11-26T09%3A27%3A23.304Z',
        productImgs: ['https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat10.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQxMC5qcGciLCJpYXQiOjE3MDA5OTA4ODIsImV4cCI6MjAxNjM1MDg4Mn0.-co9j9EoEDmEm1aUIsIIELW-3noBW9sHBj6nMIRgrzY&t=2023-11-26T09%3A28%3A11.470Z','https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat10.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQxMC5qcGciLCJpYXQiOjE3MDA5OTA4ODIsImV4cCI6MjAxNjM1MDg4Mn0.-co9j9EoEDmEm1aUIsIIELW-3noBW9sHBj6nMIRgrzY&t=2023-11-26T09%3A28%3A11.470Z']
    },

    {
        id: 3,
        name: 'Beautifull floral pattern hat for women',
        price: 4000,
        cat: 'hat',
        gender: 'women',
        tag: ['hat', 'flower', 'floral', 'women'],
        description: 'Introducing the Nike Air Max 720 Black Edition 2023 - the pinnacle of style, innovation, and comfort in the world of athletic footwear. Elevate your sneaker game to new heights with these cutting-edge kicks that blend iconic design with the latest technology for an unparalleled walking and running experience.',
        sizes: ['S', 'M', 'L', 'XL'],
        color: ['yellow'],
        thumbImg: 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(3).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoMykuanBnIiwiaWF0IjoxNzAwOTkxMTE2LCJleHAiOjIwMTYzNTExMTZ9.Gc-60iSbJR4xdFLP-3UftjXP3ykCq5UR0_QtuXdgsI4&t=2023-11-26T09%3A32%3A04.962Z',
        productImgs: ['https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Women/women_hat1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvV29tZW4vd29tZW5faGF0MS5qcGciLCJpYXQiOjE3MDA5OTEyNDUsImV4cCI6MjAxNjM1MTI0NX0.01iL2NeYvhHVEY-_TwJg8rZW8WIak6sSfN0nXeZq6S4&t=2023-11-26T09%3A34%3A14.433Z', 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Women/women_hat2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvV29tZW4vd29tZW5faGF0Mi5qcGciLCJpYXQiOjE3MDA5OTEyNzAsImV4cCI6MjAxNjM1MTI3MH0.Wm6-kTW_fdMGKp7vDMdHire9Zi3rUxcvSg20leifTkM&t=2023-11-26T09%3A34%3A38.657Z']
    },

    {
        id: 4,
        name: 'plain black hat for women',
        price: 4000,
        cat: 'hat',
        gender: 'women',
        tag: ['hat', 'plain', 'women'],
        description: 'Introducing the Nike Air Max 720 Black Edition 2023 - the pinnacle of style, innovation, and comfort in the world of athletic footwear. Elevate your sneaker game to new heights with these cutting-edge kicks that blend iconic design with the latest technology for an unparalleled walking and running experience.',
        sizes: ['S', 'M', 'L', 'XL'],
        color: ['black'],
        thumbImg: 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(4).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoNCkuanBnIiwiaWF0IjoxNzAwOTkxODM5LCJleHAiOjIwMTYzNTE4Mzl9.T1h_dhZiaQz30arq9d0FhtMlQFVgoCvR1CYuaFmhvwA&t=2023-11-26T09%3A44%3A07.791Z',
        productImgs: ['https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Women/women_hat4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvV29tZW4vd29tZW5faGF0NC5qcGciLCJpYXQiOjE3MDA5OTE4OTEsImV4cCI6MjAxNjM1MTg5MX0.xI_S6J4XpYsR2wrM-sjIpmJjRZvhFVkNbZRFdfovVlQ&t=2023-11-26T09%3A45%3A00.238Z', 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Women/women_hat3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvV29tZW4vd29tZW5faGF0My5qcGciLCJpYXQiOjE3MDA5OTE5MjEsImV4cCI6MjAxNjM1MTkyMX0.wn4kuGWWatXafY6ltZ_H5S7yfsJjzjOny6as01GUly0&t=2023-11-26T09%3A45%3A29.938Z', 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Women/women_hat6.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvV29tZW4vd29tZW5faGF0Ni5qcGciLCJpYXQiOjE3MDA5OTE5NDAsImV4cCI6MjAxNjM1MTk0MH0.d-OnlDBT1A-MEiCtAE4gICcgFB_HcCl1lUxCpxan-NQ&t=2023-11-26T09%3A45%3A49.216Z']
    },

    {
        id: 5,
        name: 'Adidas Originals Men balck hat',
        price: 4000,
        cat: 'hat',
        gender: 'men',
        tag: ['adidas', 'hat', 'black', 'men'],
        description: 'Introducing the Nike Air Max 720 Black Edition 2023 - the pinnacle of style, innovation, and comfort in the world of athletic footwear. Elevate your sneaker game to new heights with these cutting-edge kicks that blend iconic design with the latest technology for an unparalleled walking and running experience.',
        sizes: ['S', 'M', 'L', 'XL'],
        color: ['black'],
        thumbImg: 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Thumbnail/hat%20(5).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvVGh1bWJuYWlsL2hhdCAoNSkuanBnIiwiaWF0IjoxNzAwOTkzMDk3LCJleHAiOjIwMTYzNTMwOTd9.K07Vb5KlU-ZOhEXl86I4NG0ikdHlu26CQFgSRgp7r3c&t=2023-11-26T10%3A05%3A05.679Z',
        productImgs: ['https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQ0LmpwZyIsImlhdCI6MTcwMDk5MzEzMSwiZXhwIjoyMDE2MzUzMTMxfQ.b8C0mHVvbj35s3NcA8Z2UfFbKHwREYlUN4aXrFw-vHQ&t=2023-11-26T10%3A05%3A40.052Z', 'https://ejvtndbnggmfzqqxlgqu.supabase.co/storage/v1/object/sign/Product_images/Hat/Men/men_hat5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQcm9kdWN0X2ltYWdlcy9IYXQvTWVuL21lbl9oYXQ1LmpwZyIsImlhdCI6MTcwMDk5MzE1NiwiZXhwIjoyMDE2MzUzMTU2fQ.Ny9Gc9_9SCFq9DohsIp3YO1mUbx4LatelVPhWzLixqQ&t=2023-11-26T10%3A06%3A05.213Z', '']
    },
]
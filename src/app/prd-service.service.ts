import { Injectable, OnInit } from '@angular/core';
import { PrdInfo } from './prd-info';


@Injectable({
  providedIn: 'root'
})
export class PrdServiceService implements OnInit {
  cart:any[]=[];
  constructor() { }

  subtotal: number = 0;
  shipping: number = 20;
  total:number=0;
  prdata:any[]=[
    {
      "id": 1,
      "title": "iPhone 15 Pro Max",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "phones",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMGSH3sMaCziP1cXeBDFOeboJ-j17BVeqLw&s",
      "rating": 3.9,
      "Quantity": 10
      
    },
    {
      "id": 2,
      "title": "Galaxy S24 Ultra ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "phones",
      "image": "https://btech.com/media/catalog/product/4/3/4323ba4f92a8ce3479cdd29b02837b5247c16860e7812dd2faf18b97dac6981d.jpeg?width=1500&store=en&image-type=image",
      "rating": 4.1,
      "Quantity": 15

    },
    {
      "id": 3,
      "title": "Galaxy A54",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "phones",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKSWNNRAOAT-OvXzXWRNZCLOqDVFWypdNDg&s",
      "rating": 4.7,
      "Quantity": 5

    },
    {
      "id": 4,
      "title": "Xiaomi 14 Ultra",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "phones",
      "image": "https://cdn.dxomark.com/wp-content/uploads/medias/post-171171/bdc0df40e7c3983b73802b3d47dd20c4600x60085.jpg",
      "rating": 2.1,
      "Quantity": 20
    },
    {
      "id": 5,
      "title": "OnePlus 12",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "phones",
      "image": "https://m.media-amazon.com/images/I/61BAuSC0UnL._AC_UF1000,1000_QL80_.jpg",
      "rating": 4.6,
      "Quantity": 3  
    },
    {
      "id": 6,
      "title": "Oppo Find X6 Pro",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "phones",
      "image": "https://miro.medium.com/v2/resize:fit:1080/1*C4_6OT-Agq2rzHmktk4o0w.jpeg",
      "rating": 3.9,
      "Quantity": 26 

    },
    {
      "id": 7,
      "title": "Realme GT 5 Pro",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "phones",
      "image": "https://telfonak.com/wp-content/uploads/2024/02/realme-gt5-pro-colors.webp",
      "rating": 3,
      "Quantity":17
    },
    {
      "id": 8,
      "title": "Huawei P60 Pro",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "phone",
      "image": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp-arab/phones/p60-pro/images/design/huawei-p60-pro-colours-01.jpg",
      "rating": 1.9,
      "Quantity": 20
    },
    {
      "id": 9,
      "title": "Google Pixel 8 Pro",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      "category": "phones",
      "image": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1723648968/Croma%20Assets/Communication/Mobiles/Images/309165_0_gvylu0.png",
      "rating": 3.3,
      "Quantity": 13
    },
    {
      "id": 10,
      "title": "Asus ROG Phone 7 Ultimat",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "category": "phones",
      "image": "https://image.myipadbox.com/upload/store/detail_l/EDA004751402_1.jpg",
      "rating": 2.9,
      "Quantity": 4
    },
    {
      "id": 11,
      "title": "Asus Zenbook 14 OLED (UM3406HA-WS74T)",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/59803/Asus-Zenbook-14-OLED--UM3406-_20240523-142437_full.jpeg",
      "rating": 4.8,
      "Quantity": 6
    },
    {
      "id": 12,
      "title": "Apple MacBook Air (M2, 2022, 13-inch)",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/51168/Apple-MacBook-Air--M2--2022-_20220822-165356_full.jpeg",
      "rating": 4.8,
      "Quantity": 8
    },
    {
      "id": 13,
      "title": "Framework Laptop 13 (Intel Core Ultra Series 1)",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/62449/Framework-Laptop-13-Ultra-Series-1--Intel--Pre-Built-_20240607-143815_full.jpeg",

        "rating": 2.9,

    },
    {
      "id": 14,
      "title": "Lenovo IdeaPad Flex 5i Chromebook Plus",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/58283/Lenovo-IdeaPad-Flex-5i-Chromebook-Plus_20231017-202035_full.jpeg",
      "rating": 2.2,
      "Quantity": 23
    },
    {
      "id": 15,
      "title": "Acer Aspire 3 Spin 14 (A3SP14-31PT)",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/56458/Acer-Aspire-3-Spin-14-Acer-Aspire-3--A315-51-580N-_20230627-144448_full.jpeg",
      "rating": 2.6,
      "Quantity": 13
    },
    {
      "id": 16,
      "title": "Apple MacBook Pro (16-inch, M3 Pro, 2023)",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/58679/Apple-MacBook-Pro--16-inch--M3-Pro--2023-_20231103-220740_full.jpeg",
      "rating": 2.9,
      "Quantity": 9
    },
    {
      "id": 17,
      "title": "Samsung Galaxy Book4 Ultra",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/63484/Samsung-Galaxy-Book4-Ultra_20240725-192901_full.jpeg",

        "rating": 3.8,
        "Quantity":15
    },
    {
      "id": 18,
      "title": "Gigabyte Aorus 16X (9KG-43USC54SH) ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      "category": "Laptops",
      "image": "https://d1b5h9psu9yexj.cloudfront.net/62339/Gigabyte-Aorus-16X--9KG-43USC54SH-_20240531-194459_full.jpeg",

        "rating": 4.7,
      "Quantity":15
    },
    {
      "id": 19,
      "title": "ASUS ROG Strix Scar 18 G834JYR 18" ,
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      "category": "Laptops",
      "image": "https://www.compumarts.com/cdn/shop/files/G834JYR-18_02.jpg?v=1713108417",
  
        "rating": 4.5,
      "Quantity":15
    },
    {
      "id": 20,
      "title":"MSI Katana 17 B13V Gaming Laptop",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "Laptops",
      "image": "https://www.compumarts.com/cdn/shop/files/B13VGK_03.jpg?v=1722344760",
      "rating": 3.6,
      "Quantity":15
    } 
    ,{
      "id": 21,
      "title": "Apple M1",
      "description": "The Apple M1 chip delivers incredible performance and efficiency for Apple devices.",
      "price": 299,
      "rating": 4.8,
      'image' :"data:image/jpeg;base64,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",
      'category':"processor",
      "Quantity":15
    },
    {
      "id": 22,
      "title": "Qualcomm Snapdragon elite x",
      'category':"processor",
      "description": "A flagship mobile processor designed for premium smartphones, offering high performance and efficiency.",
      "price": 199,
      "rating": 4.7,"Quantity":15,
      'image': "https://external-preview.redd.it/qualcomm-snapdragon-x-elite-in-analysis-more-efficient-than-v0-R2Il1kac0KbmGYrCBisV3F9hzX8Jkq1PvXZ6AcQgqrM.jpg?width=640&crop=smart&auto=webp&s=eeb0d3ac47883b7b5061b52e961a2557bdc1a096"
    },
    {
      "id": 23,
      "title": "Intel Core i9-13900K",
      'category':"processor",
      "description": "A powerful desktop processor ideal for gaming and high-performance tasks.",
      "price": 589,
      "rating": 4.9,"Quantity":15,
      'image' :"data:image/jpeg;base64,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"
    },
    {
      "id": 24,
      "title": "AMD Ryzen 9 7950X",
      'category':"processor",
      "description": "An enthusiast-grade desktop processor designed for gamers and content creators.",
      "price": 549,
      "rating": 4.8,"Quantity":15,
      'image' :"data:image/jpeg;base64,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"
    },
    {
      "id": 25,
      "title": "MediaTek Dimensity 9200",
      'category':"processor",
      "description": "A high-end mobile processor used in flagship smartphones, offering advanced AI and connectivity features.",
      "price": 249,
      "rating": 4.6,"Quantity":15,
      'image': "data:image/jpeg;base64,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"
    },
    {
      "id": 26,
      "title": "Intel Xeon 8 ",
      'category':"processor",
      "description": "Samsung's flagship mobile processor featuring AMD RDNA2 GPU architecture for advanced gaming.",
      "price": 279,
      "rating": 4.5,"Quantity":15,
      'image' :"https://upload.wikimedia.org/wikipedia/commons/3/31/Intel-Xeon-Badge-2024.jpg"
    },
    {
      "id": 27,
      "title": "Intel Core i7-13700K",
      'category':"processor",
      "description": "A high-performance desktop processor for gaming, content creation, and multitasking.",
      "price": 399,
      "rating": 4.7,"Quantity":15,
      'image' :"data:image/jpeg;base64,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"
    },
    {
      "id": 28,
      "title": "AMD Ryzen 7 7800X3D",
      'category':"processor",
      "description": "A 3D V-Cache processor designed for enhanced gaming performance and multitasking.",
      "price": 449,
      "rating": 4.8,"Quantity":15,
      'image' :"data:image/jpeg;base64,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"
    },
    {
      "id": 29,
      "title": "Pentium 4",
      'category':"processor",
      "description": "Pentium 4 is a series of single-core CPUs for desktops, laptops and entry-level servers manufactured by Intel. The processors were shipped from November 20, 2000 until August 8, 2008. It was removed from the official price lists starting in 2010, being replaced by Pentium Dual-Core.",
      "price": 349,
      "rating": 4.9,"Quantity":15,
      'image' :"https://upload.wikimedia.org/wikipedia/commons/7/7e/Pentium_4-2%2C4GHz.JPG"
    },
    {
      "id": 30,
      "title": "AMD A8 7680",
      'category':"processor",
      "description": "A powerful mid-range mobile processor delivering excellent performance and power efficiency.",
      "price": 169,
      "rating": 4.6,"Quantity":15,
      'image' :"https://m.media-amazon.com/images/I/61V0D5hIqrL.jpg"
    },
    {
      "id": 31,
      "title": "Dell UltraSharp U2720Q",
      "description": "27-inch 4K UHD monitor with USB-C connectivity and HDR support.",
      "price": 599,
      "rating": 4.8,"Quantity":15,
      "category": "Monitors",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Sbn0e_spXIp2rPqQThY75SkigrqNMO49KQ&s"
    },
    {
      "id": 32,
      "title": "ASUS ROG Swift PG32UQX",
      "description": "32-inch 4K gaming monitor with mini LED technology and G-Sync Ultimate.",
      "price": 2499,
      "rating": 4.9,"Quantity":15,
      "category": "Monitors",
      "image": "https://m.media-amazon.com/images/I/61BAwUbe11L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 33,
      "title": "LG 27GN950-B",
      "description": "27-inch 4K UHD Nano IPS gaming monitor with a 144Hz refresh rate.",
      "price": 799,
      "rating": 4.7,"Quantity":15,
      "category": "Monitors",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vKwfnmef3jYTGqA6Y-1I99FLY_HTuuOv6Q&s"
    },
    {
      "id": 34,
      "title": "Samsung Odyssey G7",
      "description": "32-inch QHD gaming monitor with a 240Hz refresh rate and HDR600.",
      "price": 699,
      "rating": 4.8,"Quantity":15,
      "category": "Monitors",
      "image": "https://images.samsung.com/is/image/samsung/ph-odyssey-g7-c27g75t-lc27g75tqsexxp-frontblack-thumb-307877630"
    },
    {
      "id": 35,
      "title": "BenQ PD3220U",
      "description": "32-inch 4K designer monitor with AQCOLOR technology for accurate color reproduction.",
      "price": 1199,
      "rating": 4.6,
      "Quantity":30,
      "category": "Monitors",
      "image": "https://m.media-amazon.com/images/I/615JY+cjHkL.jpg"
    },
    {
      "id": 36,
      "title": "Acer Predator X27",
      "description": "27-inch 4K UHD gaming monitor with 144Hz refresh rate and G-Sync support.",
      "price": 1799,
      "rating": 4.7,
      "category": "Monitors",
      "Quantity":13,
      "image": "https://i.pcmag.com/imagery/reviews/074fs6JJYgfDgoy3QwAHelw-1..v1569469960.jpg"
    },
    {
      "id": 37,
      "title": "HP Omen X 27",
      "description": "27-inch QHD gaming monitor with a 240Hz refresh rate and FreeSync Premium.",
      "price": 399,
      "rating": 4.5,
      "category": "Monitors",
      "Quantity":12,
      "image": "https://www.omen.com/content/dam/sites/omen/worldwide/displays/resized-images/omen-x-27-display/monitor1.png"
    },
    {
      "id": 38,
      "title": "ViewSonic VP3268-4K",
      "description": "32-inch 4K professional monitor with color accuracy for design work.",
      "price": 699,
      "rating": 4.6,
      "category": "Monitors",
      "Quantity":10,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9juXAoW45ipILVvN4jFTw8C8wfemFCMwsA&s"
    },
    {
      "id": 39,
      "title": "LG 34WN80C-B",
      "description": "34-inch UltraWide QHD monitor with HDR10 support and USB-C connectivity.",
      "price": 799,
      "rating": 4.5,
      "category": "Monitors",
      "Quantity":11,
      "image": "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/0105a9c4-0b5f-46bc-99fd-5510364d2fca/md07000511-zoom-01-jpg"
    },
    {
      "id": 40,
      "title": "Dell P2720DC",
      "description": "27-inch QHD monitor with USB-C connectivity and an ultra-thin bezel.",
      "price": 399,
      "rating": 4.4,
      "category": "Monitors",
      "Quantity":9,
      "image": "https://cdn.cs.1worldsync.com/9b/65/9b651893-68ac-4811-9d5f-c7e0022db621.jpg"
    },
    {
      "id": 41,
      "title": "Logitech MX Master 3",
      "description": "Advanced wireless mouse with ergonomic design and precise control.",
      "price": 99,
      "rating": 4.9,
      "category": "PC Accessories",
      "Quantity":5,
      "image": "https://m.media-amazon.com/images/I/613a-3jtieL._AC_UF894,1000_QL80_.jpg"
    },
    {
      "id": 42,
      "title": "Corsair K95 RGB Platinum",
      "description": "Mechanical gaming keyboard with RGB backlighting and programmable keys.",
      "price": 199,
      "rating": 4.8,
      "category": "PC Accessories",
      "Quantity":3,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_OO2IzHfphTGEAPXtsR66AkVig1sIke4cA&s"
    },
    {
      "id": 43,
      "title": "SteelSeries Arctis Pro Wireless",
      "description": "High-fidelity wireless gaming headset with surround sound and dual wireless technology.",
      "price": 329,
      "rating": 4.7,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://m.media-amazon.com/images/I/71VcVWpKAKL._SL1500_.jpg"
    },
    {
      "id": 44,
      "title": "Razer Goliathus Extended Chroma",
      "description": "Soft gaming mouse pad with customizable RGB lighting.",
      "price": 59,
      "rating": 4.6,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9gyqlqdnz-VpqOlCaxnua8q3T-GjZfN1Ng&s"
    },
    {
      "id": 45,
      "title": "Elgato Stream Deck",
      "description": "15-key customizable control panel for streamers and content creators.",
      "price": 149,
      "rating": 4.8,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://res.cloudinary.com/elgato-pwa/image/upload/v1679475550/Products/10GBA9901/above-the-fold/desktop/mk.2-black-01_seyirh.jpg"
    },
    {
      "id": 46,
      "title": "Logitech G Pro X Superlight",
      "description": "Lightweight wireless gaming mouse designed for esports professionals.",
      "price": 149,
      "rating": 4.7,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://m.media-amazon.com/images/I/51uy8gOG-iL._AC_SL1400_.jpg"
    },
    {
      "id": 47,
      "title": "Blue Yeti USB Microphone",
      "description": "Professional-grade USB microphone for podcasts, streaming, and content creation.",
      "price": 129,
      "rating": 4.9,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://hardwaremarket.net/wp-content/uploads/2021/03/1574693242_1297189.jpg.webp"
    },
    {
      "id": 48,
      "title": "HyperX Cloud II Gaming Headset",
      "description": "Comfortable gaming headset with 7.1 virtual surround sound and noise-canceling microphone.",
      "price": 99,
      "rating": 4.6,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://hyperx.com/cdn/shop/files/hyperx_cloud_ii_red_2_main_mixer.jpg?v=1721075774"
    },
    {
      "id": 49,
      "title": "Cooler Master MasterFan MF120R ARGB",
      "description": "RGB case fans with customizable lighting and quiet cooling performance.",
      "price": 39,
      "rating": 4.5,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://files.coolermaster.com/og-image/masterfan-mf120r-argb-1200x630.jpg"
    },
    {
      "id": 50,
      "title": "NZXT Kraken X63",
      "description": "AIO liquid cooler with RGB lighting and excellent cooling performance for CPUs.",
      "price": 159,
      "rating": 4.8,
      "category": "PC Accessories",
      "Quantity":12,
      "image": "https://m.media-amazon.com/images/I/518pSjJYQUL._SL1000_.jpg"
    },
    {
      "id": 51,
      "title": "NVIDIA GeForce RTX 4090",
      "description": "The most powerful consumer-grade GPU from NVIDIA, designed for 4K gaming and heavy content creation.",
      "price": 1599,
      "rating": 4.9,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://cdn.salla.sa/KOPVE/5aRppRmq3uh2wZJg3g9IAl9oiGFkybhqACIjcbBx.gif"
    },
    {
      "id": 52,
      "title": "AMD Radeon RX 7900 XTX",
      "description": "AMD's flagship GPU offering high-end gaming performance and ray tracing capabilities.",
      "price": 999,
      "rating": 4.8,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/81il2WdPPJL.jpg"
    },
    {
      "id": 53,
      "title": "NVIDIA GeForce RTX 4080",
      "description": "A high-end graphics card built for 4K gaming with excellent ray tracing and DLSS support.",
      "price": 1199,
      "rating": 4.7,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://asset.msi.com/resize/image/global/product/product_1668045190e4886ef46b13298d252099c73e055ae6.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
    },
    {
      "id": 54,
      "title": "AMD Radeon RX 7800 XT",
      "description": "A mid-tier GPU offering great performance for 1440p gaming and content creation.",
      "price": 599,
      "rating": 4.6,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA1Avx4BnpgPGeVVWRKx82q3y6RAi6h0aLw&s"
    },
    {
      "id": 55,
      "title": "NVIDIA GeForce RTX 4070 Ti",
      "description": "A premium GPU designed for 1440p and 4K gaming, featuring ray tracing and DLSS 3.0 support.",
      "price": 899,
      "rating": 4.7,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/71LtnjKmLBL._AC_UF894,1000_QL80_.jpg"
    },
    {
      "id": 56,
      "title": "AMD Radeon RX 7600",
      "description": "A budget-friendly graphics card offering solid 1080p performance for gaming and light content creation.",
      "price": 269,
      "rating": 4.5,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/81yBmcZTERL.jpg"
    },
    {
      "id": 57,
      "title": "NVIDIA GeForce RTX 3060 Ti",
      "description": "A popular mid-range GPU designed for 1080p and 1440p gaming with ray tracing support.",
      "price": 399,
      "rating": 4.6,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/713wOinySDS._AC_UF894,1000_QL80_.jpg"
    },
    {
      "id": 58,
      "title": "AMD Radeon RX 6800 XT",
      "description": "A high-end GPU that provides excellent 4K performance and ray tracing at an affordable price.",
      "price": 649,
      "rating": 4.7,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/91KCEsgjsXL._AC_SL1500_.jpg"
    },
    {
      "id": 59,
      "title": "NVIDIA GeForce GTX 1660 Super",
      "description": "A budget-friendly GPU designed for 1080p gaming with good power efficiency.",
      "price": 229,
      "rating": 4.5,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/81bMigCN-tL._AC_SL1500_.jpg"
    },
    {
      "id": 60,
      "title": "AMD Radeon RX 6700 XT",
      "description": "A mid-tier GPU designed for 1440p gaming, offering a good balance between performance and price.",
      "price": 479,
      "rating": 4.6,
      "category": "Graphic Cards",
      "Quantity":15,
      "image": "https://m.media-amazon.com/images/I/61cO8bBORoL._AC_UF894,1000_QL80_.jpg"
    }
    
    
    
    
  ]
  getCat(id:number): PrdInfo
  {
    const target=this.prdata.find(el=>el.id===id);
    return target;
  }
  ngOnInit() {
    this.cart = this.getCart();
    this.calculateTotal(); 
  }
  
  getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  addToCart(product: any) {
    let cart = this.getCart();
  
    const existingProductIndex = cart.findIndex((item: any) => item.id === product.id);
  
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1; // Increase quantity if the product is already in the cart
    } else {
      product.quantity = 1; // Add product with initial quantity 1
      cart.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    this.calculateTotal(); 
  }
  
  removeFromCart(productId: number) {
    let cart = this.getCart();
    cart = cart.filter((item: any) => item.id !== productId); 
    localStorage.setItem('cart', JSON.stringify(cart));
    this.calculateTotal(); 
  }
  
  
calculateTotal() {
  let cart = this.getCart();
  this.subtotal = cart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
  const tax = 0; 
  this.total = this.subtotal + this.shipping + tax;
}
}

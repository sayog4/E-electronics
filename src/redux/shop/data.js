const SHOP_DATA = {
  laptop: {
    id: 1,
    title: 'Laptop',
    routeName: 'laptops',
    items: {
acerspin3convertiblelaptop:{
      id: 1,
      title: "Acer Spin 3 Convertible Laptop",
      img: "https://i.ibb.co/3C2kPWp/product-1.jpg",
      price: 749,
      company: "Acer",
      info:[
        "8th Generation Intel Core i7 8565U Processor (Up to 4.6GHz)",
        "14 inches Full HD (1920 x 1080) Widescreen LED backlit IPS Multi Touch Convertible Display",
        "16GB DDR4 Memory & 512GB PCIe NVMe SSD",
        "Rechargeable Active Stylus; Thin 0.38 inches Bezel; Dual Front Facing Speakers; 802.11acWi Fi featuring 2x2 MU MIMO Technology",
        "Just 0.78 inches Thin, 3.75 pounds and Up to 12 Hours of Battery Life"
    ]
  },
  lenovoideapads340:{
    id: 2,
    title: "Lenovo Ideapad S340",
    img: "https://i.ibb.co/KwJSRr1/product-2.jpg",
    price: 650,
    company: "Lenovo",
    info: [
      "Powered by latest 10th Gen Intel Core i7-1065G7 Processor @ 1.30GHz (4 Cores, 8M Cache, up to 3.90 GHz); Ultra-low-voltage platform. Quad-core, eight-way processing provides maximum high-efficiency power to go.",
      '15.6" FHD (1920 x 1080) anti-glare Display; Intel Iris Plus G7 Graphics',
      "8GB DDR4 2400MHz SDRAM Memory for full-power multitasking; 256GB Solid State Drive save files fast and store more data. dual drives ensure faster performance and better reliability.",
      "802.11ac Wireless LAN + Bluetooth 4.2; 2 x USB 3.1 (Gen 1)(1 supports charging), 1 x UBS 3.1 (Gen 1) Type-C, HDMI, 4-in-1 SD card reader, Headphone / mic combo, Power connector",
      "Windows 10 Home; Onyx Black;EST 500GB External Hard Drive"
    ]
  },
  newestdellinspiron: {
    id: 3,
    title: "Newest Dell Inspiron",
    img: "https://i.ibb.co/WfGbzNS/product-3.jpg",
    price: 580,
    company: "Dell",
      info: [
      '15.6" Full HD (1920 x 1080) IPS Touchscreen Energy-efficient LED Backlight Display,Intel HD Graphics 620',
      "Intel Quad Core 8th Gen i5-8250U 4 Cores 4 Threads 1.6Ghz 6 MB SmartCache Base Frequency Max Turbo Frequency 3.4Ghz(beat i7-7500U)",
      "24GB Ddr4 Memory, 1st Hard Drive:1TB SSD Boot Driver,2nd Hard Drive:2TB HDD,DVD-RW,SSD enhance multitasking power smoothly run multiple programs and browser all at once",
      "Full-size island-style Backlit keyboard with numeric keypad.,Stereo Speakers with Waves MaxxAudio Pro,3-cell Lithium ion Upto 7.5 Hours Battery Life,Bluetooth,1 x USB 2.0, 2 x USB 3.1, 1 x HDMI, 1 x Headphone Out/Microphone in Combo Jack, 1 x Card Reader",
      "Windows 10 Home 64-Bit "
    ]
  },
  hp202015inch: {
    id: 4,
    title: 'HP 2020 15inch',
    img: "https://i.ibb.co/rFYbz9Z/product-4.jpg",
    price: 720,
    company: "HP",
      info: [
      "Powered by latest 10th Gen Intel Core i5-1035G1 Processor @ 1.00GHz (4 Cores, 6M Cache, up to 3.60 GHz); Ultra-low-voltage platform. Quad-core, eight-way processing provides maximum high-efficiency power to go.",
      "15.6 in HD WLED touchscreen (1366 x 768), 10-finger multi-touch support Display; Intel Iris Plus Graphics",
      "24GB 2666MHz DDR4 Memory for full-power multitasking; 1TB Solid State Drive (PCI-e), Save files fast and store more data. With massive amounts of storage and advanced communication power, PCI-e SSDs are great for major gaming applications, multiple servers, daily backups, and more.",
      "Realtek RTL8821CE 802.11b/g/n/ac Wi-Fi and Bluetooth 4.2 Combo; 1 USB 3.1 Gen 1 Type-C; 2 USB 3.1 Gen 1 Type-A; 1 HDMI; 1 headphone/microphone combo jack",
      "Windows 10 Home, 64-bit, English; Natural silver;EST 500GB External Hard Drive"
    ]
  },
  asusrogstrixheroii :{
    id: 5,
    title: "Asus ROG Strix Hero II",
    img: "https://i.ibb.co/dbrJxgh/product-5.jpg",
    price: 1200,
    company: "Asus",
      info: [
      "Nvidia GeForce RTX 2060 6GB GDDR6 (base: 1110 MHz, Boost: 1335 MHz; TDP: 90W)",
      "Intel Core i7-8750H Hexa-Core processor",
      "144Hz 3ms 15.6” 1920x1080 IPS Type Display",
      "16GB DDR4 2666MHz RAM | 512GB PCIe SSD | Windows 10 Home",
      "Gigabit wave 2 Wi-Fi 5 (802.11AC) | Quad antennas and ROG RangeBoost technology provides up to 30% wider coverage"
    ]
  },
  msicreator17m: {
    id: 6,
    title: "MSI Creator 17M",
    img: "https://i.ibb.co/rQN01x6/product-6.jpg",
    price: 1140,
    company: "MSI",
      info: [
      '17. 3" FHD (1920x1080), 120Hz, 45% NTSC, IPS-Level 1920x1080 16: 9 NVIDIA GeForce GTX1660Ti 6G GDDR6',
      "Core i7-9750h 2. 6 - 4. 5GHz Intel PTT",
      "512GB NVMe SSD 16GB (8G*2) DDR4 2666MHz 2 Sockets; Max Memory 64GB",
      "Usb 3. 2 Gen2 Type C *1 USB 3. 2 Gen1 *3 LAN Intel 9560 Jefferson Peak (2x2 802. 11 AC) bt 5 720P HD Webcam.AC Power Adaptor:180 W",
      "Ac adapter Win 10 Multi-language webcam 3 Cell (51Whr) Li-Polymer 720P HD Webcam keyboard precision touchpad USB White backlight with Anti-Ghost key+ silver lining"
    ]
  },
  rcavikingpro: {
    id: 7,
    title: "RCA Viking Pro ",
    img: "https://i.ibb.co/vXxfVNY/product-7.jpg",
    price: 60,
    company: "RCA",
      info:[
      '10.1" touchscreen, 1280 x 800 resolution, 1.3GHz Quad-Core processor, 1GB DDR of system memory, 32GB onboard storage memory, additional memory via microSD card slot; No optical drive',
      'Android 6.0 OS; Built-in WiFi and Bluetooth v4.0, Back 2MP webcam and front 1MP webcam; microUSB 2.0 port, USB 2.0 port, miniHDMI port, headphone jack, microphone jack, DC-in jack; Up to 6 hours of run time on a full charge Weighs 1.15 lbs; 10.2" x 0.39" x 6.5" dimensions',
      "Introducing the RCA 10 Viking Pro 2-in-1 tablet with detachable keyboard. The 10 Viking Pro operates on Android 6.0 and showcases the operating system's brand-new material design. Captivate your eyes with the Viking Pro's amazingly clear, 10.1-inch high definition screen",
      "The impressive 1.3GHz quad-core processor is powerful enough to zoom through applications and tasks. Quickly update your social statuses, compose emails and navigate the Web with the detachable keyboard and built-in trackpad. When it's time to get down to business, open up the included WPS Office app and create powerful documents and spreadsheets.",
      "The impressive 1.3GHz quad-core processor is powerful enough to zoom through applications and tasks. Quickly update your social statuses, compose emails and navigate the Web with the detachable keyboard and built-in trackpad. When it's time to get down to business, open up the included WPS Office app and create powerful documents and spreadsheets."
    ]
  },
  applemacbookpro: {
    id: 8,
    title: "Apple MacBook Pro",
    img: "https://i.ibb.co/vHZcWT8/product-8.jpg",
    price: 1930,
    company: "Apple",
    info: [
      "8th-generation quad-core Intel Core i5 processor",
      "Brilliant Retina display with True Tone technology",
      "Touch Bar and Touch ID ",
      "Intel Iris Plus Graphics 655",
      "16GB RAM, Ultrafast 256GB SSD"
    ]
  },
  newmicrosoftsurfacepro7: {
    id: 9,
    title: "NEW Microsoft Surface Pro 7",
    img: "https://i.ibb.co/qCTT5Kj/product-9.jpg",
    price: 698,
    company: "Microsoft",
    info: [
      "Next-gen, best-in-class laptop with the versatility of a studio and tablet, so you can type, touch, draw, write, work, and play more naturally",
      "Faster than Surface Pro 6, with a 10th Gen Intel Core Processor – redefining what’s possible in a thin and light computer.",
      "More ways to connect, with both USB-C and USB-A ports for connecting to displays, docking stations and more, as well as accessory charging",
      "Standout design that won’t weigh you down — ultra-slim and light Surface Pro 7 starts at just 1.70 pounds",
      "All-day battery life up to 10.5 hours, plus the ability to go from empty to full faster — about 80% in just over an hour"
    ]
  },
  hpchromebook14: {
    id: 10,
    title: "HP Chromebook 14",
    img: "https://i.ibb.co/stVSyHQ/product-10.jpg",
    price: 400,
    company: "HP",
    info: [
      "Processor AMD Dual-Core A4-9120C 1.6 GHz base frequency, up to 2.4 GHz burst",
      "180° hinge. Share with ease. Enjoy thousands of Android apps and easily share your screen with the flexibility of a hinge that allows up to 180° rotation",
      "14-inch FHD touchscreen: Intuitive touchscreen technology and the crystal-clear visuals of vibrant FHD",
      "AMD Radeon R4 graphics: Whether it’s games or movies, experience high performance for all your entertainment.",
      "Ports: 2 USB 3.1 Gen 1 Type-C (Charging, power delivery,video, data), 2 USB 2.0, 1 Headphone-out/microphone-in combo jack"
    ]
  }
}
 },
  mobile: {
    id: 2,
    title: 'Mobile',
    routeName: 'mobile',
    items: {
      samsunggalaxys10plus: {
        id: 101,
        title: "Samsung Galaxy S10 plus",
        img: "https://i.ibb.co/j3dkX6g/m-1.jpg",
        price: 1012,
        company: "samsung",
        info: [
          "Renewed Item. GSM Unlocked Only. Cannot be used with CDMA carriers.",
          "An immersive Cinematic Infinity Display, Pro-grade Camera and Wireless PowerShare. The next generation is here.",
          "Ultrasonic in-display fingerprint ID protects and unlocks with the first touch.",
          "Pro-grade Camera effortlessly captures epic, pro-quality images of the world as you see it",
          "Intelligently accesses power by learning how and when you use your phone"
        ] 
      },
      oneplus5ta5010: {
        id: 102,
        title: "OnePlus 5T A5010",
        img: "https://i.ibb.co/w7Kbwkq/m-2.jpg",
        price: 320,
        company: "one plus",
        info: [
          " This Smartphone is compatible/will work with any GSM Networks such as AT&T, T-Mobile. For exact 2G GSM, 3G, 4G/LTE compatibility, please check with your network provider in advance prior to your purchase. This phone WILL NOT WORK with any CDMA Networks such as VERIZON, SPRINT, US CELLULAR.",
          '6.01" inch, AMOLED Screen, 1080P (1080 x 2160 pixels), 401ppi, 2.5D Corning Gorilla Glass 5',
          "Storage 128GB UFS2.1 2-LANE, 8GB LPDDR4X RAM, Wi-Fi MIMO 2*2, WiFi 802.11 a/b/g/n/ac, 2.4/5 GHz, Bluetooth 5.0, supports aptX & aptX HD, NFC, GPS, GLONASS, BeiDou, Galileo",
          "OxygenOS based on Android 7.1.1 Nougat, Qualcomm Snapdragon 835 (Octa-core, 10nm, up to 2.45GHz), Adreno 540"
        ]
      },
      appleiphone7plus: {
        id: 103,
        title: "Apple iPhone 7 Plus",
        img: "https://i.ibb.co/X88mr7G/m-3.jpg",
        price: 280,
        company: "apple",
        info: [
          "This iPhone is only for use with Boost Mobile and cannot be Unlocked for use with other carriers.",
          "12-megapixel primary camera on the rear and a 7-megapixel front shooter for selfies.",
          "7 Megapixel Facetime Camera with 1080p HD Video Recording, Retina Flash, f/2.2 aperture.",
          "5.5-inch Retina HD LED-backlit Display with IPS Technology, 1920 x 1080 pixel resolution (~401ppi pixel density)."
        ]
      },
      opporenoace: {
        id: 104,
        title: "Oppo Reno Ace",
        img: "https://i.ibb.co/PQ7bnk2/m-4.jpg",
        price: 699,
        company: "HP",
        info: [
          "65W Super Flash Charger(VOOC) | 90Hz E-sports Screen | Qualcomm SnapdragonTM 855+ | 4800W Ultra Clear Four Shots | 5x Hybrid Optical Zoom | Ultra Clear Video Anti Shake | Support google and multi-language",
          "Package Included OPPO Reno Ace*1 Adapter*1 Headset *1 USB-C Charge Cable*1 Important Info. Booklet with Warranty Card *1 Quick Start Guide *1 SIM Card Ejector *1 Protect Film *1 Case *1",
          "【REAL STAR TECHNOLOGY】New store special offer period If you have any questions or need more offers please feel free to ask me.we will give the greatest help and support.We are not responsible for the sales quality of other sellers【REAL STAR TECHNOLOGY】",
          "FAST SHIPPING&Official Warranty: DHL fast shipping to make sure the buyer get the package within 3-7 days;You will enjoy a 12-Month Warranty and Free Lifetime Technical Support(except man-made damage to the battery, screen, motherboards)please check whether your carrier supports the bands of this model before purchasing"
        ]
      },
      htcexodus1: {
        id: 105,
        title: "HTC Exodus 1",
        img: "https://i.ibb.co/k8KWM4K/m-5.jpg",
        price: 600,
        company: "HTC",
        info: [
          "FDD: Bands B4/B12/B17/B28/B20/B5/B8/B3/B1/B7/B32/B2/B13/B66 TDD: Bands B39/B40/B38/B41 ",
          "6.0 inches, Super LCD6 capacitive touchscreen, 16M colors, 1440 x 2880 pixels ",
          "128GB Storage, 6GB RAM, No Card slot",
          "The Native Web 3.0 Blockchain Phone Factory Unlocked 4G/LTE Smartphone - International Version.",
          "SINGLE SIM"
        ]
      },
      appleiphone11: {
        id: 106,
        title: "Apple iPhone 11",
        img: "https://i.ibb.co/tDcTVB7/m-6.jpg",
        price: 1250,
        company: "Apple",
        info: [
          "6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology",
          "Dual-camera system with 12MP Ultra wide and wide cameras; night mode, Portrait mode, and 4K video up to 60fps",
          "12MP True Depth front Camera with Portrait mode, 4K video, and slo-mo",
          "Water and dust resistant (2 meters for up to 30 minutes, IP68)"
        ]
      },
      samsunggalaxya80: {
        id: 107,
        title: "Samsung Galaxy A80",
        img: "https://i.ibb.co/0Bthwy0/m-7.jpg",
        price: 480,
        company: "samsung",
        info: [
          "This phone will work on GSM SIM cards like AT&T or T-Mobile or any other GSM SIM Card network provider but it will NOT work on CDMA such as Sprint, Verizon or US Cellular or Boost Mobile or any other CDMA Networks.",
          "180° hinge. Share with ease. Enjoy thousands of Android apps and easily share your screen with the flexibility of a hinge that allows up to 180° rotation",
          "6.7 inches, Super AMOLED capacitive touchscreen, 16M colors, 1080 x 2400 pixels, Corning Gorilla Glass 3",
          "128GB Storage, 8GB RAM, No Card slot",
          "Android 9.0 (Pie), Qualcomm SDM730 Snapdragon 730 (8 nm), Octa-core (2x2.2 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver), Adreno 618"
        ]
      },
      nokia9pureview: {
        id: 108,
        title: "Nokia 9 PureView",
        img: "https://i.ibb.co/mDY7Dyq/m-8.jpg",
        price: 650,
        company: "Nokia",
        info: [
          "A revolutionary, next generation camera with an incredible five cameras and ZEISS optics complete with two color sensors that provide accurate vibrant color images and three panchromatic sensors that allow the array to collect up to 10-times the amount of light resulting in sharp, incredibly atmospheric still shots with blur effects and Google Photos integration alongside rich and vibrant UHD 4k HDR video with spatial audio capture.",
          "Exceptional detail and dynamic range for exceptional photography with control over every element of your image starting with incredible detail and texture from all 5 cameras that automatically adjusts the exposure across the scene or allows for complete control down to the smallest detail with the custom build Pro camera UI. Images can be saved as “Raw” DNG format images with unparalleled dynamic range, details and low noise that can be edited directly on your device with Adobe Light room for ad ",
          "Built to protect everything that makes it great with a resilient and durable 6000 series aluminum chassis, that houses a next generation Qualcomm Snapdragon 845 mobile platform and imaging co-processor complete with Qualcomm Bluetooth audio, and integrated Qi wireless Charging.",
          "Premium design and performance featuring an edge to edge ultra slim Gorilla Glass 5. 99”QHD 2k LED display enhanced with Pure Display and HDR10 support lets you enjoy latest content with crisper details, greater contrast and richer colors with integrated under screen fingerprint sensor.",
          "Pure, Secure and Up-to-Date Android Free from bloat ware with no skins and no UI changes and years of Android monthly updates. – it’s all part of the Android One family"
        ]
      },
      honorview20: {
        id: 109,
        title: "Honor View 20",
        img: "https://i.ibb.co/3rbhYY2/m-9.jpg",
        price: 300,
        company: "honor",
        info: [
          "This Smartphone is compatible/will work with any GSM Networks such as AT&T, T-Mobile. For exact 2G GSM, 3G, 4G/LTE compatibility, please check with your network provider in advance prior to your purchase. This phone WILL NOT WORK with any CDMA Networks such as VERIZON, SPRINT, US CELLULAR.",
          "Dual-SIM, Network Compatibility : SIM CARD 1 [ 2G GSM 850 / 900 / 1800 / 1900 and/or 3G UTMS 800(B6) / 850(B5) / 900(B8) / 1700|2100 (B4) / 1900(B2) / 2100(B1)and/or 4G LTE 700(B28) / 800(B19) / 800(B20) / 850(B5) / 850(B26) / 900(B8) / 1700|2100 (B4) / 1800(B3) / 1900(B2) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B7) : TD-LTE : 2300(B40) / 2600(B38) ] and SIM CARD 2 [ 2G GSM 850 / 900 / 1800 / 1900 ] 6.4 inches, IPS LCD capacitive touchscreen, 16M colors, 1080 x 2310 pixels",
          "256GB Storage, 8GB RAM, No Card slot, Android 9.0 (Pie); HiSilicon Kirin 980 (7 nm), Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8 GHz Cortex-A55) ",
          'Dual48 MP Primary Camera, f/1.8, 1/2", 0.8µm, PDAF, TOF 3D stereo camera, 2160p@30fps, 1080p@30fps, 720p@960fps, (gyro-EIS), 25 MP Front Camera, f/2.0, 27mm, HDR, 1080p@30fps',
          "6.4 inches, IPS LCD capacitive touchscreen, 16M colors, 1080 x 2310 pixels"
        ]
      },
      xiaomimimix2s: {
        id: 110,
        title: "Xiaomi Mi Mix 2S",
        img: "https://i.ibb.co/tDcTVB7/m-6.jpg",
        price: 342,
        company: "Xiaomi",
        info: [
          "Display: IPS LCD capacitive touchscreen, 16M colors Size: 5.99 inches, Resolution: 1080 x 2160 pixels, Protection: Corning Gorilla Glass 4. OS: Android 8.0 (Oreo), Chipset: Qualcomm SDM845 Snapdragon 845, MIUI 9.5, Memory: 128GB, 6GB RAM",
          "Camera: Dual: 12 MP, 5MP Front, Sensors: Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass.",
          "Unlocked cell phones are compatible with GSM carrier worldwide such as AT-T and T-Mobile, but are not compatible with CDMA carriers such as Verizon and Sprint. ",
          "The box contains: Your new device, USB cable, Wall Charger (foreign), Documentation. FCC ID :- 2AFZZ-XMSD5X ",
          "HSDPA 800 / 850 / 900 / 1700(AWS) / 1800 / 1900 / 2100 - LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 25(1900), 26(850), 27(800), 28(700), 29(700), 30(2300), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500)."
        ]
      }
    }
  },
  television:{
    id: 3,
    title: 'Television',
    routeName: 'tv',
    items: {
      insignians55df710na19:{
        id: 301,
        title: "Insignia NS 55DF710NA19",
        img: "https://i.ibb.co/v3qRRpT/t-1.jpg",
        price: 980,
        company: "Insignia",
        info:[
          "Insignia 4K UHD Smart TV – Fire TV Edition delivers true-to-life 4K Ultra HD picture quality with over 8 million pixels for stunning clarity, deep contrast, and vivid colors.",
          "Insignia 4K UHD Smart TV – Fire TV Edition delivers true-to-life 4K Ultra HD picture quality with over 8 million pixels for stunning clarity, deep contrast, and vivid colors.",
          "Fire TV Edition seamlessly integrates live over-the-air TV and streaming channels on a unified home screen (HD antenna required).",
          "Easily control your TV with the included Voice Remote with Alexa—plus, launch apps, search for titles, play music, switch inputs, control smart home devices, and more, using just your voice",
          "Dimensions (W x H x D): TV without stand: 48.9” x 28.6” x 3.3”, TV with stand: 48.9” x 30.3” x 10.4”. Multiple device input/output options: 3 HDMI including 1 with ARC, USB, composite input, antenna/cable input, digital output (optical), audio output, Ethernet."
      ]
    },
    viziovv605g3: {
      id: 302,
      title: "VIZIO V V605 G3",
      img: "https://i.ibb.co/6r3VPqC/t-2.jpg",
      price: 650,
      company: "vizio",
      info: [
        'Introducing the all-new VIZIO 60" Class 4K (2160P) Smart LED TV (V605-G3).',
        'Discover exceptional picture quality at an unbelievable value, with 4K Ultra HD and Dolby Vision HDR for breathtaking clarity in every scene',
        "Featuring VIZIO's award-winning SmartCast 3.0 with Chromecast built-in and voice support for Google Assistant and Alexa, streaming, controlling, and sharing your favorites is easier than ever before.",
        "120HZ refresh rate"
      ]
    },
    toshiba55lf711u20: {
      id: 303,
      title: "Toshiba 55LF711U20",
      img: "https://i.ibb.co/p49f5WZ/t-3.jpg",
      price: 379,
      company: "Toshiba",
        info: [
        'Fire TV experience built-in - Fire TV Edition brings together live-over-the air TV, and your favorite streaming content on the home screen. Connect any HD antenna (sold separately) to watch live over-the-air TV, or stream movies and shows from Disney+, Netflix, Prime Video, Hulu, HBO and more.',
        "True-to-life picture quality - Experience breathtaking 4K Ultra HD picture quality with over 8 million pixels for stunning clarity, deep contrast and vivid colors. Watch movies and TV shows come to life in ultra high deﬁnition.",
        "Voice Remote with Alexa - Everything you’d expect from a remote – plus launch apps, search for TV shows, switch inputs, control smart home devices and more, using just your voice. With Prime Video, Netflix, and HBO buttons, instantly access your favorite apps.",
        "Keeps getting smarter - This TV is smart and simple in every way. Just plug it in, connect to Wi-Fi and enjoy. Plus, your TV keeps getting smarter with new Alexa skills and features through automatic over-the-air software updates, so that you always have the latest.",
        "Endless entertainment - Watch over 500,000 streaming movies and TV episodes in HD or Ultra HD, from Prime Video, Netflix, Hulu, HBO, and more. Plus, access tens of thousands of channels, apps, and Alexa skills."
      ]
    },
    lg82um8070pua: {
      id: 304,
      title: 'LG 82UM8070PUA',
      img: "https://i.ibb.co/RQwsBFm/t-4.jpg",
      price: 1300,
      company: "LG",
        info: [
        'LG 82" 4K HDR Smart LED IPS TV w/ AI ThinQ 2019 Model',
        "LG ThinQ AI, Google Assistant, Alexa",
        "LG a7 Gen 2 Intelligent Processor",
        "IN THE BOX: Magic Remote - Remote Control Battery - Power Cable",
        'BUNDLE INCLUDES: LG 82" 4K HDR Smart LED IPS TV w/ AI ThinQ 2019 Model - Deco Gear Home Theater Surround Sound 31" Soundbar - Deco Gear 2.4GHz Wireless Backlit Keyboard Smart Remote with Touchpad Mouse - Deco Mount Flat Wall Mount Kit Ultimate Bundle for 45-90 inch TVs - Stanley SurgePro 6 NT 750 Joule 6-Outlet Surge Adapter with Night Light'
      ]
    },
    samsungqn65ls03ra: {
      id: 305,
      title: "Samsung QN65LS03RA",
      img: "https://i.ibb.co/SJXHHmH/t-5.jpg",
      price: 1996,
      company: "Samsung",
        info: [
        "Samsung AUTHORIZED DEALER - Includes Full Samsung USA WARRANTY",
        "Samsung QN65LS03RA The Frame 3.0 65-inch LS03R QLED Smart 4K UHD TV (2019 Model)",
        "Over a billion shades of brilliant color - powered by Quantum Dots - delivers such a realistic picture.",
        " INCLUDED IN THE BOX: The Frame 3.0 65-inch Class 4K UHD Smart QLED TV | Remote Control with Batteries | No-Gap Wall Mount | Power Cable | Limited 1-Year Warranty",
        "BUNDLE INCLUDES: Samsung QN65LS03RA The Frame 3.0 65-inch LS03R QLED Smart 4K UHD TV (2019 Model) | Sony WH1000XM3/B Premium Noise Cancelling Wireless Headphones with Mic, Black "
      ]
    },
    westinghouse32inch: {
      id: 306,
      title: "Westinghouse 32 inch",
      img: "https://i.ibb.co/m6mWxYy/t-6.jpg",
      price: 100,
      company: "Westinghouse",
        info: [
        'High Definition television lets you enjoy your entertainment with reduced motion-blur and a crisp picture',
        "Sleek and slim look in a perfect size for a dorm room, kitchen or office.",
        "Bright, crisp and vivid HD picture perfect for watching TV gaming or even as a computer display ",
        "HDMI connectivity, Tuner Capability, VGA, USB, Headphone, Optical Audio Out, Parental Control, Sleep Timer"
      ]
    },
    sceptre50: {
      id: 307,
      title: 'Sceptre 50"',
      img: "https://i.ibb.co/4KJRvP2/t-7.jpg",
      price: 400,
      company: "Spectre",
        info:[
        '50” LED 4K UHD TV',
        'Superior 4K Picture Enter an unrivaled world of color variation, impressive contrasts, and image detail with 4K resolution (3840 x 2160). Sceptre 4K delivers a superior picture with 8 million pixels, four times more than a 1080P Full HDTV.',
        "UHD Upscaling Enjoy all your videos with UHD upscaling. With an advanced video chipset, Standard Definition (SD), High Definition (HD), or Full High Definition (FHD) will be vividly enhanced to 4k resolution which delivers a picture quality that nears the degree of excellence of a UHD display. This display will breathe new life into the colors of your older movies and TV shows",
        "Mobile High-Definition Link (MHL) MHL allow streaming of contents from your compatible smartphone or tablet to Sceptre TV, which capitalize on the visually enhanced picture quality",
        " MEMC 120 With a MEMC 120 (Motion Estimation and Motion Compensation), all action-packed sequences will flow smoothly from frame to frame for the ultimate experience. Enjoy every moment of the auto enhanced picture quality especially for all your favorite sports, video games, and movies packed with action."
      ]
    },
    elemente4sc4018rku : {
      id: 308,
      title: "Element E4SC4018RKU",
      img: "https://i.ibb.co/tDDjBsg/t-8.jpg",
      price: 210,
      company: "Element",
      info: [
        "Built in Roku and WiFi: stream your favorite music, movies and TV shows and access apps like Netflix, Vudu, Pandora",
        "Over-The-Air ATSC/NTSC RF Input Support, Digital/analog Channel Auto Tuning",
        "USB Supports multimedia play, video, audio",
        "Effective Refresh Rate 120Hz | Panel Resolution 3840 x 2160 | Viewing Angle 170° x 170°",
        "HDMI x3 | TV/DTV Analog/Digital TV Tuner x1 | USB x2"
      ]
    },
    rokusmarttv: {
      id: 309,
      title: "Roku Smart TV",
      img: "https://i.ibb.co/HDXsGC0/t-9.jpg",
      price: 999,
      company: "TCL",
      info: [
        "TCL AUTHORIZED DEALER - Includes Full TCL USA WARRANTY ",
        "TCL 75S425 75-inch 4-series 4K Ultra HD Roku Smart TV (2019 Model)",
        "The S-Series 4K TCL Roku TV delivers stunning Ultra HD picture quality with four times the resolution of Full HD for enhanced clarity and detail, as well as the most streaming channels of any 4K TV.",
        "INCLUDED IN THE BOX: TCL 75S425 75-inch 4-series 4K Ultra HD Roku Smart TV (2019 Model) | Warranty Info / Quick Start Guide (QSG) | Remote Control | Remote Control Battery | 1 Year Limited Warranty",
        "BUNDLE INCLUDES: TCL 75S425 75-inch 4-series 4K Ultra HD Roku Smart TV (2019 Model) | Vivitar 37-70-inch Low Profile Wall Mount Kit - Includes 2 HDMI Cables and Screen Cleaning Kit | Deco Gear 2.4GHz Wireless Backlit Keyboard Smart Remote with Touchpad Mouse | SurgePro 6 NT 750 Joule 6-Outlet Surge Adapter with Night Light"
      ]
    },
    classic6series4kuhd: {
      id: 310,
      title: "Class 6 Series 4K UHD",
      img: "https://i.ibb.co/LRbvKSQ/t-10.jpg",
      price: 820,
      company: "TCL",
      info: [
        "QLED color technology delivers better brightness and wide color volume to provide exceptionally vivid and lifelike picture performance.",
        "Smart functionality offers access to thousands of streaming channels featuring more than 500, 000 movies and TV episodes via Roku TV",
        "Pairs 4K Ultra HD picture clarity with the contrast, color, and detail of Dolby Vision high dynamic range (HDR) for the most lifelike picture",
        "LED backlighting with contrast control zones produce deep blacks and excellent picture quality.",
        "Full View design provides a clean, contemporary edge-to-edge glass display that blends seamlessly into your viewing experience",
        "Auto Game Mode automatically enhances performance by offering the smoothest action, lowest latency and the best picture settings for gaming",
        "Inputs: 4 HDMI (one with HDMI ARC), 1 USB (media player), RF, Composite, Headphone Jack, Optical Audio Out, Ethernet"
      ]
    }
  }
  },
  microwave_oven:{
    id: 4,
    title: 'Microwave_Oven',
    routeName: 'oven',
    items: {
      blackcountertop: {
        id: 401,
        title: "Black Countertop",
        img: "https://i.ibb.co/BnftPBM/mo-1.jpg",
        price: 264,
        company: "Whirlpool",
        info:[
          "Fits Easily into corners to Maximize Counter Space",
          "Fits a full Dinner Plate",
          "Add 30 Seconds, Control Lock, Cook Time, Defrost, Popcorn, Reheat",
          "10 - Level Variable Cooking Power Control",
          "0.5 Cu Ft, 750 W Cooking Power"
      ]
    },
    nnsn77hsgeniussensormicrowave: {
      id: 402,
      title: "NN SN77HS Genius Sensor Microwave",
      img: "https://i.ibb.co/cD5g3Qv/mo-2.jpg",
      price: 132,
      company: "Panasonic",
      info:[
        "Patented Inverter Technology delivers a seamless stream of cooking power even at low settings for precise cooking that preserves that flavor and texture of your favorite foods ",
        "1250 Watts of High Power with a 1.6 cubic foot capacity ",
        "Microwave Cyclonic Inverter technology delivers faster - even heating - edges to center",
        "The Defrost technology is an advanced microwave sequencing system using the continuous delivery power feature of the Inverter, allowing you to defrost foods faster",
        "Enjoy faster cooking times with high power and with Genius sensor setting automatically adjusts power and times for different foods"
      ]
    },
    xlfamilystainlesssteelmicrowave: {
      id: 403,
      title: "XL Family Stainless Steel Microwave",
      img: "https://i.ibb.co/G3JHqNk/mo-3.jpg",
      price: 580,
      company: "Sharp",
        info: [
        'Carousel countertop microwave quickly cooks meals for the whole family',
        "16-inch glass turntable allows for even, consistent cooking",
        "Includes 10 different cooking power levels and various cooking presets",
        "Features one-touch controls, auto defrost, and Express mode",
        "Easy-to-read LED display"
      ]
    },
    smd3070asymicrowave: {
      id: 404,
      title: 'SMD3070ASY Microwave',
      img: "https://i.ibb.co/djpgcqj/mo-4.jpg",
      price: 1129,
      company: "Sharp",
        info: [
        "Convenient Placement Options: The SMD3070AS Microwave Drawer allows you to choose a location that works for your lifestyle. Cooking is easier and faster when the Sharp Microwave Drawer Oven is installed adjacent to your food preparation area: in islands, peninsulas or under the counter.",
        "Designed For Your Dream Kitchen: The 30 inch Sharp Microwave Drawer Oven has been designed to complement the widest range of kitchen styles and appliances. The sleek, low-profile design and a stainless-steel finish beautifully complement any kitchen.",
        "Hidden Control Panel: The SMD3070AS Microwave Drawer Oven boasts an easy-to-read display that disappears until you need it. The concealed control panel opens at a 45-degree angle, so it’s easy to read and operate.",
        "Easy Touch Automatic Drawer System: Sharp’s exclusive Easy Touch Automatic Drawer system eases open with a gentle pull or the touch of a button. Give the drawer a small nudge and it smoothly shuts for you. The even, gliding action and solid construction prevents liquids from spilling during opening and closing.",
        "Easier Cooking and Cleanup: The Sharp Microwave Drawer Oven makes cooking and cleaning easier by putting the microwave at an accessible height. Easily lift hot foods from the Drawer. Stir dishes without removing them. And low sides and a virtual Carousel make cleaning a breeze."
      ]
    },
    samsungme19r7041fs: {
      id: 405,
      title: "Samsung ME19R7041FS",
      img: "https://i.ibb.co/vkRqXtD/mo-5.jpg",
      price: 600,
      company: "samsung",
        info: [
        "1.9 Cu.Ft.",
        "10 Power Levels | 1000 Watts",
        "Fingerprint Resistant ",
        "Sensor Cook"
      ]
    },
    ovenbuiltinconvection: {
      id: 406,
      title: "Oven Built In Convection",
      img: "https://i.ibb.co/Y2vqf18/mo-6.jpg",
      price: 780,
      company: "5 in 1 oven",
        info: [
        'TRIM KIT OPTIONS: 24", 27", 30". CUSTOM TRIM KITS AVAILABLE ',
        "BAKE, BROWN, ROAST, GRILL, TOAST & MICROWAVE: The Only Oven in the World that offers all of these Features and Benefits. 5 Ovens in 1. HIGH SPEED: Cooks in half the normal cooking time as a regular gas or electric oven. CONVECTION for great baking for cookies, muffins, brownies, biscuits, cakes etc.",
        "GRILL/BROIL: Fish, Pork Chops, Steak, Hamburgers, Hot Dogs, etc. in half the normal cooking time.",
        "TOAST: Bagels, English Muffins, Sliced Breads, Breakfast Sandwiches & More. MICROWAVE with 1000 watts of power which includes 1 Touch Quick Start . Master Chef has a Commercial Design with no turntable required! Convenient Stainless Steel Drop Down Door"
      ]
    },
    amanacommercialmicrowaveoven: {
      id: 407,
      title: "Amana Commercial Microwave Oven",
      img: "https://i.ibb.co/yNppqrG/mo-7.jpg",
      price: 333,
      company: "Amana",
        info:[
          "1000 watts of power, Perfect replacement for domestic ovens used in foodservice applications",
          "20 programmable menu items simplifies cooking, 5 power levels and 4 cooking stages for cooking flexibility, Multiple quantity pad calculates the proper cooking times for multiple portions",
          "Timer automatically resets to zero if door is opened during heating, 6 minute digital timer lights up for “at-a-glance” monitoring, Full power only for simple operation",
          "See-through door and lighted interior for monitoring without opening the door",
          "Stainless steel exterior wrap, door, and oven interior for increased durability, Sealed-in Borosilicate Glass shelf for easy cleaning "
      ]
    },
    cafecvm521p2ms130inch: {
      id: 408,
      title: "Cafe CVM521P2MS1 30 Inch",
      img: "https://i.ibb.co/7kxgDjZ/mo-8.jpg",
      price: 662,
      company: "Cafe",
      info: [
        "See-through door and lighted interior for monitoring without opening the door",
        "Easier Cooking and Cleanup: The Sharp Microwave Drawer Oven makes cooking and cleaning easier by putting the microwave at an accessible height. Easily lift hot foods from the Drawer. Stir dishes without removing them. And low sides and a virtual Carousel make cleaning a breeze.",
        "Designed For Your Dream Kitchen: The 30 inch Sharp Microwave Drawer Oven has been designed to complement the widest range of kitchen styles and appliances. The sleek, low-profile design and a stainless-steel finish beautifully complement any kitchen.",
        "Hidden Control Panel: The SMD3070AS Microwave Drawer Oven boasts an easy-to-read display that disappears until you need it. The concealed control panel opens at a 45-degree angle, so it’s easy to read and operate.",
        "Easy Touch Automatic Drawer System: Sharp’s exclusive Easy Touch Automatic Drawer system eases open with a gentle pull or the touch of a button. Give the drawer a small nudge and it smoothly shuts for you. The even, gliding action and solid construction prevents liquids from spilling during opening and closing."

      ]
    },
    gejnm3163rjss: {
      id: 409,
      title: "GE JNM3163RJSS",
      img: "https://i.ibb.co/mXjD5Cw/mo-9.jpg",
      price: 572,
      company: "GE",
      info: [
        "Electronic Touch",
        "2-Speed 300-CFM",
        "10 Power Levels",
        "1.6 cu ft",
        "1000.0 W" 
      ]
    },
    halftimebuiltinconvection: {
      id: 410,
      title: 'Half Time Built In Convection',
      img: "https://i.ibb.co/Nym3XMq/mo-10.jpg",
      price: 459,
      company: "5 in 1 oven",
      info: [
        "Half Time Oven, 3 Ovens in 1- Bake/Brown, Roast & even Microwave. High Speed-1600 watts to cook 50% faster than a gas or electric oven.",
        "Convection for great baking for cookies, muffins, brownies, biscuits, cakes etc.",
        "Microwave with 1000 watts of power. Includes Built In Base, Mounted Auxiliary Cooling Fan, Black Trim Kit, Free Shipping + 2 Year Warranty Protection!",
        "3 INSTALLATION OPTIONS: Built in Wall cabinet, Under the Countertop or Island Installation with Companion Cooktop, Slide in with Gas Cooktop ((Sold Separately: Search: MC-300-CTOP) "
      ]
    }
  }
  },
  camera: {
    id: 5,
    title: 'Camera',
    routeName: 'camera',
    items: {
      coolpixw300: {
        id: 501,
        title: "COOLPIX W300",
        img: "https://i.ibb.co/crKxPSy/c-1.jpg",
        price: 429,
        company: "Nikon",
        info:[
          "Bundle Includes Nikon COOLPIX W300 Digital Camera (Black) | 2 x SanDisk 64GB Extreme PRO Memory Cards | 1 x Portable Video LED Light | 1 x Padded Deluxe Carrying Case w/Strap | Travel Charger for EN-EL12| 1 x Cleaning Kit | 2 x BATTERY EN-EL12 | 1 x Floating Strap - Red | 1 x USB Memory Card Reader | 1 x Microfiber Cloth",
          "Nikon AUTHORIZED DEALER: This Nikon W300 Camera Bundle Kit comes complete with all Nikon supplied accessories and a 1-year Nikon USA warranty. Buy with confidence",
          "The Nikon COOLPIX W300 is a waterproof camera that captures 16MP photos and 4K UHD video, features Wi-Fi and Bluetooth Low Energy and is packed with features",
          "3.0 Inch 921k-Dot LCD Monitor | NIKKOR 5x Optical Zoom Lens | Built-in GPS is also available for geotagging your imagery in-camera",
          "Waterproof to 100 Feet. Take it swimming, snorkeling, SCUBA diving, or fishing. Freezeproof to 14�F | Shockproof from up to 7.9 ft. high "
      ]
    },
    eos4000drebelt100: {
      id: 502,
      title: "EOS 4000D Rebel T100",
      img: "https://i.ibb.co/x2QsbYv/c-2.jpg",
      price: 359,
      company: "Canon",
      info: [
        "Digital SLR Camera w/ 18-55MM DC III Lens Kit (Black) with Accessory Bundle, Package Includes: SanDisk 32GB Card + DSLR Bag + 50’’ Tripod + Extreme Electronics Cloth",
        "CAMERA BUNDLE KIT Includes: 32GB Class 10 SDHC UHS-I Memory Card - FLASH - 2.2x Telephoto Lens - 0.43x Wide Angle Lens - Filter Kit 58mm",
        '50" TRIPOD - Case - BLOWER - LENS CAP KEEPER',
        "USB Card Reader- Wrist / Hand Grip Strap - LENS CLEANING PEN - Memory Card Wallet - Microfiber Cleaning Cloth - Extreme Electronics Kit"
      ]
    },
    eufycamewirelesshomesecurity: {
      id: 503,
      title: "eufyCam E Wireless Home Security ",
      img: "https://i.ibb.co/2kkzLwL/c-3.jpg",
      price: 400,
      company: "eufy",
        info: [
          "365-Day battery life: The 100% wire-free and IP65 weatherproof-rated camera is designed to run for 365 days (Or 3 years in standby mode) per charge, indoors and out. eufyCam E (Region a) does not have human detection and facial recognition features.",
          "Full HD surveillance: 1080P resolution, combined with our exceptional night vision technology, ensures video is recorded with crystal-clear quality Both day and night.",
          "No monthly fees: eufyCam E doesn’t require any monthly fees to use, and comes with a 16GB microSD card that stores up to one-year’s worth of recordings. (Single-camera system recording up to ten 30-second long videos per day)",
          "Easy installation: 3 easy ways to install: 1) screw onto the outdoor mount, 2) stick onto the magnetic mount, 3) stick on metallic surfaces",
          "What’s included: 3x eufyCam E, home base station (Region a), 3x magnetic indoor mount, 3x secure outdoor mount, 16GB microSD card (inserted in home base), Ethernet cable, Micro USB charging cable, AC power Adapter, Warning sticker, owner's manual, happy Card" 
      ]
    },
    finepixxp130: {
      id: 504,
      title: 'FinePix XP130',
      img: "https://i.ibb.co/gdN88fx/c-4.jpg",
      price: 160,
      company: "Fujifilm",
        info: [
          "THIS FUJIFILM USA AUTHORIZED BUNDLE CONTAINS: Fujifilm FinePix XP130 Digital Camera (Yellow) + Transcend 64GB SDXC SD Memory Card + Soft Case for XP Cameras + Deluxe Camera Lens Cleaning Kit + Compatible Battery Charger + Compatible Spare Battery + Memory Card Wallet + USB SD Card Reader + Floating Strap - Red + More",
          'VIDEO RECORDING AND MONITOR SIZE: Full HD 1080p Video Recording at 60 fps -- 3.0" 920k-Dot LCD Monitor',
          "35mm EQUIVALENT AND DURABILITY: 28-140mm (35mm Equivalent) -- Waterproof, Shockproof, Freezeproof, and Dustproof",
          "IMAGING AND LENS SPECS: 16.4MP BSI CMOS Sensor -- Fujinon 5x Optical Zoom Lens (2x Digital Zoom)",
          "WIRELESS CONNECTIVITY AND ADDITIONAL FEATURES: Built-In Wi-Fi and Bluetooth LE -- Geotagging Support and Electronic Level" 
      ]
    },
    eosrebelt6dslr: {
      id: 505,
      title: "EOS Rebel T6 DSLR",
      img: "https://i.ibb.co/qFrC3Nq/c-5.jpg",
      price: 599,
      company: "Canon",
        info: [
          "This Canon Camera Bundle comes with Manufacturer Supplied Accessories and One Year Canon USA Warranty.",
          'Canon EOS Rebel T6 DSLR Camera - 18MP APS-C CMOS Sensor - DIGIC 4+ Image Processor - 3.0" 920k-Dot LCD Monitor - Full HD 1080p Video Recording at 30 fps - 9-Point AF with Center Cross-Type Point - Extended ISO 12800, 3 fps Shooting - Built-In Wi-Fi with NFC - Scene Intelligent Auto Mode - Basic+ and Creative Auto Modes',
          'Canon EF-S 18-55mm f/3.5-5.6 IS II Lens is a sleek and flexible option for everyday shooting. Spanning a 28.8-88mm equivalent focal length range, this lens covers wide-angle to portrait-length perspectives + Canon EF 75-300mm f/4-5.6 III Lens',
          '500mm f/8 Telephoto Preset Lens - Designed for photographing distant subjects, the 500mm f/8 Preset Telephoto Lens is a super telephoto prime featuring a threaded T mount for adapting to a wide variety of camera types. Its optical design is fully multi-coated to suppress lens flare, ghosting, and surface reflections for increased contrast and color neutrality when working in strong lighting conditions.',
          'Movavi Professional Video & Photo Editing Software Kit - Compatible with Windows and Mac Operating systems this 5 software package comes with premium softwares to fulfill your Photo/Video/Vlogging Editing needs. The bundle also includes many high quality accessories like SanDisk 32GB SDHC Memory Card, UV Filters, HD CPL Filter, Monopod, T-Mount for 500mm Lens and more.'
      ]
    },
    amcrest4mpultrahdwificamera: {
      id: 506,
      title: "Amcrest 4MP UltraHD WiFi Camera",
      img: "https://i.ibb.co/7VqVCtN/c-6.jpg",
      price: 80,
      company: "Amazon Renewed",
        info: [
          'This Certified Refurbished product is tested and certified to look and work like new. The refurbished process includes functionality testing, basic cleaning, inspection, and repackaging. The product ships with all relevant accessories, a 1 year warranty, and may arrive in a generic box. Only select sellers who maintain high performance bar may offer Certified Refurbished products',
          '4MP DUAL-BAND H.265 – 5ghz/2.4ghz Dualband WiFi IP camera features immaculate 4MP (2688x1520P at 20fps | 3MP and 1080P at 30fps) video with excellent low light capability utilizing the Omnivision OV4659 image sensor and Ambarella S3LM chipset. Cover more ground with super-wide 120° viewing angle and remote pan/tilt and digital zoom. Works with Alexa through AmcrestCloud. Bleeding edge H.265 video compression technology allows smoother video and reduces file sizes and bandwidth consumption.',
          'SMARTER SECURITY – Receive motion alert notifications, review footage and engage in two-way communication via your smartphone with the Amcrest View app. Playback and record professionally on a PC using Amcrest Surveillance Pro for Windows and MAC (included) or Blue Iris Professional. Works with Amcrest Cloud remote video storage, MicroSD, Amcrest NVRs, Synology and QNAP NAS, FTP, Pale Moon (32bit) & SeaMonkey Browser, Safari 11, Firefox 49.0 and Chrome.',
          'LOW LIGHT NIGHTVISION – Features an Omnivision OV4689 1/3” 4MP progressive low-light image sensor and built-in IR LEDs to achieve superior low lux performance and nightvision up to 32 feet. Not all WiFi IP cameras are built the same and our Texas based team with over 10 years of WiFi camera experience has guaranteed the out-performance of this camera by using the highest quality components in order to deliver the ultimate best in class 4MP dual-band pan/tilt WiFi camera experience.',
          'SIMPLE. RELIABLE. SECURE. - This Amcrest Dualband wireless security camera features a secure SSL/HTTPS connection, wireless AES/WPA2 encryption, FCC and CE camera certificate, UL rated power supply and receives regular security firmware updates (Supports both 5ghz/2.4ghz). Operating Temp: 14 °F~113 °F. At Amcrest, we want to ensure the safety of our customers, their loved ones, homes, and businesses and you’ll receive a full 1-year US Warranty and Lifetime Support provided directly from Amcrest'
      ]
    },
    taposmartcampantilt: {
      id: 507,
      title: "Tapo Smart Cam Pan Tilt",
      img: "https://i.ibb.co/m4Tt8HR/c-7.jpg",
      price: 30,
      company: "TP-Link",
        info:[
          'Pan/Tilt - The 360° horizontal range and 114° vertical range allow you to keep an eye on a wider field of view.',
          'High-Definition Video - The C200 captures every detail in crystal-clear 1080p. See what’s happening 24/7 and make sure your kids and house are safe.',
          'Advanced Night Vision - Sleep with peace of mind knowing that Tapo is keeping watch over your home and your little ones even at night. Advanced infrared night vision lets Tapo see in low light conditions up to 30 ft. away.',
          'Motion Detection and Notifications - Protect your family and home by stationing a camera near the entrance of your home, garage, or basement. Get notifications on your phone when your camera detects motion and trigger light and sound alarms to scare away unwanted visistors.',
          'Local Storage - Your recordings are stored locally on a Micro SD card to cut down on expenses like monthly fees for cloud storage. C200 supports up to 128 GB Micro SD cards (384 hours/16 days of footage). (Micro SD card not included)',
          'Two-Way Audio - Check in on your home and pets while you are away. With live two-way audio, you can scare off intruders, talk to your furry friends, and ensure your kids are staying out of trouble.',
          'Sound and Light Alarm System - Trigger sound and light to frighten away unwanted visitors.',
          'Share Every Memorable Moment - Memorable moments are worth sharing, especially with loved ones far away. Send interesting or amusing recorded footage with just a few taps.'
      ]
    },
    a6600mirrorlesscamera4k : {
      id: 508,
      title: "a6600 Mirrorless Camera 4K",
      img: "https://i.ibb.co/PFyjKX1/c-8.jpg",
      price: 1420,
      company: "Sony",
      info: [
        "SONY Authorized Dealer Includes Full SONY USA Warranty",
        "24.2MP APS-C Exmor sensor w/ front end LSI and ISO up to 102,400 | World’s fastest AF at 0.02 sec. w/ Real-time AF & object tracking | 5-axis in-body image stabilization, 5 step shutter speed advantage | Up to 11fps continuous shooting at 24.2MP RAW w/ AF/AE tracking | Wide 425-phase/425-contrast detection AF points over 84% of sensor | Real-time AF Tracking, Real-time Eye AF for human, animal, movie",
        "4K Movie w/ 2.4x oversampling, full pixel readout, no pixel binning | Movie recording with mic. and 180-degree tiltable 3” touchscreen LCD | Enhanced BIONZ X image processing engine w/ front end LSI | XAVC S video, HLG, S-log2&3, slow/quick frame rates, 4:2:2 HDMI out | Interval recording for time-lapse video and S&Q for 1-120fps | Touch screen LCD for touch focus, tracking and shutter | Wi-Fi/NFC/QR code for easy file transfer and remote control | Dust and moisture resistant design",
        "CAMERA INCLUDES: Sony Alpha a6600 Mirrorless Digital Camera Body ILCE-6600B | Rechargeable Battery NP-FZ100 | AC Adaptor AC-UUD12 | Shoulder Strap | Body Cap | Accessory Shoe Cap | Eyepiece Cup | Micro USB Cable | Sony USA Authorized Dealer Warranty",
        'BUNDLE INCLUDES: Sigma 30mm F1.4 DC DN C Contemporary Lens (302965) | Deco Gear Condenser Microphone | Lexar Professional 633x 64GB SDXC Memory Card | Deco Gear Camera Bag Travel Case (Small) | 52mm UV, Polarizer & FLD Filter Kit + Carry Case | 12" Tripod | Dust Blower | Cap Keeper | LCD Screen Protectors | Card Reader | Card Case | Microfiber Cloth | Photo Video Software: Aurora HDR Advanced Editor, Photo Noir, Video Suite, Slideshow Maker, Editor 5, Photo Focus, DeNoise, piZap, OfficeSuite'
      ]
    },
    finepixxp140: {
      id: 509,
      title: "FinePix XP140",
      img: "https://i.ibb.co/995Qns2/c-9.jpg",
      price: 239,
      company: "Fujifilm",
      info: [
        "THIS FUJIFILM USA AUTHORIZED BUNDLE CONTAINS: Fujifilm FinePix XP140 Digital Camera (Sky Blue) + Transcend 64GB SDXC SD Memory Card + Soft Case for XP Cameras + Deluxe Camera Lens Cleaning Kit + Compatible Battery Charger + Compatible Spare Battery + Memory Card Wallet + USB SD Card Reader + Floating Strap - Red + More",
        'VIDEO RECORDING AND MONITOR SIZE: UHD 4K and Full HD Video Recording -- 3.0" 920k-Dot LCD Monitor',
        '35mm EQUIVALENT AND DURABILITY: 28-140mm (35mm Equivalent) -- Waterproof, Shockproof, Freezeproof, and Dustproof',
        'IMAGING AND LENS SPECS: 16.4MP BSI CMOS Sensor -- Fujinon 5x Optical Zoom Lens (2x Digital Zoom)',
        'WIRELESS CONNECTIVITY AND ADDITIONAL FEATURES: Built-In Wi-Fi and Bluetooth LE -- Geotagging Support and Electronic Level'
      ]
    },
    kodakaz521: {
      id: 510,
      title: "Kodak AZ521",
      img: "https://i.ibb.co/7SH5j3R/c-10.jpg",
      price: 140,
      company: "Kodak",
      info: [
        '52x Optical Zoom & 4x Digital Zoom for a total of 208x Zoom, with Optical Image Stabilization.',
        '16.4-megapixel, 1/2.3" CMOS sensor',
        'HD Video recording; up to 1080p',
        '3" LCD Display with 460K dots',
        "What's in the box: Rechargeable lithium-ion battery, AC Adapter, USB Cable, Shoulder Strap, Lens Cap, CD-ROM, User manual." 
      ]
    }
  }
  }
};

export default SHOP_DATA;

// text contents of english and chinese
let languageData = {
    "en": {
        "text": {
            // navbar
            "nav-about": "About",
            "nav-product": "Products",
            "nav-contact": "Contact",
            // language button
            "lang-button": "中文",
            // Banner
            "banner": "Hann Lien Tech. Co.",
            // about
            "about-title": "About",
            "about-p1": "Hann Lien Technology Corporation is a private company that has been trading EPOXY formulated chemicals for various applications since 2000. Our areas of expertise are sales & marketing, logistics and regulatory affairs.",
            "about-p2": "Our services are provided by market oriented teams that have a thorough knowledge of local markets, product applications and industries. We keep local stocks and guarantee continuity of supply.",
            // products & services
            "product-and-service-title": "Products & Services",
            // products
            "product-title": "Products Applications",
            "product-p1": "Trading of epoxy formulation products from NAGASE ChemteX (Tatsuno factory and Wuxi factory) for Heavy Electric industry and Electronic industry.",
            "product-p2": "Trading of UV curing acrylic formulation products for Optical industry and general industry.",
            "product-p3": "We can develop a new product with customer.",
            "product-p4": "For more product information, please contact us.",
            // "product-img1": "ADD TEXT HERE",
            // "product-img2": "ADD TEXT HERE",
            // "product-img3": "ADD TEXT HERE",
            "product-img1": "模鑄式變壓器應用：真空澆注樹脂系統",
            "product-img2": "電機絕緣件應用：APG或真空澆注樹脂系統",
            "product-img3": "比成器＆比流器應用：APG或真空澆注樹脂系統",
            // services
            "service-title": "Agency",
            "service1": "Xiamen Vactec",
            "service2": " vacuum casting equipment",
            "service3": "For detail imformation, please refer to the ",
            "service4": "product catalog",
            "service5": "The feature of vacuum casting equipment:",
            "service6": "Thin film degassing",
            "service7": "Static mixing",
            "service8": "Accurate dosing and mixing by quality ceramic dosing pumps",
            "service9": "Remote online trouble shooting via internet",
            "service10": "Easy to dissemble equipment and maintenance",

            // contact
            "contact-title": "Contact",
            "tel": "Tel: +886-2-2685-3000",
            "fax": "Fax: +886-2-2685-2000",
            "email": "E-mail: js.chung@msa.hinet.net",
            "address": "Address: 4 F., No. 15-5, Changshou St., Shulin Dist., New Taipei City, Taiwan"
        }
    },
    "zh-TW": {
        "text": {
            // navbar
            "nav-about": "關於",
            "nav-product": "產品與服務",
            "nav-contact": "聯絡資訊",
            // language button
            "lang-button": "EN",
            // Banner
            "banner": "瀚 聯 科 技",
            // about
            "about-title": "關於",
            "about-p1": "瀚聯科技於2000年設立，主要從事環氧樹脂配方產品買賣的貿易公司，我們專長於銷售、儲存、運輸及產品之技術服務，對市場、產品行業、應用具有充分的知識及經驗，並提供客戶穩定及持續之供應。",
            "about-p2": "為建立和維護與客戶以及供應商的長期合作關係，瀚聯科技(HLTC)秉持在互信互利的基礎上，與供應商和客戶間建立長期之合作關係，提供高品質的服務以滿足客戶之特別需求和期望。",
            // products & services
            "product-and-service-title": "產品與服務",
            "product-title": "產品應用",
            "product-p1": "代理銷售Nagase ChemteX(日本龍野工廠及中國無錫工廠)的環氧樹脂配方產品，應用於電機行業、電子業。",
            "product-p2": "銷售紫外線固化壓克力樹脂配方產品，用於光電行業及一般工業。",
            "product-p3": "亦可依客戶需求設計符合規格之樹脂產品。",
            "product-p4": "有關產品之詳細資訊，請洽詢本公司。",
            "product-img1": "模鑄式變壓器應用：真空澆注樹脂系統",
            "product-img2": "電機絕緣件應用：APG或真空澆注樹脂系統",
            "product-img3": "比成器＆比流器應用：APG或真空澆注樹脂系統",
            // services
            "service-title": "代理設備",
            "service1": "廈門維克機械設備有限公司",
            "service2": "的真空澆注設備",
            "service3": "詳細資料請見",
            "service4": "產品型錄",
            "service5": "真空澆注設備特點：",
            "service6": "薄膜脫氣",
            "service7": "靜態攪拌",
            "service8": "精準計量監控混合比",
            "service9": "全自動澆注",
            "service10": "拆卸維修方便",
            // contact
            "contact-title": "聯絡資訊",
            "tel": "電話：02-2685-3000",
            "fax": "傳真：02-2685-2000",
            "email": "電子郵件：js.chung@msa.hinet.net",
            "address": "地址：新北市樹林區長壽街15-5號4F"
        }
    }
}

function switchLanguage() {
    var languageButton = document.getElementById("langBtn")
    var lang = languageButton.textContent == "EN" ? "en" : "zh-TW"
    
    // console.log("Switch to " + lang)

    // Update lang attrubute
    document.documentElement.setAttribute("lang", lang);

    // Set banner font size base on the language
    var banner = document.getElementById("banner")
    if (lang == "en") {
        banner.style.fontSize = "100px"
        // langBtn.style.fontSize = "15px"
    } else {
        banner.style.fontSize = "150px"
        // langBtn.style.fontSize = "20px"
    }
    // Set language button font size base on the language
    

    // Change all texts to the specified language
    document.querySelectorAll(`[text-key]`).forEach(element => {
        let key = element.getAttribute('text-key')
        if (key) {
            element.textContent = languageData[lang].text[key]
        }
    })
}
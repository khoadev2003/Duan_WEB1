// Pro duct
let arrProduct = [
    {img: "pants_1.jpg",type: "Pants",name: "Quần nam cao cấp cotton", price: "$ 6,99",
     sold: "Đã bán 1,5k", selling: "Bán chạy", percent: "29%"
    },
    {img: "pants_2.jpg",type: "Pants",name: "Quần nam cao cấp cotton", price: "$ 6,99",
     sold: "Đã bán 520", selling: "Bán chạy", percent: "12%"
    },
    {img: "pants_3.jpg",type: "Pants",name: "Quần nam cao cấp cotton", price: "$ 6,99",
     sold: "Đã bán 1,5k", selling: "Small", percent: "19%"
    },
    {img: "shirt2.jpg",type: "Shirt",name: "Áo polo nam", price: "$ 13,99",
     sold: "Đã bán 2,3k", selling: "Bán chạy", percent: "18%"
    },
    {img: "shirt3.jpg",type: "Shirt",name: "Áo polo nam", price: "$ 13,99",
     sold: "Đã bán 1,5k", selling: "Bán chạy", percent: "23%"
    },
    {img: "shirt4.jfif",type: "Shirt",name: "Áo polo nam", price: "$ 14,99",
     sold: "Đã bán 120", selling: "Yêu thích", percent: "13%"
    },
    {img: "shirt5.jpg",type: "Shirt",name: "Áo polo nam", price: "$ 9,99",
     sold: "Đã bán 1,6k", selling: "Bán chạy", percent: "18%"
    },
    {img: "shirt6.jpg",type: "Shirt",name: "Áo polo nam", price: "$ 13,99",
     sold: "Đã bán 1,6k", selling: "Yêu thích", percent: "13%"
    },
    {img: "pants_4.jpg",type: "Pants",name: "Quần nam cao cấp", price: "$ 23,99",
     sold: "Đã bán 1,6k", selling: "Small", percent: "16%"
    },
    {img: "pants_5.jpg",type: "Pants",name: "Quần nam cao cấp", price: "$ 23,99",
     sold: "Đã bán 1,1k", selling: "Bán chạy", percent: "21%"
    },
    {img: "pants7.jpg",type: "Pants",name: "Quần nam cao cấp", price: "$ 13,99",
     sold: "Đã bán 2,5k", selling: "Yêu thích", percent: "15%"
    },
    {img: "pants_8.jpg",type: "Pants",name: "Quần nam cao cấp", price: "$ 15,99",
     sold: "Đã bán 1,2k", selling: "Small", percent: "13%"
    }

];



document.addEventListener('DOMContentLoaded', () => {
    let strProduct = "";

    arrProduct.forEach(item => {
        strProduct += 
        `<li>
            <div class="product-item">
                <div class="product-top">
                    <a href="" class="product-thumb">
                        <img src="./img/${item.img}" alt="shirt">
                    </a>
                    <a href="cart.html" class="buy-now">Mua ngay</a>
                </div>
                <div class="product-info">
                    <a href="" class="product-cat">${item.type}</a>
                    <a href="" class="product-name">${item.name}</a>
                    <div class="product-price-dad">
                        <div class="product-price">${item.price}</div>
                        <div class="product-sold">${item.sold}</div>
                    </div>

                </div>
                <div class="home-product-item__favourite">
                    <i class="fa-solid fa-check"></i>
                    <span>${item.selling}</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${item.percent}</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </div>
        </li>`;
        
    });
    document.querySelector('#list-Product').innerHTML = strProduct;
});


// List product sale
let arrProductSale = [
    {img: "shirt_sale1.webp",type: "Shirt",name: "Áo thun nam cao cấp", price: "$ 6,99",
     sold: "Đã bán 1,5k", selling: "Sale off", percent: "33%"
    },
    {img: "shirt_sale2.webp",type: "Pants",name: "Áo thun NATGEO", price: "$ 9,99",
     sold: "Đã bán 520", selling: "Sale off", percent: "44%"
    },
    {img: "shirt_sale3.jpg",type: "Pants",name: "Áo thun cotton cổ tròn", price: "$ 12,99",
     sold: "Đã bán 1,5k", selling: "Sale off", percent: "30%"
    },
    {img: "shirt_sale4.webp",type: "Shirt",name: "Áo thun nam có cổ", price: "$ 13,99",
     sold: "Đã bán 2,3k", selling: "Sale off", percent: "38%"
    }

]

document.addEventListener('DOMContentLoaded', () => {
    let strProduct = "";

    arrProductSale.forEach(item => {
        strProduct += 
        `<li>
            <div class="product-item">
                <div class="product-top">
                    <a href="" class="product-thumb">
                        <img src="./img/${item.img}" alt="shirt">
                    </a>
                    <a href="cart.html" class="buy-now">Mua ngay</a>
                </div>
                <div class="product-info">
                    <a href="" class="product-cat">${item.type}</a>
                    <a href="" class="product-name">${item.name}</a>
                    <div class="product-price-dad">
                        <div class="product-price">${item.price}</div>
                        <div class="product-sold">${item.sold}</div>
                    </div>

                </div>
                <div class="home-product-item__favourite">
                    <i class="fa-solid fa-check"></i>
                    <span>${item.selling}</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${item.percent}</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </div>
        </li>`;
        
    });


    document.querySelector('#list-Product-sale').innerHTML = strProduct;
});




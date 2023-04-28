let list = document.querySelectorAll('.carts-list .carts-item')
list.forEach(item => {
    item.addEventListener('click', function(event) {
        if(event.target.classList.contains('add')) {
            var itemNew = item.cloneNode(true);

            // Kiểm tra sản phẩm đã thêm chưa
            let checkIsset = false;
            let listCart = document.querySelectorAll('.list-cart .carts-item')
            listCart.forEach(cart => {
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')) {
                    alert('Sản phẩm đã có trong giỏ hàng');
                    checkIsset = true;
                    cart.classList.add('danger');                   
                 
                    // hiện box-shadow trong 1s
                    setTimout ( function (){
                        cart.classList.remove('danger');                       
                    }, 1000);                   
                    
                }
            })
            
            if(checkIsset == false) {
                document.querySelector('.list-cart').appendChild(itemNew);

            }
            // if(checkIsset == false) {
            //     document.querySelector('.no-cart').style.display = "none";
            //     document.querySelector('.list-cart2').appendChild(itemNew);
            // }          
        }
        
    })
})



// add pay
function Pay(key) {
    let cart = document.querySelector('.add__cart .carts-item[data-key="' + key + '"]');
    if(cart) {
        cart.classList.remove('danger');
        cart.classList.add('pay');
    }
}


// Xóa
// Lấy các item đang có add__cart và xoa ( Không ảnh hưởng đến các item trong -> carts-list)
function Remove($key) {
    let listCart = document.querySelectorAll('.add__cart .carts-item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key) {
            item.remove();
            return;
        }
    })
}





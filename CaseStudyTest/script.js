class Product {
    name;
    img;
    price;
    amount;
    description;
constructor(name,img,price,amount,description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.amount = amount;
    this.description = description
}
    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getImg() {
        return this.img;
    }

    setImg(value) {
        this.img = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(value) {
        this.amount = value;
    }

    getDescription() {
        return this.description;
    }

    setDescription(value) {
        this.description = value;
    }
}

let iphone = new Product('ip13', 'img', '500$', 99, 'mẫu ip mới nhất hiện nay')






let listProduct = ['1', '24', '25', '234', '24']
let newProduct = document.getElementById('new')
displayAll()

//Function hiển thị tất cả sp
function displayAll() {
    let str = '<tr>\n'  +
        '<td>Ảnh</td>\n' + '<td>Tên Sản Phẩm</td>\n' +
        '<td>Giá</td>\n' + '<td>Mô tả</td>\n' + '<td>Option </td>\n'
        '</tr>';


    for (let i = 0; i < listProduct.length; i++) {
        str += '<tr><td>ảnh</td>' + '<td>name</td>' + '<td>giá</td>' + '<td>mô tả</td>' +
            '<td><button onclick="showFormEdit(' + i + ')">Edit</button>' +
            '<button onclick="delProduct(' + i + ')">Delete</button>' +
            '</tr>'
    }
    document.getElementById('displayArea').innerHTML = str
}

//Function thêm sp
function addProduct() {

    listProduct.push(newProduct.value)
    newProduct.value = ''
    displayAll()
}

function delProduct(index) {
    listProduct.splice(index, 1)
    displayAll()
}

function showFormEdit(index) {
    let str = ''
    str = '<input type="text" id="editProduct" value="' + listProduct[index] + '"> <button onclick="save(' + index + ')" >Save</button>';
    document.getElementById('edit').innerHTML = str

    // document.getElementById('editProduct').value = listProduct[index]


}

function save(index) {
    listProduct[index] = document.getElementById('editProduct').value
    document.getElementById('editProduct').value = ''
    document.getElementById('edit').innerHTML = ''
    displayAll()

}

displayAll()
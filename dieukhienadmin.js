// #######  CÁC HÀM PHỤ ĐƯỢC SỬ DỤNG TRONG CHƯƠNG TRÌNH  #### 
function formattien(gia)
{
    var str =String(gia);
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ' ')) + prev 
    })
}
function time() {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Chủ Nhật";
    weekday[1] = "Thứ Hai";
    weekday[2] = "Thứ Ba";
    weekday[3] = "Thứ Tư";
    weekday[4] = "Thứ Năm";
    weekday[5] = "Thứ Sáu";
    weekday[6] = "Thứ Bảy";
    var day = weekday[today.getDay()];
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    nowTime = h + ":" + m + ":" + s;
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = day + ', ' + dd + '/' + mm + '/' + yyyy;
    tmp = '<i class="fa fa-clock-o" aria-hidden="true"></i> <span class="date">' + today + ' | ' + nowTime +
        '</span>';
    document.getElementById("clock").innerHTML = tmp;
    clocktime = setTimeout("time()", "1000", "Javascript");
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
}
function laytg()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var tg='';
    tg+= dd+'/'+mm+'/'+yyyy;
    return tg;
}
function luutrang(n){
    var thientai;
    if(n==null)
    {
        thientai=JSON.parse(localStorage.getItem('thientai'));
    }
    else (thientai=n);
    if (thientai==null || thientai==1)
    {
        thientai=1;
        hientrangsanpham();
        hiensp();
    }
    if (thientai==2){
        hientrangdonhang();
        hiendonhang();
    }
    if(thientai==3){
        hientrangthongke();
        hienspbanchay();
        hientongdonhang();
        hiensanphamdahet();
        hiendonhangdahuy();
    }
    if(thientai==4){
        trangquanlyuser();
        hienuser();
    }
    localStorage.setItem("thientai",thientai);
}
function xacnhan()
{
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        hientrangsanpham();hiensp();
    } 
    else {
        return 0;
    }
}
window.onload=luutrang(),time();

// #####  KẾT THÚC CÁC HÀM PHỤ ĐƯỢC SỬ DỤNG TRONG CHƯƠNG TRÌNH #######

//------TRANG QUẢN LÝ SẢN PHẨM----------
function hientrangsanpham()
{
    var trangsanpham= `<div id="themsp"></div> <p class="timkiemsanpham"><b>TÌM KIẾM SẢN PHẨM:</b></p>
    <input type="text" id="myInput" onkeyup="timkiemxe()" placeholder="Nhập tên sản phẩm cần tìm...">
    <i class="fa fa-search" onclick="timkiemxe()" aria-hidden="true"></i>
    <button onclick="hientrangthemsanpham()">Thêm sản phẩm</button>
    <table class="table table-hover table-bordered table-san-pham" id="sampleTable">
    <thead>
        <tr>
                <th>Mã sản phẩm</th>
                <th>Tên sản phẩm</th>
                <th>Ảnh</th>
                <th>Nhãn hiệu</th>
                <th>Số lượng</th>
                <th>Giá tiền</th>
                <th>Chức năng</th>
            </tr>
        </thead>
        <tbody id="sanpham">
        </tbody>
    </table>
</div>`;
    document.getElementById('thaydoi').innerHTML=trangsanpham;
}
function hiensp(){
    var sp='';
    var cars=JSON.parse(localStorage.getItem('cars'));
    for(var i=0;i<cars.length;i++) {
        sp += '<tr>\
        <td>'+cars[i].IDxe+'</td>\
        <td>'+cars[i].tenxe +'</td>\
        <td><img src="'+cars[i].img+'" alt="" width="100px;"></td>\
        <td>'+cars[i].brand+'</td>\
        <td>'+cars[i].soluong+'</td>\
        <td>'+formattien(cars[i].gia) +' VNĐ</td>\
        <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"\
                onclick="xoasanpham('+cars[i].IDxe+')")"><i class="fas fa-trash-alt"></i>\
            </button>\
            <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" onclick="trangchinhsua('+cars[i].IDxe+')" id="show-emp"\
                data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i></button>\
        </td>\
    </tr>';
    }
    document.getElementById('sanpham').innerHTML = sp;
}
function hientrangthemsanpham(){
    var trangthemsp= '<div class="form-them-sp">\
        <div class="row1">\
            <h3 class="tile-title">Tạo mới sản phẩm</h3>\
        </div>\
        <div class="chia-hang">\
            <div class="form-group col-md-3">\
                <label class="control-label">Tên xe</label>\
                <input id ="tenxe" class="form-control" type="text">\
            </div>\
            <div class="form-group col-md-3">\
                <label class="control-label">Nhãn hiệu </label>\
                <input id="brand" class="form-control" type="text" placeholder="">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Màu sắc</label>\
                <input id="mausac" class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Xuất xứ</label>\
                <input id="xuatxu" class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Trọng tải</label>\
                <input id="trongtai" class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Nhiên liệu</label>\
                <input id="nhienlieu"class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Hình ảnh</label>\
                <input id="img" class="form-control" type="file" accept="image/png, image/jpeg" >\
            </div>\
        </div>\
        <div class="chia-hang">\
            <div class="form-group col-md-3">\
                <label class="control-label">Năm sản xuất </label>\
                <input id="namsanxuat" class="form-control" type="number" placeholder="">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Tình trạng</label>\
                <input id="tinhtrang" class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Số km đã đi</label>\
                <input id="sokmdadi" class="form-control" type="number">\
            </div>\
            <div class="form-group col-md-3">\
                <label class="control-label">Số lượng</label>\
                <input id="soluong" class="form-control" type="number">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Giá tiền</label>\
                <input id="gia" class="form-control" type="number">\
            </div>\
        </div>\
        <div class="button-chinh-sua">\
            <button class="btn btn-save" onclick="themxe()" type="button">Lưu lại</button>\
            <a class="btn btn-cancel" onclick="xacnhan()" href="#">Hủy bỏ</a>\
        </div>\
    </div>';
    document.getElementById('themsp').innerHTML=trangthemsp;
}
function themxe(){
    var cars = JSON.parse(localStorage.getItem('cars'));
    let IDxe=cars[cars.length-1].IDxe;IDxe++;
    let tenxe = document.getElementById('tenxe').value;
    let brand = document.getElementById('brand').value;
    let mausac= document.getElementById('mausac').value;
    let xuatxu = document.getElementById('xuatxu').value;
    let trongtai= document.getElementById('trongtai').value;
    let nhienlieu= document.getElementById('nhienlieu').value;
    let namsanxuat= document.getElementById('namsanxuat').value;
    let tinhtrang= document.getElementById('tinhtrang').value;
    let sokmdadi= document.getElementById('sokmdadi').value;

    const fileUploader = document.getElementById('img');
    const files = fileUploader.files;
    let img
    if(files!=null){
        img ='./img/'+files[0].name;
    }
    let soluong = document.getElementById('soluong').value;
    let gia = document.getElementById('gia').value;
    if(tenxe=='' ||brand=='' || mausac=='' || xuatxu=='' ||trongtai==''||img=='' || nhienlieu==''|| namsanxuat=='' || tinhtrang==''||sokmdadi=='' ||soluong==''||gia=='')
    {
        alert("Bạn chưa nhập đầy đủ thông tin");
    }
    else{
        var car = {IDxe,tenxe, brand, img, soluong, gia };
        cars.push(car);
        var chitiets = JSON.parse(localStorage.getItem('chitiets'));
        var chitiet={IDxe,mausac,xuatxu,trongtai,namsanxuat,tinhtrang,nhienlieu,sokmdadi}; 
        chitiets.push(chitiet);
        localStorage.setItem('cars', JSON.stringify(cars));
        localStorage.setItem('chitiets', JSON.stringify(chitiets));
        location.reload();
    }
}
function xoasanpham(IDxe)
{
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        alert("Xóa sản phẩm thành công");
        var cars =JSON.parse(localStorage.getItem('cars'));
        for(var i=0;i<cars.length;i++){
            if(cars[i].IDxe==IDxe)
                {
                    cars.splice(i,1);
                }
        }
        localStorage.setItem('cars', JSON.stringify(cars));
        location.reload();
    } 
    else {
        alert("Xóa sản phẩm thất bại");
        location.reload();
    }
    
}
function chinhsuasp(IDxe){
    var cars =JSON.parse(localStorage.getItem('cars'));
    var chitiets=JSON.parse(localStorage.getItem('chitiets'));
    var h,k;
    for(h=0;h<cars.length;h++)
    {
        if(cars[h].IDxe==IDxe)
        {
            break;
        }
    }
    for(k=0;k<chitiets.length;k++)
    {
        if(chitiets[k].IDxe==IDxe)
        {
            break;
        }
    }
    cars[h].tenxe = document.getElementById('tenxe').value;
    cars[h].brand = document.getElementById('brand').value;
    chitiets[k].mausac= document.getElementById('mausac').value;
    chitiets[k].xuatxu = document.getElementById('xuatxu').value;
    chitiets[k].trongtai= document.getElementById('trongtai').value;
    chitiets[k].nhienlieu= document.getElementById('nhienlieu').value;
    chitiets[k].namsanxuat= document.getElementById('namsanxuat').value;
    chitiets[k].tinhtrang= document.getElementById('tinhtrang').value;
    chitiets[k].sokmdadi= document.getElementById('sokmdadi').value;

    const fileUploader = document.getElementById('img');
    const files = fileUploader.files;
    if(files!=null){
        cars[h].img ='./img/'+files[0].name;
    }
    

    cars[h].soluong = document.getElementById('soluong').value;
    cars[h].gia = document.getElementById('gia').value;
    if(tenxe=='' ||brand=='' || mausac=='' || xuatxu=='' ||trongtai==''||img=='' || nhienlieu==''|| namsanxuat=='' || tinhtrang==''||sokmdadi=='' ||soluong==''||gia=='')
    {
        alert("Bạn chưa nhập đầy đủ thông tin");
    }
    else{
        localStorage.setItem('cars',JSON.stringify(cars));
        localStorage.setItem('chitiets', JSON.stringify(chitiets));
        location.reload();
    }
    

}
function trangchinhsua(IDxe)
{
    var cars =JSON.parse(localStorage.getItem('cars'));
    var chitiets=JSON.parse(localStorage.getItem('chitiets'));
    var h,k;
    for(h=0;h<cars.length;h++)
    {
        if(cars[h].IDxe==IDxe)
        {
            break;
        }
    }
    for(k=0;k<chitiets.length;k++)
    {
        if(chitiets[k].IDxe==IDxe)
        {
            break;
        }

    }
    var trangchinhsua= '<div class="form-them-sp">\
        <div class="row1">\
            <h3 class="tile-title">Chỉnh sửa sản phẩm</h3>\
        </div>\
        <div class="chia-hang">\
            <div class="form-group col-md-3">\
                <label class="control-label">Tên xe</label>\
                <input id ="tenxe" value="'+cars[h].tenxe+'" class="form-control" type="text">\
            </div>\
            <div class="form-group col-md-3">\
                <label class="control-label">Nhãn hiệu </label>\
                <input id="brand"  class="form-control" value="'+cars[h].brand+'"type="text" placeholder="">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Màu sắc</label>\
                <input id="mausac" value="'+chitiets[k].mausac+'"class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Xuất xứ</label>\
                <input id="xuatxu" value="'+chitiets[k].xuatxu+' "class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Trọng tải</label>\
                <input id="trongtai" value="'+chitiets[k].trongtai+' "class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Nhiên liệu</label>\
                <input value="'+chitiets[k].nhienlieu+'" id="nhienlieu"class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Hình ảnh</label>\
                <input id="img"class="form-control" ="'+cars[h].img+' " type="file" accept="image/png, image/jpeg" >\
                <button onclick="xoahinhanh()">Xóa hình ảnh</button>\
            </div>\
        </div>\
        <div class="chia-hang">\
            <div class="form-group col-md-3">\
                <label class="control-label">Năm sản xuất </label>\
                <input value="'+chitiets[k].namsanxuat+'" id="namsanxuat"  class="form-control" type="number" placeholder="">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Tình trạng</label>\
                <input value="'+chitiets[k].tinhtrang+'" id="tinhtrang" class="form-control" type="text">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Số km đã đi</label>\
                <input value="'+chitiets[k].sokmdadi+'" id="sokmdadi" class="form-control" type="text">\
            </div>\
            <div class="form-group col-md-3">\
                <label class="control-label">Số lượng</label>\
                <input value="'+cars[h].soluong+'" id="soluong" class="form-control" type="number">\
            </div>\
            <div class="form-group  col-md-3">\
                <label class="control-label">Giá tiền</label>\
                <input value="'+cars[h].gia+'" id="gia" class="form-control" type="number">\
            </div>\
        </div>\
        <div class="button-chinh-sua">\
            <button class="btn btn-save" onclick="chinhsuasp('+IDxe+')" type="button">Lưu lại</button>\
            <a class="btn btn-cancel" onclick="xacnhan()" href="#">Hủy bỏ</a>\
        </div>\
    </div>';
    document.getElementById('themsp').innerHTML=trangchinhsua;
}
function timkiemxe()
{
    var cars=JSON.parse(localStorage.getItem('cars'));
    var tenxe = document.getElementById('myInput').value;
    var sp='';
    for(var i=0;i<cars.length;i++) {
        if(cars[i].tenxe.includes(tenxe))
        {
            sp += '<tr>\
            <td>'+cars[i].IDxe+'</td>\
            <td>'+cars[i].tenxe +'</td>\
            <td><img src="'+cars[i].img+'" alt="" width="100px;"></td>\
            <td>'+cars[i].brand+'</td>\
            <td>'+cars[i].soluong+'</td>\
            <td>'+formattien(cars[i].gia) +' VNĐ</td>\
            <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"\
                    onclick="xoasanpham('+cars[i].IDxe+')")"><i class="fas fa-trash-alt"></i>\
                </button>\
                <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" onclick="trangchinhsua('+cars[i].IDxe+')" id="show-emp"\
                    data-toggle="modal" data-target="#ModalUP"><i class="fas fa-edit"></i></button>\
            </td>\
        </tr>';
        }
    }
    document.getElementById('sanpham').innerHTML = sp;
    
}
// ---- KẾT THÚC THAO TÁC VỚI TRANG QUẢN LÝ SẢN PHẨM --------

// ---- THAO TÁC QUẢN LÝ USER -----------
function trangquanlyuser()
{
    var trangusers=`
    <table class="table table-hover table-bordered table-san-pham" id="sampleTable">
    <thead>
        <tr>
                <th>ID Users</th>
                <th>Tên người dùng</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Mật khẩu</th>
                <th>Chức năng</th> 
            </tr>
        </thead>
        <tbody id="nguoidung">
        </tbody>
    </table>
</div>`;
    document.getElementById('thaydoi').innerHTML=trangusers;
}
function hienuser(){
    var nd='';
    var users=JSON.parse(localStorage.getItem('users'));
    for(var i=0;i<users.length;i++) {
        nd += '<tr>\
        <td>'+users[i].IDuser+'</td>\
        <td>'+users[i].hoten +'</td>\
        <td>'+users[i].email+'</td>\
        <td>'+users[i].sodth+'</td>\
        <td>'+users[i].diachi+'</td>\
        <td>'+users[i].matkhau+'</td>\
        <td><button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="xoauser('+users[i].IDuser+')")">\
            <i class="fas fa-trash-alt"></i>\
            </button>\
        </td>\
    </tr>';
    }
    document.getElementById('nguoidung').innerHTML = nd;
}
function xoauser(IDuser){
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        alert("Xóa thành công");
        var users = JSON.parse(localStorage.getItem('users'));
        var i;
        for(i=0;i<users.length;i++){
            if(users[i].IDuser == IDuser)
            {
                users.splice(i,1);
            }
        }
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    } 
    else {
        alert("Chưa xóa");
        location.reload();
    }

}
// ---  KẾT THÚC TRANG QUẢN LÝ USERS -------

// ---- THAO TÁC VỚI TRANG QUẢN LÝ ĐƠN HÀNG ----------
function hientrangdonhang(){
    var trangdonhang ='<div id="trangchinhsuadh"></div>\
    <table class="table table-hover table-bordered table-don-hang" id="sampleTable">\
        <thead>\
            <tr>\
                <th>ID đơn hàng</th>\
                <th>Khách hàng</th>\
                <th>Đơn hàng</th>\
                <th>Số lượng</th>\
                <th>Tổng tiền</th>\
                <th>Tình trạng</th>\
                <th>Tính năng</th>\
            </tr>\
        </thead>\
        <tbody id="spdonhang">\
        </tbody>\
    </table>'
    document.getElementById('thaydoi').innerHTML= trangdonhang;
}
function hiendonhang()
{
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    var cars=JSON.parse(localStorage.getItem('cars'));
    var users=JSON.parse(localStorage.getItem('users'));
    var hiendh='';
    var i;
    for(i=0;i<donhangs.length;i++)
    {
        var j;
        if(donhangs[i].tinhtrang==1)
        {
            var k;
            for(k=0;k<users.length;k++)
            {
                if(donhangs[i].IDuser==users[k].IDuser)
                {
                    break;
                }
            }
            for(j=0;j<cars.length;j++)
            {
                if(cars[j].IDxe==donhangs[i].IDxe)
                {
                    break;
                }
            }
            hiendh+=' <tr>\
            <td>'+donhangs[i].IDdh+'</td>\
            <td>'+users[k].hoten+'</td>\
            <td>'+cars[j].tenxe+'</td>\
            <td>'+donhangs[i].soluong+'</td>\
            <td>'+formattien(donhangs[i].sotien)+' VNĐ</td>\
            <td><span class="badge bg-success">Chờ xác nhận</span></td>\
            <td><button class="btn btn-primary btn-sm trash" onclick="huydonhang('+donhangs[i].IDdh+')" type="button" title="Hủy đơn"><i\
                        class="fas fa-trash-alt"></i> </button>\
                <button class="btn btn-primary btn-sm edit" type="button" onclick="hientrangchinhsua('+donhangs[i].IDdh+')" title="Chỉnh sửa"><i\
                        class="fa fa-edit"></i></button>\
                        <button onclick="xacnhandonhang('+donhangs[i].IDdh+')"type="button" class="btn btn-success">Xác nhận</button>\
            </td>\
        </tr>';
        }
    }
    document.getElementById('spdonhang').innerHTML=hiendh;
}
function xoadonhang(IDdh)
{
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        alert("Xóa đơn hàng thành công");
        var cars =JSON.parse(localStorage.getItem('cars'));
        var donhangs = document.getElementById('donhangs');
        for (var i=0;i<donhangs.length;i++)
        {
            if (donhangs[i].IDdh==IDdh)
            {
                for(var j=0;j<cars.length;j++)
                {
                    if (cars[j].IDxe=donhangs[i].IDxe)
                    {
                        cars[j].soluong-=donhangs[i].soluong*1;
                    }
                }
                donhangs.splice(i,1);
            }
        }
        localStorage.setItem('donhangs',JSON.stringify(donhangs));
        location.reload();
    } 
    else {
        alert("Xóa đơn hàng thất bại");
        location.reload();
    }
    
}
function xacnhandonhang(IDdh){
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        alert("Xác nhận đơn hàng thành công");
        var donhangs = JSON.parse(localStorage.getItem('donhangs'));
        for (var i=0;i<donhangs.length;i++)
        {
            if (donhangs[i].IDdh==IDdh)
            {
                donhangs[i].tinhtrang = 2;
                break;
            }
        }
        localStorage.setItem('donhangs',JSON.stringify(donhangs));
        location.reload();
    } 
    else {
        alert("Xác nhận đơn hàng thất bại");
        location.reload();
    }
   
}
function hientrangchinhsua(IDdh){
    var donhangs =JSON.parse(localStorage.getItem('donhangs'));
     var i,j,k;
     for(i=0;i<donhangs.length;i++){
         if(donhangs[i].IDdh==IDdh){
             break;
         }
     }
     var trangchinhsuadh= '<div class="form-them-sp">\
         <div class="row1">\
             <h3 class="tile-title">Chỉnh sửa đơn hàng</h3>\
         </div>\
         <div class="chia-hang">\
             <div class="form-group col-md-3">\
                 <label class="control-label">Số lượng </label>\
                 <input id="soluong" value="'+donhangs[i].soluong+' "class="form-control" type="text" placeholder="">\
             </div>\
         </div>\
         <div class="button-chinh-sua">\
             <button class="btn btn-save" onclick="chinhsuadh('+IDdh+')" type="button">Lưu lại</button>\
             <a class="btn btn-cancel" onclick="hientrangdonhang(),hiendonhang()" href="#">Hủy bỏ</a>\
         </div>\
     </div>';
     document.getElementById('trangchinhsuadh').innerHTML=trangchinhsuadh;
}
 function chinhsuadh(IDdh){
     var donhangs=JSON.parse(localStorage.getItem('donhangs'));
     var i;
     for(i=0;i<donhangs.length;i++){
         if(donhangs[i].IDdh==IDdh)
         {
             break;
         }
     }
     donhangs[i].soluong=document.getElementById('soluong').value;
     localStorage.setItem('donhangs',JSON.stringify('donhangs'));
     location.reload();
}
 function huydonhang(IDdh)
 {
     if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
         alert("Hủy đơn hàng thành công");
         var  donhangs =JSON.parse(localStorage.getItem('donhangs'));
         var cars=JSON.parse(localStorage.getItem('cars'));
         var dhhuys=JSON.parse(localStorage.getItem('dhhuy'));
         var dhhuy=[];
         for(var i=0;i< donhangs.length;i++){
             if(donhangs[i].IDdh==IDdh)
                 {
                     for(var j=0;j< cars.length;j++){
                         if(cars[j].IDxe==donhangs[i].IDxe)
                         {
                             cars[j].soluong+=donhangs[i].soluong;
                         }
                     }
                     donhangs[i].tinhtrang=3;
                     var IDdh=donhangs[i].IDdh;
                     var tg=laytg();
                     var dhhuy={IDdh,tg};
                     dhhuys.push(dhhuy);
                 }
         }
         localStorage.setItem("dhhuys",JSON.stringify(dhhuys));
         localStorage.setItem('donhangs', JSON.stringify(donhangs));
         localStorage.setItem('cars', JSON.stringify(cars));
         location.reload();
     } 
     else {
         alert("Hủy đơn hàng thất bại");
         location.reload();
     }
    
}
// ----- KẾT THÚC THAO TÁC QUẢN LÝ ĐƠN HÀNG ------

// ---------   THAO TÁC VỚI TRANG THỐNG KÊ -----------
function hientrangthongke()
{
    var cars =JSON.parse(localStorage.getItem('cars'));
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    let tongsp=0;
    let sphethang=0;
    for(var i=0;i<cars.length;i++)
    {
        tongsp+=cars[i].soluong*1;
        if(cars[i].soluong==0)
        {
            sphethang++;
        }
    }
    var donhuy=0;
    var banchay=0;
    var tongthunhap=0;
    var tongdonhang=0;
    for(var i=0;i<donhangs.length;i++)
    {
        if(donhangs[i].soluong>5)
        {
            banchay++;
        }
        if(donhangs[i].tinhtrang==2)
        {
            tongthunhap+=donhangs[i].sotien;
            tongdonhang++;
        }   
        if(donhangs[i].tinhtrang==3)
        {
            donhuy++;
        }   
    }
    var trangthongke= '<div class="row">\
    <div class="col-md-12">\
        <div class="app-title">\
            <ul class="app-breadcrumb breadcrumb">\
                <li class="breadcrumb-item"><a href="#"><b>THỐNG KÊ CỦA CỬA HÀNG</b></a></li>\
            </ul>\
            <div id="clock"></div>\
        </div>\
    </div>\
</div>\
<div class="row">\
    <div class="col-md-6 col-lg-3">\
        <div class="widget-small info coloured-icon"><i class="icon bx bxs-purchase-tag-alt fa-3x"></i>\
            <div class="info">\
                <h4>Tổng sản phẩm</h4>\
                <p><b>'+tongsp+' Sản phẩm</b></p>\
            </div>\
        </div>\
    </div>\
    <div class="col-md-6 col-lg-3">\
        <div class="widget-small warning coloured-icon"><i class="icon fa-3x bx bxs-shopping-bag-alt"></i>\
            <div class="info">\
                <h4>Tổng đơn hàng</h4>\
                <p><b>'+tongdonhang+' Đơn hàng</b></p>\
            </div>\
        </div>\
    </div>\
    <div class="col-md-6 col-lg-3">\
        <div class="widget-small danger coloured-icon"><i class="icon fa-3x bx bxs-info-circle"></i>\
            <div class="info">\
                <h4>Sản phẩm bán chạy</h4>\
                <p><b>'+banchay+' Sản phẩm</b></p>\
            </div>\
        </div>\
    </div>\
</div>\
<div class="row">\
    <div class="col-md-6 col-lg-3">\
        <div class="widget-small primary coloured-icon"><i class="icon fa-3x bx bxs-chart"></i>\
            <div class="info">\
                <h4>Tổng thu nhập</h4>\
                <p><b>'+formattien(tongthunhap)+' VNĐ</b></p>\
            </div>\
        </div>\
    </div>\
    <div class="col-md-6 col-lg-3">\
        <div class="widget-small warning coloured-icon"><i class="icon fa-3x bx bxs-tag-x"></i>\
            <div class="info">\
                <h4>Hết hàng</h4>\
                <p><b>'+sphethang+' Sản phẩm</b></p>\
            </div>\
        </div>\
    </div>\
    <div class="col-md-6 col-lg-3">\
        <div class="widget-small danger coloured-icon"><i class="icon fa-3x bx bxs-receipt"></i>\
            <div class="info">\
                <h4>Đơn hàng hủy</h4>\
                <p><b>'+donhuy+' Đơn hàng</b></p>\
            </div>\
        </div>\
    </div>\
</div>\
<div class="row">\
            <div class="col-md-12">\
                <div class="tile">\
                    <div>\
                        <h3 class="tile-title">SẢN PHẨM BÁN CHẠY</h3>\
                    </div>\
                    <div class="tile-body">\
                        <table class="table table-hover table-bordered" id="sampleTable">\
                            <thead>\
                                <tr>\
                                    <th>Mã sản phẩm</th>\
                                    <th>Tên sản phẩm</th>\
                                    <th>Giá tiền</th>\
                                    <th>Số lượng đã bán</th>\
                                    <th>Thương hiệu</th>\
                                </tr>\
                            </thead>\
                            <tbody id="spbanchay">\
                            </tbody>\
                        </table>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-md-12">\
                <div class="tile">\
                    <div>\
                        <h3 class="tile-title">TỔNG ĐƠN HÀNG</h3>\
                    </div>\
                    <div class="tile-body">\
                        <table class="table table-hover table-bordered" id="sampleTable">\
                            <thead>\
                                <tr>\
                                    <th>ID đơn hàng</th>\
                                    <th>Khách hàng</th>\
                                    <th>Tên sản phẩm</th>\
                                    <th>Số lượng</th>\
                                    <th>Tổng tiền</th>\
                                </tr>\
                            </thead>\
                            <tbody id="tongcacdonhang">\
                            </tbody>\
                        </table>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-md-12">\
                <div class="tile">\
                    <div>\
                        <h3 class="tile-title">SẢN PHẨM ĐÃ HẾT</h3>\
                    </div>\
                    <div class="tile-body">\
                        <table class="table table-hover table-bordered" id="sampleTable">\
                            <thead>\
                                <tr>\
                                    <th>Mã sản phẩm</th>\
                                    <th>Tên sản phẩm</th>\
                                    <th>Số lượng</th>\
                                    <th>Tình trạng</th>\
                                    <th>Giá tiền</th>\
                                </tr>\
                            </thead>\
                            <tbody id="sanphamdahet">\
                            </tbody>\
                        </table>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-md-12">\
                <div class="tile">\
                    <div>\
                        <h3 class="tile-title">ĐƠN HÀNG ĐÃ HỦY</h3>\
                    </div>\
                    <div class="tile-body">\
                        <table class="table table-hover table-bordered" id="sampleTable">\
                            <thead>\
                                <tr>\
                                    <th>Mã đơn</th>\
                                    <th>Mã sản phẩm</th>\
                                    <th>Tên sản phẩm</th>\
                                    <th>Khách hàng</th>\
                                    <th>Ngày hủy</th>\
                                </tr>\
                            </thead>\
                            <tbody id="donhangdahuy">\
                            </tbody>\
                        </table>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-md-12">\
                <div class="tile">\
                </div>\
            </div>\
        </div>\
        <div class="row">\
            <div class="col-md-6">\
                <div class="tile">\
                    <h3 class="tile-title">DỮ LIỆU HÀNG THÁNG</h3>\
                    <div class="embed-responsive embed-responsive-16by9">\
                        <canvas class="embed-responsive-item" id="lineChartDemo"></canvas>\
                    </div>\
                </div>\
            </div>\
            <div class="col-md-6">\
                <div class="tile">\
                    <h3 class="tile-title">THỐNG KÊ DOANH SỐ</h3>\
                    <div class="embed-responsive embed-responsive-16by9">\
                        <canvas class="embed-responsive-item" id="barChartDemo"></canvas>\
                    </div>\
                </div>\
            </div>\
        </div>'
document.getElementById('thaydoi').innerHTML= trangthongke;
}
function hienspbanchay()
{
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    var cars =JSON.parse(localStorage.getItem('cars'));
    var cacspbanchay='';
    for(var i=0;i<donhangs.length;i++)
    {
        var j;
        if(donhangs[i].soluong>5)
        {
            for(j=0;j<cars.length;j++)
            {
                if(cars[j].IDxe=donhangs[i].IDxe)
                {
                    break;
                }
            }
            cacspbanchay+='<tr>\
            <td>'+donhangs[i].IDxe+'</td>\
            <td>'+cars[j].tenxe+'</td>\
            <td>'+formattien(cars[j].gia)+' VNĐ</td>\
            <td>'+donhangs[i].soluong+'</td>\
            <td>'+cars[j].brand+'</td>\
        </tr>'
        }
    }
    document.getElementById('spbanchay').innerHTML=cacspbanchay;
}
function hientongdonhang()
{
    var cars=JSON.parse(localStorage.getItem('cars'));
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    var users=JSON.parse(localStorage.getItem('users'));
    var sptongdh='';
    var tongtien=0;
    for(var i=0;i<donhangs.length;i++){
        var j;
        var k;
        if(donhangs[i].tinhtrang!=2)
        {
            continue;
        }
        for(k=0;k<users.length;k++){
            if(donhangs[i].IDuser==users[k].IDuser)
            {
                break;
            }
        }
        for(j=0;j<cars.length;j++){
            if(cars[j].IDxe==donhangs[i].IDxe)
            {
                break;
            }
        }
        sptongdh+='<tr>\
        <td>'+donhangs[i].IDdh+'</td>\
        <td>'+users[k].hoten+'</td>\
        <td>'+cars[j].tenxe+'</td>\
        <td>'+donhangs[i].soluong+' Sản phẩm</td>\
        <td>'+formattien(donhangs[i].sotien)+' VNĐ</td>\
    </tr>';
    tongtien+=donhangs[i].sotien;
    }
        sptongdh+='<tr>\
            <th colspan="4">Tổng cộng:</th>\
            <td>'+formattien(tongtien)+' VNĐ</td>\
        </tr>';
    document.getElementById('tongcacdonhang').innerHTML=sptongdh;
}
function hiensanphamdahet(){
    var cars =JSON.parse(localStorage.getItem('cars'));
    var spdahet='';
    for(var i=0;i<cars.length;i++)
    {
        if(cars[i].soluong==0)
        {
            spdahet +='<tr>\
            <td>'+cars[i].IDxe+'</td>\
            <td>'+cars[i].tenxe+'</td>\
            <td>0</td>\
            <td><span class="badge bg-danger">Hết hàng</span></td>\
            <td>'+cars[i].gia+' VNĐ</td>\
        </tr>';
        }
    }
    document.getElementById('sanphamdahet').innerHTML = spdahet;   
}
function hiendonhangdahuy() 
{
    var donhangs = JSON.parse(localStorage.getItem('donhangs'));
    var cars=JSON.parse(localStorage.getItem('cars'));
    var dhhuys=JSON.parse(localStorage.getItem('dhhuys'));
    var donhanghuy='';
    for (var i=0;i<donhangs.length;i++)
    {
        var j;
        if(donhangs[i].tinhtrang==3)
        {
            for(j=0;j<cars.length;j++)
            {
                if(cars[j].IDxe==donhangs[i].IDxe)
                {
                    break;
                }
            }
            var k;
            for(k=0;k<dhhuys.length;k++)
            {
                if(donhangs[i].IDdh==dhhuys[k].IDdh)
                    break;
            }
            donhanghuy+=' <tr>\
        <td>'+donhangs[i].IDdh+'</td>\
        <td>'+donhangs[i].IDxe+'</td>\
        <td>'+cars[j].tenxe+'</td>\
        <td>Cao Bảo Quỳnh</td>\
        <td>'+dhhuys[k].tg+'</td>\
    </tr>';
        } 
    }    
    document.getElementById('donhangdahuy').innerHTML=donhanghuy;
}
//  ---- KẾT THÚC THAO TÁC VỚI TRANG THỐNG KÊ -----



function tat()
{
    document.getElementById('popup').innerHTML='';
}
function hientrangchu()
{
    var trangchu=`<div style="width: 100%"><div style="width: 100%;height:100% margin: 10px 0px 50px 0px ;">
    <div style="width: 100%; height: 100%  ;position: relative;;">
        <div class="slide fade"><img src="./img/ss1.jpg"></div>
        <div class="slide fade"><img src="./img/ss2.jpg"></div>
        <div class="slide fade"><img src="./img/ss3.jpg"></div>
        <div class="slide fade"><img src="./img/ss4.jpg"></div>
        <div class="slide fade"><img src="./img/ss5.jpg"></div>
        <div class="slide fade"><img src="./img/ss6.jpg"></div>
        <div class="slide fade"><img src="./img/ss7.jpg"></div>
        <span class="prev" onclick="plusSlides(-1)">❮</span>
        <span class="next" onclick="plusSlides(1)">❯</span>
    </div>
</div>
<div class="waper-pr">
        <div class="pr">  <img src="./img/logo.png"></div>
        <div style="width:100% ;display: flex;">
            <div class="pr" style="width: 50%;background: #000; "><video src="./img/demovideo.mp4" height="100%" width="100%" autoplay loop></video></div>
            <div class="pr" style="width: 50%; background: rgb(224, 189, 189);float: left;">
                <h3>Quỳnh đẹp trai</h3>
                <p>hãy viết 200 dòng miêu tả về sự đẹp trai của Quỳnh đi nào các bạn nhỏa</p>
                <button><h2>Xem Them</h2></button>
            </div>
        </div>
    </div>
    <div class="why-pr">
        <div class="why"><h1>Tại sao lại chọn chúng tôi</h1></div>
        <div class="pr2">
            <div>
                <div> <img src="1.jpg"></div>
                 <div>
                    <h3>THANH TOÁN TỰ ĐỘNG</h3>
                    <p>Hỗ trợ thanh toán nhanh chóng bằng cả tiền mặt và thẻ ngân hàng. Hỗ trợ thủ tục trả góp nhanh gọn.</p>
                </div>
            </div>
            <div>
                <div> <img src="1.jpg"></div>
                 <div>
                    <h3>HỖ TRỢ 24/24</h3>
                    <p>Nhân viên tư vấn và trợ giúp giải quyết mọi thắc mắc của bạn.</p>
                </div>
            </div>
            <div>
                <div> <img src="1.jpg"></div>
                 <div>
                    <h3>DỊCH VỤ BẢO TRÌ</h3>
                    <p>Tiếp nhận thông tin và tiến hành các bước bảo trì nhanh chóng nhằm mang đến trải nghiệm sản phẩm tốt nhất.</p>
                </div>
            </div>
            <div>
                <div> <img src="1.jpg"></div>
                 <div>
                    <h3>HƠN 1 Tháng TRONG NGHỀ</h3>
                    <p>Bề dày kinh nghiệm và hết lòng vì khách hàng để hướng tới dịch vụ tốt nhất.</p>
                </div>
            </div>
            <div>
                <div> <img src="1.jpg"></div>
                 <div>
                    <h3>LÁI THỬ XE MIỄN PHÍ</h3>
                    <p>Hỗ trợ khách hàng được trải nghiệm và lựa chọn sản phẩm ưng ý nhất và phù hợp nhất.</p>
                </div>
            </div>
            <div>
                <div> <img src="1.jpg"></div>
                 <div>
                    <h3>CAM KẾT</h3>
                    <p>Chúng tôi luôn luôn hướng đến lợi ích của khách hàng, với chất lượng sản phẩm, dịch vụ và giá cả tốt nhất3</p>
                </div>
            </div>
        </div>
    </div>
    <div class="waperco">
        <div class="gt"><h1>ĐỐI TÁC CỦA CHÚNG TÔI</h1><h3> Chúng tôi hợp tác với những đối tác hàng đầu trong lĩnh vực xe ô tô nhập khẩu ...</h3></div>
        <hr width="50%">
        <div class="co">
            <div><img src="1.jpg"></div>
            <div><img src="2.jpg"></div>
            <div><img src="3.jpg"></div>
            <div><img src="4.jpg"></div>
            <div><img src="5.jpg"></div>
            <div><img src="6.jpg"></div>
        </div>
    </div></div>`
    document.getElementById('phanthan').innerHTML=trangchu;
}
// Hien slideshow
let slides = document.getElementsByClassName("slide")
var Index = 0
var time=8000;
function show(n){
    if (n > slides.length) {Index = 1}    
    if (n < 1) {Index = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none"; 
    }
    slides[Index-1].style.display = "block";  //không đồng nhất hàm show vs hàm showindex đc vì nếu đồng hất không làm được hiệu úng chuyển trang
}
function showIndes(){
    Index++
    show(Index)  
    tiemout = setTimeout(showIndes, time); 
}
function plusSlides(n) {
Index = Index+n
clearTimeout(tiemout)
showIndes()
//Ket thuc slide show 
}
function hientrangsanpham()
{
    var trangsanpham =`<div id="htimkiem" class="fa fa-heart" onclick="hientimkiem()" ></div>
    <div id="nuttat" class="fa fa-window-close" onclick="antimkiem()" ></div>
<div class="left-menu" id="left-menu">
    <div class="danhmuc">
        <h2>LỌC SẢN PHẨM</h2>
    </div>
    <hr  width="90%" align="center" />
    <h3>TÌM KIẾM</h3>
    <input type="text" onkeyup="timkiemxe()" placeholder="Nhập tên xe" id="timkiem">
    <button onclick="timkiemxe()">LỌC</button>
    <hr  width="90%" align="center" />
    <div class="danhmuc2">
        <h2>Giá</h2>
    </div>
    <input type="radio" id="gia" name="gia" checked="checked" onclick="hientrang(1),phantrang()">
    <label> Tất cả</label><br>
    <input type="radio" id="gia" name="gia" onclick="locgia(2000000000,5000000000)">
    <label> 2tỷ VNĐ - 5tỷ VNĐ </label><br>
    <input type="radio" id="gia" name="gia" onclick="locgia(5000000000,10000000000)">
    <label> 5tỷ VNĐ - 10tỷ VNĐ</label><br>
    <input type="radio" id="gia" name="gia" onclick="locgia(10000000000,1000000000000)">
    <label> Trên 10tỷ VNĐ</label>
    <hr width="90%" align="center" />
    <div class="danhmuc2">
        <h2>Thương hiệu</h2>
    </div>
    <select class="select-css" name="cars" onchange="loc(value)" id="thuonghieu">
    </select>
    <hr width="90%" align="center" />
</div>
<div class="content" id="content">
    <div class="Sanpham">
        <h1>SẢN PHẨM</h1>
    </div>
    <hr width="90%" align="center" />
    <label for="cars">Sắp xếp theo:</label>
    <select class="sapxep" name="xapxep" id="sapxep" onchange="sapxep(value)">
        <option value="0">Mặc định</option>
        <option value="1">Giá (Thấp->Cao)</option>
        <option value="2">Giá (Cao->Thấp)</option>
    </select>
    <hr width="90%" align="center" />
    <div class="wrapper">
        <div id="product-wrapper" class="product-wrapper">
        </div>
    </div>
</div>`
document.getElementById('phanthan').innerHTML=trangsanpham;
}
function hientimkiem()
{
    document.getElementById('left-menu').style.display="block";
    document.getElementById('nuttat').style.display="block";
    document.getElementById('htimkiem').style.display="none";
}
function antimkiem()
{
    document.getElementById('left-menu').style.display="none";
    document.getElementById('nuttat').style.display="none";
    document.getElementById('htimkiem').style.display="block";
}
function hientranggioithieu(){
    var tranggioithieu = ` `
    document.getElementById('phanthan').innerHTML=tranggioithieu;
}
function hientranglienhe(){
    var tranglienhe=``;
    document.getElementById('phanthan').innerHTML=tranglienhe;
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
function formattien(gia)
{
    var str =String(gia);
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ' ')) + prev 
    })
}
function dangxuat()
{
    localStorage.setItem('DN',-1);
    location.reload();
}
function kiemtradadn()
{
    if(localStorage.getItem('DN')==-1)
    {
        document.getElementById('cacbutton').innerHTML='<input type="button" id="btdangnhap" class="btn" value="Đăng nhập" onclick="dangnhap()" />\
        <input type="button" class="btn" id="btdangky" value="Đăng ký" onclick="dangky()" />';
    }
    else
    {
        if(localStorage.getItem('DN')==0)
        {
            document.getElementById('cacbutton').innerHTML=' <input type="button" id="btdangxuat" class="btn" value="Đăng xuất" onclick="dangxuat()"/>\
            <input type="button" id="btgiohang" class="btn" value="Giỏ Hàng" onclick="hiengiohang(),hienspgiohang(),hienlichsu()" />\
            <a href="admin.html">Trang quản trị</a>';
        }
             
        else{
            document.getElementById('cacbutton').innerHTML=' <input type="button" id="btdangxuat" class="btn" value="Đăng xuất" onclick="dangxuat()"/>\
            <input type="button" id="btgiohang"class="btn"  value="Giỏ Hàng" onclick="hiengiohang(),hienspgiohang(),hienlichsu()" />\
            <input type="button" id="btgiohang" class="btn" value="Đổi mật khẩu" onclick="hiendoimatkhau()" />';
        }
    }
}
function dangnhap() {
    var DN = '<div class="okechua" onclick="checkligh(\'\',0,1)">\
        <div class="waperlog" onclick="checkligh(\'\',0,1)">\
        <button class="btntat" onclick="tat()">X</button>\
            <span class="baner"><h2>ĐĂNG NHẬP</h2></span>\
            <div class="imglogwaper">\
                <img id="imglog" src="./img/pngwing.com.png">\
                <div id="checkbox"></div>\
            </div>\
            <div class="frmlog">\
                <form class="login" onsubmit="return checkligh(\'\',1,1)"method="">\
\
                    <div class="main">\
                        <input type="email"  name="foremail"   class="input"     id="foremail"  onclick="checkligh(\'foremail\',0,1)"  onkeydown="checkligh(\'foremail\',0,1)"        placeholder="Nhập email( Tài Khoản)" >\
                        <input type="password"  name="forpass"    class="input"  id="forpass"   onclick="checkligh(\'forpass\',0,1)"   onkeydown="checkligh(\'forpass\',0,1)"     placeholder="Nhập mật khẩu" >\
                    </div>\
                    <div  class="BTDN">\
                        <button class="btn" onclick="kiemtradangnhap()">\
                            ĐĂNG NHẬP\
                        </button>\
                    </div>\
                    <div class="forget">\
                        <a href ="#" onclick="hienquenmatkhau()"><b>Bạn quên mật khẩu?</b></a>\
                        \
                    </div>\
                </form>\
            </div>\
        </div>\
    </div>'
    document.getElementById('popup').innerHTML = DN;
}
function dangky()
{
    var DK = '<div class="okechua" onclick="checkligh(\'\',0,3)">\
    \
    <div class="waperlog" onclick="checkligh(\'\',0,3)">\
    <button class="btntat" onclick="tat()">X</button>\
        <span class="baner"><h2>ĐĂNG KÝ TÀI KHOẢN MỚI</h2></span>\
        <div class="imglogwaper">\
            <img id="imglog" src="./img/pngwing.com.png">\
            <div id="checkbox"></div>\
        </div>\
        <div class="frmsigup" >\
            <form class="login" onsubmit="return checkligh(\'\',1,3)" method="">\
                \
                <div class="main">\
                <input type="text"  name="hoten" class="input"  id="hoten" placeholder="Nhập họ tên" >\
                    <input type="email"  name="foremail"   class="input"     id="foremail"  onclick="checkligh(\'foremail\',0,3)"  onkeydown="checkligh(\'foremail\',0,3)"        placeholder="Nhập email( Tài Khoản)" >\
                    <input type="number"  name="forSDT"       class="input"  id="forSDT"    onclick="checkligh(\'forSDT\',0,3)"    onkeydown="checkligh(\'forSDT\',0,3)"       placeholder="Nhập SDT" >\
                    <input type="password"  name="forpass"    class="input"  id="forpass"   onclick="checkligh(\'forpass\',0,3)"   onkeydown="checkligh(\'forpass\',0,3)"     placeholder="Nhập mật khẩu" >\
                    <input type="password"  name="forrepass"   class="input" id="forrepass" onclick="checkligh(\'forrepass\',0,3)" onkeydown="checkligh(\'forrepass\',0,3)"     placeholder="Nhập lại mật khẩu" >\
                </div>\
                <div  class="BTDN">\
                    <button class="btn" onclick="dangkytk()">\
                        ĐĂNG KÝ\
                    </button>\
                </div>\
                <div class="forget">\
                    <a href ="#" onclick="dangnhap()"><b>về trang đăng nhập</b></a>\
                </div>\
            </form>\
        </div>\
    </div>'
    document.getElementById('popup').innerHTML =DK;
}
function hienquenmatkhau(){
    var QMK = '<div class="okechua" onclick="checkligh(\'\',0,1)">\
    <div class="waperlog" onclick="checkligh(\'\',0,2)">\
    <button class="btntat" onclick="tat()">X</button>\
        <span class="baner"><h2>QUÊN MẬT KHẨU</h2></span>\
        <div class="imglogwaper">\
            <img id="imglog" src="./img/pngwing.com.png">\
            <div id="checkbox"></div>\
        </div>\
        <div class="frmlog">\
            <form class="login" onsubmit="return checkligh(\'\',1,2)" method="">\
                \
                <div class="main">\
                    <input type="email"  name="foremail"   class="input"     id="foremail"  onclick="checkligh(\'foremail\',0,2)"  onkeydown="checkligh(\'foremail\',0,2)" placeholder="Nhập email" >\
                </div>\
                <div  class="BTDN">\
                    <button class="btn" onclick="quenmatkhau()">\
                        Lấy Mật khẩu\
                    </button>\
                </div>\
                <div class="forget">\
                    <a href ="#" onclick="dangnhap()"><b>về trang đăng nhập</b></a>\
                </div>\
            </form>\
        </div>\
    </div>'
    document.getElementById('popup').innerHTML=QMK;
}
function quenmatkhau(){
    var users = JSON.parse(localStorage.getItem('users'));
    var email=document.getElementById('foremail').value;
    var tc=0;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].email==email)
        {
            alert("Mật khẩu của bạn là: " + users[i].matkhau);
            tc=1;
            break;
        }
    }
    if (tc==0){
        alert("Bạn phải nhập đúng email");
    }
}
function hiendoimatkhau()
{
    var DMK = '<div class="okechua">\
    <div class="waperlog" onclick="checkligh(\'\',0,2)">\
    <button class="btntat" onclick="tat()">X</button>\
        <span class="baner"><h2>ĐỔI MẬT KHẨU</h2></span>\
        <div class="imglogwaper">\
            <img id="imglog" src="./img/pngwing.com.png">\
            <div id="checkbox"></div>\
        </div>\
        <div class="frmlog">\
            <form class="login" onsubmit="return checkligh(\'\',1,2)" method="">\
                \
                <div class="main">\
                    <input type="password"  name="password"   class="input"     id="matkhaumoi"  onclick="checkligh(\'foremail\',0,2)"  onkeydown="checkligh(\'foremail\',0,2)" placeholder="Nhập mật khẩu mới: " >\
                </div>\
                <div  class="BTDN">\
                    <button onclick="Doimatkhau()">\
                        Xác nhận\
                    </button>\
                </div>\
            </form>\
        </div>\
    </div>'
    document.getElementById('popup').innerHTML=DMK;
}
function doimatkhau()
{
    var matkhaumoi=document.getElementById('matkhaumoi').value;
    var users =JSON.parse(localStorage.getItem('users'));
    var DN=JSON.parse(localStorage.getItem('DN'));
    for (var i=0; i<users.length; i++)
    {
        if(DN==users[i].IDuser)
        {
            users[i].matkhau=matkhaumoi;
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đổi mật khẩu thành công');
    location.reload();
}
function checkligh(name,flag,flag2){
    var checkbox = document.getElementById("checkbox")
    var foremail = document.getElementById("foremail")
    var forSDT = document.getElementById("forSDT")
    var forpass = document.getElementById("forpass")
    var forrepass = document.getElementById("forrepass")
            if(name != foremail.name)
                if(!checkemail(flag))
                    return false
            if(flag2==3)
            if(name!=forSDT.name )
                if(!checkSDT(flag))
                    return false
            if(flag2!=2)
            if(name!=forpass.name)
            if(!checkpass(flag))
                    return false
            if(flag2==3)
            if(name!=forrepass.name)
            if(checkrepass(flag))
                    return true
                else
                    return false
}
function checkemail(flag){
    
    if(/\S@\S/.test(foremail.value)){
        foremail.setAttribute("class","checkrighr")
        checkbox.innerHTML= null
        return true
    }else{
        if(flag==1)
        checkbox.innerHTML="<p><font color=\"red\">nhập email theo form Quynh@gmail.com!!!</font></p>"
        foremail.setAttribute("class","input")
        return false
    }
    
}
function checkSDT(flag){
    if(forSDT.value.length !=10 || /e/.test(forSDT.value)|| forSDT.value.charAt(0)!=0){
        if(flag==1)
        checkbox.innerHTML="<p><font color=\"red\">Định dạng SDT 10 số : 0123456789!!!</font></p>"
        forSDT.setAttribute("class","input")
        return false
    }else{
        forSDT.setAttribute("class","checkrighr")
        checkbox.innerHTML= null
        return true
    } 
    return true
}   
function checkpass(flag){
    if(forpass.value.length < 3){
        if(flag==1){
        checkbox.innerHTML="<p><font color=\"red\">Mật khẩu phải nhiều hơn 6 kí tự!!!</font></p>"
        }
        forpass.setAttribute("class","input")
        return false
    }else{
        forpass.setAttribute("class","checkrighr")
        checkbox.innerHTML= null
        return true
    }

    return true
}
function checkrepass(flag){
    if(forpass.value!=forrepass.value || forrepass.value==''||forrepass.value.length<3){
        if(flag==1)
        checkbox.innerHTML="<p><font color=\"red\">Nhập lại Mật Khẩu sai!!!</font></p>"
        forrepass.setAttribute("class","input")
        return false
    }else {
        forrepass.setAttribute("class","checkrighr")
        checkbox.innerHTML= null
        return true
    }
        return true
}
// het phan dang nhap dang ky
function dangkytk() {
    var users = JSON.parse(localStorage.getItem('users'));
    var hoten =document.getElementById('hoten').value;
    var email = document.getElementById('foremail').value;
    var sodth = document.getElementById('forSDT').value;
    var matkhau = document.getElementById('forpass').value;
    var rematkhau=document.getElementById('forrepass').value;
    if (rematkhau!=matkhau) {
        alert('Nhập lại mật khẩu không đúng');
        return 0;
    }
    var IDuser= users[users.length-1].IDuser+5;
    var user = { IDuser, hoten, email, sodth, matkhau };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng kí tài khoản thành công');
}
function kiemtradangnhap() {
    var tendn = document.getElementById('foremail').value;
    var tc=0;
    var matkhau = document.getElementById('forpass').value;
    var users = JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < users.length; i++) {
        if (tendn==users[i].email && matkhau == users[i].matkhau)
        {
            var IDuser=users[i].IDuser;
            alert("Đăng nhập thành công");
            localStorage.setItem('DN',IDuser);
            tc=1;
        }
    }
    if (tc==0)
    {
        alert('Bạn đã nhập sai tài khoản hay mật khẩu vui lòng đăng nhập hoặc đăng kí lại');
    }
}
function khoxe() {
    if(localStorage.getItem('dk')==null)
    {
        var cars = [
            {IDxe:0,  tenxe: 'LaFerrari',                   brand: 'Ferrari',      img: './img/laferrari.jpg',     soluong: 2,  gia: 30000000000 },
            {IDxe:1,  tenxe: 'Ferrari SF90 Stradale',       brand: 'Ferrari',      img: './img/ferrarisf90.jpg',   soluong: 2,  gia: 15000000000 },
            {IDxe:2,  tenxe: 'Ferrari 812 GTS',             brand: 'Ferrari',      img: './img/ferrari812.jpg',    soluong: 2,  gia: 12000000000 },
            {IDxe:3,  tenxe: 'Aston Martin Valkyrie 2022',  brand: 'Aston Martin', img: './img/valkyrie.jpg',      soluong: 3,  gia: 27000000000},
            {IDxe:4,  tenxe: 'Aston Martin DBS SL',         brand: 'Aston Martin', img: './img/dbs.jpg',           soluong: 2,  gia: 23000000000 },
            {IDxe:5,  tenxe: 'Bugatti Centodieci',          brand: 'Bugatti',      img: './img/bgt.jpg',           soluong: 1,  gia: 35000000000 },
            {IDxe:6,  tenxe: 'Bugatti Chiron Divo',         brand: 'Bugatti',      img: './img/chiron.jpg',        soluong: 1,  gia: 48000000000 },
            {IDxe:7,  tenxe: 'Koenigsegg Regera',           brand: 'Koenigsegg',   img: './img/regera.jpg',        soluong: 1,  gia: 32000000000 },
            {IDxe:8,  tenxe: 'Koenigsegg Gemera',           brand: 'Koenigsegg',   img: './img/gemera.jpg',        soluong: 1,  gia: 37000000000 },
            {IDxe:9,  tenxe: 'Koenigsegg Jesko',            brand: 'Koenigsegg',   img: './img/jesko.jpg',         soluong: 2,  gia: 27000000000 },
            {IDxe:10,  tenxe: 'McLaren Senna',              brand: 'McLaren',      img: './img/mcsenna.jpg',       soluong: 2,  gia: 23000000000 },
            {IDxe:11,  tenxe: 'BMW X7 xDrive40i 2020',      brand: 'BMW',          img: './img/bmwx7.jpg',         soluong: 2,  gia: 6000000000 },
            {IDxe:12,  tenxe: 'BMW 320i Sportline',         brand: 'BMW',          img: './img/bmw320i.jpg',       soluong: 5,  gia: 1769000000  },
            {IDxe:13,  tenxe: 'BMW 740 Pure Excellence',    brand: 'BMW',          img: './img/bmw740li.jpg',      soluong: 5,  gia: 9000000000  },
            {IDxe:14,  tenxe: 'Audi Sport Quattro',         brand: 'AUDI',         img: './img/audisport.jpg',     soluong: 2,  gia: 10000000000  },
            {IDxe:15,  tenxe: 'Audi A4 DTM Edition',        brand: 'AUDI',         img: './img/audia4.jpg',        soluong: 3,  gia: 17000000000  },
            {IDxe:16,  tenxe: 'Audi R8 Exclusive ',         brand: 'AUDI',         img: './img/audir8.jpg',        soluong: 5,  gia: 20000000000 },
            {IDxe:17,  tenxe: 'Lexus LX570 2021',           brand: 'LEXUS',        img: './img/lexuslx57.jpg',     soluong: 2,  gia: 9000000000  },
            {IDxe:18,  tenxe: 'Lexus LX570 2019',           brand: 'LEXUS',        img: './img/lexus2019.jpg',     soluong: 5,  gia: 5000000000  },
            {IDxe:19,  tenxe: 'Lexus PLexus LM300h',        brand: 'LEXUS',        img: './img/lexuslm300.jpg',    soluong: 4,  gia: 8000000000  },
            {IDxe:20,  tenxe: 'Lexus RX350 2020',           brand: 'LEXUS',        img: './img/lexusrx350.jpg',    soluong: 2,  gia: 3000000000 },
            {IDxe:21, tenxe: 'Mercedes G63 AMG',            brand: 'Mercedes',     img: './img/merg63.jpg',        soluong: 5,  gia: 5000000000  },
            {IDxe:22, tenxe: 'Mercedes GLS450 2021',        brand: 'Mercedes',     img: './img/merglx450.jpg',     soluong: 1,  gia: 20000000000 },
            {IDxe:23, tenxe: 'Maybach GLS 600',             brand: 'Mercedes',     img: './img/mermayback.jpg',    soluong: 5,  gia: 14000000000  },
            {IDxe:24, tenxe: 'Porsche Cayenne Turbo',       brand: 'Porsche',      img: './img/porscheturbo.jpg',  soluong: 2,  gia: 7000000000  },
            {IDxe:25, tenxe: 'Porsche Cayenne Coupe',       brand: 'Porsche',      img: './img/porschecouple.jpg', soluong: 2,  gia: 2000000000  },
        ]
        localStorage.setItem('cars', JSON.stringify(cars));
        var users =
            [
                { IDuser: 000, hoten:'admin',         email: 'admin@gmail.com',       sodth: '0123456789', matkhau: '00000', diachi:'273 An Dương Vương P9 Q5' },
                { IDuser: 111, hoten:'Nguyễn Văn A',  email: 'nguyenvana@gmail.com',  sodth: '0123456789', matkhau: '00000', diachi:'250 An Dương Vương P9 Q5' },
                { IDuser: 222, hoten:'Lê văn B',      email: 'levanb@gmail.com',      sodth: '0123456789', matkhau: '00000', diachi:'262 An Dương Vương P9 Q5' },
            ]
        localStorage.setItem('users', JSON.stringify(users));
        var donhangs=
        [
            { IDdh:0, IDxe:1, IDuser:'111',  soluong: 1, sotien:  1769000000 ,  tinhtrang:0},
            { IDdh:1, IDxe:3, IDuser:'111',  soluong: 2, sotien:  20000000000 , tinhtrang:0},
            { IDdh:2, IDxe:9, IDuser:'222',  soluong: 1, sotien:  3000000000 ,  tinhtrang:0},
        ]
        localStorage.setItem('donhangs', JSON.stringify(donhangs));
        var chitiets=
        [
            {IDxe:0,mausac:'Đỏ', xuatxu:'ANH QUỐC',trongtai:'1.2 T',namsanxuat:'2020',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:1,mausac:'Đỏ', xuatxu:'ANH QUỐC',trongtai:'1.9 T',namsanxuat:'2018',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:2,mausac:'Đỏ', xuatxu:'ANH QUỐC',trongtai:'1.3 T',namsanxuat:'2018',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:3,mausac:'Xanh dương', xuatxu:'PHÁP',trongtai:'1.4 T',namsanxuat:'2018',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:4,mausac:'Đỏ', xuatxu:'MỸ',trongtai:'1.5 T',namsanxuat:'2019',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:5,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            // bữa sau sửa
            {IDxe:6,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:7,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:8,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:9,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:10,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:11,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:12,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:13,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:14,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:15,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:16,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:17,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:18,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:19,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:21,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:22,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:23,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:24,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            {IDxe:25,mausac:'Trắng', xuatxu:'ANH QUỐC',trongtai:'1.6 T',namsanxuat:'2021',tinhtrang:'MỚI',nhienlieu:'Xăng',sokmdadi:'0 km'},
            
        ]
        localStorage.setItem('chitiets', JSON.stringify(chitiets));
        localStorage.setItem('dk',1);
        localStorage.setItem('DN',-1)
        var dhhuys=[];
        localStorage.setItem('dhhuy',JSON.stringify(dhhuys));
    }
}
function hientrang(n)
{
    var cars = JSON.parse(localStorage.getItem('cars'));
    var dung=16*n;
    var batdau=16*n-16;
    if(dung>cars.length)
    {
        dung=cars.length;
    }
    var temp=[];
    for (var i = batdau; i < dung; i++) {
        temp.push(cars[i]);
    } 
    hiensanpham(temp);
}
function phantrang()
{
    var cars = JSON.parse(localStorage.getItem('cars'));
    phantrang1(cars);
}
function luu(mang)
{
    localStorage.setItem('temp', JSON.stringify(mang));
}
function lay()
{
    return JSON.parse(localStorage.getItem('temp'));
}
function phantrang1(mang)
{
    luu(mang);
    var sotrang=Math.ceil(mang.length/16);
    var taosotrang='';
    // taosotrang+='<a href="#">&laquo;</a>';
    for(var i=1; i<=sotrang; i++) {
        taosotrang+='<a onclick="hientrang1('+i+')" href="#">'+i+'</a>';
    }
    // taosotrang+='<a href="#">&raquo;</a>';
    hientrang1(1);
    // hientrang2(mang);
    document.getElementById('pagination').innerHTML=taosotrang;
}
function hientrang1(n)
{
    var mang = lay();
    var dung=16*n;
    var batdau=16*n-16;
    if(dung>mang.length)
    {
        dung=mang.length;
    }
    var kq=[];
    for (var i = batdau; i < dung; i++) {
        kq.push(mang[i]);
    } 
    hiensanpham(kq);
}
function hientrang2(mang)
{
    var dung=16*2;
    var batdau=16*2-16;
    if(dung>mang.length)
    {
        dung=mang.length;
    }
    let kq=[];
    for (var i = batdau; i < dung; i++) {
        kq.push(mang[i]);
    } 
    hiensanpham(kq);
}
function loc(dk) {
    var cars = JSON.parse(localStorage.getItem('cars'));
    var kq=[];
    for (var i = 0; i < cars.length; i++) {
        if (dk == cars[i].brand) {
           kq.push(cars[i]);
        }
    }
    phantrang1(kq);
}
function hiensanpham(mang){
    var s='';
    for(var i=0; i<mang.length;i++)
    {
        s += '<div class="product">' +
        '<img src="' + mang[i].img + '">' +
        '<p>' + mang[i].tenxe + '</p>' +
        '<p> Price: ' + formattien(mang[i].gia) +' VNĐ</p>' +
        '<button class="btn" onclick="showchitietsp('+mang[i].IDxe+')">CHI TIET</button>' +
        '</div>';
    }
    document.getElementById('product-wrapper').innerHTML=s;
}
function locgia(min,max)
{
    cars=JSON.parse(localStorage.getItem('cars'));
    var temp=[];
    for(var i=0;i<cars.length;i++)
    {
        if(cars[i].gia>min && cars[i].gia<max)
        {
            temp.push(cars[i]);
        }
    }
    phantrang1(temp);
}
function timkiemxe()
{
    var cars=JSON.parse(localStorage.getItem('cars'));
    var tenxe = document.getElementById('timkiem').value;
    if(tenxe ==null)
    {
        phantrang1(cars);
    }
    var temp=[];
    for(var i=0; i<cars.length; i++)
    {
        if(cars[i].tenxe.includes(tenxe))
        {
           temp.push(cars[i]);
        }
    }

    phantrang1(temp);
    
}
function sapxep(vl)
{
    var cars=JSON.parse(localStorage.getItem('cars'));
    var car1=JSON.parse(localStorage.getItem('cars'));
    if(vl==0)
    {
        phantrang(),hientrang(1);
    }
    if(vl==1)
    {
        for(var i=0;i<cars.length;i++)
        {
            var temp;
            for(var j=0;j<cars.length;j++)
            {
                if(cars[i].gia<cars[j].gia)
                {
                    temp=cars[i];
                    cars[i]=cars[j];
                    cars[j]=temp;
                }
            }
        }
        phantrang1(cars);
    }
    if(vl==2)
    {
        for(var i=0;i<cars.length;i++)
        {
            var temp;
            for(var j=0;j<cars.length;j++)
            {
                if(cars[i].gia>cars[j].gia)
                {
                    temp=cars[i];
                    cars[i]=cars[j];
                    cars[j]=temp;
                }
            }
        }
        phantrang1(cars);
    }
}
function chuyenmangthanhsp(mang)
{
    var s='';
    for(var i=0; i<mang.length;i++)
    {
        s += '<div class="product">' +
        '<img src="' + mang[i].img + '">' +
        '<p>' + mang[i].tenxe + '</p>' +
        '<p> Price: ' + formattien(mang[i].gia) +' VNĐ</p>' +
        '<button onclick="showchitietsp('+mang[i].IDxe+')">CHI TIET</button>' +
        '</div>';
    }
    return s;
}
// -----PHAN HIEN CHI TIET SAN PHAM ----------------------
function plussp(n){
    var SL=document.getElementById("SL")
    // if(SL.value == 0 && n!=-1)
    SL.value =Number(SL.value) + Number(n)
    if(SL.value<=0)
    SL.value=1
    // var a = SL.value
    // alert(Number(a)+Number(n))
}
function imgdemo(a){
    var main = document.getElementById("imgdemo1")
var img1 = document.getElementById("wapperdemo1").innerHTML
var img2 = document.getElementById("wapperdemo2").innerHTML
var img3 = document.getElementById("wapperdemo3").innerHTML
    
    switch (a) {
        case 1:
            main.innerHTML=img1
            break;
        case 2:
            main.innerHTML=img2
            break;
        case 3:
        main.innerHTML=img3
            break;
    
    }
}
function showchitietsp(IDxe){
    var chitiets=JSON.parse(localStorage.getItem('chitiets'));
    var cars=JSON.parse(localStorage.getItem('cars'));
    var i;
    for(i=0;i<chitiets.length;i++)
    {
        if(chitiets[i].IDxe==IDxe)
        {
            break;
        }
    }
    var ctsp='';
    ctsp += '<div class="okechua">\
    <div class="clt"><button class="btntat" onclick="tat()">X</button>&nbsp</div>\
    <div class="chitietsp">\
        <div class="imgdemo">\
            <div class="imgdemo1" id="imgdemo1"><img src="'+cars[i].img+'"></div>\
        </div>\
        <div class="sale">\
            <div><h1>'+cars[i].tenxe+'</h1></div>\
            <div><h2>'+formattien(cars[i].gia)+' VNĐ</h2></div>\
            <div class="SLuong">\
                <form>\
                    <div style="display: flex;margin-bottom: 10px;">\
                        <div class="dau" onclick="plussp(-1)">➖</div>\
                        <input type="number" name="SL" id="SL" value="1" step="1" min="0" role="spinbutton" readonly placeholder="nhập số lượng SP">\
                        <div class="dau" onclick="plussp(1)">➕</div>\
                    </div>\
                    <button onclick="themgiohang('+cars[i].IDxe+')" class="TSL"><h3>Thêm giỏ hàng</h3></button>\
                </form>\
            </div>\
            \
        </div>\
    </div>\
    <div class="TTSP">\
       <div>\
            <div>\
                <div><img src="./img/original.png"> Hãng xe </div>'+
                '<div>'+cars[i].brand+'</div>\
            </div>\
            <div>\
                <div><img src="./img/lighting.png">  Tình trạng</div>\
                <div>'+chitiets[i].tinhtrang+'</div>\
            </div>\
        </div>\
       <div>\
            <div>\
                <div><img src="./img/speed.png">  Số KM đã đi</div>\
                <div>'+chitiets[i].sokmdadi+'</div>\
            </div>\
            <div>\
                <div><img src="./img/original.png">  Xuất sứ</div>\
                <div>'+chitiets[i].xuatxu +'</div>\
            </div>\
        </div>\
       <div>\
            <div>\
                <div><img src="./img/calendar.png">  Năm sản xuất</div>\
                <div>'+chitiets[i].namsanxuat+'</div>\
            </div>\
            <div>\
                <div><img src="./img/sedan.png">  Trọng tải</div>\
                <div>'+chitiets[i].trongtai+'</div>\
            </div>\
        </div>\
       <div>\
            <div>\
                <div><img src="./img/palette.png">  Màu sắc</div>\
                <div>'+chitiets[i].mausac+'</div>\
            </div>\
            <div>\
                <div><img src="./img/fuel.png">  Nhiên liệu</div>\
                <div>'+chitiets[i].nhienlieu+'</div>\
            </div>\
        </div>\
</div>';
    document.getElementById('popup').innerHTML = ctsp;
    
}
function hienbrand() {
    var cars= JSON.parse(localStorage.getItem('cars'));
    var locbrand='';
    const brand = new Set();
    for(var i=0;i<cars.length; i++) {
        brand.add(cars[i].brand);   
    }  
    for (const x of brand){
        locbrand +='<option value="'+x+'">'+x+'</option>';

    }    
    document.getElementById('thuonghieu').innerHTML = locbrand;
}

function hiengiohang()
{
    if(localStorage.getItem('DN')==-1)
    {
        alert('Bạn cần phải đăng nhâp');
    }
    else{
        var giohang='<div class="okechua">\
        <div class="gio-hang-wrapper">\
        <button class="btntat" onclick="tat()">X</button>\
        <div class="container mt-4">\
            <h1 class="text-center">Giỏ hàng</h1>\
            <h2><b> Các sản phẩm trong giỏ </b></h2>\
            <div class="row">\
                <div class="col col-md-12">\
                    <table class="table table-bordered">\
                        <thead>\
                            <tr>\
                                <th>Mã đơn hàng</th>\
                                <th>Ảnh đại diện</th>\
                                <th>Tên sản phẩm</th>\
                                <th>Số lượng</th>\
                                <th>Đơn giá</th>\
                                <th>Thành tiền</th>\
                                <th>Hành động</th>\
                            </tr>\
                        </thead>\
                        <tbody id="sptronggio">\
                        </tbody>\
                    </table>\
                </div>\
            </div>\
            </div>\
        <div class="container mt-4">\
           <h2><b>Lịch sử mua hàng</b></h2>\
           <div class="row">\
                <div class="col col-md-12">\
                    <table class="table table-bordered">\
                       <thead>\
                           <tr>\
                               <th>Mã đơn hàng</th>\
                               <th>Ảnh đại diện</th>\
                               <th>Tên sản phẩm</th>\
                               <th>Số lượng</th>\
                               <th>Đơn giá</th>\
                               <th>Thành tiền</th>\
                               <th>Tình trạng</th>\
                               <th>Hành dộng</th>\
                            </tr>\
                        </thead>\
                        <tbody id="splichsu">\
                    </table>\
                </div>\
            </div>\
        </div>\
    </div>\
    </div>';
    document.getElementById( 'popup').innerHTML=giohang;
    }
    
}
function hienspgiohang(){
    if(localStorage.getItem('DN')==-1 || localStorage.getItem('DN')==null)
    {
        return 0;
    }
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    var spgiohang='';
    var IDuser=localStorage.getItem('DN');
    var cars=JSON.parse(localStorage.getItem('cars'));
    for(var i=0;i< donhangs.length;i++){
        if(donhangs[i].IDuser==IDuser && donhangs[i].tinhtrang==0)
        {
        var k;
        for (k=0;k<cars.length;k++){
            if(cars[k].IDxe==donhangs[i].IDxe)
            {
                break;
            }
        }
        spgiohang +='<tr>\
        <td>'+ donhangs[i].IDdh+'</td>\
        <td>\
            <img src="'+cars[k].img+'" class="hinhdaidien">\
        </td>\
        <td>'+ cars[k].tenxe+'</td>\
        <td class="text-right">'+ donhangs[i].soluong+'</td>\
        <td class="text-right">'+ formattien(cars[k].gia)+' VNĐ</td>\
        <td class="text-right">'+ formattien(donhangs[i].sotien)+' VNĐ</td>\
        <td>\
            <!-- Nút xóa, bấm vào sẽ xóa thông tin dựa vào khóa chính `sp_ma` -->\
            <a id="delete_1" data-sp-ma="2" onclick="xoadonhang('+donhangs[i].IDdh+')" class="btn btn-danger btn-delete-sanpham">\
                <i class="fa fa-trash" aria-hidden="true"></i> Xóa\
            </a>\
            <button onclick="hienthanhtoan('+donhangs[i].IDdh+')" class="btn btn-save" type="button">Thanh toán</button>\
        </td>\
         </tr>'
        }
    } 
    document.getElementById('sptronggio').innerHTML=spgiohang;
}
function xoadonhang(IDdh){
    var  donhangs =JSON.parse(localStorage.getItem('donhangs'));
    var cars=JSON.parse(localStorage.getItem('cars'));
    for(var i=0;i< donhangs.length;i++){
        if(donhangs[i].IDdh==IDdh)
            {
                for(var j=0;j< cars.length;j++){
                    if(cars[j].IDxe==donhangs[i].IDxe)
                    {
                        cars[j].soluong+=donhangs[i].soluong;
                    }
                }
                donhangs.splice(i,1);
                break;
            }
    }
    localStorage.setItem('cars',JSON.stringify(cars));
    localStorage.setItem('donhangs', JSON.stringify(donhangs));
    location.reload();
}
function huydonhang(IDdh)
{
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
function themgiohang(IDxe)
{
    if(localStorage.getItem('DN')==-1)
    {
        alert('Bạn cần phải đăng nhập');
    }
    else{
        var cars=JSON.parse(localStorage.getItem('cars'));
        var i;
        for (i=0;i<cars.length;i++)
        {
            if(cars[i].IDxe ==IDxe)
            {
                break;
            }
        }
        var donhangs=JSON.parse(localStorage.getItem('donhangs'));
        var IDdh=donhangs[donhangs.length-1].IDdh+1;
        var IDuser=localStorage.getItem('DN');
        var soluong=document.getElementById('SL').value;
        cars[i].soluong-=soluong*1;
        if(cars[i].soluong<0)
        {
            alert('Da vuot qua gioi han xe trong kho');
            return 0;
        }
        var sotien=cars[i].gia*soluong;
        var tinhtrang=0;
        var donhang={IDdh,IDxe,IDuser,soluong,sotien,tinhtrang};
        donhangs.push(donhang);
        localStorage.setItem('donhangs',JSON.stringify(donhangs));
        localStorage.setItem('cars', JSON.stringify(cars));
    }
    
}
function thanhtoan(IDdh){
    var donhangs =JSON.parse(localStorage.getItem('donhangs'));
    for(var i = 0; i < donhangs.length;i++){
        if(donhangs[i].IDdh == IDdh)
        {
            donhangs[i].tinhtrang=1;
        }
    }
    localStorage.setItem('donhangs', JSON.stringify(donhangs));
    location.reload(); 
}
function hienlichsu()
{
    if(localStorage.getItem('DN')==-1 || localStorage.getItem('DN')==null)
    {
        return 0;
    }
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    var splichsu='';
    var cars=JSON.parse(localStorage.getItem('cars'));
    var IDuser=localStorage.getItem('DN');
    for(var i=0;i< donhangs.length;i++){
        if(donhangs[i].IDuser==IDuser && donhangs[i].tinhtrang==1)
        {
            var k;
            for (k=0;k<cars.length;k++){ // để lấy giá của xe
                if(cars[k].IDxe==donhangs[i].IDxe)
                {
                    break;
                }
            }
            if (donhangs[i].tinhtrang==1){
                splichsu +='<tr>\
                    <td>'+donhangs[i].IDdh+'</td>\
                    <td>\
                        <img src="'+cars[k].img+'" class="hinhdaidien">\
                    </td>\
                    <td>'+cars[k].tenxe+'</td>\
                    <td class="text-right">'+donhangs[i].soluong+'</td>\
                    <td class="text-right">'+formattien(cars[k].gia)+' VNĐ</td>\
                    <td class="text-right">'+formattien(donhangs[i].sotien)+' VNĐ</td>\
                    <td><b>Chờ xác nhận</b></td>\
                    <td>  <a id="delete_1" data-sp-ma="2" onclick="huydonhang('+donhangs[i].IDdh+')" class="btn btn-danger btn-delete-sanpham">\
                    <i class="fa fa-trash" aria-hidden="true"></i> Hủy đơn\
                </a>\</td>\
                </tr>'
                continue;
            }
                splichsu +='<tr>\
                <td>'+donhangs[i].IDdh+'</td>\
                <td>\
                    <img src="'+cars[k].img+'" class="hinhdaidien">\
                </td>\
                <td>'+cars[k].tenxe+'</td>\
                <td class="text-right">'+donhangs[i].soluong+'</td>\
                <td class="text-right">'+formattien(cars[k].gia)+' VNĐ</td>\
                <td class="text-right">'+formattien(donhangs[i].sotien)+' VNĐ</td>\
                <td>\
                    <b>Chờ xác nhận</b>\
                </td>\
            </tr>'
        }
    }
    for(var i=0;i< donhangs.length;i++){
        if(donhangs[i].tinhtrang==2)
        {
            var k;
            for (k=0;k<cars.length;k++){ //để lấy giá của xe
                if(cars[k].IDxe==donhangs[i].IDxe)
                {
                    break;
                }
            }
            splichsu +='<tr>\
            <td>'+donhangs[i].IDdh+'</td>\
            <td>\
                <img src="../assets/img/product/ipad4.png" class="hinhdaidien">\
            </td>\
            <td>'+cars[k].tenxe+'</td>\
            <td class="text-right">'+donhangs[i].soluong+'</td>\
            <td class="text-right">'+cars[k].gia+'</td>\
            <td class="text-right">'+donhangs[i].sotien+'</td>\
            <td>\
                <b>Đã xác nhận</b>\
            </td>\
        </tr>'
        }
       
    }
    document.getElementById('splichsu').innerHTML=splichsu;
}
function hienthanhtoan(IDdh){
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    var cars=JSON.parse(localStorage.getItem('cars'));
    var users=JSON.parse(localStorage.getItem('users'));
    var i,j,k;
    for(i=0;i<donhangs.length;i++){
        if(donhangs[i].IDdh==IDdh)
        {
            for(j=0;j<cars.length;j++){
                if(donhangs[i].IDxe==cars[j].IDxe)
                {
                    break;
                }
            }
            for(k=0;k<users.length;k++)
            {
                if(users[k].IDuser==donhangs[i].IDuser)
                {
                    break;
                }
            }
        break;
        }
    }
    var giohang=`<div class="okechua">
        <div class="gio-hang-wrapper" >
            <div class="metroinha">
                <div><h2>Thanh toán</h2></div>
                <div><p class="tt" >Mã đơn hàng: `+donhangs[i].IDdh+`</p></div>
                <div><p class="tt" >Tên sản phẩm: `+cars[j].tenxe+`</p></div>
                <div><p class="tt" >Số lượng: `+donhangs[i].soluong+`</p></div>
                <div><p class="tt" >Khách hàng: `+users[k].hoten+`</p></div>
                <div><p class="tt" >Tổng số tiền: `+formattien(donhangs[i].sotien)+` VNĐ</p></div>
                <div><p class="tt">Thời gian đặt hàng: `+laytg()+`</p></div>
                <div><button onclick="thanhtoan(`+donhangs[i].IDdh+`)" class="btn btn-save" type="button">Xác nhận hanh toán</button>
                <button onclick="tat()" class="btn btn-close" type="button">Thoát</button></div>
            </div>
        </div>
    </div>`;
    document.getElementById('popup').innerHTML=giohang;
}

function tranghientai(n)
{
    var tranghientai;
    if (n!=null){
        tranghientai=n;
        localStorage.setItem("tranghientai",tranghientai);
    }
    else {
        tranghientai = localStorage.getItem("tranghientai");
    }
    if(tranghientai== null) tranghientai = 1;
    if (tranghientai==1)
        hientrangchu(),showIndes();
    if (tranghientai==2)
    {
        hientranggioithieu();
    }
    if (tranghientai==3)
    {
        hientrangsanpham(),kiemtradadn(),hienbrand(),phantrang();
        localStorage.setItem("tranghientai",3);
    }
    if(tranghientai==4)
    {
        // hientranglienhe();
    }
}
window.onload=khoxe(),tranghientai();
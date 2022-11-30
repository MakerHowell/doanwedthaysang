// ######## CÁC HÀM PHỤ ĐUCỢ SỬ DỤNG #########
function tat()
{
    document.getElementById('popup').innerHTML='';
}
function tat1(){
    document.getElementById('chohoixoa').innerHTML='';
}
function formattien(gia)
{
    var str =String(gia);
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ' ')) + prev 
    })
}
function xacnhan()
{
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        return 1;
    } 
    else {
        return 0;
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
function kiemtradadn()
{
    if(localStorage.getItem('DN')==-1)
    {
        document.getElementById('cacbutton').innerHTML='<input type="button" id="btdangnhap" class="btn" value="Đăng nhập" onclick="dangnhap()" />\
        <input type="button" class="btn" id="btdangky" value="Đăng ký" onclick="dangky()" />';
    }
    else
    {
        var users = JSON.parse(localStorage.getItem('users'));
        var i;
        for(i=0;i<users.length;i++)
        {
            if(users[i].IDuser==localStorage.getItem('DN'))
            {
                break;
            }
        }
        if(localStorage.getItem('DN')==0)
        {
            document.getElementById('cacbutton').innerHTML='<p>'+users[i].hoten+'</p> <input type="button" id="btdangxuat" class="btn" value="Đăng xuất" onclick="dangxuat()"/>\
            <input type="button" id="btgiohang" class="btn" value="Giỏ Hàng" onclick="hiengiohang(),hienspgiohang(),hienlichsu()" />\
            <div> <a href="admin.html"><button style="background: #fcec64; border:none; color: black !important; padding: 7px;">Trang quản trị</button></a> </div>\
            <input type="button" id="btgiohang" class="btn" value="Đổi mật khẩu" onclick="hiendoimatkhau()" />';
        }        
        else{
            document.getElementById('cacbutton').innerHTML='<p>'+users[i].hoten+'</p> <input type="button" id="btdangxuat" class="btn" value="Đăng xuất" onclick="dangxuat()"/>\
            <input type="button" id="btgiohang"class="btn"  value="Giỏ Hàng" onclick="hiengiohang(),hienspgiohang(),hienlichsu()" />\
            <input type="button" id="btgiohang" class="btn" value="Đổi mật khẩu" onclick="hiendoimatkhau()" />';
        }
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
            { IDdh:'', IDxe:'', IDuser:'',  soluong: '', sotien: '',  tinhtrang:'' , thoigian:''},
           
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
        copy();
    }
}
function tranghientai(n){
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
        hientrangsanpham(),hienbrand(),phantrang();
        localStorage.setItem("tranghientai",3);
    }
    if(tranghientai==4)
    {
        hientranglienhe();
    }
}
// ######## KẾT THÚC CÁC HÀM PHỤ ĐƯỢC SỬ DỤNG #########

//####### INNER CÁC TRANG CHÍNH RA ############
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
        <span class="prev" onclick="plusSlides(-2)">❮</span>
        <span class="next" onclick="plusSlides(1)">❯</span>
    </div>
</div>
<div class="waper-pr">
        <div class="pr">  <img src="./img/logo.png"></div>
        <div class="kt1" style="width:100% ;display: flex;">
            <div class="pr" style="width: 50%;background: #000; ">
              <video height="100%" width="100%" controls muted autoplay loop >
                    <source src="./img/demovideo.mp4" type="video/mp4">
               </video></div>
            <div class="pr" style="width: 50%; background: whitesmoke;">
                <h3>MAXWHEELS</h3>
                <p>Những năm gần đây Ô TÔ đã và đang dần trở thành phương tiện đi lại phổ biến tại Việt Nam. Cùng với tốc độ phát triển kinh tế, mức thu nhập của người dân ngày càng tăng và nhu cầu đi lại thiết yếu thì việc sở hữu 1 chiếc xe ô tô đang dần phổ biến trong mỗi gia đình người dân Việt Nam.<br> 
                Chúng tôi đã và đang không ngừng cải thiện, phát triển chất lượng dịch vụ để đóng góp một phần tích cực giúp cho người dân Việt Nam dễ dàng tiếp cận và sở hữu chiếc ô tô ....</p>
                <button onclick="hientranggioithieu()"><h4>XEM THÊM</h4></button>
            </div>
        </div>
    </div>
    <div class="why-pr">
        <div class="why"><h1>Tại sao lại chọn chúng tôi</h1></div>
        <div class="pr2">
            <div>
                <div> <img src="./img/cash-coin.svg"></div>
                 <div>
                    <h3>THANH TOÁN TỰ ĐỘNG</h3>
                    <p>Hỗ trợ thanh toán nhanh chóng bằng cả tiền mặt và thẻ ngân hàng. Hỗ trợ thủ tục trả góp nhanh gọn.</p>
                </div>
            </div>
            <div>
                <div> <img src="./img/headset.svg"></div>
                 <div>
                    <h3>HỖ TRỢ 24/24</h3>
                    <p>Nhân viên tư vấn và trợ giúp giải quyết mọi thắc mắc của bạn.</p>
                </div>
            </div>
            <div>
                <div> <img src="./img/gear.svg"></div>
                 <div>
                    <h3>DỊCH VỤ BẢO TRÌ</h3>
                    <p>Tiếp nhận thông tin và tiến hành các bước bảo trì nhanh chóng nhằm mang đến trải nghiệm sản phẩm tốt nhất.</p>
                </div>
            </div>
            <div>
                <div> <img src="./img/calendar4.svg"></div>
                 <div>
                    <h3>HƠN 10 NĂM TRONG NGHỀ</h3>
                    <p>Bề dày kinh nghiệm và hết lòng vì khách hàng để hướng tới dịch vụ tốt nhất.</p>
                </div>
            </div>
            <div>
                <div> <img src="./img/car-front-fill.svg"></div>
                 <div>
                    <h3>LÁI THỬ XE MIỄN PHÍ</h3>
                    <p>Hỗ trợ khách hàng được trải nghiệm và lựa chọn sản phẩm ưng ý nhất và phù hợp nhất.</p>
                </div>
            </div>
            <div>
                <div> <img src="./img/clipboard2-check.svg"></div>
                 <div>
                    <h3>CAM KẾT</h3>
                    <p>Chúng tôi luôn luôn hướng đến lợi ích của khách hàng, với chất lượng sản phẩm, dịch vụ và giá cả tốt nhất3</p>
                </div>
            </div>
        </div>
    </div>
    <div class="waperco">
        <div class="gt"><h1>ĐỐI TÁC CỦA CHÚNG TÔI</h1><h3> Chúng tôi hợp tác với những đối tác hàng đầu trong lĩnh vực xe ô tô nhập khẩu ...</h3></div>
        <hr width="50%" >
        <div class="co">
            <div><img src="./img/vinfast-new-500x500.webp"></div>
            <div><img src="./img/co-2.png"></div>
            <div><img src="./img/co-3.png"></div>
            <div><img src="./img/co-10.png"></div>
            <div><img src="./img/car_logo_PNG1655.webp"></div>
            <div><img src="./img/co-8.png"></div>
           
        </div>
    </div></div>`
    document.getElementById('phanthan').innerHTML=trangchu;
}
//--- SLIDE SHOW CỦA TRANG CHỦ  -----
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
//--------- HẾT SLIDE SHOW TRANG CHỦ  -------

function hientranggioithieu(){
    var tranggioithieu = `<div class="gioithieu">
    <div><h2>MAX</h2><h2>WHEELS</h2></div>
    <div><h5>BMW, Mercedes-Benn, Audi Germany, Tesla United States, Porsche, Lexus, Volvo, Lamborghini    Italy, Ferrari, Land Rover United Kingdom, Jaguar    United Kingdom, Cadillac United States, RollsRoyce United Kingdom, Maserati    Italy, Bugatti Franc</h5></div>
    <div>
        <p>Những năm gần đây Ô TÔ đã và đang dần trở thành phương tiện đi lại phổ biến tại Việt Nam. Cùng với tốc độ phát triển kinh tế, mức thu nhập của người dân ngày càng tăng và nhu cầu đi lại thiết yếu thì việc sở hữu 1 chiếc xe ô tô đang dần phổ biến trong mỗi gia đình người dân Việt Nam. </p>
        <div><img src="https://th.bing.com/th/id/OIP.kbEGSWmthSQz3V9llj95lwHaEK?pid=ImgDet&rs=1" alt=""></div>
        <p>Chúng tôi đã và đang không ngừng cải thiện, phát triển chất lượng dịch vụ để đóng góp một phần tích cực giúp cho người dân Việt Nam dễ dàng tiếp cận và sở hữu chiếc ô tô mơ ước của mình.</p>
        <p>Thông tin giá cả và các mẫu xe ô tô mới luôn được cập nhật thường xuyên, đầy đủ và chính xác , bạn có thể dễ dàng tìm kiếm cho mình chiếc xe ô tô cũ / mới ưng ý nhất với giá cả tốt nhất.</p>
        <p>MAXWHEELS.VN luôn sẵn lòng tiếp nhận ý kiến đóng góp từ các bạn nhằm giúp nâng cao và cải thiện chất lượng dịch vụ ngày càng tốt hơn !</p>
    </div>
</div> `
    document.getElementById('phanthan').innerHTML=tranggioithieu;
}
function hientranglienhe(){
    var tranglienhe=`<div class="tranglh">
        <div class= "hdlienhe" ><h1>ĐỊA CHỈ CỬA HÀNG</h1></div>
    <iframe class"map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6695149294324!2d106.68007
    711744384!3d10.759933399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c81c64183%3A0xd3109d
    7a7a8f753c!2zMjczIEFuIEQuIFbGsMahbmcsIFBoxrDhu51uZyAzLCBRdeG6rW4gNSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1s
    vi!2s!4v1669519084710!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>`;
    document.getElementById('phanthan').innerHTML=tranglienhe;
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
    <h3>TÌM KIẾM <button onclick="copy()">HỦY LỌC</button></h3> 
    <input type="text" onkeyup="timkiemxe()" placeholder="Nhập tên xe" id="timkiem">
    <button onclick="timkiemxe()">LỌC</button>
    <hr  width="90%" align="center" />
    <div class="danhmuc2">
        <h2>Giá</h2>
    </div>
    <div>
        <div>
        <input type="range" id="nutmin" onchange="locgia1()" name="nutmin"
            min="0" max="100000000000" value="1000000000" step="1000000000"> 
        </div>

        <div>
        <input type="range" id="nutmax" name="nutmax" 
            min="0" max="100000000000" onchange="locgia1()" value="30000000000" step="1000000000">
        </div>
        <span class="thumb" id="thumbMin" style="left: 0%;"><p>`+formattien(1000000000)+` VNĐ <-></p></span>
        <span class="thumb" id="thumbMax" style="left: 100%;"><p>`+formattien(30000000000)+` VNĐ</p> </span>
    </div>
    <div class="danhmuc2">
        <h2>Thương hiệu</h2>
    </div>
    <select class="select-css" name="cars" onchange="loc(value)" id="thuonghieu"></select>
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
// ##########KẾT THÚC PHẦN INNER CÁC TRANG #########

// -------  CÁC HÀM REVERSE  ------
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
function hiennav(){
var  hiennav = `<div class="topnav1" id="myTopnav1">
    <p class="nt" onclick="tat()">X</p>
    <a href="" onclick="tranghientai(1)"><i class="fa fa-fw fa-home"></i>TRANG CHỦ</a> 
    <a href="" onclick="tranghientai(2)"><i class="fa fa-cloud"></i> GIỚI THIỆU</a>
    <a href="" onclick="tranghientai(3)"><i class="fa fa-car"></i> SẢN PHẨM</a>
    <a href="" onclick="tranghientai(4)"><i class="fa fa-envelope"></i> LIÊN HỆ</a>
    </div>`
    document.getElementById('popup').innerHTML=hiennav;
}
function hienkhunguser(){
    if(localStorage.getItem('DN')==-1)
    {
        document.getElementById('popup').innerHTML=' <div class="khungusernho"><p class="nt" onclick="tat()">X</p><input type="button" id="btdangnhap" class="btn" value="Đăng nhập" onclick="dangnhap()" />\
        <input type="button" class="btn" id="btdangky" value="Đăng ký" onclick="dangky()" /></div>';
    }
    else
    {
        var users = JSON.parse(localStorage.getItem('users'));
        var i;
        for(i=0;i<users.length;i++)
        {
            if(users[i].IDuser==localStorage.getItem('DN'))
            {
                break;
            }
        }
        if(localStorage.getItem('DN')==0)
        {
            document.getElementById('popup').innerHTML='<div class="khungusernho"><p class="nt" onclick="tat()">X</p><p>'+users[i].hoten+' </p> <input type="button" id="btdangxuat" class="btn" value="Đăng xuất" onclick="dangxuat()"/>\
            <input type="button" id="btgiohang" class="btn" value="Giỏ Hàng" onclick="hiengiohang(),hienspgiohang(),hienlichsu()" />\
            <div><a href="admin.html"><button style="background: #fcec64; border:none; color: black !important; margin: 5px 0; padding: 5px;">Trang quản trị</button></a></div>\
            <input type="button" id="btgiohang" class="btn" value="Đổi mật khẩu" onclick="hiendoimatkhau()" </div>';
        }  
        // Need to fix      
        else{
            document.getElementById('popup').innerHTML='<div class="khungusernho"><p class="nt" onclick="tat()">X</p><p>'+users[i].hoten+'</p> <input type="button" id="btdangxuat" class="btn" value="Đăng xuất" onclick="dangxuat()"/>\
            <input type="button" id="btgiohang"class="btn"  value="Giỏ Hàng" onclick="hiengiohang(),hienspgiohang(),hienlichsu()" />\
            <input type="button" id="btgiohang" class="btn" value="Đổi mật khẩu" onclick="hiendoimatkhau()" /><p>X</p> </div>';
        }
    }
    
}
// -----  KẾT THÚC REVERSE  ---------

//------- CÁC KHUNG DĂNG NHẬP ĐĂNG KÍ  -----
function dangxuat()
{
    localStorage.setItem('DN',-1);
    location.reload();
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
                        <a href ="#" onsubmit="hienquenmatkhau()"><b>Bạn quên mật khẩu?</b></a>\
                        \
                    </div>\
                </form>\
            </div>\
        </div>\
    </div>'
    document.getElementById('popup').innerHTML = DN;
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
                    <button class="btn" onsubmit="dangkytk()">\
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
function dangkytk() {
    var users = JSON.parse(localStorage.getItem('users'));
    var hoten =document.getElementById('hoten').value;
    var email = document.getElementById('foremail').value;
    var sodth = document.getElementById('forSDT').value;
    var matkhau = document.getElementById('forpass').value;
    var rematkhau=document.getElementById('forrepass').value;
    if (rematkhau!=matkhau) {
        alert('Nhập lại mật khẩu không đúng');
    }
    if(hoten=='' || email==''|| sodth=='' ||matkhau=='')
    {
        alert('Bạn chưa nhập đủ thông tin');
    }
    else{
        var IDuser= users[users.length-1].IDuser+5;
        var user = { IDuser, hoten, email, sodth, matkhau };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Đăng kí tài khoản thành công');
    }
    
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
                    <a href ="#" onsubmit="dangnhap()"><b>về trang đăng nhập</b></a>\
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
    var DMK ='<div class="okechua" onclick="checkligh(\'noname\',0,1,0)">\
    <div class="waperlog" onclick="checkligh(\'noname\',0,1,0)">\
    <button class="btntat" onclick="tat()">X</button>\
        <span class="baner"><h2>ĐỔI MẬT KHẨU</h2></span>\
        <div class="imglogwaper">\
            <img id="imglog" src="./img/pngwing.com.png">\
            <div id="checkbox"></div>\
        </div>\
        <div class="frmlog">\
            <form class="login" onsubmit="return checkligh(\'noname\',1,1,0)" method="">\
                \
                <div class="main">\
                    <input type="password"  name="password"   class="input"  id="forpass"   id="matkhaumoi"  onclick="checkligh(\'111\',0,1,0)"  onkeydown="checkligh(\'111\',0,1,0)" placeholder="Nhập mật khẩu mới: " >\
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
// -----  KẾT THÚC CÁC KHUNG ĐĂNG NHẬP ĐĂNG KÍ ------------

// -------  CÁC HÀM CHECK DỮ LIỆU NHẬP VÀO  ------
function checkligh(name,flag,flag2,flag3=1){
    var foremail = document.getElementById("foremail")
    var forSDT = document.getElementById("forSDT")
    var forpass = document.getElementById("forpass")
    var forrepass = document.getElementById("forrepass")
            if(flag3==1) 
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
// ------  HẾT HÀM CHECK DỮ LIỆU NHẬP  - -------

//  --------  PHÂN TRANG CHO SẢN PHẨM  --------
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
    return JSON.parse(localStorage.getItem('tam'));
}
function copy()
{
    var cars = JSON.parse(localStorage.getItem('cars'));
    localStorage.setItem('tam', JSON.stringify(cars));
    location.reload();
}
function phantrang1()
{
    // luu(mang);
    var mang=JSON.parse(localStorage.getItem('tam'));
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
// -----  KẾT THÚC PHÂN TRANG SẢN PHẨM  --------

//---------- CÁC HÀM LỌC, TÌM KIẾM  -------
function loc(dk) {
    var cars = JSON.parse(localStorage.getItem('tam'));
    var kq=[];
    for (var i = 0; i < cars.length; i++) {
        if (dk == cars[i].brand) {
           kq.push(cars[i]);
        }
    }
    localStorage.setItem('tam',JSON.stringify(kq));
    phantrang1();
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
function hiensanpham(){
    var mang=JSON.parse(localStorage.getItem('tam'));
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
function locgia1()
{
    var min=document.getElementById('nutmin').value;
    var max=document.getElementById('nutmax').value;
    if(min>max) {
        document.getElementById('nutmin').value=max;
    }
    document.getElementById('thumbMin').innerHTML='<p>'+formattien(min)+' VNĐ <-></p>';
    document.getElementById('thumbMax').innerHTML='<p>'+formattien(max)+' VNĐ</p>';
    cars=JSON.parse(localStorage.getItem('cars'));
    var temp=[];
    for(var i=0;i<cars.length;i++)
    {
        if(cars[i].gia>min && cars[i].gia<max)
        {
            temp.push(cars[i]);
        }
    }
    localStorage.setItem('tam', JSON.stringify(temp));
    phantrang1();
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
    localStorage.setItem('tam',JSON.stringify(temp));
    phantrang1();
    
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
function loctonghop(){
    
}

//------ KẾT THÚC HÀM LỌC, TÌM KIẾM  ---------

// -----  BẮT ĐẦU CHI TIẾT SẢN PHẨM ----------------------
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
// -----  KẾT THÚC CHI TIẾT SẢN PHẨM  ------------

// ----  BẮT ĐẦU PHẦN GIỎ HÀNG  -----------
function hiengiohang()
{
    checkdonhangtrung();
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
function checkdonhangtrung()
{
    var donhangs=JSON.parse(localStorage.getItem('donhangs'));
    for(var i=1;i<donhangs.length;i++)
    {
        for(var j=i+1;j<donhangs.length;j++)
        {
            if(donhangs[i].IDxe==donhangs[j].IDxe && donhangs[i].IDuser==localStorage.getItem('DN') && donhangs[j].IDuser==localStorage.getItem('DN') && donhangs[i].tinhtrang==0 && donhangs[j].tinhtrang==0)
            {
                donhangs[i].soluong=donhangs[j].soluong*1+1;
                donhangs.splice(j,1);
            }
        }
    }
    localStorage.setItem('donhangs', JSON.stringify(donhangs));
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
            <a id="delete_1" data-sp-ma="2" onclick="xoadonhang('+donhangs[i].IDdh+')" class="btn btn-danger btn-delete-sanpham">\
                <i class="fa fa-trash" aria-hidden="true"></i> Xóa </a>\
            <button onclick="hienthanhtoan('+donhangs[i].IDdh+')" class="btn btn-save" type="button">Thanh toán</button>\
        </td>\
        </tr>'
        }
    } 
    if(spgiohang!='')
    {
        spgiohang+=`<button onclick="thanhtoantatca()" class="btn btn-save" type="button">Thanh toán tất cả</button>`;
    }
    if(spgiohang=='')
    {
        document.getElementById('sptronggio').innerHTML=`<h2 style="margin-left:50%;width:100%" >BẠN CHƯA MUA SẢN PHẨN NÀO</h2>`;
    }
    else document.getElementById('sptronggio').innerHTML=spgiohang;
}
function xoadonhang(IDdh){
    if (confirm("XÁC NHẬN LỰA CHỌN") == true) {
        alert("Xóa sản phẩm giỏ hàng thành công");
        var  donhangs =JSON.parse(localStorage.getItem('donhangs'));
        var cars=JSON.parse(localStorage.getItem('cars'));
        for(var i=0;i< donhangs.length;i++){
            if(donhangs[i].IDdh==IDdh)
                {
                    for(var j=0;j< cars.length;j++){
                        if(cars[j].IDxe==donhangs[i].IDxe)
                        {
                            cars[j].soluong+=donhangs[i].soluong*1;
                            break;
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
    else {
        alert("Xóa sản phẩm giỏ hàng hàng thất bại");
        location.reload();
    }
  
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
                            cars[j].soluong+=donhangs[i].soluong*1;
                            break;
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
            alert('Cửa hàng không đủ sản phẩm');
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
            donhangs[i].thoigian=laytg();
        }
    }
    localStorage.setItem('donhangs', JSON.stringify(donhangs));
    location.reload(); 
}
function thanhtoantatca()
{
    var donhangs =JSON.parse(localStorage.getItem('donhangs'));
    for(var i = 0; i < donhangs.length;i++){
        if(donhangs[i].tinhtrang==0 && donhangs[i].IDuser==localStorage.getItem('DN'));
        {
            donhangs[i].tinhtrang=1;
            donhangs[i].thoigian=laytg();
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
            //     splichsu +='<tr>\
            //     <td>'+donhangs[i].IDdh+'</td>\
            //     <td>\
            //         <img src="'+cars[k].img+'" class="hinhdaidien">\
            //     </td>\
            //     <td>'+cars[k].tenxe+'</td>\
            //     <td class="text-right">'+donhangs[i].soluong+'</td>\
            //     <td class="text-right">'+formattien(cars[k].gia)+' VNĐ</td>\
            //     <td class="text-right">'+formattien(donhangs[i].sotien)+' VNĐ</td>\
            //     <td>\
            //         <b>Chờ xác nhận</b>\
            //     </td>\
            // </tr>'
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
                <img src="'+cars[k].img+'" class="hinhdaidien">\
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
    if(splichsu=='')
    {
        document.getElementById('splichsu').innerHTML=`<h2 style="margin-left:50%;width:100%" >BẠN CHƯA MUA SẢN PHẨN NÀO</h2>`;
    }
    else document.getElementById('splichsu').innerHTML=splichsu;
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
// ------  KẾT THÚC PHẦN GIỎ HÀNG  ----------

// ---  CÁC HÀM SẼ CHẠY KHI BẮT ĐẦU WED  --------
window.onload=khoxe(),tranghientai(),kiemtradadn();
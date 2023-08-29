//BAI 1
var total = 0;
var n = 0;

while (total < 10000) {
    n++;
    total += n;
}
document.getElementById('bai1Result').innerHTML =`
    <div>
        <p>Số nguyên n nhỏ nhất để tổng từ 1 tới n lớn hơn 10000 là ${n}
        <br>
        Tổng từ số 1 tới ${n} là ${total}</p>
    </div>
`;

//BAI 2
function calculateHandle() {
    var T = 1;
    var S = 0;
    var soX = +document.getElementById("soX").value;
    var soN = +document.getElementById("soN").value;

    for(var i = 1; i <= soN; i++) {
        T = T * soX;
        S = S + T;
    }

    document.getElementById('bai2Result').innerHTML =`
    <div>
        <p>Số x là ${soX}</p>
        <p>Số n là ${soN}</p>
        <p>Tổng là ${S}</p>
    </div>
`;
}

//BAI 3
function tinhGiaiThua() {
    var soNguyen = +document.getElementById("soNguyen").value;
    var giaiThua = 1;
    for(var i = 1; i <= soNguyen; i++) {
        giaiThua = giaiThua * i;
    }
    console.log(giaiThua);
    document.getElementById('bai3Result').innerHTML =`
    <div>
        <p>Giai thừa của số ${soNguyen} là ${giaiThua}</p>
    </div>
`;
}

//BAI 4
function inTheDiv() {
    var bai4Result = document.getElementById("bai4Result");
     for (var i = 1; i <= 10; i++) {
       var div = document.createElement("div");
       div.textContent = "Thẻ số " + i;
       if (i % 2 === 0) {
        div.style.backgroundColor = 'red';
      } else {
        div.style.backgroundColor = 'blue';
      }

      bai4Result.appendChild(div);
     }
}

//BAI 5
function inSoNguyenTo() {
    var number = +document.getElementById("number").value;

    var result = "";

    for (var i = 1; i <= number; i++) {
        result += i + '  ';
    }

    document.getElementById("bai5Result").innerHTML = result;
}
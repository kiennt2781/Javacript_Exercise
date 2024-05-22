function bai1() {
    let a = prompt("Nhập vào số a:");
    let b = prompt("Nhập vào số b:");

    a = parseFloat(a);
    b = parseFloat(b);

    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập vào hai số hợp lệ.");
        return;
    }

    if (b === 0) {
        alert("Không thể chia cho số 0.");
    } else if (a % b === 0) {
        alert(a + " chia hết cho " + b);
    } else {
        alert(a + " không chia hết cho " + b);
    }
}

function bai2() {
    let a = prompt("Nhập vào tuổi học sinh:");

    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    if (a >= 16) {
        alert("Đủ điều kiện học lớp 10");
    } else {
        alert("Không đủ tuổi học lớp 10");
    }
}

function bai3() {
    let a = prompt("Nhập vào 1 số nguyên:");

    if (isNaN(a) && Number.isInteger(a) != 0) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    if (a > 0) {
        alert("Số nguyên lớn hơn 0");
    } else if (a < 0) {
        alert("Số nguyên nhỏ hơn 0");
    } else {
        alert("Bằng 0")
    }
}

function bai4() {
    let a = prompt("Nhập vào số nguyên thứ 1:");
    if (isNaN(a) && Number.isInteger(a) != 0) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let b = prompt("Nhập vào số nguyên thứ 2:");
    if (isNaN(b) && Number.isInteger(b) != 0) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let c = prompt("Nhập vào số nguyên thứ 3:");
    if (isNaN(c) && Number.isInteger(c) != 0) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let result = Math.max(a, b, c);
    alert(result + " là số nguyên lớn nhất trong 3 số");

}

function bai5() {
    let a = prompt("Nhập vào điểm kiểm tra:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let b = prompt("Nhập vào điểm giữa kỳ:");
    if (isNaN(b)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let c = prompt("Nhập vào điểm cuối kỳ:");
    if (isNaN(c)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let result = a * 0.1 + b * 0.2 + c * 0.7
    if (result >= 8) {
        alert("Điểm tổng kết của học sinh là " + result + " học lực Giỏi");
    } else if (result >= 6 && result < 8) {
        alert("Điểm tổng kết của học sinh là " + result + " học lực Khá");
    } else if (result < 6 && result >= 4) {
        alert("Điểm tổng kết của học sinh là " + result + " học lực Trung Bình");
    } else {
        alert("Điểm tổng kết của học sinh là " + result + " học lực Yếu");
    }
}

function bai6() {
    let a = prompt("Nhập vào cạnh a:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let b = prompt("Nhập vào cạnh b:");
    if (isNaN(b)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let c = prompt("Nhập vào cạnh c:");
    if (isNaN(c)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
        alert("a, b, c là cạnh của 1 tam giác");
    } else {
        alert("a, b, c không phải là cạnh của 1 tam giác");
    }
}

function bai7() {
    let a = prompt("Nhập vào 1 số nguyên:");
    if (isNaN(a) && Math.isInteger(a) != 0) {
        alert("Không phải số nguyên vui lòng nhập vào số hợp lệ.");
        return;
    }
    if (a > 0 && a < 120) {
        alert("Số đã nhập là tuổi của 1 người");
    } else {
        alert("Số đã nhập không phải tuổi của 1 người");
    }
}

function bai8() {
    let a = prompt("Nhập vào cạnh a:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let result = a * a
    alert("Diện tích hình vuông có cạnh a là: " + result);
}

function bai9() {
    let a = prompt("Nhập vào cạnh a:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    let b = prompt("Nhập vào cạnh b:");
    if (isNaN(b)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let result = a * b
    alert("Diện tích hình chữ nhật có cạnh a và cạnh b là: " + result);
}

function bai10() {
    let a = prompt("Nhập vào cạnh a:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    let b = prompt("Nhập vào cạnh b:");
    if (isNaN(b)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    let result = (a * b) / 2
    alert("Diện tích tam giác vuông có 2 cạnh kề a và b là: " + result);
}

function bai11() {
    let a = prompt("Nhập vào hệ số a:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    let b = prompt("Nhập vào hệ số b:");
    if (isNaN(b)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    if (a === 0) {
        if (b === 0) {
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    } else {
        let x = -b / a;
        alert("Nghiệm của phương trình là x = " + x);
    }
}

function bai12() {
    let a = prompt("Nhập vào hệ số a:");
    if (isNaN(a)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    let b = prompt("Nhập vào hệ số b:");
    if (isNaN(b)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }

    let c = prompt("Nhập vào hệ số c:");
    if (isNaN(c)) {
        alert("Vui lòng nhập vào số hợp lệ.");
        return;
    }
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                alert("Phương trình có vô số nghiệm.");
            } else {
                alert("Phương trình vô nghiệm.");
            }
        } else {
            let x = -c / b;
            alert("Phương trình là phương trình bậc 1. Nghiệm của phương trình là x = " + x);
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            alert("Phương trình vô nghiệm.");
        } else if (delta === 0) {
            let x = -b / (2 * a);
            alert("Phương trình có nghiệm kép: x = " + x);
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
        }
    }
}

function bai13() {
    let c = prompt("Nhập vào nhiệt độ theo độ C:");
    c = parseFloat(c);
    if (isNaN(c)) {
        alert("Vui lòng nhập vào một giá trị hợp lệ.");
        return;
    }
    let f = c * 9 / 5 + 32;
    alert(c + " độ C tương đương với " + f + " độ F.");
}

function bai14() {
    let m = prompt("Nhập vào chiều dài theo mét:");
    m = parseFloat(m);
    if (isNaN(m)) {
        alert("Vui lòng nhập vào một giá trị hợp lệ.");
        return;
    }
    let f = m * 3.28084;
    alert(m + " mét tương đương với " + f.toFixed(2) + " feet.");
}

function bai15() {
    let a = prompt("Nhập vào biến thứ nhất:");
    let b = prompt("Nhập vào biến thứ hai:");
    function determineType(value) {
        if (value == ''){
            return 'null';
        }else if (!isNaN(value) && value.trim() !== '') {
            return 'number';
        } else if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
            return 'boolean';
        } else {
            return 'string';
        }
    }

    let type1 = determineType(a);
    let type2 = determineType(b);

    alert("Giá trị của biến thứ nhất là: " + a + ", kiểu dữ liệu: " + type1 +"\n"+
    "Giá trị của biến thứ hai là: " + b + ", kiểu dữ liệu: " + type2);
}
function bai1() {
    let arr = []
    let n = prompt("Nhập kích thước mảng: ")
    for(i = 0; i < n; i++){
        let x = prompt("Nhập giá trị tại chỉ mục thứ " + i + " của mảng");
        arr[i] = x
    }
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    alert("Mảng sau khi đảo ngược: " + arr);
}

function bai2() {
    let arr = []
    let n = prompt("Nhập kích thước mảng: ")
    for(i = 0; i < n; i++){
        let x = prompt("Nhập giá trị tại chỉ mục thứ " + i + " của mảng");
        arr[i] = x
    }

    let inputValue = prompt("Nhập giá trị cần tìm:");
    let value = Number(inputValue);

    let index = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            index = i;
        }
    }
    if (index != -1) {
        alert("Giá trị " + value + " được tìm thấy tại vị trí " + index);
    } else {
        alert("Giá trị " + value + " không có trong mảng");
    }
}

function bai3() {
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    while (true) {
        let input = prompt("Nhập vào một số bất kỳ (hoặc bấm Cancel để thoát):");

        if (input === null) {
            alert("Đã thoát khỏi chương trình.");
            break;
        }

        let number = Number(input);

        if (!isNaN(number)) {
            if (numbers.includes(number)) {
                alert("Bingo");
            } else {
                alert("Chúc bạn may mắn lần sau");
            }
        } else {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    }
}

function bai4() {
    let arr = []
    let n = prompt("Nhập kích thước mảng: ")
    for(i = 0; i < n; i++){
        let x = prompt("Nhập giá trị tại chỉ mục thứ " + i + " của mảng");
        arr[i] = Number(x)
    }

    let allNumbersValid = arr.every(num => !isNaN(num));
    if (!allNumbersValid) {
        alert("Dãy số nhập vào không hợp lệ. Vui lòng chỉ nhập các số.");
        return;
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (max !== null) {
        alert("Giá trị lớn nhất trong dãy số là: " + max);
    } else {
        alert("Mảng rỗng. Không có giá trị để tìm.");
    }
}

function displayTodoList() {
    let list = ""
    todoList.forEach((todo, index) => {
        list += String(index)
        list += " - "
        list += String(todo) 
        list += "\n"
    });
    alert("Your To-Do List: " + "\n" + list);
}

function createTodo() {
    const newTodo = prompt("Nhập nội dung todo mới:");
    if (newTodo) {
        todoList.push(newTodo);
        alert("Todo mới đã được thêm.");
        displayTodoList();
    } else {
        alert("Không có nội dung mới được nhập.");
    }
}

function readTodoList() {
    displayTodoList();
}

function updateTodo() {
    const index = parseInt(prompt("Nhập vị trí của todo bạn muốn cập nhật:")) - 1;
    if (index >= 0 && index < todoList.length) {
        const newContent = prompt("Nhập nội dung cập nhật:");
        if (newContent) {
            todoList[index] = newContent;
            alert("Todo đã được cập nhật.");
            displayTodoList();
        } else {
            alert("Không có nội dung mới được nhập.");
        }
    } else {
        alert("Vị trí không hợp lệ.");
    }
}

function deleteTodo() {
    const index = parseInt(prompt("Nhập vị trí của todo bạn muốn xóa:")) - 1;
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        alert("Todo đã được xóa.");
        displayTodoList();
    } else {
        alert("Vị trí không hợp lệ.");
    }
}
const todoList = ["Go to bed at 11pm", "Do homework at 8pm"];
function bai5() {
    
    while (true) {
        const command = prompt("Nhập vào lệnh (C - Create, R - Read, U - Update, D - Delete, Q - Quit):").toUpperCase();
        switch(command){
            case 'C': 
                createTodo()
                break
            case 'R': 
                readTodoList()
                break
            case 'U': 
                updateTodo()
                break
            case 'D': 
                deleteTodo()
                break
            case 'Q': 
                alert("Đã thoát khỏi chương trình.")
                return false
            default: 
                alert("Lệnh không hợp lệ. Vui lòng nhập lại.");
                break
        }
    }
}

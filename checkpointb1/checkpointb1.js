//bài 1
let menu = ["rau xào", "thịt luộc", "gà rán"];

function create() {
    let newDish = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
    menu.push(newDish);
    localStorage.setItem("menu", JSON.stringify(menu));
    alert("Đã thêm món ăn mới vào menu");
  }

function read() {
    let menuFromLocalStorage = JSON.parse(localStorage.getItem("menu"));
    let menuString = menuFromLocalStorage.join("\n");
    alert("Danh sách món ăn:\n" + menuString);
  }

function update() {
    let dishToUpdate = prompt("Mời người dùng nhập vào tên món muốn update");
    let index = menu.indexOf(dishToUpdate);
    if (index !== -1) {
      let newDish = prompt("Mời người dùng nhập vào tên món ăn mới");
      menu[index] = newDish;
      localStorage.setItem("menu", JSON.stringify(menu));
      alert("Đã cập nhật món ăn thành công");
    } else {
      alert("Không tìm thấy món ăn trong menu");
    }
  }

function deleteDish() {
    let dishToDelete = prompt("Mời người dùng nhập vào tên món muốn Delete");
    let index = menu.indexOf(dishToDelete);
    if (index !== -1) {
      menu.splice(index, 1);
      localStorage.setItem("menu", JSON.stringify(menu));
      alert("Đã xóa món ăn thành công");
    } else {
      alert("Không tìm thấy món ăn trong menu");
    }
  }


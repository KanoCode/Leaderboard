const board = document.getElementById("board");

const updateDom = (dataArr) => {
  board.innerHTML = "";
  dataArr.forEach((element) => {
    const li = document.createElement("li");

    li.textContent = ` ${element.user} : ${element.score}`;
    board.append(li);
  });
};

export default updateDom;

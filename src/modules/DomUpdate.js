const board = document.getElementById('board');

const updateDom = (dataArr) => {
  dataArr.forEach((element) => {
    const tableRow = document.createElement('tr');
    const Name = document.createElement('td');
    Name.textContent = element.user;
    const Score = document.createElement('td');
    Score.textContent = element.score;
    tableRow.append(Name, Score);
    board.append(tableRow);
  });
};

export default updateDom;

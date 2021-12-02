//Delete button pressed
// const delBtn = async (event) => {
//     event.preventDefault();
//     console.log(event.target)
//   };

//   document.getElementById('logTable').addEventListener('click',delBtn,false)

document.getElementById("logTable").addEventListener("click", function (event) {
  const target = event.target;
  console.log("click triggered", target);
  if (target.matches("td.delBtn *")) {
    console.log("you deleted me");
  }
});

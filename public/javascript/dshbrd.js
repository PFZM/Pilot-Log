//Delete button pressed
// const delBtn = async (event) => {
//     event.preventDefault();
//     console.log(event.target)
//   };

//   document.getElementById('logTable').addEventListener('click',delBtn,false)

document.getElementById("logTable").addEventListener("click", function (event) {
  const target = event.target.closest("td.delBtn");
  if (target) {
    const id = target.getAttribute("data-id")
    console.log("you deleted me" , id, target );
  }
});

// const button = document.querySelector("button");
// button.addEventListener("click",function(){
//   alert("クリックされました");
// });
const button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("クリックされました");
});
try {
  console.log("try節:この行は実行されます");
  undefinedFunction();
  console.log("try節:この行は実行されません");
} catch (error) {
  console.log("catch節:この行は実行されます");
  console.log(error.message);
} finally {
  console.log("finally節:この行は実行されます");
}
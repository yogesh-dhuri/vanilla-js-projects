let toastBox= document.getElementById("toastbox")

let successMsg = "Succesfully Completed";
let errorMsg = "Please fix the error";
let invalidMsg = "Invalid Input";


function show(msg){
	const toast = document.createElement("div");
	toast.classList.add('toast');
	toast.innerHTML = msg
	toastBox.appendChild(toast);

	setTimeout(()=>{
		toast.remove();
	},6000)
}

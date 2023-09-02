const input= document.getElementById('input-box');
const listContainer= document.getElementById('list');

function addTask(){
	if(input.value==''){
		alert("You must write something")
	}
	else
	{
		let li=document.createElement('li');
		li.innerHTML= `<input type="checkbox" id="checkbox"/>${input.value}<span>x</span>`
		listContainer.appendChild(li);
	}

	input.value='';
	saveData();
}

list.addEventListener("click", (e)=>{

	if(e.target.tagName=="LI"){
		e.target.classList.toggle("checked");
		// document.getElementById("checkbox").checked=true;	
		saveData();
	}
	else if(e.target.tagName=="SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
	
}, false)

function saveData(){
	localStorage.setItem('data', listContainer.innerHTML);
}

function loadData(){
	listContainer.innerHTML= localStorage.getItem('data');
}

loadData();	
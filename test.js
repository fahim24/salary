const task1 = () => {
	setTimeout(() => {
		console.log(1);
	}, 3500);
};

const task2 = () => {
	const pInput = prompt("Enter a number:");
	alert("Your number is: " + (200 + parseInt(pInput)));
};

const task3 = () => {
	console.log(location.href);
};

const task4 = () => {
	console.log(`Cookies are created to identify you when you visit a new website. The web server — which stores the website’s data — sends a short stream of identifying info to your web browser.
  Browser cookies are identified and read by “name-value” pairs. These tell cookies where to be sent and what data to recall.`);
};

const task5 = () => {
	console.log("local storage vs session storage");
};

const task6 = () => {
	console.log(
		"An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it"
	);
};

const task7 = () => {
	console.log("fetch(), setTimeOut(), callback functions etc are asynchronous in js");
};

const task8 = () => {
	console.log(
		"JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks"
	);
};

const getCart = () => {
	const cart = localStorage.getItem("cart");
	let cartObj;
	if (cart) {
		cartObj = JSON.parse(cart);
	} else {
		cartObj = {};
	}
	return cartObj;
};

const addToLocal = (name, price) => {
	const cart = getCart();
	if (cart[name]) {
		cart[name] += parseInt(price);
	} else {
		cart[name] = parseInt(price);
	}
	const cartStringified = JSON.stringify(cart);
	localStorage.setItem("cart", cartStringified);
};
const displayProduct = (name, price) => {
	const ul = document.getElementById("product-list");
	const li = document.createElement("li");
	li.innerText = `${name} - ${price}`;
	ul.appendChild(li);
};
const displayLocal = () => {
	const cart = getCart();
	for (const [name, price] of Object.entries(cart)) {
		displayProduct(name, price);
	}
};
const addToList = () => {
	const pName = document.getElementById("product-name");
	const pPrice = document.getElementById("product-price");
	const name = pName.value;
	const price = pPrice.value;
	if (!name || !price) {
		return;
	}

	displayProduct(name, price);
	addToLocal(name, price);

	pName.value = "";
	pPrice.value = "";
};

const clearList = () => {
	document.getElementById("product-list").textContent = "";
	localStorage.removeItem("cart");
};
displayLocal();

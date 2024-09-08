const testUrl = "https://fakestoreapi.com/products?limit=12";
const product = getApi(testUrl);
async function getApi(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`data ERROR : ${response.status}`);
		}
		return response.json();
	} catch (error) {
		console.log("error");
	}
}

async function addToHtml() {
	try {
		const data = await product;
		data.map((item, Index) => {
			const a = $(`<a href="#" class="item d-flex flex-column gap-2"
                    ><img src="${item.image}" alt="" />
                    <h2 class="mt-4">${item.title}</h2>
                    <div class="price">${item.price}$</div></a
                >`);
			$(".listProduct").append(a);
		});
	} catch (e) {
		const div = $(`<div class="loader"></div>`);
		// $(".listProduct").append(div);
		$(".listProduct ").append(div);
	}
}
addToHtml();

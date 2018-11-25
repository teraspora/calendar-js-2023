const months = [
	{
		name: "January",
		len: 31,
		starts: 1
	},
	{
		name: "February",
		len: 28,
		starts: 4
	},
	{
		name: "March",
		len: 31,
		starts: 4 
	},
	{
		name: "April",
		len: 30,
		starts: 0
	},
	{
		name: "May",
		len: 31,
		starts: 2
	},
	{
		name: "June",
		len: 30,
		starts: 5
	},
	{
		name: "July",
		len: 31,
		starts: 0
	},
	{
		name: "August",
		len: 31,
		starts: 3
	},
	{
		name: "September",
		len: 30,
		starts: 6
	},
	{
		name: "October",
		len: 31,
		starts: 1
	},
	{
		name: "November",
		len: 30,
		starts: 4
	},
	{
		name: "December",
		len: 31,
		starts: 6
	}
];

let monthNum = 9;
let month = months[monthNum];

document.getElementById("month-name").textContent = `${month.name} 2019`;

for (let dayNum = 1; dayNum <= month.len; dayNum++) {
	let boxNum = dayNum + month.starts - 1;
	let day = document.querySelectorAll(".day")[boxNum];
	day.textContent = dayNum;
	let r = 255 - Math.floor(Math.random() * 96);
	let g = 255 - Math.floor(Math.random() * 128);
	let b = 255 - Math.floor(Math.random() * 96);
	let dayOfWeekNum = boxNum % 7;
	if (dayOfWeekNum == 5 || dayOfWeekNum == 6) {
		[g, b] = [g-96, b-96];
	}

	day.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

for (let boxNum = 0; boxNum < 35; boxNum++) {
	let box = document.querySelectorAll(".day")[boxNum];
	if (box.textContent.trim() == "") {
		box.style.borderStyle = "none";
	}
}
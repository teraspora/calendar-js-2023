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

let monthNum = 2;
let month = months[monthNum];

document.getElementById("month-name").textContent = month.name;

for (let dayNum = 1; dayNum <= month.len; dayNum++) {
	document.querySelectorAll(".day")[dayNum + month.starts - 1].textContent = dayNum;
}
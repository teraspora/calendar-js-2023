const months = [
	{ name: 'January', len: 31, starts: 6 },
	{ name: 'February', len: 28, starts: 2 },
	{ name: 'March', len: 31, starts: 2 },
	{ name: 'April', len: 30, starts: 5 },
	{ name: 'May', len: 31, starts: 0 },
	{ name: 'June', len: 30, starts: 3 },
	{ name: 'July', len: 31, starts: 5 },
	{ name: 'August', len: 31, starts: 1 },
	{ name: 'September', len: 30, starts: 4 },
	{ name: 'October', len: 31, starts: 6 },
	{ name: 'November', len: 30, starts: 2 },
	{ name: 'December', len: 31, starts: 4 }
];

const cols = ['#3dfcff', '#ffdcbd', '#b7ffff', '#cbe6a7', '#80c4ff', '#f4c8e7', '#acfcc5']

const monthNum = 0;
const month = months[monthNum];

document.getElementById("month-name").textContent = `${month.name} 2023`;

for (let dayNum = 1; dayNum <= month.len; dayNum++) {
	const boxNum = dayNum + month.starts - 1;
	const dayOfWeekNum = boxNum % 7;
	const day = document.getElementsByClassName('day')[boxNum];
	day.textContent = dayNum;
	day.style.backgroundColor = cols[dayOfWeekNum];
}


for (let boxNum = 0; boxNum < 42; boxNum++) {
	const box = document.querySelectorAll(".day")[boxNum];
	if (box.textContent.trim() == "") {
		box.style.borderStyle = "none";
	}
}
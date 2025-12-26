// Use the module syntax to export the function
export function sayHi(name) {
    alert(`hello ${name}!`);
}

export function downloadCSV(filename, content) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(content));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
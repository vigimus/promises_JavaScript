const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuffed worked');
	} else {
			reject('Error it broke');
	}
}) 

const promise2 = new Promise((resolve, reject )=> {
	setTimeout(resolve, 100, 'Hejj')
})

const promise3 = new Promise((resolve, reject )=> {
	setTimeout(resolve, 1000, 'Poookie')
})

const promise4 = new Promise((resolve, reject )=> {
	setTimeout(resolve, 3000, 'Is it me your looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
 .then(values => {
 	console.log(values);
 }) 

promise
.then(result => result + "!");
.then(result2 => {
	throw Error
	console.log(result2);
})
.catch(() => console.log('error'))
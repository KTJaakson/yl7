class Book {
	constructor(title, autor, isbn){
		this.title = title;
		this.autor = autor;
		this.isbn = isbn;
	}
	addedToUI(){
		console.log(this.title + ' book is added to UI');
	}
	addedToLS(){
		console.log(this.title + ' book is added to LS');
	}
}
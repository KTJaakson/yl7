class UI {
	addUIelement(elementname, classname = '', textcontent = '', atributes={}){
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		if(Object.keys(atributes).lenght > 0){
			for(let key in atributes){
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
}

	addBook(book){
		const tr = this.addUIelement('tr', 'item');
		const bookName = this.addUIelement('th', 'book name',book.title);
		const bookAuthor = this.addUIelement('th', 'book author', book.autor);
		const bookISBN = this.addUIelement('th', 'book ISBN', book.isbn);
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});

		tr.appendChild(bookName);
		tr.appendChild(bookAuthor);
		tr.appendChild(bookISBN);
		tr.appendChild(link);
		const list = document.querySelector('table');
		list.appendChild(tr);

		const input = document.querySelector('#book');
		input.value = '';
		const input1 = document.querySelector('#bookAuthor');
		input1.value = '';
		const input2 = document.querySelector('#bookISBN');
		input2.value = '';

		book.addedToUI();
	}

	deleteBook(book){
		const deleteIcon = book.parentNode.lastChild;
		if(deleteIcon.textContent == "X"){
			if(confirm('Do you want to delete this book?')) {
				book.parentElement.remove();
			}
		}
	}

	deleteBooks(books){
		for (var i = books.length - 1; i >= 0; --i) {
			books[i].remove();
		}
	}

	getBooks(books){
		const tr = ui.addUIelement('tr', 'item');
		const bookName = ui.addUIelement('th', 'book name',books.title);
		const bookAuthor = ui.addUIelement('th', 'book author', books.autor);
		const bookISBN = ui.addUIelement('th', 'book ISBN', books.isbn);
		const link = ui.addUIelement('a', 'secondary-content', 'X', {'href':'#'});

		tr.appendChild(bookName);
		tr.appendChild(bookAuthor);
		tr.appendChild(bookISBN);
		tr.appendChild(link);
		const list = document.querySelector('table');
		list.appendChild(tr);
	}
}

	/*

	// help funktsion to add DOM element
	addUIelement(elementname, classname = '', textcontent = '', atributes={}){
		const element = document.createElement(elementname);
		element.className = classname;
		element.appendChild(document.createTextNode(textcontent));
		// if we want to use atributes, for example a atribute is href with value #
		if(Object.keys(atributes).lenght > 0){
			for(let key in atributes){
				element.setAttribute(key, atributes[key]);
			}
		}
		return element;
}

	addBook(book){
		// create list item
		const li = this.addUIelement('li', 'collection-item', book.name);
		// create link
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		// add link to list item
		li.appendChild(link);
		// find list to add created list item
		const list = document.querySelector('ul');
		list.appendChild(li);
		// find input to clear this value
		const input = document.querySelector('#book');
		input.value = '';
		// log to console that book is added to UI
		book.addedToUI();
	}


	deleteBook(book){

		const deleteIcon = book.nextSibling;
		if(deleteIcon.textContent == "X"){

			if(confirm('Do you want to delete this book?')) {
				book.parentElement.remove();
			}

		}

	}


	deleteBooks(books){

		while(books.firstChild){
			books.removeChild(books.firstChild);
		}

	}

	getBooks(books){
		for(let i = 0; i<books.lenght; i++){
			// create list item
			const li = this.addUIelement('li', 'collection-item', books[i].name)
			// create link
			const link = this.addUIelement('a', 'secondary-content', 'X', {'href': '#'})
			// add link to list item
			li.appendChild(link);
			// find list to add created list item
			const list = document.querySelector('ul');
			list.appendChild(li);
		}
	} */
}
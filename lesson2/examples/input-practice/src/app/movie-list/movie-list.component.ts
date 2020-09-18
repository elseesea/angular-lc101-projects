import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
	addingBlank = false;
	addingDuplicate = false;
	
	constructor() { }

	ngOnInit() {
	}

	addMovie (newTitle: string) {
		this.resetError();
		newTitle = newTitle.trim();
		this.addingBlank = this.blankMovie(newTitle);
		this.addingDuplicate = this.duplicateMovie(newTitle);
		if(!this.addingDuplicate && !this.addingBlank) {
			this.movies.push(newTitle);
		}
	}
	
	blankMovie (newTitle: string) :boolean {
		if(newTitle.trim()=='') {
			return true;
		} else {
			return false;
		}
	}
	
	duplicateMovie (newTitle: string) :boolean {
		if(this.movies.includes(newTitle)) {
			return true;
		} else {
			return false;
		}
	}
	
	resetError () {
		this.addingBlank = false;
		this.addingDuplicate = false;
	}
}

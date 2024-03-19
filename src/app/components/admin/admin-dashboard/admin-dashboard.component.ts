import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/shared-service.service';

interface Movie {
  title: string;
  description: string;
  imgurl: string;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie={
    title:'',
    description:'',
    imgurl:''
  }

constructor(private localStorageService: LocalStorageService) {}

ngOnInit() {
    this.movies = this.localStorageService.getMovies();
  }


  addMovie(): void {
    // Get the movie details from the user
    const title = this.newMovie.title;
    const description = this.newMovie.description;
    const imgurl = this.newMovie.imgurl;
// Create a new movie object
const newMovie : Movie = {
  title: title,
  description: description,
  imgurl: imgurl
};


    // Add the new movie to the list of movies
    this.movies.push(newMovie);

    // Save the list of movies to localStorage
    this.localStorageService.setMovies(this.movies);
  }



  deleteMovie(index: number): void {
    // Remove the movie from the list of movies
    this.movies.splice(index, 1);

    // Save the list of movies to localStorage
    this.localStorageService.setMovies(this.movies);
  }
}


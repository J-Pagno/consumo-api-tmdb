import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/Interfaces/Movie/IMovie';
import { MovieService } from 'src/app/services/movie.service';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  listaDeFilmes?: IMovie[];

  constructor(private movieService: MovieService) {}

  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  get name() : string {
    return this.searchForm.get('name')?.value;
  }

  searchMovie(movieName: string): void {
    this.movieService
      .getAll(movieName)
      .subscribe((movies: any) => (this.listaDeFilmes = movies.results));
  }

  submit() {
    this.searchMovie(this.name);
  }
}

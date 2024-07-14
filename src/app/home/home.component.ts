import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 ab:any[]=[]
 constructor(private movie:MovieService){}
  ngOnInit(): void {
   this.movie.getMovieData().subscribe((data)=>{ this.ab.push(data) 
   })

  }
}

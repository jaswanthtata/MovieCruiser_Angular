import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie_detail.component.html',
  styleUrls: ['./movie_detail.component.css'],
  providers:[AppService]
})
export class MovieDetailComponent implements OnInit 
{
	a=[];
  constructor(private appservice:AppService, private route:ActivatedRoute) { }

  ngOnInit(): void
  {
  	console.log("inside moviecpom");
  	this.route.params.switchMap((params: Params) => this.appservice.getMovie(params['movie'])).subscribe(a => this.a = a);
  }

}

export class Movie
{
	imdbID:string;
	title:string;
	year:string;
	poster:string;

	constructor(imdbID,title,year,poster)
	{
		this.imdbID = imdbID;
		this.title = title;
		this.year = year;
		this.poster = poster;
	}

	clone()
	{
		return new Movie(this.imdbID,this.title,this.year,this.poster);
	}
}
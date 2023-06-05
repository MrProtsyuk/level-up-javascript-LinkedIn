// Write your code here
function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function() {
  return `${this.title}, a ${this.genre} file directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
}

const Marky = new Movie ("Marky", "MaRky", "Scary", 2015, "5/5");

console.log(Marky);
console.log(Marky.getOverview());
function Festival() {
    this.listOfAllMovies = [];
    this.listOfPrograms = [];
}

function Movie (title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
};

Movie.prototype.getGenre = function() {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.legth-1].toUpperCase();
    return firstLetter + lastLetter
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.getGenre();
}
"use strict";

(function () {



    function Genre(name){

        this.name = name; 

        this.getData = function(){


         return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();


        };

    };


    function Movie(title, genre, length){

        this.title = title;
        this.genre = genre;
        this.length = length;


        this.getData = function(){



        };


    };


    function Program(date){

        this.date = new Date (date);

        const listOfMovies = [];

        const totalNumberOfMOvies = 0;

        this.addMovie = function(movie) {
            this.listOfMovies.push(movie);
        };

        this.getTotalNumberOfMovies = function() {
            return this.listOfMovies.length;
        };

        return listOfMovies +" "+ totalNumberOfMOvies;
    };

    function Festival(){




    };






})();
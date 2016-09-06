# react-starwars
Homework for GL React course

# Hometask #1

Create web application using React to serve data from [http://swapi.co](http://swapi.co/)

* User should see person's details available through `api/people/:id` endpoint
* User should be able to move to different person's details page using `previous`, `next` navigation buttons
* A list of films should be displayed at the same page
  * this list are going to be different for every person (it can be found in `films` field of `api/people/:id` response)
  * film details should be fetched differently through `api/films/:id` endpoint
  * every film entity should be a separate component
* Any type of CSS styling (inline, plain CSS, preprocessing) could be used for this task

_Done in 'homework1' branch_

# Hometask #2

Continue working on application that was created in [Hometask #1](https://github.com/dnbard/react-tutorial/blob/master/hometask_1.md)

* Add routing to the existing application
  * In example: url `http://localhost:9000/persons/5` should open Persons component with id=5 (<Persons pid=5 />)
  * `Previous` and `Next` buttons should use routing
  * hash history could be used
* All components should be tested with help of [Enzyme](https://github.com/airbnb/enzyme)

_Done in master branch_

***Movie Explorer App***

Movie Explorer is a React web application that allows users to explore and discover information about movies, including details such as name, image, release date, and summary.

***Wireframe***
https://docs.google.com/document/d/1L7jpElgcfC50Sp18EgfZjEgJpQJXU6dNeFIpGM1xneI/edit


***Github Repository***
Movie Explorer GitHub Repository - https://github.com/tkim0615/Phase-2-Movies-Project

***CRUD Routes***
GET: Retrieve movie data.
POST: Add new movie data.


***React Router Routes***
Route: /(root route)
Purpose: Used for landing page.

Route: /search
Purpose: Used for searching movies.

Route: /coming-soon
Purpose: Display upcoming movies.

Route: /new-movie-form
Purpose: Form for adding new movie data.


***Component hierarchy***

- **App.js**
  - **Header**
  - **MoviePage**
    - States:
      - `movieList`: List of movies.
      - `searchTerm`: Current search term.
    - **MovieList**
      - Prop:
        - `movieList`: List of movies to display.
    - **Form**
      - States:
        - `formData`: Data from the form.
      - Events:
        - `onSubmit`: Event triggered on form submission.
    - **Search**
      - Prop:
        - `searchTerm`: Current search term.
      - Events:
        - `onChange`: Event triggered on search term change.






***Stretch Goals***
1. DELETE: Delete movie data
2. Dark Mode feature: Toggle between dark and light mode
3. PATCH: Modify release date for coming soon movies

```json
[
  {
    "id": 1,
    "name": "Titanic",
    "image": "..." ,
    "release_year": 1997,
    "summary": "Titanic is about..."
  },
  {
    "id": 2,
    "name": "Inception",
    "image": "...",
    "release_year": 2010,
    "summary": "Inception is about..."
  }
]
```
































# Personal Bookshelf

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- Search for books by title
- View real-time search results as the user types
- Add books to a personal bookshelf
- View and manage the personal bookshelf
- Persistent bookshelf data stored in the browser's localStorage

## Installation

1. Clone the repository:

```
git clone https://github.com/Vikassinghrathor/Personal_Bookshelf.git
```

2. Navigate to the project directory:

```
cd personal-bookshelf
```

3. Install dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm start
```

2. Open your web browser and visit `http://localhost:3000` to access the application.

3. Use the search input field to search for books by title.

4. Click the "Add to Bookshelf" button to add a book to your personal bookshelf.

5. Click the "My Bookshelf" button to navigate to your personal bookshelf page.

6. On the personal bookshelf page, you can view and manage the books you've added.

## Dependencies

- React
- React Router
- Lodash (for debouncing)

## Deployment

To deploy the application, follow these steps:

1. Build the production-ready bundle:

```
npm run build
```

2. Deploy the contents of the `build` directory to your preferred hosting platform (e.g., Netlify, GitHub Pages).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
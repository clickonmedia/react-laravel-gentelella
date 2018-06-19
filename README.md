
# React Laravel Gentelella
React Laravel dashboard using Bootstrap and JWT authentication

Based on:

## Gentelella
Free Bootstrap 3 Admin Template
https://github.com/puikinsh/gentelella
https://colorlib.com/polygon/gentelella/index.html

## React Gentelella
React implementation of a bootstrap 3 Admin Template Gentelella
https://github.com/Nearsoft/react-gentelella

## react-laravel-with-jwt-authentication
Boilerplate for reactjs and laravel with JWT authentication
https://github.com/sumityadavbadli/react-laravel-with-jwt-auth


# Usage:
1. Rename .env.example to .env
2. Update DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD, and Social IDs in .env file to yours.
3. In command line :
   - composer update
   - Php artisan key:generate
   - php artisan migrate
4. npm install
5. npm run dev

# run locally:
mysql.server start
php artisan serve --port=8080
npm run watch

# api examples:
1. JWT authenticated request:
	- curl -X GET -H "Authorization: Bearer <token here>" "http://127.0.0.1:8080/api/hello"

# features:
This repository already configured with:
- Semantic UI React => https://react.semantic-ui.com/introduction
- Animate css => https://daneden.github.io/animate.css/
- Redux persist (For local storage) => https://www.npmjs.com/package/redux-persist
- Socialite => (https://laravel.com/docs/5.5/socialite)

# To-Do list :
- User registration => Done
- User login  => Done
- Forgot password => Done
- Limit login attempts
- social login => Done (Facebook, Twitter, LinkedIn, Google)

This project is open for contribution.



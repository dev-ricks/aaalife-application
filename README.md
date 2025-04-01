Project can run in a Docker container:

replace .env placeholder file with correct .env file or settings

REACT_APP_ROCKET_SEARCH_USERS_API_HOST=

REACT_APP_ROCKET_SEARCH_USERS_API_KEY=

REACT_APP_ROCKET_SEARCH_USERS_API_URL=



Execute the following commands:

docker build -t aaalife-app .

docker run -p 3000:80 aaalife-app



visit link in your browser:

http://localhost:3000



application has two pages to visit:

http://localhost:3000/search

http://localhost:3000/results

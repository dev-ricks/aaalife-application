Project can run in a Docker container:

replace .env placeholder file with correct .env file or settings these settings are in the aaalife interview project document:

REACT_APP_ROCKET_SEARCH_USERS_API_HOST=

REACT_APP_ROCKET_SEARCH_USERS_API_KEY=

REACT_APP_ROCKET_SEARCH_USERS_API_URL=

(if api is down for some reason, you can relace the url setting with ./search_users_resonse.json to see the content displayed in application, this file was taken from api example in docs)



Execute the following commands:

docker build -t aaalife-app .

docker run -p 3000:80 aaalife-app



visit link in your browser:

http://localhost:3000



application has two pages to visit:

http://localhost:3000/search

http://localhost:3000/results

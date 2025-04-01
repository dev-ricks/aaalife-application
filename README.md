Project can run in a Docker container:

Execute the following commands:

docker build -t aaalife-app .
docker run -p 3000:80 aaalife-app

visit link in your browser:
http://localhost:3000

application has two pages to visit:
http://localhost:3000/search
http://localhost:3000/results

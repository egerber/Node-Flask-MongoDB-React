# Containerized Full-stack setup with MongoDB, Flask and NodeJs (Typescript), and React (Typescript)
<div style="display:flex;flex-direction:row;background-color:white;flex:1;">
<img style="padding:10;height:50px" src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png">
<img style="padding:10;height:50px" src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg">
<img style="padding:10;height:50px" src="https://miro.medium.com/max/438/1*0G5zu7CnXdMT9pGbYUTQLQ.png">
<img style="padding:10;height:50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png">
<img style="padding:10;height:50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png">
</div>



# Containerized Setup

## 1. Prerequisites
install docker and docker-compose

## 2. Starting‚

run
<code>docker-compose build</code>
and <code>docker-compose up -d</code> (deamon)

### Service specific output (stdout)
* <b>Flask</b>
    * <code>docker-compose flask --follow</code>
* <b>Node</b>
    * <code>docker-compose node --follow</code>
* <b>MongoDB</b>
    * <code>docker-compose mongo --follow</code>

### External Volumes
for the flask and node backend, external data can be mounted into the container via the directory <code>data/flask</code> or <code>data/node</code> respspectively.

Inside the containers, this volume can be accessed over <code>/data</code>. The mongo database saves all files in the directory <code>data/db</code>

### External APIs
#### Flask
The flask endpoint can be reached over <code>http://localhost:5000</code>
- e.g. <code>http://localhost:5000/test</code>

#### Node
The node endpoint can be reached over <code>http://localhost:3000</code>
- e.g. <code>http://localhost:3000/test</code>


## Local Setup

### Node (folder ./node)
inside node folder

<pre>
npm install
npm run serve
</pre>

### Flask (folder ./flask)
will use the configurations specified in [.env](flask/.env)
<pre>
pip install -r requirements.txt
flask run
</pre>

### React (folder ./react)
<pre>
npm install
npm run start
</pre>

### MongoDB
For the current setup, mongoDB must run on port 27027. You can either install and run mongodb locally or connect to a remote server. The default credentials for mongodb are:
<pre>
MONGO_INITDB_DATABASE: my_initial_db
MONGO_INITDB_ROOT_USERNAME: root
MONGO_INITDB_ROOT_PASSWORD: rootpassword
</pre>


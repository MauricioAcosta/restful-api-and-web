# restful-api-and-web

Restful API with CR actions (create and retrieve / read from CRUD) using Java with Docker and Angular Framework implementing the API

## Requirements

- git **> 2**
- nodejs **> 10.15.0**
- angular **10**
- maven **3.6.3**
- openjdk **11**
- docker **> 19**

## Run docker-compose
- postgresql
- web

```bash
    cd restful-api-and-web
    docker-compose up -d --build
```
## Run restful

```bash
    cd api && mvn clean package -DskipTests && java -jar target/*.jar
```
# cmu_soc_research
pull geoserver image
```
docker run -d --name tomcat_geoserver \
    -v $(pwd)/tomcat_webapps/:/usr/local/tomcat/webapps/ \
    -p 8080:8080 tomcat
```
pull postgis image
```
docker run -d --name postgis \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=1234 \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v $(pwd)/pg_data/:/var/lib/postgresql/data \
    postgis/postgis
```
start docker compose
```
docker-compose up --no-cache
docker-compose up -d --no-cache
docker-compose up --force-recreate
```

remove all container
```
docker ps -aq | xargs docker stop | xargs docker rm
```

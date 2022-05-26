# cmu_soc_research

docker run -d --name tomcat_geoserver \
    -v $(pwd)/tomcat_webapps/:/usr/local/tomcat/webapps/ \
    -p 8080:8080 tomcat

docker run -d --name postgis \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=1234 \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v $(pwd)/pg_data/:/var/lib/postgresql/data \
    postgis/postgis
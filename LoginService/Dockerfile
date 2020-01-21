FROM java:8-jre
WORKDIR /usr/src
ENV MYSQL_HOST=localhost
ENV MYSQL_DATABASE=testdb
ENV MYSQL_USER=dbuser1
ENV MYSQL_PASSWORD=pass
COPY ./target/LoginService-0.0.1-SNAPSHOT.jar LoginService-0.0.1-SNAPSHOT.jar
#EXPOSE 8082
ENTRYPOINT ["java","-jar","/usr/src/LoginService-0.0.1-SNAPSHOT.jar"]

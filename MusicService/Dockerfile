FROM java:8-jre
WORKDIR /usr/src

COPY ./target/MusicService-0.0.1-SNAPSHOT.jar MusicService-0.0.1-SNAPSHOT.jar
#EXPOSE 8001
ENTRYPOINT ["java","-jar","/usr/src/MusicService-0.0.1-SNAPSHOT.jar"]

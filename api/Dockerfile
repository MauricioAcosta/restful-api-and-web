FROM openjdk:11

VOLUME /tmp

ADD ./target/prueba-0.0.1-SNAPSHOT.jar prueba.jar

EXPOSE 8080

ENTRYPOINT java -jar /prueba.jar
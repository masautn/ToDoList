#
# Build stage
#
FROM maven:3.8.4-openjdk-17 as build
COPY src /home/app/src
COPY pom.xml /home/app
WORKDIR /home/app
RUN mvn install -DskipTests

#
# Package stage
#
FROM openjdk:17-oracle
COPY --from=build /home/app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
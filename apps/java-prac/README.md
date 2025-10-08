# Run

```bash
yarn nx run java-prac:java
```

# Test

We need to install junit 5 dependencies

```bash
cd apps/java-prac/lib && curl -L -O https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/1.10.0/junit-platform-console-standalone-1.10.0.jar
```

# Java Dependency Resolution Explained

1. Package Declaration Issues

Problem: Your package declarations are incorrect:

MainTest.java declares: package main.com.example;
Main.java declares: package main.java.com.example;
Java Package Rules:

Package names must match the directory structure exactly
Your file structure is: src/main/java/com/example/
Therefore, the package should be: com.example (NOT main.java.com.example)

2. Java Dependency Resolution Methods

Java resolves dependencies in several ways:

- Classpath-based (What you're using)

Dependencies are JAR files on the classpath
You have junit-platform-console-standalone-1.10.0.jar in lib/
Java needs to know where to find these JARs

- Build Tools (Maven/Gradle)

`pom.xml (Maven)` or `build.gradle (Gradle)`

Automatically downloads and manages dependencies
More modern and recommended approach.

```bash
brew install maven
```

- Module System (Java 9+)

Uses module-info.java files
More advanced dependency management

# Maven

Maven is conceptually similar to Yarn.

| Feature               | Maven (Java)                              | Yarn (JavaScript)                                |
| --------------------- | ----------------------------------------- | ------------------------------------------------ |
| Language ecosystem    | Java / JVM                                | JavaScript / Node.js                             |
| Dependency descriptor | `pom.xml`                                 | `package.json`                                   |
| Dependency repository | Maven Central (or other repos)            | npm registry                                     |
| Install dependencies  | `mvn install` or `mvn dependency:resolve` | `yarn install`                                   |
| Build system          | Yes (compiles, tests, packages JARs/WARs) | Partial (mostly dependency management + scripts) |

## Maven commands

```bash
# 1️⃣ Download all dependencies
mvn dependency:resolve

# 2️⃣ Compile the project (also downloads dependencies automatically)
mvn compile
# Compile & run
mvn compile exec:java

# 3️⃣ Run tests
mvn test

# 4️⃣ Package into a JAR/WAR file
mvn package
```

## String literal with Java

| Concept        | JavaScript             | Java                              |
| -------------- | ---------------------- | --------------------------------- |
| String literal | `"hello"` or `'hello'` | `"hello"`                         |
| Multiline      | `` `multi\nline` ``    | `"""multi\nline"""` (Java 15+)    |
| Interpolation  | `` `Hello ${name}` ``  | `String.format("Hello %s", name)` |
| Char literal   | `'a'`                  | `'a'`                             |

## How to run CheckScore

1. Direct Java compilation & execution

```bash
cd /Users/taka/code/mdh/js-design-patterns-for-react/apps/java-prac/src/code-challenge/easy/1-check-score && javac CheckScore.java && java CheckScore
```

2. Single file execution

```bash
# After going into the folder
cd <...the file folder>
java CheckScore.java
```

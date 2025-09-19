# Write a function to determine the order of characters in an alien language.

## Instructions

Assume you suddenly find a list of words from an alien language. If they are sorted in ascending order of their language, return the order of all characters present in the list.

For example, if the list of words are `["ba", "cb", "cd", "ad"]`,

From "ba", we know 'b' comes before 'a': "ba".
From "cb", we know 'c' comes before 'b': "cba".
From "cd" and "ad", we know 'd' comes after 'c' and 'a': "cbad".
Thus, the order of all characters is "cbad".

Return the order of all characters from the list of words wordsList, which is sorted in an alien language.

Test Input

wordsList[] = `["wrt", "wrf", "er", "ett", "rftt"]`
Expected Output

`"wertf"`

Reason: Here,

From "wrt", we know 'w' comes before 'r' and 'r' comes before 't': "wrt".
From "wrf" and "rftt", we know "wr" comes before 'f' and 'f' comes before 't': "wrft".
From "er" and "ett", we know 'e' comes after 'r' and 't': "werft".
Thus, the order of all characters is "wertf".

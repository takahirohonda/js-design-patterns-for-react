describe('Longest Substring', () => {
  it('should return the length of the longest substring without repeating characters', () => {
    const longestSubstring = (s: string) => {
      const charIndexMap: { [key: string]: number } = {}
      let maxLength = 0
      let start = 0

      for (let i = 0; i < s.length; i++) {
        if (charIndexMap[s[i]] !== undefined && charIndexMap[s[i]] >= start) {
          start = charIndexMap[s[i]] + 1
        }
        charIndexMap[s[i]] = i
        maxLength = Math.max(maxLength, i - start + 1)
      }
      return maxLength
    }
    expect(longestSubstring('abcabcbb')).toEqual(3)
    expect(longestSubstring('bbbbb')).toEqual(1)
    expect(longestSubstring('pwwkew')).toEqual(3)
    expect(longestSubstring('')).toEqual(0)
    expect(longestSubstring('dvdf')).toEqual(3)
  })
})

# Calendar utils

## (1) How to determine the number of days in a month dynamically

`new Date(year, month, 0)` -> Setting the day to `0` makes JS return the last day of the previous month.

```ts
new Date(year, month + 1, 0).getDate()
```

## (2) Get the week number

```ts
const date = new Date('2024-04-15')
const weekNumber = new Intl.DateTimeFormat('en-US', { week: 'numeric' }).format(
  date
)
console.log(weekNumber)
```

## (3) Get dates from year and week number

```ts
function getDatesFromWeek(year, weekNumber) {
  // Get the first day of the year
  const firstDayOfYear = new Date(year, 0, 1)

  // Get the first Monday of the year
  const dayOfWeek = firstDayOfYear.getDay() || 7 // Get day of the week (1-7)
  const diffToMonday = dayOfWeek - 1 // Adjust to Monday

  // Calculate the start of the desired week
  const startOfWeek = new Date(firstDayOfYear)
  startOfWeek.setDate(
    firstDayOfYear.getDate() - diffToMonday + (weekNumber - 1) * 7
  )

  // Generate the dates for the full week
  const weekDates = []
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    weekDates.push(date)
  }

  return weekDates
}

// Example Usage:
const year = 2024
const weekNumber = 16
const dates = getDatesFromWeek(year, weekNumber)

console.log(dates.map((date) => date.toLocaleDateString())) // Output the dates in a readable format
```

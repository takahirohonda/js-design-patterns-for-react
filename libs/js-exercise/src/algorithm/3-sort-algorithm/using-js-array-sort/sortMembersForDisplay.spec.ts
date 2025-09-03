import { EntityType, sortMemberForDisplay } from './sortMembersForDisplay'

describe('sortMembersForDisplay', () => {
  it.each([
    // Companies go last, others sorted alphabetically
    [
      [
        { displayName: 'Zoe', entityType: EntityType.INDIVIDUAL },
        { displayName: 'Company Y', entityType: EntityType.COMPANY },
        { displayName: 'Alice', entityType: EntityType.INDIVIDUAL },
        { displayName: 'Company X', entityType: EntityType.COMPANY },
      ],
      ['Alice', 'Zoe', 'Company X', 'Company Y'],
    ],
    [
      [
        { displayName: 'Company Y', entityType: EntityType.COMPANY },
        { displayName: 'Bob', entityType: EntityType.INDIVIDUAL },
        { displayName: 'Alice', entityType: EntityType.INDIVIDUAL },
      ],
      ['Alice', 'Bob', 'Company Y'],
    ],
    [
      [
        { displayName: 'Company Z', entityType: EntityType.COMPANY },
        { displayName: 'Company A', entityType: EntityType.COMPANY },
        { displayName: 'Alice', entityType: EntityType.INDIVIDUAL },
      ],
      ['Alice', 'Company A', 'Company Z'], // Companies sorted alphabetically among themselves
    ],
    [
      [
        { displayName: 'Bob', entityType: EntityType.INDIVIDUAL },
        { displayName: 'Alice', entityType: EntityType.INDIVIDUAL },
      ],
      ['Alice', 'Bob'],
    ],
    [
      [{ displayName: 'Company X', entityType: EntityType.COMPANY }],
      ['Company X'],
    ],
    [[], []],
  ])('sorts %j to %j', (input, expectedOrder) => {
    const sorted = sortMemberForDisplay([...input])
    expect(sorted.map((m) => m.displayName)).toEqual(expectedOrder)
  })
})

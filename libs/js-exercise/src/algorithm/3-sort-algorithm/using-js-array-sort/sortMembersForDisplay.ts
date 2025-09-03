export enum EntityType {
  COMPANY = 'COMPANY',
  INDIVIDUAL = 'INDIVIDUAL',
}

export type MemberDataForDisplay = {
  displayName: string
  entityType: EntityType
}
export const sortMemberForDisplay = (members: MemberDataForDisplay[]) => {
  // Implement method here
}

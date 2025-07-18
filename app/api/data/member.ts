export type MemberStatusType = {
  isMember: boolean;
}
export type MemberInfoType = {
  availableCredit: number;
  creditLimit: number;
}

export const memberStatus: MemberStatusType = {
  isMember: true,
}

export const memberInfo: MemberInfoType = {
  availableCredit: 100000,
  creditLimit: 500000,
}

export const memberName: string = "テスト太郎"
import {
  type ApiOptionsType,
  type ResponseType,
  mockApiResponse
} from "~/api/default"
import {
  type MemberStatusType,
  type MemberInfoType,
  memberStatus,
  memberInfo,
  memberName,
} from "~/api/data/member"

export const getMemberStatusApi = (
  options: ApiOptionsType = {}
): Promise<ResponseType<MemberStatusType>> => {
  return mockApiResponse<MemberStatusType>(memberStatus, options)
}

export const getMemberInfoApi = (
  options: ApiOptionsType = {}
): Promise<ResponseType<MemberInfoType>> => {
  return mockApiResponse<MemberInfoType>(memberInfo, options)
}

export const getMemberApi = (
  options: ApiOptionsType = {}
): Promise<ResponseType<string>> => {
  return mockApiResponse<string>(memberName, options)
}
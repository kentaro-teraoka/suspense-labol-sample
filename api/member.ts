import {
  type ApiOptionsType,
  type ResponseType,
  mockApiResponse
} from "~/api/default"

export const getMemberApi = (
  options: ApiOptionsType = {}
): Promise<ResponseType<string>> => {
  return mockApiResponse<string>("テスト太郎", options)
}
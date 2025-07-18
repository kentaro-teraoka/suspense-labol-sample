import {
  type ApiOptionsType,
  type ResponseType,
  mockApiResponse
} from "~/api/default"
import {
  type AnnounceType,
  announces,
} from "~/api/data/announce"

export const getImportantAnnouncesApi = (
  options: ApiOptionsType = {}
): Promise<ResponseType<AnnounceType[]>> => {
  return mockApiResponse<AnnounceType[]>(announces, options)
}
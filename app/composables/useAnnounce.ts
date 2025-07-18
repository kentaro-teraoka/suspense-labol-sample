import { getImportantAnnouncesApi } from "../api/announce";
import type { AnnounceType } from "../api/data/announce";

export const useAnnounce = () => {
  const { data: importantAnnounces } = useAsyncData<AnnounceType[] | null>("importantAnnounces", async () => {
    const res = await getImportantAnnouncesApi();
    return res.data;
  })

  return {
    importantAnnounces,
  }
}
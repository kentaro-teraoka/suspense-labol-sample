import { getImportantAnnouncesApi } from "../api/announce";
import type { AnnounceType } from "../api/data/announce";

export const useAnnounce = () => {
  const { data: importantAnnounces, pending: importantAnnouncesPending } = useAsyncData<AnnounceType[]>("importantAnnounces", async () => {
    const res = await getImportantAnnouncesApi({success: true, delay: 1500});
    return res.data ?? [];
  })

  return {
    importantAnnounces,
    importantAnnouncesPending,
  }
}
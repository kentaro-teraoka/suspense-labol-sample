export type AnnounceType = {
  announceId: string;
  announcedAt: string;
  title: string;
}

export const announces: AnnounceType[] = [
  {
    announceId: "1",
    announcedAt: "2025-01-01",
    title: "重要なお知らせ1",
  },
  {
    announceId: "2",
    announcedAt: "2025-02-01",
    title: "重要なお知らせ2",
  },
]
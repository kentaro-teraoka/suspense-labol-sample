import { getMemberStatusApi } from '~/api/member';
import { type MemberStatusType } from '~/api/data/member';

export const useMemberStatus = () => {
  // TODO: 複数回APIリクエストが走る可能性がある
  const { data: memberStatus } = useAsyncData<MemberStatusType | null>("memberStatus", async () => {
    const res = await getMemberStatusApi();
    return res.data;
  })

  return {
    memberStatus,
  }
}
import { getMemberApi, getMemberInfoApi, getMemberStatusApi } from '~/api/member';
import { type MemberInfoType, type MemberStatusType } from '~/api/data/member';

export const useMember = () => {
  // TODO: 複数回APIリクエストが走る可能性がある
  const { data: memberStatus } = useAsyncData<MemberStatusType | null>("memberStatus", async () => {
    const res = await getMemberStatusApi();
    return res.data;
  })
  
  const { data: memberName } = useAsyncData<string | null>("memberName", async () => {
    const res = await getMemberApi();
    return res.data;
  })

  const { data: memberInfo } = useAsyncData<MemberInfoType | null>("memberInfo", async () => {
    const res = await getMemberInfoApi();
    return res.data;
  })

  return {
    memberStatus,
    memberName,
    memberInfo,
  }
}
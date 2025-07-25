import { getMemberApi, getMemberInfoApi, getMemberStatusApi } from '~/api/member';
import { type MemberInfoType, type MemberStatusType } from '~/api/data/member';

export const useMember = () => {
  // TODO: 複数回APIリクエストが走る可能性がある
  const { data: memberStatus, pending: memberStatusPending } = useAsyncData<MemberStatusType | null>("memberStatus", async () => {
    const res = await getMemberStatusApi({success: true, delay: 2000});
    return res.data ?? null;
  })
  
  const { data: memberName, pending: memberNamePending } = useAsyncData<string>("memberName", async () => {
    const res = await getMemberApi();
    return res.data ?? "";
  })

  const { data: memberInfo, pending: memberInfoPending } = useAsyncData<MemberInfoType | null>("memberInfo", async () => {
    const res = await getMemberInfoApi({success: true, delay: 3000});
    return res.data ?? null;
  })

  return {
    memberStatus,
    memberStatusPending,
    memberName,
    memberNamePending,
    memberInfo,
    memberInfoPending,
  }
}
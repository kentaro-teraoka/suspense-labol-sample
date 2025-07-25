import { type InvoiceFormType } from "../api/data/invoice";
import { getInvoiceFormApi, getPurposeOptionsApi } from "../api/invoice";

const defaultInvoiceForm: InvoiceFormType = {
  id: '',
  usage: '',
  invoice: null,
  amount: null,
  company: '',
  person: '',
  phone: '',
  purpose: '',
  evidence: null,
}

export const useInvoice = (invoiceId: string = "") => {
  const invoiceForm = useState<InvoiceFormType>("invoiceForm", () => defaultInvoiceForm);

  const { pending: invoiceFormPending } = useAsyncData<InvoiceFormType>(`invoiceForm:${invoiceId}`, async () => {
    if(!invoiceId) return defaultInvoiceForm
    const res = await getInvoiceFormApi(invoiceId, {success: true, delay: 3000})
    invoiceForm.value = res.data ?? defaultInvoiceForm
    return invoiceForm.value
  })

  const { data: purposeOptions, pending: purposeOptionsPending } = useAsyncData<string[]>("purposeOptions", async () => {
    const res = await getPurposeOptionsApi({success: true, delay: 1000});
    return res.data ?? [];
  })

  return {
    invoiceForm,
    invoiceFormPending,
    purposeOptions,
    purposeOptionsPending,
  }
}
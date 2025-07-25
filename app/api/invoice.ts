import {
  type ApiOptionsType,
  type ResponseType,
  mockApiResponse
} from "~/api/default"
import {
  type InvoiceFormType,
  invoiceFormHistories,
} from "~/api/data/invoice"

export const getInvoiceFormApi = (
  invoiceId: string,
  options: ApiOptionsType = {}
): Promise<ResponseType<InvoiceFormType | null>> => {
  const invoiceForm = invoiceFormHistories.find((item) => item.id === invoiceId);

  return invoiceForm
    ? mockApiResponse<InvoiceFormType>(invoiceForm, options)
    : mockApiResponse<null>(null, options)
}
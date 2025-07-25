import {
  type ApiOptionsType,
  type ResponseType,
  mockApiResponse
} from "~/api/default"
import {
  type InvoiceFormType,
  invoiceFormHistories,
  purposeOptions,
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

export const getPurposeOptionsApi = (
  options: ApiOptionsType = {}
): Promise<ResponseType<string[] | null>> => {
    return mockApiResponse<string[]>(purposeOptions, options)
}
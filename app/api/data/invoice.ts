export type InvoiceFormType = {
  id: string
  usage: "個人" | "法人" | "",
  invoice: File | null,
  amount: number | null,
  company: string,
  person: string,
  phone: string,
  purpose: string,
  evidence: File | null,
}

export const invoiceFormHistories: InvoiceFormType[] = [
  {
    id: "1",
    usage: "個人",
    invoice: null,
    amount: 150000,
    company: "株式会社A",
    person: "田中 太郎",
    phone: "0312345678",
    purpose: "資金調達",
    evidence: null,
  },
  {
    id: "2",
    usage: "個人",
    invoice: null,
    amount: 80000,
    company: "株式会社B",
    person: "佐藤 花子",
    phone: "0698765432",
    purpose: "設備投資",
    evidence: null,
  },
  {
    id: "3",
    usage: "法人",
    invoice: null,
    amount: 120000,
    company: "株式会社C",
    person: "鈴木 一郎",
    phone: "0521112222",
    purpose: "その他",
    evidence: null,
  },
]

export const purposeOptions: string[] = [
  "資金調達",
  "設備投資",
  "その他",
]
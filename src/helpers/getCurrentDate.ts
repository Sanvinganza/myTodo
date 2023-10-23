import { format } from "date-fns"

export const getCurrentDate = () => {
  return format(new Date(), "yyyy.MM.dd HH:MM")
}

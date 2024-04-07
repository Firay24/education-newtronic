import { format } from "date-fns";

export const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "MMMM dd, yyyy");
};

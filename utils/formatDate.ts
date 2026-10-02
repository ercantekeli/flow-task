export function formatDate(date: string) {
  const transformDate = new Date(date);
  if (isNaN(transformDate.getTime())) {
    return "format hatası";
  }
  const formattedDate = new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(transformDate);

  return formattedDate;
}

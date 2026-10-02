export function isOverdue(date: string) {
  const transformDate = new Date(date);
  if (isNaN(transformDate.getTime())) {
    return "error";
  }
  const controlDue = transformDate.getTime() > Date.now();
  return controlDue;
}

export const getInitials = (fullName: string): string => {
  if (!fullName) return "";
  return fullName
    .split(" ")
    .map((item) => item[0]?.toUpperCase())
    .join("");
};

export const getName = (fullName: string): string => {
  return fullName?.split(" ")[0]?.trim() || "there";
};

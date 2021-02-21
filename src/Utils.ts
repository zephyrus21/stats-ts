export const dateStringToDate = (dateString: string): Date => {
  const date = dateString.split('/').map((value: string) => parseInt(value));

  return new Date(date[2], date[1], date[0]);
};

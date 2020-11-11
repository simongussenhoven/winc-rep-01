
const expirationDate = (date) => {
    const splitDate = date.split("/");
    const month = parseInt((splitDate[0]-1));
    const year = parseInt(`20${splitDate[1]}`);
    const newDate = new Date(year,month, 1, 12); //2021-02-01T11:00:00.000Z
    return newDate;
}

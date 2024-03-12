export const formatExpiredAt = (expiresInSeconds: number) => {
    const currentDate = new Date();
    const expiresAtDate = new Date(currentDate.getTime() + expiresInSeconds * 1000);
    return expiresAtDate;
}
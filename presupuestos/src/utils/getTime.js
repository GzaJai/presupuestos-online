export const getShortDate = (date = new Date()) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
};

export const getExpireDate = (daysToAdd = 0, date = new Date()) => {

    const resultDate = new Date(date);
    
    resultDate.setDate(resultDate.getDate() + daysToAdd);
    
    const day = resultDate.getDate();
    const month = resultDate.getMonth() + 1;
    const year = resultDate.getFullYear();

    return `${day}-${month}-${year}`;
};


export const getDate = () => {
    return Date.now()
};
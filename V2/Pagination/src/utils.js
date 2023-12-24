const paginate = (data, itemsPerPage) => {
    const amountOfPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = Array.from({length: amountOfPages},(_, index)=>{
        const items = data.slice(index * itemsPerPage, (index + 1) * itemsPerPage);
        return items;
    });
    return paginatedData;
};

export default paginate;

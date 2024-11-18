export const checkout = () => {


}

export const addItemToSelectedLayanan = (item, setSelectedLayanan) => {
    setSelectedLayanan(prevLayanan => {
        if (prevLayanan.some(existingItem => existingItem.id === item.id)) {
            return prevLayanan;
        }
        return [...prevLayanan, item];
    });
};

export const removeItemFromSelectedLayanan = (id, setSelectedLayanan) => {
    setSelectedLayanan(prevLayanan => prevLayanan.filter(item => item.id !== id));
};
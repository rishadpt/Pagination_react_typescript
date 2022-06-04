const BASE_URL = process.env.REACT_APP_BASE_URL;
export const TableServices = {

    getTabledata: () => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}api/product/filter?product_family_id=373&paginate=true&perPage=10&page=1&pageOffset=0`)
                .then(res => res.json())
                .then(data => {
                    resolve(data);
                })
        }
        )
    },
}
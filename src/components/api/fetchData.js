export const fetchData = (id) => {
    console.log(id);
    if (id) {
        const data = fetch(
            `https://api-esgi.faispaschier.fr/events/${id}`,
            {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => data);
        console.log(data);
    }
};

const form = document.querySelector('#searchForm');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const searchText = form.elements.search.value;
    const config = { params: { q: searchText } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    makeImages(res.data);
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const searchImg = document.createElement('IMG');

            searchImg.src = result.show.image.medium;

            document.body.append(searchImg);
        }
    }
}
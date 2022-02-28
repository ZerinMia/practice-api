const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => photoData(data))
}
const photoData = datas => {
    const photoDiv = document.getElementById('photoDiv');
    datas.forEach(data => {
        // console.log(data);
        const p = document.createElement('p')
        p.innerHTML = `
    <h2>Title: ${data.title} </h2>
    <h5>Url: ${data.url}</h5>
`;
        photoDiv.appendChild(p);
    });
}
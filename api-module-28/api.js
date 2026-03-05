const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        //promise of response
        .then((res) => res.json())
        // promise of json data
        .then((data) => displayPost(data)); // it will send data to display post

    displayPost = (posts) => {
        // get the container
        const divContainer = document.getElementById("container")
        divContainer.innerHTML=""
        posts.forEach(post => {
            // create html element
            const li = document.createElement("li")
            // put the data to li
            li.innerText = post.title;
            // add to the div container
            divContainer.appendChild(li)

        });
    }
}
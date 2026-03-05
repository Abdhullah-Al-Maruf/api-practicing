const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        //promise of response
        .then((res) => res.json())
        // promise of json data
        .then((data) => displayPost(data)); // it will send data to display post

    displayPost = (posts) => {
        // get the container
        const divContainer = document.getElementById("card-container")
        divContainer.innerHTML=""
        posts.forEach(post => {
            // create html element
            const div = document.createElement("div")
            // put the data to div
            div.innerHTML=`
            <div class=" card bg-base-100 w-[100] drop-shadow-md ">
            <div class="card-body bg-purple-100">
                <p  class="font-bold text-3xl"> Post: ${post.id}</p>
                <h2 class="card-title">${post.title}</h2>
                <p>${post.body}</p>
                <div class="card-actions justify-end">
        
                </div>
            </div>
        </div>
            `
            // add to the div container
            divContainer.appendChild(div)

        });
    }
}
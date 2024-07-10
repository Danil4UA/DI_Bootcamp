// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

//Elements

const root = document.getElementById("root")
const form = document.querySelector("form")
const container = document.getElementById("container")
const deleteAllBtn = document.getElementById("deleteAllBtn");

deleteAllBtn.addEventListener('click', () => {
    container.innerHTML = '';
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let category = document.querySelector("input").value.trim();
    if (category) {
        await getGif(category);
        document.querySelector("input").value = ""
    }

});

async function getGif(category){
    try{
        const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
        const res = await fetch(url);
        const data = await res.json();
        const imageUrl = data.data.images.fixed_height.url;
        
        const gifDiv = document.createElement('div');
        const gifImg = document.createElement('img');
        gifImg.src = imageUrl;
        gifImg.alt = category;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            container.removeChild(gifDiv);
        });

        gifDiv.appendChild(gifImg);
        gifDiv.appendChild(deleteBtn);
        container.appendChild(gifDiv);
            
    }catch(e){
        console.log(e)
    }
}
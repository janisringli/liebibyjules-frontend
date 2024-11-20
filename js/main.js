const comments = document.getElementById("quotes-wrapper");
console.log(comments);

const getComments = async () => {
  try {
    const response = await fetch(
      "https://strapi-production-d0d7.up.railway.app/api/comments"
    );
    const data = await response.json();
    console.log(data);

    // Assuming the data structure is { data: [ ... ] }
    const commentsArray = data.data; // Adjust this based on the actual structure of your API response
    //randomize the comments
    commentsArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 5; i++) {
      console.log("for loop entered");

      const commentContent = commentsArray[i].attributes.commentContent; // Adjust property path if needed
      const author = commentsArray[i].attributes.Author; // Adjust property path if needed

      const div = document.createElement("div");
      div.className = i % 2 === 0 ? "quote align-left" : "quote align-right";
      div.innerHTML = `
        <p>${commentContent}</p>
        <p class="quote-author">${author}</p>
      `;

      comments.appendChild(div);
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

getComments();


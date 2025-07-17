// script.js
db.collection("posts").get().then(snapshot => {
  const container = document.getElementById("posts-container");
  snapshot.forEach(doc => {
    const post = doc.data();
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
    container.appendChild(div);
  });
});
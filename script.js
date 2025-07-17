db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    container.innerHTML += `
      <div>
        <h2>${data.title}</h2>
        <small>${data.category}</small>
        <p>${data.content}</p>
      </div>
    `;
  });
});

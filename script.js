const db = firebase.firestore();
const container = document.getElementById("posts-container");

db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
  container.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h3>${data.title}</h3>
      <p>Category: ${data.category}</p>
      <a href="${data.url}" target="_blank">View File</a>
    `;
    container.appendChild(div);
  });
});

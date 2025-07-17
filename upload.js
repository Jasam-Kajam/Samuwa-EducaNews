const db = firebase.firestore();
const storage = firebase.storage();
const form = document.getElementById("upload-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const file = document.getElementById("file").files[0];
  if (!file) return;

  status.textContent = "Uploading...";
  const ref = storage.ref("uploads/" + Date.now() + "_" + file.name);
  await ref.put(file);
  const url = await ref.getDownloadURL();

  await db.collection("posts").add({
    title,
    category,
    url,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  status.textContent = "Upload successful!";
  form.reset();
});

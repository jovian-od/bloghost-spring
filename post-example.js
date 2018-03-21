var data = JSON.stringify({
  "title": "New post",
  "content": "Post text content here"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://127.0.0.1:8080/api/posts");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "0bd8ff07-a44d-4315-b490-9f996e0db82b");

xhr.send(data);
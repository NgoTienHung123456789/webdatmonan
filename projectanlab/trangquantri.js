function addPost(e) {

    e.preventDefault();

    let newPost = foodPost();

    newPost.stt = document.getElementById("postSTT").value;
    newPost.name = document.getElementById("postName").value;
    newPost.discribe = document.getElementById("postDiscribe").value;
    newPost.imageURL = document.getElementById("postImage").value;
    newPost.number = document.getElementById("postNumber").value;
    posts.push(newPost);

    displayListPost(posts);

    document.getElementById("frmNewPost").reset();
    $("#addPost").modal('hide');

    localStorage.setItem('listPost', JSON.stringify(posts));

}
var likes = [9, 12, 9];
var posts = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];
function like(x) {
    likes[x]++;
    posts[x].innerHTML = likes[x] + "likes";
}

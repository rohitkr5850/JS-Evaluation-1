async function fetchPostsWithComments() {
    try{
        const [postRes , cmntRes] = await Promise.all([

            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/comments")

        ]);


        const posts = await 
        postRes.json();
        const comments = await 
        cmntRes.json();

        const commentMap = comments.reduce((acc , c) => {
            acc[c.postId] = acc[c.postId] || [];
            acc[c.postId].push(c);
            return acc;
        }, {});

        return posts
        .filter(post => commentMap[post.id])
        .map(post => ({
            postId: post.id,
            title: post.title,
            commentCount: commentMap[post.id].length,
            firstCommenterEmail: commentMap[post.id][0].email}))
            .sort((a , b) => b.commentCount - a.commentCount)
            .slice(0 , 5);
    }
    catch(err){
        console.error(err);
        return [];
    }
}

fetchPostsWithComments().then(result => console.log(result));

/* Expected Output (top 5 posts by comment count):
[
  {
    postId: 1,
    title: 'sunt aut facere repellat provident...',
    commentCount: 5,
    firstCommenterEmail: 'Eliseo@gardner.biz'
  },
  {
    postId: 2,
    title: 'qui est esse',
    commentCount: 5,
    firstCommenterEmail: 'Jayne_Kuhic@sydney.com'
  },
  // ... 3 more posts
]
*/

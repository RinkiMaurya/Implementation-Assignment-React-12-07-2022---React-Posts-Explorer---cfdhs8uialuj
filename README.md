# React routing 



1) Make a <code>Loader</code> component which contains a div with <code>id="loader"</code> and text inside it "Loading...".
Display it each time a network request is in progress.
For example on index page when fetching the posts

2) On Index Page, make an initial request to <code>https://jsonplaceholder.typicode.com/posts</code> to get all the posts. <br/>
    While the request is in progress, display a <code>Loader</code> component. <br/>
    Once the request is complete, display a list of posts inside a <code>ul</code> with the <code>id="postsList"</code>. <br/>
    Each post should be displayed as a <code>PostPreview</code> component inside an <code>li</code><br/>
    The PostPreview component will have either have class <code>even</code> or <code>odd</code> depending on the index of the post. <br/>
    On index page only 10 posts should be displayed. <br/>
    Assume <code>https://jsonplaceholder.typicode.com/posts</code> returns posts in multiples of 10.
    By default it returns 100 posts, so display 10 buttons with <code>id="page-${pageNumber}"</code> and text as page number <br/>
    Ex:- <code>id=page-1</code> will have text 1 inside it.<br/>
    Your code should not assume that number of posts will be 100, can be 20 or 30 but always in mutiples of 10. <br/>
    So show only required number of buttons

3) <code>PostPreview</code> component are the elements which will be used on index page, to display the title of the
    post which contains a <code>NavLink</code> to the full <code>Post</code> page.

    <ol>Post Preview Structure
    
    <li>Root div should have <code>classname="post-preview"</code></li>
    <li>Inside  <code>post-preview</code> div add h2 with  <code>classname="post-title"</code></li>
    <li>Inside h2 with <code>classname="post-title"</code> use <code>NavLink</code> component pointing to path 
    <code>/post/${postId}</code> where postId is id of the corresponding post.
    Example:- <em>/post/1</em><br/>
    The link text will be the title of the post.
    </li>
    </ol>
    On clicking link in PostPreview component navigate to /post/:id, which shows the Post Page.
    Post Page has following requirements:
    1) Make a request to <code>https://jsonplaceholder.typicode.com/posts/:id</code> to get the post. <br/>
    2) The returned post will have property <code>userId</code> which will be used to make a request to <code>https://jsonplaceholder.typicode.com/users/:userId</code> to get the user. <br/>
    3) While both the requests are in progress, display a <code>Loader</code> component. <br/>
    4) Once both the requests are complete, display the information in following manner
        <ul>
            <li> <code>h1</code> with class <code>post-id</code> and text as <code>Post id:- {id}</code> </li>
            <li> <code>h2</code> with class <code>post-title</code> and text as <code>{post.title}</code> </li>
            <li> <code>p</code> with class <code>post-body</code> and text as <code>{post.body}</code> </li>
            <li> <code>p</code> with class <code>post-author</code> and text as <code>{user.name}</code> (use name property from user object)</li>
            <li> <code>NavLink</code> to <code>/</code> with text as <code>Back to Home</code> which takes to Index page </li>
        </ul>

4) Arrange all your routes in <code>AppRoutes</code> component.
Use this component in <code>components/App.js</code> file.

5) Some basic styles are already present in App.css, style as per your creativity, but dont change any classnames.
import React from 'react';


/*
2) On Index Page, make an initial request to <code>https://jsonplaceholder.typicode.com/posts</code> to get all the posts. <br/>
    While the request is in progress, display a <code>Loader</code> component. <br/>
    Once the request is complete, display a list of posts inside a <code>ul</code> with the class <code>postsList</code>. <br/>
    Each post should be displayed as a <code>PostPreview</code> component inside an <code>li</code><br/>
    The PostPreview component will have either have class <code>even</code> or <code>odd</code> depending on the index of the post. <br/>
    On index page only 10 posts should be displayed. <br/>
    Assume <code>https://jsonplaceholder.typicode.com/posts</code> returns posts in multiples of 10.
    By default it returs 100 posts, so display 10 buttons with <code>id=page-${pageNumber}</code> and text as page number <br/>
    Ex:- <code>id=page-1</code> will have text 1 inside it.<br/>
    Your code should not assume that number of posts will be 100, can be 20 or 30 but always in mutiples of 10. <br/>
    So show only required number of buttons
*/

export const Index = () => {

    return( 
        <div id="index">

        </div>
    )
}
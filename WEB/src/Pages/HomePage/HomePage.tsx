import React, { useEffect } from 'react'
import PostBlog from '../../Components/BlogComponents/PostBlog';
import PostListComponent from '../../Components/BlogComponents/PostListComponent';

type Props = {}

const HomePage = (props: Props) => {

    useEffect(() => {

    }, []);

    return (
        <>
            <PostListComponent />
        </>
    )
}

export default HomePage
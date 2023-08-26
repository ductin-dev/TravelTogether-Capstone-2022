import React, { useEffect } from 'react'
import './Post.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PostItem from './PostItem';
import UserInforTag from '../Common/UserInforTag';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../Redux';
import { BASE_URL } from '../../Config/Environment';
import { callApi } from '../../Config/AxiosCommon';
import { Response } from '../../Constant/Response';
import { axiosPrivate } from '../../Api/axios';
import CommentItem from './CommentItem';
import PostBlog from './PostBlog';
import useLocalStorage from '../../Hooks/useLocalStorage';


const PostListComponent = () => {

    const { userCurrent } = useSelector(
        (state: ApplicationState) => state.userReducer
    );

    const localStorage = useLocalStorage();

    // set loading
    const [loading, setLoading] = React.useState<boolean>(false);

    // set list blog
    const [lstBlog, setLstBlog] = React.useState<any[]>([]);

    const dateSortDesc = (array: any[]) => {
        array.sort(
            (a: any, b: any) =>
                Number(new Date(b.dateCreate)) -
                Number(new Date(a.dateCreate))
        );
        return array;
    };

    // check block user and ngược lại
    const isBlockUser = (
        userId: string,
        currentBlockedUsers: any,
        itemBlockedUsers: any
    ) => {
        let check =
            currentBlockedUsers.find((e: any) => e.id === userId) ||
                itemBlockedUsers.find((item: any) => item.id === userCurrent.id)
                ? true
                : false;
        return check;
    };


    const getAllBlog = async () => {

        setLoading(true);
        if (localStorage.auth) {
            const response: Response<any> = await callApi(localStorage.token, "GET", "user/blog/getAll")
            if (response && response.success) {
                let arrayDataBlogs: any[] = [];
                response.data.forEach((item: any) => {
                    let resultBlog: any[] = [];
                    let resultQas: any[] = [];
                    let resultAds: any[] = [];
                    // if (userCurrent.blackListedUsers.filter((el: any) => el.id == item.id).length <= 0 && !isBlockUser(userCurrent.id, userCurrent.blackListedUsers, item.blackListedUsers)) {
                    if (item.blogs.length > 0) {
                        resultBlog = item.blogs.map((itemBlog: any, index: any) => (
                            {
                                id: itemBlog.id,
                                dateCreate: itemBlog.createdDate,
                                content: itemBlog.content,
                                images: itemBlog.images,
                                videos: itemBlog.videos,
                                lat: itemBlog.lat,
                                lng: itemBlog.lng,
                                likedUsers: itemBlog.likedUsers,
                                comments: itemBlog.comments,
                                location: itemBlog.location,
                                ratings: [],
                                avatar: item.avatar,
                                fullName: item.fullName,
                                userIdCreated: item.id,
                                isLocalGuide: item.localGuide,
                                type: "BLOG",
                                ban: itemBlog.ban
                            }
                        ))
                    }

                    // data QA
                    if (item.qas && item.qas.length > 0) {

                        resultQas = item.qas.map((itemQas: any) => (
                            {
                                id: itemQas.id,
                                dateCreate: itemQas.createdDate,
                                content: itemQas.content,
                                images: itemQas.images,
                                videos: itemQas.videos,
                                lat: itemQas.lat,
                                lng: itemQas.lng,
                                likedUsers: itemQas.likes,
                                comments: itemQas.comments,
                                location: itemQas.location,
                                ratings: [],
                                avatar: item.avatar,
                                fullName: item.fullName,
                                userIdCreated: item.id,
                                isLocalGuide: item.localGuide,
                                type: "QA",
                                ban: itemQas.ban
                            }
                        ))
                    }

                    // data ads
                    if (item.ads != null && item.ads && item.ads.length > 0) {
                        resultAds = item.ads.map((itemAds: any) => (
                            {
                                id: itemAds.id,
                                dateCreate: itemAds.createdDate,
                                content: itemAds.content,
                                images: itemAds.images,
                                videos: itemAds.videos,
                                lat: itemAds.lat,
                                lng: itemAds.lng,
                                likedUsers: itemAds.likedUsers,
                                comments: itemAds.comments,
                                location: itemAds.location,
                                ratings: [],
                                avatar: item.avatar,
                                fullName: item.fullName,
                                userIdCreated: item.id,
                                isLocalGuide: item.localGuide,
                                type: "ADS",
                                ban: itemAds.ban
                            }
                        ))
                    }
                    arrayDataBlogs.push(...resultAds, ...resultBlog, ...resultQas);
                    // }
                })
                setLstBlog([...dateSortDesc(arrayDataBlogs)]);
                setLoading(false);

            }
        }

    }

    // render after delete
    const getDataFromItem = (data: any) => {
        if (data != "") {
            var index = lstBlog.findIndex(function (o) {
                return o.id === data;
            })
            // remove out of array
            if (index !== -1) lstBlog.splice(index, 1);
            setLstBlog([...lstBlog]);
        }
    }

    useEffect(() => {
        getAllBlog();
        return () => {
            setLstBlog([]);
            setLoading(false);
        }
    }, []);

    console.log(lstBlog)

    var images = [
        "https://raw.githubusercontent.com/soumyadeephalder/react-multiple-image-grid/master/img/demo-1-img.png?raw=true",
        "https://raw.githubusercontent.com/soumyadeephalder/react-multiple-image-grid/master/img/demo-1-img.png?raw=true",
        "https://raw.githubusercontent.com/soumyadeephalder/react-multiple-image-grid/master/img/demo-1-img.png?raw=true",
        "https://raw.githubusercontent.com/soumyadeephalder/react-multiple-image-grid/master/img/demo-1-img.png?raw=true"
    ];


    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <PostBlog />

                    {
                        lstBlog?.length > 0 &&
                        lstBlog.map((item, index) => (
                            <PostItem key={index} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default PostListComponent
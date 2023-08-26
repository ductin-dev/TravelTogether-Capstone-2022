import React from 'react'

type Props = {
    fullName: string,
    dateCreate: string,
    place?: string,
    avatar: string
}

const UserInforTag = (props: Props) => {
    const { fullName, dateCreate, place, avatar } = props;
    return (
        <div className="d-flex justify-content-between p-2 px-3">
            <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" className="rounded-circle" />
                <div className="d-flex flex-column ml-2"> <span className="font-weight-bold">{fullName}</span> <small className="text-primary">Collegues</small> </div>
            </div>
            <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h"></i> </div>
        </div>
    )
}

export default UserInforTag
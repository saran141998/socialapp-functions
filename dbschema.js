let db = {

    users: [
        {
            userId: '5XgcPstK4zaO3Ml3OSVIKZzkggy1',
            email: 'user@gmail.com',
            handle: 'user',
            createdAt: '2019-10-12T15:27:17.974Z',
            imageUrl: 'imge/hsjdhjasd/sjhdkjashd',
            bio: 'Hello  hai',
            website: 'something.com',
            location: 'india'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2019-10-12T07:12:46.018Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments=[
        {
            userHandle: 'user',
            screamId: 'nbsdhasjdkjasnd',
            body: 'A good one',
            createdAt: '2019-10-12T07:12:46.018Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'saran',
            read: 'true|false0',
            screamId: 'sjadasdiaghsjd',
            type: 'like|comment',
            createdAt: '2019-10-12T07:12:46.018Z'
        }
    ]
}
const userDetails = {

    //redux data
    credentials: {
        userId: '5XgcPstK4zaO3Ml3OSVIKZzkggy1',
        email: 'user@gmail.com',
        handle: 'user',
        createdAt: '2019-10-12T15:27:17.974Z',
        imageUrl: 'image/sdhhasdbj/asdkjbjasnd',
        bio: 'I am Noob',
        website: 'https://user.com',
        location: 'India'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'sjadhasdnbhbd',
        },
        {
            userId: 'user',
            screamId: 'hbgehabnanjdn'
        }
    ]
}
export default {
    host: '/',

    method: {
        get: {
            gallery: {
                images: '/gallery/images'
            }
        },
        'delete': {
            gallery: {
                image: '/gallery/image'
            }
        },
        post: {
            gallery: {
                images: '/gallery/images',
                order: '/gallery/order'
            }
        }
    }
};
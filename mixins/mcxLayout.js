export default {
    layout(context) {
        console.log(context.route);
        // route.meta is an array here?!?..
        return context.route.meta[0].layout;
    },
};

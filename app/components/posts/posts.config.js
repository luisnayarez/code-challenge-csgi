export default function config($stateProvider) {
    $stateProvider.state('app.posts', {
        url: 'posts',
        template: "<posts-app></posts-app>" +
            "<new-post></new-post>"
    });
}
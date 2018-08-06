import {createSelector} from 'reselect';

const GetPostsState = state => state.posts;

export const GetPostsListSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.postsList;
    }
);
export const GetNewPostsListSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.newPosts;
    }
);

export const IsFetchingListSelector = createSelector(
    [GetPostsState],
    (postsState) => {
        return postsState.isFetching;
    }
);
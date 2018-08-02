import angular from 'angular';
    import CommentModule from './comment/comment.module';    import FeedModule from './feed/feed.module';    import PaginationModule from './pagination/pagination.module';    import StoryModule from './story/story.module';    import StorylineModule from './storyline/storyline.module';    import CommentChildModule from './commentChild/commentChild.module';

const ComponentsModule = angular.module('app.components',[
       CommentModule.name,      FeedModule.name,      PaginationModule.name,      StoryModule.name,      StorylineModule.name,      CommentChildModule.name 
]);

export default ComponentsModule;
import angular from 'angular';
    import ArticleModule from './article/article.module';    import FeedModule from './feed/feed.module';    import StorylineModule from './storyline/storyline.module';    import PaginationModule from './pagination/pagination.module';

const ComponentsModule = angular.module('app.components',[
       ArticleModule.name,      FeedModule.name,      StorylineModule.name,      PaginationModule.name 
]);

export default ComponentsModule;
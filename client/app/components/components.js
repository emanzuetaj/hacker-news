import angular from 'angular';
    import ArticleModule from './article/article.module';    import FeedModule from './feed/feed.module';

const ComponentsModule = angular.module('app.components',[
       ArticleModule.name,      FeedModule.name 
]);

export default ComponentsModule;
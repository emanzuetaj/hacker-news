import angular from 'angular';
    import StoryModule from './story/story.module';
    import FeedModule from './feed/feed.module';
    import StorylineModule from './storyline/storyline.module';
    import PaginationModule from './pagination/pagination.module';

const ComponentsModule = angular.module('app.components',[
    StoryModule.name, 
     FeedModule.name, 
     StorylineModule.name, 
     PaginationModule.name 
]);

export default ComponentsModule;
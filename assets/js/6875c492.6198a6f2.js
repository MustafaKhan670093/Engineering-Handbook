(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{84:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),r=t(111),n=t(123),o=t(109),c=t(117),m=t(108),g=t(106);function i(e){var a,t=e.tagName,s=e.count,r=(a=Object(g.usePluralForm)().selectMessage,function(e){return a(e,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:r(s),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,s=e.sidebar,u=a.allTagsPath,p=a.name,d=a.count;return l.a.createElement(r.a,{title:'Posts tagged "'+p+'"',description:'Blog | Tagged "'+p+'"',wrapperClassName:g.ThemeClassNames.wrapper.blogPages,pageClassName:g.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:s})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(i,{count:d,tagName:p})),l.a.createElement(o.a,{href:u},l.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(n.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}}}]);
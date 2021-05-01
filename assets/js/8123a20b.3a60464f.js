(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{156:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),i=(t(0),t(111));const o={sidebar_position:2},r={unversionedId:"Diverging/translate-your-site",id:"Diverging/translate-your-site",isDocsHomePage:!1,title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/Diverging/translate-your-site.md",sourceDirName:"Diverging",slug:"/Diverging/translate-your-site",permalink:"/Engineering-Handbook/docs/Diverging/translate-your-site",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Diverging Process",permalink:"/Engineering-Handbook/docs/Diverging/diverging-process"},next:{title:"Converging Process",permalink:"/Engineering-Handbook/docs/Converging/converging-process"}},c=[{value:"Configure i18n",id:"configure-i18n",children:[]},{value:"Translate a doc",id:"translate-a-doc",children:[]},{value:"Start your localized site",id:"start-your-localized-site",children:[]},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[]},{value:"Build your localized site",id:"build-your-localized-site",children:[]}],l={toc:c};function s({components:e,...n}){return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Let's translate ",Object(i.b)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),Object(i.b)("h2",{id:"configure-i18n"},"Configure i18n"),Object(i.b)("p",null,"Modify ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",Object(i.b)("inlineCode",{parentName:"p"},"fr")," locale:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n")),Object(i.b)("h2",{id:"translate-a-doc"},"Translate a doc"),Object(i.b)("p",null,"Copy the ",Object(i.b)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",Object(i.b)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),Object(i.b)("p",null,"Translate ",Object(i.b)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),Object(i.b)("h2",{id:"start-your-localized-site"},"Start your localized site"),Object(i.b)("p",null,"Start your site on the French locale:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),Object(i.b)("p",null,"Your localized site is accessible at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),Object(i.b)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),Object(i.b)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),Object(i.b)("p",null,"Modify the ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),Object(i.b)("p",null,"The locale dropdown now appears in your navbar:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Locale Dropdown",src:t(156).default})),Object(i.b)("h2",{id:"build-your-localized-site"},"Build your localized site"),Object(i.b)("p",null,"Build your site for a specific locale:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),Object(i.b)("p",null,"Or build your site to include all the locales at once:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}s.isMDXComponent=!0}}]);
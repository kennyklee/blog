(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{4975:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#b87858","images":{"fallback":{"src":"/static/3386c15c7785d3612e74aace154b71cc/d24ee/profile_hawaii_small.jpg","srcSet":"/static/3386c15c7785d3612e74aace154b71cc/d24ee/profile_hawaii_small.jpg 50w,\\n/static/3386c15c7785d3612e74aace154b71cc/64618/profile_hawaii_small.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/3386c15c7785d3612e74aace154b71cc/d4bf4/profile_hawaii_small.avif 50w,\\n/static/3386c15c7785d3612e74aace154b71cc/ee81f/profile_hawaii_small.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/3386c15c7785d3612e74aace154b71cc/3faea/profile_hawaii_small.webp 50w,\\n/static/3386c15c7785d3612e74aace154b71cc/6a679/profile_hawaii_small.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),i=a(5444),c=a(8590);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),s=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,n=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(c.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile_hawaii_small.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(4975)}),(null==s?void 0:s.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==n?void 0:n.twitter)||"")},"Twitter")))}},7704:function(e,t,a){"use strict";a.r(t);var l=a(7294),i=a(5444),c=a(9535),r=a(7198),s=a(3751);t.default=function(e){var t,a=e.data,n=e.location,o=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?l.createElement(r.Z,{location:n,title:o},l.createElement(s.Z,{title:"All posts"}),l.createElement(c.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(r.Z,{location:n,title:o},l.createElement(s.Z,{title:"All posts"}),l.createElement(c.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-72c1525272928c5457ab.js.map
"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5070],{37648:(e,t,a)=>{a.d(t,{E:()=>r});var n=a(50959),s=a(11527);const r=e=>(0,s.jsx)(n.Suspense,{fallback:null,children:(0,n.createElement)((0,n.lazy)((async()=>{const{FeatureActivationSection:e}=await Promise.all([a.e(1814),a.e(9792)]).then(a.bind(a,34807));return{default:e}})),e)})},92930:(e,t,a)=>{a.r(t),a.d(t,{SKELETON_CARDS_COUNT:()=>C,default:()=>k});var n=a(82187),s=a.n(n),r=a(35869),i=a(75802),o=a(10226),c=a(85648),l=a(41038),d=a(91643),u=a(17676),m=a(51450),h=a(53724),g=a(37648),x=a(70526),S=(a(86277),a(36353)),p=a(36255),j=a(81879),f=a(11527);const v=({section:e})=>(0,f.jsx)(p.q,{pageId:e.uri,title:e.data.title?.text??"",showAll:!0,index:0,id:e.uri,rowGap:S.g4,children:e.sectionItems.items.map(j.x)});var y=a(85998);const w=({section:e})=>{switch(e.data?.__typename){case"HomeGenericSectionData":return(0,f.jsx)(v,{section:(0,y.f)(e,e.data)});case"HomeShortsSectionData":case"HomeRecentlyPlayedSectionData":case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case null:case void 0:case"HomeFeatureActivationSectionData":case"HomeOnboardingSectionDataV2":case"HomeYourDJSectionData":return null;case"HomeFeatureActivationSectionDataV2":return(0,f.jsx)(g.E,{sectionItems:e.sectionItems.items,showAll:!0,uri:e.uri,localStorageKey:e.data.localStorageKey});default:return(0,x._)(e.data),null}};var H=a(50959),_=a(40934),b=a(12260);const D=(0,H.memo)((({cardCount:e})=>(0,f.jsx)(b.X,{isLoading:!0,showAll:!0,withTitle:!0,children:[...new Array(e).keys()].map(((e,t)=>(0,f.jsx)(_.A,{isLoading:!0},t)))})));var A=a(24902),E=a(91530),N=a(24322);const C=10,Z=({uri:e})=>{const t=(0,i.TH)(),a=new URLSearchParams(t.search).get("pCountry"),n=(0,r.v9)(E.rZ),{data:l,error:g,loading:x}=(0,h.xf)({uri:e,timeZone:(0,A.UE)(),sp_t:(0,m.vQ)("sp_t")??"",country:a??n},{gcTime:A.us,staleTime:A.fS}),S=(0,o.W6)(u.NHp);if(x)return(0,f.jsx)("section",{"data-testid":"home-page",children:(0,f.jsx)("div",{className:N.Z.home,children:(0,f.jsx)("div",{className:s()(N.Z.content,"contentSpacing"),children:(0,f.jsx)(D,{cardCount:C})})})});if(null!==g)return(0,f.jsx)(d.h,{hasError:!0,errorMessage:c.ag.get("error.generic")});const p=l?.homeSections;if("HomeSectionCollection"!==p?.__typename||0===p.sections.length)return(0,f.jsx)(d.h,{hasError:!0,errorMessage:c.ag.get("error.generic")});const j=p.sections[0];return"HomeSection"!==j.__typename?(0,f.jsx)(d.h,{hasError:!0,errorMessage:c.ag.get("error.generic")}):(0,f.jsx)("section",{"data-testid":"home-section-page",children:(0,f.jsx)("div",{className:s()(N.Z.home,{[N.Z.withGlobalNavBarEnabled]:S}),children:(0,f.jsx)("div",{className:s()(N.Z.content,"contentSpacing"),children:(0,f.jsx)(w,{section:j})})})})},k=({uri:e})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.$,{children:c.ag.get("page.generic-title")}),(0,f.jsx)(Z,{uri:e})]})}}]);
//# sourceMappingURL=home-v2-section.js.map
"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3472],{46988:(e,t,s)=>{s.d(t,{o:()=>n});var i=s(9990),a=s(47948);function n(){return{version:(0,i.W6)(a.GEN)?2:1}}},73750:(e,t,s)=>{s.d(t,{p:()=>u,q:()=>r.q});var i=s(59496),a=s(83792),n=s(64689),r=s(99750),o=s(29287),l=s(18112),c=s(4637);const d=i.memo((function({uri:e,size:t=r.q.md,className:s,onClick:d,showUpsell:u}){const[p,m]=(0,n.Z)(e),h=(0,a.I0)(),y=(0,l.o)(),g=(0,i.useCallback)((()=>{y({targetUri:e,intent:p?"remove-from-library":"add-to-library",type:"click"}),m(!p),h(p?(0,o.SS)():(0,o.kK)())}),[y,e,p,m,h]);return(0,c.jsx)(r.o,{className:s,isFollowing:p,onFollow:g,onClick:d,uri:e,size:t,showUpsell:u})})),u=i.memo((function(e){return(0,c.jsx)(d,{...e})}))},56245:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ct});var i=s(59496),a=s(97601),n=s(9990),r=s(69159),o=s(70356),l=s(14887),c=s(94633),d=s(70304),u=s(39667),p=s(75132),m=s(29919),h=s(46988),y=s(17054),g=s(4637);const x=(0,i.lazy)((()=>s.e(9849).then(s.bind(s,44243))));function k(e){const t=(0,y.m)(),s=(0,h.o)();return t?(0,g.jsx)(i.Suspense,{fallback:!0,children:(0,g.jsx)(x,{reason:"Episode page",...s,...e})}):null}const b="dpN5ViPOceUWNB5EQPHN",j="vBcxPq3E2okwgXOkVPEM",C="HCCBXwdFvq6omWW2hR0N",P="bJOPO5Zo7dpjSVDwEpSw",T="TXdDDpokVTyJzDEDWHHf",f="tvj001zNcrC5VUZmTt9c",v="PC5kR03GYecc7syeoC0q",I="YldGldlfaI9myEGXQf9g",S="qJHVIpJn1vLPWsAKfTEZ",E="wSIzjkVlr0Zdy7di2vRm",U="hYS_K1NATGyWt6tCSRqQ",D="hVVaM4pF9arpQ8Nvn2a1",N="zf0Eac1LugsHUacz74Zf",w="TnNaqxbaI0hzhBQZ7wE0",R="zSw1lG1TNe_xm6KTqtCv",L="MlEQDkXnjdKKJueJ9kkB",M="jg0xlyD1yjh0DPNG6eOg",A="QiHXpFb4dLZNOFe5gpp3";var B=s(51697),F=s(89528),O=s(34046),z=s(98484),$=s(47948),_=s(46486);const H=({cardHeaderText:e,cardBodyText:t,buttonText:s,buttonTarget:i})=>(0,n.W6)($.XdP)?(0,g.jsxs)("div",{className:I,children:[(0,g.jsxs)("div",{className:S,children:[(0,g.jsx)(B.D,{variant:"balladBold",semanticColor:"textBase",children:e}),(0,g.jsx)(B.D,{semanticColor:"textBase",children:t})]}),(0,g.jsx)(z.D,{buttonSize:"sm",colorSet:"invertedLight",href:(0,l.EC)(i).toURLPath(!0),component:_.Z,children:s})]}):null,W=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:s,hasDescription:a,htmlDescription:n,onExpanded:r,onTimeStampClick:o,playability:l,showHeader:d=!0,spec:u})=>{const p=(0,O.$P)(),m=(a||t)&&d,h=(0,i.useCallback)((e=>{const t=u.readMoreButtonFactory();p.logInteraction(e?t.hitUiReveal():t.hitUiHide()),r?.()}),[u,p,r]);return(0,g.jsxs)(g.Fragment,{children:[m&&(0,g.jsx)(B.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:C,children:c.ag.get("episode.description-title")}),t&&(0,g.jsx)(H,{cardHeaderText:t.cardHeaderText,cardBodyText:t.cardBodyText,buttonText:t.buttonText,buttonTarget:t.buttonTarget}),a&&(0,g.jsx)(F.o,{className:j,onTimeStampClick:o,maxLines:4,onExpanded:h,content:(s||"").trim(),htmlContent:e&&n?n:void 0,enableTimestamps:l.playable})]})};var K=s(84875),Z=s.n(K),q=s(78795),V=s(10390),G=s(11030),Q=s(2541),X=s(44501),Y=s(82760),J=function(e){return e.DESCRIPTION="description",e.TRANSCRIPT="transcript",e}(J||{});const ee=i.memo((function({transcriptSections:e,descriptionContent:t,transcriptContent:s,spec:a}){const n=(0,O.$P)(),[r,o]=(0,i.useState)(J.DESCRIPTION),l=(0,Y.Mi)(),{ref:d,inView:u}=(0,q.YD)({threshold:[1],root:l.current,rootMargin:`-${X.K1+1}px 100000px 0px 100000px`}),p=(0,i.useRef)(null),m=(0,i.useCallback)((e=>{p.current=e,d(e)}),[d]);return(0,i.useEffect)((()=>{const e=p.current?.parentElement?.offsetTop,t=l?.current;if(!e||!t)return;const s=e-X.K1;t.scrollTop>s&&t.scrollTo({top:s})}),[l,r]),(0,g.jsx)(V.l,{list:(0,g.jsxs)(G.F,{className:Z()(L,{[M]:!u}),ref:m,children:[(0,g.jsx)(Q.c,{label:c.ag.get("web-player.episode.description"),sentenceCase:!0,active:r===J.DESCRIPTION,onClick:()=>{const e=a.tabsFactory().descriptionTabButtonFactory().hitUiReveal();n.logInteraction(e),o(J.DESCRIPTION)},className:Z()(A,{[E]:r===J.DESCRIPTION})}),(0,g.jsx)(Q.c,{label:c.ag.get("web-player.episode.transcript"),sentenceCase:!0,disabled:null===e,active:r===J.TRANSCRIPT,onClick:()=>{const e=a.tabsFactory().transcriptTabButtonFactory().hitUiReveal();n.logInteraction(e),o(J.TRANSCRIPT)},className:Z()(A,{[E]:r===J.TRANSCRIPT})})]}),children:null===e||r===J.DESCRIPTION?t:s})}));var te=s(52704),se=s(59528),ie=s(13138),ae=s(97582);const ne=(0,i.memo)((function({transcriptSections:e,onTimeStampClick:t,episodeUri:s}){const{spec:i,logger:a}=(0,O.fU)(te.m,{data:{uri:s}}),{isPlaying:n}=(0,ie.n)({uri:s},{featureIdentifier:"episode"}),r=i.timestampLinkFactory();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:D,children:(0,g.jsx)(B.D,{variant:"viola",semanticColor:"textBase",children:c.ag.get("web-player.episode.transcript.disclaimer")})}),e.map(((e,i)=>{const o=`transcript-section-${i}`;return(0,g.jsxs)("div",{className:U,children:[(0,g.jsx)("button",{className:N,onClick:()=>{t(e.startMs,o),a.logInteraction(n?r.hitSeekToTime({msToSeekTo:e.startMs}):r.hitPlay({itemToBePlayed:s}))},children:(0,g.jsx)(se.D,{id:o,targetURI:(0,l.EC)(s),fadeOut:!0,children:(0,g.jsx)(B.D,{variant:"finaleBold",semanticColor:"textSubdued",className:w,children:(0,ae.m)(e.startMs)})})}),e.content.map(((e,t)=>(0,g.jsx)(B.D,{variant:"viola",semanticColor:"textBase",className:R,dir:"auto",children:e},`transcript-text-${t}`)))]},o)}))]})}));var re=s(16380),oe=s(36342),le=s(46235),ce=s(87564),de=s(39987),ue=s(51431),pe=s(90216),me=s(19341),he=s(56911),ye=s(40981),ge=s(15644);const xe="OYehkMWcGJRKPkByp46K",ke="uc1bXkrZqrCz0CMK4lBb",be="qZeibBbA3SVClzEueYND",je=({episodeUri:e,index:t,duration:s,start:a,stop:n,name:r,uri:o,artists:l,album:d,playable:u})=>{const{isActive:p,isPlaying:m,onClick:h}=(0,he.k)({episodeUri:e,start:a,stop:n}),y=(0,i.useCallback)(((e,t)=>{h(t)}),[h]),{spec:x}=(0,O.fU)(de.r,{data:{position:t,reason:"",uri:o}});return(0,g.jsx)(ge.ZP,{value:"row",index:t,children:(0,g.jsx)(ye.x,{trigger:"right-click",action:"open",menu:(0,g.jsx)(ue.$,{uri:o}),children:(0,g.jsxs)(me.c,{uri:o,index:t,ariaRowIndex:t+1,dragMetadata:{name:r,createdBy:l?.[0].name??""},onTriggerPlay:y,isActive:p,isPlayable:u,spec:x,children:[(0,g.jsxs)(pe.vZ,{ariaColIndex:0,children:[(0,g.jsx)(pe.Du,{uri:o,playAriaLabel:c.ag.get("tracklist.a11y.play",r,l?.[0].name),onClick:y,isPlaying:m,isActive:p,spec:x,children:(0,g.jsx)(pe.km,{children:(0,g.jsx)("img",{className:ke,src:d.image,alt:d.name})})}),(0,g.jsxs)(pe.vm,{children:[(0,g.jsx)(pe.Wh,{titleText:r,children:r}),(0,g.jsx)(pe.K9,{children:(0,g.jsx)(pe.T6,{artists:l,spec:x})})]})]}),(0,g.jsx)(pe.UA,{ariaColIndex:1,children:(0,g.jsx)(pe.BM,{uri:d.uri,name:d.name,spec:x,children:d.name})}),(0,g.jsxs)(pe.mU,{ariaColIndex:2,children:[(0,g.jsx)(pe.qS,{uri:o,spec:x}),(0,g.jsx)(pe.A$,{duration:s}),(0,g.jsx)(pe.Zv,{spec:x,menu:(0,g.jsx)(ue.$,{uri:o,artists:l}),label:c.ag.get("more.label.track",r,l?.[0].name)})]})]})})})};function Ce(e,t,s){return e.reduce(((e,i,a)=>((a>0||t>0)&&e.push({type:"SPACER",id:`spacer-${e.length}`}),"MUSIC"===i.type?e.push(function(e,t,s){return{type:"MUSIC",index:t,uri:s.uri,episodeUri:e,start:s.start,stop:s.stop,duration:s.duration,name:s.track.name,artists:s.track.artists,album:s.track.album,playable:s.track.playable}}(s,a,i)):"TALK"===i.type&&e.push(function(e,t,s){return{type:"TALK",index:t,uri:e,title:s.title,subtitle:s.subtitle,start:s.start,stop:s.stop,duration:s.duration,showUri:s.show.uri,showName:s.show.name}}(s,a,i)),e)),[])}const Pe=({uri:e,segmentCount:t})=>{const s=(0,le.G)(),a=(0,i.useCallback)((async(i,a)=>{const n=Math.ceil(i/2);try{return{items:Ce(await s.getSegments(e,n,a),n,e),totalLength:2*t-1}}catch(e){return{items:[],totalLength:0}}}),[t,s,e]),n=(0,i.useCallback)((t=>{switch(t.type){case"SPACER":return(0,g.jsx)("div",{className:be},t.id);case"MUSIC":return(0,g.jsx)(je,{...t},`${e}-${t.index}`);case"TALK":return(0,g.jsx)(re.t,{...t},`${e}-${t.index}`);default:return(0,ce.U)(t)}}),[e]),r=c.ag.get("music_and_talk.in_this_episode");return(0,g.jsxs)("div",{children:[(0,g.jsx)(B.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:xe,children:r}),(0,g.jsx)(oe.Pv,{ariaLabel:r,hasHeaderRow:!0,rowPlaceholder:oe.hU,columns:[oe.QD.TITLE,oe.QD.ALBUM_OR_SHOW,oe.QD.DURATION],renderRow:n,fetchTracks:a,resolveUri:e=>"MUSIC"===e.type?e.uri:"",limit:50,nrTracks:2*t-1,testID:"music-and-talk-tracklist"})]})};var Te=s(54593);const fe=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:s,hasDescription:a,hasMusicAndTalkSegements:n,htmlDescription:r,onExpanded:o,onDescriptionTimestampClick:l,onTranscriptTimestampClick:d,playability:u,segmentCount:p,showUrl:h,transcript:y,transcriptEnabled:x,uri:b,spec:j})=>{const C=(0,O.$P)(),T=(0,i.useMemo)((()=>j.descriptionSectionFactory()),[j]),f=(0,i.useMemo)((()=>T.trackListFactory()),[T]),[v,I]=(0,i.useState)(null),S=(0,i.useCallback)((async e=>{const t=await(0,Te.l)(e);I(t)}),[]);(0,i.useEffect)((()=>{y&&y.length>0&&S(y[0].cdnUrl)}),[S,y]);const E=i=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(W,{hasDescription:a,contentInformation:t,onTimeStampClick:l,onExpanded:o,description:s,areHTMLDescriptionsEnabled:e,htmlDescription:r,playability:u,showHeader:i,spec:T}),n&&(0,g.jsx)(O.Nh,{spec:f,children:(0,g.jsx)(Pe,{segmentCount:p,uri:b})}),h&&(0,g.jsx)(m.P,{buttonSize:"sm",className:P,href:h,component:_.Z,onClick:()=>{C.logInteraction(T.allEpisodesLinkFactory().hitUiNavigate({destination:h}))},children:c.ag.get("episode.see_all_episodes")}),(0,g.jsx)(k,{uri:b})]});return(0,g.jsx)(g.Fragment,{children:x&&y&&y?.length>0?(0,g.jsx)(ee,{transcriptSections:v,descriptionContent:E(!1),transcriptContent:(0,g.jsx)(ne,{transcriptSections:v||[],onTimeStampClick:d,episodeUri:b}),spec:j}):E(!0)})};var ve=s(23650),Ie=s(35960),Se=s(97210),Ee=s(72390);const Ue="activation-trigger-mme",De=({episodeUri:e,showUri:t,isLocked:s,isPlaying:i,isPlayDisabled:a,playButtonPlayLabel:n,playButtonPauseLabel:r,onClick:o,size:c="large"})=>{const d=(0,Ee.E)();if((0,Ie.g)())return(0,g.jsx)(Se.f,{size:c,onClick:o,isPlaying:i,disabled:a,locked:s,ariaPlayLabel:n,ariaPauseLabel:r});const u=(0,g.jsx)(ve.l,{showUri:t,enabled:s,renderInline:!1,children:(0,g.jsx)(Se.f,{size:c,onClick:o,isPlaying:i,disabled:a,locked:s,ariaPlayLabel:n,ariaPauseLabel:r})});return d?(0,g.jsx)(se.D,{id:Ue,targetURI:(0,l.EC)(e),fadeOut:!0,children:u}):u};var Ne=s(18112),we=s(34483),Re=s(53851),Le=s(19031),Me=s(93256),Ae=s(51087),Be=s(94444),Fe=s(85537),Oe=s(24966),ze=s(25639),$e=s(95195),_e=s(83792),He=s(11891),We=s(46927),Ke=s(73750),Ze=s(40006),qe=s(95202),Ve=s(41946),Ge=s(34198),Qe=s(68985),Xe=s(29553),Ye=s(40674),Je=s(4745),et=s(57161),tt=s(26473);const st=({episode:e,onPlayEpisode:t,isPlaying:s,isActive:a,isFullyPlayed:n,setIsFullyPlayed:r,backgroundColor:o,isLocked:l,spec:d})=>{const{uri:u,playedState:p,contentRating:m,playability:h}=e,y=(0,O.$P)(),x=(0,_e.I0)(),[k]=(0,Ye.z)(1e4,(e=>e?.item?.uri===u)),b=(0,Ae.Y)((e=>e?.duration)),{badges:j}=(0,et.r)({contentRating:m?.label}),C=(0,i.useCallback)((e=>{!h.playable&&j.nineteen&&(e.stopPropagation(),x((0,He.RM)(u||"")))}),[u,h.playable,j.nineteen,x]),P=(0,i.useCallback)((()=>{const e=d.contextMenuButtonFactory().hitUiReveal();y.logInteraction(e)}),[y,d]),f=(0,i.useCallback)(((e,t)=>{(0,Ge.l7)(t,d.downloadButtonFactory(),y,u)}),[y,d,u]),v=(0,i.useCallback)((e=>{const t=d.saveButtonFactory();y.logInteraction(e?t.hitLike({itemToBeLiked:u}):t.hitRemoveLike({itemNoLongerLiked:u}))}),[y,d,u]),I=!l&&!e.playability.playable,S=c.ag.get("tracklist.a11y.play",e.name,e.podcast?.name),E=c.ag.get("tracklist.a11y.pause",e.name,e.podcast?.name),U=e.podcast?.uri,D=(0,tt.j)();return(0,g.jsxs)(We.o,{backgroundColor:o,children:[(0,g.jsxs)(We.F,{children:[j.nineteen&&(0,g.jsx)(Xe.X,{className:T,size:16}),(0,g.jsx)(Je.E,{size:Je.$.LARGE,fullyPlayed:n,durationMs:a&&b?b:e.duration.milliseconds,releaseDate:Pt(e.releaseDate?.isoString),resumePositionMs:p.playPositionMilliseconds,isPlaying:s,position:a&&k||void 0})]}),(0,g.jsxs)(We.F,{children:[(0,g.jsx)("div",{onClick:C,children:(0,g.jsx)(De,{episodeUri:e.uri,showUri:U,isLocked:l,onClick:()=>{t(p.playPositionMilliseconds)},isPlaying:s,isPlayDisabled:I,playButtonPlayLabel:S,playButtonPauseLabel:E,size:D})}),!l&&(0,g.jsx)(Ke.p,{uri:e.uri,onClick:f,size:D}),(0,g.jsx)(qe.w,{uri:e.uri,size:D,onClick:v}),(0,g.jsx)(Qe.y,{onShow:P,menu:(0,g.jsx)(Ve.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:U,contextUri:e.uri,isPlayed:n,onMarkAsPlayed:r}),children:(0,g.jsx)(Ze.MoreButton,{label:c.ag.get("more.label.context",e.name),size:D})})]})]})};var it=s(7018),at=s(39815),nt=s(20456),rt=s(29915),ot=s(54985),lt=s(78390),ct=s(67490),dt=s(70231),ut=s(4536),pt=s(56071),mt=s(35585),ht=s(26790);const yt=({coverArt:e,name:t})=>{const s=(0,ht.jh)(),i=s===ht.Uo.SMALL||s===ht.Uo.XSMALL;return(0,g.jsx)(pt.O,{images:e,type:$e.p.EPISODE,shape:pt.K.ROUNDED_CORNERS,title:t,size:i?mt.m$.SIZE_20:mt.m$.SIZE_24,className:f})};const gt=({episode:e,isFullyPlayed:t,setIsFullyPlayed:s,backgroundColor:a,spec:r})=>{const{uri:o,name:d,sharingInfo:u,playedState:p,episodeType:m,releaseDate:h,coverArt:y}=e,x=(0,O.$P)(),k=function(e,t,s,i,a){const n=t===ze.Wf.Episode;return(0,ut.G3)(e,i,s,a)?(0,g.jsx)(ut.Fg,{isMusicAndTalk:n}):n?c.ag.get("type.showEpisode"):c.ag.get("type.podcastEpisode")}(o,m||ze.Wf.Unknown,p.playPositionMilliseconds,Pt(h?.isoString),p.state===ze.sY.Completed),b=e.podcast?.uri,j=function(e){const t=(0,l.EC)(e);return`/show/${(0,l.HB)(t?.id||"")}`}(b),C=(0,i.useCallback)((()=>{x.logInteraction(r.podcastLinkFactory().hitUiNavigate({destination:j}))}),[x,j,r]),P=(0,n.W6)($.vyX,{loadingValue:!1}),T=e.podcast?.coverArt,f=!(T&&y.every(((e,t)=>e.url===T[t].url))),I=P&&!f;return(0,g.jsxs)(it.gF,{backgroundColor:a,children:[(0,g.jsx)(nt.W,{children:(0,g.jsx)(rt.i,{text:d,dragUri:o,dragLabel:d})}),!I&&(0,g.jsx)(at.k,{children:(0,g.jsx)(dt._,{menu:(0,g.jsx)(Ve.k,{uri:o,sharingInfo:u,showUri:b,contextUri:o,isPlayed:t,onMarkAsPlayed:s}),children:(0,g.jsx)(it.Oe,{loading:"eager",name:d,images:y,placeholderType:"episode",shape:P?it.Kc.SQUARE:it.Kc.ROUNDED_CORNERS})})}),(0,g.jsxs)(it.sP,{children:[(0,g.jsx)(ot.g,{children:k}),(0,g.jsx)(dt._,{menu:(0,g.jsx)(Ve.k,{uri:o,sharingInfo:u,showUri:b,contextUri:o,isPlayed:t,onMarkAsPlayed:s}),children:(0,g.jsx)(it.xd,{dragUri:o,dragLabel:d,scaleAtMinWidth:it.vz,children:(0,g.jsx)("span",{"data-testid":"episodeTitle",children:d})})}),(0,g.jsx)(dt._,{menu:(0,g.jsx)(Ve.k,{uri:o,sharingInfo:u,showUri:b,contextUri:o,isPlayed:t,onMarkAsPlayed:s}),children:(0,g.jsxs)(ct.default,{to:j,onClick:C,className:v,children:[I&&(0,g.jsx)(yt,{name:d,coverArt:y}),(0,g.jsx)(lt.m,{children:(0,g.jsx)("span",{"data-testid":"showTitle",children:e.podcast?.name})})]})})]})]})};var xt=s(7442),kt=s(43699),bt=s(74903);const jt=({episode:e})=>{const{uri:t,episodeType:s,description:a,htmlDescription:o,podcastSubscription:c,segmentsCount:p,podcast:m,contentInformation:h,playedState:y,coverArt:x}=e,{spec:k,logger:j}=(0,O.fU)(r.J,{data:{uri:t}}),C=(0,xt.k)(),P=(0,i.useMemo)((()=>k.headerFactory()),[k]),T=(0,i.useMemo)((()=>k.actionBarFactory()),[k]),[f,v]=(0,i.useState)(y.state===ze.sY.Completed),I=(0,Le.g)(),S=(0,Ne.o)(),E=void 0!==p&&p>0,U=(0,n.W6)($.WE4,{loadingValue:!1}),D=(0,Ie.g)(),{triggerPlay:N,togglePlay:w,isPlaying:R,isActive:L}=(0,ie.n)({uri:t,...C?{}:{pages:[{items:[{type:$e.p.EPISODE,uri:t,uid:null,provider:null}]}]}},{featureIdentifier:"episode"}),{isActive:M}=(0,Me.$o)(t),A=x[0].url,B=(0,Re.Zj)(A||null),F=(0,Ae.Y)((e=>e?.isPaused??void 0)),z=(0,Ee.E)(),_=c.isPaywalled&&!c.isUserSubscribed,H=M||L,W=e?{name:e.name,uri:e.uri,audio:{items:e.audio.items.map((e=>({url:e.url})))}}:null,K=m?{name:m.name,uri:m.uri,trailer:m.trailer,showTypes:m.showTypes}:null,Z=(0,we.s)(W,K),q=(0,i.useCallback)(((e,i,a,n)=>{const r=()=>{F?(n?.("resume"),I.resume()):(n?.("pause"),I.pause())};if(_)return;let o="play";if(!R||0!==e&&i||(o="pause"),S({intent:o,targetUri:t,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),s===ze.Wf.Episode&&z)u.y.set((()=>({triggerId:a||Ue,triggerAction:null})));else if(L&&!i)D?r():w({loggingParams:n?.()});else if(M&&!i)r();else{const t=n?.("play");D?Z({seekTo:e,loggingParams:t}):N({seekTo:e,loggingParams:t})}}),[_,R,S,t,s,z,M,L,D,F,I,w,Z,N]),V=(0,i.useCallback)((e=>{q(e,!1,void 0,(e=>{const s=k.actionBarFactory().playButtonFactory();let i;return i="pause"===e||R?s.hitPause({itemToBePaused:t}):"resume"===e||H?s.hitResume({itemToBeResumed:t}):s.hitPlay({itemToBePlayed:t}),j.logInteraction(i)}))}),[q,H,R,j,k,t]),G=(0,i.useCallback)((e=>{q(e,!0,void 0,(()=>j.logInteraction(k.descriptionSectionFactory().timestampLinkFactory().hitPlay({itemToBePlayed:t}))))}),[q,j,k,t]),Q=(0,i.useCallback)(((e,t)=>{q(e,!0,t)}),[q]),X=(0,i.useCallback)((()=>{S({intent:"expand-description",type:"click"})}),[S]);(0,i.useEffect)((()=>{if(e&&!H){const t=new URLSearchParams(location.search);if(t.has("t")){const s=t.get("t")||"0",i=1e3*parseInt(s,10);i<=e.duration.milliseconds&&q(i,!0)}}}),[e,H]);const Y=!!a||!!o,J=e.podcast?.uri,ee=(0,l.EC)(J)?.toURLPath(!0);return(0,g.jsxs)("section",{"data-testid":"episode",className:b,children:[(0,g.jsx)(d.$,{children:(0,Oe.mK)({episodeOrChapterName:e.name,showOrAudiobookName:e.podcast?.name??"",type:"Podcast"})}),(0,g.jsx)(gt,{episode:e,isFullyPlayed:f,setIsFullyPlayed:v,backgroundColor:B,spec:P}),(0,g.jsx)(st,{episode:e,onPlayEpisode:V,isPlaying:R,isActive:H,isFullyPlayed:f,setIsFullyPlayed:v,backgroundColor:B,isLocked:_,spec:T}),(0,g.jsx)("div",{className:"contentSpacing",children:(0,g.jsx)(fe,{transcriptEnabled:U,transcript:e.transcript,hasDescription:Y,contentInformation:h,onDescriptionTimestampClick:G,onTranscriptTimestampClick:Q,onExpanded:X,description:e.description,areHTMLDescriptionsEnabled:!0,htmlDescription:e.htmlDescription,playability:e.playability,hasMusicAndTalkSegements:E,segmentCount:p,uri:e.uri,showUrl:ee,spec:k})})]})},Ct=i.memo((function(){const{episodeId:e=""}=(0,a.UO)(),t=(0,l.YD)(e).toURI(),s=(0,Be.I)(t);return s?.isError||!s?.episodeOrChapter?(0,g.jsx)(p.h,{hasError:s?.isError||!1,errorMessage:c.ag.get("error.not_found.title.podcast")}):(0,Fe.Ey)(s.episodeOrChapter)?(0,g.jsx)(kt.InstrumentedRedirect,{to:(0,l.EC)(s.episodeOrChapter.book?.uri).toURLPath(!0)}):(0,g.jsx)(i.Suspense,{fallback:null,children:(0,g.jsx)(bt.C,{pageId:o.Wg.PODCAST_EPISODE,uri:t,children:(0,g.jsx)(jt,{episode:s.episodeOrChapter})})})}));function Pt(e){return e?.replace(/T.*/,"")||""}}}]);
//# sourceMappingURL=xpui-routes-episode.js.map
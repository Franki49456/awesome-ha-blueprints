(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(97)),i=n(99),l={title:"Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."},s={unversionedId:"blueprints/hooks/media_player",id:"blueprints/hooks/media_player",isDocsHomePage:!1,title:"Media Player",description:"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection.",source:"@site/docs/blueprints/hooks/media_player.mdx",slug:"/blueprints/hooks/media_player",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks/media_player",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks/media_player.mdx",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Supported Controllers",id:"supported-controllers",children:[]},{value:"Additional Notes",id:"additional-notes",children:[]},{value:"Changelog",id:"changelog",children:[]}],u={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{id:"media_player",category:"hooks",mdxType:"ImportCard"}),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This blueprint is part of the ",Object(o.b)("strong",{parentName:"p"},"Controllers-Hooks Ecosystem"),". You can read more about this topic ",Object(o.b)("a",{parentName:"p",href:"/docs/controllers-hooks-ecosystem"},"here"),"."))),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This Hook blueprint allows to build a controller-based automation to control a media player. Supports volume setting, play/pause and track selection."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"An automation created with this blueprint must be linked to a ",Object(o.b)("a",{parentName:"p",href:"/docs/blueprints/controllers"},"Controller")," automation. Controllers are blueprints which allow to easily integrate a wide range of controllers and use them to run a set of actions when interacting with them. They expose an abstract interface used by Hooks to create controller-based automations."),Object(o.b)("p",{parentName:"div"},"See the list of ",Object(o.b)("a",{parentName:"p",href:"/docs/blueprints/hooks/media_player#supported-controllers"},"Controllers supported by this Hook")," for additional details."))),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)(i.c,{id:"controller",required:!0,mdxType:"Requirement"}),Object(o.b)(i.c,{name:"Media Player Integration",required:!0,mdxType:"Requirement"},Object(o.b)("p",null,"This integration provides the entity which represents a media player in Home Assistant. It should be activated by default so unless you tweaked the default configuration you're good to go."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/media_player/"},"Media Player Integration Docs"))),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)(i.b,{name:"Controller device",description:"The controller device which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as a Device. This value should match the one specified in the corresponding Controller automation.",selector:"device",required:!0,mdxType:"Input"}),Object(o.b)(i.b,{name:"Controller entity",description:"The controller entity which will control the light. Choose a value only if the integration used to connect the controller to Home Assistant exposes it as an Entity. This value should match the one specified in the corresponding Controller automation.",selector:"entity",required:!0,mdxType:"Input"}),Object(o.b)(i.b,{name:"Controller model",description:"The model for the controller used in this automation. Choose a value from the list of supported controllers.",selector:"select",required:!0,mdxType:"Input"}),Object(o.b)(i.b,{name:"Media Player",description:"Media player which will be controlled with this automation.",selector:"entity",required:!0,mdxType:"Input"}),Object(o.b)(i.b,{name:"Volume steps - short actions",description:"Number of steps from min to max volume when controlling volume with short actions (eg. button press), if the media player supports it.",selector:"number",mdxType:"Input"}),Object(o.b)(i.b,{name:"Volume steps - long actions",description:"Number of steps from min to max volume when controlling volume with long actions (eg. button hold or controller rotation), if the media player supports it.",selector:"number",mdxType:"Input"}),Object(o.b)("h2",{id:"supported-controllers"},"Supported Controllers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1524_e1810"},"IKEA E1524/E1810 5-Button Remote")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1743"},"IKEA E1743 On/Off Switch & Dimmer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1744"},"IKEA E1744 SYMFONISK Rotary Remote")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/blueprints/controllers/ikea_e1812"},"IKEA E1812 Shortcut button"))),Object(o.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(o.b)("p",null,"Not all media players support the customization of the number of steps for volume control, due to the fact that some of them do not expose their current volume level to Home Assistant. In these situations, the automation will fallback to the ",Object(o.b)("inlineCode",{parentName:"p"},"media_player.volume_up")," and ",Object(o.b)("inlineCode",{parentName:"p"},"media_player.volume_down")," services."),Object(o.b)("h2",{id:"changelog"},"Changelog"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2021-03-04"),": first blueprint version \ud83c\udf89"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2021-03-07"),": add support for IKEA E1744 SYMFONISK rotary remote"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2021-03-14"),": add support for IKEA E1812 Shortcut button, fix E1743 naming"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2021-03-25"),": update action mapping for IKEA E1744. If you're using this Hook with an IKEA E1744, please update also the corresponding Controller blueprint"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2021-03-26"),": add the ability to specify number of steps from min to max volume, both for short and long actions, when controlling the media player")))}m.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a);var o=function(e){return r.a.createElement("span",{className:"badge badge--"+e.variant},e.children)},i={action:{type:"Action"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},l={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};var s=function(e){var t=e.selector?i[e.selector]:i.none;return r.a.createElement("div",null,r.a.createElement("span",{style:l.inputName},e.name," ",r.a.createElement(o,{variant:"primary"},t.type)," ",e.required?r.a.createElement(o,{variant:"warning"},e.required," Required"):r.a.createElement(o,{variant:"info"},"Optional")),r.a.createElement("br",null),r.a.createElement("p",{style:l.inputDescription,className:"margin-top--sm"},e.description),r.a.createElement("hr",null))},c={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};var u=function(e){return r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("div",{style:c.requirementNameContainer},r.a.createElement("h3",{style:c.requirementName},e.name," "),e.required?r.a.createElement(o,{variant:"warning"},e.required," Required"):r.a.createElement(o,{variant:"info"},"Optional")),e.children)};var m={zigbee2mqtt:function(e){return r.a.createElement(u,{name:"Zigbee2MQTT Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){return r.a.createElement(u,{name:"ZHA Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){return r.a.createElement(u,{name:"deCONZ Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){return r.a.createElement(u,{name:"Controller Automation",required:e.required},r.a.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",r.a.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",r.a.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};var p=function(e){var t=e.id?m[e.id]:u;return r.a.createElement(t,{name:e.name,required:e.required,refers:e.refers},e.children)},d=n(105),b=n(106),h=n.n(b),f=n(112),y={myHomeAssistantImage:{width:"100%",maxWidth:212}};var g=function(e){var t=Object(a.useState)(!1),n=t[0],o=t[1],i="https://github.com/EPMatt/awesome-ha-blueprints/blob/main/blueprints/"+e.category+"/"+e.id+"/"+e.id+".yaml",l=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(i);case 2:o(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card item shadow--md"},r.a.createElement("div",{className:"card__header margin-bottom--md"},r.a.createElement("h3",null,"Import this blueprint")),r.a.createElement("div",{className:"card__body"},r.a.createElement("div",{class:"row row--no-gutters"},r.a.createElement("div",{class:"col col--6"},r.a.createElement("h5",null,"My Home Assistant"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url="+escape(i),target:"_blank"},r.a.createElement("img",{src:"https://my.home-assistant.io/badges/blueprint_import.svg",alt:"Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.",style:y.myHomeAssistantImage})),r.a.createElement("br",null),r.a.createElement("small",null,"(Home Assistant 2021.3.0 or higher)"))),r.a.createElement("div",{class:"col col--6"},r.a.createElement("h5",null,"Direct Link"),r.a.createElement("button",{className:"button button--"+(n?"success":"primary"),onClick:l},r.a.createElement("span",null,r.a.createElement(f.a,{size:16}),r.a.createElement("span",null," ",n?"Link Copied!":"Copy Link")))))))}}}]);
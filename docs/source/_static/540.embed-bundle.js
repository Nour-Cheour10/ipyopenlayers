"use strict";(self.webpackChunkipyopenlayers=self.webpackChunkipyopenlayers||[]).push([[540],{708:(e,t,n)=>{function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function a(e,t,n){let r=0,a=e.length;const o=a/n;for(;a>t;){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;a-=t}const i=e.slice();for(let t=0;t<o;++t)for(let r=0;r<n;++r)e[n*t+r]=i[(n-r-1)*o+t]}n.d(t,{A:()=>o});class o{async decode(e,t){const n=await this.decodeBlock(t),o=e.Predictor||1;if(1!==o){const t=!e.StripOffsets;return function(e,t,n,o,i,s){if(!t||1===t)return e;for(let e=0;e<i.length;++e){if(i[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[e]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const c=i[0]/8,d=2===s?1:i.length;for(let s=0;s<o&&!(s*d*n*c>=e.byteLength);++s){let o;if(2===t){switch(i[0]){case 8:o=new Uint8Array(e,s*d*n*c,d*n*c);break;case 16:o=new Uint16Array(e,s*d*n*c,d*n*c/2);break;case 32:o=new Uint32Array(e,s*d*n*c,d*n*c/4);break;default:throw new Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}r(o,d)}else 3===t&&(o=new Uint8Array(e,s*d*n*c,d*n*c),a(o,d,c))}return e}(n,o,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return n}}},2540:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(708);class a extends r.A{constructor(){if(super(),"undefined"==typeof createImageBitmap)throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");if("undefined"==typeof document&&"undefined"==typeof OffscreenCanvas)throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available")}async decode(e,t){const n=new Blob([t]),r=await createImageBitmap(n);let a;"undefined"!=typeof document?(a=document.createElement("canvas"),a.width=r.width,a.height=r.height):a=new OffscreenCanvas(r.width,r.height);const o=a.getContext("2d");return o.drawImage(r,0,0),o.getImageData(0,0,r.width,r.height).data.buffer}}}}]);
//# sourceMappingURL=540.embed-bundle.js.map
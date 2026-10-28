(()=>{var We=(r,e,t)=>()=>{if(t)throw t[0];try{return r&&(e=r(r=0)),e}catch(n){throw t=[n],n}};var zm=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function ni(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function dn(r,e,t){return Math.max(e,Math.min(t,r))}function hu(r,e){return(r%e+e)%e}function Mg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wg(r,e,t){return r!==e?(t-r)/(e-r):0}function uo(r,e,t){return(1-t)*r+t*e}function Sg(r,e,t,n){return uo(r,e,1-Math.exp(-t*n))}function Tg(r,e=1){return e-Math.abs(hu(r,e*2)-e)}function Eg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ag(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Rg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Cg(r,e){return r+Math.random()*(e-r)}function Pg(r){return r*(.5-Math.random())}function Ig(r){r!==void 0&&(Vd=r);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(r){return r*ho}function Dg(r){return r*Rr}function kg(r){return(r&r-1)===0&&r!==0}function Ug(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ng(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Og(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}function fp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fg(){let r=go("canvas");return r.style.display="block",r}function Da(r){r in Wd||(Wd[r]=!0,console.warn(r))}function Bg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function zg(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hg(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function rc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function oc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?_h.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function lc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ms.fromArray(r,s);let a=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),l=e.dot(Ms),c=t.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function bc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function e0(r,e,t,n,i,s,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===gi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:r}}function ga(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ua),r.getVertexPosition(l,da),r.getVertexPosition(c,fa);let h=e0(r,e,t,n,ua,da,fa,rf);if(h){let u=new P;Cs.getBarycoord(rf,ua,da,fa,u),i&&(h.uv=Cs.getInterpolatedAttribute(i,a,l,c,u,new Te)),s&&(h.uv1=Cs.getInterpolatedAttribute(s,a,l,c,u,new Te)),o&&(h.normal=Cs.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Cs.getNormal(ua,da,fa,d.normal),h.face=d,h.barycoord=u}return h}function Cr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(r){let e={};for(let t=0;t<r.length;t++){let n=Cr(r[t]);for(let i in n)e[i]=n[i]}return e}function t0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function mp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}function gp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o0(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}function Hy(r,e,t,n,i,s,o){let a=new j(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,_=m(b);_===null?g(a,l):_&&_.isColor&&(g(_,1),y=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(b,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===hl)?(h===void 0&&(h=new Be(new ii(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:Cr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ts.copy(y.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(Ts)),h.material.toneMapped=Ze.getTransfer(_.colorSpace)!==wt,(u!==_||d!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Be(new si(2,2),new it({name:"BackgroundMaterial",uniforms:Cr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==wt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,y){b.getRGB(ya,mp(r)),n.buffers.color.setClear(ya.r,ya.g,ya.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,g(a,l)},render:x,addToRenderList:p}}function Gy(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(v,S,I,O,F){let Y=!1,z=u(O,I,S);s!==z&&(s=z,c(s.object)),Y=f(v,O,I,F),Y&&m(v,O,I,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(v,S,I,O),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,S,I){let O=I.wireframe===!0,F=n[v.id];F===void 0&&(F={},n[v.id]=F);let Y=F[S.id];Y===void 0&&(Y={},F[S.id]=Y);let z=Y[O];return z===void 0&&(z=d(l()),Y[O]=z),z}function d(v){let S=[],I=[],O=[];for(let F=0;F<t;F++)S[F]=0,I[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,S,I,O){let F=s.attributes,Y=S.attributes,z=0,ee=I.getAttributes();for(let W in ee)if(ee[W].location>=0){let le=F[W],pe=Y[W];if(pe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),le===void 0||le.attribute!==pe||pe&&le.data!==pe.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function m(v,S,I,O){let F={},Y=S.attributes,z=0,ee=I.getAttributes();for(let W in ee)if(ee[W].location>=0){let le=Y[W];le===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));let pe={};pe.attribute=le,le&&le.data&&(pe.data=le.data),F[W]=pe,z++}s.attributes=F,s.attributesNum=z,s.index=O}function x(){let v=s.newAttributes;for(let S=0,I=v.length;S<I;S++)v[S]=0}function p(v){g(v,0)}function g(v,S){let I=s.newAttributes,O=s.enabledAttributes,F=s.attributeDivisors;I[v]=1,O[v]===0&&(r.enableVertexAttribArray(v),O[v]=1),F[v]!==S&&(r.vertexAttribDivisor(v,S),F[v]=S)}function b(){let v=s.newAttributes,S=s.enabledAttributes;for(let I=0,O=S.length;I<O;I++)S[I]!==v[I]&&(r.disableVertexAttribArray(I),S[I]=0)}function y(v,S,I,O,F,Y,z){z===!0?r.vertexAttribIPointer(v,S,I,F,Y):r.vertexAttribPointer(v,S,I,O,F,Y)}function _(v,S,I,O){x();let F=O.attributes,Y=I.getAttributes(),z=S.defaultAttributeValues;for(let ee in Y){let W=Y[ee];if(W.location>=0){let ue=F[ee];if(ue===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){let le=ue.normalized,pe=ue.itemSize,lt=e.get(ue);if(lt===void 0)continue;let mt=lt.buffer,K=lt.type,ie=lt.bytesPerElement,we=K===r.INT||K===r.UNSIGNED_INT||ue.gpuType===nu;if(ue.isInterleavedBufferAttribute){let me=ue.data,ze=me.stride,Le=ue.offset;if(me.isInstancedInterleavedBuffer){for(let et=0;et<W.locationSize;et++)g(W.location+et,me.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let et=0;et<W.locationSize;et++)p(W.location+et);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let et=0;et<W.locationSize;et++)y(W.location+et,pe/W.locationSize,K,le,ze*ie,(Le+pe/W.locationSize*et)*ie,we)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)g(W.location+me,ue.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<W.locationSize;me++)p(W.location+me);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let me=0;me<W.locationSize;me++)y(W.location+me,pe/W.locationSize,K,le,pe*ie,pe/W.locationSize*me*ie,we)}}else if(z!==void 0){let le=z[ee];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(W.location,le);break;case 3:r.vertexAttrib3fv(W.location,le);break;case 4:r.vertexAttrib4fv(W.location,le);break;default:r.vertexAttrib1fv(W.location,le)}}}}b()}function A(){R();for(let v in n){let S=n[v];for(let I in S){let O=S[I];for(let F in O)h(O[F].object),delete O[F];delete S[I]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let I in S){let O=S[I];for(let F in O)h(O[F].object),delete O[F];delete S[I]}delete n[v.id]}function M(v){for(let S in n){let I=n[S];if(I[v.id]===void 0)continue;let O=I[v.id];for(let F in O)h(O[F].object),delete O[F];delete I[v.id]}}function R(){D(),o=!0,s!==i&&(s=i,c(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function Vy(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];for(let x=0;x<d.length;x++)t.update(m,n,d[x])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==Xn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let R=M===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ki&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ti&&!R)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function Xy(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Pi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let b=s?0:n,y=b*4,_=g.clippingState||null;l.value=_,_=h(m,d,y,f);for(let A=0;A!==y;++A)_[A]=t[A];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function $y(r){let e=new WeakMap;function t(o,a){return a===Xc?o.mapping=Mr:a===$c&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xc||a===$c)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sh(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function qy(r){let e=[],t=[],n=[],i=r,s=r-xr+1+lf.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-xr?l=lf[o-r+xr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,p=2,g=1,b=new Float32Array(x*m*f),y=new Float32Array(p*m*f),_=new Float32Array(g*m*f);for(let T=0;T<f;T++){let M=T%3*2/3-1,R=T>2?0:-1,D=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];b.set(D,x*m*T),y.set(d,p*m*T);let v=[T,T,T,T,T,T];_.set(v,g*m*T)}let A=new _t;A.setAttribute("position",new qe(b,x)),A.setAttribute("uv",new qe(y,p)),A.setAttribute("faceIndex",new qe(_,g)),e.push(A),i>xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uf(r,e,t){let n=new qt(r,e,t);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Yy(r,e,t){let n=new Float32Array(Ps),i=new P(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function df(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ff(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ky(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xc||l===$c,h=l===Mr||l===wr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pr(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Pr(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zy(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jy(r,e,t,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let p=0,g=x.length;p<g;p++)e.update(x[p],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,_=b.length;y<_;y+=3){let A=b[y+0],T=b[y+1],M=b[y+2];d.push(A,T,T,M,M,A)}}else if(m!==void 0){let b=m.array;x=m.version;for(let y=0,_=b.length/3-1;y<_;y+=3){let A=y+0,T=y+1,M=y+2;d.push(A,T,T,M,M,A)}}else return;let p=new(fp(d)?Ha:za)(d,1);p.version=x;let g=s.get(u);g&&e.remove(g),s.set(u,p)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jy(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,x){if(m===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,x,0,m);let g=0;for(let b=0;b<m;b++)g+=f[b];for(let b=0;b<x.length;b++)t.update(g,n,x[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ev(r,e,t){let n=new WeakMap,i=new ht;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let D=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*A*4*u),M=new Ba(T,_,A,u);M.type=ti,M.needsUpdate=!0;let R=y*4;for(let v=0;v<u;v++){let S=p[v],I=g[v],O=b[v],F=_*A*4*v;for(let Y=0;Y<S.count;Y++){let z=Y*R;f===!0&&(i.fromBufferAttribute(S,Y),T[F+z+0]=i.x,T[F+z+1]=i.y,T[F+z+2]=i.z,T[F+z+3]=0),m===!0&&(i.fromBufferAttribute(I,Y),T[F+z+4]=i.x,T[F+z+5]=i.y,T[F+z+6]=i.z,T[F+z+7]=0),x===!0&&(i.fromBufferAttribute(O,Y),T[F+z+8]=i.x,T[F+z+9]=i.y,T[F+z+10]=i.z,T[F+z+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:M,size:new Te(_,A)},n.set(a,d),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function tv(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}function Nr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=mf[i];if(s===void 0&&(s=new Float32Array(i),mf[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function fl(r,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function nv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function iv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function sv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function rv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function ov(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;vf.set(n),r.uniformMatrix2fv(this.addr,!1,vf),Kt(t,n)}}function av(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;yf.set(n),r.uniformMatrix3fv(this.addr,!1,yf),Kt(t,n)}}function lv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;xf.set(n),r.uniformMatrix4fv(this.addr,!1,xf),Kt(t,n)}}function cv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function uv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function dv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function fv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function pv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function mv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function gv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function xv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(pf.compareFunction=dp,s=pf):s=xp,t.setTexture2D(e||s,i)}function yv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function vv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_p,i)}function _v(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yp,i)}function bv(r){switch(r){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return _v}}function Mv(r,e){r.uniform1fv(this.addr,e)}function wv(r,e){let t=Nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Sv(r,e){let t=Nr(e,this.size,3);r.uniform3fv(this.addr,t)}function Tv(r,e){let t=Nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Ev(r,e){let t=Nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Av(r,e){let t=Nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Rv(r,e){let t=Nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cv(r,e){r.uniform1iv(this.addr,e)}function Pv(r,e){r.uniform2iv(this.addr,e)}function Iv(r,e){r.uniform3iv(this.addr,e)}function Lv(r,e){r.uniform4iv(this.addr,e)}function Dv(r,e){r.uniform1uiv(this.addr,e)}function kv(r,e){r.uniform2uiv(this.addr,e)}function Uv(r,e){r.uniform3uiv(this.addr,e)}function Nv(r,e){r.uniform4uiv(this.addr,e)}function Ov(r,e,t){let n=this.cache,i=e.length,s=fl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||xp,s[o])}function Fv(r,e,t){let n=this.cache,i=e.length,s=fl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vp,s[o])}function Bv(r,e,t){let n=this.cache,i=e.length,s=fl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_p,s[o])}function zv(r,e,t){let n=this.cache,i=e.length,s=fl(t,i);Yt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yp,s[o])}function Hv(r){switch(r){case 5126:return Mv;case 35664:return wv;case 35665:return Sv;case 35666:return Tv;case 35674:return Ev;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Pv;case 35668:case 35672:return Iv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return kv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}function _f(r,e){r.seq.push(e),r.map[e.id]=e}function Gv(r,e,t){let n=r.name,i=n.length;for(Pc.lastIndex=0;;){let s=Pc.exec(n),o=Pc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_f(t,c===void 0?new Th(a,r,e):new Eh(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Ah(a),_f(t,u)),t=u}}}function bf(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function Xv(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $v(r){let e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(r),n;switch(e===t?n="":e===Na&&t===Ua?n="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Na&&(n="LinearSRGBToLinearDisplayP3"),r){case Wt:case dl:return[n,"LinearTransferOETF"];case At:case cu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Mf(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Xv(r.getShaderSource(e),o)}else return i}function qv(r,e){let t=$v(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yv(r,e){let t;switch(e){case Zh:t="Linear";break;case jh:t="Reinhard";break;case Jh:t="Cineon";break;case To:t="ACESFilmic";break;case Qh:t="AgX";break;case eu:t="Neutral";break;case cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kv(){Ze.getLuminanceCoefficients(_a);let r=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function jv(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jv(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function lo(r){return r!==""}function wf(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Rh(r){return r.replace(Qv,t_)}function t_(r,e){let t=Xe[e];if(t===void 0){let n=e_.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}function Tf(r){return r.replace(n_,i_)}function i_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ef(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mr:case wr:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===wr&&(e="ENVMAP_MODE_REFRACTION"),e}function a_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case lg:e="ENVMAP_BLENDING_ADD";break}return e}function l_(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function c_(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=s_(t),c=r_(t),h=o_(t),u=a_(t),d=l_(t),f=Zv(t),m=jv(s),x=i.createProgram(),p,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(lo).join(`
`),g.length>0&&(g+=`
`)):(p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),g=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ss?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=Rh(o),o=wf(o,t),o=Sf(o,t),a=Rh(a),a=wf(a,t),a=Sf(a,t),o=Tf(o),a=Tf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=b+p+o,_=b+g+a,A=bf(i,i.VERTEX_SHADER,y),T=bf(i,i.FRAGMENT_SHADER,_);i.attachShader(x,A),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function M(S){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(T).trim(),Y=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,A,T);else{let ee=Mf(i,A,"vertex"),W=Mf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+ee+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(O===""||F==="")&&(z=!1);z&&(S.diagnostics={runnable:Y,programLog:I,vertexShader:{log:O,prefix:p},fragmentShader:{log:F,prefix:g}})}i.deleteShader(A),i.deleteShader(T),R=new _r(i,x),D=Jv(i,x)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let D;this.getAttributes=function(){return D===void 0&&M(this),D};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,Vv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=T,this}function u_(r,e,t,n,i,s,o){let a=new xo,l=new Ch,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures,m=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,S,I,O,F){let Y=O.fog,z=F.geometry,ee=v.isMeshStandardMaterial?O.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),ue=W&&W.mapping===hl?W.image.height:null,le=x[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=pe!==void 0?pe.length:0,mt=0;z.morphAttributes.position!==void 0&&(mt=1),z.morphAttributes.normal!==void 0&&(mt=2),z.morphAttributes.color!==void 0&&(mt=3);let K,ie,we,me;if(le){let Sn=ui[le];K=Sn.vertexShader,ie=Sn.fragmentShader}else K=v.vertexShader,ie=v.fragmentShader,l.update(v),we=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);let ze=r.getRenderTarget(),Le=F.isInstancedMesh===!0,et=F.isBatchedMesh===!0,yt=!!v.map,tt=!!v.matcap,L=!!W,Rn=!!v.aoMap,Je=!!v.lightMap,ot=!!v.bumpMap,ke=!!v.normalMap,Ct=!!v.displacementMap,Fe=!!v.emissiveMap,C=!!v.metalnessMap,w=!!v.roughnessMap,H=v.anisotropy>0,J=v.clearcoat>0,ne=v.dispersion>0,Z=v.iridescence>0,Ee=v.sheen>0,ae=v.transmission>0,ge=H&&!!v.anisotropyMap,at=J&&!!v.clearcoatMap,se=J&&!!v.clearcoatNormalMap,xe=J&&!!v.clearcoatRoughnessMap,Ue=Z&&!!v.iridescenceMap,Ne=Z&&!!v.iridescenceThicknessMap,ye=Ee&&!!v.sheenColorMap,Qe=Ee&&!!v.sheenRoughnessMap,He=!!v.specularMap,Tt=!!v.specularColorMap,k=!!v.specularIntensityMap,de=ae&&!!v.transmissionMap,X=ae&&!!v.thicknessMap,Q=!!v.gradientMap,ce=!!v.alphaMap,fe=v.alphaTest>0,nt=!!v.alphaHash,Gt=!!v.extensions,wn=ss;v.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(wn=r.toneMapping);let ct={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ie,defines:v.defines,customVertexShaderID:we,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:et,batchingColor:et&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ze===null?r.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Wt,alphaToCoverage:!!v.alphaToCoverage,map:yt,matcap:tt,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:ue,aoMap:Rn,lightMap:Je,bumpMap:ot,normalMap:ke,displacementMap:f&&Ct,emissiveMap:Fe,normalMapObjectSpace:ke&&v.normalMapType===pg,normalMapTangentSpace:ke&&v.normalMapType===up,metalnessMap:C,roughnessMap:w,anisotropy:H,anisotropyMap:ge,clearcoat:J,clearcoatMap:at,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:ne,iridescence:Z,iridescenceMap:Ue,iridescenceThicknessMap:Ne,sheen:Ee,sheenColorMap:ye,sheenRoughnessMap:Qe,specularMap:He,specularColorMap:Tt,specularIntensityMap:k,transmission:ae,transmissionMap:de,thicknessMap:X,gradientMap:Q,opaque:v.transparent===!1&&v.blending===mi&&v.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:nt,combine:v.combine,mapUv:yt&&p(v.map.channel),aoMapUv:Rn&&p(v.aoMap.channel),lightMapUv:Je&&p(v.lightMap.channel),bumpMapUv:ot&&p(v.bumpMap.channel),normalMapUv:ke&&p(v.normalMap.channel),displacementMapUv:Ct&&p(v.displacementMap.channel),emissiveMapUv:Fe&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:ge&&p(v.anisotropyMap.channel),clearcoatMapUv:at&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&p(v.sheenRoughnessMap.channel),specularMapUv:He&&p(v.specularMap.channel),specularColorMapUv:Tt&&p(v.specularColorMap.channel),specularIntensityMapUv:k&&p(v.specularIntensityMap.channel),transmissionMapUv:de&&p(v.transmissionMap.channel),thicknessMapUv:X&&p(v.thicknessMap.channel),alphaMapUv:ce&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ke||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(yt||ce),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:wn,decodeVideoTexture:yt&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===wt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fn,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Gt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&v.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function b(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(y(S,v),_(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function _(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function A(v){let S=x[v.type],I;if(S){let O=ui[S];I=fs.clone(O.uniforms)}else I=v.uniforms;return I}function T(v,S){let I;for(let O=0,F=h.length;O<F;O++){let Y=h[O];if(Y.cacheKey===S){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new c_(r,S,v,s),h.push(I)),I}function M(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function R(v){l.remove(v)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:A,acquireProgram:T,releaseProgram:M,releaseShaderCache:R,programs:h,dispose:D}}function d_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function f_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Af(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rf(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,p){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},r[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),e++,g}function a(u,d,f,m,x,p){let g=o(u,d,f,m,x,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(u,d,f,m,x,p){let g=o(u,d,f,m,x,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||f_),n.length>1&&n.sort(d||Af),i.length>1&&i.sort(d||Af)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function p_(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Rf,r.set(n,[o])):i>=s.length?(o=new Rf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function m_(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new j};break;case"SpotLight":t={position:new P,direction:new P,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function g_(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function y_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function v_(r){let e=new m_,t=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,s=new Pe,o=new Pe;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,b=0,y=0,_=0,A=0,T=0,M=0;c.sort(y_);for(let D=0,v=c.length;D<v;D++){let S=c[D],I=S.color,O=S.intensity,F=S.distance,Y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=I.r*O,u+=I.g*O,d+=I.b*O;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],O);M++}else if(S.isDirectionalLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ee=S.shadow,W=t.get(S);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=S.shadow.matrix,b++}n.directional[f]=z,f++}else if(S.isSpotLight){let z=e.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(I).multiplyScalar(O),z.distance=F,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[x]=z;let ee=S.shadow;if(S.map&&(n.spotLightMap[A]=S.map,A++,ee.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[x]=ee.matrix,S.castShadow){let W=t.get(S);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=Y,_++}x++}else if(S.isRectAreaLight){let z=e.get(S);z.color.copy(I).multiplyScalar(O),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=z,p++}else if(S.isPointLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let ee=S.shadow,W=t.get(S);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=S.shadow.matrix,y++}n.point[m]=z,m++}else if(S.isHemisphereLight){let z=e.get(S);z.skyColor.copy(S.color).multiplyScalar(O),z.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[g]=z,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==g||R.numDirectionalShadows!==b||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==A||R.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,R.directionalLength=f,R.pointLength=m,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=g,R.numDirectionalShadows=b,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=A,R.numLightProbes=M,n.version=x_++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=h.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let y=c[g];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Cf(r){let e=new v_(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function __(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Cf(r),e.set(i,[a])):s>=o.length?(a=new Cf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function w_(r,e,t){let n=new yo,i=new Te,s=new Te,o=new ht,a=new Ih({depthPacking:fg}),l=new Lh,c={},h=t.maxTextureSize,u={[gi]:pn,[pn]:gi,[fn]:fn},d=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:b_,fragmentShader:M_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let g=this.type;this.render=function(T,M,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let D=r.getRenderTarget(),v=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),I=r.state;I.setBlending(pi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=g!==Ci&&this.type===Ci,F=g===Ci&&this.type!==Ci;for(let Y=0,z=T.length;Y<z;Y++){let ee=T[Y],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ue=W.getFrameExtents();if(i.multiply(ue),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ue.x),i.x=s.x*ue.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ue.y),i.y=s.y*ue.y,W.mapSize.y=s.y)),W.map===null||O===!0||F===!0){let pe=this.type!==Ci?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new qt(i.x,i.y,pe),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let le=W.getViewportCount();for(let pe=0;pe<le;pe++){let lt=W.getViewport(pe);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),I.viewport(o),W.updateMatrices(ee,pe),n=W.getFrustum(),_(M,R,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Ci&&b(W,R),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(D,v,S)};function b(T,M){let R=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qt(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(M,null,R,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(M,null,R,f,x,null)}function y(T,M,R,D){let v=null,S=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let I=v.uuid,O=M.uuid,F=c[I];F===void 0&&(F={},c[I]=F);let Y=F[O];Y===void 0&&(Y=v.clone(),F[O]=Y,M.addEventListener("dispose",A)),v=Y}if(v.visible=M.visible,v.wireframe=M.wireframe,D===Ci?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:u[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let I=r.properties.get(v);I.light=R}return v}function _(T,M,R,D,v){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Ci)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let O=e.update(T),F=T.material;if(Array.isArray(F)){let Y=O.groups;for(let z=0,ee=Y.length;z<ee;z++){let W=Y[z],ue=F[W.materialIndex];if(ue&&ue.visible){let le=y(T,ue,D,v);T.onBeforeShadow(r,T,M,R,O,le,W),r.renderBufferDirect(R,null,O,le,T,W),T.onAfterShadow(r,T,M,R,O,le,W)}}}else if(F.visible){let Y=y(T,F,D,v);T.onBeforeShadow(r,T,M,R,O,Y,null),r.renderBufferDirect(R,null,O,Y,T,null),T.onAfterShadow(r,T,M,R,O,Y,null)}}let I=T.children;for(let O=0,F=I.length;O<F;O++)_(I[O],M,R,D,v)}function A(T){T.target.removeEventListener("dispose",A);for(let R in c){let D=c[R],v=T.target.uuid;v in D&&(D[v].dispose(),delete D[v])}}}function T_(r){function e(){let k=!1,de=new ht,X=null,Q=new ht(0,0,0,0);return{setMask:function(ce){X!==ce&&!k&&(r.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){k=ce},setClear:function(ce,fe,nt,Gt,wn){wn===!0&&(ce*=Gt,fe*=Gt,nt*=Gt),de.set(ce,fe,nt,Gt),Q.equals(de)===!1&&(r.clearColor(ce,fe,nt,Gt),Q.copy(de))},reset:function(){k=!1,X=null,Q.set(-1,0,0,0)}}}function t(){let k=!1,de=!1,X=null,Q=null,ce=null;return{setReversed:function(fe){de=fe},setTest:function(fe){fe?we(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(fe){X!==fe&&!k&&(r.depthMask(fe),X=fe)},setFunc:function(fe){if(de&&(fe=S_[fe]),Q!==fe){switch(fe){case Fc:r.depthFunc(r.NEVER);break;case Bc:r.depthFunc(r.ALWAYS);break;case zc:r.depthFunc(r.LESS);break;case br:r.depthFunc(r.LEQUAL);break;case Hc:r.depthFunc(r.EQUAL);break;case Gc:r.depthFunc(r.GEQUAL);break;case Vc:r.depthFunc(r.GREATER);break;case Wc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=fe}},setLocked:function(fe){k=fe},setClear:function(fe){ce!==fe&&(r.clearDepth(fe),ce=fe)},reset:function(){k=!1,X=null,Q=null,ce=null}}}function n(){let k=!1,de=null,X=null,Q=null,ce=null,fe=null,nt=null,Gt=null,wn=null;return{setTest:function(ct){k||(ct?we(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(ct){de!==ct&&!k&&(r.stencilMask(ct),de=ct)},setFunc:function(ct,Sn,Mi){(X!==ct||Q!==Sn||ce!==Mi)&&(r.stencilFunc(ct,Sn,Mi),X=ct,Q=Sn,ce=Mi)},setOp:function(ct,Sn,Mi){(fe!==ct||nt!==Sn||Gt!==Mi)&&(r.stencilOp(ct,Sn,Mi),fe=ct,nt=Sn,Gt=Mi)},setLocked:function(ct){k=ct},setClear:function(ct){wn!==ct&&(r.clearStencil(ct),wn=ct)},reset:function(){k=!1,de=null,X=null,Q=null,ce=null,fe=null,nt=null,Gt=null,wn=null}}}let i=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,x=null,p=null,g=null,b=null,y=null,_=null,A=null,T=new j(0,0,0),M=0,R=!1,D=null,v=null,S=null,I=null,O=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,z=0,ee=r.getParameter(r.VERSION);ee.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=z>=1):ee.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=z>=2);let W=null,ue={},le=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),lt=new ht().fromArray(le),mt=new ht().fromArray(pe);function K(k,de,X,Q){let ce=new Uint8Array(4),fe=r.createTexture();r.bindTexture(k,fe),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<X;nt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(de+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return fe}let ie={};ie[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),we(r.DEPTH_TEST),s.setFunc(br),Je(!1),ot(kd),we(r.CULL_FACE),L(pi);function we(k){c[k]!==!0&&(r.enable(k),c[k]=!0)}function me(k){c[k]!==!1&&(r.disable(k),c[k]=!1)}function ze(k,de){return h[k]!==de?(r.bindFramebuffer(k,de),h[k]=de,k===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=de),k===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=de),!0):!1}function Le(k,de){let X=d,Q=!1;if(k){X=u.get(de),X===void 0&&(X=[],u.set(de,X));let ce=k.textures;if(X.length!==ce.length||X[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,nt=ce.length;fe<nt;fe++)X[fe]=r.COLOR_ATTACHMENT0+fe;X.length=ce.length,Q=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Q=!0);Q&&r.drawBuffers(X)}function et(k){return f!==k?(r.useProgram(k),f=k,!0):!1}let yt={[Rs]:r.FUNC_ADD,[Wm]:r.FUNC_SUBTRACT,[Xm]:r.FUNC_REVERSE_SUBTRACT};yt[$m]=r.MIN,yt[qm]=r.MAX;let tt={[Ym]:r.ZERO,[Km]:r.ONE,[Zm]:r.SRC_COLOR,[Nc]:r.SRC_ALPHA,[ng]:r.SRC_ALPHA_SATURATE,[eg]:r.DST_COLOR,[Jm]:r.DST_ALPHA,[jm]:r.ONE_MINUS_SRC_COLOR,[Oc]:r.ONE_MINUS_SRC_ALPHA,[tg]:r.ONE_MINUS_DST_COLOR,[Qm]:r.ONE_MINUS_DST_ALPHA,[ig]:r.CONSTANT_COLOR,[sg]:r.ONE_MINUS_CONSTANT_COLOR,[rg]:r.CONSTANT_ALPHA,[og]:r.ONE_MINUS_CONSTANT_ALPHA};function L(k,de,X,Q,ce,fe,nt,Gt,wn,ct){if(k===pi){m===!0&&(me(r.BLEND),m=!1);return}if(m===!1&&(we(r.BLEND),m=!0),k!==Vm){if(k!==x||ct!==R){if((p!==Rs||y!==Rs)&&(r.blendEquation(r.FUNC_ADD),p=Rs,y=Rs),ct)switch(k){case mi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Li:r.blendFunc(r.ONE,r.ONE);break;case Ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Li:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}g=null,b=null,_=null,A=null,T.set(0,0,0),M=0,x=k,R=ct}return}ce=ce||de,fe=fe||X,nt=nt||Q,(de!==p||ce!==y)&&(r.blendEquationSeparate(yt[de],yt[ce]),p=de,y=ce),(X!==g||Q!==b||fe!==_||nt!==A)&&(r.blendFuncSeparate(tt[X],tt[Q],tt[fe],tt[nt]),g=X,b=Q,_=fe,A=nt),(Gt.equals(T)===!1||wn!==M)&&(r.blendColor(Gt.r,Gt.g,Gt.b,wn),T.copy(Gt),M=wn),x=k,R=!1}function Rn(k,de){k.side===fn?me(r.CULL_FACE):we(r.CULL_FACE);let X=k.side===pn;de&&(X=!X),Je(X),k.blending===mi&&k.transparent===!1?L(pi):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),i.setMask(k.colorWrite);let Q=k.stencilWrite;o.setTest(Q),Q&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ct(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?we(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Je(k){D!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),D=k)}function ot(k){k!==Hm?(we(r.CULL_FACE),k!==v&&(k===kd?r.cullFace(r.BACK):k===Gm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),v=k}function ke(k){k!==S&&(Y&&r.lineWidth(k),S=k)}function Ct(k,de,X){k?(we(r.POLYGON_OFFSET_FILL),(I!==de||O!==X)&&(r.polygonOffset(de,X),I=de,O=X)):me(r.POLYGON_OFFSET_FILL)}function Fe(k){k?we(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function C(k){k===void 0&&(k=r.TEXTURE0+F-1),W!==k&&(r.activeTexture(k),W=k)}function w(k,de,X){X===void 0&&(W===null?X=r.TEXTURE0+F-1:X=W);let Q=ue[X];Q===void 0&&(Q={type:void 0,texture:void 0},ue[X]=Q),(Q.type!==k||Q.texture!==de)&&(W!==X&&(r.activeTexture(X),W=X),r.bindTexture(k,de||ie[k]),Q.type=k,Q.texture=de)}function H(){let k=ue[W];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){lt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),lt.copy(k))}function ye(k){mt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),mt.copy(k))}function Qe(k,de){let X=l.get(de);X===void 0&&(X=new WeakMap,l.set(de,X));let Q=X.get(k);Q===void 0&&(Q=r.getUniformBlockIndex(de,k.name),X.set(k,Q))}function He(k,de){let Q=l.get(de).get(k);a.get(de)!==Q&&(r.uniformBlockBinding(de,Q,k.__bindingPointIndex),a.set(de,Q))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},W=null,ue={},h={},u=new WeakMap,d=[],f=null,m=!1,x=null,p=null,g=null,b=null,y=null,_=null,A=null,T=new j(0,0,0),M=0,R=!1,D=null,v=null,S=null,I=null,O=null,lt.set(0,0,r.canvas.width,r.canvas.height),mt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:we,disable:me,bindFramebuffer:ze,drawBuffers:Le,useProgram:et,setBlending:L,setMaterial:Rn,setFlipSided:Je,setCullFace:ot,setLineWidth:ke,setPolygonOffset:Ct,setScissorTest:Fe,activeTexture:C,bindTexture:w,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Ue,updateUBOMapping:Qe,uniformBlockBinding:He,texStorage2D:at,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:ge,scissor:Ne,viewport:ye,reset:Tt}}function Pf(r,e,t,n){let i=E_(n);switch(t){case sp:return r*e;case op:return r*e;case ap:return r*e*2;case ru:return r*e/i.components*i.byteLength;case ou:return r*e/i.components*i.byteLength;case lp:return r*e*2/i.components*i.byteLength;case au:return r*e*2/i.components*i.byteLength;case rp:return r*e*3/i.components*i.byteLength;case Xn:return r*e*4/i.components*i.byteLength;case lu:return r*e*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yc:case Zc:return Math.max(r,16)*Math.max(e,8)/4;case qc:case Kc:return Math.max(r,8)*Math.max(e,8)/2;case jc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case La:case ph:case mh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cp:case gh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xh:case yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E_(r){switch(r){case ki:case tp:return{byteLength:1,components:1};case mo:case np:case On:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case Is:case nu:case ti:return{byteLength:4,components:1};case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function A_(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,w){return f?new OffscreenCanvas(C,w):go("canvas")}function x(C,w,H){let J=1,ne=Fe(C);if((ne.width>H||ne.height>H)&&(J=H/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let Z=Math.floor(J*ne.width),Ee=Math.floor(J*ne.height);u===void 0&&(u=m(Z,Ee));let ae=w?m(Z,Ee):u;return ae.width=Z,ae.height=Ee,ae.getContext("2d").drawImage(C,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ee+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==tn&&C.minFilter!==an}function g(C){r.generateMipmap(C)}function b(C,w,H,J,ne=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=w;if(w===r.RED&&(H===r.FLOAT&&(Z=r.R32F),H===r.HALF_FLOAT&&(Z=r.R16F),H===r.UNSIGNED_BYTE&&(Z=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.R8UI),H===r.UNSIGNED_SHORT&&(Z=r.R16UI),H===r.UNSIGNED_INT&&(Z=r.R32UI),H===r.BYTE&&(Z=r.R8I),H===r.SHORT&&(Z=r.R16I),H===r.INT&&(Z=r.R32I)),w===r.RG&&(H===r.FLOAT&&(Z=r.RG32F),H===r.HALF_FLOAT&&(Z=r.RG16F),H===r.UNSIGNED_BYTE&&(Z=r.RG8)),w===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RG8UI),H===r.UNSIGNED_SHORT&&(Z=r.RG16UI),H===r.UNSIGNED_INT&&(Z=r.RG32UI),H===r.BYTE&&(Z=r.RG8I),H===r.SHORT&&(Z=r.RG16I),H===r.INT&&(Z=r.RG32I)),w===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),H===r.UNSIGNED_INT&&(Z=r.RGB32UI),H===r.BYTE&&(Z=r.RGB8I),H===r.SHORT&&(Z=r.RGB16I),H===r.INT&&(Z=r.RGB32I)),w===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),H===r.UNSIGNED_INT&&(Z=r.RGBA32UI),H===r.BYTE&&(Z=r.RGBA8I),H===r.SHORT&&(Z=r.RGBA16I),H===r.INT&&(Z=r.RGBA32I)),w===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),w===r.RGBA){let Ee=ne?ka:Ze.getTransfer(J);H===r.FLOAT&&(Z=r.RGBA32F),H===r.HALF_FLOAT&&(Z=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Z=Ee===wt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(C,w){let H;return C?w===null||w===Is||w===Sr?H=r.DEPTH24_STENCIL8:w===ti?H=r.DEPTH32F_STENCIL8:w===mo&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Is||w===Sr?H=r.DEPTH_COMPONENT24:w===ti?H=r.DEPTH_COMPONENT32F:w===mo&&(H=r.DEPTH_COMPONENT16),H}function _(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==an?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){let w=C.target;w.removeEventListener("dispose",A),M(w),w.isVideoTexture&&h.delete(w)}function T(C){let w=C.target;w.removeEventListener("dispose",T),D(w)}function M(C){let w=n.get(C);if(w.__webglInit===void 0)return;let H=C.source,J=d.get(H);if(J){let ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(J).length===0&&d.delete(H)}n.remove(C)}function R(C){let w=n.get(C);r.deleteTexture(w.__webglTexture);let H=C.source,J=d.get(H);delete J[w.__cacheKey],o.memory.textures--}function D(C){let w=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)r.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else r.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)r.deleteFramebuffer(w.__webglFramebuffer[J]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=C.textures;for(let J=0,ne=H.length;J<ne;J++){let Z=n.get(H[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[J])}n.remove(C)}let v=0;function S(){v=0}function I(){let C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function O(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function F(C,w){let H=n.get(C);if(C.isVideoTexture&&ke(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,C,w);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function Y(C,w){let H=n.get(C);if(C.version>0&&H.__version!==C.version){mt(H,C,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function z(C,w){let H=n.get(C);if(C.version>0&&H.__version!==C.version){mt(H,C,w);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function ee(C,w){let H=n.get(C);if(C.version>0&&H.__version!==C.version){K(H,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}let W={[Di]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[po]:r.MIRRORED_REPEAT},ue={[tn]:r.NEAREST,[tu]:r.NEAREST_MIPMAP_NEAREST,[gr]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[co]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},le={[mg]:r.NEVER,[bg]:r.ALWAYS,[gg]:r.LESS,[dp]:r.LEQUAL,[xg]:r.EQUAL,[_g]:r.GEQUAL,[yg]:r.GREATER,[vg]:r.NOTEQUAL};function pe(C,w){if(w.type===ti&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===an||w.magFilter===co||w.magFilter===gr||w.magFilter===fi||w.minFilter===an||w.minFilter===co||w.minFilter===gr||w.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,W[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,W[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,W[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ue[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ue[w.minFilter]),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===tn||w.minFilter!==gr&&w.minFilter!==fi||w.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function lt(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));let J=w.source,ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));let Z=O(w);if(Z!==C.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[Z].usedTimes++;let Ee=ne[C.__cacheKey];Ee!==void 0&&(ne[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(w)),C.__cacheKey=Z,C.__webglTexture=ne[Z].texture}return H}function mt(C,w,H){let J=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=r.TEXTURE_3D);let ne=lt(C,w),Z=w.source;t.bindTexture(J,C.__webglTexture,r.TEXTURE0+H);let Ee=n.get(Z);if(Z.version!==Ee.__version||ne===!0){t.activeTexture(r.TEXTURE0+H);let ae=Ze.getPrimaries(Ze.workingColorSpace),ge=w.colorSpace===Wn?null:Ze.getPrimaries(w.colorSpace),at=w.colorSpace===Wn||ae===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let se=x(w.image,!1,i.maxTextureSize);se=Ct(w,se);let xe=s.convert(w.format,w.colorSpace),Ue=s.convert(w.type),Ne=b(w.internalFormat,xe,Ue,w.colorSpace,w.isVideoTexture);pe(J,w);let ye,Qe=w.mipmaps,He=w.isVideoTexture!==!0,Tt=Ee.__version===void 0||ne===!0,k=Z.dataReady,de=_(w,se);if(w.isDepthTexture)Ne=y(w.format===Tr,w.type),Tt&&(He?t.texStorage2D(r.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ne,se.width,se.height,0,xe,Ue,null));else if(w.isDataTexture)if(Qe.length>0){He&&Tt&&t.texStorage2D(r.TEXTURE_2D,de,Ne,Qe[0].width,Qe[0].height);for(let X=0,Q=Qe.length;X<Q;X++)ye=Qe[X],He?k&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,Ue,ye.data):t.texImage2D(r.TEXTURE_2D,X,Ne,ye.width,ye.height,0,xe,Ue,ye.data);w.generateMipmaps=!1}else He?(Tt&&t.texStorage2D(r.TEXTURE_2D,de,Ne,se.width,se.height),k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,xe,Ue,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,se.width,se.height,0,xe,Ue,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Ne,Qe[0].width,Qe[0].height,se.depth);for(let X=0,Q=Qe.length;X<Q;X++)if(ye=Qe[X],w.format!==Xn)if(xe!==null)if(He){if(k)if(w.layerUpdates.size>0){let ce=Pf(ye.width,ye.height,w.format,w.type);for(let fe of w.layerUpdates){let nt=ye.data.subarray(fe*ce/ye.data.BYTES_PER_ELEMENT,(fe+1)*ce/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,fe,ye.width,ye.height,1,xe,nt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,xe,ye.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Ne,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,se.depth,xe,Ue,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Ne,ye.width,ye.height,se.depth,0,xe,Ue,ye.data)}else{He&&Tt&&t.texStorage2D(r.TEXTURE_2D,de,Ne,Qe[0].width,Qe[0].height);for(let X=0,Q=Qe.length;X<Q;X++)ye=Qe[X],w.format!==Xn?xe!==null?He?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?k&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,ye.width,ye.height,xe,Ue,ye.data):t.texImage2D(r.TEXTURE_2D,X,Ne,ye.width,ye.height,0,xe,Ue,ye.data)}else if(w.isDataArrayTexture)if(He){if(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Ne,se.width,se.height,se.depth),k)if(w.layerUpdates.size>0){let X=Pf(se.width,se.height,w.format,w.type);for(let Q of w.layerUpdates){let ce=se.data.subarray(Q*X/se.data.BYTES_PER_ELEMENT,(Q+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,xe,Ue,ce)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Ue,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,xe,Ue,se.data);else if(w.isData3DTexture)He?(Tt&&t.texStorage3D(r.TEXTURE_3D,de,Ne,se.width,se.height,se.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Ue,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,xe,Ue,se.data);else if(w.isFramebufferTexture){if(Tt)if(He)t.texStorage2D(r.TEXTURE_2D,de,Ne,se.width,se.height);else{let X=se.width,Q=se.height;for(let ce=0;ce<de;ce++)t.texImage2D(r.TEXTURE_2D,ce,Ne,X,Q,0,xe,Ue,null),X>>=1,Q>>=1}}else if(Qe.length>0){if(He&&Tt){let X=Fe(Qe[0]);t.texStorage2D(r.TEXTURE_2D,de,Ne,X.width,X.height)}for(let X=0,Q=Qe.length;X<Q;X++)ye=Qe[X],He?k&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,xe,Ue,ye):t.texImage2D(r.TEXTURE_2D,X,Ne,xe,Ue,ye);w.generateMipmaps=!1}else if(He){if(Tt){let X=Fe(se);t.texStorage2D(r.TEXTURE_2D,de,Ne,X.width,X.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Ue,se)}else t.texImage2D(r.TEXTURE_2D,0,Ne,xe,Ue,se);p(w)&&g(J),Ee.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function K(C,w,H){if(w.image.length!==6)return;let J=lt(C,w),ne=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);let Z=n.get(ne);if(ne.version!==Z.__version||J===!0){t.activeTexture(r.TEXTURE0+H);let Ee=Ze.getPrimaries(Ze.workingColorSpace),ae=w.colorSpace===Wn?null:Ze.getPrimaries(w.colorSpace),ge=w.colorSpace===Wn||Ee===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let at=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let Q=0;Q<6;Q++)!at&&!se?xe[Q]=x(w.image[Q],!0,i.maxCubemapSize):xe[Q]=se?w.image[Q].image:w.image[Q],xe[Q]=Ct(w,xe[Q]);let Ue=xe[0],Ne=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),Qe=b(w.internalFormat,Ne,ye,w.colorSpace),He=w.isVideoTexture!==!0,Tt=Z.__version===void 0||J===!0,k=ne.dataReady,de=_(w,Ue);pe(r.TEXTURE_CUBE_MAP,w);let X;if(at){He&&Tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Qe,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){X=xe[Q].mipmaps;for(let ce=0;ce<X.length;ce++){let fe=X[ce];w.format!==Xn?Ne!==null?He?k&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,fe.width,fe.height,Ne,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,fe.width,fe.height,Ne,ye,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,Qe,fe.width,fe.height,0,Ne,ye,fe.data)}}}else{if(X=w.mipmaps,He&&Tt){X.length>0&&de++;let Q=Fe(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){He?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xe[Q].width,xe[Q].height,Ne,ye,xe[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,xe[Q].width,xe[Q].height,0,Ne,ye,xe[Q].data);for(let ce=0;ce<X.length;ce++){let nt=X[ce].image[Q].image;He?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,nt.width,nt.height,Ne,ye,nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Qe,nt.width,nt.height,0,Ne,ye,nt.data)}}else{He?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ne,ye,xe[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qe,Ne,ye,xe[Q]);for(let ce=0;ce<X.length;ce++){let fe=X[ce];He?k&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Ne,ye,fe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,Qe,Ne,ye,fe.image[Q])}}}p(w)&&g(r.TEXTURE_CUBE_MAP),Z.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ie(C,w,H,J,ne,Z){let Ee=s.convert(H.format,H.colorSpace),ae=s.convert(H.type),ge=b(H.internalFormat,Ee,ae,H.colorSpace);if(!n.get(w).__hasExternalTextures){let se=Math.max(1,w.width>>Z),xe=Math.max(1,w.height>>Z);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,ge,se,xe,w.depth,0,Ee,ae,null):t.texImage2D(ne,Z,ge,se,xe,0,Ee,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ot(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,ne,n.get(H).__webglTexture,0,Je(w)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,ne,n.get(H).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(C,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer){let J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=y(w.stencilBuffer,ne),Ee=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Je(w);ot(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,Z,w.width,w.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,Z,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Z,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,C)}else{let J=w.textures;for(let ne=0;ne<J.length;ne++){let Z=J[ne],Ee=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),ge=b(Z.internalFormat,Ee,ae,Z.colorSpace),at=Je(w);H&&ot(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,ge,w.width,w.height):ot(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,ge,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ge,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let J=n.get(w.depthTexture).__webglTexture,ne=Je(w);if(w.depthTexture.format===yr)ot(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(w.depthTexture.format===Tr)ot(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ze(C){let w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=r.createRenderbuffer(),we(w.__webglDepthbuffer[J],C,!1);else{let ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,w,H){let J=n.get(C);w!==void 0&&ie(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&ze(C)}function et(C){let w=C.texture,H=n.get(C),J=n.get(w);C.addEventListener("dispose",T);let ne=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=w.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let ge=0;ge<w.mipmaps.length;ge++)H.__webglFramebuffer[ae][ge]=r.createFramebuffer()}else H.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<w.mipmaps.length;ae++)H.__webglFramebuffer[ae]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let ae=0,ge=ne.length;ae<ge;ae++){let at=n.get(ne[ae]);at.__webglTexture===void 0&&(at.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&ot(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<ne.length;ae++){let ge=ne[ae];H.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);let at=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),xe=b(ge.internalFormat,at,se,ge.colorSpace,C.isXRRenderTarget===!0),Ue=Je(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,xe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),we(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),pe(r.TEXTURE_CUBE_MAP,w);for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ie(H.__webglFramebuffer[ae][ge],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ge);else ie(H.__webglFramebuffer[ae],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(w)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ae=0,ge=ne.length;ae<ge;ae++){let at=ne[ae],se=n.get(at);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),pe(r.TEXTURE_2D,at),ie(H.__webglFramebuffer,C,at,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),p(at)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),pe(ae,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ie(H.__webglFramebuffer[ge],C,w,r.COLOR_ATTACHMENT0,ae,ge);else ie(H.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,ae,0);p(w)&&g(ae),t.unbindTexture()}C.depthBuffer&&ze(C)}function yt(C){let w=C.textures;for(let H=0,J=w.length;H<J;H++){let ne=w[H];if(p(ne)){let Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ee=n.get(ne).__webglTexture;t.bindTexture(Z,Ee),g(Z),t.unbindTexture()}}}let tt=[],L=[];function Rn(C){if(C.samples>0){if(ot(C)===!1){let w=C.textures,H=C.width,J=C.height,ne=r.COLOR_BUFFER_BIT,Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(C),ae=w.length>1;if(ae)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let at=n.get(w[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,at,0)}r.blitFramebuffer(0,0,H,J,0,0,H,J,ne,r.NEAREST),l===!0&&(tt.length=0,L.length=0,tt.push(r.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(tt.push(Z),L.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);let at=n.get(w[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,at,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Je(C){return Math.min(i.maxSamples,C.samples)}function ot(C){let w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Ct(C,w){let H=C.colorSpace,J=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Wt&&H!==Wn&&(Ze.getTransfer(H)===wt?(J!==Xn||ne!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Fe(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=z,this.setTextureCube=ee,this.rebindTextures=Le,this.setupRenderTarget=et,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ot}function R_(r,e){function t(n,i=Wn){let s,o=Ze.getTransfer(i);if(n===ki)return r.UNSIGNED_BYTE;if(n===iu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===su)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ip)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return r.BYTE;if(n===np)return r.SHORT;if(n===mo)return r.UNSIGNED_SHORT;if(n===nu)return r.INT;if(n===Is)return r.UNSIGNED_INT;if(n===ti)return r.FLOAT;if(n===On)return r.HALF_FLOAT;if(n===sp)return r.ALPHA;if(n===rp)return r.RGB;if(n===Xn)return r.RGBA;if(n===op)return r.LUMINANCE;if(n===ap)return r.LUMINANCE_ALPHA;if(n===yr)return r.DEPTH_COMPONENT;if(n===Tr)return r.DEPTH_STENCIL;if(n===ru)return r.RED;if(n===ou)return r.RED_INTEGER;if(n===lp)return r.RG;if(n===au)return r.RG_INTEGER;if(n===lu)return r.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qc||n===Yc||n===Kc||n===Zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jc||n===Jc||n===Qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jc||n===Jc)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===th)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ih)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ah)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===ph||n===mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===La)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cp||n===gh||n===xh||n===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===La)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}function D_(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,mp(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,b,y,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,_)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===pn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===pn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=e.get(g),y=b.envMap,_=b.envMapRotation;y&&(p.envMap.value=y,Es.copy(_),Es.x*=-1,Es.y*=-1,Es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),p.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(Es)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,b){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let b=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k_(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let _=y.program;n.uniformBlockBinding(b,_)}function c(b,y){let _=i[b.id];_===void 0&&(m(b),_=h(b),i[b.id]=_,b.addEventListener("dispose",p));let A=y.program;n.updateUBOMapping(b,A);let T=e.render.frame;s[b.id]!==T&&(d(b),s[b.id]=T)}function h(b){let y=u();b.__bindingPointIndex=y;let _=r.createBuffer(),A=b.__size,T=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,A,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=i[b.id],_=b.uniforms,A=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,M=_.length;T<M;T++){let R=Array.isArray(_[T])?_[T]:[_[T]];for(let D=0,v=R.length;D<v;D++){let S=R[D];if(f(S,T,D,A)===!0){let I=S.__offset,O=Array.isArray(S.value)?S.value:[S.value],F=0;for(let Y=0;Y<O.length;Y++){let z=O[Y],ee=x(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,I+F,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,y,_,A){let T=b.value,M=y+"_"+_;if(A[M]===void 0)return typeof T=="number"||typeof T=="boolean"?A[M]=T:A[M]=T.clone(),!0;{let R=A[M];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[M]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function m(b){let y=b.uniforms,_=0,A=16;for(let M=0,R=y.length;M<R;M++){let D=Array.isArray(y[M])?y[M]:[y[M]];for(let v=0,S=D.length;v<S;v++){let I=D[v],O=Array.isArray(I.value)?I.value:[I.value];for(let F=0,Y=O.length;F<Y;F++){let z=O[F],ee=x(z),W=_%A,ue=W%ee.boundary,le=W+ue;_+=ue,le!==0&&A-le<ee.storage&&(_+=A-le),I.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=ee.storage}}}let T=_%A;return T>0&&(_+=A-T),b.__size=_,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){let y=b.target;y.removeEventListener("dispose",p);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(let b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}function Sa(r,e,t,n,i,s){let o=r.geometry.attributes.position;if(Ka.fromBufferAttribute(o,i),Za.fromBufferAttribute(o,s),t.distanceSqToSegment(Ka,Za,Dc,zf)>n)return;Dc.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Dc);if(!(l<e.near||l>e.far))return{distance:l,point:zf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}function Wf(r,e,t,n,i,s,o){let a=Nh.distanceSqToPoint(r);if(a<t){let l=new P;Nh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Aa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function F_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function B_(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function bp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function z_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return nl;case"quaternion":return Fi;case"bool":case"boolean":return cs;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function H_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=z_(r.type);if(r.times===void 0){let t=[],n=[];bp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}function Kf(){return performance.now()}function jf(r,e){return r.distance-e.distance}function Yh(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Yh(s[o],e,t,!0)}}var Hm,kd,Gm,Jf,Kh,Ci,gi,pn,fn,pi,mi,Li,Ud,Nd,Vm,Rs,Wm,Xm,$m,qm,Ym,Km,Zm,jm,Nc,Oc,Jm,Qm,eg,tg,ng,ig,sg,rg,og,Fc,Bc,zc,br,Hc,Gc,Vc,Wc,Qf,ag,lg,ss,Zh,jh,Jh,To,cg,Qh,eu,Od,hg,ep,Mr,wr,Xc,$c,hl,Di,di,po,tn,tu,gr,an,co,fi,ki,tp,np,mo,nu,Is,ti,On,iu,su,Sr,ip,sp,rp,Xn,op,ap,yr,Tr,ru,ou,lp,au,lu,Ra,Ca,Pa,Ia,qc,Yc,Kc,Zc,jc,Jc,Qc,eh,th,nh,ih,sh,rh,oh,ah,lh,ch,hh,uh,dh,fh,La,ph,mh,cp,gh,xh,yh,Er,Ar,ic,Fd,Bd,zd,ug,hp,ul,Eo,dg,fg,up,pg,Wn,At,Wt,cu,dl,ka,wt,Ua,Na,tr,Hd,mg,gg,xg,dp,yg,vg,_g,bg,vh,Ao,Gd,Ii,Oa,rs,hn,Vd,ho,Rr,Bs,Te,$e,sc,Wd,Xd,$d,Qr,Gg,Ze,nr,_h,Vg,Fa,Wg,$t,ht,bh,qt,Ba,Mh,mn,P,ac,qd,zt,wi,jn,ta,ir,sr,rr,ji,Ji,bs,eo,na,ia,Ms,Xg,to,cc,Dn,Si,hc,sa,Qi,uc,ra,dc,Ls,Pe,or,Jn,$g,qg,es,oa,In,Yd,Kd,kn,xo,Yg,Zd,ar,Ti,aa,no,Kg,Zg,jd,Jd,Qd,ef,jg,lr,fc,ut,Qn,Ei,pc,Ai,cr,hr,tf,mc,gc,xc,yc,vc,_c,Cs,pp,ts,la,j,un,Jg,Un,St,Vt,ca,qe,za,Ha,pt,Qg,Vn,Mc,ur,Ln,io,en,_t,nf,ws,ha,sf,ua,da,fa,wc,pa,rf,ma,Be,ii,fs,n0,i0,it,Ga,ns,of,af,Bt,dr,fr,wh,Va,Sh,Sc,s0,r0,Pi,Ss,xa,yo,si,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,x0,y0,v0,_0,b0,M0,w0,S0,T0,E0,A0,R0,C0,P0,I0,L0,D0,k0,U0,N0,O0,F0,B0,z0,H0,G0,V0,W0,X0,$0,q0,Y0,K0,Z0,j0,J0,Q0,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,yx,vx,_x,bx,Mx,wx,Sx,Tx,Ex,Ax,Rx,Cx,Px,Ix,Lx,Dx,kx,Ux,Nx,Ox,Fx,Bx,zx,Hx,Gx,Vx,Wx,Xx,$x,qx,Yx,Kx,Zx,jx,Jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,dy,fy,py,my,gy,xy,yy,vy,_y,by,My,wy,Sy,Ty,Ey,Ay,Ry,Cy,Py,Iy,Ly,Dy,ky,Uy,Ny,Oy,Fy,By,Xe,oe,ui,ya,Ts,zy,os,xr,lf,Ps,Tc,cf,Ec,Ac,Rc,Cc,As,pr,hf,Pr,Wa,xp,pf,yp,vp,_p,mf,gf,xf,yf,vf,Th,Eh,Ah,Pc,_r,Vv,Wv,_a,Qv,e_,n_,h_,Ch,Ph,x_,Ih,Lh,b_,M_,S_,Dh,vt,C_,fo,P_,I_,kh,Uh,Es,L_,Xa,$a,Ds,vo,yn,_o,If,Lf,Df,U_,kf,ba,Ic,Uf,Lc,qa,bo,ks,Nf,N_,Ya,Ui,mr,Of,Ma,Ff,O_,so,ro,Zt,Mo,Ka,Za,Bf,oo,wa,Dc,zf,Ir,Hf,Gf,Lr,ja,wo,Vf,Nh,Ta,Ea,as,Ja,Dr,Us,Ns,Qa,el,Os,Fs,Ni,tl,kt,Nn,ls,Oh,Fh,Bh,$n,cs,nl,Oi,zh,Fi,hs,Bi,il,is,Hh,G_,ri,Ri,Gh,us,Vh,sl,kr,Ur,kc,$f,qf,So,Wh,rl,Yf,ao,Uc,Xh,ol,$h,zi,ds,al,ll,du,V_,fu,W_,X_,$_,q_,Y_,K_,Z_,qh,Et,Zb,Zf,cl,It=We(()=>{Hm=0,kd=1,Gm=2,Jf=1,Kh=2,Ci=3,gi=0,pn=1,fn=2,pi=0,mi=1,Li=2,Ud=3,Nd=4,Vm=5,Rs=100,Wm=101,Xm=102,$m=103,qm=104,Ym=200,Km=201,Zm=202,jm=203,Nc=204,Oc=205,Jm=206,Qm=207,eg=208,tg=209,ng=210,ig=211,sg=212,rg=213,og=214,Fc=0,Bc=1,zc=2,br=3,Hc=4,Gc=5,Vc=6,Wc=7,Qf=0,ag=1,lg=2,ss=0,Zh=1,jh=2,Jh=3,To=4,cg=5,Qh=6,eu=7,Od="attached",hg="detached",ep=300,Mr=301,wr=302,Xc=303,$c=304,hl=306,Di=1e3,di=1001,po=1002,tn=1003,tu=1004,gr=1005,an=1006,co=1007,fi=1008,ki=1009,tp=1010,np=1011,mo=1012,nu=1013,Is=1014,ti=1015,On=1016,iu=1017,su=1018,Sr=1020,ip=35902,sp=1021,rp=1022,Xn=1023,op=1024,ap=1025,yr=1026,Tr=1027,ru=1028,ou=1029,lp=1030,au=1031,lu=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,qc=35840,Yc=35841,Kc=35842,Zc=35843,jc=36196,Jc=37492,Qc=37496,eh=37808,th=37809,nh=37810,ih=37811,sh=37812,rh=37813,oh=37814,ah=37815,lh=37816,ch=37817,hh=37818,uh=37819,dh=37820,fh=37821,La=36492,ph=36494,mh=36495,cp=36283,gh=36284,xh=36285,yh=36286,Er=2300,Ar=2301,ic=2302,Fd=2400,Bd=2401,zd=2402,ug=2500,hp=0,ul=1,Eo=2,dg=3200,fg=3201,up=0,pg=1,Wn="",At="srgb",Wt="srgb-linear",cu="display-p3",dl="display-p3-linear",ka="linear",wt="srgb",Ua="rec709",Na="p3",tr=7680,Hd=519,mg=512,gg=513,xg=514,dp=515,yg=516,vg=517,_g=518,bg=519,vh=35044,Ao=35048,Gd="300 es",Ii=2e3,Oa=2001,rs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,ho=Math.PI/180,Rr=180/Math.PI;Bs={DEG2RAD:ho,RAD2DEG:Rr,generateUUID:ni,clamp:dn,euclideanModulo:hu,mapLinear:Mg,inverseLerp:wg,lerp:uo,damp:Sg,pingpong:Tg,smoothstep:Eg,smootherstep:Ag,randInt:Rg,randFloat:Cg,randFloatSpread:Pg,seededRandom:Ig,degToRad:Lg,radToDeg:Dg,isPowerOfTwo:kg,ceilPowerOfTwo:Ug,floorPowerOfTwo:Ng,setQuaternionFromProperEuler:Og,normalize:xt,denormalize:ei},Te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],p=i[3],g=i[6],b=i[1],y=i[4],_=i[7],A=i[2],T=i[5],M=i[8];return s[0]=o*x+a*b+l*A,s[3]=o*p+a*y+l*T,s[6]=o*g+a*_+l*M,s[1]=c*x+h*b+u*A,s[4]=c*p+h*y+u*T,s[7]=c*g+h*_+u*M,s[2]=d*x+f*b+m*A,s[5]=d*p+f*y+m*T,s[8]=d*g+f*_+m*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sc.makeScale(e,t)),this}rotate(e){return this.premultiply(sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sc=new $e;Wd={};Xd=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$d=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[Wt]:{transfer:ka,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[At]:{transfer:wt,primaries:Ua,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[dl]:{transfer:ka,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3($d),fromReference:r=>r.applyMatrix3(Xd)},[cu]:{transfer:wt,primaries:Na,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3($d),fromReference:r=>r.applyMatrix3(Xd).convertLinearToSRGB()}},Gg=new Set([Wt,dl]),Ze={enabled:!0,_workingColorSpace:Wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Gg.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=Qr[e].toReference,i=Qr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Qr[r].primaries},getTransfer:function(r){return r===Wn?ka:Qr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Qr[e].luminanceCoefficients)}};_h=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=go("canvas")),nr.width=e.width,nr.height=e.height;let n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oc(i[o].image)):s.push(oc(i[o]))}else s=oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}};Wg=0,$t=class r extends rs{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=di,i=di,s=an,o=fi,a=Xn,l=ki,c=r.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ni(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ep;$t.DEFAULT_ANISOTROPY=1;ht=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,A=(g+1)/2,T=(h+d)/4,M=(u+x)/4,R=(m+p)/4;return y>_&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=M/n):_>A?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=T/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=M/s,i=R/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bh=class extends rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Mh=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let p=1-a,g=l*d+c*f+h*m+u*x,b=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let A=Math.sqrt(y),T=Math.atan2(A,g*b);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}let _=a*b;if(l=l*p+d*_,c=c*p+f*_,h=h*p+m*_,u=u*p+x*_,p===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ac=new P,qd=new mn,zt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),na.subVectors(this.max,eo),ir.subVectors(e.a,eo),sr.subVectors(e.b,eo),rr.subVectors(e.c,eo),ji.subVectors(sr,ir),Ji.subVectors(rr,sr),bs.subVectors(ir,rr);let t=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-bs.y,bs.x,0];return!lc(t,ir,sr,rr,na)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,ir,sr,rr,na))?!1:(ia.crossVectors(ji,Ji),t=[ia.x,ia.y,ia.z],lc(t,ir,sr,rr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new P,new P,new P,new P,new P,new P,new P,new P],jn=new P,ta=new zt,ir=new P,sr=new P,rr=new P,ji=new P,Ji=new P,bs=new P,eo=new P,na=new P,ia=new P,Ms=new P;Xg=new zt,to=new P,cc=new P,Dn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);let t=to.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(cc)),this.expandByPoint(to.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new P,hc=new P,sa=new P,Qi=new P,uc=new P,ra=new P,dc=new P,Ls=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hc.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(hc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=Qi.dot(this.direction),l=-Qi.dot(sa),c=Qi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(hc).addScaledVector(sa,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),i=Si.dot(Si)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,s){uc.subVectors(t,e),ra.subVectors(n,e),dc.crossVectors(uc,ra);let o=this.direction.dot(dc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);let l=a*this.direction.dot(ra.crossVectors(Qi,ra));if(l<0)return null;let c=a*this.direction.dot(uc.cross(Qi));if(c<0||l+c>o)return null;let h=-a*Qi.dot(dc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,p){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,p)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($g,e,qg)}lookAt(e,t,n){let i=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),es.crossVectors(n,In),es.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),es.crossVectors(n,In)),es.normalize(),oa.crossVectors(In,es),i[0]=es.x,i[4]=oa.x,i[8]=In.x,i[1]=es.y,i[5]=oa.y,i[9]=In.y,i[2]=es.z,i[6]=oa.z,i[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],b=n[3],y=n[7],_=n[11],A=n[15],T=i[0],M=i[4],R=i[8],D=i[12],v=i[1],S=i[5],I=i[9],O=i[13],F=i[2],Y=i[6],z=i[10],ee=i[14],W=i[3],ue=i[7],le=i[11],pe=i[15];return s[0]=o*T+a*v+l*F+c*W,s[4]=o*M+a*S+l*Y+c*ue,s[8]=o*R+a*I+l*z+c*le,s[12]=o*D+a*O+l*ee+c*pe,s[1]=h*T+u*v+d*F+f*W,s[5]=h*M+u*S+d*Y+f*ue,s[9]=h*R+u*I+d*z+f*le,s[13]=h*D+u*O+d*ee+f*pe,s[2]=m*T+x*v+p*F+g*W,s[6]=m*M+x*S+p*Y+g*ue,s[10]=m*R+x*I+p*z+g*le,s[14]=m*D+x*O+p*ee+g*pe,s[3]=b*T+y*v+_*F+A*W,s[7]=b*M+y*S+_*Y+A*ue,s[11]=b*R+y*I+_*z+A*le,s[15]=b*D+y*O+_*ee+A*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+g*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],b=u*p*c-x*d*c+x*l*f-a*p*f-u*l*g+a*d*g,y=m*d*c-h*p*c-m*l*f+o*p*f+h*l*g-o*d*g,_=h*x*c-m*u*c+m*a*f-o*x*f-h*a*g+o*u*g,A=m*u*l-h*x*l-m*a*d+o*x*d+h*a*p-o*u*p,T=t*b+n*y+i*_+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/T;return e[0]=b*M,e[1]=(x*d*s-u*p*s-x*i*f+n*p*f+u*i*g-n*d*g)*M,e[2]=(a*p*s-x*l*s+x*i*c-n*p*c-a*i*g+n*l*g)*M,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*M,e[4]=y*M,e[5]=(h*p*s-m*d*s+m*i*f-t*p*f-h*i*g+t*d*g)*M,e[6]=(m*l*s-o*p*s-m*i*c+t*p*c+o*i*g-t*l*g)*M,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*M,e[8]=_*M,e[9]=(m*u*s-h*x*s-m*n*f+t*x*f+h*n*g-t*u*g)*M,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*g+t*a*g)*M,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*M,e[12]=A*M,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*p+t*u*p)*M,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*p-t*a*p)*M,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*M,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,x=o*h,p=o*u,g=a*u,b=l*c,y=l*h,_=l*u,A=n.x,T=n.y,M=n.z;return i[0]=(1-(x+g))*A,i[1]=(f+_)*A,i[2]=(m-y)*A,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+g))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(m+y)*M,i[9]=(p-b)*M,i[10]=(1-(d+x))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=or.set(i[0],i[1],i[2]).length(),o=or.set(i[4],i[5],i[6]).length(),a=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);let c=1/s,h=1/o,u=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Ii){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,m;if(a===Ii)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Oa)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Ii){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,f=(n+i)*h,m,x;if(a===Ii)m=(o+s)*u,x=-2*u;else if(a===Oa)m=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},or=new P,Jn=new Pe,$g=new P(0,0,0),qg=new P(1,1,1),es=new P,oa=new P,In=new P,Yd=new Pe,Kd=new mn,kn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yg=0,Zd=new P,ar=new mn,Ti=new Pe,aa=new P,no=new P,Kg=new P,Zg=new mn,jd=new P(1,0,0),Jd=new P(0,1,0),Qd=new P(0,0,1),ef={type:"added"},jg={type:"removed"},lr={type:"childadded",child:null},fc={type:"childremoved",child:null},ut=class r extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new kn,n=new mn,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new $e}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(no,aa,this.up):Ti.lookAt(aa,no,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),ar.setFromRotationMatrix(Ti),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jg),fc.child=e,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ut.DEFAULT_UP=new P(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Qn=new P,Ei=new P,pc=new P,Ai=new P,cr=new P,hr=new P,tf=new P,mc=new P,gc=new P,xc=new P,yc=new ht,vc=new ht,_c=new ht,Cs=class r{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qn.subVectors(i,t),Ei.subVectors(n,t),pc.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Ei),l=Qn.dot(pc),c=Ei.dot(Ei),h=Ei.dot(pc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return yc.setScalar(0),vc.setScalar(0),_c.setScalar(0),yc.fromBufferAttribute(e,t),vc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(yc,s.x),o.addScaledVector(vc,s.y),o.addScaledVector(_c,s.z),o}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),Ei.subVectors(e,t),Qn.cross(Ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Qn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;cr.subVectors(i,n),hr.subVectors(s,n),mc.subVectors(e,n);let l=cr.dot(mc),c=hr.dot(mc);if(l<=0&&c<=0)return t.copy(n);gc.subVectors(e,i);let h=cr.dot(gc),u=hr.dot(gc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(cr,o);xc.subVectors(e,s);let f=cr.dot(xc),m=hr.dot(xc);if(m>=0&&f<=m)return t.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(hr,a);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return tf.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(tf,a);let g=1/(p+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(cr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},la={h:0,s:0,l:0};j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=hu(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=bc(o,s,e+1/3),this.g=bc(o,s,e),this.b=bc(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=rc(e.r),this.g=rc(e.g),this.b=rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ze.fromWorkingColorSpace(un.copy(this),e),Math.round(dn(un.r*255,0,255))*65536+Math.round(dn(un.g*255,0,255))*256+Math.round(dn(un.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(un.copy(this),t);let n=un.r,i=un.g,s=un.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=At){Ze.fromWorkingColorSpace(un.copy(this),e);let t=un.r,n=un.g,i=un.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(la);let n=uo(ts.h,la.h,t),i=uo(ts.s,la.s,t),s=uo(ts.l,la.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new j;j.NAMES=pp;Jg=0,Un=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=mi,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Oc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Oc&&(n.blendDst=this.blendDst),this.blendEquation!==Rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},St=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vt=new P,ca=new Te,qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}},za=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ha=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},pt=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qg=0,Vn=new Pe,Mc=new ut,ur=new P,Ln=new zt,io=new zt,en=new P,_t=class r extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?Ha:za)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Ln.min,io.min),Ln.expandByPoint(en),en.addVectors(Ln.max,io.max),Ln.expandByPoint(en)):(Ln.expandByPoint(io.min),Ln.expandByPoint(io.max))}Ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),en.add(ur)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,d=new Te,f=new Te,m=new Te,x=new P,p=new P;function g(R,D,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(S),a[R].add(x),a[D].add(x),a[v].add(x),l[R].add(p),l[D].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,D=b.length;R<D;++R){let v=b[R],S=v.start,I=v.count;for(let O=S,F=S+I;O<F;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new P,_=new P,A=new P,T=new P;function M(R){A.fromBufferAttribute(i,R),T.copy(A);let D=a[R];y.copy(D),y.sub(A.multiplyScalar(A.dot(D))).normalize(),_.crossVectors(T,D);let S=_.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,S)}for(let R=0,D=b.length;R<D;++R){let v=b[R],S=v.start,I=v.count;for(let O=S,F=S+I;O<F;O+=3)M(e.getX(O+0)),M(e.getX(O+1)),M(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nf=new Pe,ws=new Ls,ha=new Dn,sf=new P,ua=new P,da=new P,fa=new P,wc=new P,pa=new P,rf=new P,ma=new P,Be=class extends ut{constructor(e=new _t,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(wc.fromBufferAttribute(u,e),o?pa.addScaledVector(wc,h):pa.addScaledVector(wc.sub(t),h))}t.add(pa)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(ha.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ha,sf)===null||ws.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(nf.copy(s).invert(),ws.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,A=y;_<A;_+=3){let T=a.getX(_),M=a.getX(_+1),R=a.getX(_+2);i=ga(this,g,e,n,c,h,u,T,M,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let b=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);i=ga(this,o,e,n,c,h,u,b,y,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=o[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=b,A=y;_<A;_+=3){let T=_,M=_+1,R=_+2;i=ga(this,g,e,n,c,h,u,T,M,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let b=p,y=p+1,_=p+2;i=ga(this,o,e,n,c,h,u,b,y,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};ii=class r extends _t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(u,2));function m(x,p,g,b,y,_,A,T,M,R,D){let v=_/M,S=A/R,I=_/2,O=A/2,F=T/2,Y=M+1,z=R+1,ee=0,W=0,ue=new P;for(let le=0;le<z;le++){let pe=le*S-O;for(let lt=0;lt<Y;lt++){let mt=lt*v-I;ue[x]=mt*b,ue[p]=pe*y,ue[g]=F,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[p]=0,ue[g]=T>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(lt/M),u.push(1-le/R),ee+=1}}for(let le=0;le<R;le++)for(let pe=0;pe<M;pe++){let lt=d+pe+Y*le,mt=d+pe+Y*(le+1),K=d+(pe+1)+Y*(le+1),ie=d+(pe+1)+Y*le;l.push(lt,mt,ie),l.push(mt,K,ie),W+=6}a.addGroup(f,W,D),f+=W,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};fs={clone:Cr,merge:vn},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ga=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ns=new P,of=new Te,af=new Te,Bt=class extends Ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,fr=1,wh=class extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bt(dr,fr,e,t);i.layers=this.layers,this.add(i);let s=new Bt(dr,fr,e,t);s.layers=this.layers,this.add(s);let o=new Bt(dr,fr,e,t);o.layers=this.layers,this.add(o);let a=new Bt(dr,fr,e,t);a.layers=this.layers,this.add(a);let l=new Bt(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Va=class extends $t{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mr,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sh=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Va(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ii(5,5,5),s=new it({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:pi});s.uniforms.tEquirect.value=t;let o=new Be(i,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=an),new wh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Sc=new P,s0=new P,r0=new $e,Pi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sc.subVectors(n,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r0.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Dn,xa=new P,yo=class{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,s=new Pi,o=new Pi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii){let n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],p=i[11],g=i[12],b=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-s,d-c,p-f,_-g).normalize(),n[1].setComponents(l+s,d+c,p+f,_+g).normalize(),n[2].setComponents(l+o,d+h,p+m,_+b).normalize(),n[3].setComponents(l-o,d-h,p-m,_-b).normalize(),n[4].setComponents(l-a,d-u,p-x,_-y).normalize(),t===Ii)n[5].setComponents(l+a,d+u,p+x,_+y).normalize();else if(t===Oa)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};si=class r extends _t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let b=g*d-o;for(let y=0;y<c;y++){let _=y*u-s;m.push(_,-b,0),x.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let y=b+c*g,_=b+c*(g+1),A=b+1+c*(g+1),T=b+1+c*g;f.push(y,_,T),f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,L0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ey=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ty=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,my=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ty=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ry=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:h0,alphatest_fragment:u0,alphatest_pars_fragment:d0,aomap_fragment:f0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:y0,bsdfs:v0,iridescence_fragment:_0,bumpmap_pars_fragment:b0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:S0,clipping_planes_vertex:T0,color_fragment:E0,color_pars_fragment:A0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:D0,displacementmap_vertex:k0,emissivemap_fragment:U0,emissivemap_pars_fragment:N0,colorspace_fragment:O0,colorspace_pars_fragment:F0,envmap_fragment:B0,envmap_common_pars_fragment:z0,envmap_pars_fragment:H0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:Q0,envmap_vertex:V0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:$0,fog_pars_fragment:q0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:K0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:j0,lights_pars_begin:J0,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:dx,map_fragment:fx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:yx,morphinstance_vertex:vx,morphcolor_vertex:_x,morphnormal_vertex:bx,morphtarget_pars_vertex:Mx,morphtarget_vertex:wx,normal_fragment_begin:Sx,normal_fragment_maps:Tx,normal_pars_fragment:Ex,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Dx,opaque_fragment:kx,packing:Ux,premultiplied_alpha_fragment:Nx,project_vertex:Ox,dithering_fragment:Fx,dithering_pars_fragment:Bx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:$x,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:Kx,specularmap_fragment:Zx,specularmap_pars_fragment:jx,tonemapping_fragment:Jx,tonemapping_pars_fragment:Qx,transmission_fragment:ey,transmission_pars_fragment:ty,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:sy,worldpos_vertex:ry,background_vert:oy,background_frag:ay,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:dy,depth_frag:fy,distanceRGBA_vert:py,distanceRGBA_frag:my,equirect_vert:gy,equirect_frag:xy,linedashed_vert:yy,linedashed_frag:vy,meshbasic_vert:_y,meshbasic_frag:by,meshlambert_vert:My,meshlambert_frag:wy,meshmatcap_vert:Sy,meshmatcap_frag:Ty,meshnormal_vert:Ey,meshnormal_frag:Ay,meshphong_vert:Ry,meshphong_frag:Cy,meshphysical_vert:Py,meshphysical_frag:Iy,meshtoon_vert:Ly,meshtoon_frag:Dy,points_vert:ky,points_frag:Uy,shadow_vert:Ny,shadow_frag:Oy,sprite_vert:Fy,sprite_frag:By},oe={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ui={basic:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new j(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:vn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:vn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:vn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new j(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:vn([oe.points,oe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:vn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:vn([oe.common,oe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:vn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:vn([oe.sprite,oe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:vn([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:vn([oe.lights,oe.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ui.physical={uniforms:vn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};ya={r:0,b:0,g:0},Ts=new kn,zy=new Pe;os=class extends Ga{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xr=4,lf=[.125,.215,.35,.446,.526,.582],Ps=20,Tc=new os,cf=new j,Ec=null,Ac=0,Rc=0,Cc=!1,As=(1+Math.sqrt(5))/2,pr=1/As,hf=[new P(-As,pr,0),new P(As,pr,0),new P(-pr,0,As),new P(pr,0,As),new P(0,As,-pr),new P(0,As,pr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Ac,Rc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:On,format:Xn,colorSpace:Wt,depthBuffer:!1},i=uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(s)),this._blurMaterial=Yy(s,e,t)}return i}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Tc)}_sceneToCubeUV(e,t,n,i){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cf),h.toneMapping=ss,h.autoClear=!1;let f=new St({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new Be(new ii,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(cf),x=!0);for(let g=0;g<6;g++){let b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let y=this._cubeSize;va(i,b*y,g>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Mr||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hf[(i-s-1)%hf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),x=s/m,p=isFinite(s)?1+Math.floor(h*x):Ps;p>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);let g=[],b=0;for(let M=0;M<Ps;++M){let R=M/x,D=Math.exp(-R*R/2);g.push(D),M===0?b+=D:M<p&&(b+=2*D)}for(let M=0;M<g.length;M++)g[M]=g[M]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[i],A=3*_*(i>y-xr?i-y+xr:0),T=4*(this._cubeSize-_);va(t,A,T,3*_,2*_),l.setRenderTarget(t),l.render(u,Tc)}};Wa=class extends $t{constructor(e,t,n,i,s,o,a,l,c,h=yr){if(h!==yr&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yr&&(n=Is),n===void 0&&h===Tr&&(n=Sr),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xp=new $t,pf=new Wa(1,1),yp=new Ba,vp=new Mh,_p=new Va,mf=[],gf=[],xf=new Float32Array(16),yf=new Float32Array(9),vf=new Float32Array(4);Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}},Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Pc=/(\w+)(\])?(\[|\.)?/g;_r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Gv(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};Vv=37297,Wv=0;_a=new P;Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;e_=new Map;n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;h_=0,Ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ph(e),t.set(e,n)),n}},Ph=class{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}};x_=0;Ih=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lh=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;S_={[Fc]:Bc,[zc]:Vc,[Hc]:Wc,[br]:Gc,[Bc]:Fc,[Vc]:zc,[Wc]:Hc,[Gc]:br};Dh=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},C_={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new $t,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new it({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends rs{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=new kh,p=t.getContextAttributes(),g=null,b=null,y=[],_=[],A=new Te,T=null,M=new Bt;M.layers.enable(1),M.viewport=new ht;let R=new Bt;R.layers.enable(2),R.viewport=new ht;let D=[M,R],v=new Dh;v.layers.enable(1),v.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=y[K];return ie===void 0&&(ie=new fo,y[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=y[K];return ie===void 0&&(ie=new fo,y[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=y[K];return ie===void 0&&(ie=new fo,y[K]=ie),ie.getHandSpace()};function O(K){let ie=_.indexOf(K.inputSource);if(ie===-1)return;let we=y[ie];we!==void 0&&(we.update(K.inputSource,K.frame,c||o),we.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Y);for(let K=0;K<y.length;K++){let ie=_[K];ie!==null&&(_[K]=null,y[K].disconnect(ie))}S=null,I=null,x.reset(),e.setRenderTarget(g),f=null,d=null,u=null,i=null,b=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){let ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qt(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,we=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?Tr:yr,we=p.stencil?Sr:Is);let ze={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ze),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new qt(d.textureWidth,d.textureHeight,{format:Xn,type:ki,depthTexture:new Wa(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(K){for(let ie=0;ie<K.removed.length;ie++){let we=K.removed[ie],me=_.indexOf(we);me>=0&&(_[me]=null,y[me].disconnect(we))}for(let ie=0;ie<K.added.length;ie++){let we=K.added[ie],me=_.indexOf(we);if(me===-1){for(let Le=0;Le<y.length;Le++)if(Le>=_.length){_.push(we),me=Le;break}else if(_[Le]===null){_[Le]=we,me=Le;break}if(me===-1)break}let ze=y[me];ze&&ze.connect(we)}}let z=new P,ee=new P;function W(K,ie,we){z.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(we.matrixWorld);let me=z.distanceTo(ee),ze=ie.projectionMatrix.elements,Le=we.projectionMatrix.elements,et=ze[14]/(ze[10]-1),yt=ze[14]/(ze[10]+1),tt=(ze[9]+1)/ze[5],L=(ze[9]-1)/ze[5],Rn=(ze[8]-1)/ze[0],Je=(Le[8]+1)/Le[0],ot=et*Rn,ke=et*Je,Ct=me/(-Rn+Je),Fe=Ct*-Rn;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Fe),K.translateZ(Ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ze[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let C=et+Ct,w=yt+Ct,H=ot-Fe,J=ke+(me-Fe),ne=tt*yt/w*C,Z=L*yt/w*C;K.projectionMatrix.makePerspective(H,J,ne,Z,C,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ie=K.near,we=K.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(we=x.depthFar)),v.near=R.near=M.near=ie,v.far=R.far=M.far=we,(S!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,I=v.far);let me=K.parent,ze=v.cameras;ue(v,me);for(let Le=0;Le<ze.length;Le++)ue(ze[Le],me);ze.length===2?W(v,M,R):v.projectionMatrix.copy(M.projectionMatrix),le(K,v,me)};function le(K,ie,we){we===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let pe=null;function lt(K,ie){if(h=ie.getViewerPose(c||o),m=ie,h!==null){let we=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let me=!1;we.length!==v.cameras.length&&(v.cameras.length=0,me=!0);for(let Le=0;Le<we.length;Le++){let et=we[Le],yt=null;if(f!==null)yt=f.getViewport(et);else{let L=u.getViewSubImage(d,et);yt=L.viewport,Le===0&&(e.setRenderTargetTextures(b,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(b))}let tt=D[Le];tt===void 0&&(tt=new Bt,tt.layers.enable(Le),tt.viewport=new ht,D[Le]=tt),tt.matrix.fromArray(et.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(et.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(yt.x,yt.y,yt.width,yt.height),Le===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),me===!0&&v.cameras.push(tt)}let ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")){let Le=u.getDepthInformation(we[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,i.renderState)}}for(let we=0;we<y.length;we++){let me=_[we],ze=y[we];me!==null&&ze!==void 0&&ze.update(me,ie,c||o)}pe&&pe(K,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}let mt=new gp;mt.setAnimationLoop(lt),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}},Es=new kn,L_=new Pe;Xa=class{constructor(e={}){let{canvas:t=Fg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=ss,this.toneMappingExposure=1;let y=this,_=!1,A=0,T=0,M=null,R=-1,D=null,v=new ht,S=new ht,I=null,O=new j(0),F=0,Y=t.width,z=t.height,ee=1,W=null,ue=null,le=new ht(0,0,Y,z),pe=new ht(0,0,Y,z),lt=!1,mt=new yo,K=!1,ie=!1,we=new Pe,me=new Pe,ze=new P,Le=new ht,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function tt(){return M===null?ee:1}let L=n;function Rn(E,U){return t.getContext(E,U)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){let U="webgl2";if(L=Rn(U,E),L===null)throw Rn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Je,ot,ke,Ct,Fe,C,w,H,J,ne,Z,Ee,ae,ge,at,se,xe,Ue,Ne,ye,Qe,He,Tt,k;function de(){Je=new Zy(L),Je.init(),He=new R_(L,Je),ot=new Wy(L,Je,e,He),ke=new T_(L),ot.reverseDepthBuffer&&ke.buffers.depth.setReversed(!0),Ct=new Qy(L),Fe=new d_,C=new A_(L,Je,ke,Fe,ot,He,Ct),w=new $y(y),H=new Ky(y),J=new o0(L),Tt=new Gy(L,J),ne=new jy(L,J,Ct,Tt),Z=new tv(L,ne,J,Ct),Ne=new ev(L,ot,C),se=new Xy(Fe),Ee=new u_(y,w,H,Je,ot,Tt,se),ae=new D_(y,Fe),ge=new p_,at=new __(Je),Ue=new Hy(y,w,H,ke,Z,d,l),xe=new w_(y,Z,ot),k=new k_(L,Ct,ot,ke),ye=new Vy(L,Je,Ct),Qe=new Jy(L,Je,Ct),Ct.programs=Ee.programs,y.capabilities=ot,y.extensions=Je,y.properties=Fe,y.renderLists=ge,y.shadowMap=xe,y.state=ke,y.info=Ct}de();let X=new Uh(y,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=Je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(Y,z,!1))},this.getSize=function(E){return E.set(Y,z)},this.setSize=function(E,U,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,z=U,t.width=Math.floor(E*ee),t.height=Math.floor(U*ee),G===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*ee,z*ee).floor()},this.setDrawingBufferSize=function(E,U,G){Y=E,z=U,ee=G,t.width=Math.floor(E*G),t.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,U,G,V){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,U,G,V),ke.viewport(v.copy(le).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(pe)},this.setScissor=function(E,U,G,V){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,U,G,V),ke.scissor(S.copy(pe).multiplyScalar(ee).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){ke.setScissorTest(lt=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,U=!0,G=!0){let V=0;if(E){let N=!1;if(M!==null){let re=M.texture.format;N=re===lu||re===au||re===ou}if(N){let re=M.texture.type,he=re===ki||re===Is||re===mo||re===Sr||re===iu||re===su,be=Ue.getClearColor(),Se=Ue.getClearAlpha(),Ie=be.r,De=be.g,Ae=be.b;he?(f[0]=Ie,f[1]=De,f[2]=Ae,f[3]=Se,L.clearBufferuiv(L.COLOR,0,f)):(m[0]=Ie,m[1]=De,m[2]=Ae,m[3]=Se,L.clearBufferiv(L.COLOR,0,m))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ge.dispose(),at.dispose(),Fe.dispose(),w.dispose(),H.dispose(),Z.dispose(),Tt.dispose(),k.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ed),X.removeEventListener("sessionend",Ad),_s.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let E=Ct.autoReset,U=xe.enabled,G=xe.autoUpdate,V=xe.needsUpdate,N=xe.type;de(),Ct.autoReset=E,xe.enabled=U,xe.autoUpdate=G,xe.needsUpdate=V,xe.type=N}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){let U=E.target;U.removeEventListener("dispose",nt),Gt(U)}function Gt(E){wn(E),Fe.remove(E)}function wn(E){let U=Fe.get(E).programs;U!==void 0&&(U.forEach(function(G){Ee.releaseProgram(G)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,V,N,re){U===null&&(U=et);let he=N.isMesh&&N.matrixWorld.determinant()<0,be=Nm(E,U,G,V,N);ke.setMaterial(V,he);let Se=G.index,Ie=1;if(V.wireframe===!0){if(Se=ne.getWireframeAttribute(G),Se===void 0)return;Ie=2}let De=G.drawRange,Ae=G.attributes.position,gt=De.start*Ie,Pt=(De.start+De.count)*Ie;re!==null&&(gt=Math.max(gt,re.start*Ie),Pt=Math.min(Pt,(re.start+re.count)*Ie)),Se!==null?(gt=Math.max(gt,0),Pt=Math.min(Pt,Se.count)):Ae!=null&&(gt=Math.max(gt,0),Pt=Math.min(Pt,Ae.count));let Ot=Pt-gt;if(Ot<0||Ot===1/0)return;Tt.setup(N,V,be,G,Se);let Cn,dt=ye;if(Se!==null&&(Cn=J.get(Se),dt=Qe,dt.setIndex(Cn)),N.isMesh)V.wireframe===!0?(ke.setLineWidth(V.wireframeLinewidth*tt()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(N.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),ke.setLineWidth(Re*tt()),N.isLineSegments?dt.setMode(L.LINES):N.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else N.isPoints?dt.setMode(L.POINTS):N.isSprite&&dt.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)dt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))dt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Re=N._multiDrawStarts,on=N._multiDrawCounts,ft=N._multiDrawCount,Zn=Se?J.get(Se).bytesPerElement:1,er=Fe.get(V).currentProgram.getUniforms();for(let Pn=0;Pn<ft;Pn++)er.setValue(L,"_gl_DrawID",Pn),dt.render(Re[Pn]/Zn,on[Pn])}else if(N.isInstancedMesh)dt.renderInstances(gt,Ot,N.count);else if(G.isInstancedBufferGeometry){let Re=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,on=Math.min(G.instanceCount,Re);dt.renderInstances(gt,Ot,on)}else dt.render(gt,Ot)};function ct(E,U,G){E.transparent===!0&&E.side===fn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,ea(E,U,G),E.side=gi,E.needsUpdate=!0,ea(E,U,G),E.side=fn):ea(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=at.get(G),p.init(U),b.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==G&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let re=N.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let be=re[he];ct(be,G,N),V.add(be)}else ct(re,G,N),V.add(re)}),b.pop(),p=null,V},this.compileAsync=function(E,U,G=null){let V=this.compile(E,U,G);return new Promise(N=>{function re(){if(V.forEach(function(he){Fe.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){N(E);return}setTimeout(re,10)}Je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Sn=null;function Mi(E){Sn&&Sn(E)}function Ed(){_s.stop()}function Ad(){_s.start()}let _s=new gp;_s.setAnimationLoop(Mi),typeof self!="undefined"&&_s.setContext(self),this.setAnimationLoop=function(E){Sn=E,X.setAnimationLoop(E),E===null?_s.stop():_s.start()},X.addEventListener("sessionstart",Ed),X.addEventListener("sessionend",Ad),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,U,M),p=at.get(E,b.length),p.init(U),b.push(p),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),mt.setFromProjectionMatrix(me),ie=this.localClippingEnabled,K=se.init(this.clippingPlanes,ie),x=ge.get(E,g.length),x.init(),g.push(x),X.enabled===!0&&X.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&Ql(re,U,-1/0,y.sortObjects)}Ql(E,U,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(W,ue),yt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,yt&&Ue.addToRenderList(x,E),this.info.render.frame++,K===!0&&se.beginShadows();let G=p.state.shadowsArray;xe.render(G,E,U),K===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,N=x.transmissive;if(p.setupLights(),U.isArrayCamera){let re=U.cameras;if(N.length>0)for(let he=0,be=re.length;he<be;he++){let Se=re[he];Cd(V,N,E,Se)}yt&&Ue.render(E);for(let he=0,be=re.length;he<be;he++){let Se=re[he];Rd(x,E,Se,Se.viewport)}}else N.length>0&&Cd(V,N,E,U),yt&&Ue.render(E),Rd(x,E,U);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(y,E,U),Tt.resetDefaultState(),R=-1,D=null,b.pop(),b.length>0?(p=b[b.length-1],K===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Ql(E,U,G,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||mt.intersectsSprite(E)){V&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);let he=Z.update(E),be=E.material;be.visible&&x.push(E,he,be,G,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||mt.intersectsObject(E))){let he=Z.update(E),be=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Le.copy(he.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(be)){let Se=he.groups;for(let Ie=0,De=Se.length;Ie<De;Ie++){let Ae=Se[Ie],gt=be[Ae.materialIndex];gt&&gt.visible&&x.push(E,he,gt,G,Le.z,Ae)}}else be.visible&&x.push(E,he,be,G,Le.z,null)}}let re=E.children;for(let he=0,be=re.length;he<be;he++)Ql(re[he],U,G,V)}function Rd(E,U,G,V){let N=E.opaque,re=E.transmissive,he=E.transparent;p.setupLightsView(G),K===!0&&se.setGlobalState(y.clippingPlanes,G),V&&ke.viewport(v.copy(V)),N.length>0&&Qo(N,U,G),re.length>0&&Qo(re,U,G),he.length>0&&Qo(he,U,G),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Cd(E,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new qt(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?On:ki,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let re=p.state.transmissionRenderTarget[V.id],he=V.viewport||v;re.setSize(he.z,he.w);let be=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(O),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),yt&&Ue.render(G);let Se=y.toneMapping;y.toneMapping=ss;let Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),K===!0&&se.setGlobalState(y.clippingPlanes,V),Qo(E,G,V),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Je.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ae=0,gt=U.length;Ae<gt;Ae++){let Pt=U[Ae],Ot=Pt.object,Cn=Pt.geometry,dt=Pt.material,Re=Pt.group;if(dt.side===fn&&Ot.layers.test(V.layers)){let on=dt.side;dt.side=pn,dt.needsUpdate=!0,Pd(Ot,G,V,Cn,dt,Re),dt.side=on,dt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}y.setRenderTarget(be),y.setClearColor(O,F),Ie!==void 0&&(V.viewport=Ie),y.toneMapping=Se}function Qo(E,U,G){let V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=E.length;N<re;N++){let he=E[N],be=he.object,Se=he.geometry,Ie=V===null?he.material:V,De=he.group;be.layers.test(G.layers)&&Pd(be,U,G,Se,Ie,De)}}function Pd(E,U,G,V,N,re){E.onBeforeRender(y,U,G,V,N,re),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(y,U,G,V,E,re),N.transparent===!0&&N.side===fn&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,y.renderBufferDirect(G,U,V,N,E,re),N.side=gi,N.needsUpdate=!0,y.renderBufferDirect(G,U,V,N,E,re),N.side=fn):y.renderBufferDirect(G,U,V,N,E,re),E.onAfterRender(y,U,G,V,N,re)}function ea(E,U,G){U.isScene!==!0&&(U=et);let V=Fe.get(E),N=p.state.lights,re=p.state.shadowsArray,he=N.state.version,be=Ee.getParameters(E,N.state,re,U,G),Se=Ee.getProgramCacheKey(be),Ie=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?H:w).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",nt),Ie=new Map,V.programs=Ie);let De=Ie.get(Se);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===he)return Ld(E,be),De}else be.uniforms=Ee.getUniforms(E),E.onBeforeCompile(be,y),De=Ee.acquireProgram(be,Se),Ie.set(Se,De),V.uniforms=be.uniforms;let Ae=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=se.uniform),Ld(E,be),V.needsLights=Fm(E),V.lightsStateVersion=he,V.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function Id(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=_r.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ld(E,U){let G=Fe.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Nm(E,U,G,V,N){U.isScene!==!0&&(U=et),C.resetTextureUnits();let re=U.fog,he=V.isMeshStandardMaterial?U.environment:null,be=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Wt,Se=(V.isMeshStandardMaterial?H:w).get(V.envMap||he),Ie=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!G.morphAttributes.position,gt=!!G.morphAttributes.normal,Pt=!!G.morphAttributes.color,Ot=ss;V.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let Cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=Cn!==void 0?Cn.length:0,Re=Fe.get(V),on=p.state.lights;if(K===!0&&(ie===!0||E!==D)){let Gn=E===D&&V.id===R;se.setState(V,E,Gn)}let ft=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==on.state.version||Re.outputColorSpace!==be||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==Se||V.fog===!0&&Re.fog!==re||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==De||Re.morphTargets!==Ae||Re.morphNormals!==gt||Re.morphColors!==Pt||Re.toneMapping!==Ot||Re.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Re.__version=V.version);let Zn=Re.currentProgram;ft===!0&&(Zn=ea(V,U,N));let er=!1,Pn=!1,ec=!1,Ft=Zn.getUniforms(),Zi=Re.uniforms;if(ke.useProgram(Zn.program)&&(er=!0,Pn=!0,ec=!0),V.id!==R&&(R=V.id,Pn=!0),er||D!==E){ot.reverseDepthBuffer?(we.copy(E.projectionMatrix),zg(we),Hg(we),Ft.setValue(L,"projectionMatrix",we)):Ft.setValue(L,"projectionMatrix",E.projectionMatrix),Ft.setValue(L,"viewMatrix",E.matrixWorldInverse);let Gn=Ft.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,ze.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Ft.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ft.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,Pn=!0,ec=!0)}if(N.isSkinnedMesh){Ft.setOptional(L,N,"bindMatrix"),Ft.setOptional(L,N,"bindMatrixInverse");let Gn=N.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ft.setValue(L,"boneTexture",Gn.boneTexture,C))}N.isBatchedMesh&&(Ft.setOptional(L,N,"batchingTexture"),Ft.setValue(L,"batchingTexture",N._matricesTexture,C),Ft.setOptional(L,N,"batchingIdTexture"),Ft.setValue(L,"batchingIdTexture",N._indirectTexture,C),Ft.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ft.setValue(L,"batchingColorTexture",N._colorsTexture,C));let tc=G.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0)&&Ne.update(N,G,Zn),(Pn||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,Ft.setValue(L,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Zi.envMap.value=Se,Zi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Zi.envMapIntensity.value=U.environmentIntensity),Pn&&(Ft.setValue(L,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Om(Zi,ec),re&&V.fog===!0&&ae.refreshFogUniforms(Zi,re),ae.refreshMaterialUniforms(Zi,V,ee,z,p.state.transmissionRenderTarget[E.id]),_r.upload(L,Id(Re),Zi,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(_r.upload(L,Id(Re),Zi,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ft.setValue(L,"center",N.center),Ft.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ft.setValue(L,"normalMatrix",N.normalMatrix),Ft.setValue(L,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Gn=V.uniformsGroups;for(let nc=0,Bm=Gn.length;nc<Bm;nc++){let Dd=Gn[nc];k.update(Dd,Zn),k.bind(Dd,Zn)}}return Zn}function Om(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Fm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,U,G){Fe.get(E.texture).__webglTexture=U,Fe.get(E.depthTexture).__webglTexture=G;let V=Fe.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let G=Fe.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){M=E,A=U,T=G;let V=!0,N=null,re=!1,he=!1;if(E){let Se=Fe.get(E);if(Se.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Se.__hasExternalTextures)C.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ae=E.depthTexture;if(Se.__boundDepthTexture!==Ae){if(Ae!==null&&Fe.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(he=!0);let De=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[U])?N=De[U][G]:N=De[U],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[G]:N=De,v.copy(E.viewport),S.copy(E.scissor),I=E.scissorTest}else v.copy(le).multiplyScalar(ee).floor(),S.copy(pe).multiplyScalar(ee).floor(),I=lt;if(ke.bindFramebuffer(L.FRAMEBUFFER,N)&&V&&ke.drawBuffers(E,N),ke.viewport(v),ke.scissor(S),ke.setScissorTest(I),re){let Se=Fe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,G)}else if(he){let Se=Fe.get(E.texture),Ie=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Ie)}R=-1},this.readRenderTargetPixels=function(E,U,G,V,N,re,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){ke.bindFramebuffer(L.FRAMEBUFFER,be);try{let Se=E.texture,Ie=Se.format,De=Se.type;if(!ot.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&G>=0&&G<=E.height-N&&L.readPixels(U,G,V,N,He.convert(Ie),He.convert(De),re)}finally{let Se=M!==null?Fe.get(M).__webglFramebuffer:null;ke.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,V,N,re,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){let Se=E.texture,Ie=Se.format,De=Se.type;if(!ot.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&G>=0&&G<=E.height-N){ke.bindFramebuffer(L.FRAMEBUFFER,be);let Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(U,G,V,N,He.convert(Ie),He.convert(De),0);let gt=M!==null?Fe.get(M).__webglFramebuffer:null;ke.bindFramebuffer(L.FRAMEBUFFER,gt);let Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bg(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ae),L.deleteSync(Pt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let V=Math.pow(2,-G),N=Math.floor(E.image.width*V),re=Math.floor(E.image.height*V),he=U!==null?U.x:0,be=U!==null?U.y:0;C.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,he,be,N,re),ke.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,V=null,N=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let re,he,be,Se,Ie,De;G!==null?(re=G.max.x-G.min.x,he=G.max.y-G.min.y,be=G.min.x,Se=G.min.y):(re=E.image.width,he=E.image.height,be=0,Se=0),V!==null?(Ie=V.x,De=V.y):(Ie=0,De=0);let Ae=He.convert(U.format),gt=He.convert(U.type);C.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Pt=L.getParameter(L.UNPACK_ROW_LENGTH),Ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),dt=L.getParameter(L.UNPACK_SKIP_ROWS),Re=L.getParameter(L.UNPACK_SKIP_IMAGES),on=E.isCompressedTexture?E.mipmaps[N]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,on.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Se),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ie,De,re,he,Ae,gt,on.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ie,De,on.width,on.height,Ae,on.data):L.texSubImage2D(L.TEXTURE_2D,N,Ie,De,re,he,Ae,gt,on),L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ke.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,V=null,N=0){E.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let re,he,be,Se,Ie,De,Ae,gt,Pt,Ot=E.isCompressedTexture?E.mipmaps[N]:E.image;G!==null?(re=G.max.x-G.min.x,he=G.max.y-G.min.y,be=G.max.z-G.min.z,Se=G.min.x,Ie=G.min.y,De=G.min.z):(re=Ot.width,he=Ot.height,be=Ot.depth,Se=0,Ie=0,De=0),V!==null?(Ae=V.x,gt=V.y,Pt=V.z):(Ae=0,gt=0,Pt=0);let Cn=He.convert(U.format),dt=He.convert(U.type),Re;if(U.isData3DTexture)C.setTexture3D(U,0),Re=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),Re=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let on=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zn=L.getParameter(L.UNPACK_SKIP_PIXELS),er=L.getParameter(L.UNPACK_SKIP_ROWS),Pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Se),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Re,N,Ae,gt,Pt,re,he,be,Cn,dt,Ot.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,N,Ae,gt,Pt,re,he,be,Cn,Ot.data):L.texSubImage3D(Re,N,Ae,gt,Pt,re,he,be,Cn,dt,Ot),L.pixelStorei(L.UNPACK_ROW_LENGTH,on),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zn),L.pixelStorei(L.UNPACK_SKIP_ROWS,er),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pn),N===0&&U.generateMipmaps&&L.generateMipmap(Re),ke.unbindTexture()},this.initRenderTarget=function(E){Fe.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ke.unbindTexture()},this.resetState=function(){A=0,T=0,M=null,ke.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===cu?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===dl?"display-p3":"srgb"}},$a=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new j(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new P,_o=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},If=new P,Lf=new ht,Df=new ht,U_=new P,kf=new Pe,ba=new P,Ic=new Dn,Uf=new Pe,Lc=new Ls,qa=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Od,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ba),this.boundingBox.expandByPoint(ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ba),this.boundingSphere.expandByPoint(ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(i),e.ray.intersectsSphere(Ic)!==!1&&(Uf.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(Uf),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Lf.fromBufferAttribute(i.attributes.skinIndex,e),Df.fromBufferAttribute(i.attributes.skinWeight,e),If.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Df.getComponent(s);if(o!==0){let a=Lf.getComponent(s);kf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(U_.copy(If).applyMatrix4(kf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},bo=class extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},ks=class extends $t{constructor(e=null,t=1,n=1,i,s,o,a,l,c=tn,h=tn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nf=new Pe,N_=new Pe,Ya=class r{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:N_;Nf.multiplyMatrices(a,t[s]),Nf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ks(t,e,e,Xn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new bo),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ui=class extends qe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new Pe,Of=new Pe,Ma=[],Ff=new zt,O_=new Pe,so=new Be,ro=new Dn,Zt=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,O_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Ff.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Ff)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),ro.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),e.ray.intersectsSphere(ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,mr),Of.multiplyMatrices(n,mr),so.matrixWorld=Of,so.raycast(e,Ma);for(let o=0,a=Ma.length;o<a;o++){let l=Ma[o];l.instanceId=s,l.object=this,t.push(l)}Ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ks(new Float32Array(i*this.count),i,this.count,ru,ti));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Mo=class extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ka=new P,Za=new P,Bf=new Pe,oo=new Ls,wa=new Dn,Dc=new P,zf=new P,Ir=class extends ut{constructor(e=new _t,t=new Mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ka.fromBufferAttribute(t,i-1),Za.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ka.distanceTo(Za);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=s,e.ray.intersectsSphere(wa)===!1)return;Bf.copy(i).invert(),oo.copy(e.ray).applyMatrix4(Bf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),b=h.getX(x+1),y=Sa(this,e,oo,l,g,b);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=Sa(this,e,oo,l,x,p);g&&t.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=c){let g=Sa(this,e,oo,l,x,x+1);g&&t.push(g)}if(this.isLineLoop){let x=Sa(this,e,oo,l,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};Hf=new P,Gf=new P,Lr=class extends Ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Hf.fromBufferAttribute(t,i),Gf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hf.distanceTo(Gf);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends Ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wo=class extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vf=new Pe,Nh=new Ls,Ta=new Dn,Ea=new P,as=class extends ut{constructor(e=new _t,t=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;Vf.copy(i).invert(),Nh.copy(e.ray).applyMatrix4(Vf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);Ea.fromBufferAttribute(u,p),Wf(Ea,p,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Ea.fromBufferAttribute(u,m),Wf(Ea,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};Ja=class extends $t{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dr=class r extends _t{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new P,h=new Te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Us=class r extends _t{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function b(){let _=new P,A=new P,T=0,M=(t-e)/n;for(let R=0;R<=s;R++){let D=[],v=R/s,S=v*(t-e)+e;for(let I=0;I<=i;I++){let O=I/i,F=O*l+a,Y=Math.sin(F),z=Math.cos(F);A.x=S*Y,A.y=-v*n+p,A.z=S*z,u.push(A.x,A.y,A.z),_.set(Y,M,z).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-v),D.push(m++)}x.push(D)}for(let R=0;R<i;R++)for(let D=0;D<s;D++){let v=x[D][R],S=x[D+1][R],I=x[D+1][R+1],O=x[D][R+1];e>0&&(h.push(v,S,O),T+=3),t>0&&(h.push(S,I,O),T+=3)}c.addGroup(g,T,0),g+=T}function y(_){let A=m,T=new Te,M=new P,R=0,D=_===!0?e:t,v=_===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),m++;let S=m;for(let I=0;I<=i;I++){let F=I/i*l+a,Y=Math.cos(F),z=Math.sin(F);M.x=D*z,M.y=p*v,M.z=D*Y,u.push(M.x,M.y,M.z),d.push(0,v,0),T.x=Y*.5+.5,T.y=z*.5*v+.5,f.push(T.x,T.y),m++}for(let I=0;I<i;I++){let O=A+I,F=S+I;_===!0?h.push(F,F+1,O):h.push(F+1,F,O),R+=3}c.addGroup(g,R,_===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class r extends Us{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qa=class r extends _t{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new P,_=new P,A=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],_),f(t[T+2],A),l(y,_,A,b)}function l(b,y,_,A){let T=A+1,M=[];for(let R=0;R<=T;R++){M[R]=[];let D=b.clone().lerp(_,R/T),v=y.clone().lerp(_,R/T),S=T-R;for(let I=0;I<=S;I++)I===0&&R===T?M[R][I]=D:M[R][I]=D.clone().lerp(v,I/S)}for(let R=0;R<T;R++)for(let D=0;D<2*(T-R)-1;D++){let v=Math.floor(D/2);D%2===0?(d(M[R][v+1]),d(M[R+1][v]),d(M[R][v])):(d(M[R][v+1]),d(M[R+1][v+1]),d(M[R+1][v]))}}function c(b){let y=new P;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(b),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){let b=new P;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];let _=p(b)/2/Math.PI+.5,A=g(b)/Math.PI+.5;o.push(_,1-A)}m(),u()}function u(){for(let b=0;b<o.length;b+=6){let y=o[b+0],_=o[b+2],A=o[b+4],T=Math.max(y,_,A),M=Math.min(y,_,A);T>.9&&M<.1&&(y<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function f(b,y){let _=b*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){let b=new P,y=new P,_=new P,A=new P,T=new Te,M=new Te,R=new Te;for(let D=0,v=0;D<s.length;D+=9,v+=6){b.set(s[D+0],s[D+1],s[D+2]),y.set(s[D+3],s[D+4],s[D+5]),_.set(s[D+6],s[D+7],s[D+8]),T.set(o[v+0],o[v+1]),M.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),A.copy(b).add(y).add(_).divideScalar(3);let S=p(A);x(T,v+0,b,S),x(M,v+2,y,S),x(R,v+4,_,S)}}function x(b,y,_,A){A<0&&b.x===1&&(o[y]=b.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},el=class r extends Qa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Os=class r extends Qa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Fs=class r extends _t{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new P,m=new Te;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let g=s+p/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let p=x*(n+1);for(let g=0;g<n;g++){let b=g+p,y=b,_=b+n+1,A=b+n+2,T=b+1;a.push(y,_,T),a.push(_,A,T)}}this.setIndex(a),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ni=class r extends _t{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let b=[],y=g/n,_=0;g===0&&o===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let T=A/t;u.x=-e*Math.cos(i+T*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+T*s)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(T+_,1-y),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let y=h[g][b+1],_=h[g][b],A=h[g+1][b],T=h[g+1][b+1];(g!==0||o>0)&&f.push(y,_,T),(g!==n-1||l<Math.PI)&&f.push(_,A,T)}this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},tl=class extends it{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};ls=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oh=class extends ls{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fd,endingEnd:Fd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bd:s=e,a=2*t-n;break;case zd:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bd:o=e,l=2*n-t;break;case zd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,b=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*p+(1.5+f)*x+.5*m,_=f*p-f*x;for(let A=0;A!==a;++A)s[A]=g*o[h+A]+b*o[c+A]+y*o[l+A]+_*o[u+A];return s}},Fh=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Bh=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},$n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&F_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ic,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Ar;cs=class extends $n{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Er;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;nl=class extends $n{};nl.prototype.ValueTypeName="color";Oi=class extends $n{};Oi.prototype.ValueTypeName="number";zh=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Fi=class extends $n{InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;hs=class extends $n{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Er;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;Bi=class extends $n{};Bi.prototype.ValueTypeName="vector";il=class{constructor(e="",t=-1,n=[],i=ug){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(H_(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push($n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=B_(l);l=Xf(l,1,h),c=Xf(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Oi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let p=[],g=[];bp(f,p,g,m),p.length!==0&&x.push(new u(d,p,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let p=[],g=[];for(let b=0;b!==d[m].morphTargets.length;++b){let y=d[m];p.push(y.time),g.push(y.morphTarget===x?1:0)}i.push(new Oi(".morphTargetInfluence["+x+"]",p,g))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Bi,f+".position",d,"pos",i),n(Fi,f+".quaternion",d,"rot",i),n(Bi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};is={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Hh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},G_=new Hh,ri=class{constructor(e){this.manager=e!==void 0?e:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";Ri={},Gh=class extends Error{constructor(e,t){super(e),this.response=t}},us=class extends ri{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=is.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:i});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ri[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,p=new ReadableStream({start(g){b();function b(){u.read().then(({done:y,value:_})=>{if(y)g.close();else{x+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,M=h.length;T<M;T++){let R=h[T];R.onProgress&&R.onProgress(A)}g.enqueue(_),b()}},y=>{g.error(y)})}}});return new Response(p)}else throw new Gh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{is.add(e,c);let h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Vh=class extends ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=is.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=go("img");function l(){h(),is.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},sl=class extends ri{constructor(e){super(e)}load(e,t,n,i){let s=new $t,o=new Vh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},kr=class extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new j(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ur=class extends kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kc=new Pe,$f=new P,qf=new P,So=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qf),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wh=class extends So{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Rr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},rl=class extends kr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yf=new Pe,ao=new P,Uc=new P,Xh=class extends So{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),n.position.copy(ao),Uc.copy(n.position),Uc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uc),n.updateMatrixWorld(),i.makeTranslation(-ao.x,-ao.y,-ao.z),Yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yf)}},ol=class extends kr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},$h=class extends So{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ds=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},al=class extends ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=is.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return is.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),is.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});is.add(e,l),s.manager.itemStart(e)}},ll=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Kf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};du="\\[\\]\\.:\\/",V_=new RegExp("["+du+"]","g"),fu="[^"+du+"]",W_="[^"+du.replace("\\.","")+"]",X_=/((?:WC+[\/:])*)/.source.replace("WC",fu),$_=/(WCOD+)?/.source.replace("WCOD",W_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),K_=new RegExp("^"+X_+$_+q_+Y_+"$"),Z_=["material","materials","bones","map"],qh=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(V_,"")}static parseTrackName(e){let t=K_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Z_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=qh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Zb=new Float32Array(1),Zf=new Pe,cl=class{constructor(e,t,n=0,i=1/0){this.ray=new Ls(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zf),this}intersectObject(e,t=!0,n=[]){return Yh(e,this,n,t),n.sort(jf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yh(e[i],this,n,t);return n.sort(jf),n}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169")});function mu(r){let e=new it({uniforms:{sunDir:{value:Ro},time:r.time,...ln},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position = p.xyww; }",fragmentShader:pu+`varying vec3 vD; void main(){ gl_FragColor = vec4(skyCol(normalize(vD), true), 1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,side:pn,depthWrite:!1,fog:!1}),t=new Be(new Ni(500,32,16),e);return t.frustumCulled=!1,t.renderOrder=-10,t}var Ro,Hi,ln,pu,pl=We(()=>{It();Ro=new P(-.8,.36,-.3).normalize(),Hi=(r,e,t)=>({value:new P(r,e,t)}),ln={eZen:Hi(.2,.42,.78),eMid:Hi(.55,.66,.86),eHor:Hi(1,.72,.48),eLow:Hi(1,.58,.42),eWarm:Hi(1,.66,.38),eCloudA:Hi(.82,.55,.55),eCloudB:Hi(1,.86,.7),eSunK:{value:1},eNight:{value:0},eCloud:{value:0},eFlash:{value:0},eWater:Hi(1,1,1),eSpec:Hi(1,.82,.55),MOON:{value:new P(.55,.5,-.67).normalize()}},pu=`
uniform vec3 sunDir; uniform float time;
uniform vec3 eZen, eMid, eHor, eLow, eWarm, eCloudA, eCloudB, eWater, eSpec, MOON; uniform float eSunK, eNight, eCloud, eFlash;
float sh21(vec2 p){ vec3 q = fract(vec3(p.xyx) * .1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float svn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(sh21(i), sh21(i + vec2(1., 0.)), f.x), mix(sh21(i + vec2(0., 1.)), sh21(i + 1.), f.x), f.y); }
float sfbm(vec2 p){ float s = 0., a = .5; for (int i = 0; i < 4; i++) { s += a * svn(p); p = p * 2.03 + 7.1; a *= .5; } return s; }
vec3 skyCol(vec3 d, bool clouds){
  float y = max(d.y, -.05);
  float sd = max(dot(d, sunDir), 0.);
  vec3 zen = eZen, mid = eMid, hor = eHor, low = eLow;
  vec3 c = mix(hor, mid, smoothstep(.0, .22, y)); c = mix(c, zen, smoothstep(.2, .75, y)); c = mix(low, c, smoothstep(-.05, .06, y));
  // warm the half of the sky near the sun
  c = mix(c, eWarm, pow(sd, 3.) * .55 * (1. - smoothstep(0., .5, y)) * eSunK);
  c += (vec3(1., .62, .3) * pow(sd, 18.) * .7 + vec3(1., .85, .6) * pow(sd, 300.) * 1.5) * eSunK;
  c += vec3(1., .97, .85) * smoothstep(.9985, .9992, sd) * 6. * eSunK * (1. - eCloud * .8);
  if (eNight > .01) { float md = max(dot(d, MOON), 0.);
    c += (vec3(.85, .9, 1.) * smoothstep(.9988, .9993, md) * 2.2 + vec3(.3, .4, .7) * pow(md, 60.) * .35) * eNight * (1. - eCloud * .7);
    vec2 sp = d.xz / (y + .3) * 60.; float st = sh21(floor(sp)); float tw = .6 + .4 * sin(time * 3. + st * 40.);
    c += vec3(.9, .95, 1.) * step(.985, st) * smoothstep(.05, .3, y) * eNight * tw * (1. - eCloud) * .9; }
  if (clouds) {
    vec2 uv = d.xz / (y + .12) * 1.1 + vec2(time * .006, time * .002);
    float n = sfbm(uv * 1.3); float m = smoothstep(.52 - eCloud * .45, .78 - eCloud * .3, n) * smoothstep(.0, .08, y) * (1. - smoothstep(.45 + eCloud * .5, .8 + eCloud * .5, y));
    float lit = clamp(sfbm(uv * 1.3 + sunDir.xz * .08) - n + .55, 0., 1.);
    vec3 cc = mix(eCloudA, eCloudB, lit) + vec3(1., .6, .3) * pow(sd, 6.) * .6 * eSunK;
    c = mix(c, cc, m * (.85 + eCloud * .1));
  }
  return c + vec3(.75, .8, 1.) * eFlash;
}`});var nn,ml,_n,Ht,Gi=We(()=>{nn=new URLSearchParams(location.search),ml="piratecovewars_save_v1",_n={data:null,defaults(){return{v:1,music:.6,sfx:.9,name:"",world:null,tut:0,q:{},qd:{day:"",list:[]},ach:{},streak:{n:0,last:"",claimed:""},gems:50,seen:{},st:{atk:0,stars:0,loot:0,def:0,revenge:0,built:0,up:0,collect:0,op:0,broad:0},best:0,seasonSeen:1,evClaim:{}}},store(){return Ht.ready&&Ht.sdk.data?Ht.sdk.data:window.localStorage},load(){let r=null;try{r=JSON.parse(this.store().getItem(ml))}catch{r=null}if(!r)try{r=JSON.parse(window.localStorage.getItem(ml))}catch{r=null}let e=this.defaults();return this.data=Object.assign(e,r||{}),["q","qd","ach","streak","seen","st","evClaim"].forEach(t=>{this.data[t]=Object.assign(e[t],r&&r[t]||{})}),nn.get("fresh")==="1"&&(this.data=this.defaults()),this.data},save(){let r=JSON.stringify(this.data);try{this.store().setItem(ml,r)}catch{}try{this.store()!==window.localStorage&&window.localStorage.setItem(ml,r)}catch{}}},Ht={sdk:null,ready:!1,env:"none",playing:!1,adActive:!1,muted:!1,adBusy:!1,onPause:null,onResume:null,onMute:null,async init(){try{let r=window.CrazyGames&&window.CrazyGames.SDK;if(!r||(await Promise.race([r.init(),new Promise((e,t)=>setTimeout(()=>t(new Error("sdk timeout")),4e3))]),this.env=r.environment,this.env==="disabled"))return;this.sdk=r,this.ready=!0;try{this.muted=!!(r.game.settings&&r.game.settings.muteAudio),r.game.addSettingsChangeListener(e=>{this.muted=!!e.muteAudio,this.onMute&&this.onMute()})}catch{}}catch{this.sdk=null,this.ready=!1}},call(r){if(this.ready)try{r(this.sdk)}catch{}},loadingStart(){this.call(r=>r.game.loadingStart())},loadingStop(){this.call(r=>r.game.loadingStop())},gameplayStart(){this.playing||this.adActive||(this.playing=!0,this.call(r=>r.game.gameplayStart()))},gameplayStop(){this.playing&&(this.playing=!1,this.call(r=>r.game.gameplayStop()))},happytime(){this.call(r=>r.game.happytime())},ad(r,e){if(this.adBusy)return;let t=!1,n=!1;this.adBusy=!0;let i=()=>{this.adActive&&(this.adActive=!1,this.onResume&&this.onResume(),n&&this.gameplayStart())},s=o=>{i(),!t&&(t=!0,this.adBusy=!1,e(o))};if(!this.ready)return s(r==="rewarded");try{this.sdk.ad.requestAd(r,{adStarted:()=>{this.adActive||(n=this.playing,this.gameplayStop(),this.adActive=!0,this.onPause&&this.onPause())},adFinished:()=>s(!0),adError:()=>s(!1)})}catch{s(!1)}}}});var zs,gl,Mp=We(()=>{It();pl();Gi();zs={time:{value:0},boost:{value:0}},gl=class{constructor(){let e=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<900;this.mobile=e,this.q=nn.has("q")?+nn.get("q"):e?1:2;let t=this.R=new Xa({antialias:this.q<1,powerPreference:"high-performance",stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,this.q>=2?2:1.5)),t.toneMapping=To,t.toneMappingExposure=1,t.outputColorSpace=At,t.shadowMap.enabled=!0,t.shadowMap.type=Kh,document.getElementById("game").appendChild(t.domElement);let n=this.scene=new Ds;n.fog=new $a(15910816,110,330),this.cam=new Bt(38,1,.5,1200),this.sky=mu(zs),n.add(this.sky);let i=new Ds;i.add(mu(zs));let s=new Pr(t);n.environment=s.fromScene(i,0,.1,1e3).texture,n.environmentIntensity=.55;let o=this.sun=new zi(16766632,2.9);o.position.copy(Ro).multiplyScalar(90),o.castShadow=!0;let a=this.q>=2?2048:1024;o.shadow.mapSize.set(a,a);let l=o.shadow.camera;l.left=-62,l.right=62,l.top=46,l.bottom=-46,l.near=20,l.far=220,o.shadow.bias=-6e-4,o.shadow.normalBias=.04,o.shadow.radius=3,o.target.position.set(6,0,-6),n.add(o,o.target),n.add(this.hemi=new Ur(11061503,14196848,1.05));let c=this.fill=new zi(10467583,.45);c.position.set(60,40,50),n.add(c),this.target=new P(5,0,-4),this.goal=this.target.clone(),this.dist=62,this.goalDist=62,this.yaw=0,this.pitch=.86,this.vel=new Te,this.bounds={x0:-26,x1:46,z0:-32,z1:16},this.minD=22,this.maxD=92,this.ray=new cl,this.onTap=null,this.drift=0,this.input(),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let e=window.innerWidth,t=window.innerHeight;this.R.setSize(e,t),this.cam.aspect=e/t,this.cam.fov=e<t?52:38,this.cam.updateProjectionMatrix(),this.portrait=e<t,this.fitD=this.portrait?92:64,this.maxD=this.portrait?118:92,this.post&&this.post.resize(e,t)}input(){let e=this.R.domElement,t=new Map,n=null,i=0,s=0,o=0,a=!1;e.style.touchAction="none";let l=(h,u)=>{if(this.lock)return;let d=this.dist*.0016*(this.portrait?1.25:1);this.goal.x-=h*d,this.goal.z-=u*d*1.25,this.clamp()};e.addEventListener("pointerdown",h=>{if(e.setPointerCapture&&e.setPointerCapture(h.pointerId),t.set(h.pointerId,{x:h.clientX,y:h.clientY}),t.size===1&&(n={x:h.clientX,y:h.clientY,t:performance.now()},s=0,this.vel.set(0,0),a=!!(this.onDown&&this.onDown(this.rayAt(h.clientX,h.clientY),h.clientX,h.clientY))),t.size===2&&a&&(a=!1,this.onUp&&this.onUp(null)),t.size===2){let[u,d]=[...t.values()];i=Math.hypot(u.x-d.x,u.y-d.y),s=99}this.idle=0}),e.addEventListener("pointermove",h=>{if(!t.has(h.pointerId)){h.pointerType==="mouse"&&this.onHover&&this.onHover(this.rayAt(h.clientX,h.clientY),h.clientX,h.clientY);return}if(a&&t.size===1){let m=t.get(h.pointerId);s+=Math.abs(h.clientX-m.x)+Math.abs(h.clientY-m.y),m.x=h.clientX,m.y=h.clientY,this.onDrag&&this.onDrag(this.rayAt(h.clientX,h.clientY),h.clientX,h.clientY);return}let u=t.get(h.pointerId),d=h.clientX-u.x,f=h.clientY-u.y;if(u.x=h.clientX,u.y=h.clientY,t.size===1){if(s+=Math.abs(d)+Math.abs(f),s>8){l(d,f);let m=performance.now(),x=Math.max(8,m-o);o=m,this.vel.set(d/x*16,f/x*16)}}else if(t.size===2){let[m,x]=[...t.values()],p=Math.hypot(m.x-x.x,m.y-x.y);i>0&&(this.goalDist=Bs.clamp(this.goalDist*i/p,this.minD,this.maxD)),i=p}this.idle=0});let c=h=>{if(t.has(h.pointerId)){if(t.delete(h.pointerId),t.size===0&&a){a=!1;let u=s<10&&performance.now()-n.t<450;n=null,this.onUp&&this.onUp(this.rayAt(h.clientX,h.clientY),u,h.clientX,h.clientY);return}if(t.size===0&&n){let u=performance.now()-n.t;s<10&&u<450?this.tap(h.clientX,h.clientY):performance.now()-o>80&&this.vel.set(0,0),n=null}t.size<2&&(i=0)}};e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),e.addEventListener("wheel",h=>{h.preventDefault(),!this.lock&&(this.goalDist=Bs.clamp(this.goalDist*(1+Math.sign(h.deltaY)*.12),this.minD,this.maxD))},{passive:!1}),this.panBy=l}clamp(){let e=this.bounds;this.goal.x=Bs.clamp(this.goal.x,e.x0,e.x1),this.goal.z=Bs.clamp(this.goal.z,e.z0,e.z1)}rayAt(e,t){let n=new Te(e/window.innerWidth*2-1,-t/window.innerHeight*2+1);return this.ray.setFromCamera(n,this.cam),this.ray}tap(e,t){this.onTap&&this.onTap(this.rayAt(e,t),e,t)}ground(e,t=1.2){let n=e.ray.origin,i=e.ray.direction;if(Math.abs(i.y)<1e-4)return null;let s=(t-n.y)/i.y;return s>0?new P(n.x+i.x*s,t,n.z+i.z*s):null}toScreen(e,t={}){let n=this._sv||(this._sv=new P);return n.copy(e).project(this.cam),t.x=(n.x+1)/2*window.innerWidth,t.y=(1-n.y)/2*window.innerHeight,t.vis=n.z<1,t}focus(e,t){this.goal.set(e.x,0,e.z+(this.portrait?2:3)),this.lock||this.clamp(),t&&(this.goalDist=t),this.vel.set(0,0)}update(e){this.vel.lengthSq()>.01&&(this.panBy(this.vel.x,this.vel.y),this.vel.multiplyScalar(Math.pow(.004,e)));let t=1-Math.pow(5e-4,e);this.target.lerp(this.goal,t),this.dist+=(this.goalDist-this.dist)*t;let n=zs.time.value,i=Math.sin(n*.13)*.025,s=this.yaw+i,o=this.pitch-(this.dist-40)*.0018,a=this.cam;if(a.position.set(this.target.x+Math.sin(s)*Math.cos(o)*this.dist,this.target.y+Math.sin(o)*this.dist,this.target.z+Math.cos(s)*Math.cos(o)*this.dist),this.shakeT>0){this.shakeT-=e;let l=this.shakeA*Math.max(0,this.shakeT)*4;a.position.x+=(Math.random()-.5)*l,a.position.y+=(Math.random()-.5)*l}a.lookAt(this.target)}shake(e=.5,t=.3){this.shakeA=e,this.shakeT=t}render(){this.post&&this.post.enabled?this.post.render():this.R.render(this.scene,this.cam)}}});function wp(r,e,t){let n=t>=2?220:150,i=new si(520,520,n,n);i.rotateX(-Math.PI/2);let s=i.attributes.position;for(let l=0;l<s.count;l++){let c=s.getX(l),h=s.getZ(l),u=Math.hypot(c,h)/260;if(u<1e-4)continue;let d=Math.pow(u,1.8)/u;s.setX(l,c*d),s.setZ(l,h*d)}i.computeBoundingSphere();let o=new it({uniforms:{time:r.time,sunDir:{value:Ro},hmap:{value:e},fogC:{value:new j},fogN:{value:90},fogF:{value:300},boost:r.boost||{value:0},...ln},vertexShader:`
      uniform float time; uniform sampler2D hmap; varying vec3 vW; varying float vDepth; varying vec3 vN; varying float vCrest;
      float th(vec2 w){ vec2 uv = vec2((w.x - (${Fn.X0.toFixed(1)})) / ${Fn.SZ.toFixed(1)}, (-w.y - (${Fn.Y0.toFixed(1)})) / ${Fn.SZ.toFixed(1)});
        if (uv.x < 0. || uv.y < 0. || uv.x > 1. || uv.y > 1.) return -8.; return texture2D(hmap, uv).r * 16. - 6.; }
      vec3 gerst(vec2 p, vec2 dir, float A, float L, float sp, inout vec3 tb, inout vec3 bt){
        float k = 6.2832 / L, f = k * (dot(dir, p) - sp * time); float Q = .55;
        tb += vec3(-dir.x * dir.x * Q * A * k * sin(f), dir.x * A * k * cos(f), -dir.x * dir.y * Q * A * k * sin(f));
        bt += vec3(-dir.x * dir.y * Q * A * k * sin(f), dir.y * A * k * cos(f), -dir.y * dir.y * Q * A * k * sin(f));
        return vec3(dir.x * Q * A * cos(f), A * sin(f), dir.y * Q * A * cos(f)); }
      void main(){
        vec3 w = (modelMatrix * vec4(position, 1.)).xyz; float hz = th(w.xz); float depth = -hz;
        float damp = smoothstep(-.2, 3.5, depth) * .85 + .15;
        vec3 tb = vec3(1., 0., 0.), bt = vec3(0., 0., 1.), o = vec3(0.);
        o += gerst(w.xz, normalize(vec2(.8, .6)), .20 * damp, 19., 2.1, tb, bt);
        o += gerst(w.xz, normalize(vec2(-.4, .9)), .12 * damp, 11., 1.6, tb, bt);
        o += gerst(w.xz, normalize(vec2(.3, -.95)), .07 * damp, 6.5, 1.2, tb, bt);
        o += gerst(w.xz, normalize(vec2(-.9, -.2)), .04 * damp, 3.7, .9, tb, bt);
        w += o; vCrest = o.y; vN = normalize(cross(bt, tb)); vW = w; vDepth = depth;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.); }`,fragmentShader:pu+`
      uniform sampler2D hmap; uniform vec3 fogC; uniform float fogN, fogF; varying vec3 vW; varying float vDepth; varying vec3 vN; varying float vCrest;
      float th(vec2 w){ vec2 uv = vec2((w.x - (${Fn.X0.toFixed(1)})) / ${Fn.SZ.toFixed(1)}, (-w.y - (${Fn.Y0.toFixed(1)})) / ${Fn.SZ.toFixed(1)});
        if (uv.x < 0. || uv.y < 0. || uv.x > 1. || uv.y > 1.) return -8.; return texture2D(hmap, uv).r * 16. - 6.; }
      vec2 grad(vec2 p){ float e = .15; float a = svn(p); return vec2(svn(p + vec2(e, 0.)) - a, svn(p + vec2(0., e)) - a) / e; }
      void main(){
        float depth = -th(vW.xz); vec3 V = normalize(cameraPosition - vW); float dist = length(cameraPosition - vW);
        vec2 r1 = grad(vW.xz * .55 + vec2(time * .25, time * .1)), r2 = grad(vW.xz * 1.4 - vec2(time * .18, -time * .3));
        float rip = mix(1., .25, smoothstep(40., 160., dist));
        vec3 N = normalize(vN + vec3(r1.x + r2.x * .5, 0., r1.y + r2.y * .5) * .13 * rip);
        vec3 shallow = vec3(.30, .86, .78) * eWater, mid = vec3(.05, .55, .66) * eWater, deep = vec3(.02, .26, .44) * eWater, abyss = vec3(.015, .16, .30) * eWater;
        vec3 c = mix(vec3(.62, .9, .78), shallow, smoothstep(.0, .6, depth)); c = mix(c, mid, smoothstep(.5, 2.6, depth)); c = mix(c, deep, smoothstep(2.4, 6., depth)); c = mix(c, abyss, smoothstep(6., 12., depth + dist * .02));
        // caustics in the shallows
        vec2 cp = vW.xz * .9; float ca = abs(sin(cp.x * 2.1 + sin(cp.y * 1.7 + time * 1.1) * 1.6 + time * .6)) * abs(sin(cp.y * 2.3 + sin(cp.x * 1.3 - time * .9) * 1.8 - time * .5));
        c += vec3(.55, .95, .85) * pow(1. - ca, 10.) * .32 * (1. - eNight * .8) * (1. - smoothstep(.2, 2.6, depth));
        float ndl = max(dot(N, sunDir), 0.);
        c *= .78 + .3 * ndl;
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        float fres = .03 + .97 * pow(1. - max(dot(N, V), 0.), 5.);
        c = mix(c, skyCol(R, false), clamp(fres, 0., .75));
        float sp = max(dot(R, sunDir), 0.);
        c += eSpec * (pow(sp, 260.) * 4. + pow(sp, 40.) * .35);
        // glitter
        float gl = svn(vW.xz * 6. + time * 2.) * svn(vW.xz * 3.7 - time * 1.3); c += eSpec * smoothstep(.62, .8, gl) * pow(sp, 6.) * 2.5;
        // foam: solid shore line + travelling bands + crests
        float n = sfbm(vW.xz * .6 + time * .05);
        float shore = 1. - smoothstep(.05, .32 + n * .25, depth);
        float bands = smoothstep(.72, .95, sin(depth * 4.2 - time * 1.6 + n * 5.)) * (1. - smoothstep(.2, 1.6 + n * .6, depth)) * step(.02, depth);
        float crest = smoothstep(.2, .34, vCrest + (n - .5) * .3) * smoothstep(.45, .7, svn(vW.xz * vec2(.7, 2.2) + time * .3)) * .5;
        float foam = clamp(shore + bands * .8 + crest, 0., 1.) * smoothstep(-.6, .0, depth + .5);
        c = mix(c, vec3(1., .98, .93) * (.85 + .2 * ndl) * mix(1., .28, eNight), foam * .92);
        // fog to horizon
        float fz = smoothstep(fogN, fogF, dist); c = mix(c, fogC, fz);
        gl_FragColor = vec4(c, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),a=new Be(i,o);return a.frustumCulled=!1,a.renderOrder=-5,a.receiveShadow=!1,a}var Fn,gu=We(()=>{It();pl();Fn={X0:-80,Y0:-80,SZ:160}});function Tp(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new _t,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Sp(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let m=Sp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Sp(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new qe(o,t,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function xu(r,e){if(e===hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Eo||e===ul){let t=r.getIndex();if(t===null){let o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Eo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var yu=We(()=>{It()});function j_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function eb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),r.DefaultMaterial}function Hs(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tb(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function nb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ib(r){let e,t=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=r.indices+":"+bu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+bu(r.targets[n]);return e}function bu(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function $u(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}function ob(r,e,t){let n=e.attributes,i=new zt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){let h=$u(Or[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new P,l=new P;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=$u(Or[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Cp(r,e,t){let n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in n){let a=Xu[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){let o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Vi(r,e),ob(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tb(r,e.targets,t):r})}var xl,je,Mu,wu,Su,Tu,Eu,Au,Ru,Cu,Pu,Iu,Lu,Du,ku,Uu,Nu,Ou,Fu,Bu,Pp,Co,Ep,zu,Hu,Gu,Vu,yl,J_,Wu,qn,Or,Ap,Rp,vu,Xu,ps,Q_,_u,rb,qu,Ip=We(()=>{It();yu();xl=class extends ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Bu(t)})}load(e,t,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ds.extractUrlBase(e);o=ds.resolveURL(c,this.path)}else o=ds.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new us(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pp){try{o[je.KHR_BINARY_GLTF]=new zu(e)}catch(u){i&&i(u);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new wu;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Hu(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new Gu;break;case je.KHR_MESH_QUANTIZATION:o[u]=new Vu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Mu=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new j(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ol(h),c.distance=u;break;case"spot":c=new rl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Vi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},wu=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new j(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(i)}},Su=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}},Eu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new j(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Cu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Pu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new j().setRGB(a[0],a[1],a[2],Wt),Promise.all(s)}},Iu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Lu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new j().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}},ku=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}},Uu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Nu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ou=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fu=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Bu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new Pe,p=new P,g=new mn,b=new P(1,1,1),y=new Zt(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,_),l.SCALE&&b.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(p,g,b));for(let _ in l)if(_==="_COLOR_0"){let A=l[_];y.instanceColor=new Ui(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);ut.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Pp="glTF",Co=12,Ep={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Co,s=new DataView(e,Co),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Ep.JSON){let c=new Uint8Array(e,Co+o,a);this.content=n.decode(c)}else if(l===Ep.BIN){let c=Co+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Xu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Or[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],p=l[m];p!==void 0&&(x.normalized=p)}u(f)},a,c,Wt,d)})})}},Gu=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},yl=class extends ls{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,p=-2*f+3*d,g=f-d,b=1-p,y=g-d+u;for(let _=0;_!==a;_++){let A=o[x+_+a],T=o[x+_+l]*h,M=o[m+_+a],R=o[m+_]*h;s[_]=b*A+y*T+p*M+g*R}return s}},J_=new mn,Wu=class extends yl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return J_.fromArray(s).normalize().toArray(s),s}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ap={9728:tn,9729:an,9984:tu,9985:co,9986:gr,9987:fi},Rp={33071:di,33648:po,10497:Di},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Q_={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Er},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};rb=new Pe,qu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new j_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||s&&o<98?this.textureLoader=new sl(this.options.manager):this.textureLoader=new al(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Hs(s,a,i),Vi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(ds.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=vu[i.type],a=Or[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new qe(c,o,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=vu[i.type],c=Or[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,p;if(f&&f!==u){let g=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,y=t.cache.get(b);y||(x=new c(a,g*f,i.count*f/h),y=new vo(x,f/h),t.cache.add(b,y)),p=new _o(y,l,d%f/h,m)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),p=new qe(x,l,m);if(i.sparse!==void 0){let g=vu.SCALAR,b=Or[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,A=new b(o[1],y,i.sparse.count*g),T=new c(o[2],_,i.sparse.count*l);a!==null&&(p=new qe(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let M=0,R=A.length;M<R;M++){let D=A[M];if(p.setX(D,T[M*l]),l>=2&&p.setY(D,T[M*l+1]),l>=3&&p.setZ(D,T[M*l+2]),l>=4&&p.setW(D,T[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Ap[d.magFilter]||an,h.minFilter=Ap[d.minFilter]||fi,h.wrapS=Rp[d.wrapS]||Di,h.wrapT=Rp[d.wrapT]||Di,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let p=new $t(x);p.needsUpdate=!0,d(p)}),t.load(ds.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Vi(u,o),u.userData.mimeType=o.mimeType||sb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new wo,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Mo,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return kt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){let u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new j(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=fn);let h=s.alphaMode||_u.OPAQUE;if(h===_u.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_u.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==St){let u=s.emissiveFactor;a.emissive=new j().setRGB(u[0],u[1],u[2],Wt)}return s.emissiveTexture!==void 0&&o!==St&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(c).then(function(){let u=new o(a);return s.name&&(u.name=s.name),Vi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Hs(i,u,s),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Cp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=ib(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Cp(new _t,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?eb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],p=o[f],g,b=c[f];if(p.mode===qn.TRIANGLES||p.mode===qn.TRIANGLE_STRIP||p.mode===qn.TRIANGLE_FAN||p.mode===void 0)g=s.isSkinnedMesh===!0?new qa(x,b):new Be(x,b),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===qn.TRIANGLE_STRIP?g.geometry=xu(g.geometry,ul):p.mode===qn.TRIANGLE_FAN&&(g.geometry=xu(g.geometry,Eo));else if(p.mode===qn.LINES)g=new Lr(x,b);else if(p.mode===qn.LINE_STRIP)g=new Ir(x,b);else if(p.mode===qn.LINE_LOOP)g=new ja(x,b);else if(p.mode===qn.POINTS)g=new as(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&nb(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Vi(g,s),p.extensions&&Hs(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Hs(i,u[0],s),u[0];let d=new vt;s.extensions&&Hs(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Bs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new os(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Pe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ya(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],x=f.target,p=x.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",b)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],p=u[4],g=[];for(let b=0,y=d.length;b<y;b++){let _=d[b],A=f[b],T=m[b],M=x[b],R=p[b];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let D=n._createAnimationTracks(_,A,T,M,R);if(D)for(let v=0;v<D.length;v++)g.push(D[v])}return new il(s,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,rb)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new bo:c.length>1?h=new vt:c.length===1?h=c[0]:h=new ut,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Vi(h,s),s.extensions&&Hs(n,h,s),s.matrix!==void 0){let u=new Pe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new vt;n.name&&(s.name=i.createUniqueName(n.name)),Vi(s,n),n.extensions&&Hs(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Un||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let o=[],a=e.name?e.name:e.uuid,l=[];ps[s.path]===ps.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ps[s.path]){case ps.weights:c=Oi;break;case ps.rotation:c=Fi;break;case ps.position:case ps.scale:c=Bi;break;default:n.itemSize===1?c=Oi:c=Bi;break}let h=i.interpolation!==void 0?Q_[i.interpolation]:Ar,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+ps[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=$u(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Fi?Wu:yl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function ab(){let r,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(l),c),m=f.attributes.map(x=>x.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,d,f,m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(m===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let x={index:null,attributes:[]};for(let p in h){let g=self[u[p]],b,y;if(c.useUniqueIDs)y=h[p],b=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[p]]),y===-1)continue;b=a.GetAttribute(d,y)}let _=i(o,a,d,p,g,b);p==="color"&&(_.vertexColorSpace=c.vertexColorSpace),x.attributes.push(_)}return m===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,l){let h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){let d=u.num_components(),m=l.num_points()*d,x=m*h.BYTES_PER_ELEMENT,p=s(o,h),g=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,p,x,g);let b=new h(o.HEAPF32.buffer,g,m).slice();return o._free(g),{name:c,array:b,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Yu,vl,Lp=We(()=>{It();Yu=new WeakMap,vl=class extends ri{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let s=new us(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,At,n).catch(n)}decodeDracoFile(e,t,n,i,s=Wt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Yu.has(e)){let l=Yu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Yu.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new _t;e.index&&t.setIndex(new qe(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new qe(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==At)return;let n=new j;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Ze.toWorkingColorSpace(n,At),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new us(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let s=ab.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){let o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}});function kp(r){let e=(n,i,s)=>{n.onBeforeCompile=o=>{o.uniforms.time=r.time,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform float time;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 wp0 = modelMatrix * vec4(transformed, 1.); float s = uv.x; float ph = wp0.x * .35 + wp0.z * .27;
          ${s==="flag"?"float fl = sin(time * 7. + uv.x * 9. + ph * 3.) * .14 * s + sin(time * 11.3 + uv.x * 14.) * .05 * s; transformed += objectNormal * fl;":`vec3 d = vec3(sin(time * 1.3 + ph) + .45 * sin(time * 3.1 + ph * 2.3), 0., cos(time * 1.1 + ph * 1.3) * .6) * ${i.toFixed(3)} * s * s; transformed += d;`} }`)},n.customProgramCacheKey=()=>"sway_"+s},t=jt.mats;t.Body=new kt({vertexColors:!0,roughness:.86,metalness:0,envMapIntensity:.6}),t.Glow=new St({vertexColors:!0,color:new j(1.6,1.4,1.2)}),t.Leaf=new kt({vertexColors:!0,roughness:.75,metalness:0,side:fn,envMapIntensity:.5}),e(t.Leaf,.22,"leaf"),t.Flag=new kt({vertexColors:!0,roughness:.9,side:fn}),e(t.Flag,0,"flag"),t.Gold=new kt({vertexColors:!0,roughness:.28,metalness:1,envMapIntensity:1.4}),t.Glass=new kt({vertexColors:!0,roughness:.15,metalness:.2,envMapIntensity:1.5});for(let n in t)t[n].name=n;return t}function Zu(r,{cast:e=!0,receive:t=!0,still:n=!0}={}){return r.traverse(i=>{if(!i.isMesh)return;let s=i.material&&i.material.name;if(s&&s.startsWith("Tex_")){let o=jt.tex[s];if(!o){let a=i.material.map;a&&(a.anisotropy=4,a.colorSpace=At),o=jt.tex[s]=new kt({name:s,map:a,vertexColors:!0,roughness:.82,metalness:0,envMapIntensity:.6})}i.material=o}else i.material=jt.mats[s]||jt.mats.Body;i.castShadow=e&&s!=="Glow",i.receiveShadow=t,n&&(i.matrixAutoUpdate=!1,i.updateMatrix())}),r}function Gs(r,e){if(jt.hf)return jt.hf(r,e);let t=jt.height;if(!t)return 0;let n=t.N,i=(r-Fn.X0)/Fn.SZ*n-.5,s=(-e-Fn.Y0)/Fn.SZ*n-.5,o=Math.floor(i),a=Math.floor(s),l=i-o,c=s-a,h=(u,d)=>t.H[Math.max(0,Math.min(n-1,d))*n+Math.max(0,Math.min(n-1,u))];return(h(o,a)*(1-l)+h(o+1,a)*l)*(1-c)+(h(o,a+1)*(1-l)+h(o+1,a+1)*l)*c}var Ku,Dp,Fr,jt,Br=We(()=>{It();Ip();Lp();gu();Ku=new vl;Ku.setDecoderPath("lib/draco/");Ku.preload();Dp=new xl;Dp.setDRACOLoader(Ku);Fr=r=>new Promise((e,t)=>Dp.load(r,e,void 0,t)),jt={mats:{},tex:{},height:null}});var _l,ju=We(()=>{_l={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Bn,lb,Ju,cb,ms,zr=We(()=>{It();Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lb=new os(-1,1,1,-1,0,1),Ju=class extends _t{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},cb=new Ju,ms=class{constructor(e){this._mesh=new Be(cb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Hr,Qu=We(()=>{It();zr();Hr=class extends Bn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fs.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ms(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Po,bl,ed=We(()=>{zr();Po=class extends Bn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},bl=class extends Bn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Ml,Up=We(()=>{It();ju();Qu();ed();ed();Ml=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hr(_l),this.copyPass.material.blending=pi,this.clock=new ll}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Po!==void 0&&(o instanceof Po?n=!0:o instanceof bl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var wl,Np=We(()=>{It();zr();wl=class extends Bn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new j}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}});var Op,Fp=We(()=>{It();Op={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var Gr,Bp=We(()=>{It();zr();ju();Fp();Gr=class r extends Bn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new j(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(s,o,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new qt(s,o,{type:On});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new qt(s,o,{type:On});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Op;this.highPassUniforms=fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Te(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=_l;this.copyUniforms=fs.clone(h.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Li,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new j,this.oldClearAlpha=1,this.basic=new St,this.fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Gr.BlurDirectionX=new Te(1,0);Gr.BlurDirectionY=new Te(0,1)});var zp,Hp=We(()=>{zp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var Sl,Gp=We(()=>{It();zr();Hp();Sl=class extends Bn{constructor(){super();let e=zp;this.uniforms=fs.clone(e.uniforms),this.material=new tl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===To?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var hb,Tl,Vp=We(()=>{It();Up();Np();Bp();Gp();Qu();hb={uniforms:{tDiffuse:{value:null},warm:{value:new j(1.04,1,.94)},cool:{value:new j(.9,.96,1.08)},sat:{value:1.12},con:{value:1.08},vig:{value:.28},lift:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec3 warm, cool; uniform float sat, con, vig, lift; varying vec2 vUv;
  void main(){ vec4 t = texture2D(tDiffuse, vUv); vec3 c = t.rgb; float l = dot(c, vec3(.299, .587, .114));
    c *= mix(cool, warm, smoothstep(.15, .85, l));
    c = mix(vec3(l), c, sat); c = (c - .5) * con + .5 + lift;
    vec2 d = vUv - .5; c *= 1. - vig * smoothstep(.35, .85, length(d * vec2(1.15, 1.)));
    gl_FragColor = vec4(clamp(c, 0., 1.), t.a); }`},Tl=class{constructor(e){this.W=e;let t=e.R,n=t.getDrawingBufferSize(new Te),i=new qt(n.x,n.y,{type:On,samples:e.q>=1?4:0});this.c=new Ml(t,i),this.c.addPass(new wl(e.scene,e.cam)),this.bloom=new Gr(new Te(n.x/2,n.y/2),.32,.55,.92),this.c.addPass(this.bloom),this.c.addPass(new Sl),this.grade=new Hr(hb),this.c.addPass(this.grade),this.setQuality(e.q)}setQuality(e){this.bloom.enabled=e>=2,this.enabled=e>=1}setMap(e){var i,s,o,a,l;let t=e.grade||{},n=this.grade.uniforms;n.warm.value.setRGB(...t.warm||[1.04,1,.94]),n.cool.value.setRGB(...t.cool||[.9,.96,1.08]),n.sat.value=(i=t.sat)!=null?i:1.05,n.con.value=(s=t.con)!=null?s:1.08,n.vig.value=(o=t.vig)!=null?o:.26,this.bloom.strength=(a=t.bloom)!=null?a:.3,this.bloom.threshold=(l=t.thr)!=null?l:.92}resize(e,t){this.c.setPixelRatio(this.W.R.getPixelRatio()),this.c.setSize(e,t)}render(){this.c.render()}}});function ub(r){return new it({transparent:!0,depthWrite:!1,blending:r?Li:mi,uniforms:{scale:{value:400}},vertexShader:`attribute float size; attribute vec4 col; attribute float shape; varying vec4 vC; varying float vS; uniform float scale;
      void main(){ vC = col; vS = shape; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec4 vC; varying float vS; void main(){ vec2 p = gl_PointCoord * 2. - 1.; float r = length(p);
      float a = vS < .5 ? smoothstep(1., .2, r) : vS < 1.5 ? smoothstep(1., .55, r) * (.6 + .4 * smoothstep(.0, .9, r)) : (1. - smoothstep(.15, .35, min(abs(p.x), abs(p.y)) + r * .3)) ;
      if (vS > 2.5) a = step(abs(p.x), .55) * step(abs(p.y), .9);
      if (a * vC.a < .01) discard; gl_FragColor = vec4(vC.rgb, a * vC.a); }`})}var Ut,El,Al,Wp=We(()=>{It();Br();Ut=P;El=class{constructor(e,t,n){this.N=t,this.list=[];let i=this.g=new _t;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.shape=new Float32Array(t),i.setAttribute("position",new qe(this.pos,3).setUsage(Ao)),i.setAttribute("col",new qe(this.col,4).setUsage(Ao)),i.setAttribute("size",new qe(this.size,1).setUsage(Ao)),i.setAttribute("shape",new qe(this.shape,1).setUsage(Ao)),this.mesh=new as(i,ub(n)),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,e.add(this.mesh)}add(e){this.list.length>=this.N&&this.list.shift(),e.t=0,this.list.push(e)}update(e){let t=this.list,n=0;for(let i=t.length-1;i>=0;i--){let s=t[i];if(s.t+=e,s.t>=s.life){t.splice(i,1);continue}}for(let i of t){i.v.y-=(i.g||0)*e,i.flut&&(i.p.x+=Math.sin(i.t*3.1+i.ph)*e*1.2,i.p.z+=Math.cos(i.t*2.7+i.ph)*e*1.2),i.drag&&i.v.multiplyScalar(Math.pow(i.drag,e)),i.p.addScaledVector(i.v,e),i.floor!==void 0&&i.p.y<i.floor&&(i.p.y=i.floor,i.v.y*=-.3,i.v.x*=.6,i.v.z*=.6);let s=i.t/i.life,o=i.c;this.pos.set([i.p.x,i.p.y,i.p.z],n*3);let a=(i.fadeIn?Math.min(1,s*6):1)*(1-Math.pow(s,i.fadePow||2))*(i.a||1),l=i.c2?[o.r+(i.c2.r-o.r)*s,o.g+(i.c2.g-o.g)*s,o.b+(i.c2.b-o.b)*s]:[o.r,o.g,o.b];this.col.set([l[0],l[1],l[2],a],n*4),this.size[n]=(i.s0+(i.s1-i.s0)*s)*(i.flut?.35+.65*Math.abs(Math.sin(i.t*i.flut+i.ph)):1),this.shape[n]=i.shape||0,n++}this.g.setDrawRange(0,n);for(let i of["position","col","size","shape"])this.g.attributes[i].needsUpdate=!0}},Al=class{constructor(e,t){this.V=e;let n=e.scene;this.add=new El(n,700,!0),this.norm=new El(n,700,!1);let i=null,s=null;t.scene.traverse(l=>{l.isMesh&&l.name.startsWith("coin")&&(i=l.geometry,s=l.material)}),this.coinMax=160,this.coins=[],this.cmesh=new Zt(i,s,this.coinMax),this.cmesh.frustumCulled=!1,this.cmesh.castShadow=!1,this.cmesh.count=0,n.add(this.cmesh),this.dummy=new ut;let o=new Fs(.92,1,64,1);o.rotateX(-Math.PI/2),this.ring=new Be(o,new it({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float time; varying vec2 vU; void main(){ float a = atan(vU.y, vU.x); float d = step(.5, fract(a * 6.3662 + time * .6)); gl_FragColor = vec4(1., .86, .35, .55 + .35 * d); }"})),this.ring.visible=!1,this.ring.renderOrder=4,n.add(this.ring),this.shocks=[],this.confB=0;let a=new Fs(.7,1,48,1);a.rotateX(-Math.PI/2),this.shockG=a}select(e,t){if(!e){this.ring.visible=!1;return}this.ring.visible=!0,this.ring.position.set(e.x,e.h+.12,e.z),this.ring.scale.setScalar(t+.8)}coinBurst(e,t=8,n=6){for(let i=0;i<t;i++){this.coins.length>=this.coinMax&&this.coins.shift();let s=Math.random()*6.283,o=1.2+Math.random()*2.2;this.coins.push({p:e.clone().add(new Ut(0,.5,0)),v:new Ut(Math.cos(s)*o,n+Math.random()*3,Math.sin(s)*o),r:Math.random()*6,rv:8+Math.random()*8,t:0,life:1.1+Math.random()*.4,floor:Gs(e.x,e.z)+.1})}}sparkle(e,t=12,n=16766810,i=1.4,s=.5){let o=new j(n);for(let a=0;a<t;a++)this.add.add({p:e.clone().add(new Ut((Math.random()-.5)*i,Math.random()*i,(Math.random()-.5)*i)),v:new Ut((Math.random()-.5)*2,1.5+Math.random()*2,(Math.random()-.5)*2),g:1,drag:.3,life:.6+Math.random()*.6,c:o,s0:s,s1:s*.2,shape:2})}puff(e,t=14,n=15918800,i=1.6,s=1.2,o=2.2,a=1){let l=new j(n);for(let c=0;c<t;c++){let h=Math.random()*6.283,u=Math.random()*o;this.norm.add({p:e.clone().add(new Ut(Math.cos(h)*u,Math.random()*.6,Math.sin(h)*u)),v:new Ut(Math.cos(h)*1.6,s+Math.random(),Math.sin(h)*1.6),drag:.25,life:(.7+Math.random()*.5)*a,c:l,s0:i*.6,s1:i*1.6,a:.7,fadeIn:!0,fadePow:1.4,shape:1})}}splash(e,t=1){let n=new j(16777215);for(let i=0;i<26*t;i++){let s=Math.random()*6.283,o=Math.random()*2.5*t;this.norm.add({p:e.clone(),v:new Ut(Math.cos(s)*o,5+Math.random()*6*t,Math.sin(s)*o),g:18,life:.8+Math.random()*.4,c:n,s0:.5*t,s1:.25,a:.9,shape:0,floor:e.y-.3})}this.shock(e,3*t,16777215,.8)}explode(e,t=1){let n=new j(16752688),i=new j(16723984);for(let s=0;s<30*t;s++){let o=Math.random()*6.283,a=Math.random()*1.2,l=2+Math.random()*6*t;this.add.add({p:e.clone(),v:new Ut(Math.cos(o)*l*Math.cos(a),Math.sin(a)*l+1,Math.sin(o)*l*Math.cos(a)),drag:.05,g:2,life:.35+Math.random()*.4,c:n,c2:i,s0:1.6*t,s1:.4,shape:0})}this.puff(e,16*t,3814446,2.2*t,2.4,1.2),this.sparkle(e,10,16760896,2,.6),this.shock(e,5*t,16756816,.6)}confetti(e,t=60){if(t=Math.min(t,Math.max(0,Math.floor(140-this.confB))),this.confB+=t,!t)return;let n=[16765498,16734794,5230847,8314970,16747232,16777215].map(i=>new j(i));for(let i=0;i<t;i++){let s=Math.random()*6.283,o=1.5+Math.random()*4;this.norm.add({p:e.clone(),v:new Ut(Math.cos(s)*o,7+Math.random()*6,Math.sin(s)*o),g:7,drag:.12,life:1.2+Math.random()*.8,c:n[i%n.length],s0:.42,s1:.32,shape:3,fadePow:3,flut:6+Math.random()*8,ph:Math.random()*6})}}muzzle(e,t){let n=Math.random,i=new j(16774344),s=new j(16742936),o=new j(15131096),a=new j(10130570);this.add.add({p:e.clone(),v:t.clone().multiplyScalar(1.5),life:.2,c:i,c2:s,s0:11,s1:4,shape:0});for(let l=0;l<16;l++)this.add.add({p:e.clone(),v:t.clone().multiplyScalar(7+n()*12).add(new Ut((n()-.5)*4,(n()-.3)*3,(n()-.5)*4)),drag:.02,life:.16+n()*.18,c:i,c2:s,s0:2.4,s1:.4,shape:0});for(let l=0;l<18;l++)this.norm.add({p:e.clone().addScaledVector(t,n()*1.8),v:t.clone().multiplyScalar(1.5+n()*4.5).add(new Ut((n()-.5)*1.4,.6+n()*1.2,(n()-.5)*1.4)),drag:.12,life:1.5+n()*1.1,c:o,c2:a,s0:1.1,s1:4,a:.8,fadeIn:!0,fadePow:1.4,shape:1});this.sparkle(e,6,16760928,.8,.5)}ballTrail(e){let t=Math.random;this.add.add({p:e.clone(),v:new Ut(0,0,0),life:.22,c:new j(16760912),c2:new j(16726536),s0:1.1,s1:.15,shape:0}),t()<.7&&this.norm.add({p:e.clone(),v:new Ut((t()-.5)*.4,.5,(t()-.5)*.4),life:.9,c:new j(12104360),s0:.5,s1:1.6,a:.55,fadePow:1.3,shape:1})}splinters(e,t=18){let n=Math.random,i=[6963234,9067056,13146714,3810324].map(s=>new j(s));for(let s=0;s<t;s++){let o=n()*6.283,a=3+n()*7;this.norm.add({p:e.clone(),v:new Ut(Math.cos(o)*a,5+n()*8,Math.sin(o)*a),g:20,drag:.5,life:.9+n()*.6,c:i[s%4],s0:.5,s1:.4,shape:3,flut:14+n()*10,ph:n()*6,fadePow:5})}}waterColumn(e,t=1){let n=Math.random,i=new j(16777215),s=new j(12577525);for(let o=0;o<22*t;o++)this.norm.add({p:e.clone().add(new Ut((n()-.5)*.8,0,(n()-.5)*.8)),v:new Ut((n()-.5)*1.6,8+n()*9*t,(n()-.5)*1.6),g:20,drag:.7,life:.9+n()*.5,c:i,c2:s,s0:.9*t,s1:.5,a:.95,shape:0,floor:e.y-.4});this.splash(e,t),this.puff(e.clone().add(new Ut(0,.3,0)),7,16055295,1.1*t,.4,1.4*t)}flame(e,t=1){let n=Math.random;this.add.add({p:e.clone().add(new Ut((n()-.5)*.8*t,0,(n()-.5)*.8*t)),v:new Ut((n()-.5)*.6,1.8+n()*1.8,(n()-.5)*.6),life:.45+n()*.3,c:new j(16765024),c2:new j(16722432),s0:2*t,s1:.3,shape:0}),n()<.25&&this.norm.add({p:e.clone().add(new Ut(0,1,0)),v:new Ut((n()-.5)*.8,2+n()*1.5,(n()-.5)*.8),drag:.4,life:1.6+n(),c:new j(3814448),c2:new j(6972512),s0:1*t,s1:3.4*t,a:.65,fadeIn:!0,fadePow:1.3,shape:1})}hit(e,t=1){this.explode(e,t),this.splinters(e,Math.round(18*t)),this.add.add({p:e.clone(),v:new Ut(0,0,0),life:.18,c:new j(16777215),c2:new j(16752704),s0:9*t,s1:3,shape:0})}clear(){this.add.list.length=0,this.norm.list.length=0,this.coins.length=0,this.confB=0,this.shocks.forEach(e=>{this.V.scene.remove(e.m),e.m.material.dispose()}),this.shocks.length=0}shock(e,t,n,i=.6){let s=new Be(this.shockG,new St({color:n,transparent:!0,depthWrite:!1,opacity:.8}));s.position.copy(e),s.position.y+=.15,s.renderOrder=4,this.V.scene.add(s),this.shocks.push({m:s,r:t,t:0,life:i})}trail(e,t=2761760,n=.7){this.norm.add({p:e.clone(),v:new Ut(0,.4,0),life:.5,c:new j(t),s0:n,s1:n*1.8,a:.6,shape:1})}wake(e){this.norm.add({p:e.clone(),v:new Ut((Math.random()-.5)*.6,.05,(Math.random()-.5)*.6),life:1.8,c:new j(16055295),s0:.7,s1:1.8,a:.55,shape:1,fadeIn:!0})}update(e,t){this.add.update(e),this.norm.update(e),this.confB=Math.max(0,this.confB-e*90),this.ring.material.uniforms.time.value=t,this.ring.visible&&(this.ring.position.y+=Math.sin(t*3)*.002);let n=this.dummy,i=0;for(let s=this.coins.length-1;s>=0;s--){let o=this.coins[s];o.t+=e,o.t>o.life&&this.coins.splice(s,1)}for(let s of this.coins){s.v.y-=22*e,s.p.addScaledVector(s.v,e),s.p.y<s.floor&&(s.p.y=s.floor,s.v.y=Math.abs(s.v.y)*.35,s.v.x*=.5,s.v.z*=.5),s.r+=s.rv*e;let o=s.t/s.life,a=o>.75?(1-o)/.25:Math.min(1,s.t*8);n.position.copy(s.p),n.rotation.set(Math.PI/2,0,s.r),n.scale.setScalar(Math.max(.01,a)*.55),n.updateMatrix(),this.cmesh.setMatrixAt(i++,n.matrix)}this.cmesh.count=i,this.cmesh.instanceMatrix.needsUpdate=!0;for(let s=this.shocks.length-1;s>=0;s--){let o=this.shocks[s];o.t+=e;let a=o.t/o.life;o.m.scale.setScalar(.3+o.r*(1-Math.pow(1-a,3))),o.m.material.opacity=.8*(1-a),a>=1&&(this.V.scene.remove(o.m),o.m.material.dispose(),this.shocks.splice(s,1))}}}});var db,fb,Jt,Xp,pb,$,gs=We(()=>{Gi();db=["coin0","coin1","click0","click1","deny0","unlock0","confirm0","open0","close0","pop0","creak0","door0","latch0","page0","cloth0","chop0","wood0","wood1","metal0","plate0","drop0","glass0","stone0"],fb={click:["click0",.5],select:["click1",.45],deny:["deny0",.5],unlock:["unlock0",.5],confirm:["confirm0",.5],open:["open0",.45],close:["close0",.4],pop:["pop0",.4],creak:["creak0",.45],door:["door0",.5],latch:["latch0",.5],page:["page0",.5],cloth:["cloth0",.5],chop:["chop0",.45],wood:["wood",.55],metal:["metal0",.45],drop:["drop0",.4],glass:["glass0",.4],stone:["stone0",.5]},Jt=r=>440*Math.pow(2,(r-69)/12),Xp=[[7,null,7,7,5,3],[2,null,-2,2,3,5],[7,null,7,7,9,10],[12,null,10,9,null,7],[7,5,3,5,null,7],[10,9,7,5,null,2],[3,null,5,7,null,3],[2,null,-1,0,null,null]],pb=[[0,3,7],[-2,2,5],[0,3,7],[-2,2,5],[0,3,7],[-2,2,5],[-7,-3,0],[-5,-1,2]],$={ctx:null,sdkPaused:!1,step:0,nextT:0,track:"main",buf:{},last:{},init(){if(this.ctx){this.ctx.state==="suspended"&&!this.sdkPaused&&!document.hidden&&this.ctx.resume();return}let r=window.AudioContext||window.webkitAudioContext;if(!r)return;let e;try{e=this.ctx=new r}catch{return}this.master=e.createGain(),this.master.connect(e.destination),this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-12,this.comp.ratio.value=4,this.comp.connect(this.master),this.music=e.createGain(),this.sfxG=e.createGain(),this.amb=e.createGain(),this.music.connect(this.comp),this.sfxG.connect(this.comp),this.amb.connect(this.comp),this.rev=e.createConvolver(),this.rev.buffer=this.impulse(2.4);let t=e.createGain();t.gain.value=.22,this.rev.connect(t),t.connect(this.comp);let n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let s=0;s<n;s++)i[s]=Math.random()*2-1;db.forEach(s=>fetch("assets/sfx/"+s+".mp3").then(o=>o.ok?o.arrayBuffer():Promise.reject()).then(o=>new Promise((a,l)=>e.decodeAudioData(o,a,l))).then(o=>{this.buf[s]=o}).catch(()=>{})),this.surf(),this.apply(),this.nextT=e.currentTime+.1,this.timer=setInterval(()=>this.schedule(),40),(this.sdkPaused||document.hidden)&&e.suspend()},surf(){let r=this.ctx,e=r.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;let t=r.createBiquadFilter();t.type="lowpass",t.frequency.value=500,t.Q.value=.3;let n=r.createGain();n.gain.value=.05;let i=r.createOscillator(),s=r.createGain();i.frequency.value=.11,s.gain.value=.035,i.connect(s),s.connect(n.gain);let o=r.createOscillator(),a=r.createGain();o.frequency.value=.07,a.gain.value=260,o.connect(a),a.connect(t.frequency),e.connect(t),t.connect(n),n.connect(this.amb),e.start(),i.start(),o.start()},apply(){if(!this.ctx)return;let r=_n.data,e=this.ctx.currentTime;this.master.gain.setTargetAtTime(Ht.muted||this.sdkPaused?0:1,e,.03),this.music.gain.setTargetAtTime(r.music*.32,e,.08),this.sfxG.gain.setTargetAtTime(r.sfx*.9,e,.05),this.amb.gain.setTargetAtTime(Math.max(r.sfx,r.music)*.9,e,.1)},pause(r){if(this.sdkPaused=r,!!this.ctx)try{r?(this.master.gain.value=0,this.ctx.suspend()):(this.ctx.resume(),this.apply())}catch{}},impulse(r){let e=this.ctx,t=e.sampleRate*r,n=e.createBuffer(2,t,e.sampleRate);for(let i=0;i<2;i++){let s=n.getChannelData(i);for(let o=0;o<t;o++)s[o]=(Math.random()*2-1)*Math.pow(1-o/t,3)}return n},env(r,e,t,n,i){r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(Math.max(n,2e-4),e+t),r.gain.exponentialRampToValueAtTime(1e-4,e+t+i)},osc(r,e,t,n,i,s,o=.1,a=.004){let l=this.ctx,c=l.createOscillator(),h=l.createGain();if(c.type=r,c.frequency.setValueAtTime(e,t),this.env(h,t,a,i,n),c.connect(h),h.connect(s),o){let u=l.createGain();u.gain.value=o,h.connect(u),u.connect(this.rev)}return c.start(t),c.stop(t+a+n+.05),c},noise(r,e,t,n,i,s,o,a=.03,l=.003){let c=this.ctx,h=c.createBufferSource();h.buffer=this.noiseBuf,h.loop=!0;let u=c.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(i,r),u.Q.value=s;let d=c.createGain();if(this.env(d,r,l,t,e),h.connect(u),u.connect(d),d.connect(o),a){let f=c.createGain();f.gain.value=a,d.connect(f),f.connect(this.rev)}return h.start(r,Math.random()),h.stop(r+l+e+.05),u},bell(r,e,t,n,i,s=.35){this.osc("sine",r,e,t,n,i,s,.002),this.osc("sine",r*2.76,e,t*.35,n*.3,i,s,.002)},pluck(r,e,t,n,i){let s=this.ctx,o=s.createOscillator(),a=s.createBiquadFilter(),l=s.createGain();o.type="sawtooth",o.frequency.value=r,a.type="lowpass",a.frequency.setValueAtTime(r*5,e),a.frequency.exponentialRampToValueAtTime(r*1.1,e+t*.7),this.env(l,e,.003,n,t),o.connect(a),a.connect(l),l.connect(i),o.start(e),o.stop(e+t+.05)},reed(r,e,t,n,i){let s=this.ctx,o=s.createGain(),a=s.createBiquadFilter();a.type="lowpass",a.frequency.value=Math.min(4200,r*6),a.Q.value=.8,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.03),o.gain.setTargetAtTime(n*.7,e+.05,.1),o.gain.setTargetAtTime(1e-4,e+t,.05),[-6,7].forEach(u=>{let d=s.createOscillator();d.type="sawtooth",d.frequency.value=r,d.detune.value=u,d.connect(a),d.start(e),d.stop(e+t+.4)});let l=s.createOscillator();l.type="square",l.frequency.value=r*.5;let c=s.createGain();c.gain.value=.25,l.connect(c),c.connect(a),l.start(e),l.stop(e+t+.4),a.connect(o),o.connect(i);let h=s.createGain();h.gain.value=.18,o.connect(h),h.connect(this.rev)},setTrack(r){this.track!==r&&(this.track=r,this.step=0)},schedule(){if(!this.ctx||this.sdkPaused||this.ctx.state!=="running"){this.ctx&&(this.nextT=Math.max(this.nextT,this.ctx.currentTime+.05));return}let r=this.track==="battle"?.2:.27;for(;this.nextT<this.ctx.currentTime+.15;)this.track!=="off"&&this.playStep(this.step,this.nextT,r),this.step++,this.nextT+=r},playStep(r,e,t){let n=this.music,i=r%6,s=Math.floor(r/6)%8,o=this.track==="battle",a=o?57:62,l=pb[s].map(u=>u+a),c=i%3===1?t*.08:0;e+=c,i!==0?this.noise(e,.05,i===3?.05:.025,"highpass",7e3,1.5,n,.05):this.noise(e,.12,.06,"bandpass",5200,2,n,.1),o&&(i===0||i===3)&&this.osc("sine",120,e,.25,.55,n,0,.002).frequency.exponentialRampToValueAtTime(42,e+.2),o&&i===3&&this.noise(e,.14,.18,"bandpass",1600,1,n,.2),i===0&&this.pluck(Jt(l[0]-24),e,.5,.22,n),i===3&&this.pluck(Jt(l[0]-17),e,.4,.16,n),(i===1||i===2||i===4||i===5)&&l.forEach((u,d)=>this.pluck(Jt(u-12),e+d*.012,.22,i%3===1?.045:.03,n));let h=Xp[s][i];if(h!==null){let u=1;for(;i+u<6&&Xp[s][i+u]===null;)u++;this.reed(Jt(a+h),e,t*u*.92,o?.07:.055,n),Math.floor(r/48)%2===1&&this.bell(Jt(a+h+12),e,.4,.03,n)}},sample(r,e,t){let n=Object.keys(this.buf).filter(a=>a===r||a.replace(/\d+$/,"")===r);if(!n.length)return!1;let i=this.ctx,s=i.createBufferSource(),o=i.createGain();return s.buffer=this.buf[n[Math.floor(Math.random()*n.length)]],s.playbackRate.value=(t||1)*(.92+Math.random()*.16),o.gain.value=e,s.connect(o),o.connect(this.sfxG),s.start(),!0},play(r,e=1){if(!this.ctx||this.sdkPaused||this.ctx.state!=="running")return;let t=this.ctx.currentTime;if(this.last[r]&&t-this.last[r]<.045)return;this.last[r]=t;let n=t+.005,i=this.sfxG,s=fb[r];switch(s&&this.sample(s[0],s[1]*Math.min(1.5,e)),r){case"coin":this.sample("coin",.35*e,1+Math.random()*.2),this.bell(Jt(91+Math.floor(Math.random()*3)*2),n,.25,.035*e,i,.2);break;case"coins":this.sample("coin",.5,.9),[0,4,7,12].forEach((o,a)=>this.bell(Jt(84+o),n+a*.05,.3,.04,i,.3));break;case"tap":this.noise(n,.05,.12,"bandpass",2400,2,i,0),this.osc("sine",660,n,.07,.05,i,0);break;case"buy":this.sample("wood",.35,1.3),[0,7,12].forEach((o,a)=>this.bell(Jt(79+o),n+a*.04,.25,.05,i,.2));break;case"build":this.sample("wood",.6,.9),this.sample("chop",.4),this.noise(n,.3,.25,"lowpass",900,.7,i,.1),[0,4,7,12,16].forEach((o,a)=>this.bell(Jt(72+o),n+.1+a*.06,.5,.06,i));break;case"tier":this.noise(n,.5,.25,"lowpass",1200,.7,i,.3),[0,4,7,12,16,19,24].forEach((o,a)=>this.bell(Jt(72+o),n+a*.055,.7,.07,i));break;case"milestone":[0,4,7,12].forEach((o,a)=>this.bell(Jt(79+o),n+a*.07,.6,.07,i));break;case"boom":{this.noise(n,.9,.8,"lowpass",1800,.6,i,.35).frequency.exponentialRampToValueAtTime(90,n+.8),this.osc("sine",85,n,.6,.6,i,.1).frequency.exponentialRampToValueAtTime(28,n+.5);break}case"splash":{this.noise(n,.6,.35*e,"bandpass",1200,.7,i,.2).frequency.exponentialRampToValueAtTime(400,n+.5),this.noise(n+.05,.4,.15*e,"highpass",4e3,.5,i,.1);break}case"crash":this.sample("wood",.8,.7),this.sample("plate",.3,.8),this.noise(n,.7,.5,"lowpass",1400,.6,i,.3);break;case"whoosh":{this.noise(n,.3,.15,"bandpass",600,1.4,i,.05).frequency.exponentialRampToValueAtTime(2400,n+.25);break}case"pearl":[0,5,9,12,17].forEach((o,a)=>this.bell(Jt(86+o),n+a*.04,.5,.045,i,.5));break;case"reveal":this.noise(n,1,.2,"highpass",3e3,.5,i,.5),[0,4,7,11,14,19].forEach((o,a)=>this.bell(Jt(74+o+e*2),n+a*.06,.8,.06,i,.5));break;case"win":[0,4,7,12,7,12,16,19].forEach((o,a)=>this.bell(Jt(72+o),n+a*.09,.7,.09,i));break;case"lose":[7,3,0,-5].forEach((o,a)=>this.reed(Jt(62+o),n+a*.2,.22,.05,i));break;case"gull":{let o=this.osc("sawtooth",1500,n,.35,.03,i,.3,.03);o.frequency.setValueAtTime(1700,n),o.frequency.exponentialRampToValueAtTime(1100,n+.3);break}case"bell":this.bell(Jt(81),n,1.2,.08,i,.6),this.bell(Jt(88),n+.25,1.2,.06,i,.6);break;case"tick":this.osc("square",1200,n,.03,.03,i,0);break;case"cannon":{this.noise(n,.55,.55*e,"lowpass",2400,.6,i,.25).frequency.exponentialRampToValueAtTime(140,n+.45),this.osc("sine",110,n,.35,.45*e,i,.05).frequency.exponentialRampToValueAtTime(36,n+.3);break}case"musket":this.noise(n,.09,.3*e,"highpass",1800,.8,i,.15),this.noise(n+.01,.25,.08*e,"bandpass",900,1,i,.2);break;case"mortar":{this.osc("sine",70,n,.4,.5*e,i,.1).frequency.exponentialRampToValueAtTime(30,n+.35),this.noise(n,.3,.25*e,"lowpass",700,.7,i,.2);break}case"whistle":{this.osc("sine",1800,n,1.1,.03*e,i,.1,.2).frequency.exponentialRampToValueAtTime(500,n+1.1);break}case"sword":this.sample("metal",.22*e,1.3+Math.random()*.4);break;case"hitb":this.sample("wood",.25*e,1.1+Math.random()*.3);break;case"die":this.sample("drop",.3*e,.7),this.noise(n,.15,.08*e,"lowpass",500,.7,i,.05);break;case"deploy":this.sample("cloth",.3*e,1.2),this.osc("triangle",520,n,.06,.04*e,i,0);break;case"collapse":this.sample("wood",.7,.6),this.sample("stone",.5,.8),this.noise(n,1.1,.45,"lowpass",1200,.5,i,.35).frequency.exponentialRampToValueAtTime(120,n+1);break;case"trap":this.sample("latch",.5);break;case"star":[0,7,12,19].forEach((o,a)=>this.bell(Jt(84+o),n+a*.05,.9,.08,i,.5));break;case"horn":[0,0,5].forEach((o,a)=>this.reed(Jt(50+o),n+a*.22,.2+a*.2,.08,i));break}}};document.addEventListener("visibilitychange",()=>{if($.ctx)try{document.hidden?($.master.gain.value=0,$.ctx.suspend()):$.sdkPaused||($.ctx.resume(),$.apply())}catch{}});["touchend","pointerup","keydown"].forEach(r=>document.addEventListener(r,()=>{if($.ctx&&$.ctx.state!=="running"&&!$.sdkPaused&&!document.hidden)try{$.ctx.resume()}catch{}},!0))});function gb(r){for(let e=0;e<td.length-1;e++){let[t,n]=td[e],[i,s]=td[e+1];if(r>=t&&r<=i){let o=i>t?(r-t)/(i-t):0;return[Rl[n],Rl[s],o*o*(3-2*o)]}}return[Rl.golden,Rl.golden,0]}function Cl(r,e,t,n=!0){let i=new _t,s=new Float32Array(r*3),o=new Float32Array(r),a=new Float32Array(r*3);for(let h=0;h<r;h++)e(h,s,o,a);i.setAttribute("position",new qe(s,3)),i.setAttribute("sz",new qe(o,1)),i.setAttribute("seed",new qe(a,3));let l=xb(n);l.vertexShader=l.vertexShader.replace("MOVE",t||"");let c=new as(i,l);return c.frustumCulled=!1,c.renderOrder=5,c}function Vr(r,e){r=r.index?r.toNonIndexed():r,r.computeVertexNormals();let t=r.attributes.position,n=r.attributes.normal,i=new Float32Array(t.count*3),s=new j;for(let o=0;o<t.count;o+=3){let a=(t.getY(o)+t.getY(o+1)+t.getY(o+2))/3,l=n.getY(o);e(s,a,l,o),s.convertSRGBToLinear();for(let c=0;c<3;c++)i.set([s.r,s.g,s.b],(o+c)*3)}return r.setAttribute("color",new qe(i,3)),r}function Pl(r,e,t=1){let n=r.attributes.position,i=t,s=()=>(i=i*16807%2147483647)/2147483647-.5,o=new Map;for(let a=0;a<n.count;a++){let l=n.getX(a).toFixed(2)+","+n.getY(a).toFixed(2)+","+n.getZ(a).toFixed(2);o.has(l)||o.set(l,[s()*e,s()*e*.6,s()*e]);let c=o.get(l);n.setXYZ(a,n.getX(a)+c[0],n.getY(a)+c[1],n.getZ(a)+c[2])}return r}var gn,xs,Ce,Rl,td,mb,$p,nd,Vs,xb,Il,qp=We(()=>{It();pl();Br();Gi();gs();gn=r=>new j(r),xs=P,Ce=(r,e,t)=>new xs(r,e,t),Rl={morning:{zen:Ce(.25,.42,.74),mid:Ce(.62,.64,.82),hor:Ce(1,.78,.68),low:Ce(.95,.7,.6),warm:Ce(1,.74,.58),cA:Ce(.86,.66,.72),cB:Ce(1,.9,.86),sunK:.8,night:0,fog:gn(15322562),sunC:gn(16769740),sunI:2.5,hS:gn(12110079),hG:gn(13674640),hI:1.05,fI:.45,water:Ce(.96,.99,1.03),spec:Ce(1,.88,.76),glow:1,env:.55},day:{zen:Ce(.14,.4,.86),mid:Ce(.42,.64,.92),hor:Ce(.8,.88,.94),low:Ce(.72,.84,.9),warm:Ce(1,.93,.82),cA:Ce(.8,.84,.92),cB:Ce(1,1,1),sunK:.5,night:0,fog:gn(13623530),sunC:gn(16773858),sunI:3,hS:gn(12901631),hG:gn(13152400),hI:1.15,fI:.5,water:Ce(1.04,1.08,1.1),spec:Ce(1,.97,.9),glow:1,env:.6},golden:{zen:Ce(.2,.42,.78),mid:Ce(.55,.66,.86),hor:Ce(1,.72,.48),low:Ce(1,.58,.42),warm:Ce(1,.66,.38),cA:Ce(.82,.55,.55),cB:Ce(1,.86,.7),sunK:1,night:0,fog:gn(15910816),sunC:gn(16766632),sunI:2.9,hS:gn(11061503),hG:gn(14196848),hI:1.05,fI:.45,water:Ce(1,1,1),spec:Ce(1,.82,.55),glow:1,env:.55},night:{zen:Ce(.012,.02,.07),mid:Ce(.025,.045,.12),hor:Ce(.07,.1,.2),low:Ce(.05,.07,.14),warm:Ce(.1,.12,.22),cA:Ce(.05,.06,.1),cB:Ce(.16,.18,.28),sunK:0,night:1,fog:gn(1844288),sunC:gn(10466559),sunI:.7,hS:gn(5271736),hG:gn(3813440),hI:.5,fI:.22,water:Ce(.26,.32,.46),spec:Ce(.6,.7,.95),glow:2.6,env:.16}},td=[[0,"morning"],[.1,"day"],[.38,"day"],[.48,"golden"],[.6,"golden"],[.68,"night"],[.92,"night"],[1,"morning"]],mb=480,$p=.52,nd={cove:{sky:Ce(1,1,1),fog:Ce(1,1,1),water:Ce(1,1,1),sun:Ce(1,1,1),grass:[0,0,0,0],sand:[0,0,0,0],rock:[0,0,0,0],leaf:16777215,grade:{}},jungle:{sky:Ce(.9,1.05,.95),fog:Ce(.86,1.03,.88),water:Ce(.7,1.06,.8),sun:Ce(.97,1.02,.92),grass:[.035,.26,.03,.75],sand:[.62,.5,.27,.45],rock:[.16,.2,.1,.55],leaf:12124080,grade:{sat:1.18,warm:[1.02,1.03,.92]}},volcano:{sky:Ce(1.18,.76,.62),fog:Ce(1,.66,.55),water:Ce(.62,.5,.52),sun:Ce(1,.78,.6),grass:[.065,.05,.045,.88],sand:[.17,.13,.11,.82],rock:[.1,.075,.065,.75],leaf:8413264,grade:{warm:[1.1,.96,.86],con:1.1,vig:.3}},frost:{sky:Ce(.86,.98,1.18),fog:Ce(.88,1,1.2),water:Ce(.7,.92,1.12),sun:Ce(.94,.98,1.08),grass:[.78,.84,.92,.92],sand:[.66,.7,.76,.7],rock:[.3,.34,.42,.6],leaf:10475728,grade:{sat:.95,warm:[.97,1,1.06],cool:[.9,.97,1.1]}}},Vs=(r,e,t)=>r+(e-r)*t;xb=(r=!0,e="")=>new it({uniforms:{time:{value:0},op:{value:1},scale:{value:600},col:{value:new j(1,.8,.45)}},transparent:!0,depthWrite:!1,blending:r?Li:mi,vertexShader:`uniform float time, scale; attribute float sz; attribute vec3 seed; varying float vA; ${e}
    void main(){ vec3 p = position; float a = 1.; MOVE vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = sz * scale / -mv.z; vA = a; }`,fragmentShader:"uniform vec3 col; uniform float op; varying float vA; void main(){ vec2 q = gl_PointCoord - .5; float d = length(q) * 2.; float a = (1. - smoothstep(.0, 1., d)); a = a * a; gl_FragColor = vec4(col * (1. + 2. * a * a), a * op * vA); }"});Il=class{constructor(e,t,n){var i;this.V=e,this.fx=t,this.mkBoat=n,this.ships=[],this.smokeAt=[],this.isle="cove",this.th=nd.cove,this.u=nn.get("tod")&&(i={morning:.03,day:.25,golden:.54,night:.8}[nn.get("tod")])!=null?i:$p,this.freeze=nn.has("tod")||nn.has("cap"),this.rain=0,this.rainT=nn.get("wx")==="rain"?1:0,this.mist=0,this.mistT=nn.get("wx")==="mist"?1:0,this.wxNext=120+Math.random()*80,this.wxLeft=0,this.flash=0,this.boltT=3,this.storm=!1,this.fogBase={n:e.scene.fog.near,f:e.scene.fog.far},this.tmpC=new j,this.tmpC2=new j,this.glowBase=jt.mats.Glow.color.clone(),this.build()}build(){let e=this.V.scene;this.glows=Cl(1,()=>{},""),e.add(this.glows),this.glows.material.uniforms.col.value.setRGB(1,.62,.25),this.lan=Cl(16,(u,d,f)=>{f[u]=3.2},""),e.add(this.lan),this.lan.material.uniforms.col.value.setRGB(1,.7,.3);let t=[];for(let u=0;t.length<90&&u<4e3;u++){let d=-44+Math.random()*88,f=-44+Math.random()*88,m=Gs(d,f);m>1.2&&t.push([d,m,f])}this.land=t,this.ff=Cl(t.length,(u,d,f,m)=>{d.set([t[u][0],t[u][1]+.8+Math.random()*1.6,t[u][2]],u*3),f[u]=.55,m.set([Math.random()*6.28,.5+Math.random(),Math.random()*6.28],u*3)},"p += vec3(sin(time * seed.y + seed.x) * 1.4, sin(time * 1.7 * seed.y + seed.z) * .6, cos(time * .8 * seed.y + seed.z) * 1.4); a = .5 + .5 * sin(time * 3. * seed.y + seed.x * 5.);"),this.ff.material.uniforms.col.value.setRGB(.75,1,.35),e.add(this.ff);let n=1400,i=new _t,s=new Float32Array(n*6),o=new Float32Array(n*6);for(let u=0;u<n;u++){let d=Math.random(),f=Math.random(),m=Math.random();s.set([d,f,m,d,f,m],u*6),o.set([0,0,0,1,1,1],u*6)}i.setAttribute("position",new qe(s,3)),i.setAttribute("end",new qe(o,3)),this.rainU={time:{value:0},ctr:{value:new xs},op:{value:0},snow:{value:0}},this.rainM=new Lr(i,new it({uniforms:this.rainU,transparent:!0,depthWrite:!1,vertexShader:`uniform float time, snow; uniform vec3 ctr; attribute vec3 end; varying float vE; void main(){ vec3 p = position; float sp = mix(38., 4., snow);
        vec3 w = vec3(ctr.x + (p.x - .5) * 90. + sin(time * .7 + p.z * 30.) * snow * 2., mod(p.y * 50. - time * sp * (.8 + p.z * .4), 50.) - 4., ctr.z + (p.z - .5) * 80.);
        w += end * mix(vec3(-.35, 1.6, -.15), vec3(.12, .25, .05), snow); vE = end.x; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.); }`,fragmentShader:"uniform float op, snow; varying float vE; void main(){ gl_FragColor = vec4(mix(vec3(.75, .82, .92), vec3(1.), snow), op * mix(mix(.55, .1, vE), .9, snow)); }"})),this.rainM.frustumCulled=!1,this.rainM.renderOrder=6,this.rainM.visible=!1,e.add(this.rainM),this.boats=[],this.mkBoat&&["sloop","sloop"].forEach((u,d)=>{let f=this.mkBoat(u);f.scale.setScalar(.42),e.add(f),this.boats.push({o:f,cx:d?62:-60,cz:d?30:-24,r:d?9:7,a:d*2,sp:d?.05:-.06})});let a=new Ni(.32,6,4);a.scale(1,.45,.8);let l=new kt({color:14701866,roughness:.7}),c=[];for(let u=0;c.length<14&&u<6e3;u++){let d=-50+Math.random()*100,f=-50+Math.random()*100,m=Gs(d,f);m>.15&&m<.7&&c.push([d,m,f,Math.random()*6.28])}this.crabs=new Zt(a,l,Math.max(1,c.length)),this.crabs.count=c.length,this.beach=c,this.crabs.castShadow=!1,e.add(this.crabs),this.dm=new ut;let h=new Ns(4,34,16,1,!0);h.translate(0,-17,0),h.rotateZ(Math.PI/2),this.beam=new Be(h,new it({transparent:!0,depthWrite:!1,blending:Li,side:fn,uniforms:{op:{value:0}},vertexShader:"varying float vX; void main(){ vX = position.x / 34.; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:"uniform float op; varying float vX; void main(){ gl_FragColor = vec4(1., .92, .7, op * .32 * pow(1. - clamp(vX, 0., 1.), 1.6)); }"})),this.beam.visible=!1,e.add(this.beam),this.land_={},this.smokeT=0}relight(){let e=[],t=new zt,n=new xs,i=new xs,s=u=>{for(let d=u;d;d=d.parent)if(!d.visible)return!1;return!0};this.V.scene.traverse(u=>{u.isMesh&&u.material===jt.mats.Glow&&s(u)&&e.length<120&&(t.setFromObject(u),t.getCenter(n),t.getSize(i),i.length()<12&&e.push(n.x,n.y,n.z,Math.min(5,1.6+i.length()*1.2)))});let o=e.length/4,a=new _t,l=new Float32Array(o*3),c=new Float32Array(o);for(let u=0;u<o;u++)l.set(e.slice(u*4,u*4+3),u*3),c[u]=e[u*4+3];a.setAttribute("position",new qe(l,3)),a.setAttribute("sz",new qe(c,1)),a.setAttribute("seed",new qe(new Float32Array(o*3),3)),this.glows.geometry.dispose(),this.glows.geometry=a;let h=null;h&&(t.setFromObject(h),this.beamAt=new xs((t.min.x+t.max.x)/2,t.max.y-2.2,(t.min.z+t.max.z)/2))}setIsle(e){this.isle=e;let t=this.th=nd[e]||nd.cove;jt.mats.Leaf.color.set(t.leaf);for(let n in this.land_)this.land_[n].visible=n===e;if(!this.land_[e]){let n=this.landmarks(e);n&&(this.land_[e]=n,this.V.scene.add(n))}this.rainU.snow.value=e==="frost"?1:0,this.ff.material.uniforms.col.value.setRGB(e==="volcano"?1:.75,e==="volcano"?.45:1,e==="volcano"?.12:.35),this.V.post&&this.V.post.setMap({grade:Object.assign({warm:[1.05,1,.93],cool:[.93,.97,1.06],sat:1.12,con:1.06,vig:.22,bloom:.28,thr:.9},t.grade)}),this.crabs.visible=e!=="frost",this.wxNext=Math.min(this.wxNext,e==="frost"?20:999)}landmarks(e){let t=new vt;t.name="isle_"+e;let n=jt.mats.Body,i=(s,o,a,l,c,h,u,d)=>{let f=Pl(new Ns(a,l,c,4),a*.12,d);f.translate(0,l/2-3,0);let m=new Be(Vr(f,(x,p,g)=>x.set(p>l*u?h[1]:g>.75?h[2]:h[0])),n);return m.position.set(s,0,o),m.receiveShadow=!0,t.add(m),m};if(e==="jungle"){i(-40,-92,34,46,9,[4091434,6262586,5212720],.7,3),i(18,-110,44,62,10,[3498790,7307082,4619820],.78,7),i(70,-88,30,38,8,[4356652,5933626,5212720],.7,11);for(let l=0;l<5;l++){let c=new ii(14-l*2.6,2.4,14-l*2.6),h=new Be(Vr(c,u=>u.set(l%2?11049592:10128490)),n);h.position.set(18,52+l*2.4,-110),t.add(h)}let s=new Be(new ii(2.2,2.2,2.2),jt.mats.Glow);s.position.set(18,65.5,-110),t.add(s);let o=Vr(Pl(new Os(5,0),1.2,5),(l,c)=>l.set(c>1?5810234:4029994)),a=Vr(new Us(.6,.9,9,5),l=>l.set(6965802));[[-50,-40],[-55,-20],[64,-42],[-46,5],[70,-10]].forEach(([l,c],h)=>{let u=Gs(l,c),d=new Be(a,n);d.position.set(l,u+3.5,c);let f=new Be(o,jt.mats.Leaf);f.position.set(l,u+9,c),f.scale.setScalar(1+h*.1),t.add(d,f)})}else if(e==="volcano"){let s=i(4,-112,48,64,11,[4864564,3023904,5916736],.82,5),o=new Be(new Us(7.5,9,2,10),new St({color:new j(3,1.1,.25)}));o.position.set(4,59.5,-112),t.add(o);for(let a=0;a<3;a++){let l=new Be(new ii(1.6,34,.6),new St({color:new j(2.6,.7,.12)}));l.position.set(4+(a-1)*7,42,-90),l.rotation.x=-.62,l.rotation.z=(a-1)*.35,t.add(l)}i(-44,-84,24,30,8,[5127734,3812904,5916736],.8,9),i(56,-86,26,30,8,[5127734,3812904,5916736],.8,13),[[-44,16],[58,22],[-48,-26],[66,-30]].forEach(([a,l],c)=>{let h=Pl(new Us(1.5,3,9+c*2,6),.5,c+2);h.translate(0,3,0);let u=new Be(Vr(h,(d,f)=>d.set(f>6?2761248:3813418)),n);u.position.set(a,-1,l),u.castShadow=!0,t.add(u)}),this.crater=new xs(4,61,-112),this.embers=Cl(70,(a,l,c,h)=>{l.set([4,60,-112],a*3),c[a]=1.4,h.set([Math.random()*6.28,Math.random(),Math.random()*6.28],a*3)},"float k = fract(time * .12 * (.6 + seed.y) + seed.x); p += vec3(sin(seed.z) * 14. * k, k * 40., cos(seed.z) * 10. * k); a = 1. - k;"),this.embers.material.uniforms.col.value.setRGB(1,.4,.08),t.add(this.embers)}else if(e==="frost"){i(-36,-96,36,52,9,[12110040,16777215,15660287],.45,4),i(24,-116,48,70,10,[11058380,16777215,15923455],.4,8),i(76,-92,30,40,8,[12110040,16777215,15660287],.45,12);let s=(o,a)=>{let l=Pl(new Os(o,1),o*.35,a);return l.scale(1,.7,1),Vr(l,(c,h,u)=>c.set(u>.5?16777215:h<0?9425128:13626102))};[[-46,-8,5],[-42,26,4],[62,-18,6],[66,16,4],[18,40,3.5],[-16,44,4.5],[46,40,3],[-56,-34,5]].forEach(([o,a,l],c)=>{if(Gs(o,a)>-1.5)return;let h=new Be(s(l,c+3),n);h.position.set(o,-.4,a),h.rotation.y=c,h.castShadow=!0,t.add(h)})}else return null;return t.traverse(s=>{s.isMesh&&(s.matrixAutoUpdate=!0)}),t}weather(e){if(this.freeze)return;if(this.storm){this.rainT=1;return}if(this.wxLeft>0){this.wxLeft-=e,this.wxLeft<=0&&(this.rainT=0,this.mistT=0,this.wxNext=110+Math.random()*120);return}if(this.wxNext-=e,this.wxNext>0)return;let t=Math.random();this.wxLeft=45+Math.random()*40,t<.62||this.isle==="frost"?this.rainT=1:this.mistT=1}update(e,t,n){let i=this.V,s=i.scene,o=this.th,a=(window.__quality||{}).lv||0;this.freeze||(this.u=(this.u+e/mb)%1),this.weather(e),this.rain+=(this.rainT-this.rain)*Math.min(1,e*.35),this.mist+=(this.mistT-this.mist)*Math.min(1,e*.3);let[l,c,h]=gb(this.u),u=this.rain,d=this.isle==="frost",f=Vs(l.night,c.night,h);this.night=f;let m=.4+.45*(1-f),x=1-u*.42,p=(M,R,D)=>{M.value.lerpVectors(l[R],c[R],h),D&&M.value.multiply(D),u>.001&&M.value.lerp(new xs(m*.85,m*.92,m),u*.7)};p(ln.eZen,"zen",o.sky),p(ln.eMid,"mid",o.sky),p(ln.eHor,"hor",o.sky),p(ln.eLow,"low",o.sky),p(ln.eWarm,"warm",o.sky),p(ln.eCloudA,"cA"),p(ln.eCloudB,"cB"),ln.eWater.value.lerpVectors(l.water,c.water,h).multiply(o.water).multiplyScalar(1-u*.3),ln.eSpec.value.lerpVectors(l.spec,c.spec,h).multiplyScalar(1-u*.85),ln.eSunK.value=Vs(l.sunK,c.sunK,h)*(1-u),ln.eNight.value=f,ln.eCloud.value=u;let g=this.tmpC.copy(l.fog).lerp(c.fog,h);g.r*=o.fog.x,g.g*=o.fog.y,g.b*=o.fog.z,u>.001&&g.lerp(this.tmpC2.setRGB(m*.8,m*.85,m*.9),u*.6),this.mist>.001&&g.lerp(this.tmpC2.setRGB(.8,.82,.84).multiplyScalar(1-f*.8),this.mist*.5),s.fog.color.copy(g);let b=1-Math.max(this.mist*.55,u*(d?.45:.3));s.fog.near=this.fogBase.n*b*(d&&u>.1?.7:1),s.fog.far=this.fogBase.f*(.4+.6*b);let y=i.sun;y.color.copy(l.sunC).lerp(c.sunC,h),y.color.r*=o.sun.x,y.color.g*=o.sun.y,y.color.b*=o.sun.z,y.intensity=Vs(l.sunI,c.sunI,h)*x,i.hemi&&(i.hemi.color.copy(l.hS).lerp(c.hS,h),i.hemi.groundColor.copy(l.hG).lerp(c.hG,h),i.hemi.intensity=Vs(l.hI,c.hI,h)*(1-u*.25)+this.flash*2.5),i.fill&&(i.fill.intensity=Vs(l.fI,c.fI,h)),s.environmentIntensity=Vs(l.env,c.env,h)*(1-u*.3),this.flash=Math.max(0,this.flash-e*3.2),ln.eFlash.value=this.flash*.55,u>.6&&!d&&(this.boltT-=e,this.boltT<=0&&(this.boltT=5+Math.random()*9,this.flash=1,setTimeout(()=>$.play("boom",.35+Math.random()*.25),250+Math.random()*700)));let _=Vs(l.glow,c.glow,h)+u*.6;jt.mats.Glow.color.copy(this.glowBase).multiplyScalar(_);let A=Math.max(0,(f-.15)/.85)+u*.25;if(this.glows.visible=A>.02,this.glows.material.uniforms.op.value=Math.min(1,A)*.9,this.lan.visible=A>.02&&!n,this.lan.material.uniforms.op.value=Math.min(1,A),this.lan.visible){let M=this.lan.geometry.attributes.position,R=0;for(let D of this.ships){if(R>=14)break;let v=D.o;M.setXYZ(R++,v.position.x,v.position.y+4.2,v.position.z)}for(let D of this.boats)R<16&&M.setXYZ(R++,D.o.position.x,D.o.position.y+2,D.o.position.z);for(;R<16;R++)M.setXYZ(R,0,-99,0);M.needsUpdate=!0}this.ff.visible=f>.3&&a<3&&this.isle!=="frost"&&u<.5,this.ff.material.uniforms.op.value=(f-.3)/.7*(this.isle==="jungle"?1.3:1),this.beamAt&&f>.2?(this.beam.visible=!0,this.beam.position.copy(this.beamAt),this.beam.rotation.y=t*.8,this.beam.material.uniforms.op.value=Math.min(1,(f-.2)*2)*(1-u*.3)):this.beam.visible=!1,this.V.post&&this.V.post.bloom&&this.V.post.bloom.enabled&&(this.V.post.bloom.threshold=.9-f*.3,this.V.post.bloom.strength=.28+f*.22),this.rainM.visible=u>.03&&a<3,this.rainU.op.value=Math.min(1,u*1.2),this.rainU.ctr.value.copy(i.target);let T=innerHeight*i.R.getPixelRatio()/(2*Math.tan(i.cam.fov*Math.PI/360));[this.glows,this.lan,this.ff,this.embers].forEach(M=>{M&&(M.material.uniforms.scale.value=T,M.material.uniforms.time.value=t)}),this.rainU.time.value=t;for(let M of this.boats){M.a+=M.sp*e;let R=M.cx+Math.cos(M.a)*M.r,D=M.cz+Math.sin(M.a)*M.r;M.o.position.set(R,-.1+Math.sin(t*1.3+M.cx)*.12,D),M.o.rotation.y=Math.atan2(-Math.sin(M.a)*Math.sign(M.sp),Math.cos(M.a)*Math.sign(M.sp))+Math.PI/2,M.o.rotation.z=Math.sin(t*1.1+M.cz)*.06,M.o.visible=!n}if(this.crabs.visible){let M=this.dm;this.beach.forEach((R,D)=>{let v=Math.sin(t*.6+R[3]*3),S=v>.3?v-.3:0;M.position.set(R[0]+Math.cos(R[3])*Math.sin(t*.4+R[3])*1.5,R[1]+.12+Math.abs(Math.sin(t*14+D))*.05*(S>0),R[2]+Math.sin(R[3])*Math.sin(t*.4+R[3])*1.5),M.rotation.set(0,R[3]+Math.PI/2,0),M.updateMatrix(),this.crabs.setMatrixAt(D,M.matrix)}),this.crabs.instanceMatrix.needsUpdate=!0}if(this.smokeT-=e,this.smokeT<=0&&!n&&a<4){this.smokeT=.7;for(let M of this.smokeAt)this.fx.puff(new xs(M.x,M.y,M.z),1,f>.5?5921382:12103848,1.1,1.4,.3,2.2);this.isle==="volcano"&&this.crater&&this.fx.puff(this.crater.clone(),2,3813424,9,6,4,4)}}}});function ci(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ye,oi,Lt,yb,bn,q,ai,id,bt,En,sd,Ws,Yp,xi,li,Wr,Mn=We(()=>{Ye=["g","w","r","p"],oi=8,Lt=(r,e,t=8)=>Array.from({length:t},(n,i)=>Math.round(r*Math.pow(e,i))),yb=[5,45,240,900,2400,5400,10800,21600],bn=(r,e,t=0,n=0,i=2.35)=>Array.from({length:8},(s,o)=>{let a=Math.pow(i,o),l={};return r&&(l.g=Math.round(r*a/10)*10),e&&(l.w=Math.round(e*a/10)*10),t&&(l.r=Math.round(t*a/10)*10),n&&(l.p=Math.round(n*a/10)*10),l}),q={keep:{name:"Captain's Keep",w:4,cat:"hq",hp:Lt(1800,1.28),cost:bn(0,0,0,0).map((r,e)=>({g:[0,1e3,4e3,15e3,45e3,12e4,3e5,7e5][e],w:[0,1e3,4e3,15e3,45e3,12e4,3e5,7e5][e]})),time:[0,60,600,1800,3600,7200,14400,28800],store:Lt(1500,1.9),desc:"Your stronghold. Upgrading it unlocks new buildings and levels."},mine:{name:"Gold Mine",w:3,cat:"res",res:"g",hp:Lt(420,1.22),cost:bn(0,150),prod:Lt(500,1.38),desc:"Digs up gold from the island."},lumber:{name:"Lumber Camp",w:3,cat:"res",res:"w",hp:Lt(420,1.22),cost:bn(150,0),prod:Lt(500,1.38),desc:"Chops palm timber."},still:{name:"Rum Distillery",w:3,cat:"res",res:"r",hp:Lt(420,1.22),cost:bn(300,300),prod:Lt(360,1.38),desc:"Brews rum to pay your crew."},powder:{name:"Powder Mill",w:3,cat:"res",res:"p",hp:Lt(420,1.22),cost:bn(600,600),prod:Lt(140,1.38),desc:"Grinds gunpowder for broadsides."},vault:{name:"Treasure Vault",w:3,cat:"store",res:"g",hp:Lt(900,1.25),cost:bn(0,300),store:Lt(3e3,2.1),desc:"Stores gold."},store:{name:"Warehouse",w:3,cat:"store",res:"wrp",hp:Lt(900,1.25),cost:bn(300,0),store:Lt(3e3,2.1),desc:"Stores wood, rum and powder."},tavern:{name:"Tavern",w:3,cat:"army",hp:Lt(600,1.22),cost:bn(200,200),cap:[20,30,45,60,80,100,120,140],desc:"Recruits and trains your crew. Higher level = more crew and stronger crew."},shipyard:{name:"Shipyard",w:4,cat:"army",hp:Lt(900,1.22),cost:bn(500,500),energy:[10,13,16,19,22,25,28,32],desc:"Your flagship: more broadside powder and harder cannon shots."},cannon:{name:"Cannon Tower",w:3,cat:"def",hp:Lt(520,1.24),cost:bn(250,100),dmg:Lt(22,1.2),rate:.9,range:9,proj:"ball",desc:"Heavy single-target cannon."},musket:{name:"Lookout Tower",w:2,cat:"def",hp:Lt(380,1.24),cost:bn(350,200),dmg:Lt(7,1.2),rate:.45,range:8.5,proj:"shot",desc:"Sharpshooters pick off crew quickly."},mortar:{name:"Mortar Pit",w:3,cat:"def",hp:Lt(450,1.24),cost:bn(1500,600,0,200),dmg:Lt(30,1.2),rate:5,range:11,minR:3.5,splash:1.35,proj:"shell",desc:"Lobs shells that blast groups of crew."},wall:{name:"Palisade",w:1,cat:"wall",hp:Lt(300,1.42),cost:bn(0,40,0,0,2.1),desc:"Sharpened logs that block attackers."},keg:{name:"Powder Keg",w:1,cat:"trap",hp:[1,1,1,1,1,1,1,1],cost:bn(300,0,0,60),dmg:Lt(55,1.25),trig:1.2,splash:1.7,desc:"Hidden trap that blasts a group."},spike:{name:"Spike Pit",w:1,cat:"trap",hp:[1,1,1,1,1,1,1,1],cost:bn(400,200),dmg:Lt(180,1.25),trig:.7,desc:"Hidden pit that skewers one big attacker."}};for(let r in q)q[r].id=r,q[r].time||(q[r].time=r==="wall"?[0,0,0,0,0,0,0,0]:q[r].cat==="trap"?[0,5,30,120,300,600,900,1200]:yb);ai={keep:[1,1,1,1,1,1,1,1],mine:[1,2,2,3,3,4,4,5],lumber:[1,1,2,2,3,3,4,4],still:[1,1,2,2,2,3,3,3],powder:[0,1,1,2,2,2,3,3],vault:[1,1,2,2,2,3,3,3],store:[1,1,1,2,2,2,3,3],tavern:[1,1,1,1,1,1,1,1],shipyard:[1,1,1,1,1,1,1,1],cannon:[1,2,2,3,3,4,4,5],musket:[0,1,2,2,3,3,4,4],mortar:[0,0,1,1,2,2,3,3],wall:[0,25,50,75,100,125,150,175],keg:[0,0,2,3,4,5,6,6],spike:[0,0,0,2,3,4,5,6]},id=(r,e)=>r==="keep"?oi:Math.min(oi,e+1),bt={deckhand:{name:"Deckhand",sp:1,hp:70,dmg:11,rate:1,range:.8,spd:2.1,cost:20,time:6,tl:1,desc:"Cheap cutlass fighter. Attacks the nearest building."},musketeer:{name:"Musketeer",sp:1,hp:30,dmg:9,rate:1,range:3.6,spd:2.2,cost:40,time:8,tl:1,desc:"Fires from range. Fragile."},looter:{name:"Looter",sp:1,hp:55,dmg:9,rate:1,range:.8,spd:3.3,cost:30,time:7,tl:2,pref:"loot",resX:2,desc:"Fast. Goes for gold, rum and storages (\xD72 damage)."},brute:{name:"Brute",sp:5,hp:480,dmg:16,rate:1.2,range:.9,spd:1.35,cost:220,time:30,tl:2,pref:"def",desc:"Huge tank. Marches to defences first."},monkey:{name:"Powder Monkey",sp:2,hp:30,dmg:14,rate:1,range:.5,spd:2.9,cost:90,time:15,tl:3,pref:"wall",wallX:40,splash:1.4,boom:!0,desc:"Runs to walls and blows them up."},grenadier:{name:"Grenadier",sp:4,hp:150,dmg:22,rate:1.4,range:3.2,spd:1.5,cost:260,time:35,tl:4,splash:1.3,desc:"Lobs grenades that hurt groups of buildings."}},En=["deckhand","musketeer","looter","brute","monkey","grenadier"],sd=r=>({hp:Math.pow(1.24,r-1),dmg:Math.pow(1.22,r-1)}),Ws={shot:{name:"Cannon Shot",cost:3,inc:1,desc:"Heavy shot on a building."},flare:{name:"Flare",cost:2,inc:0,desc:"Your crew charge to this spot."},heal:{name:"Grog Barrel",cost:4,inc:1,desc:"Heals crew in a ring."},smoke:{name:"Smoke Screen",cost:5,inc:2,desc:"Defences inside cannot fire."}},Yp=r=>Math.round(220*Math.pow(1.3,r-1)),xi=[{n:"Deckhand",t:0,c:"#b98a5a"},{n:"Bosun",t:400,c:"#c0c8d0"},{n:"Corsair",t:800,c:"#ffcf4a"},{n:"Captain",t:1300,c:"#5fd0ff"},{n:"Admiral",t:1900,c:"#c27aff"},{n:"Pirate King",t:2600,c:"#ff5a4a"}],li=r=>{let e=0;return xi.forEach((t,n)=>{r>=t.t&&(e=n)}),e},Wr=180});function Dl(r,e,t){let n=Math.floor(r),i=Math.floor(e),s=r-n,o=e-i,a=s*s*(3-2*s),l=o*o*(3-2*o),c=Ll(n,i,t),h=Ll(n+1,i,t),u=Ll(n,i+1,t),d=Ll(n+1,i+1,t);return c+(h-c)*a+(u-c)*l+(c-h-u+d)*a*l}function ld(r,e,t=!0){let n=[];if(!e.length)return n;r.updateMatrixWorld(!0);let i=new Pe().copy(r.matrixWorld).invert(),s=new Pe,o=new mn,a=new kn,l=new P,c=new P;return r.traverse(h=>{if(!h.isMesh)return;let u=h.geometry.clone().applyMatrix4(new Pe().multiplyMatrices(i,h.matrixWorld)),d=new Zt(u,h.material,e.length);e.forEach((f,m)=>{a.set(0,f.r||0,0),o.setFromEuler(a),l.setScalar(f.s||1),c.set(f.x,f.y,f.z),s.compose(c,o,l),d.setMatrixAt(m,s)}),d.castShadow=t&&h.material!==jt.mats.Glow,d.receiveShadow=!0,d.computeBoundingSphere(),n.push(d)}),n}var ve,Ke,ad,rd,Ll,od,Wi,Kp,kl,Xs=We(()=>{It();yu();Br();Mn();ve=1.2,Ke=r=>(r-32/2)*2,ad=(r,e)=>({x:r/2+32/2,y:e/2+32/2}),rd=32/2*2,Ll=(r,e,t)=>{let n=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};od=(r,e,t)=>Dl(r,e,t)*.6+Dl(r*2.1,e*2.1,t+3)*.28+Dl(r*4.3,e*4.3,t+7)*.12,Wi=(r,e,t)=>{let n=Math.max(0,Math.min(1,(t-r)/(e-r)));return n*n*(3-2*n)},Kp={cove:{grass:[7515464,6067772,8829270],tuft:5212724,fl:[16777215,16767050,16748464,16734794],dirt:11043918,sand:15915161,wet:13214826,deep:14204804,cliff:10127978,deco:[["palm0",14],["palm1",10],["bush0",14],["bush1",8],["rock0",8],["rock1",5]],beach:[["palm0",10],["palm1",8],["rock1",8]]},jungle:{grass:[4168752,3048742,6009404],tuft:2780704,fl:[16742954,16767050,13654783,16730730],dirt:8018482,sand:14994570,wet:11571290,deep:13152378,cliff:6975560,deco:[["jtree0",18],["palm1",10],["bush0",22],["bush1",10],["rock0",6]],beach:[["palm0",12],["palm1",8],["bush0",6]]},volcano:{grass:[7232076,5917248,8679516],tuft:5917238,fl:null,dirt:3812390,sand:3945522,wet:2761762,deep:4865592,cliff:3024418,deco:[["dead0",16],["rock0",16],["rock1",12],["bush0",4]],beach:[["rock0",12],["rock1",10],["dead0",4]]},frost:{grass:[15134454,13951212,16186110],tuft:14083310,fl:[12576511,15267583],dirt:10135736,sand:13160666,wet:10004150,deep:12109524,cliff:9083050,deco:[["pine1",20],["pine0",10],["rock0",10],["rock1",6]],beach:[["rock0",10],["rock1",10],["pine1",6]]}},kl=class{constructor(e){this.V=e,this.g=new vt,e.scene.add(this.g),this.seed=1,this.theme="cove",this.decor=[],this.mkOverlays()}h(e,t){let n=this.seed,i=Math.atan2(t,e),s=1.8*Math.sin(3*i+n)+1.3*Math.sin(5*i+n*2.3)+.9*Math.sin(8*i+n*.7)+(od(e*.05,t*.05,n)-.5)*5,a=Math.pow(Math.pow(Math.abs(e),4)+Math.pow(Math.abs(t),4),.25)*.82+Math.hypot(e,t)*.18-(44.5+s),l=Math.max(Math.abs(e),Math.abs(t)),c=(od(e*.07,t*.07,n+11)-.35)*2.6*Wi(rd+1,rd+6,l)*Wi(0,-7,a),h=ve+Math.max(0,c),u=h+(-4.6-h)*Wi(-3,9,a);return a>9&&(u=Math.max(-6,-4.6-(a-9)*.12)),u}build(e="cove",t=1){this.theme=e,this.seed=t;let n=Kp[e]||Kp.cove;this.T=n,this.lavaU=this.lavaU||{value:0},this.lavaU.value=e==="volcano"?1:0;let i=(y,_)=>Math.max(this.h(y,_),-6);jt.hf=(y,_)=>Math.max(0,i(y,_)),this.mesh&&(this.g.remove(this.mesh),this.mesh.geometry.dispose());let s=132,o=this.V.q>=2?132:100,a=new si(s,s,o,o);a.rotateX(-Math.PI/2);let l=a.attributes.position,c=new Float32Array(l.count*3),h=new j,u=new j,d=n.grass.map(y=>new j(y)),f=new j(n.sand),m=new j(n.wet),x=new j(n.deep),p=new j(n.cliff);for(let y=0;y<l.count;y++){let _=l.getX(y),A=l.getZ(y),T=i(_,A);l.setY(y,T);let M=od(_*.11,A*.11,t+5),R=Dl(_*.45,A*.45,t+9);h.copy(d[0]).lerp(d[1],Wi(.35,.7,M)).lerp(d[2],Wi(.55,.8,R)*.45),T>ve+.4&&h.lerp(p,Wi(ve+.6,ve+3.2,T)*.45);let D=Wi(ve-.05,ve-.55,T);h.lerp(f,D),h.lerp(m,Wi(.45,.05,T)*D),h.lerp(x,Wi(0,-1.5,T)),u.setRGB(1,1,1).multiplyScalar(.94+R*.1),h.multiply(u),c.set([h.r,h.g,h.b],y*3)}a.setAttribute("color",new qe(c,3)),a.computeVertexNormals(),this.mesh=new Be(a,this.terrainMat()),this.mesh.receiveShadow=!0,this.mesh.name="terrain",this.g.add(this.mesh);let g=256,b=new Uint8Array(g*g*4);for(let y=0;y<g;y++)for(let _=0;_<g;_++){let A=-80+(_+.5)/g*160,T=-(-80+(y+.5)/g*160),M=Math.max(0,Math.min(255,Math.round((i(A,T)+6)/16*255)));b.set([M,0,0,255],(y*g+_)*4)}return this.tex?this.tex.image.data.set(b):(this.tex=new ks(b,g,g),this.tex.magFilter=this.tex.minFilter=an,this.tex.colorSpace=Wn,this.tex.flipY=!1),this.tex.needsUpdate=!0,this.placeDecor(),this.mkLawn(),this}terrainMat(){if(this._tm)return this._tm;this.lavaU=this.lavaU||{value:0};let e=256,t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d");n.fillStyle="rgb(128,128,128)",n.fillRect(0,0,e,e);let i=7,s=()=>(i=i*16807%2147483647)/2147483647;for(let d=0;d<2600;d++){let f=s()*e,m=s()*e,x=3+s()*7,p=-Math.PI/2+(s()-.5)*.9,g=95+s()*80|0;n.strokeStyle=`rgba(${g},${g},${g},.55)`,n.lineWidth=1+s()*1.2,n.beginPath(),n.moveTo(f,m),n.lineTo(f+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke(),(f<12||m<12||f>e-12||m>e-12)&&(n.save(),n.translate(f<12?e:f>e-12?-e:0,m<12?e:m>e-12?-e:0),n.beginPath(),n.moveTo(f,m),n.lineTo(f+Math.cos(p)*x,m+Math.sin(p)*x),n.stroke(),n.restore())}for(let d=0;d<70;d++){let f=s()*e,m=s()*e;n.fillStyle=`rgba(${s()<.5?200:60},${s()<.5?200:70},${s()<.5?190:60},.35)`,n.beginPath(),n.arc(f,m,1+s()*1.5,0,7),n.fill()}let o=new Ja(t);o.wrapS=o.wrapT=Di,o.colorSpace=Wn,o.anisotropy=4;let a=new kt({vertexColors:!0,roughness:.9,metalness:0,envMapIntensity:.5});a.name="Terrain";let l=(48/2).toFixed(2),c=Ke(4+24/2).toFixed(2),h=ve.toFixed(2),u=4 .toFixed(2);return a.onBeforeCompile=d=>{d.uniforms.dtex={value:o},d.uniforms.lava=this.lavaU,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = (modelMatrix * vec4(transformed, 1.)).xyz;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWp; uniform sampler2D dtex; uniform float lava;`).replace("#include <color_fragment>",`#include <color_fragment>
        { float d1 = texture2D(dtex, vWp.xz * .21).r, d2 = texture2D(dtex, vWp.xz * .053 + .37).r;
          float grass = smoothstep(${(ve-.25).toFixed(2)}, ${(ve+.05).toFixed(2)}, vWp.y);
          diffuseColor.rgb *= mix(.93 + d2 * .14, .72 + d1 * .44 * (.75 + d2 * .5), grass * .9 + .1);
          vec2 q = vWp.xz - vec2(${c}); float inb = 1. - smoothstep(${l} - 1., ${l} + 3., max(abs(q.x), abs(q.y)));
          float chk = mod(floor(q.x / ${u}) + floor(q.y / ${u}), 2.);
          diffuseColor.rgb *= 1. + (chk - .5) * .07 * inb * grass; }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (lava > 0.) { vec2 p = vWp.xz; float f = abs(sin(p.x * .31 + sin(p.y * .23) * 2.1) * sin(p.y * .37 + sin(p.x * .19) * 2.3));
          vec2 q2 = p - vec2(${c}); float outb = smoothstep(${l} + 3., ${l} + 9., max(abs(q2.x), abs(q2.y)));
          float patchy = smoothstep(.42, .62, texture2D(dtex, p * .021 + .37).g);
          float m = outb * patchy * smoothstep(${(ve-.6).toFixed(2)}, ${ve.toFixed(2)}, vWp.y);
          float c = (1. - smoothstep(.0, .018, f)) * m, halo = (1. - smoothstep(.0, .09, f)) * m;
          totalEmissiveRadiance += vec3(1., .3, .05) * c * lava * (1.0 + .4 * texture2D(dtex, p * .05).r); diffuseColor.rgb *= 1. - c * .5 - halo * .35 * lava; }`)},a.customProgramCacheKey=()=>"terrain8",this._tm=a}placeDecor(){for(let o of this.decor)this.g.remove(o);if(this.decor=[],!this.models)return;let e=this.T,t=this.seed*977+13,n=()=>(t=t*16807%2147483647)/2147483647,i={land:[],beach:[]};for(let o=0;o<6e3&&(i.land.length<140||i.beach.length<60);o++){let a=(n()-.5)*116,l=(n()-.5)*116;if(Math.max(Math.abs(a),Math.abs(l))<rd+1.6)continue;let h=this.h(a,l);h>ve-.1&&i.land.length<140?i.land.push([a,h,l]):h>.35&&h<ve-.2&&i.beach.length<60&&i.beach.push([a,h,l])}let s=(o,a)=>{let l=0;for(let[c,h]of o){let u=this.models[c];if(!u)continue;let d=[];for(let m=0;m<h&&l<a.length;m++,l++){let[x,p,g]=a[l];d.push({x,y:p-.1,z:g,r:n()*6.28,s:.8+n()*.5})}ld(u,d).forEach(m=>{this.g.add(m),this.decor.push(m)})}};i.land.sort(()=>n()-.5),i.beach.sort(()=>n()-.5),s(e.deco,i.land),s(e.beach,i.beach)}mkLawn(){let e=this.T;if(!this.lawnM){let l=[];for(let m=0;m<5;m++){let x=new Ns(.07,.55+m%3*.12,3);x.translate(0,.28,0),x.rotateZ((m-2)*.28),x.rotateY(m*1.3),l.push(x)}let c=Tp(l),h=new Os(.11,0);h.translate(0,.2,0);let u=new el(.2,0);u.scale(1,.45,.8),this.lawnMats=[new kt({color:5212724,roughness:1}),new kt({color:16777215,roughness:.8}),new kt({color:10130570,roughness:1})];let d=[900,220,110];this.lawnM=[c,h,u].map((m,x)=>{let p=new Zt(m,this.lawnMats[x],d[x]);return p.receiveShadow=!0,p.castShadow=!1,p.name="lawn"+x,this.g.add(p),p});let f=new j;for(let m=0;m<d[1];m++)this.lawnM[1].setColorAt(m,f.set(16777215))}this.lawnMats[0].color.set(e.tuft||5212724),this.lawnMats[2].color.set(this.theme==="volcano"?3813420:this.theme==="frost"?11187392:10130570);let t=this.seed*131+7,n=()=>(t=t*16807%2147483647)/2147483647,i=Ke(4)+.3,s=48-.6,o=e.fl,a=new j;this.lawnS=[],this.lawnM.forEach((l,c)=>{let h=[];for(let u=0;u<l.count;u++){let d=i+n()*s,f=i+n()*s;if(c===0&&u%4){let x=h[u-u%4];d=x[0]+(n()-.5)*1.4,f=x[1]+(n()-.5)*1.4}let m=c===0?.7+n()*.7:c===1?o?.7+n()*.6:0:.6+n()*.9;h.push([d,f,m,n()*6.28]),c===1&&o&&l.setColorAt(u,a.set(o[n()*o.length|0]))}l.instanceColor&&(l.instanceColor.needsUpdate=!0),this.lawnS.push(h)}),this.setLawn(this.lawnOcc)}setLawn(e){if(this.lawnOcc=e,!this.lawnM)return;let t=new Pe,n=new mn,i=new kn,s=new P,o=new P,a=(l,c)=>{if(!e)return!0;let h=ad(l,c),u=Math.floor(h.x),d=Math.floor(h.y);for(let f=d-1;f<=d+1;f++)for(let m=u-1;m<=u+1;m++)if(m>=0&&f>=0&&m<32&&f<32&&e[f*32+m]>=0)return!1;return!0};this.lawnM.forEach((l,c)=>{this.lawnS[c].forEach(([h,u,d,f],m)=>{let x=d>0&&a(h,u);i.set(0,f,0),n.setFromEuler(i),o.setScalar(x?d:0),s.set(h,ve-.02,u),t.compose(s,n,o),l.setMatrixAt(m,t)}),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere()})}mkOverlays(){let e=48,t=new si(e,e);t.rotateX(-Math.PI/2),this.gridU={op:{value:0},n:{value:24}},this.grid=new Be(t,new it({transparent:!0,depthWrite:!1,uniforms:this.gridU,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform float op, n; varying vec2 vU; void main(){ vec2 g = vU * n; vec2 f = abs(fract(g) - .5); float l = smoothstep(.44, .5, max(f.x, f.y));
        float chk = mod(floor(g.x) + floor(g.y), 2.); float e = smoothstep(.0, .01, min(min(vU.x, 1. - vU.x), min(vU.y, 1. - vU.y)));
        gl_FragColor = vec4(mix(vec3(1.), vec3(1., .95, .7), chk), (l * .38 + chk * .05 + (1. - e) * .6) * op); }`})),this.grid.position.set(Ke(4+24/2),ve+.04,Ke(4+24/2)),this.grid.renderOrder=2,this.grid.visible=!1,this.g.add(this.grid);let n=new si(1,1);n.rotateX(-Math.PI/2),this.foot=new Be(n,new St({color:5963626,transparent:!0,opacity:.45,depthWrite:!1})),this.foot.visible=!1,this.foot.renderOrder=3,this.g.add(this.foot),this.redD=new Uint8Array(1024*4),this.redT=new ks(this.redD,32,32),this.redT.magFilter=this.redT.minFilter=tn,this.redT.needsUpdate=!0;let i=new si(64,64);i.rotateX(-Math.PI/2),this.redU={map:{value:this.redT},op:{value:0},n:{value:32},time:{value:0}},this.red=new Be(i,new it({transparent:!0,depthWrite:!1,uniforms:this.redU,vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform sampler2D map; uniform float op, n, time; varying vec2 vU;
        float m(vec2 c){ return texture2D(map, (floor(c) + .5) / n).r; }
        void main(){ vec2 uv = vec2(vU.x, 1. - vU.y); vec2 c = uv * n; float v = m(c); vec2 f = fract(c);
          float e = 0.; if (v > .5) { if (f.x < .1 && m(c - vec2(1., 0.)) < .5) e = 1.; if (f.x > .9 && m(c + vec2(1., 0.)) < .5) e = 1.; if (f.y < .1 && m(c - vec2(0., 1.)) < .5) e = 1.; if (f.y > .9 && m(c + vec2(0., 1.)) < .5) e = 1.; }
          float a = v * (.16 + .05 * sin(time * 4.)) + e * .75; if (a < .01) discard; gl_FragColor = vec4(mix(vec3(1., .25, .2), vec3(1., .9, .85), e), a * op); }`})),this.red.position.set(0,ve+.05,0),this.red.renderOrder=2,this.red.visible=!1,this.g.add(this.red)}setRed(e){for(let t=0;t<32;t++)for(let n=0;n<32;n++){let i=e[t*32+n]?255:0;this.redD[(t*32+n)*4]=i}this.redT.needsUpdate=!0}showFoot(e,t,n,i){let s=this.foot;s.visible=!0,s.scale.set(n*2,1,n*2),s.position.set(Ke(e+n/2),ve+.07,Ke(t+n/2)),s.material.color.set(i?5963626:16730682)}}});var Io,Zp,jp,Jp,Lo,Ul,Qp=We(()=>{It();Mn();Xs();Br();Io=r=>r>=6?3:r>=3?2:1,Zp={cannon:{1:.3,2:1.6,3:2.4},musket:{1:3,2:3.8,3:4.6},mortar:{1:.25,2:.25,3:.25}},jp={mine:"mine_",vault:"vault_",tavern:"tavern_",shipyard:"shipyard_"},Jp={keep:"keep",lumber:"lumber",still:"still",powder:"powder",store:"store"},Lo=P,Ul=class{constructor(e,t){this.V=e,this.M=t,this.g=new vt,e.scene.add(this.g),this.items=new Map,this.walls=[],this.fit={};let n=new ii(1,.14,1);n.translate(0,-.03,0),this.padM=new kt({color:10123850,roughness:1}),this.padG=n,this.pads=null,this.hideTraps=!1,this.base=null,this.t=0}tpl(e,t){let n=Io(Math.max(1,t)),i=this.M;return Jp[e]?{body:i[Jp[e]+n]}:jp[e]?{body:i[jp[e]+n],fit:!0}:Zp[e]?{body:i[e+"_b"+n],head:i[e+"_h"+n],hy:Zp[e][n]}:e==="keg"?{body:i.trap_keg}:e==="spike"?{body:i.trap_spike}:{body:i.site8}}clone(e,t,n){let i=e.clone(!0);if(!n)return i;let s=e.name,o=this.fit[s];if(!o){let l=new zt().setFromObject(e),c=new Lo,h=new Lo;l.getSize(c),l.getCenter(h),o=this.fit[s]={s:t*2*.9/Math.max(c.x,c.z),cx:h.x-e.position.x,cz:h.z-e.position.z,y0:l.min.y-e.position.y}}let a=new vt;return i.position.set(-o.cx,-o.y0,-o.cz),a.add(i),a.scale.setScalar(o.s),a}set(e,t={}){this.base=e,this.hideTraps=!!t.hideTraps,this.padM.color.set(t.dirt||10123850);for(let n of this.items.values())this.g.remove(n.g);this.items.clear(),this.sync(e)}sync(e=this.base){this.base=e;let t=new Set;for(let n of e.bl){if(n.t==="wall")continue;t.add(n.id);let i=this.items.get(n.id),s=n.t+":"+Io(Math.max(1,n.lv))+":"+(n.lv===0?"s":"");i&&i.key!==s&&(this.g.remove(i.g),i=null),i||(i=this.make(n),i.key=s,this.items.set(n.id,i),this.g.add(i.g));let o=q[n.t].w;i.g.position.set(Ke(n.x+o/2),ve,Ke(n.y+o/2)),i.o=n,i.scaf.visible=!!n.up&&n.lv>0,i.g.visible=!(q[n.t].cat==="trap"&&this.hideTraps)}for(let[n,i]of this.items)t.has(n)||(this.g.remove(i.g),this.items.delete(n));this.buildWalls(e),this.buildPads(e),this.onSync&&this.onSync(e)}make(e){let t=q[e.t],n=t.w,i=new vt,s={g:i,o:e,w:n,cat:t.cat};if(e.lv===0){let a=this.clone(this.M.site8,n,!0);i.add(a),s.body=a}else{let a=this.tpl(e.t,e.lv),l=this.clone(a.body,n,a.fit);if(i.add(l),s.body=l,a.head){let c=a.head.clone(!0);c.position.set(0,a.hy,0),i.add(c),s.head=c,s.ang=Math.PI*.5+(e.x*7+e.y*3)%6,c.rotation.y=s.ang}}let o=this.clone(this.M.site8,n,!0);return o.scale.multiplyScalar(1.05),o.visible=!1,i.add(o),s.scaf=o,i.traverse(a=>{a.isMesh&&(a.userData.bid=e.id)}),s}buildWalls(e){this.walls.forEach(i=>{this.g.remove(i),i.dispose&&i.dispose()}),this.walls=[];let t=e.bl.filter(i=>i.t==="wall");this.wallCells=new Map,t.forEach(i=>this.wallCells.set(i.x+i.y*32,i));let n={1:{p:[],l:[]},2:{p:[],l:[]},3:{p:[],l:[]}};for(let i of t){let s=Io(i.lv),o=Ke(i.x+.5),a=Ke(i.y+.5);n[s].p.push({x:o,y:ve,z:a,id:i.id});let l=this.wallCells.get(i.x+1+i.y*32),c=this.wallCells.get(i.x+(i.y+1)*32);l&&n[Math.min(s,Io(l.lv))].l.push({x:o,y:ve,z:a,r:0,id:i.id,id2:l.id}),c&&n[Math.min(s,Io(c.lv))].l.push({x:o,y:ve,z:a,r:-Math.PI/2,id:i.id,id2:c.id})}this.wallInst=[];for(let i of[1,2,3])for(let s of["p","l"]){let o=n[i][s];if(!o.length)continue;let a=ld(this.M["wall_"+s+i],o);a.forEach(l=>{l.userData.wall=o,this.g.add(l),this.walls.push(l)}),this.wallInst.push({ms:a,list:o})}}breakWall(e){let t=new Pe().makeScale(0,0,0);for(let{ms:n,list:i}of this.wallInst)i.forEach((s,o)=>{(s.id===e||s.id2===e)&&n.forEach(a=>{a.setMatrixAt(o,t),a.instanceMatrix.needsUpdate=!0})})}buildPads(e){this.pads&&(this.g.remove(this.pads),this.pads.dispose());let t=e.bl.filter(l=>q[l.t].cat!=="wall"&&q[l.t].cat!=="trap");if(!t.length){this.pads=null;return}let n=new Zt(this.padG,this.padM,t.length),i=new Pe,s=new mn,o=new Lo,a=new Lo;t.forEach((l,c)=>{let h=q[l.t].w;o.set(h*2-.3,1,h*2-.3),a.set(Ke(l.x+h/2),ve,Ke(l.y+h/2)),i.compose(a,s,o),n.setMatrixAt(c,i)}),n.receiveShadow=!0,this.pads=n,this.g.add(n)}pick(e){let t=e.intersectObjects(this.g.children,!0);for(let l of t){let c=l.object;if(c.userData.bid)return c.userData.bid;if(c.isInstancedMesh&&c.userData.wall&&l.instanceId!=null)return c.userData.wall[l.instanceId].id}let n=(ve-e.ray.origin.y)/e.ray.direction.y;if(n<0)return null;let i=e.ray.origin.x+e.ray.direction.x*n,s=e.ray.origin.z+e.ray.direction.z*n,o=Math.floor(i/2+32/2),a=Math.floor(s/2+32/2);for(let l of this.base.bl){let c=q[l.t].w;if(o>=l.x&&o<l.x+c&&a>=l.y&&a<l.y+c)return l.id}return null}item(e){return this.items.get(e)}centerOf(e){let t=q[e.t].w;return new Lo(Ke(e.x+t/2),ve,Ke(e.y+t/2))}topOf(e){let t=this.items.get(e.id),n=q[e.t].w,i=e.t==="keep"?7:e.t==="wall"?2:q[e.t].cat==="trap"?1:e.t==="musket"?5:e.t==="cannon"||e.t==="mortar"?2.6:3.4,s=this.centerOf(e);return s.y+=i,s}aim(e,t,n,i=8){if(!e.head)return;let o=Math.PI/2-t-e.head.rotation.y;o=Math.atan2(Math.sin(o),Math.cos(o)),e.head.rotation.y+=o*Math.min(1,n*i)}update(e,t){this.t=t;for(let n of this.items.values())if(n.head&&!n.busy&&(n.head.rotation.y+=Math.sin(t*.3+n.o.x)*e*.25),n.scaf.visible&&(n.scaf.position.y=Math.abs(Math.sin(t*6))*.03),n.pulse>0){n.pulse=Math.max(0,n.pulse-e);let i=n.pulse*.5;n.g.scale.set(1+i*.3,1-i*.5*Math.abs(Math.sin(n.pulse*30)),1+i*.3)}}kill(e){let t=this.items.get(e);if(!t){this.breakWall(e);return}if(t.dead)return;t.dead=!0,t.body.visible=!1,t.head&&(t.head.visible=!1),t.scaf.visible=!1;let n=this.clone(this.M.rubble,t.w,!0);n.scale.multiplyScalar(.95),t.g.add(n),t.rubble=n}reveal(e){let t=this.items.get(e);t&&(t.g.visible=!0)}}});var vb,Do,Nl,em=We(()=>{It();Mn();Xs();vb={deckhand:.95,musketeer:.95,looter:.9,brute:1.55,monkey:.72,grenadier:1.18},Do=180,Nl=class{constructor(e,t){this.V=e,this.g=new vt,e.scene.add(this.g),this.mesh={},this.list=new Map,this.d=new ut,En.forEach((i,s)=>{let o=t["pirate_"+s],a=null,l=null;o.traverse(f=>{f.isMesh&&!a&&(a=f.geometry.clone(),f.updateWorldMatrix(!0,!1),l=f.material)});let c=new zt().setFromBufferAttribute(a.attributes.position),u=2.2/(c.max.y-c.min.y);a.translate(-(c.min.x+c.max.x)/2,-c.min.y,-(c.min.z+c.max.z)/2),a.scale(u,u,u);let d=new Zt(a,l,Do);d.count=0,d.castShadow=!0,d.frustumCulled=!1,d.instanceColor=new Ui(new Float32Array(Do*3).fill(1),3),this.mesh[i]=d,this.g.add(d)});let n=new Dr(.5,12);n.rotateX(-Math.PI/2),this.blob=new Zt(n,new St({color:0,transparent:!0,opacity:.28,depthWrite:!1}),Do*3),this.blob.count=0,this.blob.renderOrder=1,this.blob.frustumCulled=!1,this.g.add(this.blob)}clear(){this.list.clear();for(let e in this.mesh)this.mesh[e].count=0;this.blob.count=0}add(e){this.list.set(e.id,{u:e,px:e.x,py:e.y,x:e.x,y:e.y,ang:e.ang,flash:0,die:0,lunge:0,born:0,ph:Math.random()*6})}snap(){for(let e of this.list.values())e.px=e.x,e.py=e.y,e.x=e.u.x,e.y=e.u.y}post(){for(let e of this.list.values())e.x=e.u.x,e.y=e.u.y}hit(e){let t=this.list.get(e);t&&(t.flash=.18)}swing(e){let t=this.list.get(e);t&&(t.lunge=.3)}kill(e){let t=this.list.get(e);t&&(t.die=.001)}pos(e,t=1,n=new P){let i=this.list.get(e);return i?n.set(Ke(i.px+(i.x-i.px)*t),ve,Ke(i.py+(i.y-i.py)*t)):null}update(e,t,n=1){let i={};En.forEach(l=>i[l]=0);let s=0,o=this.d,a=new j;for(let[l,c]of this.list){let h=c.u;if(c.die>0&&(c.die+=e,c.die>.9)){this.list.delete(l);continue}let u=this.mesh[h.type];if(i[h.type]>=Do)continue;let d=i[h.type]++,f=Ke(c.px+(c.x-c.px)*n),m=Ke(c.py+(c.y-c.py)*n),x=Math.hypot(c.x-c.px,c.y-c.py)>.01&&!c.die,g=Math.PI/2-h.ang-c.ang;g=Math.atan2(Math.sin(g),Math.cos(g)),c.ang+=g*Math.min(1,e*12),c.born=Math.min(1,c.born+e*4),c.lunge=Math.max(0,c.lunge-e),c.flash=Math.max(0,c.flash-e);let b=vb[h.type]*(.4+.6*c.born)*(c.die?Math.max(.01,1-c.die*1.1):1),y=x?Math.abs(Math.sin(t*11+c.ph))*.18:0,_=Math.sin(Math.min(1,c.lunge/.3)*Math.PI)*.35;o.position.set(f+Math.sin(c.ang)*_,ve+y,m+Math.cos(c.ang)*_),o.rotation.set(c.die?-c.die*1.6:x?Math.sin(t*11+c.ph)*.08:0,c.ang,x?Math.sin(t*5.5+c.ph)*.1:0,"YXZ"),o.scale.setScalar(b),o.updateMatrix(),u.setMatrixAt(d,o.matrix),c.flash>0?a.setRGB(3,1.4,1.2):c.die?a.setRGB(.5,.5,.5):a.setRGB(1,1,1),u.setColorAt(d,a),s<this.blob.count+Do*3&&(o.position.set(f,ve+.06,m),o.rotation.set(0,0,0),o.scale.setScalar(b*1.45*(h.type==="brute"?1.3:1)),o.updateMatrix(),this.blob.setMatrixAt(s++,o.matrix))}for(let l in this.mesh){let c=this.mesh[l];c.count=i[l],c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0)}this.blob.count=s,this.blob.instanceMatrix.needsUpdate=!0}}});var ko,Ol,Uo,Fl,tm=We(()=>{It();Mn();Xs();gs();ko=P,Ol=.1,Uo=96,Fl=class{constructor(e,t,n,i,s){this.V=e,this.fx=t,this.bv=n,this.units=i,this.island=s,this.bt=null,this.speed=1,this.acc=0,this.on=!1;let o=new Ni(.32,10,8);this.ballM=new Zt(o,new kt({color:1841690,roughness:.35,metalness:.6}),Uo),this.ballM.count=0,this.ballM.frustumCulled=!1,this.ballM.castShadow=!0,e.scene.add(this.ballM),this.shotM=new Zt(new Ni(.13,6,4),new St({color:new j(3,2.4,1.2)}),Uo),this.shotM.count=0,this.shotM.frustumCulled=!1,e.scene.add(this.shotM),this.proj=[],this.d=new ut,this.zones=[];let a=new Fs(.92,1,48);a.rotateX(-Math.PI/2),this.ringG=a;let l=new Dr(1,48);l.rotateX(-Math.PI/2),this.discG=l,this.flag=null,this.lootAcc=new Map,this.onEvent=null}start(e,t,n={}){this.bt=e,this.base=t,this.on=!0,this.acc=0,this.speed=n.speed||1,this.replay=!!n.replay,this.ended=!1,this.onEnd=n.onEnd,this.evI=0,this.units.clear(),this.proj.length=0,this.zones.forEach(i=>this.V.scene.remove(i.m)),this.zones=[],this.lootAcc.clear(),this.shake=0,this.id=i=>t.bl[i].id}stop(){this.on=!1,this.bt=null,this.units.clear(),this.proj.length=0,this.ballM.count=0,this.shotM.count=0,this.zones.forEach(e=>this.V.scene.remove(e.m)),this.zones=[]}cpos(e,t,n=ve){return new ko(Ke(e),n,Ke(t))}bTop(e){let t=this.base.bl[e];return this.bv.topOf(t)}bCtr(e,t=1.5){let n=this.bt.bs[e];return this.cpos(n.cx,n.cy,ve+t)}shipPos(){return this.flagPos||new ko(0,0,58)}launch(e,t,n,i,s={}){this.proj.push({k:e,from:t.clone(),to:n?n.clone():null,uid:s.uid,t:0,tt:Math.max(.05,i),arc:s.arc||0,big:s.big||1,trail:s.trail}),this.proj.length>Uo&&this.proj.shift()}zone(e,t,n,i,s){let o=e==="heal"?7208842:e==="smoke"?14211288:16732224,a=new vt,l=new Be(this.ringG,new St({color:o,transparent:!0,opacity:.8,depthWrite:!1}));l.scale.setScalar(i*2),a.add(l);let c=new Be(this.discG,new St({color:o,transparent:!0,opacity:.16,depthWrite:!1}));c.scale.setScalar(i*2),a.add(c),a.position.copy(this.cpos(t,n,ve+.1)),a.renderOrder=3,this.V.scene.add(a),this.zones.push({k:e,m:a,life:s,t:0,x:t,y:n,r:i,pt:0})}update(e,t){let n=this.bt;if(!n||!this.on)return;if(n.over)this.acc=Ol,this.ended||(this.units.post(),this.events());else{this.acc+=e*this.speed;let c=0;for(;this.acc>=Ol&&c<12&&!n.over;)this.units.snap(),n.replayTick(),n.step(),this.acc-=Ol,c++,this.events();n.over&&(this.units.post(),this.events())}let i=n.over?1:Math.min(1,this.acc/Ol);this.units.update(e,t,i);for(let c of n.bs){if(c.dead||c.cat!=="def")continue;let h=this.bv.item(this.id(c.i));if(!h)continue;let u=c.tgt;u&&!u.dead?(h.busy=!0,this.bv.aim(h,Math.atan2(u.y-c.cy,u.x-c.cx),e,10)):h.busy=!1}let s=0,o=0,a=this.d,l=new ko;for(let c of this.proj){c.t+=e*this.speed;let h=Math.min(1,c.t/c.tt);if(c.uid!=null){let u=this.units.pos(c.uid,i);u&&(c.to=u,c.to.y+=.8)}if(!c.to){c.done=!0;continue}l.lerpVectors(c.from,c.to,h),l.y+=c.arc*4*h*(1-h),c.k==="shot"?o<Uo&&(a.position.copy(l),a.scale.setScalar(1),a.updateMatrix(),this.shotM.setMatrixAt(o++,a.matrix)):s<Uo&&(a.position.copy(l),a.scale.setScalar(c.big),a.updateMatrix(),this.ballM.setMatrixAt(s++,a.matrix),c.trail&&Math.random()<.6&&this.fx.trail(l,5261119,.5*c.big)),h>=1&&(c.done=!0)}this.proj=this.proj.filter(c=>!c.done),this.ballM.count=s,this.ballM.instanceMatrix.needsUpdate=!0,this.shotM.count=o,this.shotM.instanceMatrix.needsUpdate=!0;for(let c of this.zones){c.t+=e*this.speed;let h=1-c.t/c.life;if(c.m.children[0].material.opacity=.8*Math.min(1,h*3),c.m.children[1].material.opacity=.16*Math.min(1,h*3),c.m.rotation.y+=e,c.k==="smoke"&&(c.pt-=e,c.pt<=0)){c.pt=.12;let u=Math.random()*c.r,d=Math.random()*6.28;this.fx.puff(this.cpos(c.x+Math.cos(d)*u,c.y+Math.sin(d)*u,ve+.5),1,15262940,2.6,.8,.6,2.4)}if(c.k==="heal"&&(c.pt-=e,c.pt<=0)){c.pt=.15;let u=Math.random()*c.r,d=Math.random()*6.28;this.fx.sparkle(this.cpos(c.x+Math.cos(d)*u,c.y+Math.sin(d)*u,ve+.4),2,9109402,.4,.5)}c.t>=c.life&&(this.V.scene.remove(c.m),c.dead=!0)}if(this.zones=this.zones.filter(c=>!c.dead),this.onLoot)for(let[c,h]of this.lootAcc)h.t>.5?(this.onLoot(this.bCtr(c,4),h),this.lootAcc.delete(c)):h.t+=e}events(){let e=this.bt,t=this.fx,n=e.ev,i=this.V;for(;this.evI<n.length;this.evI++){let s=n[this.evI];switch(this.onEvent&&this.onEvent(s),s.e){case"deploy":{this.units.add(s.u);let o=this.cpos(s.u.x,s.u.y,ve+.3);t.puff(o,4,15787728,.9,.8,.6,.6),$.play("deploy",.5);break}case"ab":{let o=this.cpos(s.x,s.y,ve+.2);if(s.k==="shot"){let a=this.shipPos(),l=new ko(a.x,4,a.z);this.launch("ball",l,o,.8,{arc:14,big:2.2,trail:1}),t.muzzle(l,o.clone().sub(l).normalize()),$.play("cannon",1.2),this.flagFire=.5}s.k==="flare"&&(t.sparkle(o.clone().setY(ve+2),30,16734778,1.2,.9),t.shock(o,2.4,16734778),this.zone("flare",s.x,s.y,.9,9),$.play("whoosh")),s.k==="heal"&&(this.zone("heal",s.x,s.y,2.8,6),t.sparkle(o.clone().setY(ve+1),24,9109402,2,.7),$.play("pearl")),s.k==="smoke"&&(this.zone("smoke",s.x,s.y,3.4,8),t.puff(o.clone().setY(ve+.6),14,15658734,3,1,3,2.5),$.play("whoosh"));break}case"gun":{let o=this.base.bl.findIndex(c=>c.t==="keep"),a=o>=0?this.bTop(o):new ko(0,8,0),l=this.cpos(s.x,s.y,ve+.2);this.launch("ball",a,l,.7,{arc:6,big:1.8,trail:1}),t.muzzle(a,l.clone().sub(a).normalize()),$.play("cannon",1.3),i.shake(.2,.2);break}case"gunhit":{let o=this.cpos(s.x,s.y,ve+.3);t.explode(o,1.5),t.shock(o,s.r*2.2,16756832),$.play("boom"),i.shake(.35,.3);break}case"fire":{let o=e.bs[s.b],a=this.bTop(s.b),l=this.bv.item(this.id(s.b));if(s.k==="shell"){let c=this.cpos(s.x,s.y,ve+.2);this.launch("shell",a,c,s.tt,{arc:16,big:1.3,trail:1}),t.puff(a,5,10129544,1.2,1.6,.5,1),$.play("mortar",.8),setTimeout(()=>this.on&&$.play("whistle",.6),300),l&&(l.pulse=.25)}else{let c=this.units.pos(s.u)||this.cpos(o.cx,o.cy),h=c.clone().sub(a).normalize(),u=a.clone().addScaledVector(h,1.2);s.k==="ball"?(this.launch("ball",u,c,s.tt,{uid:s.u,arc:1.2,big:1,trail:1}),t.muzzle(u,h),$.play("cannon",.55),l&&(l.pulse=.2)):(this.launch("shot",u,c,s.tt,{uid:s.u}),t.sparkle(u,3,16769184,.3,.4),$.play("musket",.45))}break}case"shell":{let o=this.cpos(s.x,s.y,ve+.3);t.explode(o,1.1),t.shock(o,s.r*2.2,16752720),$.play("boom",.7),i.shake(.15,.2);break}case"bshot":{let o=this.cpos(s.x,s.y,ve+.3);t.explode(o,2),t.splinters(o,26),t.shock(o,4,16765056),$.play("boom",1.2),i.shake(.5,.35);break}case"ushot":{let o=this.units.pos(s.u);if(!o)break;o.y+=1;let a=this.bCtr(s.b,1.2);s.k==="grenadier"?(this.launch("ball",o,a,.6,{arc:3,big:.55}),$.play("whoosh",.5),setTimeout(()=>{this.on&&(t.explode(a,.7),$.play("mortar",.5))},600/this.speed)):(this.launch("shot",o,a,.15),$.play("musket",.25));break}case"swing":{if(this.units.swing(s.u),Math.random()<.35){let o=e.bs[s.b],a=this.units.pos(s.u);a&&t.sparkle(a.clone().lerp(this.bCtr(s.b,0),.4).setY(ve+1),2,16773824,.3,.35),$.play(o.cat==="wall"?"hitb":"sword",.5)}break}case"boom":{let o=this.cpos(s.x,s.y,ve+.4);t.explode(o,1),t.splinters(o,12),$.play("boom",.8),i.shake(.2,.2);break}case"bhit":{let o=this.bv.item(this.id(s.b));o&&!o.dead&&(o.pulse=Math.max(o.pulse||0,.1));let a=e.bs[s.b];if(a.loot&&this.onLoot){let l=this.lootAcc.get(s.b)||{g:0,w:0,r:0,p:0,t:0},c=s.v/a.max;for(let h of["g","w","r","p"])l[h]+=(a.loot[h]||0)*c;this.lootAcc.set(s.b,l)}break}case"bdie":{let o=e.bs[s.b],a=this.cpos(o.cx,o.cy,ve+1);this.bv.kill(this.id(s.b)),o.cat==="wall"?(t.splinters(a,10),t.puff(a,4,13152400,1,.8,.6),$.play("hitb",.8)):(t.explode(a,o.w/2.2),t.splinters(a,30),t.puff(a,16,12101776,2.4,1.6,o.w,1.8),t.shock(a.clone().setY(ve+.1),o.w*2.2,16767392),$.play("collapse"),i.shake(o.cat==="hq"?.8:.3,o.cat==="hq"?.5:.25),o.loot&&t.coinBurst(a.clone().setY(ve+2),10,7));break}case"uhit":this.units.hit(s.u);break;case"udie":{this.units.kill(s.u.id);let o=this.cpos(s.u.x,s.u.y,ve+.6);t.puff(o,5,14735560,.7,.7,.5,.8),$.play("die",.5);break}case"trapseen":this.bv.reveal(this.id(s.b));break;case"trap":{let o=this.cpos(s.x,s.y,ve+.3);s.k==="keg"?(t.explode(o,1.6),t.shock(o,4,16744512),$.play("boom",1),i.shake(.4,.3)):(t.splinters(o,14),$.play("trap")),this.bv.kill(this.id(s.b));break}case"end":this.ended=!0,this.onEnd&&setTimeout(()=>this.onEnd(e),900);break}}}}});function No(r,e=null){let t=new Int32Array(1024).fill(-1);return r.bl.forEach((n,i)=>{if(n===e)return;let s=q[n.t].w;for(let o=n.y;o<n.y+s;o++)for(let a=n.x;a<n.x+s;a++)t[o*32+a]=i}),t}function Bl(r,e,t,n,i=null,s=null){let o=q[e].w;if(!cd(t,n,o))return!1;s=s||No(r,i);for(let a=n;a<n+o;a++)for(let l=t;l<t+o;l++)if(s[a*32+l]>=0)return!1;return!0}function Yn(r){let e={g:0,w:0,r:0,p:0},t=Qt(r);for(let n of r.bl){let i=q[n.t],s=n.lv;n.t==="keep"?Ye.forEach(o=>e[o]+=i.store[s-1]):n.t==="vault"&&s>0?e.g+=i.store[s-1]:n.t==="store"&&s>0&&(e.w+=i.store[s-1],e.r+=i.store[s-1],e.p+=Math.round(i.store[s-1]*.4))}return e}function qs(r,e){return q[r].cost[e-1]||{}}function qr(r,e){return Ye.every(t=>(r[t]||0)>=(e[t]||0))}function Fo(r,e){Ye.forEach(t=>r[t]=(r[t]||0)-(e[t]||0))}function Xi(r,e,t=!1){let n=r.at||e,i=Math.max(0,Math.min(e-n,3*86400));r.at=e;let s=Yn(r);for(let o of r.bl){o.up&&o.up<=e&&(o.lv++,o.up=0,r.done=(r.done||0)+1,r.onDone&&r.onDone(o));let a=bb(o);if(!a)continue;let l=q[o.t].res;t?r.res[l]=Math.min(s[l],(r.res[l]||0)+a*i):o.acc=Math.min(Mb(o),(o.acc||0)+a*i)}return i}function sm(r,e){let t=q[e.t].res,n=Yn(r),i=Math.max(0,n[t]-r.res[t]),s=Math.min(i,Math.floor(e.acc||0));return r.res[t]+=s,e.acc=(e.acc||0)-s,s}function $i(r){let e=Yn(r),t=[],n={};for(let i of r.bl){let s={},o=q[i.t];if(i.t==="keep")Ye.forEach(a=>s[a]=.1*(r.res[a]||0)*o.store[i.lv-1]/Math.max(1,e[a]));else if(o.cat==="store"&&i.lv>0)for(let a of i.t==="vault"?["g"]:["w","r","p"]){let l=i.t==="store"&&a==="p"?o.store[i.lv-1]*.4:o.store[i.lv-1];s[a]=.2*(r.res[a]||0)*l/Math.max(1,e[a])}else o.cat==="res"&&(s[o.res]=.5*(i.acc||0));Ye.forEach(a=>{s[a]?s[a]=Math.floor(s[a]):delete s[a]}),t.push(s)}return t}function Yr(r){let e=0;for(let t of r.bl){let n=q[t.t];t.lv<1||(n.cat==="def"?e+=n.dmg[t.lv-1]/n.rate*(n.splash?2.2:1)*10+n.hp[t.lv-1]*.05:n.cat==="wall"?e+=n.hp[t.lv-1]*.02:n.cat==="trap"?e+=n.dmg[t.lv-1]*.1:e+=n.hp[t.lv-1]*.03)}return Math.round(e)}function Ys(r){let e=$s(r);return Math.round(ys(r)*14*Math.pow(1.19,e-1)+Oo(r)*40)}function Hl(r="You"){let e=4+24/2,t=[{t:"keep",x:e-2,y:e-2,lv:1},{t:"mine",x:e-7,y:e+3,lv:1,acc:300},{t:"lumber",x:e+4,y:e+3,lv:1,acc:300},{t:"vault",x:e-6,y:e-4,lv:1},{t:"store",x:e+3,y:e-6,lv:1},{t:"tavern",x:e-2,y:e+5,lv:1},{t:"shipyard",x:e-2,y:24,lv:1},{t:"cannon",x:e+4,y:e-1,lv:1},{t:"still",x:e-7,y:e,lv:1}];return t.forEach(n=>{n.id=yi(),n.acc=n.acc||0}),{name:r,bl:t,res:{g:1200,w:1200,r:400,p:100},army:{deckhand:10,musketeer:4},trophies:0,builders:2}}function Bo(r){return JSON.parse(JSON.stringify(r))}var _b,yi,Qt,cd,Xr,hd,bb,Mb,ys,$s,Oo,nm,$r,zl,im,rm,Ks=We(()=>{Mn();_b=1,yi=()=>(_b++&16777215)+Math.floor(Math.random()*1e6)*16777216,Qt=r=>(r.bl.find(e=>e.t==="keep")||{lv:1}).lv,cd=(r,e,t)=>r>=4&&e>=4&&r+t<=28&&e+t<=28;Xr=(r,e)=>r.bl.reduce((t,n)=>t+(n.t===e?1:0),0),hd=(r,e)=>ai[e][Qt(r)-1];bb=r=>q[r.t].prod&&r.lv>0&&!r.up?q[r.t].prod[r.lv-1]/3600:0,Mb=r=>q[r.t].prod?q[r.t].prod[Math.max(0,r.lv-1)]*8:0,ys=r=>{let e=r.bl.find(t=>t.t==="tavern");return e?q.tavern.cap[Math.max(1,e.lv)-1]:0},$s=r=>{let e=r.bl.find(t=>t.t==="tavern");return e?Math.max(1,e.lv):1},Oo=r=>{let e=r.bl.find(t=>t.t==="shipyard");return e?Math.max(1,e.lv):1},nm=r=>Object.keys(r||{}).reduce((e,t)=>e+(r[t]||0)*bt[t].sp,0),$r=(r,e)=>$s(r)>=bt[e].tl;zl=r=>r.builders||2,im=r=>r.bl.filter(e=>e.up).length;rm=r=>r.reduce((e,t)=>(Ye.forEach(n=>e[n]+=t[n]||0),e),{g:0,w:0,r:0,p:0})});function zo(r,e,t=1,n=null){let i=ci(t),s=r.bl,o=s.find(y=>y.t==="keep"),a={hq:0,store:1,def:2,army:4,res:3,wall:9,trap:10},l=s.slice().sort((y,_)=>a[q[y.t].cat]-a[q[_.t].cat]||q[_.t].w-q[y.t].w),c=[],h=new Int32Array(1024).fill(-1),u=(y,_,A)=>{y.x=_,y.y=A;let T=q[y.t].w;for(let M=A;M<A+T;M++)for(let R=_;R<_+T;R++)h[M*32+R]=1;c.push(y)},d=(y,_,A,T)=>{if(!cd(y,_,A))return!1;for(let M=_-T;M<_+A+T;M++)for(let R=y-T;R<y+A+T;R++)if(!(R<0||M<0||R>=32||M>=32)&&h[M*32+R]>=0)return!1;return!0},f=y=>{let _=q[y.t].cat,A=e;return _==="hq"?0:_==="store"?A.def>.7?3.5:A.greed>.8?3:5:_==="def"?y.t==="mortar"?3.5:A.def>.7?5.5:6.5:_==="army"?9:_==="res"?A.econ>.8?7:9.5:6},m=[],x=(y,_)=>{if(!n)return 0;let A=0,T=Math.atan2(_,y);for(let M=0;M<8;M++)if(n[M]){let R=M/8*Math.PI*2;A+=n[M]*Math.cos(T-R)}return A};for(let y of l){let _=q[y.t];if(_.cat==="wall"||_.cat==="trap")continue;let A=_.w,T=null,M=-1e9,R=f(y)*(1+(i()-.5)*.15);for(let D=4;D<=28-A;D++)for(let v=4;v<=28-A;v++){if(!d(v,D,A,_.cat==="hq"?0:1))continue;let S=v+A/2-Xt,I=D+A/2-Xt,O=Math.hypot(S,I),F=-Math.abs(O-R)*2+i()*1.2;if(_.cat==="def"){for(let Y of m){let z=Math.hypot(Y.x-(v+A/2),Y.y-(D+A/2));F-=Math.max(0,6-z)*1.6}F+=x(S,I)*1.5}_.cat==="store"&&e.sneak>.8&&(F+=i()*2),(_.cat==="army"||_.cat==="res")&&(F-=Math.abs(Math.abs(S)-Math.abs(I))*.05),F>M&&(M=F,T=[v,D])}if(!T)for(let D=4;D<=28-A&&!T;D++)for(let v=4;v<=28-A&&!T;v++)d(v,D,A,0)&&(T=[v,D]);T?(u(y,T[0],T[1]),_.cat==="def"&&m.push({x:T[0]+A/2,y:T[1]+A/2})):y.x=y.y=-100}let p=s.filter(y=>y.t==="wall"),g=0;if(p.length){let y=c.filter(I=>I.t==="keep"||q[I.t].cat==="store"||q[I.t].cat==="def"&&Math.hypot(I.x+q[I.t].w/2-Xt,I.y+q[I.t].w/2-Xt)<(e.def>.7?7:5)),_=99,A=99,T=0,M=0;y.forEach(I=>{let O=q[I.t].w;_=Math.min(_,I.x),A=Math.min(A,I.y),T=Math.max(T,I.x+O),M=Math.max(M,I.y+O)});let R=(I,O,F,Y)=>{let z=[];for(let ee=I;ee<=F;ee++)z.push([ee,O]),z.push([ee,Y]);for(let ee=O+1;ee<Y;ee++)z.push([I,ee]),z.push([F,ee]);return z},D=R(Math.max(4,_-1),Math.max(4,A-1),Math.min(27,T),Math.min(27,M)),v=n?n.indexOf(Math.max(...n))/8*Math.PI*2:i()*6.28;D.sort((I,O)=>Math.cos(Math.atan2(O[1]-Xt,O[0]-Xt)-v)-Math.cos(Math.atan2(I[1]-Xt,I[0]-Xt)-v)),(p.length>=D.length*.85||e.def>.7)&&D.sort((I,O)=>Math.atan2(I[1]-Xt,I[0]-Xt)-Math.atan2(O[1]-Xt,O[0]-Xt));let S=R(Math.max(4,_-5),Math.max(4,A-5),Math.min(27,T+4),Math.min(27,M+4));for(let[I,O]of D.concat(S)){if(g>=p.length)break;h[O*32+I]>=0||u(p[g++],I,O)}for(;g<p.length;g++){let I=!1;for(let O=0;O<400&&!I;O++){let F=4+Math.floor(i()*24),Y=4+Math.floor(i()*24);h[Y*32+F]<0&&d(F,Y,1,0)&&(u(p[g],F,Y),I=!0)}I||(p[g].x=p[g].y=-100)}}let b=s.filter(y=>q[y.t].cat==="trap");for(let y of b){let _=null,A=-1e9;for(let T=0;T<160;T++){let M=4+Math.floor(i()*24),R=4+Math.floor(i()*24);if(h[R*32+M]>=0)continue;let D=i();for(let v of c){let S=q[v.t].cat;if(S==="wall"||S==="trap")continue;let I=Math.hypot(v.x+q[v.t].w/2-M,v.y+q[v.t].w/2-R);I<3.2&&(D+=(S==="store"?1.5*(e.sneak+.3):S==="def"?1:S==="hq"?1.2:.3)*(3.2-I))}D>A&&(A=D,_=[M,R])}_?u(y,_[0],_[1]):y.x=y.y=-100}return r.bl=s.filter(y=>y.x>-50),r}function Sb(r,e,t={},n=Math.random){let i=Qt(r),s=[],o=am(e),a=Yn(r),l=(c,h,u,d)=>{let f=qs(h,d);if(Ye.some(p=>(f[p]||0)>a[p]))return;let m=o[q[h].cat]*(1+(t[h]||0)),x=(f.g||0)+(f.w||0)+1;if(m*=1/Math.pow(x,.25),h==="keep"){let p=r.bl.filter(g=>g.t!=="wall"&&g.t!=="trap").reduce((g,b)=>g+b.lv,0)/r.bl.length;m*=p>=i-.6?2.5:.15}s.push({kind:c,t:h,o:u,lvTo:d,c:f,w:m*(.6+n()*.8)})};for(let c in q)Xr(r,c)<ai[c][i-1]&&l("new",c,null,1);for(let c of r.bl){if(c.up)continue;let h=c.t==="keep"?oi:i;c.lv<h&&l("up",c.t,c,c.lv+1)}return s.sort((c,h)=>h.w-c.w),s}function lm(r,e,t,n,i,s=1){let o=0;for(let a=0;a<6&&!(r.bl.filter(h=>h.up).length>=(r.builders||2));a++){let l=Sb(r,e,n,i),c=l.find(h=>qr(r.res,h.c));if(!c||l[0]!==c&&l[0].w>c.w*1.8&&i()<.7)break;if(Fo(r.res,c.c),c.kind==="new"){let h={id:yi(),t:c.t,x:-1,y:-1,lv:0,up:t+q[c.t].time[0]*s,acc:0};r.bl.push(h),r.dirty=!0,q[c.t].time[0]<=0&&(h.lv=1,h.up=0)}else{let h=q[c.t].time[c.lvTo-1]*s;h<=0?c.o.lv++:c.o.up=t+h,c.t==="keep"&&(r.dirty=!0)}o++}return o}function cm(r,e,t,n,i=.8){let s=r.bl.find(a=>a.t==="keep");s.lv=t;let o={};for(let a in q){if(a==="keep")continue;let l=ai[a][t-1]-Xr(r,a);for(let c=0;c<l;c++)r.bl.push({id:yi(),t:a,x:-1,y:-1,lv:1,acc:0})}for(let a of r.bl)if(a.t!=="keep"){let l=am(e)[q[a.t].cat],c=Math.max(1,Math.min(t,Math.round(t*i*(.75+l*.25)+(n()-.5)*1.4)));a.lv=Math.max(a.lv,c)}return r}function hm(r){let e=$i(r),t=new Float32Array(1024),n=No(r),i=0,s=0,o=0,a=0,l=0,c=[];r.bl.forEach((x,p)=>{let g=q[x.t],b=e[p],y=(b.g||0)+(b.w||0)+(b.r||0)*1.2+(b.p||0)*2;if(l+=y,y>0&&c.push({x:x.x+g.w/2,y:x.y+g.w/2,v:y,o:x}),g.cat==="wall"&&i++,g.cat==="def"&&x.lv>0){s++;let _=g.dmg[x.lv-1]/g.rate*(g.splash?2.5:1);a+=_,g.splash&&o++;let A=x.x+g.w/2,T=x.y+g.w/2;for(let M=0;M<32;M++)for(let R=0;R<32;R++){let D=Math.hypot(R+.5-A,M+.5-T);D<=g.range&&D>=(g.minR||0)&&(t[M*32+R]+=_)}}});let h=r.bl.find(x=>x.t==="keep"),u=h?h.x+2:Xt,d=h?h.y+2:Xt,f=wb.map(([x,p],g)=>{let b=Xt,y=Xt,_=null;for(let F=32*.72;F>0;F-=.5){let Y=Xt+x*F,z=Xt+p*F,ee=Math.floor(Y),W=Math.floor(z);if(ee<0||W<0||ee>=32||W>=32)continue;let ue=!1;for(let le=W-1;le<=W+1;le++)for(let pe=ee-1;pe<=ee+1;pe++)pe>=0&&le>=0&&pe<32&&le<32&&n[le*32+pe]>=0&&(ue=!0);if(ue)break;_=[Y,z]}_&&(b=_[0],y=_[1]);let A=0,T=0,M=0,R=u-b,D=d-y,v=Math.hypot(R,D)||1;for(let F=0;F<=v;F+=.5){let Y=Math.floor(b+R/v*F),z=Math.floor(y+D/v*F);if(Y<0||z<0||Y>=32||z>=32)continue;A+=t[z*32+Y],M++;let ee=n[z*32+Y];ee>=0&&r.bl[ee].t==="wall"&&T++}let S=0,I=Math.hypot(u-b,d-y);for(let F of c){let Y=Math.hypot(F.x-b,F.y-y);S+=F.v/(1+Y*.25)}let O=t[Math.floor(y)*32+Math.floor(b)]||0;return{s:g,ex:b,ey:y,thr:A/Math.max(1,M),wc:T,val:S,kd:I,edge:O}}),m=c.reduce((x,p)=>x+(t[Math.floor(p.y)*32+Math.floor(p.x)]<a*.2?p.v:0),0);return{cov:t,sides:f,walls:i,defs:s,splash:o,dps:a,loot:l,exposed:l?m/l:0,kx:u,ky:d,nb:r.bl.length}}function dm(r,e,t,n,i=Math.random,s="stars"){let o=t.p,a=ys(r),l=(n.learn||{})[um(e)]||{},c=Math.min(1,e.walls/40),h=Math.min(1,e.splash/3),u=Math.min(1.5,e.defs/6),d={deckhand:1-h*.5,musketeer:.9-h*.4+u*.2,looter:(.2+e.exposed*2)*(s==="loot"?1.8:.6)*(.5+o.greed),brute:.45+u*.7,monkey:e.walls<4?0:.25+c*1.6,grenadier:.4+Math.min(1,e.nb/40)*.8+h*.3},f={},m=0;for(let b of En)$r(r,b)&&(f[b]=Math.max(0,d[b]*(t.mix[b]||1)*Math.exp(l[b]||0)*(.85+i()*.3)),m+=f[b]);let x={},p=0;for(let b in f){let y=f[b]/m*a,_=Math.floor(y/bt[b].sp);x[b]=_,p+=_*bt[b].sp}x.monkey===1&&(x.monkey=0,p-=2);let g=$r(r,"musketeer")&&i()<.5?"musketeer":"deckhand";for(;p+1<=a;)x[g]=(x[g]||0)+1,p++;for(let b in x)x[b]||delete x[b];return x}function Tb(r,e,t){let n=null,i=1e9;for(let s=0;s<10&&!n;s++)for(let o=-s;o<=s;o++)for(let a=-s;a<=s;a++){let l=e+a,c=t+o;if(r.canDeploy(l,c)){let h=Math.hypot(a,o);h<i&&(i=h,n=[Math.floor(l)+.5,Math.floor(c)+.5])}}return n}function fm(r,e,t,n,i,s=Math.random,o="stars"){var b;let a=t.p,l=(n.targets||{})[i]||{},c=r.sides.map(y=>{let _=(o==="loot"?y.val/Math.max(1,r.loot)*6:0)-y.thr/Math.max(1,r.dps)*(2+a.caution*4)-y.wc*(e.monkey?.15:.6)-y.kd*.05-y.edge*.02+s()*.8;return l.side===y.s&&(_+=l.stars>=2?1.2:-2.5),{sd:y,s:_}}).sort((y,_)=>_.s-y.s),h=c[0].sd,u=(y,_)=>{let A=Math.abs(y-_)%8;return Math.min(A,8-A)},d=((b=c.slice(1,6).filter(y=>u(y.sd.s,h.s)>=2).sort((y,_)=>_.sd.val-y.sd.val)[0])==null?void 0:b.sd)||c[1].sd,f=[],m=1+s()*2+(a.sneak>.8?3+s()*6:0),x=(y,_,A)=>{let T=y.s/8*Math.PI*2+Math.PI/2,M=(_-(A-1)/2)*(A>6?.55:.8);return[y.ex+Math.cos(T)*M,y.ey+Math.sin(T)*M]},p=(y,_,A,T,M=1)=>{for(let R=0;R<_;R++){let[D,v]=x(A,R*M,_*M);f.push({t:T+R*.15,u:y,x:D,y:v})}},g=m;return e.brute&&(p("brute",e.brute,h,g),g+=2.2),e.monkey&&(p("monkey",e.monkey,h,g),g+=1.5),e.grenadier&&(p("grenadier",e.grenadier,h,g),g+=1.2),e.deckhand&&(p("deckhand",e.deckhand,h,g),g+=.8),e.musketeer&&(p("musketeer",e.musketeer,h,g+1),g+=1.5),e.looter&&p("looter",e.looter,a.sneak>.5||o==="loot"?d:h,g+(a.sneak>.5?4:1)),f.sort((y,_)=>y.t-_.t),{side:h.s,alt:d.s,steps:f,goal:o}}function pm(r,e,t){let n=0,i=e.p,s=-9;return o=>{for(;n<r.steps.length&&r.steps[n].t<=o.t;){let p=r.steps[n++],g=Tb(o,p.x,p.y);g&&o.deploy(p.u,g[0],g[1])}let a=o.units.filter(p=>!p.dead);if(!a.length||o.t-s<2.5)return;let l=0,c=0,h=0;a.forEach(p=>{l+=p.x,c+=p.y,h+=p.hp/p.max}),l/=a.length,c/=a.length,h/=a.length;let u=o.bs.filter(p=>!p.dead&&p.cat==="def"),d=null,f=-1;for(let p of u){let g=Math.hypot(p.cx-l,p.cy-c),b=q[p.t],y=b.dmg[p.lv-1]/b.rate*(b.splash?2:1)*(p.hp/p.max<.4?.3:1)/(1+Math.max(0,g-b.range)*.5);y>f&&(f=y,d=p)}let m=p=>o.abCost(p);if(h<.55&&a.length>=3&&o.energy>=m("heal")){o.ability("heal",l,c),s=o.t;return}if(d&&Math.hypot(d.cx-l,d.cy-c)<q[d.t].range+2){if(o.energy>=m("smoke")+2&&q[d.t].splash&&a.length>6){o.ability("smoke",d.cx,d.cy),s=o.t;return}if(o.energy>=m("shot")){o.ability("shot",d.cx,d.cy),s=o.t;return}}let x=o.bs.find(p=>p.cat==="hq"&&!p.dead);x&&r.goal==="stars"&&o.t>25&&o.energy>=m("flare")+3&&i.aggr>.5&&Math.hypot(x.cx-l,x.cy-c)>6&&Eb(o)<.15&&(o.ability("flare",x.cx,x.cy+2.6),s=o.t)}}function mm(r,e,t,n,i,s){r.learn=r.learn||{};let o=um(e),a=r.learn[o]=r.learn[o]||{},l=Object.values(t).reduce((u,d)=>u+d,0)||1,c=Object.keys(t).length||1,h=n.stars/3*.7+n.pct/100*.3-.5;for(let u in t){let d=t[u]/l;a[u]=Math.max(-1.5,Math.min(1.5,(a[u]||0)+.8*h*(d-1/c)))}r.targets=r.targets||{},r.targets[i]={side:s,stars:n.stars,pct:n.pct}}function gm(r,e,t,n){r.threat=r.threat||[0,0,0,0,0,0,0,0],r.threat=r.threat.map(u=>u*.7),r.threat[n]+=1+e.stars*.5,r.adapt=r.adapt||{};let i=r.adapt,s=Object.values(t).reduce((u,d)=>u+d,0)||1,o=((t.deckhand||0)+(t.musketeer||0)+(t.looter||0))/s,a=((t.brute||0)*5+(t.grenadier||0)*4)/(s+4),l=(t.looter||0)/s,c=(t.monkey||0)/s,h=(u,d)=>i[u]=Math.max(-.5,Math.min(1.5,(i[u]||0)*.85+d*.35));h("mortar",o*1.5),h("cannon",a*1.5),h("vault",l),h("store",l),h("keg",o+l),h("spike",a),h("wall",c?-.3:.2),h("musket",.3)}var Zs,Mt,Xt,wb,om,am,um,Eb,ud=We(()=>{Mn();Ks();Zs=[{id:"bram",name:"Blackbeard Bram",title:"the Reaver",kind:"Aggressive",theme:"volcano",col:"#e0482f",flag:0,p:{aggr:.95,def:.35,greed:.5,sneak:.2,venge:.9,caution:.15,econ:.4},mix:{brute:1.3,deckhand:1.1,musketeer:.7,looter:.3,monkey:1,grenadier:1.1},quote:["Your walls are kindling!","I'll be back for more, whelp.","Ha! Too slow!"]},{id:"isolde",name:"Iron Isolde",title:"the Bastion",kind:"Turtle",theme:"frost",col:"#7fb8ff",flag:1,p:{aggr:.3,def:1,greed:.4,sneak:.4,venge:.5,caution:.8,econ:.5},mix:{brute:1.2,deckhand:.6,musketeer:1.1,looter:.3,monkey:1.2,grenadier:1.2},quote:["My walls have never fallen.","Patience wins wars.","You will break on my stones."]},{id:"gus",name:"Goldtooth Gus",title:"the Greedy",kind:"Greedy",theme:"cove",col:"#ffcf3a",flag:2,p:{aggr:.7,def:.3,greed:1,sneak:.35,venge:.4,caution:.5,econ:.9},mix:{brute:.6,deckhand:.8,musketeer:.8,looter:1.8,monkey:.7,grenadier:.5},quote:["Thanks for the gold, matey!","Shiny shiny shiny...","Every coin counts!"]},{id:"sable",name:"Sly Sable",title:"the Shadow",kind:"Sneaky",theme:"jungle",col:"#9c6bff",flag:3,p:{aggr:.6,def:.5,greed:.7,sneak:1,venge:.6,caution:.7,econ:.6},mix:{brute:.7,deckhand:.7,musketeer:1.2,looter:1.3,monkey:1.1,grenadier:.8},quote:["You never saw me coming.","Mind the traps, darling.","Shadows take what they want."]},{id:"redd",name:"Captain Redd",title:"the Fair",kind:"Balanced",theme:"cove",col:"#ff6a5a",flag:0,p:{aggr:.55,def:.6,greed:.55,sneak:.4,venge:.55,caution:.5,econ:.6},mix:{brute:1,deckhand:1,musketeer:1,looter:.7,monkey:.9,grenadier:.9},quote:["A fair fight, captain.","Well sailed.","The sea decides."]},{id:"morgan",name:"Mad Morgan",title:"the Storm",kind:"Reckless",theme:"volcano",col:"#ff8a1e",flag:2,p:{aggr:1,def:.2,greed:.6,sneak:.1,venge:1,caution:0,econ:.3},mix:{brute:.8,deckhand:1.5,musketeer:1,looter:.6,monkey:.8,grenadier:1.4},quote:["BOOM! Hahaha!","More powder! MORE!","Chaos is a ladder, mate."]},{id:"frost",name:"Lady Frost",title:"the Cold",kind:"Trapper",theme:"frost",col:"#c8f2ff",flag:1,p:{aggr:.45,def:.85,greed:.5,sneak:.85,venge:.7,caution:.65,econ:.5},mix:{brute:.9,deckhand:.7,musketeer:1.3,looter:.8,monkey:1,grenadier:1.1},quote:["Cold and patient.","Step lightly.","Revenge is best served frozen."]},{id:"silas",name:"Old Salt Silas",title:"the Merchant",kind:"Economist",theme:"jungle",col:"#6fe08a",flag:3,p:{aggr:.35,def:.55,greed:.8,sneak:.3,venge:.3,caution:.75,econ:1},mix:{brute:.8,deckhand:.9,musketeer:1,looter:1.4,monkey:.8,grenadier:.8},quote:["Business, nothing personal.","A fine trade.","Profit is the only flag I fly."]}],Mt=r=>Zs.find(e=>e.id===r),Xt=4+24/2,wb=Array.from({length:8},(r,e)=>{let t=e/8*Math.PI*2;return[Math.cos(t),Math.sin(t)]}),om=(r,e)=>{let t=Math.atan2(e-Xt,r-Xt);return(Math.round(t/(Math.PI/4))%8+8)%8};am=r=>({hq:.9+r.econ*.2,res:.5+r.econ*.8,store:.5+r.greed*.3+r.def*.2,def:.6+r.def*1.1,wall:.3+r.def*.8,army:.4+r.aggr*.9,trap:.1+r.sneak*.9});um=r=>(r.walls>20?"W":"w")+(r.splash>=2?"S":"s")+(r.defs>=5?"D":"d");Eb=r=>r.R()});function xm(r,e,t){let n=Math.max(8,Math.min(48,Math.round(28+(e-r)/14))),i=Math.max(6,Math.min(40,Math.round(20+(r-e)/18)));return t>0?Math.round(n*t/3):-i}var Ho,Ab,qi,js,dd=We(()=>{Mn();Ks();Ho=.1,Ab=7,qi=(r,e,t)=>{let n=Math.max(t.x-r,0,r-(t.x+t.w)),i=Math.max(t.y-e,0,e-(t.y+t.w));return Math.hypot(n,i)},js=class{constructor(e,t={}){this.base=e,this.seed=t.seed||1,this.R=ci(this.seed),this.t=0,this.atkLv=t.atkLv||1,this.shipLv=t.shipLv||1,this.energy=t.energy!=null?t.energy:q.shipyard.energy[this.shipLv-1],this.uses={shot:0,flare:0,heal:0,smoke:0},this.army=Object.assign({},t.army||{}),this.log=[],this.ev=[],this.units=[],this.proj=[],this.zones=[],this.loot={g:0,w:0,r:0,p:0},this.stars=0,this.pct=0,this.keepDead=!1,this.over=!1,this.started=!1,this.uid=0,this.ctl=t.ctl||null,this.lastCtl=-1,this.guns=t.guns||0,this.gunDmg=70*Math.pow(1.3,Qt(e)-1);let n=$i(e);this.bs=e.bl.map((i,s)=>{let o=q[i.t],a=Math.max(1,i.lv),l=o.cat==="trap"?1:o.hp[a-1];return{i:s,t:i.t,cat:o.cat,x:i.x,y:i.y,w:o.w,cx:i.x+o.w/2,cy:i.y+o.w/2,lv:a,hp:l,max:l,dead:!1,cd:0,tgt:null,loot:n[s],lootF:0,armed:o.cat==="trap",fuse:-1}}),this.total=this.bs.filter(i=>i.cat!=="wall"&&i.cat!=="trap").length,this.destroyed=0,this.grid=new Int32Array(1024).fill(-1),this.bs.forEach(i=>{if(i.cat!=="trap")for(let s=i.y;s<i.y+i.w;s++)for(let o=i.x;o<i.x+i.w;o++)this.grid[s*32+o]=i.i}),this.red=new Uint8Array(1024),this.bs.forEach(i=>{if(!(i.cat==="trap"||i.cat==="wall"))for(let s=i.y-1;s<i.y+i.w+1;s++)for(let o=i.x-1;o<i.x+i.w+1;o++)o>=0&&s>=0&&o<32&&s<32&&(this.red[s*32+o]=1)}),this.bs.forEach(i=>{i.cat==="wall"&&(this.red[i.y*32+i.x]=1)}),this._g=new Float32Array(1024),this._p=new Int32Array(1024),this._c=new Uint8Array(1024)}emit(e){e.t=this.t,this.ev.push(e)}canDeploy(e,t){let n=Math.floor(e),i=Math.floor(t);return n>=0&&i>=0&&n<32&&i<32&&!this.red[i*32+n]}deploy(e,t,n,i=!0){if(this.over||!(this.army[e]>0)||!this.canDeploy(t,n))return null;this.army[e]--,this.started=!0;let s=bt[e],o=sd(this.atkLv),a={id:++this.uid,type:e,x:t,y:n,ox:(this.R()-.5)*.7,oy:(this.R()-.5)*.7,hp:s.hp*o.hp,max:s.hp*o.hp,dmg:s.dmg*o.dmg,cd:.3+this.R()*.3,tgt:null,wall:null,path:null,pi:0,flare:null,state:"walk",ang:0,dead:!1,born:this.t};return this.units.push(a),i&&this.log.push({t:+this.t.toFixed(1),k:"u",u:e,x:+t.toFixed(2),y:+n.toFixed(2)}),this.emit({e:"deploy",u:a}),a}abCost(e){return Math.max(1,Ws[e].cost-(this.abDisc||0))+Ws[e].inc*this.uses[e]}ability(e,t,n,i=!0){if(this.over)return!1;let s=this.abCost(e);return this.energy<s?!1:(this.energy-=s,this.uses[e]++,this.started=!0,i&&this.log.push({t:+this.t.toFixed(1),k:"a",a:e,x:+t.toFixed(2),y:+n.toFixed(2)}),e==="shot"&&this.proj.push({k:"bshot",x:t,y:n,at:this.t+.8,dmg:Yp(this.shipLv)}),e==="flare"&&this.units.forEach(o=>{o.dead||(o.flare={x:t,y:n,until:this.t+9},o.tgt=null,o.wall=null,o.path=null)}),e==="heal"&&this.zones.push({k:e,x:t,y:n,r:2.8,until:this.t+6,hps:32*sd(this.atkLv).hp}),e==="smoke"&&this.zones.push({k:e,x:t,y:n,r:3.4,until:this.t+8}),this.emit({e:"ab",k:e,x:t,y:n}),!0)}gun(e,t,n=!0){return this.over||this.guns<=0?!1:(this.guns--,n&&this.log.push({t:+this.t.toFixed(1),k:"d",x:+e.toFixed(2),y:+t.toFixed(2)}),this.proj.push({k:"gun",x:e,y:t,at:this.t+.7,dmg:this.gunDmg,r:1.9}),this.emit({e:"gun",x:e,y:t}),!0)}smoked(e,t){for(let n of this.zones)if(n.k==="smoke"&&Math.hypot(n.x-e,n.y-t)<n.r)return!0;return!1}alive(){return this.units.some(e=>!e.dead)}left(){return Object.values(this.army).reduce((e,t)=>e+t,0)}path(e,t,n){let i=this._g,s=this._p,o=this._c;i.fill(1e9),o.fill(0),s.fill(-1);let a=Math.min(31,Math.max(0,Math.floor(e.x))),c=Math.min(31,Math.max(0,Math.floor(e.y)))*32+a;i[c]=0;let h=[c],u=t.cx,d=t.cy,f=b=>Math.max(0,qi(b%32+.5,(b/32|0)+.5,t)-n),m=[f(c)],x=-1,p=0;for(;h.length&&p++<4e3;){let b=0;for(let T=1;T<h.length;T++)m[T]<m[b]&&(b=T);let y=h[b];if(h[b]=h[h.length-1],h.pop(),m[b]=m[m.length-1],m.pop(),o[y])continue;o[y]=1;let _=y%32,A=y/32|0;if(qi(_+.5,A+.5,t)<=n+.35){x=y;break}for(let T=-1;T<=1;T++)for(let M=-1;M<=1;M++){if(!M&&!T)continue;let R=_+M,D=A+T;if(R<0||D<0||R>=32||D>=32)continue;let v=D*32+R;if(o[v])continue;let S=this.cellCost(v,t);if(S<0||M&&T&&(this.cellCost(A*32+R,t)<0||this.cellCost(D*32+_,t)<0))continue;let I=i[y]+(M&&T?1.414:1)*S;I<i[v]&&(i[v]=I,s[v]=y,h.push(v),m.push(I+f(v)))}}if(x<0)return null;let g=[];for(let b=x;b>=0&&b!==c;b=s[b])g.push(b);return g.reverse(),g}cellCost(e,t){let n=this.grid[e];if(n<0)return 1;let i=this.bs[n];return i.dead?1:i.cat==="wall"?i===t?1:Ab:-1}pick(e){let t=bt[e.type],n=this.bs.filter(h=>!h.dead&&h.cat!=="trap"&&h.cat!=="wall");if(!n.length)return null;let i=t.pref,s=null;i==="def"&&(s=n.filter(h=>h.cat==="def")),i==="loot"&&(s=n.filter(h=>h.cat==="res"||h.cat==="store"||h.cat==="hq")),s&&s.length&&(n=s);let o=null,a=1e9,l=e.flare?e.flare.x:e.x,c=e.flare?e.flare.y:e.y;for(let h of n){let u=qi(l,c,h);u<a&&(a=u,o=h)}return o}retarget(e){let t=bt[e.type];if(e.wall=null,e.path=null,e.pi=0,e.flare){let s={x:e.flare.x-.5,y:e.flare.y-.5,w:1,cx:e.flare.x,cy:e.flare.y};e.path=this.path(e,s,.3)||[],e.tgt=null,e.state="walk";return}let n=this.pick(e);if(!n){e.tgt=null,e.state="idle";return}let i=this.path(e,n,t.range);if(t.pref==="wall"){let s=null;if(i)for(let o of i){let a=this.grid[o];if(a>=0&&this.bs[a].cat==="wall"&&!this.bs[a].dead){s=this.bs[a];break}}if(!s){let o=1e9;for(let a of this.bs)if(a.cat==="wall"&&!a.dead){let l=qi(e.x,e.y,a);l<o&&l<6&&(o=l,s=a)}}s&&(n=s,i=this.path(e,s,t.range))}e.tgt=n,e.path=i||[],e.pi=0,e.state="walk";for(let s=0;s<e.path.length;s++){let o=this.grid[e.path[s]];if(o>=0&&this.bs[o].cat==="wall"&&!this.bs[o].dead&&this.bs[o]!==n){e.wall=this.bs[o],e.path=e.path.slice(0,s);break}}}hitB(e,t,n){if(e.dead||e.cat==="trap")return;let i=Math.min(e.hp,t);if(e.hp-=i,e.loot){let s=i/e.max,o=e.loot;for(let a of Ye)if(o[a]){let l=o[a]*s;this.loot[a]+=l}n!=="silent"&&this.emit({e:"bhit",b:e.i,v:i})}e.hp<=.01&&this.killB(e)}killB(e){if(e.dead=!0,e.hp=0,this.emit({e:"bdie",b:e.i}),e.cat==="wall"){this.units.forEach(t=>{!t.dead&&(t.wall||t.tgt&&t.tgt.cat!=="wall")&&(t.repath=!0)});return}this.destroyed++,this.energy+=e.cat==="def"?2:1,e.cat==="hq"&&(this.keepDead=!0),this.pct=Math.round(100*this.destroyed/Math.max(1,this.total)),this.stars=(this.pct>=50?1:0)+(this.keepDead?1:0)+(this.pct>=100?1:0),this.units.forEach(t=>{!t.dead&&t.tgt===e&&(t.tgt=null)})}hitU(e,t,n){e.dead||(e.hp-=t,this.emit({e:"uhit",u:e.id,v:t,src:n}),e.hp<=0&&(e.dead=!0,e.hp=0,this.emit({e:"udie",u:e})))}step(){if(this.over)return;let e=this.t;this.ctl&&e-this.lastCtl>=.5&&(this.lastCtl=e,this.ctl(this)),this.zones=this.zones.filter(t=>t.until>e);for(let t of this.zones)if(t.k==="heal")for(let n of this.units)!n.dead&&Math.hypot(n.x-t.x,n.y-t.y)<t.r&&(n.hp=Math.min(n.max,n.hp+t.hps*Ho));for(let t of this.units)t.dead||this.stepU(t);for(let t of this.bs)t.dead||(t.cat==="def"?this.stepD(t):t.cat==="trap"&&this.stepT(t));for(let t of this.proj)!t.done&&t.at<=e&&this.land(t);this.proj=this.proj.filter(t=>!t.done),this.t=+(e+Ho).toFixed(2),this.started&&(!this.alive()&&!this.left()||this.destroyed>=this.total||this.t>=Wr)?this.end():!this.started&&this.t>=Wr&&this.end()}stepU(e){let t=bt[e.type];if(e.flare&&(this.t>e.flare.until||Math.hypot(e.x-e.flare.x,e.y-e.flare.y)<.6)&&(e.flare=null,e.tgt=null,e.path=null),e.repath&&(!e.tgt||e.tgt.cat!=="wall")&&(e.repath=!1,!e.flare&&e.state==="walk"&&(e.path=null)),e.wall&&e.wall.dead&&(e.wall=null,e.path=null),!e.flare&&(!e.tgt||e.tgt.dead)&&(e.tgt=null,this.retarget(e),!e.tgt))return;e.path||this.retarget(e);let n=e.wall||e.tgt;if(n&&qi(e.x,e.y,n)<=t.range+.15){if(e.state="atk",e.ang=Math.atan2(n.cy-e.y,n.cx-e.x),e.cd-=Ho,e.cd<=0){if(e.cd=t.rate,t.boom){this.emit({e:"boom",x:e.x,y:e.y,r:t.splash});for(let u of this.bs)!u.dead&&u.cat!=="trap"&&qi(e.x,e.y,u)<t.splash&&this.hitB(u,e.dmg*(u.cat==="wall"?t.wallX:1.5));e.dead=!0,e.hp=0,this.emit({e:"udie",u:e});return}let h=e.dmg*(t.resX&&(n.cat==="res"||n.cat==="store")?t.resX:1);if(t.range>2?this.emit({e:"ushot",u:e.id,b:n.i,k:e.type}):this.emit({e:"swing",u:e.id,b:n.i}),t.splash){let u=Math.max(n.x,Math.min(e.x,n.x+n.w)),d=Math.max(n.y,Math.min(e.y,n.y+n.w));for(let f of this.bs)!f.dead&&f.cat!=="trap"&&qi(u,d,f)<t.splash&&this.hitB(f,h*(f===n?1:.6))}else this.hitB(n,h)}return}e.state="walk";let i,s;if(e.path&&e.pi<e.path.length){let h=e.path[e.pi];i=h%32+.5+e.ox,s=(h/32|0)+.5+e.oy}else if(e.flare)i=e.flare.x,s=e.flare.y;else if(n)i=Math.max(n.x,Math.min(e.x,n.x+n.w)),s=Math.max(n.y,Math.min(e.y,n.y+n.w));else return;let o=i-e.x,a=s-e.y,l=Math.hypot(o,a),c=t.spd*Ho;l>1e-4&&(e.ang=Math.atan2(a,o)),l<=c?(e.x=i,e.y=s,e.path&&e.pi<e.path.length?e.pi++:!e.flare&&n&&qi(e.x,e.y,n)>t.range+.15&&(e.stuck=(e.stuck||0)+1,e.stuck>30&&(e.stuck=0,e.path=null))):(e.x+=o/l*c,e.y+=a/l*c)}stepD(e){let t=q[e.t];if(e.cd-=Ho,this.smoked(e.cx,e.cy)){e.tgt=null;return}let n=a=>!a.dead&&!this.smoked(a.x,a.y)&&(()=>{let l=Math.hypot(a.x-e.cx,a.y-e.cy);return l<=t.range&&l>=(t.minR||0)})();if(!e.tgt||!n(e.tgt)){e.tgt=null;let a=1e9;if(t.splash){let l=-1;for(let c of this.units)if(n(c)){let h=0;for(let u of this.units)!u.dead&&Math.hypot(u.x-c.x,u.y-c.y)<t.splash&&(h+=bt[u.type].sp);h-=Math.hypot(c.x-e.cx,c.y-e.cy)*.01,h>l&&(l=h,e.tgt=c)}}else for(let l of this.units)if(n(l)){let c=Math.hypot(l.x-e.cx,l.y-e.cy);c<a&&(a=c,e.tgt=l)}}if(e.tgt&&(e.ang=Math.atan2(e.tgt.y-e.cy,e.tgt.x-e.cx)),e.cd>0||!e.tgt)return;e.cd=t.rate;let i=e.tgt,s=Math.hypot(i.x-e.cx,i.y-e.cy),o=t.dmg[e.lv-1];if(t.proj==="shell")this.proj.push({k:"shell",x:i.x,y:i.y,at:this.t+1.4,dmg:o,r:t.splash,from:e.i}),this.emit({e:"fire",b:e.i,k:"shell",x:i.x,y:i.y,tt:1.4});else{let a=t.proj==="ball"?Math.max(.15,s/22):Math.max(.08,s/40);this.proj.push({k:t.proj,u:i,at:this.t+a,dmg:o,from:e.i}),this.emit({e:"fire",b:e.i,k:t.proj,u:i.id,tt:a})}}stepT(e){let t=q[e.t];if(e.fuse<0){for(let i of this.units)if(!i.dead&&Math.hypot(i.x-e.cx,i.y-e.cy)<t.trig){e.fuse=this.t+.35,this.emit({e:"trapseen",b:e.i});break}return}if(this.t<e.fuse)return;let n=t.dmg[e.lv-1];if(e.dead=!0,e.armed=!1,t.splash)for(let i of this.units)!i.dead&&Math.hypot(i.x-e.cx,i.y-e.cy)<t.splash&&this.hitU(i,n,"trap");else{let i=null;for(let s of this.units)!s.dead&&Math.hypot(s.x-e.cx,s.y-e.cy)<t.trig*1.6&&(!i||s.hp>i.hp)&&(i=s);i&&this.hitU(i,n,"trap")}this.emit({e:"trap",b:e.i,k:e.t,x:e.cx,y:e.cy})}land(e){if(e.done=!0,e.k==="shell"){this.emit({e:"shell",x:e.x,y:e.y,r:e.r});for(let t of this.units)!t.dead&&Math.hypot(t.x-e.x,t.y-e.y)<e.r&&this.hitU(t,e.dmg,"mortar")}else if(e.k==="gun"){this.emit({e:"gunhit",x:e.x,y:e.y,r:e.r});for(let t of this.units)!t.dead&&Math.hypot(t.x-e.x,t.y-e.y)<e.r&&this.hitU(t,e.dmg,"gun")}else if(e.k==="bshot"){this.emit({e:"bshot",x:e.x,y:e.y});for(let t of this.bs)!t.dead&&t.cat!=="trap"&&qi(e.x,e.y,t)<1.1&&this.hitB(t,e.dmg)}else e.u&&this.hitU(e.u,e.dmg,e.k)}end(){if(!this.over){this.over=!0;for(let e of Ye)this.loot[e]=Math.floor(this.loot[e]);this.emit({e:"end",stars:this.stars,pct:this.pct})}}run(e=Wr+1){for(;!this.over&&this.t<e;)this.replayTick(),this.step();return this}setScript(e){this.script=e.slice(),this.si=0}replayTick(){if(this.script)for(;this.si<this.script.length&&this.script[this.si].t<=this.t+1e-6;){let e=this.script[this.si++];e.k==="u"?this.deploy(e.u,e.x,e.y,!0):e.k==="d"?(this.guns++,this.gun(e.x,e.y,!0)):this.ability(e.a,e.x,e.y,!0)}}armyUsed(){let e={};for(let t of this.units)e[t.type]=(e[t.type]||0)+1;return e}survivors(){let e={};for(let t of this.units)t.dead||(e[t.type]=(e[t.type]||0)+1);return e}}});function ym(r,e,t="You"){let n=ci(r),i={v:1,seed:r,now:e,step:0,player:{id:"you",name:t,base:Hl(t),trophies:0,shield:0,protect:e+2*hi,log:[],stats:{atk:0,win:0,def:0,defWin:0,loot:0,stars:0}},bots:[],news:[],pacts:[],outposts:[],season:{n:1,start:e},live:null};i.player.base.at=e;let s=[40,120,210,300,420,560,720,900].sort(()=>n()-.5);return Zs.forEach((o,a)=>{let l=Hl(o.name),c=Math.max(1,Math.min(oi,1+Math.floor(s[a]/230)));cm(l,o.p,c,n,.55+n()*.3),zo(l,o.p,r*31+a|0);let h=Yn(l);Ye.forEach(u=>l.res[u]=Math.round(h[u]*(.25+n()*.4))),l.at=e,l.army={},i.bots.push({id:o.id,base:l,trophies:s[a],shield:0,mem:{},grudge:{},ready:e+n()*2*hi,stats:{atk:0,win:0,def:0,defWin:0},seed:r*97+a*13|0})}),Yi.forEach((o,a)=>{let l=vm(o,r+a*7|0);i.outposts.push({id:o.id,owner:null,base:l,since:e,stock:0})}),i}function vm(r,e){let t=ci(e),n=Hl(r.name);n.bl=n.bl.filter(o=>o.t==="keep"||o.t==="cannon"),n.bl[0].lv=r.kl;let i=r.kl,s=(o,a,l)=>{for(let c=0;c<a;c++)n.bl.push({id:yi(),t:o,x:0,y:0,lv:l})};return s("cannon",Math.max(0,Math.ceil(i/2)-1),i),s("musket",Math.ceil(i/2),i),i>=3&&s("mortar",1,i-1),s("wall",10+i*8,Math.max(1,i-1)),s("store",1,i),s("vault",1,i),i>=3&&s("keg",2,i-1),n.bl.forEach(o=>{o.t==="cannon"&&(o.lv=i)}),zo(n,{def:.9,greed:.4,sneak:.5,econ:.2,aggr:.2,caution:.5,venge:0},e),n.res={g:2e3*i,w:2e3*i,r:1500*i,p:400*i},n.army={},n}function Wo(r){return[r.player,...r.bots].map(e=>({id:e.id,name:Kr(r,e.id),trophies:e.trophies,kl:Qt(e.base),lg:li(e.trophies)})).sort((e,t)=>t.trophies-e.trophies)}function Vo(r,e,t,n="info",i={}){r.news.unshift(Object.assign({t:e,txt:t,kind:n},i)),r.news.length>40&&(r.news.length=40)}function Rb(r,e,t=1){let n=$i(r),i={g:0,w:0,r:0,p:0};return e.bs.forEach((s,o)=>{let a=n[o],l=1-s.hp/s.max,c=r.bl[o];for(let h of Ye)if(a[h]){let u=Math.floor(a[h]*l*t);i[h]+=u,q[c.t].cat==="res"?c.acc=Math.max(0,(c.acc||0)-u):r.res[h]=Math.max(0,r.res[h]-u)}}),i}function fd(r,e,t,n,i,s,o={}){let a=Mt(r.id),l=hm(t),c=a.p.greed>.75||s()<a.p.greed*.5?"loot":"stars",h=dm(r.base,l,a,r.mem,s,c),u=fm(l,h,a,r.mem,e.id,s,c),d=Math.floor(s()*1e9),f=new js(t,{seed:d,atkLv:$s(r.base),shipLv:Oo(r.base),army:Object.assign({},h)});return f.ctl=pm(u,a,l),o.live?{bt:f,plan:u,army:h,sc:l,goal:c,seed:d}:(f.run(),{bt:f,plan:u,army:h,sc:l,goal:c,seed:d})}function Vl(r,e,t,n,i){let s=Go(r,e),o=t.startsWith("op:")?null:Go(r,t),a=n.bt,l=t.startsWith("op:")?r.outposts.find(d=>"op:"+d.id===t):null,c=l?l.base:o.base,h=Rb(c,a,Gl(Qt(s.base),Qt(c)));Ye.forEach(d=>{s.base.res[d]=Math.min(Yn(s.base)[d],(s.base.res[d]||0)+h[d])});let u=0;if(o&&(u=xm(s.trophies,o.trophies,a.stars),s.trophies=Math.max(0,s.trophies+u),o.trophies=Math.max(0,o.trophies-u)),e!=="you"&&(mm(s.mem,n.sc,n.army,a,t,n.plan.side),s.stats.atk++,a.stars&&s.stats.win++),o)if(o.stats.def=(o.stats.def||0)+1,a.stars||(o.stats.defWin=(o.stats.defWin||0)+1),a.pct>=40&&(o.shield=i+(t==="you"?(a.pct>=90?8:4)*hi:(a.pct>=90?3:1.5)*hi)),t!=="you"){o.grudge[e]=(o.grudge[e]||0)+1+a.stars;let d=n.plan?n.plan.side:om(...Cb(a));gm(o.mem,a,a.armyUsed(),d),o.base.bl.forEach(f=>{f.lv===0&&f.up}),zo(o.base,Mt(t).p,o.seed+r.step|0,o.mem.threat)}else r.player.grudge=r.player.grudge||{};if(l&&a.stars>=2){let d=l.owner;l.owner=e,l.since=i,l.base=vm(Yi.find(f=>f.id===l.id),r.seed+r.step|0),Vo(r,i,`${Kr(r,e)} captured ${Yi.find(f=>f.id===l.id).name}${d?" from "+Kr(r,d):""}!`,"outpost",{who:e})}return{taken:h,dT:u}}function Pb(r,e,t,n){let s=Mt(e.id).p,o=Ys(e.base),a=[],l=r.pacts.find(c=>c.until>t&&c.members.includes(e.id));for(let c of[r.player,...r.bots]){if(c===e||c.shield>t||c.id==="you"&&(r.player.protect>t||Qt(e.base)>Qt(c.base)+1||Math.abs(c.trophies-e.trophies)>320)||l&&l.members.includes(c.id))continue;let h=c.trophies-e.trophies;if(Math.abs(h)>450&&!(e.grudge[c.id]>2))continue;let u=Yr(c.base)+1,d=c.base.res,f=((d.g||0)+(d.w||0)+(d.r||0))*.2*Gl(Qt(e.base),Qt(c.base))/(1+ys(e.base)*40),m=s.greed*Math.min(3,f)+s.venge*Math.min(3,(e.grudge[c.id]||0)*.6)+(1-s.caution)*Math.min(2,o/u)-s.caution*Math.max(0,u/o-1)*2+h/400*(s.aggr-.3)+n()*.8;l&&l.target===c.id&&(m+=2.5),a.push({e:c,u:m})}for(let c of r.outposts){if(c.owner===e.id)continue;let h=Yi.find(f=>f.id===c.id),u=Yr(c.base)+1,d=s.greed*1.2+s.econ*.8-s.caution*Math.max(0,u/o-1)*2+(c.owner==="you"?.6:0)+n()*.8-1.2;a.push({op:c,u:d})}return a.sort((c,h)=>h.u-c.u),a[0]&&a[0].u>.2?a[0]:null}function pd(r,e,t={}){let n=[],i=t.maxSteps||96,s=r.now;e-s>i*Js&&(s=e-i*Js);let o=ci(r.seed+r.step*7919|0);for(let a=s+Js;a<=e;a+=Js){r.step++;for(let l of r.bots){let c=Mt(l.id);Xi(l.base,a,!0);let h=1+l.trophies/1500;Ye.forEach(y=>l.base.res[y]=Math.min(Yn(l.base)[y],l.base.res[y]+l.base.bl.reduce((_,A)=>_+(q[A.t].res===y&&q[A.t].prod&&A.lv>0?q[A.t].prod[A.lv-1]:0),0)*Js/hi*(h-1+.35*c.p.econ))),lm(l.base,c.p,a,l.mem.adapt||{},o,.8),l.base.dirty&&(l.base.dirty=!1,zo(l.base,c.p,l.seed+r.step|0,l.mem.threat));for(let y in l.grudge)l.grudge[y]*=.985,l.grudge[y]<.05&&delete l.grudge[y];if(a<l.ready||o()>.12+c.p.aggr*.35)continue;let u=Pb(r,l,a,o);if(!u){l.ready=a+hi;continue}let d=ys(l.base)*30;if(l.base.res.r<d*.5){l.ready=a+hi;continue}if(l.base.res.r=Math.max(0,l.base.res.r-d),l.ready=a+(1.5+(1-c.p.aggr)*3+o())*hi,u.e&&u.e.id==="you"&&t.online){!r.live&&o()<.5&&(r.live={att:l.id,at:a+20},n.push({k:"live",att:l.id}));continue}let f=u.op?"op:"+u.op.id:u.e.id,m=u.op?u.op.base:u.e.base;u.e&&Xi(u.e.base,a,u.e.id!=="you");let x=u.e&&u.e.id==="you"?Bo(m):null,p=fd(l,u.e||{id:f},m,r,a,o),{taken:g,dT:b}=Vl(r,l.id,f,p,a);if(u.e&&u.e.id==="you"){let y={id:yi(),at:a,att:l.id,stars:p.bt.stars,pct:p.bt.pct,loot:g,dT:-b,seed:p.seed,atkLv:p.bt.atkLv,shipLv:p.bt.shipLv,army:p.army,script:p.bt.log,base:{bl:x.bl,res:x.res},revenged:!1,seen:!1};r.player.log.unshift(y),r.player.log.length>12&&(r.player.log.length=12),r.player.grudge=r.player.grudge||{},r.player.grudge[l.id]=(r.player.grudge[l.id]||0)+1,n.push({k:"raid",rec:y}),Vo(r,a,`${c.name} raided you: ${p.bt.stars}\u2605 ${p.bt.pct}%`,"raid",{who:l.id})}else u.e&&(p.bt.stars>=2||o()<.3)&&Vo(r,a,`${c.name} raided ${Kr(r,f)}: ${p.bt.stars}\u2605`,"bvb",{who:l.id})}for(let l of r.outposts){if(!l.owner)continue;let c=Yi.find(u=>u.id===l.id),h=Go(r,l.owner);h.id==="you"?l.stock=Math.min(c.rate*12,(l.stock||0)+c.rate*Js/hi):h.base.res[c.res]=Math.min(Yn(h.base)[c.res],h.base.res[c.res]+c.rate*Js/hi)}Ib(r,a,o)}return r.now=e,n}function Ib(r,e,t){r.pacts=r.pacts.filter(a=>a.until>e?!0:(Vo(r,e,`The pact against ${Kr(r,a.target)} has dissolved.`,"pact"),!1));let n=Wo(r);if(n.length<3)return;let i=n[0];if(i.trophies-n[1].trophies<90||i.trophies<250||r.pacts.some(a=>a.target===i.id)||t()>.35)return;let s=r.bots.filter(a=>a.id!==i.id&&Math.abs(a.trophies-i.trophies)<600).map(a=>({b:a,s:Mt(a.id).p.venge+(a.grudge[i.id]||0)*.5+t()*.5})).sort((a,l)=>l.s-a.s).slice(0,3).filter(a=>a.s>.6);if(s.length<2)return;let o=s.map(a=>a.b.id);r.pacts.push({members:o,target:i.id,until:e+8*hi,at:e}),Vo(r,e,`${o.map(a=>Mt(a).name).join(", ")} formed a pact against ${i.name}!`,"pact",{who:o[0],target:i.id})}function _m(r,e){if(e-r.season.start<604800)return null;let n=Wo(r),i=li(r.player.trophies);return[r.player,...r.bots].forEach(s=>{s.trophies>1e3&&(s.trophies=Math.round(1e3+(s.trophies-1e3)*.5))}),r.season={n:r.season.n+1,start:r.season.start+604800*Math.floor((e-r.season.start)/604800)},{league:i,rank:n.findIndex(s=>s.id==="you")+1}}var Js,hi,Yi,Gl,Go,Kr,Cb,bm=We(()=>{Mn();Ks();ud();dd();Js=900,hi=3600,Yi=[{id:"jungle",name:"Emerald Jungle",theme:"jungle",res:"w",rate:300,kl:2,x:.18,y:.3},{id:"volcano",name:"Ember Peak",theme:"volcano",res:"p",rate:90,kl:4,x:.8,y:.22},{id:"frost",name:"Frostfang Isle",theme:"frost",res:"r",rate:240,kl:3,x:.82,y:.75},{id:"gold",name:"Doubloon Reef",theme:"cove",res:"g",rate:360,kl:5,x:.3,y:.8}];Gl=(r,e)=>r-e>=3?.25:r-e===2?.5:r-e===1?.8:1,Go=(r,e)=>e==="you"?r.player:r.bots.find(t=>t.id===e),Kr=(r,e)=>e==="you"?r.player.name:(Mt(e)||{name:e}).name;Cb=r=>{let e=r.units;if(!e.length)return[16,16];let t=0,n=0;return e.forEach(i=>{t+=i.x,n+=i.y}),[t/e.length,n/e.length]}});function Xo(r=Oe()){let e=Math.floor(r/86400),t=Math.floor((e+3)/7),n=Mm[t%Mm.length],i=((t+1)*7-3)*86400;return{...n,wk:t,end:i}}function kb(r){let e=2166136261;for(let t=0;t<r.length;t++)e=Math.imul(e^r.charCodeAt(t),16777619);return e>>>0}function Ub(){let e=[{t:"keep",x:14,y:14,lv:1},{t:"cannon",x:19,y:15,lv:1},{t:"vault",x:11,y:12,lv:1},{t:"store",x:15,y:19,lv:1},{t:"mine",x:10,y:17,lv:1,acc:400},{t:"still",x:18,y:19,lv:1,acc:300},{t:"lumber",x:17,y:10,lv:1,acc:300}];return e.forEach((t,n)=>{t.id=9e5+n,t.acc=t.acc||0}),{name:"Rusty Rocks",bl:e,res:{g:1500,w:1500,r:600,p:100},army:{}}}var Lb,Oe,Ge,Dt,Wl,Mm,Db,md,Xl,Zr=We(()=>{Mn();Ks();bm();ud();dd();Gi();Lb=+(nn.get("skip")||0),Oe=()=>Date.now()/1e3+Lb,Ge=r=>(r=Math.floor(r),r<1e4?String(r):r<1e6?(r/1e3).toFixed(r<1e5?1:0).replace(/\.0$/,"")+"K":(r/1e6).toFixed(2).replace(/\.?0+$/,"")+"M"),Dt=r=>(r=Math.max(0,Math.ceil(r)),r<60?r+"s":r<3600?Math.floor(r/60)+"m"+(r%60?" "+r%60+"s":""):r<86400?Math.floor(r/3600)+"h"+(Math.floor(r%3600/60)?" "+Math.floor(r%3600/60)+"m":""):Math.floor(r/86400)+"d "+Math.floor(r%86400/3600)+"h"),Wl=r=>r<=0?0:Math.max(1,Math.ceil(Math.sqrt(r/60)*2.2)),Mm=[{id:"gold",name:"Gold Rush",ico:"\u{1F4B0}",desc:"+50% gold from raids",goal:{k:"loot",n:8e3},gems:25},{id:"powder",name:"Powder Week",ico:"\u{1F4A5}",desc:"Broadsides cost 1 less powder",goal:{k:"broad",n:12},gems:25},{id:"blood",name:"Blood Moon",ico:"\u{1F315}",desc:"Nights are longer and stars give +50% trophies",goal:{k:"stars",n:9},gems:30}];Db=[{k:"atk",n:3,t:"Raid {n} rivals",g:8},{k:"stars",n:5,t:"Win {n} stars",g:10},{k:"loot",n:3e3,t:"Plunder {n} gold",g:8,s:1},{k:"collect",n:8,t:"Collect {n} times",g:5},{k:"up",n:2,t:"Upgrade {n} buildings",g:8},{k:"train",n:25,t:"Train {n} crew",g:6},{k:"broad",n:4,t:"Use {n} ship abilities",g:6},{k:"def",n:1,t:"Watch a defence replay",g:5},{k:"revenge",n:1,t:"Take revenge once",g:12},{k:"op",n:1,t:"Raid an outpost",g:10}],md=r=>Math.floor(r/86400),Xl=class{constructor(e){this.S=e,this.ev={};let t=Oe();e.world||(e.world=ym(Math.random()*1e9|0,t,e.name||"You"),e.fresh=1,e.world.news.push({t:t-600,txt:"Mad Morgan swears he will plunder the new captain of Pirate Cove!",kind:"raid",who:"morgan"},{t:t-1800,txt:"Blackbeard Bram raided Goldtooth Gus: 2\u2605",kind:"raid",who:"bram"},{t:t-3e3,txt:"Iron Isolde built another mortar. Her walls grow thicker\u2026",kind:"info",who:"isolde"},{t:t-4200,txt:"Sly Sable captured Emerald Jungle outpost!",kind:"outpost",who:"sable"})),this.W=e.world,this.P=this.W.player,this.base=this.P.base,e.train=e.train||[],this.simT=0,this.offlineOut=null,this.base.onDone=n=>this.emit("done",n)}on(e,t){(this.ev[e]=this.ev[e]||[]).push(t)}emit(e,...t){(this.ev[e]||[]).forEach(n=>n(...t))}catchUp(){let e=Oe();Xi(this.base,e),this.trainTick(e);let t=pd(this.W,e,{online:!1});return this.offlineOut=t.filter(n=>n.k==="raid"),this.season(e),this.questDay(e),this.offlineOut}tick(e){let t=Oe();if(Xi(this.base,t),this.trainTick(t),this.simT+=e,this.simT>3&&!this.paused){this.simT=0;let n=pd(this.W,t,{online:!0});for(let i of n)i.k==="live"&&this.emit("live",i.att),i.k==="raid"&&this.emit("raid",i.rec);this.season(t),this.questDay(t)}}season(e){let t=_m(this.W,e);if(t){let n=15+t.league*20+(t.rank<=3?30:0);this.S.gems+=n,this.emit("season",{...t,gems:n,n:this.W.season.n-1})}}get res(){return this.base.res}caps(){return Yn(this.base)}kl(){return Qt(this.base)}armyCap(){return ys(this.base)}armyNow(){return nm(this.base.army)}queued(){return this.S.train.reduce((e,t)=>e+bt[t.u].sp,0)}freeBuilders(){return zl(this.base)-im(this.base)}shopList(){let e=this.kl();return Object.keys(q).filter(t=>t!=="keep").map(t=>{let n=Xr(this.base,t),i=hd(this.base,t),s=ai[t].findIndex(o=>o>n);return{t,have:n,max:i,cost:qs(t,1),time:q[t].time[0],lockKl:s>=0?s+1:0}})}canAfford(e){return qr(this.base.res,e)}missing(e){let t={};return Ye.forEach(n=>{let i=(e[n]||0)-(this.base.res[n]||0);i>0&&(t[n]=i)}),t}gemsForRes(e){let t=0;for(let n in e)t+=e[n]*(n==="p"?4:n==="r"?1.5:1);return Math.max(1,Math.ceil(Math.pow(t,.8)/25))}buyMissing(e){let t=this.missing(e),n=this.gemsForRes(t);if(this.S.gems<n)return!1;this.S.gems-=n;for(let i in t)this.base.res[i]+=t[i];return!0}place(e,t,n){if(Xr(this.base,e)>=hd(this.base,e))return{err:"Upgrade your Keep to build more"};if(!Bl(this.base,e,t,n))return{err:"Can't build there"};let i=qs(e,1);if(!qr(this.base.res,i))return{err:"need",c:i};let s=q[e].time[0];if(s>0&&this.freeBuilders()<=0)return{err:"All builders are busy"};Fo(this.base.res,i);let o={id:yi(),t:e,x:t,y:n,lv:0,up:Oe()+s,acc:0};return s<=0&&(o.lv=1,o.up=0),this.base.bl.push(o),this.S.st.built++,this.emit("placed",o),{o}}move(e,t,n){return Bl(this.base,e.t,t,n,e)?(e.x=t,e.y=n,!0):!1}canPlace(e,t,n,i){return Bl(this.base,e,t,n,i)}upInfo(e){let t=this.kl(),n=id(e.t,t);return e.up?{busy:!0,left:e.up-Oe()}:e.lv>=n?{max:!0,needKl:e.lv<oi?e.lv:0}:{c:qs(e.t,e.lv+1),time:q[e.t].time[e.lv],to:e.lv+1}}upgrade(e){let t=this.upInfo(e);return t.busy||t.max?{err:t.max?"Upgrade your Keep first":"Already upgrading"}:qr(this.base.res,t.c)?t.time>0&&this.freeBuilders()<=0?{err:"All builders are busy"}:(Fo(this.base.res,t.c),t.time<=0?(e.lv++,this.emit("done",e)):e.up=Oe()+t.time,this.S.st.up++,this.qAdd("up",1),{ok:1}):{err:"need",c:t.c}}rushCost(e){return Wl(e.up-Oe())}rush(e){let t=this.rushCost(e);return!e.up||this.S.gems<t?!1:(this.S.gems-=t,e.up=Oe()-.01,Xi(this.base,Oe()),!0)}cancel(e){if(!e.up)return;let t=qs(e.t,e.lv+1);Ye.forEach(n=>this.base.res[n]=Math.min(this.caps()[n],this.base.res[n]+Math.floor((t[n]||0)*.5))),e.lv===0?this.base.bl.splice(this.base.bl.indexOf(e),1):e.up=0}sell(e){return q[e.t].cat!=="wall"&&q[e.t].cat!=="trap"?!1:(this.base.bl.splice(this.base.bl.indexOf(e),1),!0)}collect(e){let t=sm(this.base,e);return t>0&&(this.S.st.collect++,this.qAdd("collect",1)),t}ready(e){return q[e.t].cat==="res"&&(e.acc||0)>=Math.max(10,q[e.t].prod[Math.max(0,e.lv-1)]*.02)}full(e){return this.base.res[e]>=this.caps()[e]-1}builderCost(){let e=zl(this.base);return e>=5?0:[0,0,150,300,600][e]}buyBuilder(){let e=this.builderCost();return!e||this.S.gems<e?!1:(this.S.gems-=e,this.base.builders=zl(this.base)+1,!0)}train(e,t=1){if(!$r(this.base,e))return{err:`Needs Tavern level ${bt[e].tl}`};let n=0;for(let i=0;i<t;i++){if(this.armyNow()+this.queued()+bt[e].sp>this.armyCap()){if(!n)return{err:"The tavern is full"};break}if(this.base.res.r<bt[e].cost){if(!n)return{err:"need",c:{r:bt[e].cost}};break}this.base.res.r-=bt[e].cost;let s=this.S.train.length?this.S.train[this.S.train.length-1].end:Oe();this.S.train.push({u:e,end:Math.max(Oe(),s)+bt[e].time*this.trainMul()}),n++}return{n}}trainMul(){return 1-($s(this.base)-1)*.06}untrain(e){let t=this.S.train[e];t&&(this.base.res.r+=bt[t.u].cost,this.S.train.splice(e,1),this.retime())}retime(){let e=Oe();for(let t of this.S.train){let n=bt[t.u].time*this.trainMul();e=Math.max(e,Math.min(t.end,e+n)),t.end=e}}trainLeft(){let e=this.S.train;return e.length?e[e.length-1].end-Oe():0}rushTrain(){let e=Wl(this.trainLeft());return!this.S.train.length||this.S.gems<e?!1:(this.S.gems-=e,this.S.train.forEach(t=>t.end=Oe()-.01),this.trainTick(Oe()),!0)}trainTick(e){let t=this.S.train,n=0;for(;t.length&&t[0].end<=e;){let i=t.shift();this.base.army[i.u]=(this.base.army[i.u]||0)+1,n++}n&&(this.S.st.trained=(this.S.st.trained||0)+n,this.qAdd("train",n),this.emit("trained",n))}fillArmy(){let e=this.S.lastArmy||{deckhand:12,musketeer:8},t=0;for(let n=0;n<4;n++)for(let i of En)if(e[i]&&$r(this.base,i)){let s=this.train(i,Math.ceil(e[i]/4));s.n&&(t+=s.n)}return t}rivals(){let e=Oe();return this.W.bots.map(t=>{let n=Mt(t.id),i=Qt(t.base),s=rm($i(t.base)),o=Gl(this.kl(),i);return{id:t.id,L:n,kl:i,trophies:t.trophies,lg:li(t.trophies),def:Yr(t.base),atk:Ys(t.base),loot:{g:Math.floor(s.g*o),w:Math.floor(s.w*o),r:Math.floor(s.r*o),p:Math.floor(s.p*o)},shield:Math.max(0,t.shield-e),grudge:t.grudge.you||0,mine:(this.P.grudge||{})[t.id]||0,pact:this.W.pacts.find(a=>a.until>e&&a.members.includes(t.id)),stats:t.stats,sc:null}}).sort((t,n)=>t.trophies-n.trophies)}outposts(){return this.W.outposts.map(e=>({...Yi.find(n=>n.id===e.id),owner:e.owner,stock:Math.floor(e.stock||0),kl:Qt(e.base),def:Yr(e.base),since:e.since}))}collectOutpost(e){let t=this.W.outposts.find(s=>s.id===e);if(!t||t.owner!=="you")return 0;let n=Yi.find(s=>s.id===e),i=Math.min(Math.floor(t.stock||0),Math.max(0,this.caps()[n.res]-this.base.res[n.res]));return this.base.res[n.res]+=i,t.stock-=i,i}searchCost(e){return 40*e*e+60}startAttack(e,t={}){if(this.armyNow()<=0)return{err:"Train some crew in the Tavern first!"};let n=Oe(),i,s,o,a;if(e==="tut")i=Ub(),s="cove",o=1,a="Rusty Rocks";else if(e.startsWith("op:")){let d=this.W.outposts.find(m=>"op:"+m.id===e);if(d.owner==="you")return{err:"You already hold this outpost"};i=d.base;let f=Yi.find(m=>m.id===d.id);s=f.theme,o=f.kl,a=f.name}else{let d=this.W.bots.find(f=>f.id===e);if(d.shield>n&&!t.revenge)return{err:`Shielded for ${Dt(d.shield-n)}`};Xi(d.base,n,!0),i=d.base,s=Mt(e).theme,o=Qt(d.base),a=Mt(e).name}let l=t.free||e==="tut"?0:this.searchCost(o);if(this.base.res.g<l)return{err:"need",c:{g:l}};this.base.res.g-=l,this.P.shield=0,this.P.protect=Math.min(this.P.protect,n);let c=Math.random()*1e9|0,h=Bo(i),u=new js(h,{seed:c,atkLv:$s(this.base),shipLv:Oo(this.base),army:Object.assign({},this.base.army)});return Xo().id==="powder"&&(u.abDisc=1),{bt:u,id:e,theme:s,name:a,kl:o,snap:h,revenge:t.revenge,seed:c,isleSeed:e==="tut"?7:kb(e)}}endAttack(e){let t=e.bt,n=Oe(),i=t.armyUsed();for(let c in i)this.base.army[c]=Math.max(0,(this.base.army[c]||0)-i[c]);for(let c in this.base.army)this.base.army[c]||delete this.base.army[c];Object.keys(i).length&&(this.S.lastArmy=i);let s,o=0;if(e.id==="tut")s={g:0,w:0,r:0,p:0},t.bs.forEach((c,h)=>{let u=1-c.hp/c.max,d=$i(e.snap)[h];Ye.forEach(f=>s[f]+=Math.floor((d[f]||0)*u))}),Ye.forEach(c=>this.base.res[c]=Math.min(this.caps()[c],this.base.res[c]+s[c])),o=10*t.stars,this.P.trophies+=o;else{let c=Vl(this.W,"you",e.id,{bt:t},n);if(s=c.taken,o=c.dT,Xo().id==="gold"&&s.g){let h=Math.floor(s.g*.5);this.base.res.g=Math.min(this.caps().g,this.base.res.g+h),s.g+=h}if(Xo().id==="blood"&&o>0){let h=Math.round(o*.5);this.P.trophies+=h,o+=h}}let a=this.S.st;a.atk++,a.stars+=t.stars,a.loot+=s.g,this.P.stats.atk++,t.stars&&this.P.stats.win++,this.P.stats.stars+=t.stars,this.qAdd("atk",1),this.qAdd("stars",t.stars),this.qAdd("loot",s.g);let l=t.uses?Object.values(t.uses).reduce((c,h)=>c+h,0):0;if(this.qAdd("broad",l),a.broad+=l,e.id.startsWith("op:")&&(this.qAdd("op",1),a.op++),e.revenge){let c=this.P.log.find(h=>h.id===e.revenge);c&&(c.revenged=!0),this.qAdd("revenge",1),a.revenge++}return this.P.grudge&&this.P.grudge[e.id]&&t.stars&&(this.P.grudge[e.id]=Math.max(0,this.P.grudge[e.id]-1-t.stars)),this.evAdd(t.stars,s.g,l),this.S.best=Math.max(this.S.best||0,this.P.trophies),{taken:s,dT:o,stars:t.stars,pct:t.pct}}startDefence(e){let t=Oe(),n=Go(this.W,e);Xi(this.base,t);let i=Bo(this.base),s=ci(this.W.seed+this.W.step*31+5|0),o=fd(n,this.P,i,this.W,t,s,{live:!0});return o.bt.guns=3+Math.floor((this.kl()-1)/2),{...o,att:e,snap:i}}endDefence(e){let t=Oe(),n=e.bt,i=this.base,s={bt:n},{taken:o,dT:a}=Vl(this.W,e.att,"you",{bt:n,plan:e.plan,sc:e.sc,army:e.army},t),l={id:yi(),at:t,att:e.att,stars:n.stars,pct:n.pct,loot:o,dT:-a,seed:e.seed,atkLv:n.atkLv,shipLv:n.shipLv,army:e.army,script:n.log,base:{bl:e.snap.bl,res:e.snap.res},revenged:!1,seen:!0,live:!0};return this.P.log.unshift(l),this.P.log.length>12&&(this.P.log.length=12),this.P.grudge=this.P.grudge||{},this.P.grudge[e.att]=(this.P.grudge[e.att]||0)+1,this.W.live=null,l}replayOf(e){let t={name:"You",bl:JSON.parse(JSON.stringify(e.base.bl)),res:{...e.base.res},army:{}},n=new js(t,{seed:e.seed,atkLv:e.atkLv,shipLv:e.shipLv,army:Object.assign({},e.army)});return n.setScript(e.script),{bt:n,base:t}}unseen(){return this.P.log.filter(e=>!e.seen).length}questDay(e=Oe()){let t=md(e);if(this.S.qd.day===t)return;let i=ci(t*7+1),s=Db.slice(),o=[],a=this.kl();for(;o.length<3;){let l=s.splice(Math.floor(i()*s.length),1)[0];o.push({k:l.k,n:l.s?l.n*a:l.n,t:l.t,g:l.g,p:0,done:0})}this.S.qd={day:t,list:o}}qAdd(e,t){if(t)for(let n of this.S.qd.list||[])n.k===e&&!n.done&&(n.p=Math.min(n.n,n.p+t),n.p>=n.n&&!n.ann&&(n.ann=1,this.emit("quest",n)))}qClaim(e){let t=this.S.qd.list[e];return!t||t.done||t.p<t.n?0:(t.done=1,this.S.gems+=t.g,t.g)}qReady(){return(this.S.qd.list||[]).filter(e=>!e.done&&e.p>=e.n).length}evAdd(e,t,n){let i=Xo(),s=this.S;(!s.ev||s.ev.wk!==i.wk)&&(s.ev={wk:i.wk,p:0,claimed:0});let o=i.goal.k==="stars"?e:i.goal.k==="loot"?t:n;s.ev.p=Math.min(i.goal.n,s.ev.p+o)}evState(){let e=Xo(),t=this.S;return(!t.ev||t.ev.wk!==e.wk)&&(t.ev={wk:e.wk,p:0,claimed:0}),{e,p:t.ev.p,claimed:t.ev.claimed,left:e.end-Oe()}}evClaim(){let e=this.evState();return e.claimed||e.p<e.e.goal.n?0:(this.S.ev.claimed=1,this.S.gems+=e.e.gems,e.e.gems)}daily(){let e=md(Oe()),t=this.S.streak;if(t.last===e)return null;let n=t.last===e-1?Math.min(7,t.n+1):1;return{n,gems:3+n*2,g:300*n*this.kl()}}claimDaily(){let e=this.daily();if(!e)return null;let t=this.S.streak;return t.n=e.n,t.last=md(Oe()),this.S.gems+=e.gems,this.base.res.g=Math.min(this.caps().g,this.base.res.g+e.g),e}}});var wm,Sm=We(()=>{wm=`
:root{--gold:#ffd24a;--gold2:#e99a12;--ink:#3a2410;--wood:#6b3f1e;--wood2:#4a2a12;--parch:#f6e6c2;--parch2:#e6cc96;--red:#e0482f;--green:#4fc24a;--blue:#3a8fd8;--s:1px}
#ui{position:fixed;inset:0;pointer-events:none;font-family:Lilita,system-ui,sans-serif;color:#fff;font-size:calc(15px*var(--k,1));-webkit-font-smoothing:antialiased;z-index:5}
#ui *{box-sizing:border-box}
#ui .pe,#ui button,#ui .panel,#ui .sheet,#ui .modal,#ui .bub,#ui .chip,#ui .tag{pointer-events:auto}
.ts{text-shadow:0 2px 0 rgba(0,0,0,.55),0 0 6px rgba(0,0,0,.35)}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.35em;padding:.55em 1.1em;border-radius:.7em;background:linear-gradient(#ffe17a,#f2a71c);color:#4a2600;border:.14em solid #7a4300;box-shadow:0 .22em 0 #7a4300,0 .35em .6em rgba(0,0,0,.35);font-size:1.05em;transition:transform .08s;white-space:nowrap}
.btn:active{transform:translateY(.15em);box-shadow:0 .07em 0 #7a4300}
.btn.g{background:linear-gradient(#9cf06a,#3eaa2c);color:#fff;border-color:#1e5a12;box-shadow:0 .22em 0 #1e5a12,0 .35em .6em rgba(0,0,0,.35);text-shadow:0 2px 0 rgba(0,0,0,.35)}
.btn.r{background:linear-gradient(#ff8a6a,#d43a22);color:#fff;border-color:#6a1206;box-shadow:0 .22em 0 #6a1206,0 .35em .6em rgba(0,0,0,.35);text-shadow:0 2px 0 rgba(0,0,0,.35)}
.btn.b{background:linear-gradient(#8fd0ff,#2f7fd0);color:#fff;border-color:#123a6a;box-shadow:0 .22em 0 #123a6a,0 .35em .6em rgba(0,0,0,.35);text-shadow:0 2px 0 rgba(0,0,0,.35)}
.btn.p{background:linear-gradient(#e7a6ff,#9a4ad8);color:#fff;border-color:#3e126a;box-shadow:0 .22em 0 #3e126a;text-shadow:0 2px 0 rgba(0,0,0,.35)}
.btn.dis{filter:grayscale(.85) brightness(.85)}
.btn.sm{font-size:.85em;padding:.4em .75em}
.btn.big{font-size:1.35em;padding:.55em 1.4em}
.ico{width:1.25em;height:1.25em;object-fit:contain;vertical-align:-.25em;filter:drop-shadow(0 1px 1px rgba(0,0,0,.4))}
.gem{display:inline-block;width:.9em;height:.9em;background:linear-gradient(135deg,#c6f9ff,#36c2ff 45%,#1a6ad8);transform:rotate(45deg) scale(.85);border-radius:.15em;border:.08em solid #0c3a78;vertical-align:-.1em;margin:0 .15em}
/* top bar */
#top{position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;align-items:flex-start;padding:max(.5em,env(safe-area-inset-top)) .6em 0;gap:.5em}
#me{display:flex;align-items:center;gap:.45em;background:linear-gradient(rgba(40,22,8,.82),rgba(40,22,8,.6));border:.12em solid rgba(255,210,74,.6);border-radius:2em .8em .8em 2em;padding:.2em .7em .2em .2em;min-width:0}
#me .lg{width:2.6em;height:2.6em;flex:none}
#me .nm{font-size:.95em;line-height:1.05}
#me .tr{font-size:1.1em;color:var(--gold)}
#me .sh{font-size:.72em;color:#9fe0ff}
#res{display:flex;flex-direction:column;gap:.28em;align-items:flex-end}
.rb{position:relative;display:flex;align-items:center;width:8.6em;height:1.7em;background:rgba(30,16,6,.78);border:.12em solid rgba(255,220,140,.45);border-radius:1em;padding-left:2em}
.rb img{position:absolute;left:-.25em;top:50%;transform:translateY(-50%);width:2.1em;height:2.1em;object-fit:contain;filter:drop-shadow(0 2px 2px rgba(0,0,0,.5))}
.rb .f{position:absolute;left:.15em;top:.15em;bottom:.15em;border-radius:1em;opacity:.55}
.rb b{position:relative;font-weight:normal;font-size:.95em;margin-left:.2em}
.rb.full{animation:fullp 1s infinite}
.rb.full::after{content:'FULL';position:absolute;right:.4em;font-size:.62em;color:#ff7a5a}
@keyframes fullp{50%{border-color:#ff5a3a;box-shadow:0 0 .6em #ff5a3a}}
.rb.gm{padding-left:2em}
.rb .plus{position:absolute;right:-.3em;width:1.5em;height:1.5em;border-radius:50%;background:linear-gradient(#9cf06a,#3eaa2c);border:.1em solid #1e5a12;display:grid;place-items:center;font-size:.9em}
/* next goal chip */
#goal{position:absolute;left:50%;transform:translateX(-50%);top:max(.55em,env(safe-area-inset-top));max-width:min(26em,48vw);display:flex;align-items:center;gap:.5em;background:linear-gradient(#fff4d6,#f0d79a);color:var(--ink);border:.14em solid #8a5a1a;border-radius:1.2em;padding:.32em .8em .32em .35em;box-shadow:0 .25em .7em rgba(0,0,0,.35);animation:goalIn .4s}
#goal.pulse{animation:goalP 1.4s infinite}
.news{position:absolute;left:50%;transform:translateX(-50%);top:calc(max(.55em,env(safe-area-inset-top)) + 3.3em);max-width:min(36em,62vw);display:flex;align-items:center;gap:.45em;background:rgba(24,14,6,.78);border:.1em solid rgba(240,200,110,.55);border-radius:1em;padding:.2em .8em .2em .25em;font-size:.8em;color:#fff3d6;animation:newsIn .45s cubic-bezier(.2,1.4,.4,1);transition:opacity .5s,transform .5s;pointer-events:none}
.news.pe{pointer-events:auto;cursor:pointer}.news.hot{border-color:#ff7a5a;background:rgba(70,14,6,.85)}
.news.out{opacity:0;transform:translateX(-50%) translateY(-.6em)}
.news .face{width:1.9em;height:1.9em;border-radius:50%;border:.1em solid #f0c060;object-fit:cover;flex:none}.news .ic{font-size:1.3em}
.news span:last-child{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@keyframes newsIn{from{transform:translateX(-50%) translateY(-.5em) scale(.92)}}
#goal img{width:2em;height:2em;object-fit:contain;flex:none}
#goal .tx{font-size:.92em;line-height:1.1}
#goal .pb{height:.4em;background:rgba(0,0,0,.15);border-radius:.3em;margin-top:.2em;overflow:hidden}
#goal .pb i{display:block;height:100%;background:linear-gradient(90deg,#4fc24a,#a6f06a)}
#goal .go{margin-left:.2em;font-size:1.3em;color:#2a8a1a}
@keyframes goalIn{from{transform:translate(-50%,-150%)}}
@keyframes goalP{50%{box-shadow:0 0 0 .3em rgba(255,210,74,.6),0 .25em .7em rgba(0,0,0,.35)}}
/* side + bottom buttons */
#side{position:absolute;left:.5em;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:.55em}
.sb{position:relative;width:3.5em;height:3.5em;border-radius:1em;background:linear-gradient(#8a5a2e,#5a3416);border:.14em solid #2e1806;box-shadow:0 .2em 0 #2e1806,0 .3em .5em rgba(0,0,0,.35);display:grid;place-items:center}
.sb img{width:2.5em;height:2.5em;object-fit:contain;filter:drop-shadow(0 2px 1px rgba(0,0,0,.5))}
.sb .em{font-size:1.8em;line-height:1}
.sb small{position:absolute;bottom:-.35em;left:50%;transform:translateX(-50%);font-size:.66em;white-space:nowrap;background:rgba(30,16,6,.85);padding:0 .4em;border-radius:.5em}
.badge{position:absolute;top:-.4em;right:-.4em;min-width:1.45em;height:1.45em;border-radius:1em;background:#e0302a;border:.12em solid #fff;font-size:.8em;display:grid;place-items:center;padding:0 .25em;animation:bdg 1.2s infinite}
@keyframes bdg{50%{transform:scale(1.18)}}
.glow{animation:glw 1.3s infinite}
@keyframes glw{50%{box-shadow:0 0 0 .25em rgba(255,226,90,.75),0 0 1.2em rgba(255,200,40,.9)}}
#bot{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;align-items:flex-end;padding:0 .7em max(.7em,env(safe-area-inset-bottom))}
#bot .grp{display:flex;gap:.6em;align-items:flex-end}
#raid{position:relative;width:6.4em;height:6.4em;border-radius:50%;background:radial-gradient(circle at 50% 35%,#ff9a5a,#d4381e 60%,#7a1a08);border:.2em solid #ffd24a;box-shadow:0 .3em 0 #6a1206,0 .5em 1em rgba(0,0,0,.45);display:flex;flex-direction:column;align-items:center;justify-content:center}
#raid img{width:3.3em;height:3.3em;margin-top:-.4em;filter:drop-shadow(0 2px 2px rgba(0,0,0,.5))}
#raid b{font-weight:normal;font-size:1.25em;margin-top:-.35em}
#raid .army{position:absolute;bottom:-.5em;font-size:.7em;background:#2e1806;border:.1em solid #ffd24a;padding:.05em .5em;border-radius:1em;white-space:nowrap}
#raid.ready{animation:raidp 1.6s infinite}
@keyframes raidp{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}
.bl{font-size:.8em;background:rgba(30,16,6,.8);border-radius:1em;padding:.2em .6em;border:.1em solid rgba(255,220,140,.4);white-space:nowrap}
/* world-anchored */
#world{position:absolute;inset:0;overflow:hidden}
.bub{position:absolute;transform:translate(-50%,-100%);width:3em;height:3.2em;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 64'%3E%3Cpath d='M30 62 L22 50 A27 27 0 1 1 38 50 Z' fill='%23fff8e6' stroke='%235a3a12' stroke-width='3'/%3E%3C/svg%3E") center/contain no-repeat;display:grid;place-items:center;padding-bottom:.55em;animation:bob 1.6s ease-in-out infinite}
.bub img{width:1.9em;height:1.9em;object-fit:contain}
.bub.full{filter:drop-shadow(0 0 .35em #ff5a3a)}
@keyframes bob{50%{margin-top:-.35em}}
.tbar{position:absolute;transform:translate(-50%,-100%);width:5.4em;text-align:center;font-size:.72em}
.tbar .bar{height:.7em;background:rgba(20,10,4,.8);border:.1em solid #2e1806;border-radius:.5em;overflow:hidden;margin-top:.1em}
.tbar .bar i{display:block;height:100%;background:linear-gradient(#9cf06a,#3eaa2c)}
.tbar.tr .bar i{background:linear-gradient(#8fd0ff,#2f7fd0)}
.uparr{position:absolute;transform:translate(-50%,-100%);width:1.7em;height:1.7em;border-radius:50%;background:linear-gradient(#9cf06a,#3eaa2c);border:.12em solid #1e5a12;display:grid;place-items:center;font-size:1em;animation:bob 1.2s ease-in-out infinite;pointer-events:none}
.fly{position:absolute;transform:translate(-50%,-50%);font-size:1.2em;pointer-events:none;white-space:nowrap;animation:flyup 1.3s forwards}
@keyframes flyup{0%{opacity:0;margin-top:0}12%{opacity:1}100%{opacity:0;margin-top:-3em}}
.lbl{position:absolute;transform:translate(-50%,-100%);font-size:.75em;white-space:nowrap;pointer-events:none}
/* sheets / panels */
.sheet{position:absolute;left:50%;bottom:max(.6em,env(safe-area-inset-bottom));transform:translateX(-50%);width:min(30em,94vw);background:linear-gradient(var(--parch),var(--parch2));color:var(--ink);border:.18em solid #8a5a1a;border-radius:1em;box-shadow:0 .4em 1.4em rgba(0,0,0,.5);padding:.7em .8em;animation:sheetIn .22s}
@keyframes sheetIn{from{transform:translate(-50%,40%);opacity:0}}
.sheet h3,.panel h2{margin:0;font-weight:normal;font-family:Pirata,serif;letter-spacing:.02em}
.sheet h3{font-size:1.6em;line-height:1}
.sheet .row{display:flex;gap:.5em;align-items:center;flex-wrap:wrap;margin-top:.5em}
.sheet .x,.panel .x{position:absolute;right:.4em;top:.35em;width:1.8em;height:1.8em;border-radius:50%;background:linear-gradient(#ff8a6a,#d43a22);border:.12em solid #6a1206;color:#fff;font-size:1em;display:grid;place-items:center}
.cost{display:inline-flex;gap:.45em;align-items:center}
.cost span.no{color:#d4301a}
.stat{font-size:.82em;color:#6a4a20}
.dim{opacity:.78;font-size:.85em;line-height:1.3}
@keyframes fade{from{opacity:0}}
.panel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(44em,96vw);max-height:min(40em,92vh);display:flex;flex-direction:column;background:linear-gradient(var(--parch),var(--parch2));color:var(--ink);border:.2em solid #8a5a1a;border-radius:1.1em;box-shadow:0 .6em 2em rgba(0,0,0,.6);padding:.7em;animation:pop .22s}
@keyframes pop{from{transform:translate(-50%,-50%) scale(.85);opacity:0}}
.panel h2{font-size:2em;text-align:center;line-height:1;color:#6a3a08}
.panel .body{overflow:auto;flex:1;margin-top:.5em;-webkit-overflow-scrolling:touch}
.tabs{display:flex;gap:.3em;justify-content:center;margin-top:.3em;flex-wrap:wrap}
.tabs button{padding:.3em .8em;border-radius:.6em;background:#d9b878;color:#5a3a12;border:.1em solid #8a5a1a}
.tabs button.on{background:linear-gradient(#ffe17a,#f2a71c);color:#4a2600}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(8.4em,1fr));gap:.5em}
.card{position:relative;background:#fff6dc;border:.12em solid #b8894a;border-radius:.8em;padding:.4em;text-align:center;color:var(--ink)}
.card img.ic{width:5em;height:5em;object-fit:contain;display:block;margin:0 auto}
.card .nm{font-size:.95em;line-height:1.05}
.card .ct{font-size:.85em}
.card.lock{filter:grayscale(.7);opacity:.8}
.card .lk{position:absolute;inset:0;display:grid;place-items:center;font-size:.8em;color:#fff;background:rgba(40,20,5,.45);border-radius:.7em;padding:.4em}
.card.new::after{content:'NEW';position:absolute;top:-.4em;left:-.3em;background:#e0302a;color:#fff;font-size:.7em;padding:.05em .4em;border-radius:.4em;transform:rotate(-12deg)}
.list .it{display:flex;align-items:center;gap:.6em;background:#fff6dc;border:.12em solid #b8894a;border-radius:.8em;padding:.4em .5em;margin-bottom:.4em}
.face{width:3.2em;height:3.2em;border-radius:50%;object-fit:cover;border:.16em solid #fff;box-shadow:0 0 0 .12em #5a3a12;flex:none;background:#333}
.face.big{width:6.5em;height:6.5em}
.face.xl{width:9em;height:9em}
.pbar{height:.75em;background:rgba(0,0,0,.18);border-radius:.4em;overflow:hidden}
.pbar i{display:block;height:100%;background:linear-gradient(90deg,#4fc24a,#a6f06a)}
.toast{position:absolute;left:50%;top:22%;transform:translateX(-50%);background:rgba(30,16,6,.9);border:.12em solid var(--gold);padding:.45em 1em;border-radius:1em;font-size:1em;animation:toast 2.4s forwards;white-space:nowrap;max-width:94vw;overflow:hidden;text-overflow:ellipsis}
@keyframes toast{0%{opacity:0;transform:translate(-50%,-30%)}10%,80%{opacity:1;transform:translate(-50%,0)}100%{opacity:0}}
.banner{position:absolute;left:50%;top:18%;transform:translateX(-50%);display:flex;align-items:center;gap:.7em;background:linear-gradient(#7a1a08,#3a0a02);border:.18em solid #ffd24a;border-radius:1.2em;padding:.5em 1em .5em .5em;box-shadow:0 .5em 1.5em rgba(0,0,0,.6);animation:pop2 .3s;pointer-events:auto;max-width:96vw}
@keyframes pop2{from{transform:translateX(-50%) scale(.6);opacity:0}}
.modal{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(30em,94vw);max-height:94vh;overflow:auto;background:linear-gradient(var(--parch),var(--parch2));color:var(--ink);border:.2em solid #8a5a1a;border-radius:1.1em;box-shadow:0 .6em 2em rgba(0,0,0,.6);padding:1em;text-align:center;animation:pop .25s}
.modal h2{margin:0;font-family:Pirata,serif;font-weight:normal;font-size:2.2em;color:#6a3a08;line-height:1}
.stars{font-size:3em;letter-spacing:.05em;line-height:1}
.stars i{font-style:normal;color:#5a4a3a;display:inline-block}
.stars i.on{color:#ffd24a;text-shadow:0 0 .3em #ffb000,0 .06em 0 #8a5a00;animation:star .5s backwards}
@keyframes star{from{transform:scale(2.4) rotate(-30deg);opacity:0}}
.quote{font-style:italic;background:#fff6dc;border-radius:.8em;padding:.4em .7em;position:relative;margin:.4em 0;border:.1em solid #b8894a}
/* battle hud */
#bhud{position:absolute;inset:0}
#btop{position:absolute;left:50%;top:max(.5em,env(safe-area-inset-top));transform:translateX(-50%);display:flex;gap:.6em;align-items:center;background:rgba(30,16,6,.78);border-radius:1em;padding:.3em .8em;border:.12em solid rgba(255,210,74,.5)}
#btop .tm{font-size:1.4em;min-width:2.8em;text-align:center}
#btop .st{font-size:1.4em;letter-spacing:.05em}
#btop .pc{font-size:1.1em;color:var(--gold)}
#bfoe{position:absolute;left:.5em;top:max(.5em,env(safe-area-inset-top));display:flex;gap:.45em;align-items:center;background:rgba(30,16,6,.75);border-radius:2em .8em .8em 2em;padding:.2em .7em .2em .2em;max-width:42vw}
#bloot{position:absolute;right:.5em;top:max(.5em,env(safe-area-inset-top));background:rgba(30,16,6,.75);border-radius:.8em;padding:.3em .6em;font-size:.9em;line-height:1.35}
#tray{position:absolute;left:50%;bottom:max(.5em,env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:.35em;align-items:flex-end;max-width:98vw;overflow-x:auto;padding:.4em .3em .2em}
.ut{position:relative;width:4.1em;height:4.9em;border-radius:.8em;background:linear-gradient(#fff4d6,#e0c48a);border:.14em solid #8a5a1a;color:var(--ink);flex:none;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:.2em;box-shadow:0 .2em 0 #5a3a12}
.ut img{width:3.3em;height:3.3em;object-fit:contain;position:absolute;top:.15em}
.ut .n{position:absolute;top:-.45em;left:-.3em;background:#2e1806;color:#fff;font-size:.8em;padding:0 .4em;border-radius:.6em;border:.1em solid var(--gold)}
.ut .l{font-size:.68em;line-height:1;position:relative}
.ut.on{transform:translateY(-.5em);border-color:#ffd24a;box-shadow:0 0 0 .2em #ffd24a,0 .3em 0 #5a3a12}
.ut.empty{filter:grayscale(1);opacity:.55}
.ut.ab{background:linear-gradient(#cfe8ff,#7fb0e0);border-color:#1a4a7a}
.ut.ab .em{font-size:2.1em;position:absolute;top:.25em;line-height:1}
.ut.ab.cant{filter:grayscale(.8) brightness(.8)}
.sep{width:.15em;align-self:stretch;background:rgba(255,255,255,.35);margin:0 .2em;border-radius:.1em}
#energy{position:absolute;left:50%;transform:translateX(-50%);bottom:calc(max(.5em,env(safe-area-inset-bottom)) + 6em);font-size:.9em;background:rgba(10,30,60,.8);padding:.15em .7em;border-radius:1em;border:.1em solid #8fd0ff;white-space:nowrap}
#bend{position:absolute;right:.6em;bottom:calc(max(.5em,env(safe-area-inset-bottom)) + 6.2em)}
.hint{position:absolute;left:50%;top:26%;transform:translateX(-50%);background:rgba(30,16,6,.86);border:.14em solid var(--gold);border-radius:1em;padding:.5em 1em;font-size:1.05em;text-align:center;max-width:92vw;pointer-events:none;animation:fade .3s}
/* tutorial */
#tut{position:absolute;inset:0;pointer-events:none}
#tut .par{position:absolute;left:0;right:0;margin:0 auto;width:fit-content;top:calc(max(.5em,env(safe-area-inset-top)) + 4.4em);display:flex;align-items:flex-start;gap:.2em;max-width:min(26em,92vw);animation:pop2b .35s}
@keyframes pop2b{from{transform:translateY(40%);opacity:0}}
#tut .par img{width:4.6em;height:4.6em;object-fit:cover;border-radius:50%;border:.18em solid #ffd24a;box-shadow:0 0 0 .12em #5a3a12;flex:none;filter:drop-shadow(0 .2em .3em rgba(0,0,0,.5));animation:bob 2s infinite}
#tut .say{background:#fff8e6;color:var(--ink);border:.14em solid #5a3a12;border-radius:.2em 1em 1em 1em;margin-top:.8em;padding:.5em .8em;font-size:1em;line-height:1.2;box-shadow:0 .3em .8em rgba(0,0,0,.4)}
#tut .hand{position:absolute;width:3.2em;height:3.2em;font-size:2.6em;line-height:1;transform:translate(-20%,-10%);animation:tap 1s infinite;filter:drop-shadow(0 .1em .15em rgba(0,0,0,.6))}
@keyframes tap{0%,100%{transform:translate(-20%,-10%) scale(1)}50%{transform:translate(-20%,0) scale(.86)}}
#tut .ring{position:absolute;width:5em;height:5em;margin:-2.5em 0 0 -2.5em;border-radius:50%;border:.25em solid #ffd24a;animation:ring 1s infinite}
@keyframes ring{from{transform:scale(.4);opacity:1}to{transform:scale(1.3);opacity:0}}
/* sea chart */
#sea{position:absolute;inset:0;pointer-events:auto;background:#123a5a;animation:fade .25s}
#sea canvas{position:absolute;inset:0;width:100%;height:100%}
#sea .isle{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;cursor:pointer}
#sea .isle .face{width:3.4em;height:3.4em;border-width:.18em}
#sea .isle.sel .face{box-shadow:0 0 0 .2em #ffd24a,0 0 1em #ffd24a}
#sea .isle .pin{position:absolute;white-space:nowrap;font-size:.72em;background:rgba(30,16,6,.86);border-radius:.6em;padding:.05em .5em;border:.1em solid rgba(255,220,140,.5);pointer-events:none}
#sea .isle .ic{position:absolute;top:-.6em;right:-.8em;font-size:1.1em}
#sea .isle.me .face{border-color:#ffd24a;width:4em;height:4em}
#sea .op{width:3em;height:3em;border-radius:50%;display:grid;place-items:center;font-size:1.5em;border:.16em solid #fff;box-shadow:0 0 0 .12em #3a2410;background:#2a6a3a}
#seacard{position:absolute;background:linear-gradient(var(--parch),var(--parch2));color:var(--ink);border:.18em solid #8a5a1a;border-radius:1em;padding:.6em .7em;box-shadow:0 .4em 1.4em rgba(0,0,0,.5);pointer-events:auto;display:flex;flex-direction:column;gap:.35em;animation:fade .2s}
.land #seacard{right:.6em;top:4.2em;bottom:.6em;width:min(21em,40vw);overflow:auto}
.port #seacard{left:.5em;right:.5em;bottom:max(.5em,env(safe-area-inset-bottom));max-height:52vh;overflow:auto}
#seacard .hd{display:flex;gap:.6em;align-items:center}
#seacard .tags{display:flex;gap:.3em;flex-wrap:wrap}
.tag{font-size:.72em;padding:.1em .5em;border-radius:.6em;background:#3a2410;color:#fff}
.tag.r{background:#c0301a}.tag.b{background:#2a6aa8}.tag.g{background:#2a8a2a}.tag.p{background:#7a3ab8}.tag.y{background:#b88a0a}
#seatop{position:absolute;left:0;right:0;top:0;display:flex;align-items:center;justify-content:space-between;padding:max(.5em,env(safe-area-inset-top)) .6em .4em;background:linear-gradient(rgba(10,20,40,.85),rgba(10,20,40,0));pointer-events:auto}
#seatop h2{margin:0;font-family:Pirata,serif;font-weight:normal;font-size:1.9em;color:var(--gold)}
.lgi{width:1.4em;height:1.4em;vertical-align:-.3em}
.curt{position:absolute;inset:0;background:radial-gradient(circle,#1a4a6a,#06121e);display:grid;place-items:center;pointer-events:auto;font-family:Pirata,serif;font-size:2.6em;color:var(--gold);animation:fade .2s}
.curt.out{opacity:0;transition:opacity .35s}
.curt .cl{position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.03) 0 2px,transparent 2px 40px)}
#settings{position:absolute;right:.6em;bottom:calc(max(.7em,env(safe-area-inset-bottom)) + 7.2em)}
@media (max-aspect-ratio:1/1){#goal{top:calc(max(.5em,env(safe-area-inset-top)) + 3.6em);max-width:92vw}.news{top:calc(max(.5em,env(safe-area-inset-top)) + 12em);max-width:92vw}#side{top:auto;bottom:calc(max(.7em,env(safe-area-inset-bottom)) + 7.6em);transform:none}#res .rb{width:7.4em}}
`});var B,Me,An,$o=We(()=>{B=(r,e,t,n)=>{let i=document.createElement(r);return e&&(i.className=e),t!=null&&(i.innerHTML=t),n&&n.appendChild(i),i},Me=(r,e,t,n)=>{let i=B("button","btn "+(r||""),e,n);return i.onclick=s=>{s.stopPropagation(),t&&t(s,i)},i},An=(r,e,t)=>Math.max(e,Math.min(t,r))});function vi(r){if(gd[r])return gd[r];let[e,t]=Nb[r];return gd[r]=Kn(`<path d="M32 3l25 9v19c0 16-11 26-25 30C18 57 7 47 7 31V12z" fill="${e}" stroke="${t}" stroke-width="4"/><path d="M32 10l18 6v15c0 12-8 19-18 22z" fill="#fff" opacity=".25"/>${r>=5?'<path d="M18 30l-2-12 8 6 8-10 8 10 8-6-2 12z" fill="#ffd24a" stroke="#7a4300" stroke-width="2"/>':""}<text x="32" y="${r>=5?48:42}" font-size="${r>=5?14:22}" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" fill="${t}">${["I","II","III","IV","V","\u2605"][r]}</text>`)}var Kn,Ve,Qs,xd,rn,Nb,gd,qo,Yo=We(()=>{Mn();Kn=r=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">${r}</svg>`),Ve={g:"assets/ui/coin.webp",w:Kn('<g stroke="#3a1e08" stroke-width="3"><rect x="6" y="30" width="48" height="14" rx="7" fill="#b8743a"/><rect x="10" y="16" width="44" height="14" rx="7" fill="#c98448"/><rect x="6" y="44" width="50" height="14" rx="7" fill="#a8642e"/></g><g fill="#f0c890" stroke="#3a1e08" stroke-width="2.5"><circle cx="50" cy="23" r="6"/><circle cx="50" cy="37" r="6"/><circle cx="52" cy="51" r="6"/></g><g fill="none" stroke="#8a5020" stroke-width="1.5"><circle cx="50" cy="23" r="2.5"/><circle cx="50" cy="37" r="2.5"/><circle cx="52" cy="51" r="2.5"/></g>'),r:Kn('<path d="M26 6h12v12c8 4 12 10 12 18v20a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V36c0-8 4-14 12-18z" fill="#7a3a12" stroke="#2e1406" stroke-width="3"/><rect x="24" y="2" width="16" height="8" rx="2" fill="#d8b070" stroke="#2e1406" stroke-width="3"/><rect x="18" y="32" width="28" height="18" rx="3" fill="#f6e6c2" stroke="#2e1406" stroke-width="2"/><text x="32" y="46" font-size="13" text-anchor="middle" font-family="Arial" font-weight="bold" fill="#7a1a08">XXX</text><path d="M20 22c4-3 8-4 10-4" stroke="#e8a060" stroke-width="3" fill="none" stroke-linecap="round"/>'),p:Kn('<ellipse cx="32" cy="54" rx="20" ry="6" fill="#3a2410"/><path d="M12 16c0-4 40-4 40 0v38c0 4-40 4-40 0z" fill="#6a4020" stroke="#2a1406" stroke-width="3"/><ellipse cx="32" cy="16" rx="20" ry="6" fill="#8a5a30" stroke="#2a1406" stroke-width="3"/><g stroke="#2a2a2a" stroke-width="4" fill="none"><path d="M12 26c0 4 40 4 40 0"/><path d="M12 44c0 4 40 4 40 0"/></g><circle cx="32" cy="35" r="7" fill="#1a1a1a"/><path d="M38 10c6-6 10-6 12-2" stroke="#d8b070" stroke-width="3" fill="none"/><circle cx="51" cy="7" r="4" fill="#ffcf3a"/>'),trophy:Kn('<path d="M18 8h28v14c0 10-6 18-14 18S18 32 18 22z" fill="#ffd24a" stroke="#7a4300" stroke-width="3"/><path d="M18 14H8c0 10 6 14 12 14M46 14h10c0 10-6 14-12 14" fill="none" stroke="#7a4300" stroke-width="4"/><rect x="28" y="40" width="8" height="10" fill="#e99a12" stroke="#7a4300" stroke-width="3"/><rect x="18" y="50" width="28" height="8" rx="2" fill="#8a5020" stroke="#3a1e08" stroke-width="3"/><path d="M25 14l3 9" stroke="#fff6c0" stroke-width="3" stroke-linecap="round"/>'),shield:Kn('<path d="M32 4l24 8v18c0 16-10 26-24 30C18 56 8 46 8 30V12z" fill="#58b8ff" stroke="#123a6a" stroke-width="4"/><path d="M32 12l16 6v12c0 11-7 18-16 21z" fill="#a8e0ff"/>'),hammer:Kn('<rect x="28" y="22" width="8" height="38" rx="3" fill="#a8642e" stroke="#3a1e08" stroke-width="3" transform="rotate(-35 32 40)"/><rect x="10" y="8" width="34" height="16" rx="3" fill="#8a9aa8" stroke="#2a3440" stroke-width="3" transform="rotate(-35 27 16)"/>'),sword:Kn('<path d="M46 6l12 0 0 12-28 28-12-12z" fill="#d8e4ee" stroke="#2a3440" stroke-width="3"/><path d="M14 38l12 12" stroke="#7a4300" stroke-width="6" stroke-linecap="round"/><path d="M8 56l10-10" stroke="#5a3010" stroke-width="7" stroke-linecap="round"/><circle cx="7" cy="57" r="4" fill="#ffd24a" stroke="#7a4300" stroke-width="2"/>'),scroll:Kn('<rect x="12" y="10" width="40" height="44" rx="4" fill="#f6e6c2" stroke="#5a3a12" stroke-width="3"/><rect x="8" y="6" width="48" height="8" rx="4" fill="#c99a5a" stroke="#5a3a12" stroke-width="3"/><rect x="8" y="50" width="48" height="8" rx="4" fill="#c99a5a" stroke="#5a3a12" stroke-width="3"/><g stroke="#8a6a3a" stroke-width="3" stroke-linecap="round"><path d="M20 24h24M20 32h24M20 40h16"/></g><path d="M40 38l4 4 8-10" stroke="#3eaa2c" stroke-width="4" fill="none" stroke-linecap="round"/>'),log:Kn('<path d="M32 4l24 8v18c0 16-10 26-24 30C18 56 8 46 8 30V12z" fill="#c0301a" stroke="#4a0a02" stroke-width="4"/><g stroke="#3a2008" stroke-width="2"><path d="M18 16l26 26-3 3-26-26z" fill="#e8eef4"/><path d="M46 16L20 42l3 3 26-26z" fill="#e8eef4"/></g><g fill="#f2c040" stroke="#5a3a08" stroke-width="2"><path d="M14 40l8 8-3 3-8-8z"/><path d="M50 40l-8 8 3 3 8-8z"/></g>'),crown:Kn('<path d="M8 46L4 16l16 12 12-18 12 18 16-12-4 30z" fill="#ffd24a" stroke="#7a4300" stroke-width="3"/><rect x="8" y="46" width="48" height="10" rx="2" fill="#e99a12" stroke="#7a4300" stroke-width="3"/><circle cx="32" cy="34" r="5" fill="#e0302a"/><circle cx="18" cy="38" r="3.5" fill="#36c2ff"/><circle cx="46" cy="38" r="3.5" fill="#36c2ff"/>'),gear:Kn(`<g fill="#c8b8a0" stroke="#3a2a18" stroke-width="3"><circle cx="32" cy="32" r="16"/><g>${[0,45,90,135,180,225,270,315].map(r=>`<rect x="28" y="4" width="8" height="12" rx="2" transform="rotate(${r} 32 32)"/>`).join("")}</g></g><circle cx="32" cy="32" r="6" fill="#5a4a38"/>`),chest:"assets/ui/chest.webp",map:"assets/ui/map.webp",parrot:"assets/crew/parrot.webp",cannon:"assets/ui/cannon.webp",pearl:"assets/ui/pearl.webp"},Qs={deckhand:"assets/ui/pirate_0.webp",musketeer:"assets/ui/pirate_1.webp",looter:"assets/ui/pirate_2.webp",brute:"assets/ui/pirate_3.webp",monkey:"assets/ui/pirate_4.webp",grenadier:"assets/ui/pirate_5.webp"},xd={shot:"\u{1F4A3}",flare:"\u{1F386}",heal:"\u{1F37A}",smoke:"\u{1F32B}\uFE0F"},rn=r=>`assets/lords/${r}.webp`,Nb=[["#a8794a","#5a3a1a"],["#c8d0d8","#5a6470"],["#ffcf3a","#8a5a00"],["#58e0c0","#106a5a"],["#c06aff","#4a1a7a"],["#ff5a3a","#7a1006"]],gd={};qo=r=>xi[r].n});function vd(r,e,t){r.beginPath();for(let n=0;n<=24;n++){let i=n/24*Math.PI*2,s=e*(1+.16*Math.sin(i*3+t)+.08*Math.sin(i*5+t*2)),o=Math.cos(i)*s,a=Math.sin(i)*s*.8;n?r.lineTo(o,a):r.moveTo(o,a)}r.closePath()}var Tm,$l,yd,ql,Em=We(()=>{$o();Yo();Zr();Ks();gs();Gi();Tm={g:"gold",w:"wood",r:"rum",p:"powder"},$l=r=>Ye.filter(e=>r[e]>0).map(e=>`<span style="white-space:nowrap"><img class="ico" src="${Ve[e]}">${Ge(r[e])}</span>`).join(" ")||"\u2014",yd=r=>{let e=Oe()-r;return e<90?"just now":Dt(e).split(" ")[0]+" ago"},ql=class{constructor(e){this.ui=e,this.open=[]}get G(){return this.ui.G}get A(){return this.ui.A}resize(){this.seaEl&&this.layoutSea()}panel(e,t,n,i=""){let s=this.ui,o=B("div","pe","",s.layer);o.style.cssText="position:absolute;inset:0;background:rgba(10,6,2,.45);animation:fade .2s";let a=B("div","panel "+i,`<h2 class="ts">${e}</h2>`,o),l=B("div","body","",a),c={el:a,wrap:o,body:l,close:()=>{c.closed||(c.closed=1,o.remove(),n&&n(),this.open=this.open.filter(h=>h!==c),$.play("close"),s.tut.ev("close",e))}};return Me("","\u2715",()=>c.close(),a).className="x",o.onclick=h=>{h.target===o&&c.close()},this.open.push(c),t(l,c),c}closeAll(){this.open.slice().forEach(e=>e.close()),this.closeSea()}modal(e,t=""){let n=this.ui,i=B("div","pe","",n.layer);i.style.cssText="position:absolute;inset:0;background:rgba(10,6,2,.55);animation:fade .2s";let s=B("div","modal "+t,"",i),o={el:s,wrap:i,close:()=>{i.remove(),this.open=this.open.filter(a=>a!==o)}};return this.open.push(o),e(s,o),o}welcome(e,t){let n=this.G,i=this.ui,s={g:0,w:0,r:0,p:0},o=0;for(let l of n.base.bl)q[l.t].prod&&l.acc>1&&(s[q[l.t].res]+=l.acc,l.acc>=q[l.t].prod[l.lv-1]*7.9&&o++);let a=n.daily();this.modal((l,c)=>{B("h2","ts",t>3600?"Welcome back, Captain!":"Ahoy again!",l),t>60&&B("div","dim",`You were away ${Dt(t)}.`,l),Ye.some(d=>s[d]>1)&&(B("div","",`<b>Your cove produced:</b> ${$l(s)}`,l).style.marginTop=".5em",o&&B("div","",`<span style="color:#c0301a">\u26A0 ${o} collector${o>1?"s are":" is"} FULL \u2014 production stopped!</span>`,l));let h=n.base.done||0;if(h>(n.S.doneSeen||0)&&B("div","",`\u{1F528} <b>${h-(n.S.doneSeen||0)}</b> build${h-(n.S.doneSeen||0)>1?"s":""} finished`,l),n.S.doneSeen=h,e.length){B("div","","<b>While you slept\u2026</b>",l).style.marginTop=".5em";let d=B("div","list","",l);for(let f of e.slice(0,3)){let m=f.rec||f,x=Mt(m.att),p=B("div","it",`<img class="face" src="${rn(m.att)}"><div style="flex:1;line-height:1.15"><b>${x.name}</b> ${m.stars?`took ${"\u2605".repeat(m.stars)}`:"was repelled!"}<br><span class="dim" style="font-size:.8em">${m.stars?"Stole "+$l(m.loot):"Your defences held"} \xB7 ${m.dT<0?`<span style="color:#c0301a">${m.dT}\u{1F3C6}</span>`:`+${m.dT||0}\u{1F3C6}`}</span></div>`,d);!m.revenged&&m.stars&&Me("r sm","\u2694 Revenge",()=>{c.close(),this.revenge(m)},p)}}let u=B("div","row","",l);u.style.justifyContent="center",a?Me("g big",`<img class="ico" src="${Ve.chest}"> Open daily chest`,()=>{c.close(),this.daily()},u):Me("g big","Onward!",()=>{c.close(),$.play("confirm")},u)}),$.play("bell")}daily(){let e=this.G,t=e.daily(),n=e.S;$.play("open"),this.modal((i,s)=>{B("h2","ts","Daily Chest",i);let o=t?t.n:n.streak.n,a=B("div","","",i);a.style.cssText="display:grid;grid-template-columns:repeat(7,1fr);gap:.25em;margin:.6em 0";for(let l=1;l<=7;l++){let c=t?l<t.n:l<=o,h=t&&l===t.n;B("div","",`<div style="font-size:.7em">Day ${l}</div><img src="${Ve.chest}" style="width:2.2em;height:2.2em;${c?"filter:grayscale(1);opacity:.5":""}"><div style="font-size:.7em">${3+l*2}<i class="gem"></i></div>${c?"\u2713":""}`,a).style.cssText=`text-align:center;border-radius:.5em;padding:.2em;background:${h?"#ffe17a":"#fff6dc"};border:.12em solid ${h?"#e99a12":"#b8894a"}`}if(t){B("div","",`Today: <b>${t.gems}</b><i class="gem"></i> + <img class="ico" src="${Ve.g}">${Ge(t.g)}`,i);let l=Me("g big","Open!",()=>{let c=e.claimDaily();if(!c)return;$.play("reveal"),$.play("coins"),l.remove();let h=B("div","",`<img src="${Ve.chest}" style="width:7em;animation:pop .5s"><div style="font-size:1.6em">+${c.gems}<i class="gem"></i> +${Ge(c.g)} gold</div><div class="dim">Come back tomorrow for Day ${Math.min(7,c.n+1)} \u2014 don't break the \u{1F525}${c.n} streak!</div>`,i);h.style.textAlign="center",Me("","Nice!",()=>s.close(),i),this.ui.hudT=0},i);l.classList.add("glow")}else B("div","",`\u{1F525} Streak: <b>${n.streak.n}</b> day${n.streak.n>1?"s":""}. Next chest in <b>${Dt(86400-Oe()%86400)}</b>.`,i),Me("","OK",()=>s.close(),i)})}quests(){let e=this.G,t=this.panel("Quests",n=>{let i=()=>{n.innerHTML="";let s=e.evState(),o=s.e,a=B("div","it","",B("div","list","",n));a.style.background="linear-gradient(#ffe9b0,#f4c860)",a.innerHTML=`<div style="font-size:2.2em">${o.ico}</div><div style="flex:1;line-height:1.15"><b>${o.name}</b> <span class="tag p">Event \xB7 ${Dt(s.left)}</span><br><span style="font-size:.8em">${o.desc}</span><div class="pbar" style="margin-top:.2em"><i style="width:${s.p/o.goal.n*100}%"></i></div><span style="font-size:.75em">${Ge(s.p)} / ${Ge(o.goal.n)} ${o.goal.k==="stars"?"stars":o.goal.k==="loot"?"gold plundered":"ship abilities"}</span></div>`,s.claimed?B("span","","\u2713",a):Me(s.p>=o.goal.n?"g":"dis",`${o.gems}<i class="gem"></i>`,()=>{let c=e.evClaim();c&&($.play("milestone"),this.ui.toast(`+${c} gems!`),i())},a),B("div","dim",`Daily quests \u2014 new ones in ${Dt(86400-Oe()%86400)}`,n).style.margin=".4em 0";let l=B("div","list","",n);(e.S.qd.list||[]).forEach((c,h)=>{let u=B("div","it",`<img src="${Ve.scroll}" style="width:2.2em"><div style="flex:1;line-height:1.15">${c.t.replace("{n}",Ge(c.n))}<div class="pbar"><i style="width:${c.p/c.n*100}%"></i></div><span style="font-size:.75em">${Ge(c.p)}/${Ge(c.n)}</span></div>`,l);c.done?B("span","","\u2713",u):Me(c.p>=c.n?"g":"dis",`${c.g}<i class="gem"></i>`,()=>{let d=e.qClaim(h);d&&($.play("coins"),this.ui.toast(`+${d} gems!`),i())},u)})};i()})}log(){let e=this.G,t=e.P;this.panel("Raids on your cove",n=>{if(!t.log.length){B("div","dim","No one has dared to raid you\u2026 yet. Keep your shield up!",n);return}let i=B("div","list","",n);for(let s of t.log){let o=Mt(s.att),a=s.stars===0,l=!s.seen;s.seen=!0;let c=B("div","it",`<img class="face" src="${rn(s.att)}"><div style="flex:1;line-height:1.15"><b>${o.name}</b> ${l?'<span class="tag r">NEW</span>':""}<br><span style="font-size:.8em">${a?'<span style="color:#2a8a1a">Defended! \u{1F6E1}</span>':`<span style="color:#c0301a">${"\u2605".repeat(s.stars)} ${s.pct}%</span> \xB7 lost ${$l(s.loot)}`} \xB7 ${s.dT<0?s.dT:"+"+(s.dT||0)}\u{1F3C6} \xB7 ${yd(s.at)}</span></div>`,i),h=B("div","","",c);h.style.cssText="display:flex;flex-direction:column;gap:.3em",Me("b sm","\u25B6 Replay",()=>{this.closeAll(),e.qAdd("def",1),this.A.replay(s)},h),s.revenged?B("span","dim","Avenged \u2713",h).style.fontSize=".75em":a||Me("r sm","\u2694 Revenge",()=>this.revenge(s),h)}})}revenge(e){let t=this.G,n=t.startAttack(e.att,{revenge:e.id,free:!0});if(n.err){$.play("deny"),this.ui.toast(n.err),t.armyNow()<=0&&this.ui.train();return}this.closeAll(),$.play("horn"),this.A.attack(n)}ranks(){let e=this.G,t=e.W,n=Oe(),i=t.season.start+7*86400;this.panel("League",s=>{let o=t.player,a=li(o.trophies),l=xi[a+1];B("div","",`<div style="display:flex;align-items:center;gap:.6em"><img src="${vi(a)}" style="width:4em"><div style="flex:1"><div style="font-size:1.4em">${qo(a)} League</div>${l?`<div class="pbar"><i style="width:${An((o.trophies-xi[a].t)/(l.t-xi[a].t),0,1)*100}%"></i></div><span style="font-size:.8em">${l.t-o.trophies} \u{1F3C6} to ${l.n} \u2014 season reward +${15+(a+1)*20}<i class="gem"></i></span>`:"<span>Top league!</span>"}</div></div><div style="margin-top:.3em">\u23F3 Season ${t.season.n} ends in <b>${Dt(i-n)}</b> \xB7 reward now: <b>${15+a*20}</b><i class="gem"></i></div>`,s);let c=B("div","list","",s);c.style.marginTop=".5em",Wo(t).forEach((u,d)=>{let f=u.id==="you",m=!f&&Mt(u.id),x=B("div","it",`<b style="width:1.6em;text-align:center">${d+1}</b><img class="face" style="width:2.4em;height:2.4em" src="${f?Ve.parrot:rn(u.id)}"><div style="flex:1;line-height:1.1"><b>${f?"You":m.name}</b><br><span class="dim" style="font-size:.75em">${f?"Keep "+u.kl:m.kind+" \xB7 Keep "+u.kl}</span></div><img class="lgi" src="${vi(u.lg)}"><b>${Ge(u.trophies)}</b>`,c);f?x.style.cssText="background:linear-gradient(#ffe9b0,#f4c860);border-color:#e99a12":x.onclick=()=>{this.closeAll(),this.sea(u.id)}}),B("div","dim","News",s).style.marginTop=".6em";let h=B("div","list","",s);for(let u of t.news.slice(0,8))B("div","it",`${u.who?`<img class="face" style="width:1.8em;height:1.8em" src="${rn(u.who)}">`:"\u{1F4F0}"}<span style="font-size:.85em;flex:1">${u.txt}</span><span class="dim" style="font-size:.7em">${yd(u.t)}</span>`,h)})}seasonEnd(e){this.modal((t,n)=>{B("h2","ts",`Season ${e.n} over!`,t),B("div","",`<img src="${vi(e.league)}" style="width:5em"><div>You finished <b>#${e.rank}</b> in ${qo(e.league)} League.</div><div style="font-size:1.5em">+${e.gems}<i class="gem"></i></div><div class="dim">Trophies above 1000 were halved \u2014 climb back before the rivals do!</div>`,t).style.textAlign="center",Me("g","Claim",()=>{$.play("milestone"),n.close()},t)})}unlocks(){let e=this.ui,n=this.G.kl();this.panel("Keep unlocks",i=>{for(let s=n+1;s<=Math.min(8,n+3);s++)B("div","it",`<img src="${this.A.iconOf("keep",s)}" style="width:3em"><div><b>Keep Lv ${s}</b><br><span style="font-size:.85em">${e.unlockText(s)}</span></div>`,B("div","list","",i))})}settings(){let e=_n.data;this.panel("Settings",t=>{let n=B("div","list","",t),i=(l,c,h)=>{let u=B("div","it",`<span style="flex:1">${l}</span>`,n),d=Me("","",()=>{e[c]=e[c]>0?0:h,f(),$.apply(),_n.save(),$.play("click")},u),f=()=>{d.className="btn "+(e[c]>0?"g":"r"),d.textContent=e[c]>0?"On":"Off"};f()};i("\u{1F3B5} Music","music",.6),i("\u{1F50A} Sound effects","sfx",.9);let s=B("div","it",'<span style="flex:1">\u2728 Graphics</span>',n),o=["Auto","Low","High"],a=Me("b",o[e.gfx||0],()=>{e.gfx=((e.gfx||0)+1)%3,a.textContent=o[e.gfx],window.__setGfx&&window.__setGfx(e.gfx),_n.save()},s);B("div","dim","Pirate Cove Wars \xB7 progress saves automatically.",t).style.marginTop=".6em"})}sea(e){let t=this.ui,n=this.G;this.closeSea(),$.play("page"),t.closeSheet();let i=this.seaEl=B("div","","",t.layer);i.id="sea",this.cv=B("canvas","","",i);let s=B("div","","",i);s.id="seatop",s.innerHTML=`<h2 class="ts">Sea Chart</h2><div class="ts" style="display:flex;gap:.6em;align-items:center;font-size:.9em"><span><img class="ico" src="${Ve.g}">${Ge(n.res.g)}</span><span>\u2694 ${n.armyNow()}/${n.armyCap()}</span></div>`,Me("","\u2715",()=>this.closeSea(),s).className="btn r sm",this.nodes=[];let o=n.W,a=n.rivals(),l=B("div","isle me pe",`<img class="face" src="${Ve.parrot}"><span class="pin ts">Your Cove</span>`,i);this.nodes.push({e:l,u:.5,v:.55,id:"you"}),Zs.forEach((c,h)=>{let u=a.find(x=>x.id===c.id);if(!u)return;let d=-Math.PI/2+h/Zs.length*Math.PI*2+.2,f=.36+h*37%7/70,m=B("div","isle pe",`<img class="face" src="${rn(c.id)}" style="border-color:${c.col}"><span class="pin ts"><img class="lgi" src="${vi(u.lg)}">${c.name.split(" ").slice(-1)[0]} ${Ge(u.trophies)}</span>${u.shield>0?'<span class="ic">\u{1F6E1}</span>':u.mine?'<span class="ic">\u{1F620}</span>':u.pact?'<span class="ic">\u{1F91D}</span>':""}`,i);m.onclick=()=>this.pick(c.id),this.nodes.push({e:m,u:.5+Math.cos(d)*f*1.15,v:.5+Math.sin(d)*f,id:c.id,col:c.col,theme:c.theme,r:u})}),n.kl()>=2&&n.outposts().forEach(c=>{let h=B("div","isle pe",`<div class="op" style="background:${{w:"#2a6a3a",p:"#7a2a1a",r:"#2a5a7a",g:"#8a6a1a"}[c.res]}"><img src="${Ve[c.res]}" style="width:1.8em"></div><span class="pin ts">${c.name}${c.owner==="you"?" \u2713":""}</span>`,i);h.onclick=()=>this.pickOp(c.id),this.nodes.push({e:h,u:c.x,v:c.y,id:"op:"+c.id,op:c,theme:c.theme})}),this.card=B("div","pe","",i),this.card.id="seacard",this.layoutSea(),this.pick(e||this.suggest(a)),t.tut.ev("sea")}suggest(e){let t=this.G,n=t.P.log.find(o=>!o.revenged&&o.stars);if(n)return n.att;let i=Ys(t.base);return(e.filter(o=>o.shield<=0).sort((o,a)=>Math.abs(o.def-i*.8)-Math.abs(a.def-i*.8))[0]||e[0]).id}closeSea(){this.seaEl&&(this.seaEl.remove(),this.seaEl=null,$.play("close"))}layoutSea(){let e=this.seaEl,t=this.ui;if(!e)return;let n=innerWidth,i=innerHeight,s=t.k*15,o=t.port;e.className=o?"port":"land";let a=3.6*s,l=o?{x:s,y:a+s,w:n-2*s,h:i*.48-a-s}:{x:1.5*s,y:a+s,w:n-Math.min(21*s,n*.4)-4*s,h:i-a-3*s},c=[];for(let u of this.nodes)u.x=l.x+u.u*l.w,u.y=l.y+u.v*l.h,u.e.style.left=u.x+"px",u.e.style.top=u.y+"px",c.push({x:u.x-1.9*s,y:u.y-1.9*s,w:3.8*s,h:3.8*s});let h=(u,d)=>u.x<d.x+d.w&&d.x<u.x+u.w&&u.y<d.y+d.h&&d.y<u.y+u.h;for(let u of this.nodes){let d=u.e.querySelector(".pin"),f=d.offsetWidth||6*s,m=d.offsetHeight||s,x=[[-f/2,2*s],[-f/2,-2*s-m],[2*s,-m/2],[-2*s-f,-m/2]],p=x[0];for(let g of x){let b={x:u.x+g[0],y:u.y+g[1],w:f,h:m};if(!(b.x<2||b.x+f>n-2)&&!c.some(y=>h(y,b))){p=g;break}}c.push({x:u.x+p[0],y:u.y+p[1],w:f,h:m}),d.style.left=p[0]+u.e.offsetWidth/2+"px",d.style.top=p[1]+u.e.offsetHeight/2+"px"}this.drawSea(l)}drawSea(e){let t=this.cv,n=innerWidth,i=innerHeight,s=Math.min(2,devicePixelRatio||1);t.width=n*s,t.height=i*s;let o=t.getContext("2d");o.scale(s,s);let a=o.createRadialGradient(n*.4,i*.5,50,n*.4,i*.5,Math.max(n,i)*.8);a.addColorStop(0,"#2a7aa0"),a.addColorStop(.6,"#185a80"),a.addColorStop(1,"#0a2a44"),o.fillStyle=a,o.fillRect(0,0,n,i),o.strokeStyle="rgba(255,240,200,.08)",o.lineWidth=1;for(let f=0;f<n;f+=60)o.beginPath(),o.moveTo(f,0),o.lineTo(f,i),o.stroke();for(let f=0;f<i;f+=60)o.beginPath(),o.moveTo(0,f),o.lineTo(n,f),o.stroke();o.strokeStyle="rgba(255,255,255,.12)";for(let f=0;f<70;f++){let m=f*137.5%n,x=(f*91.3+40)%i;o.beginPath(),o.arc(m,x,6,Math.PI*1.1,Math.PI*1.9),o.stroke()}let l=this.nodes[0],c=this.ui.k*15;for(let f of this.nodes)f!==l&&(o.setLineDash([6,7]),o.lineWidth=2.5,o.strokeStyle=f.r&&f.r.mine?"rgba(255,90,60,.8)":"rgba(255,240,200,.45)",o.beginPath(),o.moveTo(l.x,l.y),o.quadraticCurveTo((l.x+f.x)/2+(f.y-l.y)*.15,(l.y+f.y)/2-(f.x-l.x)*.15,f.x,f.y),o.stroke());o.setLineDash([]);let h={cove:["#e8d49a","#4a9a3a"],jungle:["#d8c48a","#2a7a2a"],volcano:["#6a5a4a","#3a2a22"],frost:["#e8f0f4","#a8c8d8"]};for(let f of this.nodes){let[m,x]=h[f.theme||"cove"],p=2.6*c;o.save(),o.translate(f.x,f.y),o.fillStyle="rgba(160,230,255,.25)",vd(o,p*1.35,f.u*99),o.fill(),o.fillStyle=m,vd(o,p*1.1,f.u*99),o.fill(),o.fillStyle=x,vd(o,p*.8,f.v*77),o.fill(),f.theme==="volcano"&&(o.fillStyle="#ff6a2a",o.beginPath(),o.arc(p*.3,-p*.5,p*.15,0,7),o.fill()),o.restore()}let u=e.x+e.w-3*c,d=e.y+e.h-2*c;o.save(),o.translate(u,d),o.fillStyle="rgba(255,240,200,.55)";for(let f=0;f<4;f++)o.rotate(Math.PI/2),o.beginPath(),o.moveTo(0,-2.2*c),o.lineTo(.4*c,0),o.lineTo(-.4*c,0),o.fill();o.font=`${c}px Pirata,serif`,o.textAlign="center",o.fillText("N",0,-2.4*c),o.restore()}pick(e){var m;let t=this.G,n=this.ui;this.nodes.forEach(x=>x.e.classList.toggle("sel",x.id===e)),$.play("select");let i=t.rivals().find(x=>x.id===e);if(!i)return;let s=i.L,o=this.card;o.innerHTML="";let l=Ys(t.base)/Math.max(1,i.def),c=l>1.4?["Easy","g"]:l>.9?["Fair","y"]:["Tough","r"];B("div","hd",`<img class="face big" src="${rn(e)}" style="border-color:${s.col}"><div style="line-height:1.1"><div style="font-family:Pirata,serif;font-size:1.6em">${s.name}</div><div class="dim">${s.title}</div><div class="tags" style="margin-top:.2em"><span class="tag b">${s.kind}</span><span class="tag ${c[1]}">${c[0]}</span><span class="tag"><img class="lgi" src="${vi(i.lg)}" style="width:1.1em;height:1.1em"> ${Ge(i.trophies)}</span><span class="tag">Keep ${i.kl}</span></div></div>`,o),B("div","quote",`\u201C${s.quote[Math.floor(Oe()/600)%s.quote.length]}\u201D`,o),B("div","",`<b>Loot:</b> ${$l(i.loot)}`,o);let h=[];i.mine&&h.push(`<span style="color:#c0301a">\u{1F620} Raided you ${i.mine}\xD7 \u2014 revenge is sweet!</span>`),i.grudge>0&&h.push(`<span style="color:#a0401a">\u2694 Holds a grudge (${i.grudge}) \u2014 expect a counter-raid</span>`),i.pact&&h.push(`\u{1F91D} In a pact against ${i.pact.target==="you"?"<b>you</b>":((m=Mt(i.pact.target))==null?void 0:m.name)||"the leader"}`),i.stats&&h.push(`<span class="dim">Raids won ${i.stats.win||0}/${i.stats.atk||0} \xB7 defences held ${i.stats.defWin||0}/${i.stats.def||0}</span>`),B("div","",h.join("<br>"),o).style.cssText="font-size:.85em;margin:.3em 0;line-height:1.25";let u=t.W.news.filter(x=>x.who===e).slice(0,2);u.length&&(B("div","dim",u.map(x=>"\u{1F4F0} "+x.txt+" \xB7 "+yd(x.t)).join("<br>"),o).style.fontSize=".75em");let d=t.P.log.find(x=>x.att===e&&!x.revenged&&x.stars),f=B("div","row","",o);if(f.style.marginTop=".5em",d)Me("r big",'\u2694 Revenge! <span style="font-size:.6em">free</span>',()=>this.revenge(d),f);else if(i.shield>0)B("div","stat",`\u{1F6E1} Shielded ${Dt(i.shield)}`,f);else{let x=t.searchCost(i.kl),p=Me("g big",`\u26F5 Set sail <span style="font-size:.6em"><img class="ico" src="${Ve.g}">${Ge(x)}</span>`,()=>this.sail(e),f);p.dataset.k="sail"}}pickOp(e){let t=this.G;this.nodes.forEach(a=>a.e.classList.toggle("sel",a.id==="op:"+e)),$.play("select");let n=t.outposts().find(a=>a.id===e),i=this.card;i.innerHTML="";let s=n.owner==="you"?"You":n.owner?Mt(n.owner).name:"Wild smugglers";B("div","hd",`<div class="op" style="width:4em;height:4em"><img src="${Ve[n.res]}" style="width:2.6em"></div><div><div style="font-family:Pirata,serif;font-size:1.5em">${n.name}</div><div class="tags"><span class="tag g">Outpost</span><span class="tag">Keep ${n.kl}</span><span class="tag y">+${n.rate} ${Tm[n.res]}/h</span></div></div>`,i),B("div","",`Held by: <b>${s}</b>${n.owner&&n.owner!=="you"?` <img class="face" style="width:1.6em;height:1.6em;vertical-align:-.4em" src="${rn(n.owner)}">`:""}<br>Stockpile: <img class="ico" src="${Ve[n.res]}">${Ge(n.stock)}`,i).style.margin=".4em 0",B("div","dim","Win 2\u2605 to capture it. Outposts keep producing for their owner \u2014 even while you sleep.",i).style.fontSize=".8em";let o=B("div","row","",i);n.owner==="you"?Me("g big",`Collect ${Ge(n.stock)}`,()=>{let a=t.collectOutpost(e);$.play(a?"coins":"deny"),this.ui.toast(a?`+${Ge(a)} ${Tm[n.res]}`:"Storage full or empty"),this.pickOp(e)},o):t.kl()<n.kl-1?B("div","stat",`\u{1F512} Keep Lv ${n.kl-1} needed`,o):Me("r big","\u2694 Capture",()=>this.sail("op:"+e),o)}sail(e){let t=this.G,n=this.ui,i=t.startAttack(e);if(i.err){$.play("deny"),i.err==="need"?n.toast(`Need ${Ge(i.c.g)} gold to set sail`):n.toast(i.err),t.armyNow()<=0&&(this.closeSea(),n.train());return}this.closeSea(),$.play("horn"),this.A.attack(i)}}});var Am,Rm,Yl,Cm=We(()=>{$o();Yo();Zr();Mn();gs();Gi();Am={Aggressive:"You got lucky. I'll be back with twice the crew!",Turtle:"Impossible\u2026 my walls! Rebuild them THICKER!",Greedy:"My gold! You'll pay that back with interest!",Sneaky:"Enjoy it. You won't see my answer coming.",Balanced:"Well fought, captain. Next time it's my turn.",Reckless:"HA! Again! AGAIN! I'm coming for you!",Trapper:"Cold revenge is the best kind.",Economist:"An expensive lesson. I'll invoice you."},Rm={Aggressive:"Is that all? Pathetic!",Turtle:"My walls have never fallen.",Greedy:"Thanks for the free crew, matey!",Sneaky:"You never even saw the traps.",Balanced:"A fair fight. Train harder.",Reckless:"BOOM! Hahaha!",Trapper:"Step lightly next time\u2026",Economist:"Poor investment, captain."},Yl=class{constructor(e){this.ui=e,this.el=B("div","","",e.root),this.el.id="bhud",this.el.style.display="none",this.sel=null,this.flies=[],this.redT=0}get G(){return this.ui.G}get A(){return this.ui.A}mode(e){if(this.m=e,this.el.innerHTML="",this.flies=[],this.sel=null,this.hintEl=null,e==="home"||!e){this.el.style.display="none",Ht.gameplayStop();return}this.el.style.display="",Ht.gameplayStart();let t=this.A;this.bt=e==="attack"?t.A.bt:e==="defend"?t.D.bt:t.R.bt;let n=B("div","ts",'<span class="tm"></span><span class="st"></span><span class="pc"></span>',this.el);n.id="btop",this.$t=n.children[0],this.$s=n.children[1],this.$p=n.children[2];let i=e==="attack"?t.A.id:e==="defend"?t.D.att:t.R.rec.att,s=Mt(i),o=B("div","ts","",this.el);o.id="bfoe";let a=e==="attack"?t.A.name:s?s.name:"";if(o.innerHTML=s?`<img class="face" src="${rn(i)}" style="border-color:${s.col}"><div style="line-height:1.1;min-width:0"><b>${e==="attack"?a:a+" attacks!"}</b><div style="font-size:.72em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">\u201C${s.quote[Math.random()*s.quote.length|0]}\u201D</div></div>`:`<img class="face" src="${Ve.map}"><b>${a}</b>`,e==="attack"){let l=B("div","ts","",this.el);l.id="bloot",this.$loot=l,this.buildTray();let c=B("div","ts","",this.el);c.id="energy",this.$en=c,this.$end=Me("r","Retreat",()=>this.endNow(),this.el),this.$end.id="bend",this.G.S.tut>=99&&this.hint("Tap the beach to land your crew. Hold to pour them in!",4)}if(e==="defend"){let l=B("div","ts","",this.el);l.id="energy",this.$en=l,this.hint("Your cove is under attack! Tap their crew to fire the \u{1F4A5} Great Gun",4)}if(e==="replay"){let l=B("div","row","",this.el);l.style.cssText="position:absolute;left:50%;bottom:max(1em,env(safe-area-inset-bottom));transform:translateX(-50%);display:flex;gap:.5em";let c=Me("b","\u23E9 2\xD7",()=>{let h=t.btv.speed===2?4:t.btv.speed===4?1:2;t.btv.speed=h,c.textContent=`\u23E9 ${h}\xD7`},l);Me("","\u23ED Skip",()=>{t.btv.speed=30},l),Me("r","\u2715 Exit",()=>{this.close(),t.home()},l)}this.frame(0)}buildTray(){let e=B("div","","",this.el);e.id="tray",this.$tray=e,this.cards={};let t=this.bt;for(let i of En){if(!(t.army[i]>0))continue;let s=Me("ut",`<img src="${Qs[i]}"><span class="n">${t.army[i]}</span><span class="l">${bt[i].name}</span>`,()=>this.pick("u:"+i),e);s.dataset.k="u:"+i,this.cards["u:"+i]=s}B("div","sep","",e);for(let i of Object.keys(Ws)){let s=Me("ut ab",`<span class="em">${xd[i]}</span><span class="n">\u26A1${t.abCost(i)}</span><span class="l">${Ws[i].name}</span>`,()=>this.pick("a:"+i),e);s.dataset.k="a:"+i,this.cards["a:"+i]=s}let n=En.find(i=>t.army[i]>0);n&&this.pick("u:"+n,!0),this.fitTray()}fitTray(){let e=this.$tray;if(!e)return;let t=1;for(e.style.fontSize="";e.scrollWidth>e.clientWidth+1&&t>.62;)t-=.04,e.style.fontSize=t+"em"}pick(e,t){let n=this.bt;if(e.startsWith("a:")&&n.energy<n.abCost(e.slice(2))){$.play("deny"),this.hint(`Need \u26A1${n.abCost(e.slice(2))} energy \u2014 destroy buildings to earn more`,2);return}this.sel=e;for(let i in this.cards)this.cards[i].classList.toggle("on",i===e);t||$.play("select"),e.startsWith("a:")&&this.hint(`${xd[e.slice(2)]} ${Ws[e.slice(2)].desc} Tap where to use it.`,2.5),this.ui.tut.ev("pick",e)}hint(e,t=2.5){this.hintEl&&this.hintEl.remove();let n=this.hintEl=B("div","hint ts",e,this.el);setTimeout(()=>{this.hintEl===n&&(n.remove(),this.hintEl=null)},t*1e3)}down(e,t,n,i){let s=this.bt,o=this.A;if(!s||s.over)return!1;if(this.m==="defend")return s.guns<=0?(i||$.play("deny"),!0):(s.gun(e.x,e.y)&&($.play("cannon"),o.V.shake&&o.V.shake(.4,.3),this.ui.tut.ev("gun")),!0);if(this.m!=="attack"||!this.sel)return!1;if(this.sel.startsWith("u:")){let l=this.sel.slice(2);if(!(s.army[l]>0)){let h=En.find(u=>s.army[u]>0);return h?(this.pick("u:"+h,!0),this.down(e,t,n,i)):(i||($.play("deny"),this.hint("All crew landed! Use ship abilities \u26A1",2)),!1)}return s.canDeploy(e.x,e.y)?(s.deploy(l,e.x,e.y)&&($.play("deploy"),o.fx.puff&&o.fx.puff(e.p,.6),this.ui.tut.ev("deploy",l),this.firstDeploy||(this.firstDeploy=1,this.hintEl&&this.hintEl.remove())),"hold"):(i||(this.flashRed(),$.play("deny"),this.hint("Too close! Land your crew outside the red zone",1.6)),!0)}if(i)return!1;let a=this.sel.slice(2);if(s.ability(a,e.x,e.y)){$.play(a==="shot"?"cannon":a==="flare"?"whoosh":a==="heal"?"glass":"splash"),this.ui.tut.ev("ability",a);let l=En.find(c=>s.army[c]>0);l&&s.energy<s.abCost(a)&&this.pick("u:"+l,!0)}else $.play("deny"),this.hint("Not enough \u26A1 energy",1.5);return!0}flashRed(){let e=this.A.island;e.red&&(e.red.visible=!0,this.redT=1.6)}endNow(){let e=this.bt,t=this.A;if(!(!e||e.over)){if(!e.started){$.play("close"),this.close(),t.btv.stop(),t.home();return}this.confirm("End the raid now? Crew still on deck stay home.",()=>e.end())}}confirm(e,t){this.ui.pn.modal((i,s)=>{B("div","",e,i).style.fontSize="1.1em";let o=B("div","row","",i);o.style.cssText="display:flex;gap:.6em;justify-content:center;margin-top:.7em",Me("","Keep fighting",()=>s.close(),o),Me("r","End raid",()=>{s.close(),t()},o)})}frame(e){let t=this.bt;if(!t||!this.m||this.m==="home")return;let n=this.A,i=Wr-t.t;if(this.$t.textContent=`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`,this.$t.style.color=i<20?"#ff6a4a":"",this.$s.innerHTML=[0,1,2].map(o=>`<span style="color:${o<t.stars?"#ffd24a":"#5a4a3a"}">\u2605</span>`).join(""),this.$p.textContent=t.pct+"%",this.$loot&&(this.$loot.innerHTML=Ye.filter(o=>t.loot[o]>0||o==="g").map(o=>`<div><img class="ico" src="${Ve[o]}">${Ge(t.loot[o])}</div>`).join("")),this.$en&&(this.$en.innerHTML=this.m==="defend"?`\u{1F4A5} Great Gun \xD7${t.guns}`:`\u26A1 ${Math.floor(t.energy)} energy`),this.cards)for(let o in this.cards){let a=this.cards[o];if(o.startsWith("u:")){let l=t.army[o.slice(2)]||0;a.querySelector(".n").textContent=l,a.classList.toggle("empty",!l)}else{let l=t.abCost(o.slice(2));a.querySelector(".n").textContent="\u26A1"+l,a.classList.toggle("cant",t.energy<l)}}if(this.$end&&(this.$end.textContent=t.started?"End raid":"Retreat"),this.redT>0){this.redT-=e;let o=n.island;o.redU.op.value=An(this.redT,0,1)*.55,this.redT<=0&&(o.red.visible=!1)}n.island.redU&&(n.island.redU.time.value+=e);let s={};this.flies=this.flies.filter(o=>{o.t+=e,o.p.y+=e*2.5;let a=n.V.toScreen(o.p,s);return o.e.style.left=a.x+"px",o.e.style.top=a.y+"px",o.e.style.opacity=An(2-o.t*1.4,0,1),o.t>1.4?(o.e.remove(),!1):!0})}lootPop(e,t){let n=Ye.filter(s=>t[s]>=1).sort((s,o)=>t[o]-t[s])[0];if(!n)return;let i=B("div","fly ts",`<img class="ico" src="${Ve[n]}">+${Ge(t[n])}`,this.el);i.style.color="#ffe08a",this.flies.push({e:i,p:e.clone(),t:0}),$.play("coin",.6)}close(){this.ui.pn.closeAll()}starsHTML(e){return`<div class="stars">${[0,1,2].map(t=>`<i class="${t<e?"on":""}" style="animation-delay:${.3+t*.35}s">\u2605</i>`).join("")}</div>`}attackEnd(e){let t=this.G,n=this.ui,i=t.endAttack(e);_n.save();let s=e.id==="tut",o=Mt(e.id),a=i.stars>0;for(let c=0;c<i.stars;c++)setTimeout(()=>$.play("star"),300+c*350);setTimeout(()=>$.play(a?"win":"lose"),200),i.stars>=2&&Ht.happytime();let l=0;!s&&i.stars>=2&&Math.random()<.35+i.stars*.1&&(l=1+Math.floor(Math.random()*(i.stars*2)),t.S.gems+=l),n.pn.modal((c,h)=>{if(B("h2","ts",a?i.stars===3?"Total Plunder!":"Victory!":"Defeat",c),c.insertAdjacentHTML("beforeend",this.starsHTML(i.stars)),B("div","",`<b>${i.pct}%</b> destroyed`,c),B("div","",`<div style="font-size:1.25em;margin:.3em 0">${Ye.filter(f=>i.taken[f]>0).map(f=>`<span style="white-space:nowrap;margin:0 .3em"><img class="ico" src="${Ve[f]}">+${Ge(i.taken[f])}</span>`).join("")||"No loot"}</div>`,c),s&&i.dT>0&&B("div","",`<span style="color:#2a8a1a;font-size:1.2em">+${i.dT} \u{1F3C6}</span>`,c),!s){let f=t.P,m=li(f.trophies),x=xi[m+1];B("div","",i.dT<0?`<span style="color:#c0301a;font-size:1.2em">\u2212${-i.dT} \u{1F3C6} lost</span>`:`<span style="color:#2a8a1a;font-size:1.2em">+${i.dT} \u{1F3C6}</span>`,c),B("div","dim",`<img class="lgi" src="${vi(m)}" style="width:1.2em;vertical-align:-.25em"> ${qo(m)} \xB7 ${Ge(f.trophies)} \u{1F3C6}${x?` \xB7 ${x.t-f.trophies} to ${x.n}`:""}`,c).style.fontSize=".85em"}l&&B("div","",`<img src="${Ve.chest}" style="width:2.6em;vertical-align:middle;animation:pop .5s"> Bonus chest! <b>+${l}</b><i class="gem"></i>`,c),o&&B("div","quote",`<img class="face" style="width:2em;height:2em;vertical-align:middle;margin-right:.3em" src="${rn(e.id)}"> <b>${o.name}:</b> \u201C${a?Am[o.kind]:Rm[o.kind]}\u201D`,c),o&&a&&(B("div","dim","\u2694 They'll hold a grudge \u2014 keep your defences ready!",c).style.fontSize=".8em");let u=B("div","","",c);u.style.cssText="display:flex;gap:.5em;justify-content:center;flex-wrap:wrap;margin-top:.7em";let d=()=>{h.close(),this.ui.A.home()};if(!s&&Ye.some(f=>i.taken[f]>0)){let f=Me("b","\u{1F4FA} Double loot",()=>{f.remove(),Ht.ad("rewarded",m=>{if(!m)return;let x=t.caps();Ye.forEach(p=>t.base.res[p]=Math.min(x[p],t.base.res[p]+i.taken[p])),$.play("coins"),n.toast("Loot doubled!")})},u)}Me("g big",s?"Continue":"Return home",()=>{d(),n.tut.ev("home")},u),s||Me("","\u26F5 Next raid",()=>{d(),setTimeout(()=>n.pn.sea(),700)},u)},"res"),n.tut.ev("battleEnd",i)}defendEnd(e){let t=this.G,n=this.ui,i=t.endDefence(e);_n.save();let s=Mt(e.att),o=i.stars===0;setTimeout(()=>$.play(o?"win":"lose"),200),n.pn.modal((a,l)=>{B("h2","ts",o?"Defence held!":`${s.name} raided you`,a),a.insertAdjacentHTML("beforeend",this.starsHTML(i.stars)),B("div","",o?"Your cove stood strong. \u{1F6E1}":`Lost ${Ye.filter(h=>i.loot[h]>0).map(h=>`<img class="ico" src="${Ve[h]}">${Ge(i.loot[h])}`).join(" ")||"nothing"}`,a),B("div","",i.dT<0?`<span style="color:#c0301a;font-size:1.2em">${i.dT} \u{1F3C6}</span>`:`<span style="color:#2a8a1a;font-size:1.2em">+${i.dT} \u{1F3C6}</span>`,a),t.P.shield>Oe()&&B("div","dim",`\u{1F6E1} Shield active for ${Dt(t.P.shield-Oe())}`,a),B("div","quote",`<img class="face" style="width:2em;height:2em;vertical-align:middle" src="${rn(e.att)}"> \u201C${o?Am[s.kind]:Rm[s.kind]}\u201D`,a);let c=B("div","","",a);c.style.cssText="display:flex;gap:.5em;justify-content:center;margin-top:.7em",o||Me("r big","\u2694 Revenge!",()=>{l.close(),this.A.home(),setTimeout(()=>n.pn.revenge(i),700)},c),Me(o?"g big":"","Home",()=>{l.close(),this.A.home()},c)},"res")}replayEnd(e){let t=this.ui,n=Mt(e.att);t.pn.modal((i,s)=>{B("h2","ts","Replay over",i),i.insertAdjacentHTML("beforeend",this.starsHTML(e.stars)),B("div","",`${n.name} \xB7 ${e.pct}%`,i);let o=B("div","","",i);o.style.cssText="display:flex;gap:.5em;justify-content:center;margin-top:.7em",!e.revenged&&e.stars&&Me("r big","\u2694 Revenge!",()=>{s.close(),this.A.home(),setTimeout(()=>t.pn.revenge(e),700)},o),Me("","Home",()=>{s.close(),this.A.home()},o)})}shipsReady(){}}});var Ob,Kl,Pm=We(()=>{$o();Yo();Zr();Mn();Xs();gs();Gi();It();Ob=["Ahoy, Captain! Your gold mine is overflowing \u2014 <b>tap the coin</b> to grab it!","Shiny! Now make the cove stronger. <b>Tap your Cannon</b>.","Tap <b>Upgrade</b> \u2014 bigger guns keep raiders away!","Builders are slow\u2026 this first one is on me. <b>Finish FREE!</b>","Boom! Now let's steal some loot. Weak little <b>Rusty Rocks</b> is nearby \u2014 tap <b>RAID</b>!","<b>Tap the beach</b> to land your crew. <b>Hold</b> to pour them in!","Now blast them from the ship! Pick the <b>\u{1F4A3} Cannon Shot</b>\u2026","\u2026and <b>tap a building</b> to fire!","Let the crew finish the job! Destroy the Keep for a \u2B50","Your crew needs reinforcements! <b>Tap the Tavern</b>.","Tap <b>Train crew</b>.","Tap <b>Fill army</b> \u2014 crew train even while you're away!","Eight pirate lords rule these seas. They grow while you sleep, scout you, and <b>remember who raided them</b>. Tap <b>RAID</b> to see them!","Pick a lord and set sail! Win trophies to climb the league before the season ends. Good luck, Captain! \u{1F99C}"],Kl=class{constructor(e){this.ui=e,this.el=B("div","","",e.root),this.el.id="tut",this.cur=-1,this.v3=new P,this.sp={}}get S(){return this.ui.S}get G(){return this.ui.G}get A(){return this.ui.A}get on(){return(this.S.tut||0)<99}get step(){return this.S.tut||0}set step(e){this.S.tut=e,_n.save(),this.show()}begin(){this.S.tut||(this.S.tut=0),this.show()}find(e){return this.G.base.bl.find(t=>t.t===e)}show(){let e=this.step;if(this.el.innerHTML="",this.hand=this.ring=null,!this.on)return;let t=this.A.mode;if((e>=5&&e<=8)!==(t==="attack")||t==="defend"||t==="replay")return;let i=B("div","par",`<img src="${Ve.parrot}"><div class="say">${Ob[e]||""}</div>`,this.el);if(e>=1&&e!==5){let s=Me("sm","skip",()=>this.finish(),i.querySelector(".say"));s.style.cssText="font-size:.6em;margin-left:.6em;padding:.1em .5em;vertical-align:middle;opacity:.7"}this.hand=B("div","hand","\u{1F446}",this.el),this.hand.style.display="none",e!==this.cur&&(this.cur=e,$.play("pop")),e===8&&setTimeout(()=>{this.step===8&&(this.el.innerHTML="",this.hand=null)},3500),e===13&&setTimeout(()=>{this.step===13&&this.finish()},7e3)}finish(){this.S.tut=99,_n.save(),this.el.innerHTML="",this.hand=null,this.ui.hudT=0;let e=this.G.P;e.protect=Math.max(e.protect||0,Oe()+3600)}mode(){this.on&&(this.A.mode==="home"&&this.step>=5&&this.step<=8&&(this.S.tut=9),this.show())}freeRush(e){return this.on&&this.step<=3&&e.t==="cannon"}raid(){if(!this.on)return!1;if(this.step<=4){this.beach=null,this.dep=0;let t=this.G.startAttack("tut");return t.err?(this.ui.toast(t.err),!0):(this.S.tut=5,this.ui.closeSheet(),this.A.attack(t),!0)}return!1}ev(e,t){if(!this.on)return;let n=this.step;n===0&&e==="collect"?this.step=1:n===1&&e==="select"&&t.t==="cannon"?this.step=t.up?3:2:n===2&&e==="upgrade"&&t.t==="cannon"?this.step=3:n<=3&&e==="done"&&t.t==="cannon"?(this.step=4,this.ui.closeSheet()):n===5&&e==="deploy"?(this.dep=(this.dep||0)+1,this.dep>=6&&(this.step=6)):n===6&&e==="pick"&&t==="a:shot"?this.step=7:(n===6||n===7)&&e==="ability"?this.step=8:n>=5&&n<=8&&e==="battleEnd"?(this.S.tut=9,this.el.innerHTML="",this.hand=null):n===9&&e==="home"?this.show():n===9&&e==="select"&&t.t==="tavern"?this.step=10:(n===9||n===10||n===11)&&e==="train"?(this.step=12,setTimeout(()=>{this.step===12&&(this.ui.closeSheet(),this.ui.pn.open.slice().forEach(i=>i.close()))},1600)):n===10&&e==="open"?this.step=11:n===12&&e==="sea"&&(this.step=13)}world(e){let t=this.A.bv.centerOf(e);t.y+=1;let n=this.A.V.toScreen(t,this.sp);return n.vis?n:null}elc(e){let t=typeof e=="string"?document.querySelector(e):e;if(!t||!t.offsetParent)return null;let n=t.getBoundingClientRect();return{x:n.left+n.width/2,y:n.top+n.height/2}}target(){let e=this.step,t=this.ui,n=this.A,i=this.G;if(e===0){let s=i.base.bl.find(a=>q[a.t].prod&&i.ready(a));if(!s)return this.step=1,null;let o=t.anch.get(s.id);return o&&o.e?this.elc(o.e):this.world(s)}if(e>=1&&e<=3){let s=this.find("cannon");return s?s.lv>=2&&!s.up?(this.step=4,null):e===2&&t.sheet?this.elc("#ui .sheet [data-k=up]"):e===3&&t.sheet?this.elc("#ui .sheet .rush"):this.world(s):null}if(e===4||e===12)return this.elc("#raid");if(e===5){let s=n.A&&n.A.bt;if(!s)return null;if(!this.beach){let a=innerHeight,l=innerWidth;e:for(let c=18;c<31;c++)for(let h of[16,13,19,10,22]){if(s.red[c*32+h]||!s.canDeploy(h+.5,c+.5))continue;this.v3.set(Ke(h+.5),ve,Ke(c+.5));let u=n.V.toScreen(this.v3,this.sp);if(u.vis&&u.y>a*.3&&u.y<a*.72&&u.x>l*.1&&u.x<l*.9){this.beach={x:h+.5,y:c+.5};break e}}if(!this.beach)return null}this.v3.set(Ke(this.beach.x),ve,Ke(this.beach.y));let o=n.V.toScreen(this.v3,this.sp);return o.vis?o:null}if(e===6)return this.elc('#tray [data-k="a:shot"]');if(e===7){let s=n.A&&n.A.bt;if(!s)return null;let o=s.bs.find(l=>!l.dead&&l.cat==="def")||s.bs.find(l=>!l.dead);if(!o)return null;this.v3.set(Ke(o.cx),ve+1.5,Ke(o.cy));let a=n.V.toScreen(this.v3,this.sp);return a.vis?a:null}if(e===9){let s=this.find("tavern");return s?this.world(s):null}return e===10?t.sheet?this.elc("#ui .sheet [data-k=train]"):this.world(this.find("tavern")):e===11?this.elc("#ui .panel [data-k=fill]")||this.elc("#ui .panel [data-k=deckhand]"):null}frame(e){if(!this.on||!this.hand)return;let t=this.target();if(this.hand){if(!t){this.hand.style.display="none";return}this.hand.style.display="",this.hand.style.left=t.x+"px",this.hand.style.top=t.y+"px"}}}});function Fb(){return"data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M14 8h36l12 16-30 36L2 24z" fill="#36c2ff" stroke="#0c3a78" stroke-width="3"/><path d="M14 8l8 16h20l8-16M2 24h60M22 24l10 36 10-36" fill="none" stroke="#0c3a78" stroke-width="2"/><path d="M16 12l-8 11h12z" fill="#c6f9ff"/></svg>')}var Im,jr,_d,Zl,Lm=We(()=>{It();Sm();$o();Yo();Zr();Mn();gs();Xs();Em();Cm();Pm();Im={g:"#ffd24a",w:"#c98448",r:"#d0603a",p:"#8a8a9a"},jr={g:"gold",w:"wood",r:"rum",p:"powder"},_d=(r,e)=>Ye.filter(t=>r[t]).map(t=>`<span class="${e&&(e.res[t]||0)<r[t]?"no":""}"><img class="ico" src="${Ve[t]}">${Ge(r[t])}</span>`).join(" ")||"Free",Zl=class{constructor(e){this.A=e,this.G=e.G,this.S=e.S,this.k=1,this.sel=null,this.place=null,this.anch=new Map,this.t=0,this.hudT=0,this.modeName="home",this.away0=e.S.lastSeen?Oe()-e.S.lastSeen:0;let t=document.createElement("style");t.textContent=wm,document.head.appendChild(t);let n=this.root=B("div","","",document.body);n.id="ui",this.world=B("div","","",n),this.world.id="world",this.hud=B("div","","",n),this.hud.style.cssText="position:absolute;inset:0",this.buildHud(),this.bui=new Yl(this),this.pn=new ql(this),this.layer=B("div","","",n),this.layer.style.cssText="position:absolute;inset:0",this.tut=new Kl(this),this.top=B("div","","",n),this.top.style.cssText="position:absolute;inset:0;pointer-events:none";let i=this.G;i.on("done",s=>{if(this.A.mode!=="home")return;this.A.bv.sync();let o=this.A.bv.item(s.id);o&&(o.pulse=1);let a=this.A.bv.topOf(s);this.A.fx.sparkle&&this.A.fx.sparkle(a,30,16769162),$.play("tier"),this.toast(`\u2705 ${q[s.t].name} reached level ${s.lv}!`),this.tut.ev("done",s),this.pop(s)}),i.on("trained",s=>{this.A.mode==="home"&&($.play("drop",.5),this.tut.ev("trained",s))}),i.on("quest",s=>{this.toast(`\u{1F4DC} Quest done: ${s.t.replace("{n}",Ge(s.n))} \u2014 claim ${s.g}<i class="gem"></i>`),$.play("milestone")}),i.on("live",s=>this.liveRaid(s)),i.on("raid",s=>{let o=Mt(s.att);this.toast(`<img class="face" style="width:1.6em;height:1.6em;vertical-align:-.45em" src="${rn(s.att)}"> ${o.name} raided you while your shield was down!`),$.play("horn")}),i.on("season",s=>this.pn.seasonEnd(s))}resize(){let e=innerWidth,t=innerHeight;this.port=e<t,this.k=An(Math.min(e/400,t/430),.74,1.3),this.root.style.setProperty("--k",this.k.toFixed(3)),this.root.classList.toggle("port",this.port),this.root.classList.toggle("land",!this.port),this.pn&&this.pn.resize(),this.bui&&this.bui.fitTray&&this.bui.fitTray()}mode(e){this.modeName=e;let t=e==="home";this.hud.style.display=t?"":"none",this.world.style.display=t?"":"none",t||(this.closeSheet(),this.cancelPlace()),this.bui.mode(e),$.setTrack(t?"home":"battle"),this.tut.mode(e),t&&(this.hudT=0,this.refresh())}curtain(e,t="Setting sail\u2026"){let n=B("div","curt",`<div class="cl"></div><span class="ts">${t}</span>`,this.root);$.play("whoosh"),setTimeout(()=>{try{e()}catch(i){console.error(i)}setTimeout(()=>{n.classList.add("out"),setTimeout(()=>n.remove(),400)},120)},260)}start(e){if(this.S.tut==null||this.S.tut<99){this.tut.begin();return}this.welcome(e,!1)}welcome(e,t){if(this.A.mode!=="home")return;let n=t?this.S.lastSeen?Oe()-this.S.lastSeen:0:this.away0;this.S.lastSeen=Oe(),!(this.S.tut<99)&&(e&&e.length||n>120||this.G.daily())&&this.pn.welcome(e||[],n)}shipsReady(){this.bui.shipsReady&&this.bui.shipsReady()}buildHud(){let e=this.hud,t=B("div","","",e);t.id="top";let n=B("div","pe","",t);n.id="me",n.onclick=()=>this.pn.ranks(),n.innerHTML=`<img class="lg"><div><div class="nm ts"></div><div class="tr ts"><img class="ico" src="${Ve.trophy}"> <b></b></div><div class="sh ts"></div></div>`,this.$me={lg:n.querySelector(".lg"),nm:n.querySelector(".nm"),tr:n.querySelector(".tr b"),sh:n.querySelector(".sh")};let i=B("div","","",t);i.id="res",this.$res={};for(let m of Ye){let x=B("div","rb pe",`<div class="f" style="background:${Im[m]}"></div><img src="${Ve[m]}"><b class="ts"></b>`,i);x.onclick=()=>this.toast(`${jr[m][0].toUpperCase()+jr[m].slice(1)}: ${Ge(this.G.res[m])} / ${Ge(this.G.caps()[m])} \u2014 upgrade ${m==="g"?"Treasure Vaults":"Warehouses"} to hold more`),this.$res[m]={e:x,f:x.querySelector(".f"),b:x.querySelector("b")}}let s=B("div","rb gm pe",`<img src="${Fb()}"><b class="ts"></b><span class="plus">+</span>`,i);s.onclick=()=>this.pn.quests(),this.$gem=s.querySelector("b");let o=this.$goal=B("div","chip pe","",e);o.id="goal",o.onclick=()=>{$.play("click"),this.goal&&this.goal.act&&this.goal.act()};let a=B("div","","",e);a.id="side",this.$sb={};let l=(m,x,p,g)=>{let b=Me("","",g,a);return b.className="sb",b.innerHTML=(x.length<4?`<span class="em">${x}</span>`:`<img src="${x}">`)+`<small class="ts">${p}</small><span class="badge" style="display:none"></span>`,this.$sb[m]={b,bd:b.querySelector(".badge"),sm:b.querySelector("small")},b};l("daily",Ve.chest,"Daily",()=>this.pn.daily()),l("quests",Ve.scroll,"Quests",()=>this.pn.quests()),l("log",Ve.log,"Raids",()=>this.pn.log()),l("ranks",Ve.crown,"League",()=>this.pn.ranks());let c=B("div","","",e);c.id="bot";let h=B("div","grp","",c),u=B("div","grp","",c);this.$shop=Me("","",()=>this.shop(),h),this.$shop.className="sb",this.$shop.innerHTML=`<img src="${Ve.hammer}"><small class="ts">Build</small><span class="badge" style="display:none"></span>`,this.$train=Me("","",()=>this.train(),h),this.$train.className="sb",this.$train.innerHTML=`<img src="${Qs.deckhand}"><small class="ts">Crew</small><span class="badge" style="display:none"></span>`,this.$bl=B("div","bl ts","",h);let d=Me("","",()=>this.pn.settings(),u);d.className="sb",d.style.cssText="width:2.6em;height:2.6em",d.innerHTML=`<img src="${Ve.gear}" style="width:1.8em;height:1.8em">`;let f=this.$raid=Me("",`<img src="${Ve.map}"><b class="ts">RAID</b><span class="army ts"></span>`,()=>this.raidBtn(),u);f.id="raid"}refresh(){let e=this.G,t=this.S,n=e.P,i=Oe(),s=e.caps();t.lastSeen=i;let o=li(n.trophies);this.$me.lg.src=vi(o),this.$me.nm.textContent=`${n.name==="You"?"Captain":n.name} \xB7 Keep ${e.kl()}`,this.$me.tr.textContent=Ge(n.trophies);let a=Math.max(n.shield||0,n.protect||0)-i;this.$me.sh.textContent=a>0?`\u{1F6E1} Shield ${Dt(a)}`:"\u26A0 No shield",this.$me.sh.style.color=a>0?"#9fe0ff":"#ff9a7a";for(let M of Ye){let R=this.$res[M],D=e.res[M]||0;R.b.textContent=Ge(D),R.f.style.width=`calc(${An(D/s[M],0,1)*100}% - .3em)`,R.e.classList.toggle("full",D>=s[M]-1)}this.$gem.textContent=Ge(t.gems||0);let l=(M,R,D)=>{let v=this.$sb[M];v.bd.style.display=R?"":"none",v.bd.textContent=R,v.b.classList.toggle("glow",!!D)},c=e.daily();l("daily",c?"!":0,!!c),this.$sb.daily.sm.textContent=c?"Daily!":`\u{1F525}${t.streak.n||0}`;let h=e.qReady(),u=e.evState(),d=!u.claimed&&u.p>=u.e.goal.n;l("quests",h+(d?1:0),h||d);let f=e.unseen();l("log",f,f);let m=e.W.season?e.W.season.start+7*86400-i:0;this.$sb.ranks.sm.textContent=m>0?"\u23F3"+Dt(m).split(" ")[0]:"League";let x=e.armyCap(),p=e.armyNow(),g=e.queued();this.$raid.querySelector(".army").textContent=`\u2694 ${p}/${x}`+(g?` +${g}`:""),this.$raid.classList.toggle("ready",p>=x*.6&&p>0);let b=this.$train.querySelector(".badge");b.style.display=g?"":"none",b.textContent=Dt(e.trainLeft()).split(" ")[0];let y=this.newBuilds(),_=this.$shop.querySelector(".badge");_.style.display=y?"":"none",_.textContent=y,this.$shop.classList.toggle("glow",y>0&&e.freeBuilders()>0);let A=e.freeBuilders(),T=e.base.builders||2;this.$bl.innerHTML=`\u{1F477} ${A}/${T}`+(A===0?` <span style="color:#9fe0ff">${Dt(Math.min(...e.base.bl.filter(M=>M.up).map(M=>M.up-i)))}</span>`:""),this.updGoal()}newBuilds(){return this.G.shopList().filter(e=>e.have<e.max&&this.G.canAfford(e.cost)).length}updGoal(){let e=this.goal=this.tut.on?null:this.nextGoal(),t=this.$goal;if(!e){t.style.display="none";return}t.style.display="";let n=e.img+e.tx;t._k!==n&&(t._k=n,t.innerHTML=`<img src="${e.img}"><div><div class="tx ts">${e.tx}</div>${e.p!=null?'<div class="pb"><i></i></div>':""}</div><span class="go">\u25B6</span>`,t.style.animation="none",t.offsetWidth,t.style.animation=""),e.p!=null&&(t.querySelector(".pb i").style.width=An(e.p,0,1)*100+"%"),t.classList.toggle("pulse",!!e.hot)}nextGoal(){let e=this.G,t=this.A,n=Oe(),i=e.base.bl;if(this.G.W.live){let m=Mt(e.W.live.att);return{img:rn(e.W.live.att),tx:`${m.name} attacks! Defend!`,hot:1,act:()=>this.defendNow()}}let s=e.daily();if(s)return{img:Ve.chest,tx:`Daily chest ready! Day ${s.n} \u{1F525}`,hot:1,act:()=>this.pn.daily()};let o=e.P.log.find(m=>!m.seen);if(o){let m=Mt(o.att);return{img:rn(o.att),tx:`${m.name} raided you! Take revenge`,hot:1,act:()=>this.pn.log()}}let a=null,l=0;for(let m of i)if(e.ready(m)){let x=m.acc/Math.max(1,q[m.t].prod[m.lv-1]);x>l&&(l=x,a=m)}if(a&&l>.08)return{img:Ve[q[a.t].res],tx:`Collect ${Ge(a.acc)} ${jr[q[a.t].res]}`,hot:1,act:()=>{t.focusOn(a),this.collect(a)}};if(e.qReady())return{img:Ve.scroll,tx:"Quest complete \u2014 claim gems!",hot:1,act:()=>this.pn.quests()};let c=e.freeBuilders(),h=this.upCands();if(c>0){let m=h.find(p=>p.f>=1);if(m)return{img:t.iconOf(m.o.t,m.o.lv+1),tx:`Upgrade ${q[m.o.t].name} \u2192 Lv ${m.o.lv+1}`,hot:1,act:()=>{t.focusOn(m.o),this.select(m.o)}};let x=e.shopList().find(p=>p.have<p.max&&e.canAfford(p.cost));if(x)return{img:t.iconOf(x.t,1),tx:`Build a new ${q[x.t].name}`,hot:1,act:()=>this.shop(x.t)}}let u=e.armyCap(),d=e.armyNow();if(d>=u*.6&&d>0)return{img:Ve.map,tx:"Crew ready \u2014 raid a rival!",hot:1,act:()=>this.raidBtn()};if(d+e.queued()<u&&e.res.r>=40)return{img:Qs.deckhand,tx:`Train crew (${d+e.queued()}/${u})`,p:(d+e.queued())/u,act:()=>this.train()};if(c<=0){let m=i.filter(x=>x.up).sort((x,p)=>x.up-p.up)[0];if(m){let x=q[m.t].time[m.lv]||1;return{img:t.iconOf(m.t,m.lv+1),tx:`${q[m.t].name} done in ${Dt(m.up-n)}`,p:1-(m.up-n)/x,act:()=>{t.focusOn(m),this.select(m)}}}}let f=h[0];if(f){let m=this.eta(f.c);return{img:t.iconOf(f.o.t,f.o.lv+1),tx:`Save for ${q[f.o.t].name} Lv ${f.o.lv+1}`+(m?` \xB7 ~${Dt(m)}`:" \u2014 raid for loot!"),p:f.f,act:()=>{t.focusOn(f.o),this.select(f.o)}}}return{img:Ve.map,tx:"Raid a rival for loot!",act:()=>this.raidBtn()}}upCands(){var i;let e=this.G,t=[],n={hq:0,def:1,res:2,store:2,army:3,trap:5};for(let s of e.base.bl){if(s.t==="wall"||q[s.t].cat==="trap"||s.up||s.lv<1)continue;let o=e.upInfo(s);if(o.max||o.busy)continue;let a=1;for(let l of Ye)o.c[l]&&(a=Math.min(a,(e.res[l]||0)/o.c[l]));Ye.some(l=>(o.c[l]||0)>e.caps()[l])&&(a=Math.min(a,.01)),t.push({o:s,c:o.c,f:a,pr:(i=n[q[s.t].cat])!=null?i:4})}return t.sort((s,o)=>(o.f>=1)-(s.f>=1)||(s.f>=1?s.pr-o.pr:o.f-s.f))}eta(e){let t=this.G,n=0;for(let i of Ye){let s=(e[i]||0)-(t.res[i]||0);if(s<=0)continue;let o=t.base.bl.reduce((a,l)=>a+(q[l.t].res===i&&q[l.t].prod&&l.lv>0&&!l.up?q[l.t].prod[l.lv-1]/3600:0),0);if(!o)return 0;n=Math.max(n,s/o)}return n}ticker(){let e=this.G.W;if(this.tut.on||this.pn.open.length||this.place||!e.news||!e.news.length)return;let t=e.news.find(o=>o.t>(this.newsSeen||0)),n=t;if(t?this.newsSeen=e.news[0].t:(this.newsI=((this.newsI||0)+1)%Math.min(6,e.news.length),n=e.news[this.newsI]),!n)return;this.$news&&this.$news.remove();let i={raid:"\u2694\uFE0F",pact:"\u{1F91D}",outpost:"\u{1F3DD}\uFE0F",season:"\u{1F3C6}"}[n.kind]||"\u{1F4F0}",s=this.$news=B("div","news ts",`${n.who?`<img class="face" src="${rn(n.who)}">`:`<span class="ic">${i}</span>`}<span>${n.txt}</span>`,this.hud);n.kind==="raid"&&/you/i.test(n.txt)&&n.who&&(s.classList.add("pe","hot"),s.onclick=()=>{$.play("click"),this.pn.log()}),setTimeout(()=>{s.classList.add("out"),setTimeout(()=>s.remove(),600)},6500)}frame(e,t){var i;this.t+=e,this.hudT-=e,this.A.mode==="home"?(this.newsT=((i=this.newsT)!=null?i:8)-e,this.newsT<=0&&(this.newsT=14,this.ticker()),this.hudT<=0&&(this.hudT=.25,this.refresh(),this.sel&&this.updSheet()),this.anchors(),this.place&&this.placeFrame()):this.bui.frame(e,t),this.tut.frame(e),this.flies&&(this.flies=this.flies.filter(s=>{s.t+=e;let o=this.A.V.toScreen(s.p);return s.e.style.left=o.x+"px",s.e.style.top=o.y+"px",s.t>1.3?(s.e.remove(),!1):!0}))}anchors(){let e=this.G,t=this.A,n=t.V,i=Oe(),s=new Set,o=e.freeBuilders(),a={},l=new Set(o>0?this.upCands().filter(c=>c.f>=1).slice(0,3).map(c=>c.o.id):[]);for(let c of e.base.bl){if(c.t==="wall"||q[c.t].cat==="trap")continue;let h=this.anch.get(c.id);h||(h={},this.anch.set(c.id,h)),s.add(c.id);let u=t.bv.topOf(c);if(this.place&&this.place.move===c){h.k&&(h.e.style.display="none");continue}let d=n.toScreen(u,a),f=null;if(c.up?f="bar":e.ready(c)?f="bub":c.t==="tavern"&&this.S.train.length?f="tr":l.has(c.id)&&(f="arr"),h.k!==f)if(h.e&&h.e.remove(),h.e=null,h.k=f,f==="bub"){let m=q[c.t].res;h.e=B("div","bub",`<img src="${Ve[m]}">`,this.world),h.e.onpointerdown=x=>{x.stopPropagation(),this.collect(c)}}else f==="bar"||f==="tr"?(h.e=B("div","tbar pe"+(f==="tr"?" tr":""),'<span class="ts"></span><div class="bar"><i></i></div>',this.world),h.e.onclick=()=>this.select(c)):f==="arr"&&(h.e=B("div","uparr pe ts","\u2B06",this.world),h.e.onclick=()=>{$.play("click"),this.select(c)});if(h.e){if(h.e.style.display=d.vis?"":"none",h.e.style.left=d.x+"px",h.e.style.top=d.y+"px",f==="bub"&&h.e.classList.toggle("full",c.acc>=q[c.t].prod[c.lv-1]*7.9),f==="bar"){let m=q[c.t].time[c.lv]||1,x=c.up-i;h.e.firstChild.textContent=Dt(x),h.e.querySelector("i").style.width=An(1-x/m,0,1)*100+"%"}if(f==="tr"){let m=this.S.train[0],x=bt[m.u].time*e.trainMul(),p=m.end-i;h.e.firstChild.textContent=`${bt[m.u].name} ${Dt(p)}`,h.e.querySelector("i").style.width=An(1-p/x,0,1)*100+"%"}}}for(let[c,h]of this.anch)s.has(c)||(h.e&&h.e.remove(),this.anch.delete(c))}clearAnchors(){for(let e of this.anch.values())e.e&&e.e.remove();this.anch.clear()}collect(e){let t=this.G,n=this.A,i=q[e.t].res,s=t.collect(e),o=n.bv.topOf(e);if(o.y-=2,s>0){n.fx.coinBurst(o,An(Math.round(s/60),5,22),7),$.play(i==="g"?"coins":i==="w"?"wood":i==="r"?"glass":"drop"),this.fly(o,`<img class="ico" src="${Ve[i]}">+${Ge(s)}`,Im[i]);let a=n.bv.item(e.id);a&&(a.pulse=.6),this.$res[i].e.animate([{transform:"scale(1.15)"},{transform:"scale(1)"}],{duration:300}),this.tut.ev("collect",e)}t.full(i)&&($.play("deny"),this.toast(`${i==="g"?"Vault":"Warehouse"} is full! Upgrade it to hold more`)),this.hudT=0}fly(e,t,n="#fff"){let i=B("div","fly ts",t,this.world);i.style.color=n,(this.flies=this.flies||[]).push({e:i,p:e.clone(),t:0})}lootPop(e,t){this.bui.lootPop(e,t)}toast(e){let t=B("div","toast ts",e,this.top);setTimeout(()=>t.remove(),2500);let n=this.top.querySelectorAll(".toast");n.length>2&&n[0].remove(),n.forEach((i,s)=>i.style.top=`calc(22% + ${(n.length-1-s)*2.6}em)`)}pop(e){let t=this.A.bv.topOf(e);this.fly(t,"\u2B50 Lv "+e.lv,"#ffe08a")}homeDown(e,t,n,i){if(!this.place||!e)return!1;let s=this.place,o=q[s.t].w;return e.x>=s.x-.5&&e.x<=s.x+o+.5&&e.y>=s.y-.5&&e.y<=s.y+o+.5?(s.drag={dx:e.x-s.x,dy:e.y-s.y},this.A.V.lock=!0,!0):!1}homeDrag(e){let t=this.place;if(!t||!t.drag||!e)return;let n=Math.round(e.x-t.drag.dx),i=Math.round(e.y-t.drag.dy);(n!==t.x||i!==t.y)&&(t.x=n,t.y=i,$.play("tick",.3))}homeUp(){this.place&&(this.place.drag=null,this.A.V.lock=!1)}homeTap(e,t){if(this.place){if(t){let i=q[this.place.t].w;this.place.x=Math.round(t.x-i/2),this.place.y=Math.round(t.y-i/2),$.play("tick",.4)}return}let n=e&&this.G.base.bl.find(i=>i.id===e);if(n){if(this.G.ready(n)&&!this.sel){this.collect(n);return}$.play("select"),this.select(n)}else this.closeSheet()}select(e){let t=this.A;this.closeSheet(!0),this.sel=e;let n=q[e.t].w;t.fx.select({x:Ke(e.x+n/2),z:Ke(e.y+n/2),h:ve},n);let i=t.bv.item(e.id);i&&(i.pulse=.35),this.sheet=B("div","sheet","",this.layer),this.sheetKey="",this.updSheet(),this.tut.ev("select",e)}closeSheet(e){this.sheet&&(this.sheet.remove(),this.sheet=null),this.sel=null,this.A.fx.select(null)}updSheet(){let e=this.sel,t=this.G,n=this.A,i=q[e.t];if(!t.base.bl.includes(e)){this.closeSheet();return}let s=t.upInfo(e),o=Oe(),a=[e.lv,!!e.up,s.max,t.canAfford(s.c||{}),t.freeBuilders(),this.S.gems>=(e.up?t.rushCost(e):0),e.acc>1].join();if(a===this.sheetKey){let d=this.sheet.querySelector(".left");d&&e.up&&(d.textContent=Dt(e.up-o));let f=this.sheet.querySelector(".rush b");f&&e.up&&(f.textContent=t.rushCost(e));return}this.sheetKey=a;let l=this.sheet;l.innerHTML="";let c=Me("","\u2715",()=>this.closeSheet(),l);c.className="x",B("h3","ts",`${i.name} <span style="font-size:.6em;color:#8a5a1a">Lv ${e.lv}${e.up?" \u2192 "+(e.lv+1):""}</span>`,l),B("div","dim",this.stat(e,e.lv)+(s.to?` <span style="color:#2a8a1a">\u2192 ${this.stat(e,s.to,!0)}</span>`:""),l);let h=B("div","row","",l);if(e.up){B("div","stat",`\u23F3 <b class="left">${Dt(e.up-o)}</b>`,h);let d=Me("p rush",`Finish now <b>${t.rushCost(e)}</b><i class="gem"></i>`,()=>{t.rush(e)?($.play("pearl"),n.bv.sync()):this.noGems()},h);this.tut.freeRush(e)&&(d.innerHTML="Finish FREE \u2728",d.onclick=f=>{f.stopPropagation(),e.up=Oe()-.01,t.tick(0),n.bv.sync(),$.play("pearl")},d.classList.add("glow")),Me("sm r","Cancel",()=>{t.cancel(e),n.bv.sync(),this.closeSheet()},h)}else if(s.max)B("div","stat",e.lv>=oi?"\u{1F451} Max level!":`Upgrade your Keep to Lv ${e.lv+1} first`,h);else{let d=t.canAfford(s.c),f=Me(d?"g big":"big dis",`\u2B06 Upgrade<br><span style="font-size:.62em">${_d(s.c,t)} \xB7 \u23F3${Dt(s.time)}</span>`,()=>this.doUpgrade(e),h);if(f.dataset.k="up",!d){let m=t.missing(s.c);Me("p sm",`Fill ${t.gemsForRes(m)}<i class="gem"></i>`,()=>{t.buyMissing(s.c)?($.play("pearl"),this.doUpgrade(e)):this.noGems()},h)}}let u=B("div","row","",l);i.cat==="res"&&e.acc>1&&Me("sm",`Collect ${Ge(e.acc)}`,()=>this.collect(e),u),e.t==="tavern"&&(Me("b sm","\u2694 Train crew",()=>this.train(),u).dataset.k="train"),e.t==="keep"&&!e.up&&Me("sm","\u{1F513} Unlocks",()=>this.pn.unlocks(),u),Me("sm","\u2725 Move",()=>this.startPlace(e.t,e),u),(i.cat==="wall"||i.cat==="trap")&&Me("sm r","Remove",()=>{t.sell(e),n.bv.sync(),this.closeSheet()},u),e.t==="keep"&&t.builderCost()&&Me("sm",`\u{1F477} +Builder ${t.builderCost()}<i class="gem"></i>`,()=>{t.buyBuilder()?($.play("unlock"),this.toast("A new builder joins your cove!")):this.noGems()},u),e.t==="keep"&&!s.max&&!e.up&&(B("div","dim","<b>Next Keep unlocks:</b> "+this.unlockText(e.lv+1),l).style.marginTop=".4em")}stat(e,t,n){let i=q[e.t],s=Math.max(1,t)-1;return i.prod?n?`${Ge(i.prod[s])}/h`:`Makes ${Ge(i.prod[s])} ${jr[i.res]}/h \xB7 holds ${Ge(i.prod[s]*8)}`:i.store?n?`${Ge(i.store[s])}`:`Stores ${Ge(i.store[s])} ${i.res==="g"?"gold":"wood \xB7 rum \xB7 powder"}`:i.dmg&&i.cat==="def"?n?`${i.dmg[s]} dmg`:`${i.dmg[s]} damage \xB7 range ${i.range} \xB7 HP ${Ge(i.hp[s])}`:i.dmg?n?`${i.dmg[s]} dmg`:`Hidden trap \xB7 ${i.dmg[s]} damage`:i.cap?n?`${i.cap[s]} crew`:`Crew space ${i.cap[s]} \xB7 trains faster`:i.energy?n?`${i.energy[s]} \u26A1`:`Ship powder ${i.energy[s]} \u26A1 per battle`:e.t==="keep"?n?`Lv ${t}`:`HP ${Ge(i.hp[s])} \xB7 ${i.desc}`:i.desc}unlockText(e){let t=[];for(let n in ai){if(n==="keep")continue;let i=ai[n][e-1]-ai[n][e-2];i>0&&t.push(`${n==="wall"?"+"+i:i>1?i+"\xD7":"+1"} ${q[n].name}`)}return t.push(`all buildings to Lv ${e}`),t.join(", ")}doUpgrade(e){let t=this.G.upgrade(e),n=this.A;if(t.err){$.play("deny"),t.err==="need"?this.toast(`Need more ${Object.keys(this.G.missing(t.c)).map(s=>jr[s]).join(" & ")} \u2014 raid a rival!`):t.err.startsWith("All builders")?this.toast("All builders busy \u2014 rush one or hire another \u{1F477}"):this.toast(t.err);return}$.play("build"),n.bv.sync();let i=n.bv.item(e.id);i&&(i.pulse=.8),n.fx.puff&&n.fx.puff(n.bv.centerOf(e),8,14207144),n.V.shake(.15,.2),this.tut.ev("upgrade",e),this.sheetKey="",this.hudT=0}noGems(){$.play("deny"),this.toast('Not enough gems \u2014 finish quests & daily chests for more <i class="gem"></i>')}shop(e){let t=this.G,n=this.A;this.closeSheet(),$.play("open");let i={econ:["mine","lumber","still","powder","vault","store"],army:["tavern","shipyard"],def:["cannon","musket","mortar","wall"],trap:["keg","spike"]},s={econ:"Economy",def:"Defences",army:"Army",trap:"Traps"},o=e?Object.keys(i).find(l=>i[l].includes(e)):"econ",a=this.pn.panel("Shipwright",l=>{let c=t.shopList(),h=B("div","tabs","",l),u=B("div","grid","",l);u.style.marginTop=".5em";let d=()=>{h.innerHTML="";for(let f in i){let m=c.filter(p=>i[f].includes(p.t)&&p.have<p.max&&t.canAfford(p.cost)).length,x=Me(f===o?"on":"",s[f]+(m?` <span class="badge" style="position:static;display:inline-grid">${m}</span>`:""),()=>{o=f,$.play("page"),d()},h);x.className=f===o?"on":""}u.innerHTML="";for(let f of i[o]){let m=c.find(g=>g.t===f);if(!m)continue;let x=m.have<m.max,p=B("div","card pe"+(x?"":" lock")+(x&&m.have===0?" new":""),`<img class="ic" src="${n.iconOf(f,1)}"><div class="nm">${q[f].name}</div><div class="ct">${_d(m.cost,t)}</div><div class="dim" style="font-size:.75em">${m.have}/${m.max} \xB7 \u23F3${q[f].time[0]?Dt(q[f].time[0]):"instant"}</div>`,u);x||B("div","lk ts",m.lockKl?`\u{1F512} Keep Lv ${m.lockKl}`:"All built",p),p.title=q[f].desc,p.onclick=()=>{if(!x){$.play("deny"),this.toast(m.lockKl?`Upgrade your Keep to Lv ${m.lockKl} to build more`:"You built all of these");return}a.close(),this.startPlace(f)}}};d()})}startPlace(e,t){let n=this.G,i=this.A;this.closeSheet(),this.cancelPlace();let s=q[e].w,o,a;if(t)o=t.x,a=t.y;else{let d=this.freeSpot(e);if(!d){this.toast("No room! Move or remove something");return}o=d.x,a=d.y}let l=this.place={t:e,x:o,y:a,move:t,ghost:null};if(t){let d=i.bv.item(t.id);d&&(d.g.visible=!1),l.it=d}let c=e==="wall"?{body:i.M.wall_p1}:i.bv.tpl(e,t?t.lv:1),h=new vt;if(h.add(i.bv.clone(c.body,s,c.fit)),c.head){let d=c.head.clone(!0);d.position.y=c.hy,h.add(d)}h.traverse(d=>{d.isMesh&&(d.material=d.material.clone(),d.material.transparent=!0,d.material.opacity=.82)}),i.V.scene.add(h),l.ghost=h,i.island.grid.visible=!0,i.island.gridU.op.value=1;let u=l.bar=B("div","pe","",this.layer);u.style.cssText="position:absolute;transform:translate(-50%,0);display:flex;gap:.6em",Me("r","\u2715",()=>this.cancelPlace(),u),l.ok=Me("g","\u2713",()=>this.confirmPlace(),u),i.V.focus(new P(Ke(o+s/2),0,Ke(a+s/2))),$.play("pop"),B("div","hint ts",t?"Drag to move":`Drag to place \xB7 ${_d(n.shopList().find(d=>d.t===e).cost)}`,u.parentNode).className="hint ts phint"}freeSpot(e){let t=this.G,n=q[e].w,i=16,s=null,o=1e9;for(let a=4;a<=28-n;a++)for(let l=4;l<=28-n;l++){if(!t.canPlace(e,l,a))continue;let c=(l+n/2-i)**2+(a+n/2-i)**2+0;c<o&&(o=c,s={x:l,y:a})}return s}placeFrame(){let e=this.place,t=this.A,n=this.G,i=q[e.t].w;e.x=An(e.x,4,28-i),e.y=An(e.y,4,28-i);let s=n.canPlace(e.t,e.x,e.y,e.move||null);t.island.showFoot(e.x,e.y,i,s),e.ghost.position.set(Ke(e.x+i/2),ve+(e.drag?.5:.15)+Math.sin(this.t*6)*.08,Ke(e.y+i/2));let o=t.V.toScreen(new P(Ke(e.x+i/2),ve,Ke(e.y+i)));e.bar.style.left=o.x+"px",e.bar.style.top=o.y+14+"px",e.ok.classList.toggle("dis",!s)}confirmPlace(){let e=this.place,t=this.G,n=this.A;if(!e)return;if(e.move){if(!t.move(e.move,e.x,e.y)){$.play("deny");return}let a=e.move;this.cancelPlace(),n.bv.sync(),$.play("drop"),n.fx.puff&&n.fx.puff(n.bv.centerOf(a),6,14207144);return}let i=t.place(e.t,e.x,e.y);if(i.err){if($.play("deny"),i.err==="need"){let a=t.missing(i.c),l=t.gemsForRes(a);this.toast(`Need more ${Object.keys(a).map(c=>jr[c]).join(" & ")}`)}else this.toast(i.err);return}let s=e.t,o=i.o;if($.play("build"),n.V.shake(.12,.2),s==="wall"&&t.shopList().find(a=>a.t==="wall").have<t.shopList().find(a=>a.t==="wall").max&&t.canAfford(q.wall.cost[0])){let a=e.x+1<=27&&t.canPlace("wall",e.x+1,e.y)?e.x+1:e.x;e.x=a,n.bv.sync();return}this.cancelPlace(),n.bv.sync(),n.fx.puff&&n.fx.puff(n.bv.centerOf(o),10,14207144),this.tut.ev("placed",o)}cancelPlace(){let e=this.place,t=this.A;e&&(t.V.scene.remove(e.ghost),e.bar.remove(),this.layer.querySelectorAll(".phint").forEach(n=>n.remove()),e.it&&(e.it.g.visible=!0),t.island.grid.visible=!1,t.island.foot.visible=!1,t.V.lock=!1,this.place=null)}train(){let e=this.G;this.closeSheet(),$.play("door"),this.tut.ev("open","train");let t=0;this.pn.panel("Tavern \u2014 Crew",n=>{let i=B("div","","",n),s=B("div","grid","",n);s.style.marginTop=".5em";let o=B("div","","",n);o.style.marginTop=".5em";let a=()=>{var x;let l=e.armyCap(),c=e.armyNow(),h=e.queued();i.innerHTML=`<div style="display:flex;align-items:center;gap:.5em"><b>\u2694 ${c}/${l}</b>${h?`<span class="dim">+${h} training \xB7 ${Dt(e.trainLeft())}</span>`:""}<div class="pbar" style="flex:1"><i style="width:${c/l*100}%"></i></div></div>`;let u=B("div","row","",i);Me("g sm","\u27F3 Fill army",()=>{let p=e.fillArmy();$.play(p?"coin":"deny"),p&&this.tut.ev("train",p),p||this.toast("Tavern full or not enough rum"),a()},u).dataset.k="fill",h&&Me("p sm",`Finish ${Wl(e.trainLeft())}<i class="gem"></i>`,()=>{e.rushTrain()?($.play("pearl"),a()):this.noGems()},u),s.innerHTML="";for(let p of En){let g=bt[p],b=e.kl()&&!(((x=e.base.bl.find(_=>_.t==="tavern"))==null?void 0:x.lv)>=g.tl),y=B("div","card pe"+(b?" lock":""),`<img class="ic" src="${Qs[p]}"><div class="nm">${g.name}</div><div class="ct"><img class="ico" src="${Ve.r}">${g.cost} \xB7 ${g.sp}\u2693</div><div class="dim" style="font-size:.72em;line-height:1.1">${g.desc}</div><span class="ut" style="position:absolute;top:.3em;right:.3em;width:auto;height:auto;background:#2e1806;color:#fff;font-size:.8em;padding:0 .4em;border-radius:.6em;border:0">${e.base.army[p]||0}</span>`,s);y.dataset.k=p,b&&B("div","lk ts",`\u{1F512} Tavern Lv ${g.tl}`,y),y.onclick=()=>{if(b){$.play("deny");return}let _=e.train(p,1);_.err?($.play("deny"),this.toast(_.err==="need"?"Need more rum \u2014 build a Distillery":_.err)):($.play("coin",.6),this.tut.ev("train",p)),a()}}o.innerHTML=this.S.train.length?'<div class="dim">Queue (tap to cancel):</div>':"";let d=B("div","row","",o),f=[];for(let p of this.S.train){let g=f[f.length-1];g&&g.u===p.u?g.n++:f.push({u:p.u,n:1})}let m=0;for(let p of f.slice(0,10)){let g=m,b=B("button","ut",`<img src="${Qs[p.u]}" style="width:2.4em;height:2.4em;top:.1em"><span class="n">${p.n}</span>`,d);b.style.cssText="width:3em;height:3em",b.onclick=()=>{e.untrain(g),$.play("click"),a()},m+=p.n}};a(),t=setInterval(a,1e3)},()=>clearInterval(t))}raidBtn(){if($.play("click"),!this.tut.raid()){if(this.G.armyNow()<=0){this.toast("Train some crew first!"),this.train();return}this.pn.sea()}}liveRaid(e){if(this.A.mode!=="home"||this.S.tut<99)return;let t=Mt(e);$.play("horn"),$.play("bell"),this.closeSheet(),this.cancelPlace(),this.pn.closeAll();let n=B("div","banner pe",`<img class="face big" src="${rn(e)}"><div><div style="font-family:Pirata,serif;font-size:1.7em;color:#ffd24a">${t.name} attacks!</div><div class="ts" style="font-size:.85em;font-style:italic">\u201C${t.quote[Math.floor(Math.random()*t.quote.length)]}\u201D</div><div class="row" style="display:flex;gap:.4em;margin-top:.35em"></div></div>`,this.top),i=n.querySelector(".row"),s=8,o=Me("r",`\u2694 Defend! <b>${s}</b>`,()=>{clearInterval(a),n.remove(),this.defendNow()},i),a=setInterval(()=>{s--;let l=o.querySelector("b");l&&(l.textContent=s),$.play("tick",.4),s<=0&&(clearInterval(a),n.remove(),this.defendNow())},1e3)}defendNow(){let e=this.G;if(!e.W.live)return;let t=e.startDefence(e.W.live.att);this.A.defend(t)}attackEnd(e){this.bui.attackEnd(e)}defendEnd(e){this.bui.defendEnd(e)}replayEnd(e){this.bui.replayEnd(e)}battleDown(e,t,n,i){return this.bui.down(e,t,n,i)}}});var Yb=zm(()=>{It();Mp();gu();Br();Vp();Gi();Wp();qp();Xs();Qp();em();tm();Zr();gs();Lm();Mn();Ks();var Jr=P,Zo=(r,e)=>{let t=document.getElementById("lbar");if(t&&(t.style.width=r*100+"%"),e){let n=document.getElementById("ltxt");n&&(n.textContent=e)}},Bb=1/20,_e,xn,Jl,Ki,bi,cn,zn,bd,Hn,Nt,vs={},jo=null,rt=window.App={mode:"home",A:null,D:null};async function zb(){let r=performance.now();Zo(.05);let e=Ht.init();_e=window.V=new gl,kp(zs);let t=0,n=A=>A.then(T=>(t++,Zo(.1+t/5*.75),T)),[i,s,o,a]=await Promise.all([Fr("assets/b8.glb"),Fr("assets/buildings.glb"),Fr("assets/actors.glb"),Fr("assets/props.glb"),e].map(n));Ht.loadingStart(),Zo(.9,"Raising the flags\u2026"),[i,s,o,a].forEach(A=>{Zu(A.scene,{still:!1}),A.scene.children.slice().forEach(T=>{vs[T.name]=T,T.position.set(0,0,0)})}),Jl=_n.load(),xn=window.G=new Xl(Jl),xn.W.live=null,cn=new kl(_e),cn.models=vs,cn.build("cove",xn.W.seed%97+3);let l=wp(zs,cn.tex,_e.q),c=l.material.uniforms;c.fogC.value.copy(_e.scene.fog.color),c.fogN.value=_e.scene.fog.near,c.fogF.value=_e.scene.fog.far,_e.scene.add(l),rt.ocean=l,Ki=new Al(_e,o),bi=new Il(_e,Ki,null),bi.setIsle("cove"),zn=new Ul(_e,vs),bd=new Nl(_e,vs),Hn=new Fl(_e,Ki,zn,bd,cn),zn.onSync=A=>cn.setLawn(No(A)),_e.post=new Tl(_e),_e.post.setMap({grade:{warm:[1.05,1,.93],cool:[.93,.97,1.06],sat:1.07,con:1.06,vig:.22,bloom:.28,thr:.9}}),Object.assign(rt,{V:_e,G:xn,S:Jl,fx:Ki,env:bi,island:cn,bv:zn,units:bd,btv:Hn,M:vs,ocean:l,save:jl,home:Dm,attack:Vb,defend:Wb,replay:Xb,setMode:Jo,mkShip:km,iconOf:Hb,focusOn:Gb}),_e.bounds={x0:-30,x1:30,z0:-34,z1:30},_e.target.set(0,0,2),_e.goal.copy(_e.target),_e.goalDist=_e.dist=_e.portrait?84:60;let h=_e.sun.shadow.camera;h.left=-44,h.right=44,h.top=44,h.bottom=-44,h.updateProjectionMatrix(),_e.sun.target.position.set(0,0,0);let u=()=>{_e.resize();let A=innerHeight*_e.R.getPixelRatio()/(2*Math.tan(_e.cam.fov*Math.PI/360));Ki.add.mesh.material.uniforms.scale.value=Ki.norm.mesh.material.uniforms.scale.value=A,Nt&&Nt.resize()},d=xn.catchUp();Nt=new Zl(rt),rt.ui=Nt,u(),window.addEventListener("resize",u),Dm(!0),$b(),await qb();let f=performance.now(),m=window.__quality={lv:0,n:0,t:0,cool:1.5,every:1,fc:0,down(){let A=_e.R,T=_e.sun;this.lv++,this.lv===1&&(A.getPixelRatio()>1?A.setPixelRatio(1):this.lv++),this.lv===2&&(_e.post.bloom.enabled=!1,T.shadow.mapSize.x>1024&&(T.shadow.mapSize.set(1024,1024),T.shadow.map&&(T.shadow.map.dispose(),T.shadow.map=null)),this.every=2),this.lv===3&&(_e.post.enabled=!1,this.every=4),this.lv===4&&(T.castShadow=!1,A.shadowMap.enabled=!1,_e.scene.traverse(M=>{M.material&&[].concat(M.material).forEach(R=>R.needsUpdate=!0)}),A.setPixelRatio(Math.min(A.getPixelRatio(),.8))),A.shadowMap.autoUpdate=this.every===1,u()},tick(A){if(this.fc++,this.every>1&&this.fc%this.every===0&&(_e.R.shadowMap.needsUpdate=!0),this.lv>=4||A>.5||Ht.adActive||document.hidden){this.n=this.t=0;return}if(this.cool-=A,!(this.cool>0)&&(this.n++,this.t+=A,this.t>=2)){let T=this.n/this.t;this.n=this.t=0,T<42&&(this.down(),this.cool=1)}}};if(nn.get("q0"))for(let A=0;A<+nn.get("q0");A++)m.down();let x=window.__ft=[],p=performance.now(),g=A=>{m.tick(A),performance.now()-p<5e3&&x.push(Math.round(A*1e3))},b=()=>{let A=performance.now(),T=(A-f)/1e3,M=Math.min(Bb,T);f=A,g(T),Sd(M),requestAnimationFrame(b)};if(nn.get("cap")){let A=[],T=window.clearTimeout,M=0,R=1e6;window.setTimeout=(v,S,...I)=>{let O=R++;return A.push({id:O,t:M+(+S||0)/1e3,f:v,a:I}),O},window.clearTimeout=v=>{let S=A.findIndex(I=>I.id===v);S>=0?A.splice(S,1):T(v)};let D=v=>{for(M+=v;A.sort((I,O)=>I.t-O.t),!(!A.length||A[0].t>M);){let S=A.shift();try{typeof S.f=="function"&&S.f(...S.a)}catch(I){console.error(I)}}};window.__step=(v,S)=>{for(let I=0;I<v;I++)Sd(S||1/30,I===v-1),D(S||1/30)},Sd(1/30)}else b();Ht.loadingStop(),Zo(1);let y=document.getElementById("boot");y.style.opacity=0,setTimeout(()=>y.remove(),450),window.__ready=!0,window.__boot=performance.now()-r,Ht.gameplayStart();let _=()=>{$.init(),$.apply()};window.addEventListener("pointerdown",_),window.addEventListener("keydown",_),Ht.onMute=()=>$.apply(),Ht.onPause=()=>$.pause(!0),Ht.onResume=()=>$.pause(!1),document.addEventListener("visibilitychange",()=>{if(document.hidden)jl(),Ht.gameplayStop(),$.ctx&&$.ctx.suspend();else{Ht.gameplayStart(),$.ctx&&!$.sdkPaused&&$.ctx.resume();let A=xn.catchUp();Nt.welcome(A,!0)}}),window.addEventListener("pagehide",jl),setInterval(jl,5e3),Nt.start(d),setTimeout(()=>Fr("assets/ships.glb").then(A=>{Zu(A.scene,{still:!1}),jo={},A.scene.children.slice().forEach(T=>{jo[T.name]=T,T.position.set(0,0,0)}),rt.ships=jo,Nt.shipsReady&&Nt.shipsReady()}).catch(()=>{}),nn.get("cap")?0:1200),window.__game=rt}function jl(){try{Jl.v=1,_n.save()}catch{}}function km(r,e=15){let t=jo&&jo[r]||vs.galleon||vs.sloop;if(!t)return new vt;let n=t.clone(!0);n.rotation.set(0,0,0);let i=new zt().setFromObject(n),s=new Jr;i.getSize(s);let o=new vt;return n.scale.multiplyScalar(e/Math.max(s.x,s.z)),o.add(n),o}var Md={},wd=null;function Hb(r,e=1){let t=r+"_"+Math.max(1,Math.min(3,e));if(Md[t])return Md[t];if(!wd){let A=new Ds;A.add(new Ur(16774368,6967360,2.2));let T=new zi(16777215,2.4);T.position.set(3,6,4),A.add(T);let M=new qt(128,128,{samples:4});M.texture.colorSpace=At;let R=new Bt(30,1,.1,200),D=document.createElement("canvas");D.width=D.height=128,wd={sc:A,rt:M,cam:R,cv:D,px:new Uint8Array(16384*4)}}let{sc:n,rt:i,cam:s,cv:o,px:a}=wd,l=r==="wall"?{body:vs["wall_p"+Math.max(1,Math.min(3,e))]}:zn.tpl(r,e===1?1:e===2?3:6),c=new vt,h=q[r]?q[r].w:2,u=zn.clone(l.body,h,l.fit);if(c.add(u),l.head){let A=l.head.clone(!0);A.position.y=l.hy||0,c.add(A)}n.add(c);let d=new zt().setFromObject(c),f=new Jr,m=new Jr;d.getCenter(f),d.getSize(m);let x=m.length()*.5;s.position.set(f.x+x*1.6,f.y+x*1.5,f.z+x*2.2),s.lookAt(f),s.updateProjectionMatrix();let p=_e.R,g=p.getRenderTarget(),b=p.shadowMap.enabled;p.shadowMap.enabled=!1,p.setRenderTarget(i),p.setClearColor(0,0),p.clear(),p.render(n,s),p.readRenderTargetPixels(i,0,0,128,128,a),p.setRenderTarget(g),p.shadowMap.enabled=b,n.remove(c);let y=o.getContext("2d"),_=y.createImageData(128,128);for(let A=0;A<128;A++)_.data.set(a.subarray((127-A)*512,(128-A)*512),A*512);return y.putImageData(_,0,0),Md[t]=o.toDataURL()}function Jo(r){rt.mode=r,xn.paused=r!=="home",Nt.mode(r)}function Gb(r,e){let t=zn.centerOf(r);_e.focus(t,e)}function Dm(r){Hn.stop(),Um(),zn.set(xn.base),(!r||cn.theme!=="cove")&&cn.build("cove",xn.W.seed%97+3),bi.setIsle("cove"),cn.red&&(cn.red.visible=!1),_e.lock=!1,Jo("home"),Ki.clear&&!r&&Ki.clear(),setTimeout(()=>bi.relight(),50)}function Um(){rt.flag&&(_e.scene.remove(rt.flag),rt.flag=null)}function Td(r){Um();let e=km(xn.kl()>=5?"frigate":xn.kl()>=3?"brig":"sloop",xn.kl()>=5?17:14);e.position.set(-6,-.2,56),e.rotation.y=Math.PI/2,_e.scene.add(e),rt.flag=e,Hn.flagPos=new Jr(-6,0,56)}function Vb(r){rt.A=r,Nt.curtain(()=>{cn.build(r.theme,r.isleSeed%997),bi.setIsle(r.theme),zn.set(r.snap,{hideTraps:!0}),Td(r.theme);let e=new Uint8Array(1024);e.set(r.bt.red),cn.setRed(e),cn.red&&(cn.red.visible=!1),Hn.start(r.bt,r.snap,{onEnd:()=>Nt.attackEnd(r)}),Hn.onLoot=(t,n)=>Nt.lootPop(t,n),_e.target.set(0,0,_e.portrait?3:6),_e.goal.copy(_e.target),_e.goalDist=_e.dist=_e.portrait?68:58,Jo("attack"),setTimeout(()=>bi.relight(),50)})}function Wb(r){rt.D=r,Nt.curtain(()=>{cn.build("cove",xn.W.seed%97+3),bi.setIsle("cove"),zn.set(r.snap),Td("cove"),rt.flag.position.set(8,-.2,-58),rt.flag.rotation.y=-Math.PI/2,Hn.flagPos=new Jr(8,0,-58),Hn.start(r.bt,r.snap,{onEnd:()=>Nt.defendEnd(r)}),Hn.onLoot=null,_e.target.set(0,0,0),_e.goal.copy(_e.target),_e.goalDist=_e.dist=_e.portrait?84:60,Jo("defend")},"Battle stations!")}function Xb(r){let e=xn.replayOf(r);rt.R={rec:r,...e},Nt.curtain(()=>{cn.build("cove",xn.W.seed%97+3),bi.setIsle("cove"),zn.set(e.base),Td("cove"),rt.flag.position.set(8,-.2,-58),rt.flag.rotation.y=-Math.PI/2,Hn.flagPos=new Jr(8,0,-58),Hn.start(e.bt,e.base,{speed:2,replay:!0,onEnd:()=>Nt.replayEnd(r)}),Hn.onLoot=null,Jo("replay")},"Replay")}function Ko(r){let e=_e.ground(r,ve);if(!e)return null;let t=ad(e.x,e.z);return{x:t.x,y:t.y,p:e}}function $b(){let r=null;_e.onDown=(e,t,n)=>{if(rt.mode==="home")return Nt.homeDown(Ko(e),e,t,n);if(rt.mode==="attack"||rt.mode==="defend"){let i=Ko(e);if(!i)return!1;let s=Nt.battleDown(i,t,n);return s==="hold"?(r={c:i,t:0},!0):!!s}return!1},_e.onDrag=(e,t,n)=>{let i=Ko(e);rt.mode==="home"?Nt.homeDrag(i,t,n):r&&i&&(r.c=i)},_e.onUp=(e,t,n,i)=>{rt.mode==="home"&&Nt.homeUp(e&&Ko(e),t),r=null},_e.onTap=(e,t,n)=>{if(rt.mode==="home"){let i=zn.pick(e);Nt.homeTap(i,Ko(e),t,n)}},rt.holdTick=e=>{r&&(r.t+=e,r.t>.32&&(r.t-=.11,Nt.battleDown(r.c,0,0,!0)))}}var _i=0;function Sd(r,e=!0){if(_i+=r,zs.time.value=_i,rt.ocean.material.uniforms.time&&(rt.ocean.material.uniforms.time.value=_i),rt.mode==="home"&&xn.tick(r),rt.holdTick&&rt.holdTick(r),Hn.update(r,_i),zn.update(r,_i),bi.update(r,_i,rt.mode!=="home"),Ki.update(r,_i),rt.flag){let t=rt.flag;t.position.y=-.2+Math.sin(_i*1.1)*.15,t.children[0].rotation.z=Math.sin(_i*.8)*.03}_e.update(r),Nt.frame(r,_i),e&&_e.render()}async function qb(){_e.R.compile(_e.scene,_e.cam)}zb().catch(r=>{console.error(r),Zo(1,"Failed to load \u2014 please refresh")})});Yb();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5341],{5341:(T,l,i)=>{i.r(l),i.d(l,{Tab2PageModule:()=>F});var o=i(7863),d=i(177),s=i(4341),g=i(1307),p=i(8986),e=i(4438),f=i(1626);let m=(()=>{var t;class r{constructor(a){this.http=a}buscarCep(a){return this.http.get(`https://viacep.com.br/ws/${a}/json/`)}}return(t=r).\u0275fac=function(a){return new(a||t)(e.KVO(f.Qq))},t.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();function b(t,r){if(1&t){const n=e.RV6();e.j41(0,"ion-card",9)(1,"ion-card-header",10)(2,"ion-card-title"),e.EFF(3),e.k0s()(),e.j41(4,"ion-card-content",11)(5,"p"),e.EFF(6),e.k0s(),e.j41(7,"p"),e.EFF(8),e.k0s(),e.j41(9,"p"),e.EFF(10),e.k0s(),e.j41(11,"p"),e.EFF(12),e.k0s(),e.j41(13,"p"),e.EFF(14),e.k0s(),e.j41(15,"p"),e.EFF(16),e.k0s()(),e.j41(17,"ion-button",6),e.bIt("click",function(){e.eBV(n);const c=e.XpG();return e.Njj(c.limpar())}),e.EFF(18,"Limpar"),e.k0s()()}if(2&t){const n=e.XpG();e.R7$(3),e.SpI("CEP: ",n.dataReturn.cep,""),e.R7$(3),e.SpI("Logradouro: ",n.dataReturn.logradouro,""),e.R7$(2),e.SpI("Complemento: ",n.dataReturn.complemento,""),e.R7$(2),e.SpI("Bairro: ",n.dataReturn.bairro,""),e.R7$(2),e.SpI("Cidade: ",n.dataReturn.localidade,""),e.R7$(2),e.SpI("Estado: ",n.dataReturn.uf,""),e.R7$(2),e.SpI("DDD: ",n.dataReturn.ddd,"")}}const h=[{path:"",component:(()=>{var t;class r{constructor(a){this.cepService=a,this.cep=""}buscarCep(a){this.cepService.buscarCep(a).subscribe(c=>{this.dataReturn=c})}limpar(){this.dataReturn=null,this.cep=""}}return(t=r).\u0275fac=function(a){return new(a||t)(e.rXU(m))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab2"]],decls:15,vars:3,consts:[[1,"container",3,"fullscreen"],[1,"container","d-flex","flex-column","justify-content-center","align-items-center",2,"height","100vh","overflow-y","auto"],[1,"d-flex","flex-column","align-items-center"],[1,"pesquisa"],["position","floating"],["type","text",3,"ngModelChange","ngModel"],[3,"click"],[1,"card",2,"width","20rem"],["class","card-container",4,"ngIf"],[1,"card-container"],[1,"card-header"],[1,"card-content"]],template:function(a,c){1&a&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Buscar Cep "),e.k0s()()(),e.j41(4,"ion-content",0)(5,"div",1)(6,"div",2)(7,"ion-item",3)(8,"ion-label",4),e.EFF(9,"CEP"),e.k0s(),e.j41(10,"ion-input",5),e.mxI("ngModelChange",function(u){return e.DH7(c.cep,u)||(c.cep=u),u}),e.k0s()(),e.j41(11,"ion-button",6),e.bIt("click",function(){return c.buscarCep(c.cep)}),e.EFF(12,"Buscar"),e.k0s()(),e.j41(13,"div",7),e.DNE(14,b,19,7,"ion-card",8),e.k0s()()()),2&a&&(e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(6),e.R50("ngModel",c.cep),e.R7$(4),e.Y8G("ngIf",c.dataReturn))},dependencies:[o.Jm,o.b_,o.I9,o.ME,o.tN,o.W9,o.eU,o.$w,o.uz,o.he,o.BC,o.ai,o.Gw,d.bT,s.BC,s.vS]}),r})()}];let v=(()=>{var t;class r{}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.iI.forChild(h),p.iI]}),r})(),F=(()=>{var t;class r{}return(t=r).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[o.bv,d.MD,s.YN,g.S,v]}),r})()}}]);
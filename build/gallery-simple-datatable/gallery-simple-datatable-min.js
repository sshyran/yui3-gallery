YUI.add("gallery-simple-datatable",function(B){var A=B.Lang;B.SimpleDatatable=B.Base.create("simple-datatable",B.Widget,[B.WidgetChild],{CONTENT_TEMPLATE:"<table>",className:"",tHead:null,initializer:function(C){this.className=this.getClassName();},renderUI:function(){this.tHead=B.Node.create("<thead></thead>");this.tBody=B.Node.create("<tbody></tbody>");this.get("contentBox").append(this.tHead).append(this.tBody);},syncUI:function(){this.setHeaders(this.get("headers"));this.setRows(this.get("rows"));},setHeaders:function(D){var G=B.Node.create("<tr></tr>"),C,F,E=0;if(!D){D={};}if(A.isObject(D)){for(F in D){C=B.Node.create("<th></th>");C.addClass(this.className+"-col-"+(E++));C.addClass(this.className+"-col-"+F);C.append('<div class="'+this.className+'-header"><div class="'+this.className+'-title">'+D[F]+"</div></div>");C.setAttribute("key",F);G.append(C);}}if(this.tHead.one("tr")){this.tHead.one("tr").remove(true);}this.tHead.append(G);return this;},setRows:function(F){var E,D,C=this.get("contentBox"),G=B.Node.create("<tbody></tbody>");if(!F){F=[];}for(E=0,D=F.length;E<D;E++){G.append(this._addRow(F[E],E));}C.one("tbody").remove(true);C.append(G);this.tBody=G;return this;},clearHeaders:function(C){if(C===true){this.set("headers",{});}return this.setHeaders();},clearRows:function(C){if(C===true){this.set("rows",[]);}return this.setRows();},_addRow:function(H,E){var J=this.get("headers")||{},I,D,F,G=0,C="__yui_id";I=B.Node.create("<tr>");for(F in H){if(F.substring(0,2)==="__"){I.setAttribute(F.substring(2),H[F]);}}for(F in J){if(!H[F]){I.append("<td></td>");continue;}D=B.Node.create("<td>");D.addClass(this.className+"-col-"+G++);D.addClass(this.className+"-col-"+F);if(H[F]){D.append("<div><div>"+H[F]+"</div></div>");}else{D.append("<div><div>&nbsp;</div></div>");}I.append(D);}if(!H[C]){H[C]=B.Event.generateId(I);}I.set("id",H[C]);I.addClass(this.className+"-"+((E%2)?"even":"odd"));return I;}},{ATTRS:{headers:{value:{},validator:A.isObject},rows:{value:[],validator:A.isArray}}});},"gallery-2010.08.25-19-45",{requires:["node","widget","widget-child","event","event-mouseenter"]});
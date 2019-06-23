(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The Single Error Extractor is a component that displays the errors for a single form input. It can be used to wrap plain html form inputs or any custom Vue component.")]),t._v(" "),s("p",[t._v("It must be provided a "),s("code",[t._v("validator")]),t._v(" prop to be able to extract validation messages from it. You can also use it in tandem with "),s("code",[t._v("FormWrapper")]),t._v(" component, to auto provide the validator. See "),s("router-link",{attrs:{to:"./form_wrapper.html"}},[t._v("Using a Form Wrapper")]),t._v(" for more info.")],1),t._v(" "),s("p",[t._v("It does not come with any special styling or templates, it leaves that to the developers. We do however provide prebuilt ones for Foundation6, Bootstrap3 and Bootstrap4.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),s("p",[t._v("Checkout the "),s("router-link",{attrs:{to:"./form_wrapper.html"}},[t._v("Using a FormWrapper")]),t._v(" section to see how to use the FormWrapper component.")],1),t._v(" "),t._m(18),t._v(" "),s("table",[t._m(19),t._v(" "),s("tbody",[t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("tr",[s("td",[t._v("messages")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("optional")]),t._v(" "),s("td",[t._v("A collection of local error messages that have precedence over the globally defined ones. This comes in handy when you need to override or set a single use case message. Check "),s("router-link",{attrs:{to:"./overriding_messages.html"}},[t._v("Overriding Messages")]),t._v(" for more examples.")],1)]),t._v(" "),s("tr",[s("td",[t._v("validatorParams")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("optional")]),t._v(" "),s("td",[t._v("Extra parameters that override validator params, or add data for the validation message to show. Mostly used to provide additional parameters for validation messages. "),s("router-link",{attrs:{to:"./advanced.html#validator-params"}},[t._v("Validator Params")])],1)]),t._v(" "),t._m(23)])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"single-error-extractor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-error-extractor","aria-hidden":"true"}},[this._v("#")]),this._v(" Single Error Extractor")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Creating custom templates and styling them, can be done by adding the "),a("code",[this._v("singleErrorExtractorMixin")]),this._v(" into your custom "),a("code",[this._v("FormGroup")]),this._v(" component.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[this._v("#")]),this._v(" Preparation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("No special preparation is necessary. The single error extractor component should be registered when initiating the "),a("strong",[this._v("VuelidateErrorExtractor")]),this._v(" plugin.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form-group")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":validator")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$v.first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("User"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("s First Name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form-group")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This is the basic usage of the provided "),a("code",[this._v("form-group")]),this._v(" component. It should be passed a validator and optionally a label. The label is used to display a label above the component and optionally fill in the "),a("code",[this._v("{attribute}")]),this._v(" placeholder in validation messages.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"custom-attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-attribute","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Attribute")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you decide to skip the label, the "),a("code",[this._v("{attribute}")]),this._v(" param in error messaged will become empty. If you want to have a different attribute than the Label, pass an "),a("code",[this._v("attribute")]),this._v(" prop.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form-group")]),t._v(" \n  "),s("span",{attrs:{class:"token attr-name"}},[t._v(":validator")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$v.first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n  "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("User"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("s First Name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n  "),s("span",{attrs:{class:"token attr-name"}},[t._v("attribute")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("First Name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form-group")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"custom-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom Messages")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Passing a "),a("code",[this._v("messages")]),this._v(" prop can allow for overriding the globally defined error messages with ones just for this component. Perfect for when you want a specific validation message that is not applicable anywhere else.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form-group")]),t._v(" \n    "),s("span",{attrs:{class:"token attr-name"}},[t._v(":validator")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$v.first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{attrs:{class:"token attr-name"}},[t._v(":messages")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("localMessages"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("User"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("s First Name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("attribute")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form-group")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("data")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      localMessages"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        required"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Field {attribute} should be filled in.'")]),t._v(" \n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  validations"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" required "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The validation error message for the required rule will be "),a("code",[this._v("Field Name should be filled in.")]),this._v(" instead of the globally defined one.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-with-formwrapper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-with-formwrapper","aria-hidden":"true"}},[this._v("#")]),this._v(" Using with FormWrapper")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If used with the "),a("code",[this._v("FormWrapper")]),this._v(" component, you don't need to pass the "),a("code",[this._v("validator")]),this._v(" prop any more as it will get auto injected, you only need to provide a "),a("code",[this._v("name")]),this._v(" prop, that is equal to the key it is attached to inside the form object.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The "),a("code",[this._v("name")]),this._v(" that you pass will be used to extract the appropriate validations for this field, as well as try to find this field's "),a("code",[this._v("attribute")]),this._v(" name for replacing in the error message.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form-wrapper")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":validator")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$v.form"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form-group")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form.username"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form-group")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form-wrapper")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"component-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-props","aria-hidden":"true"}},[this._v("#")]),this._v(" Component Props")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Prop")]),this._v(" "),a("th",[this._v("Type")]),this._v(" "),a("th",[this._v("Required")]),this._v(" "),a("th",[this._v("Description")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",[t._v("validator")]),t._v(" "),s("td",[t._v("Vuelidate object")]),t._v(" "),s("td",[t._v("required")]),t._v(" "),s("td",[t._v("The "),s("strong",[t._v("Vuelidate")]),t._v(" validator object. E.g. for the "),s("code",[t._v("username")]),t._v(" data property you will have to pass "),s("code",[t._v("$v.username")]),t._v(".")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",[t._v("label")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("optional")]),t._v(" "),s("td",[t._v("A label to show, usually above the input. Used as a fallback to the "),s("code",[t._v("attribute")]),t._v(", by default.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("optional")]),t._v(" "),s("td",[t._v("The name of the current field in the "),s("code",[t._v("validator")]),t._v(" object. Used with the "),s("code",[t._v("FormWrapper")]),t._v(" component. For nested objects use object paths like "),s("code",[t._v("address.street.first")]),t._v(". Also used to fetch the attribute from the globally provided "),s("code",[t._v("attributes")]),t._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[this._v("showSingleError")]),this._v(" "),a("td",[this._v("Boolean")]),this._v(" "),a("td",[this._v("optional")]),this._v(" "),a("td",[this._v("Allows display of one error at a time.")])])}],!1,null,null,null);e.options.__file="single_error_extractor.md";a.default=e.exports}}]);
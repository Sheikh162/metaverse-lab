(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LobbyScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>"); // Import Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { useAuth } from "../providers/AuthProvider";
// export default function LobbyScreen({ onJoin }: { onJoin: (name: string, role: string) => void }) {
//   const [name, setName] = useState("");
//   const { user, signInWithGoogle, logout } = useAuth(); // <--- Magic Hook
// useEffect(() => {
//     if (user) {
//       // Wait 1.5 seconds for the "Identity Verified" animation to play, then join
//       const timer = setTimeout(() => {
//         onJoin(user.displayName || "Student", "student");
//       }, 1500);
//       return () => clearTimeout(timer);
//     }
//   }, [user, onJoin]);
//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
//       {/* Background Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 p-8 z-10 shadow-2xl">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
//             NETVERSE <span className="text-blue-500">LABS</span>
//           </h1>
//           <p className="text-zinc-400">The Spatial Operating System for Engineering</p>
//         </div>
//         <div className="space-y-4">
//           <Button 
//             className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-6 flex items-center gap-3"
//             onClick={signInWithGoogle}
//           >
//             <svg className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
//               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
//               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
//               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
//             </svg>
//             Sign in with Google
//           </Button>
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-800"></span></div>
//             <div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-900 px-2 text-zinc-500">Or guest access</span></div>
//           </div>
//           <Input 
//             placeholder="Enter Guest Name" 
//             className="bg-black border-zinc-700 text-white"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Button 
//             className="w-full bg-blue-600 hover:bg-blue-700"
//             onClick={() => onJoin(name || "Guest", "student")}
//           >
//             Enter Campus
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////
// "use client";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { useAuth } from "../providers/AuthProvider";
// export default function LobbyScreen({ onJoin }: { onJoin: (name: string, role: string) => void }) {
//   const [name, setName] = useState("");
//   const { user, signInWithGoogle, logout } = useAuth(); 
//   // Auto-fill name if logged in
//   useEffect(() => {
//     if (user?.displayName) setName(user.displayName);
//   }, [user]);
//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
//       {/* Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 p-8 z-10 shadow-2xl relative">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
//             NETVERSE <span className="text-blue-500">LABS</span>
//           </h1>
//           <p className="text-zinc-400">The Spatial Operating System for Engineering</p>
//         </div>
//         {!user ? (
//           <div className="space-y-4">
//              <Button 
//               className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-6 flex items-center gap-3"
//               onClick={signInWithGoogle}
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
//                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
//                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
//                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
//               </svg>
//               Sign in with Google
//             </Button>
//             <p className="text-xs text-center text-zinc-500">Required for Classroom & Grades</p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//              <div className="bg-green-900/20 border border-green-500/30 p-3 rounded text-center">
//               <p className="text-green-400 font-bold text-sm">Logged in as {user.displayName}</p>
//             </div>
//             <Input 
//               placeholder="Display Name" 
//               className="bg-black border-zinc-700 text-white"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <Button 
//               className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-6 text-lg"
//               onClick={() => onJoin(name || "Student", "student")}
//             >
//               ENTER CAMPUS
//             </Button>
//             <Button variant="ghost" onClick={logout} className="w-full text-zinc-500 hover:text-red-400">
//               Sign Out
//             </Button>
//           </div>
//         )}
//       </Card>
//     </div>
//   );
// }
/////////////////////////////////////////////////////
"use client";
;
;
;
;
;
;
function LobbyScreen({ onJoin }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // 1. Get accessToken from AuthContext
    const { user, signInWithGoogle, logout, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Auto-fill name if logged in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LobbyScreen.useEffect": ()=>{
            if (user?.displayName) setName(user.displayName);
        }
    }["LobbyScreen.useEffect"], [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md bg-zinc-900 border-zinc-800 p-8 z-10 shadow-2xl relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black text-white tracking-tighter mb-2",
                                children: [
                                    "NETVERSE ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500",
                                        children: "LABS"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                        lineNumber: 175,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400",
                                children: "The Spatial Operating System for Engineering"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    !user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full bg-white text-black hover:bg-zinc-200 font-bold py-6 flex items-center gap-3",
                                onClick: signInWithGoogle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                                fill: "#4285F4"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                                lineNumber: 188,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                                fill: "#34A853"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                                lineNumber: 189,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                                fill: "#FBBC05"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                                lineNumber: 190,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                                fill: "#EA4335"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                                lineNumber: 191,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    "Sign in with Google"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 183,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-center text-zinc-500",
                                children: "Required for Classroom & Grades"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this) : !accessToken ? // ✅ CASE 2: LOGGED IN BUT TOKEN EXPIRED (The Fix)
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-yellow-900/20 border border-yellow-500/30 p-4 rounded text-center flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "text-yellow-500 w-8 h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-yellow-400 font-bold text-sm",
                                        children: "Session Expired"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 text-xs",
                                        children: "Your Google permissions need to be refreshed to access the Dashboard."
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 201,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full bg-blue-600 hover:bg-blue-700 font-bold py-6 text-lg",
                                onClick: signInWithGoogle,
                                children: "Reconnect Google"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: logout,
                                className: "w-full text-zinc-500 hover:text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    " Sign Out completely"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this) : // CASE 3: FULLY LOGGED IN & READY
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-green-900/20 border border-green-500/30 p-3 rounded text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-400 font-bold text-sm",
                                    children: [
                                        "Logged in as ",
                                        user.displayName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 224,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Display Name",
                                className: "bg-black border-zinc-700 text-white",
                                value: name,
                                onChange: (e)=>setName(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "w-full bg-blue-600 hover:bg-blue-700 font-bold py-6 text-lg",
                                onClick: ()=>onJoin(name || "Student", "student"),
                                children: "ENTER CAMPUS"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: logout,
                                className: "w-full text-zinc-500 hover:text-red-400",
                                children: "Sign Out"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(LobbyScreen, "FwpUxqvx4hUvRbkreM5hbEdBYgc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = LobbyScreen;
var _c;
__turbopack_context__.k.register(_c, "LobbyScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/game-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GAME_CONFIG",
    ()=>GAME_CONFIG,
    "STATIONS",
    ()=>STATIONS,
    "TEACHER_IDS",
    ()=>TEACHER_IDS,
    "WALLS",
    ()=>WALLS,
    "isTeacher",
    ()=>isTeacher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
;
const GAME_CONFIG = {
    mapWidth: 2400,
    mapHeight: 1600,
    viewportWidth: 900,
    viewportHeight: 600,
    playerSize: 40,
    playerSpeed: 12
};
const STATIONS = [
    {
        id: "exam-desk-01",
        label: "Exam Station 1",
        type: "exam",
        x: 1850,
        y: 550,
        color: "bg-blue-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"]
    },
    {
        id: "cafeteria-table",
        label: "Chill Zone",
        type: "common",
        x: 550,
        y: 535,
        color: "bg-green-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"]
    },
    {
        id: "npc-professor",
        label: "Prof. Byte",
        type: "npc-teacher",
        x: 2100,
        y: 1350,
        color: "bg-yellow-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        description: "Ask for guidance.",
        status: "available"
    }
];
const WALLS = [];
const TEACHER_IDS = [
    "bristolrabbit720@gmail.com"
];
const isTeacher = (email)=>{
    if (!email) return false;
    return TEACHER_IDS.includes(email);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
function Player({ pos, facing, isMoving, username }) {
    // 1. Map directions to your specific files
    const spriteMap = {
        left: "/characters/student-left-removebg.png",
        right: "/characters/student-right-removebg.png",
        up: "/characters/student-up-removebg.png",
        down: "/characters/student-down-removebg.png"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute flex flex-col items-center justify-center z-20 w-16 h-16 -ml-4 -mt-8",
        animate: {
            x: pos.x,
            y: pos.y
        },
        transition: {
            type: "tween",
            ease: "linear",
            duration: isMoving ? 0.1 : 0 // Smooth interpolation when moving
        },
        style: {
            zIndex: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: spriteMap[facing],
                alt: "Player",
                className: "w-16 h-16 object-contain pixelated"
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Player.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-6 bg-black/50 px-2 py-0.5 rounded text-[10px] text-white whitespace-nowrap backdrop-blur-sm",
                children: username
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Player.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Player.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Player;
var _c;
__turbopack_context__.k.register(_c, "Player");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Station
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/badge.tsx [app-client] (ecmascript)");
"use client";
;
;
function Station({ station, isActive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute flex flex-col items-center justify-center transition-all duration-200",
        style: {
            left: station.x - 40,
            top: station.y - 40,
            zIndex: station.y // Y-Sorting (things lower on screen cover things higher)
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          absolute -top-12 z-50 transition-all duration-300
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-400 text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce",
                    children: "PRESS ENTER"
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        w-20 h-20 rounded-lg shadow-xl border-2 border-black flex items-center justify-center transition-all
        ${station.color} 
        ${isActive ? 'scale-110 ring-4 ring-white brightness-110' : 'opacity-90'}
      `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(station.icon, {
                    className: "text-white w-8 h-8 drop-shadow-md"
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-2 text-[10px] font-bold text-slate-200 bg-black/80 px-2 py-1 rounded border border-white/10",
                children: station.label
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Station;
var _c;
__turbopack_context__.k.register(_c, "Station");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorldMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/game-config.ts [app-client] (ecmascript)");
// "use client";
// import React from "react";
// import { GAME_CONFIG } from "@/lib/game-config";
// export default function WorldMap() {
//   return (
//     <div 
//       className="absolute inset-0 bg-slate-950"
//       style={{ width: GAME_CONFIG.mapWidth, height: GAME_CONFIG.mapHeight }}
//     >
//       {/* 1. BASE GRID PATTERN (The "Tron" Floor) */}
//       <div className="absolute inset-0 opacity-20" 
//            style={{ 
//              backgroundImage: `radial-gradient(circle, #64748b 2px, transparent 2px)`, 
//              backgroundSize: '40px 40px' 
//            }} 
//       />
//       {/* 2. ZONES & ROOMS (Visual Cues) */}
//       {/* SERVER ROOM (Red Zone) */}
//       <div className="absolute top-[200px] left-[1800px] w-[500px] h-[400px] bg-red-900/10 border-4 border-slate-800 rounded-3xl">
//          <div className="absolute -top-10 left-0 text-red-500/30 font-black text-6xl tracking-tighter select-none">
//            SERVER_FARM
//          </div>
//          {/* Decorative blinking light */}
//          <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
//       </div>
//       {/* EXAM HALL (Blue Zone) */}
//       <div className="absolute top-[300px] left-[300px] w-[600px] h-[500px] bg-blue-900/10 border-4 border-slate-800 rounded-3xl">
//          <div className="absolute -top-10 right-0 text-blue-500/30 font-black text-6xl tracking-tighter select-none">
//            EXAM_HALL
//          </div>
//          <div className="absolute bottom-4 left-4 text-xs text-blue-400/50 font-mono">
//            SILENCE REQUIRED • SECTOR A
//          </div>
//       </div>
//       {/* CAFETERIA (Green Zone) */}
//       <div className="absolute top-[700px] left-[1100px] w-[400px] h-[400px] bg-green-900/10 border-4 border-slate-800 rounded-full">
//          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500/20 font-black text-4xl tracking-widest select-none rotate-45">
//            LOUNGE
//          </div>
//       </div>
//       {/* 3. WALLS / BORDERS */}
//       <div className="absolute top-0 left-0 w-full h-2 bg-slate-800" />
//       <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-800" />
//       <div className="absolute top-0 left-0 h-full w-2 bg-slate-800" />
//       <div className="absolute top-0 right-0 h-full w-2 bg-slate-800" />
//     </div>
//   );
// }
"use client";
;
;
;
function WorldMap() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 bg-slate-950",
        style: {
            width: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapWidth,
            height: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapHeight
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/maps/lab-map-final2.jpeg",
                alt: "NetVerse Campus",
                fill: true,
                className: "object-cover pixelated",
                priority: true
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[640px] left-[640px] w-20 h-20 border-4 border-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[480px] left-[2240px] w-20 h-20 border-4 border-red-500"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[1280px] left-[1184px] w-20 h-20 border-4 border-green-500"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c = WorldMap;
var _c;
__turbopack_context__.k.register(_c, "WorldMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/cloud-shell-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudAPI",
    ()=>CloudAPI
]);
// lib/cloud-shell-api.ts
// 🔴 TODO: Replace with your actual ngrok URL from your VM terminal
const API_BASE_URL = "https://unthrown-clemently-isabella.ngrok-free.dev";
const headers = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true"
};
const CloudAPI = {
    // 1. Run Code
    execute: async (code, language)=>{
        try {
            const res = await fetch(`${API_BASE_URL}/execute`, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    code,
                    language
                })
            });
            return await res.json();
        } catch (err) {
            return {
                output: "⚠️ Network Error: Could not connect to Cloud Shell.",
                isError: true
            };
        }
    },
    // 2. Save File
    saveFile: async (email, filename, code)=>{
        const res = await fetch(`${API_BASE_URL}/save`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                email,
                filename,
                code
            })
        });
        return await res.json();
    },
    // 3. List Files
    listFiles: async (email)=>{
        try {
            const res = await fetch(`${API_BASE_URL}/files?email=${encodeURIComponent(email)}`, {
                method: "GET",
                headers
            });
            return await res.json();
        } catch (err) {
            return {
                files: []
            };
        }
    },
    // 4. Read File
    readFile: async (email, filename)=>{
        const res = await fetch(`${API_BASE_URL}/read?email=${encodeURIComponent(email)}&filename=${encodeURIComponent(filename)}`, {
            method: "GET",
            headers
        });
        return await res.json();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeEditorWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@monaco-editor/react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$cloud$2d$shell$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/cloud-shell-api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// --- LANGUAGE CONFIG ---
// IDs match Monaco Editor language identifiers
const LANGUAGES = [
    {
        id: "cpp",
        label: "C++ (GCC)",
        snippet: "#include <iostream>\n\nint main() {\n\tstd::cout << \"Hello NetVerse\";\n\treturn 0;\n}"
    },
    {
        id: "python",
        label: "Python 3",
        snippet: "print('Hello NetVerse')"
    },
    {
        id: "javascript",
        label: "Node.js",
        snippet: "console.log('Hello NetVerse');"
    },
    {
        id: "go",
        label: "Go 1.20",
        snippet: "package main\nimport \"fmt\"\nfunc main() {\n\tfmt.Println(\"Hello\")\n}"
    }
];
function CodeEditorWindow({ isOpen, onClose, station }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // --- STATE ---
    const [activeLang, setActiveLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(LANGUAGES[0]);
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(LANGUAGES[0].snippet);
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Loading States
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAiLoading, setIsAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingFiles, setIsLoadingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // File System State
    const [currentFilename, setCurrentFilename] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("main.cpp");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- 1. INITIAL LOAD ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeEditorWindow.useEffect": ()=>{
            if (isOpen && user?.email) {
                refreshFiles();
            }
        }
    }["CodeEditorWindow.useEffect"], [
        isOpen,
        user
    ]);
    const refreshFiles = async ()=>{
        if (!user?.email) return;
        setIsLoadingFiles(true);
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$cloud$2d$shell$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudAPI"].listFiles(user.email);
        if (data.files) setFiles(data.files);
        setIsLoadingFiles(false);
    };
    // --- 2. ACTIONS ---
    const handleRun = async ()=>{
        setIsRunning(true);
        setOutput("📡 Sending to Cloud VM...");
        // Call Cloud API
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$cloud$2d$shell$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudAPI"].execute(code, activeLang.id);
        if (result.isError) {
            setOutput(`⚠️ Error:\n${result.output}`);
        } else {
            setOutput(`✅ Execution Time: ${result.executionTime || "0ms"}\n\n${result.output}`);
        }
        setIsRunning(false);
    };
    const handleSave = async ()=>{
        if (!user?.email) return __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("You must be logged in to save.");
        let filename = currentFilename;
        if (filename === "untitled" || filename === "main.cpp") {
            const input = prompt("Enter filename to save (e.g., mysolution.cpp):");
            if (!input) return;
            filename = input;
        }
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Saving to cloud...");
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$cloud$2d$shell$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudAPI"].saveFile(user.email, filename, code);
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
        if (res.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("File saved successfully!");
            setCurrentFilename(filename);
            refreshFiles();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Save failed: " + res.error);
        }
    };
    const loadFile = async (filename)=>{
        if (!user?.email) return;
        const toastId = __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading(`Loading ${filename}...`);
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$cloud$2d$shell$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudAPI"].readFile(user.email, filename);
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(toastId);
        if (data.content) {
            setCode(data.content);
            setCurrentFilename(filename);
            setOutput("");
            // Auto-detect language based on extension
            if (filename.endsWith(".py")) setActiveLang(LANGUAGES[1]);
            else if (filename.endsWith(".js")) setActiveLang(LANGUAGES[2]);
            else if (filename.endsWith(".go")) setActiveLang(LANGUAGES[3]);
            else setActiveLang(LANGUAGES[0]);
        }
    };
    // --- 3. AI ASSISTANT LOGIC ---
    const handleAskAI = async ()=>{
        if (!output) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Run your code first to generate an output/error for the AI to analyze!");
            return;
        }
        setIsAiLoading(true);
        try {
            // Assuming you have a Next.js API route at /api/hint
            const res = await fetch("/api/hint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code,
                    error: output,
                    language: activeLang.id
                })
            });
            if (!res.ok) throw new Error("AI Service unavailable");
            const data = await res.json();
            setOutput((prev)=>prev + "\n\n🤖 AI LAB ASSISTANT:\n" + data.hint);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("AI Assistant is offline.");
        } finally{
            setIsAiLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (v)=>!v && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "!max-w-[95vw] !w-[95vw] h-[90vh] bg-[#1e1e1e] border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden sm:rounded-xl shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 bg-[#252526] border-b border-black/40 flex items-center justify-between px-4 shrink-0 select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            className: "text-white font-bold text-sm flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                    className: "w-4 h-4 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 18
                                                }, this),
                                                station?.label || "IDE Environment"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 164,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-zinc-400 font-mono flex items-center gap-1 mt-0.5",
                                            children: [
                                                currentFilename,
                                                " ",
                                                files.find((f)=>f.name === currentFilename) ? "(Saved)" : "(Unsaved)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 169,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 162,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative ml-4 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: activeLang.id,
                                            onChange: (e)=>{
                                                const selected = LANGUAGES.find((l)=>l.id === e.target.value) || LANGUAGES[0];
                                                setActiveLang(selected);
                                                setCode(selected.snippet); // Update Code
                                                setOutput(""); // Clear Output
                                            },
                                            className: "appearance-none bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer hover:border-zinc-500 transition-colors",
                                            children: LANGUAGES.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: lang.id,
                                                    children: lang.label
                                                }, lang.id, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 20
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 176,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "absolute right-2 top-2 w-3 h-3 text-zinc-500 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 190,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 175,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "ghost",
                                    onClick: ()=>setCode(activeLang.snippet),
                                    className: "text-zinc-400 hover:text-white hidden sm:flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        " Reset"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: handleAskAI,
                                    disabled: isAiLoading || !output,
                                    className: "bg-purple-900/20 text-purple-300 hover:bg-purple-900/40 border border-purple-500/30",
                                    children: [
                                        isAiLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 208,
                                            columnNumber: 30
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                            className: "w-4 h-4 sm:mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 208,
                                            columnNumber: 76
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "AI Hint"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: handleSave,
                                    className: "bg-blue-900/20 text-blue-300 hover:bg-blue-900/40 border border-blue-500/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        " Save"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    onClick: handleRun,
                                    disabled: isRunning,
                                    className: "bg-green-600 hover:bg-green-500 text-white min-w-[100px] shadow-lg shadow-green-900/20",
                                    children: [
                                        isRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 219,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "w-4 h-4 mr-2 fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 219,
                                            columnNumber: 74
                                        }, this),
                                        "Run"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-zinc-700 mx-2"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "icon",
                                    variant: "ghost",
                                    onClick: onClose,
                                    className: "text-zinc-400 hover:text-white rounded-full w-8 h-8 hover:bg-red-500/20 hover:text-red-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-56 bg-[#181818] border-r border-black/40 flex flex-col shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 flex items-center justify-between px-3 text-[11px] font-bold text-zinc-500 uppercase tracking-wider bg-[#1f1f1f]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Cloud Files"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `w-3 h-3 cursor-pointer hover:text-white ${isLoadingFiles ? 'animate-spin' : ''}`,
                                            onClick: refreshFiles
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-auto p-2 space-y-1",
                                    children: isLoadingFiles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-600 text-xs p-2 text-center",
                                        children: "Syncing..."
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                        lineNumber: 242,
                                        columnNumber: 18
                                    }, this) : files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-600 text-xs p-2 text-center italic",
                                        children: "No files found"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                        lineNumber: 244,
                                        columnNumber: 18
                                    }, this) : files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>loadFile(file.name),
                                            className: `flex items-center gap-2 px-2 py-1.5 rounded text-xs cursor-pointer select-none transition-colors ${currentFilename === file.name ? "bg-blue-600/20 text-blue-400" : "text-zinc-400 hover:bg-[#2a2a2a] hover:text-zinc-200"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-3.5 h-3.5 opacity-70"
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 22
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, file.name, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 247,
                                            columnNumber: 20
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 relative bg-[#1e1e1e]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$monaco$2d$editor$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                        height: "100%",
                                        language: activeLang.id,
                                        theme: "vs-dark",
                                        value: code,
                                        onChange: (value)=>setCode(value || ""),
                                        options: {
                                            minimap: {
                                                enabled: false
                                            },
                                            fontSize: 14,
                                            lineNumbers: "on",
                                            scrollBeyondLastLine: false,
                                            automaticLayout: true,
                                            padding: {
                                                top: 16
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                        lineNumber: 267,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-48 bg-[#0d0d0d] border-t border-zinc-800 flex flex-col shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 bg-[#1e1e1e] border-b border-black flex items-center px-4 justify-between select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Console Output"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setOutput(""),
                                                    className: "text-[10px] text-zinc-500 hover:text-zinc-300 underline",
                                                    children: "Clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 p-4 overflow-auto font-mono text-sm",
                                            children: output ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "text-zinc-300 whitespace-pre-wrap font-[inherit]",
                                                children: output
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full flex flex-col items-center justify-center text-zinc-800 space-y-2 select-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-8 h-8 opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        children: "Run code to see output"
                                                    }, void 0, false, {
                                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(CodeEditorWindow, "/M3OkK6sIarGkadvGnYHnsez+Po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CodeEditorWindow;
var _c;
__turbopack_context__.k.register(_c, "CodeEditorWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProctorDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
"use client";
;
;
;
// MOCK DATA: Using your actual uploaded assets as placeholders
const STUDENTS = [
    {
        id: "S-101",
        name: "Alice M.",
        status: "coding",
        img: "/screenshots/NodeLabs-1.png",
        warning: false
    },
    {
        id: "S-102",
        name: "Bob D.",
        status: "idle",
        img: "/screenshots/NodeLabs-2.png",
        warning: true
    },
    {
        id: "S-103",
        name: "Charlie",
        status: "coding",
        img: "/screenshots/sandbox-1.png",
        warning: false
    },
    {
        id: "S-104",
        name: "Dave K.",
        status: "coding",
        img: "/screenshots/sandbox-2.png",
        warning: false
    },
    {
        id: "S-105",
        name: "Eve P.",
        status: "coding",
        img: "/screenshots/sandbox-3.png",
        warning: false
    },
    {
        id: "S-106",
        name: "Frank",
        status: "offline",
        img: "/screenshots/sandbox-4.png",
        warning: true
    }
];
function ProctorDashboard({ isOpen, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (v)=>!v && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[90vw] h-[85vh] bg-slate-950 border-slate-800 text-white flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between pb-4 border-b border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                    className: "text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-sm font-mono text-zinc-300 font-normal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold",
                                        children: "Proctor Surveillance Grid"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-red-900/50 text-red-400 text-xs px-2 py-0.5 rounded border border-red-800 animate-pulse",
                                    children: "LIVE FEED • REC"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-400",
                            children: [
                                "Active Students: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold",
                                    children: "6/20"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto grid grid-cols-3 gap-4 p-4",
                    children: STUDENTS.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group bg-slate-900 rounded-lg border border-slate-800 overflow-hidden hover:border-purple-500 transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video bg-black relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: student.img,
                                            alt: "screen",
                                            className: "w-full h-full object-cover opacity-80 group-hover:opacity-100"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                            lineNumber: 51,
                                            columnNumber: 18
                                        }, this),
                                        student.warning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-red-500/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-12 h-12 text-red-500 drop-shadow-lg animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                                lineNumber: 56,
                                                columnNumber: 22
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                            lineNumber: 55,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 flex items-center justify-between bg-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold text-sm",
                                                    children: student.name
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-slate-500 uppercase",
                                                    children: [
                                                        student.id,
                                                        " • ",
                                                        student.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        student.warning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-[10px] bg-red-600 hover:bg-red-500 px-2 py-1 rounded text-white font-bold",
                                            children: "SEND WARNING"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-4 h-4 text-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, student.id, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ProctorDashboard;
var _c;
__turbopack_context__.k.register(_c, "ProctorDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
// 1. Import DialogTitle
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function TerminalWindow({ isOpen, onClose, stationName, stationId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (val)=>!val && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[90vw] h-[85vh] bg-zinc-950 border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-10 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                    className: "w-4 h-4 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-sm font-mono text-zinc-300 font-normal",
                                    children: [
                                        "root@netverse:",
                                        stationId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-6 w-6 text-zinc-500 hover:text-zinc-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-6 w-6 text-zinc-500 hover:text-zinc-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: onClose,
                                    className: "h-6 w-6 text-red-400 hover:bg-red-900/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-12 bg-zinc-900/50 border-b border-zinc-800 flex items-center px-4 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 47,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-green-500 font-bold",
                                    children: "CONNECTED"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 48,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-px bg-zinc-800"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            className: "bg-blue-600 hover:bg-blue-500 text-xs h-7 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                " Run Script"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-black relative font-mono text-sm p-4 text-zinc-300 overflow-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "NetVerse OS v2.4.0 [Stable]"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4",
                                children: 'Type "help" for a list of commands.'
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500",
                                        children: [
                                            "root@",
                                            stationId,
                                            ":~#"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                        lineNumber: 61,
                                        columnNumber: 16
                                    }, this),
                                    " apt update"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Hit:2 http://security.ubuntu.com/ubuntu jammy-security InRelease"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Reading package lists... Done"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500",
                                        children: [
                                            "root@",
                                            stationId,
                                            ":~#"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-pulse",
                                        children: "_"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                        lineNumber: 65,
                                        columnNumber: 93
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = TerminalWindow;
var _c;
__turbopack_context__.k.register(_c, "TerminalWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StationModalManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$modals$2f$CodeEditorWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/CodeEditorWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$modals$2f$ProctorDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/ProctorDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$modals$2f$TerminalWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/modals/TerminalWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function StationModalManager({ activeStation, isOpen, onClose }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [doubt, setDoubt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [realTimeStatus, setRealTimeStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("offline");
    // New: Store my previous doubts
    const [myHistory, setMyHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StationModalManager.useEffect": ()=>{
            if (activeStation?.type === "npc-teacher" && user) {
                // 1. Listen for Professor Status
                const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "game_state/professor_status");
                const unsubStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(statusRef, {
                    "StationModalManager.useEffect.unsubStatus": (s)=>setRealTimeStatus(s.val() === "online" ? "online" : "offline")
                }["StationModalManager.useEffect.unsubStatus"]);
                // 2. Listen for MY doubts (History)
                const myDoubtsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "doubts"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderByChild"])("studentId"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equalTo"])(user.uid));
                const unsubDoubts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(myDoubtsRef, {
                    "StationModalManager.useEffect.unsubDoubts": (snapshot)=>{
                        const data = snapshot.val();
                        if (data) {
                            const list = Object.values(data).sort({
                                "StationModalManager.useEffect.unsubDoubts.list": (a, b)=>b.timestamp - a.timestamp
                            }["StationModalManager.useEffect.unsubDoubts.list"]);
                            setMyHistory(list);
                        } else {
                            setMyHistory([]);
                        }
                    }
                }["StationModalManager.useEffect.unsubDoubts"]);
                return ({
                    "StationModalManager.useEffect": ()=>{
                        unsubStatus();
                        unsubDoubts();
                    }
                })["StationModalManager.useEffect"];
            }
        }
    }["StationModalManager.useEffect"], [
        activeStation,
        user
    ]);
    if (!activeStation || !isOpen) return null;
    // ... (Keep Security, Exam, Terminal blocks exactly as they were) ...
    if (activeStation.type === "security") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$modals$2f$ProctorDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
        lineNumber: 55,
        columnNumber: 49
    }, this);
    if (activeStation.type === "exam" || activeStation.type === "dev" || activeStation.type === "code-editor") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$modals$2f$CodeEditorWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        onClose: onClose,
        station: activeStation
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
        lineNumber: 56,
        columnNumber: 117
    }, this);
    if (activeStation.type === "server") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$modals$2f$TerminalWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isOpen: isOpen,
        onClose: onClose,
        stationName: activeStation.label,
        stationId: activeStation.id
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
        lineNumber: 57,
        columnNumber: 47
    }, this);
    // 4. TEACHER NPC
    if (activeStation.type === "npc-teacher") {
        const handleSendDoubt = async ()=>{
            if (!doubt.trim() || !user) return;
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["push"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "doubts"), {
                    studentName: user.displayName || "Student",
                    studentId: user.uid,
                    text: doubt,
                    timestamp: Date.now(),
                    status: "pending"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Sent!");
                setDoubt("");
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send.");
            }
        };
        const isOnline = realTimeStatus === "online";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: (val)=>!val && onClose(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-lg bg-zinc-900 border-zinc-700 text-white shadow-2xl h-[600px] flex flex-col",
                "aria-describedby": "teacher-desc",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center border-2 border-yellow-500 overflow-hidden shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/characters/teacher.png",
                                            className: "w-full h-full object-cover",
                                            onError: (e)=>e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Professor&clothing=blazerAndShirt"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-yellow-400 block",
                                                children: activeStation.label
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-zinc-400 uppercase tracking-widest font-normal flex items-center gap-1",
                                                children: isOnline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                            className: "w-3 h-3 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 39
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400",
                                                            children: "Online"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 81
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                                            className: "w-3 h-3 text-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 135
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400",
                                                            children: "Offline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 178
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                lineNumber: 83,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                id: "teacher-desc",
                                className: "sr-only",
                                children: "Ask doubts"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                lineNumber: 94,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col gap-4 mt-2 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: doubt,
                                        onChange: (e)=>setDoubt(e.target.value),
                                        placeholder: "Type your doubt here...",
                                        className: "w-full h-20 bg-black/50 border border-zinc-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-yellow-500 resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleSendDoubt,
                                            disabled: !doubt.trim(),
                                            size: "sm",
                                            className: "bg-yellow-600 hover:bg-yellow-500 text-white font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-3 h-3 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                " Ask Professor"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-hidden flex flex-col bg-zinc-950/30 rounded-lg border border-zinc-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-zinc-800/50 text-xs font-bold text-zinc-400 uppercase flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            " Your Previous Doubts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 115,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto p-3 space-y-3",
                                        children: myHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-600 text-xs text-center mt-10",
                                            children: "No history yet."
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, this) : myHistory.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "self-end bg-blue-900/20 border border-blue-900/50 rounded-lg rounded-tr-none p-2 max-w-[85%]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-blue-100",
                                                                children: item.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-blue-400/60 block mt-1 text-right",
                                                                children: new Date(item.timestamp).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 26
                                                    }, this),
                                                    item.status === 'resolved' && item.answer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "self-start bg-yellow-900/20 border border-yellow-900/50 rounded-lg rounded-tl-none p-2 max-w-[90%]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-yellow-500 font-bold mb-1",
                                                                children: "Professor Byte:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-yellow-100/90",
                                                                children: item.answer
                                                            }, void 0, false, {
                                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 29
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "self-end text-[10px] text-zinc-500 italic pr-1",
                                                        children: "Waiting for reply..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                                lineNumber: 123,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 118,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    // Common Area
    if (activeStation.type === "common" || activeStation.type === "social") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isOpen,
            onOpenChange: (val)=>!val && onClose(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-md bg-zinc-900 border-zinc-800 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "flex items-center gap-2 text-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                        className: "text-orange-400"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                        lineNumber: 156,
                                        columnNumber: 70
                                    }, this),
                                    " ",
                                    activeStation.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                className: "text-zinc-400",
                                children: "Relax zone."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            variant: "secondary",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                            lineNumber: 159,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(StationModalManager, "uylNbWxRB3vodrV9BLOxMNKMupM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = StationModalManager;
var _c;
__turbopack_context__.k.register(_c, "StationModalManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MiniMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/game-config.ts [app-client] (ecmascript)");
"use client";
;
;
function MiniMap({ playerPos }) {
    // 1. Calculate the Scale Factor
    // We want the MiniMap to be fixed width (e.g., 240px)
    const MINI_WIDTH = 240;
    const scale = MINI_WIDTH / __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapWidth;
    const MINI_HEIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapHeight * scale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-6 right-6 z-50 bg-black/80 border-2 border-slate-600 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm",
        style: {
            width: MINI_WIDTH,
            height: MINI_HEIGHT
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 bg-slate-800/80 text-[8px] text-white px-1.5 py-0.5 rounded-br",
                children: "SECTOR MAP"
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIONS"].map((station)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-1.5 h-1.5 rounded-full",
                    style: {
                        left: station.x * scale,
                        top: station.y * scale,
                        // Fix: Fallback to gray string if color is missing
                        backgroundColor: (station.color || "").includes('red') ? '#ef4444' : (station.color || "").includes('blue') ? '#3b82f6' : (station.color || "").includes('yellow') ? '#eab308' : '#22c55e'
                    }
                }, station.id, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx",
                    lineNumber: 29,
                    columnNumber: 8
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-2.5 h-2.5 bg-yellow-400 rounded-full border border-white shadow-[0_0_8px_rgba(250,204,21,0.8)] z-10",
                style: {
                    left: playerPos.x * scale - 1.25,
                    top: playerPos.y * scale - 1.25
                }
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute border border-white/30 bg-white/5 pointer-events-none",
                style: {
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportWidth * scale,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportHeight * scale,
                    left: (playerPos.x - __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportWidth / 2) * scale,
                    top: (playerPos.y - __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportHeight / 2) * scale
                }
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = MiniMap;
var _c;
__turbopack_context__.k.register(_c, "MiniMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/hooks/useChat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChat",
    ()=>useChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useChat(chatId) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 1. Subscribe to Messages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChat.useEffect": ()=>{
            if (!chatId) {
                setMessages([]);
                return;
            }
            const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `chats/${chatId}`);
            // Only load last 50 messages to save bandwidth
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limitToLast"])(50));
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(q, {
                "useChat.useEffect.unsubscribe": (snapshot)=>{
                    const data = snapshot.val();
                    if (!data) return;
                    const loadedMessages = Object.entries(data).map({
                        "useChat.useEffect.unsubscribe.loadedMessages": ([key, val])=>({
                                id: key,
                                ...val
                            })
                    }["useChat.useEffect.unsubscribe.loadedMessages"]);
                    setMessages(loadedMessages);
                }
            }["useChat.useEffect.unsubscribe"]);
            return ({
                "useChat.useEffect": ()=>unsubscribe()
            })["useChat.useEffect"];
        }
    }["useChat.useEffect"], [
        chatId
    ]);
    // 2. Send Function
    const sendMessage = async (senderName, text)=>{
        if (!chatId || !text.trim()) return;
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `chats/${chatId}`);
        const newMessageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["push"])(messagesRef);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(newMessageRef, {
            senderName,
            text,
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
        });
    };
    return {
        messages,
        sendMessage
    };
}
_s(useChat, "RyA59LRbn9goj/9N7rELX+NWNVI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$hooks$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/hooks/useChat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ChatModal({ isOpen, onClose, chatId, myUsername, partnerName }) {
    _s();
    const { messages, sendMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$hooks$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"])(chatId);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll to bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatModal.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatModal.useEffect"], [
        messages,
        isOpen
    ]);
    const handleSend = ()=>{
        sendMessage(myUsername, inputText);
        setInputText("");
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col h-96 animate-in slide-in-from-right-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-800 p-3 flex justify-between items-center border-b border-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                                lineNumber: 38,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-white text-sm",
                                children: [
                                    "Chat with ",
                                    partnerName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                                lineNumber: 39,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-slate-400 hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950/50",
                children: [
                    messages.map((msg)=>{
                        const isMe = msg.senderName === myUsername;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col ${isMe ? "items-end" : "items-start"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-slate-500 mb-0.5",
                                    children: msg.senderName
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                                    lineNumber: 52,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `px-3 py-2 rounded-lg text-sm max-w-[85%] break-words ${isMe ? "bg-blue-600 text-white rounded-br-none" : "bg-slate-700 text-slate-200 rounded-bl-none"}`,
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomRef
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-slate-800 border-t border-slate-700 flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        onKeyDown: (e)=>e.key === "Enter" && handleSend(),
                        placeholder: "Type a message...",
                        className: "bg-slate-900 border-slate-600 text-white h-9 text-xs"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "icon",
                        onClick: handleSend,
                        className: "h-9 w-9 bg-blue-600 hover:bg-blue-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ChatModal, "gV6Ep1U6VkEgj+90UrR29eVtKHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$hooks$2f$useChat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChat"]
    ];
});
_c = ChatModal;
var _c;
__turbopack_context__.k.register(_c, "ChatModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Teacher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
function Teacher({ x, y, label, status = "offline" }) {
    const statusColors = {
        online: "bg-blue-500 shadow-blue-500/50",
        available: "bg-green-500 shadow-green-500/50",
        offline: "bg-zinc-500 shadow-zinc-500/50"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute flex flex-col items-center justify-center z-10 w-16 h-16 -ml-4 -mt-8",
        initial: {
            x,
            y
        },
        animate: {
            y: [
                y,
                y - 4,
                y
            ]
        },
        transition: {
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -top-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-md`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-2 h-2 rounded-full shadow-[0_0_8px] ${statusColors[status] || statusColors.offline} animate-pulse`
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] text-white font-bold uppercase tracking-wide",
                        children: status === 'available' ? "Accepting Doubts" : status
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/characters/teacher.png",
                alt: "Professor",
                className: "w-full h-full object-contain pixelated drop-shadow-md",
                onError: (e)=>{
                    e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Professor&clothing=blazerAndShirt";
                }
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-4 bg-yellow-600/90 border border-yellow-400 px-2 py-0.5 rounded text-[10px] text-white font-bold whitespace-nowrap shadow-lg z-20",
                children: label
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Teacher;
var _c;
__turbopack_context__.k.register(_c, "Teacher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeacherDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareReply$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/message-square-reply.js [app-client] (ecmascript) <export default as MessageSquareReply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function TeacherDashboard() {
    _s();
    const [doubts, setDoubts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Reply State
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedDoubt, setSelectedDoubt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeacherDashboard.useEffect": ()=>{
            // Listen to ALL doubts
            const doubtsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "doubts");
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(doubtsRef, {
                "TeacherDashboard.useEffect.unsubscribe": (snapshot)=>{
                    const data = snapshot.val();
                    if (data) {
                        const list = Object.entries(data).map({
                            "TeacherDashboard.useEffect.unsubscribe.list": ([key, val])=>({
                                    id: key,
                                    ...val
                                })
                        }["TeacherDashboard.useEffect.unsubscribe.list"])// Sort: Pending first, then by time
                        .sort({
                            "TeacherDashboard.useEffect.unsubscribe.list": (a, b)=>b.timestamp - a.timestamp
                        }["TeacherDashboard.useEffect.unsubscribe.list"]);
                        setDoubts(list);
                    } else {
                        setDoubts([]);
                    }
                }
            }["TeacherDashboard.useEffect.unsubscribe"]);
            return ({
                "TeacherDashboard.useEffect": ()=>unsubscribe()
            })["TeacherDashboard.useEffect"];
        }
    }["TeacherDashboard.useEffect"], []);
    const handleReply = async ()=>{
        if (!selectedDoubt || !replyText.trim()) return;
        try {
            // Update Firebase instead of removing
            const doubtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `doubts/${selectedDoubt.id}`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["update"])(doubtRef, {
                status: "resolved",
                answer: replyText,
                resolvedAt: Date.now()
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Replied to ${selectedDoubt.studentName}!`);
            setReplyText("");
            setSelectedDoubt(null);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send reply");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-4 top-20 w-80 bg-zinc-900/95 border border-yellow-500/30 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col max-h-[70vh] z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-600/20 p-4 border-b border-yellow-500/20 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-yellow-400 font-bold flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    " Professor Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] bg-yellow-500/20 text-yellow-200 px-2 py-0.5 rounded-full border border-yellow-500/30",
                                children: [
                                    doubts.filter((d)=>d.status === 'pending').length,
                                    " Pending"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-2 space-y-2",
                        children: doubts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-zinc-500 text-xs text-center py-8 italic",
                            children: "No active doubts."
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this) : doubts.map((doubt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-lg border transition-all ${doubt.status === 'resolved' ? "bg-zinc-900/50 border-zinc-800 opacity-60" : "bg-black/40 border-yellow-500/30 hover:border-yellow-500/50"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-bold ${doubt.status === 'resolved' ? 'text-zinc-500' : 'text-blue-400'}`,
                                                children: doubt.studentName
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-600 text-[10px]",
                                                children: new Date(doubt.timestamp).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-300 text-sm mb-3 leading-relaxed",
                                        children: [
                                            '"',
                                            doubt.text,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    doubt.status === 'resolved' && doubt.answer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 pl-2 border-l-2 border-green-500/50 text-xs text-green-400/80",
                                        children: [
                                            "You: ",
                                            doubt.answer
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 20
                                    }, this),
                                    doubt.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setSelectedDoubt(doubt),
                                        className: "w-full h-7 text-xs bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-400 border border-yellow-600/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareReply$3e$__["MessageSquareReply"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            " Reply"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, doubt.id, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedDoubt,
                onOpenChange: (open)=>!open && setSelectedDoubt(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "bg-zinc-900 border-zinc-700 text-white sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-yellow-400 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$reply$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareReply$3e$__["MessageSquareReply"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                        lineNumber: 127,
                                        columnNumber: 16
                                    }, this),
                                    " Reply to Student"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/40 p-3 rounded text-sm text-zinc-400 border border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-zinc-500 uppercase font-bold block mb-1",
                                            children: [
                                                "Question from ",
                                                selectedDoubt?.studentName,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                            lineNumber: 133,
                                            columnNumber: 16
                                        }, this),
                                        '"',
                                        selectedDoubt?.text,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-zinc-300 uppercase",
                                            children: "Your Answer"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                            lineNumber: 138,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "w-full h-32 bg-black border border-zinc-700 rounded p-2 text-sm text-white focus:outline-none focus:border-yellow-500",
                                            placeholder: "Type your explanation here...",
                                            value: replyText,
                                            onChange: (e)=>setReplyText(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                            lineNumber: 139,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            onClick: ()=>setSelectedDoubt(null),
                                            className: "text-zinc-400",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                            lineNumber: 148,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handleReply,
                                            className: "bg-yellow-600 hover:bg-yellow-500 text-white",
                                            disabled: !replyText.trim(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 18
                                                }, this),
                                                " Send Reply"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                            lineNumber: 149,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TeacherDashboard, "ToDvdIpDmJF0PNs/6DxcUUMrTgY=");
_c = TeacherDashboard;
var _c;
__turbopack_context__.k.register(_c, "TeacherDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/google-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleAPI",
    ()=>GoogleAPI
]);
// Helper function to handle fetch calls
const fetchGoogle = async (url, token, method = "GET", body = null)=>{
    const headers = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    const options = {
        method,
        headers
    };
    if (body) options.body = JSON.stringify(body);
    const res = await fetch(url, options);
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Google API Error");
    }
    return await res.json();
};
const GoogleAPI = {
    // --- CLASSROOM ---
    getCourses: async (token)=>{
        // Returns list of active courses
        const data = await fetchGoogle("https://classroom.googleapis.com/v1/courses?courseStates=ACTIVE", token);
        return data.courses || [];
    },
    // Get Students in a Course
    getStudents: async (token, courseId)=>{
        const data = await fetchGoogle(`https://classroom.googleapis.com/v1/courses/${courseId}/students`, token);
        return data.students || [];
    },
    //Create a brand new Course
    createCourse: async (token, name, section)=>{
        const body = {
            name,
            section,
            ownerId: "me",
            courseState: "PROVISIONED"
        };
        return await fetchGoogle("https://classroom.googleapis.com/v1/courses", token, "POST", body);
    },
    // Create Assignment
    createAssignment: async (token, courseId, title, description)=>{
        const body = {
            title,
            description,
            workType: "ASSIGNMENT",
            state: "PUBLISHED",
            maxPoints: 100
        };
        return await fetchGoogle(`https://classroom.googleapis.com/v1/courses/${courseId}/courseWork`, token, "POST", body);
    },
    getCourseWork: async (token, courseId)=>{
        const data = await fetchGoogle(`https://classroom.googleapis.com/v1/courses/${courseId}/courseWork`, token);
        return data.courseWork || [];
    },
    // --- CALENDAR ---
    getEvents: async (token)=>{
        const now = new Date().toISOString();
        // Get primary calendar events from now onwards
        const data = await fetchGoogle(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now}&orderBy=startTime&singleEvents=true`, token);
        return data.items || [];
    },
    addEvent: async (token, summary, description, startTime, endTime)=>{
        const event = {
            summary,
            description,
            start: {
                dateTime: startTime
            },
            end: {
                dateTime: endTime
            }
        };
        return await fetchGoogle("https://www.googleapis.com/calendar/v3/calendars/primary/events", token, "POST", event);
    },
    // --- SHEETS ---
    createSheet: async (token, title)=>{
        const body = {
            properties: {
                title
            }
        };
        return await fetchGoogle("https://sheets.googleapis.com/v4/spreadsheets", token, "POST", body);
    },
    appendData: async (token, spreadsheetId, range, values)=>{
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`;
        const body = {
            values
        };
        return await fetchGoogle(url, token, "POST", body);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClassroomPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/google-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/school.js [app-client] (ecmascript) <export default as School>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleAPI } from "@/lib/google-api";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Loader2, ExternalLink } from "lucide-react";
// import { toast } from "sonner";
// export default function ClassroomPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     loadCourses();
//   }, []);
//   const loadCourses = async () => {
//     setLoading(true);
//     try {
//       const data = await GoogleAPI.getCourses(token);
//       setCourses(data);
//     } catch (error) {
//       toast.error("Failed to load courses");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-bold text-white">Active Courses</h2>
//         <Button variant="outline" size="sm" onClick={loadCourses} disabled={loading}>
//           {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
//         </Button>
//       </div>
//       {/* Teacher Action Bar */}
//       {isTeacher && (
//         <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg mb-4">
//           <p className="text-yellow-400 text-sm font-bold mb-2">Professor Controls</p>
//           <div className="flex gap-2">
//             <Button size="sm" className="bg-yellow-600 hover:bg-yellow-500 text-white">Create New Assignment</Button>
//             <Button size="sm" variant="secondary">Manage Students</Button>
//           </div>
//         </div>
//       )}
//       {/* Course Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.length === 0 && !loading && (
//           <div className="col-span-full text-center text-zinc-500 py-10">No active Google Classroom courses found.</div>
//         )}
//         {courses.map((course) => (
//           <Card key={course.id} className="bg-zinc-950 border-zinc-800 p-4 flex flex-col justify-between hover:border-blue-500/50 transition-all">
//             <div>
//               <h3 className="text-lg font-bold text-white mb-1">{course.name}</h3>
//               <p className="text-sm text-zinc-400">{course.section}</p>
//               {course.descriptionHeading && <p className="text-xs text-zinc-500 mt-2">{course.descriptionHeading}</p>}
//             </div>
//             <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
//               <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
//                 {course.courseState}
//               </span>
//               <a href={course.alternateLink} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 text-zinc-300 hover:text-white hover:underline">
//                 Open <ExternalLink className="w-3 h-3" />
//               </a>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
///////////////////////////////////////
// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleAPI } from "@/lib/google-api";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Loader2, ExternalLink, Plus, Users, School } from "lucide-react";
// import { toast } from "sonner";
// export default function ClassroomPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   // --- MODAL STATE ---
//   const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
//   const [modalType, setModalType] = useState<"create_course" | "assignment" | "students" | null>(null);
//   // Inputs
//   const [newCourseName, setNewCourseName] = useState("");
//   const [newCourseSection, setNewCourseSection] = useState("");
//   const [assignTitle, setAssignTitle] = useState("");
//   const [assignDesc, setAssignDesc] = useState("");
//   // Student List
//   const [students, setStudents] = useState<any[]>([]);
//   useEffect(() => {
//     loadCourses();
//   }, []);
//   const loadCourses = async () => {
//     setLoading(true);
//     try {
//       const data = await GoogleAPI.getCourses(token);
//       setCourses(data);
//     } catch (error: any) {
//       toast.error("Error: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // 1. HANDLE CREATE COURSE (NEW)
//   const handleCreateCourse = async () => {
//     if (!newCourseName) return;
//     toast.loading("Creating Classroom...");
//     try {
//       await GoogleAPI.createCourse(token, newCourseName, newCourseSection || "NetVerse Lab");
//       toast.dismiss();
//       toast.success("Classroom Created!");
//       closeModal();
//       loadCourses(); // Refresh list
//     } catch (error) {
//       toast.dismiss();
//       toast.error("Failed to create course. Ensure you are a verified teacher.");
//     }
//   };
//   // 2. HANDLE CREATE ASSIGNMENT
//   const handleCreateAssignment = async () => {
//     if (!activeCourseId || !assignTitle) return;
//     toast.loading("Publishing to Classroom...");
//     try {
//       await GoogleAPI.createAssignment(token, activeCourseId, assignTitle, assignDesc);
//       toast.dismiss();
//       toast.success("Assignment Created!");
//       closeModal();
//     } catch (error) {
//       toast.dismiss();
//       toast.error("Failed to create assignment");
//     }
//   };
//   // 3. HANDLE VIEW STUDENTS
//   const handleViewStudents = async (courseId: string) => {
//     setActiveCourseId(courseId);
//     setModalType("students");
//     setStudents([]); 
//     try {
//       const list = await GoogleAPI.getStudents(token, courseId);
//       setStudents(list);
//     } catch (error) {
//       toast.error("Could not fetch roster");
//     }
//   };
//   const closeModal = () => {
//     setActiveCourseId(null);
//     setModalType(null);
//     setNewCourseName("");
//     setNewCourseSection("");
//   };
//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
//         <div>
//            <h2 className="text-xl font-bold text-white flex items-center gap-2">
//              <School className="w-6 h-6 text-blue-500" /> Active Classrooms
//            </h2>
//            <p className="text-xs text-zinc-500">Manage your virtual labs and students</p>
//         </div>
//         <div className="flex gap-2">
//            <Button variant="outline" size="sm" onClick={loadCourses} disabled={loading}>
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
//            </Button>
//            {isTeacher && (
//              <Button size="sm" onClick={() => setModalType("create_course")} className="bg-green-600 hover:bg-green-500 text-white">
//                <Plus className="w-4 h-4 mr-2" /> New Class
//              </Button>
//            )}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.length === 0 && !loading && (
//           <div className="col-span-full flex flex-col items-center justify-center py-12 text-zinc-500 border-2 border-dashed border-zinc-800 rounded-xl">
//             <School className="w-12 h-12 mb-4 opacity-20" />
//             <p className="font-bold">No active courses found.</p>
//             {isTeacher && (
//                <Button variant="link" onClick={() => setModalType("create_course")} className="text-blue-400">
//                  Create your first Virtual Lab Class
//                </Button>
//             )}
//           </div>
//         )}
//         {courses.map((course) => (
//           <Card key={course.id} className="bg-zinc-950 border-zinc-800 p-4 flex flex-col justify-between hover:border-blue-500/50 transition-all group">
//             <div>
//               <div className="flex justify-between items-start mb-1">
//                  <h3 className="text-lg font-bold text-white truncate w-[80%]">{course.name}</h3>
//                  <a href={course.alternateLink} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors">
//                     <ExternalLink className="w-4 h-4" />
//                  </a>
//               </div>
//               <p className="text-sm text-zinc-400 mb-4">{course.section || "General"}</p>
//               {/* TEACHER CONTROLS */}
//               {isTeacher && (
//                 <div className="grid grid-cols-2 gap-2 mb-4 opacity-100 sm:opacity-40 group-hover:opacity-100 transition-opacity">
//                   <Button 
//                     size="sm" 
//                     className="bg-zinc-800 hover:bg-zinc-700 text-xs h-8 border border-zinc-700"
//                     onClick={() => handleViewStudents(course.id)}
//                   >
//                     <Users className="w-3 h-3 mr-1" /> Roster
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     className="bg-blue-600 hover:bg-blue-500 text-xs h-8"
//                     onClick={() => { setActiveCourseId(course.id); setModalType("assignment"); }}
//                   >
//                     <Plus className="w-3 h-3 mr-1" /> Assign
//                   </Button>
//                 </div>
//               )}
//             </div>
//             <div className="pt-3 border-t border-zinc-900 flex justify-between items-center">
//               <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${course.courseState === 'ACTIVE' ? 'bg-green-900/20 text-green-400' : 'bg-yellow-900/20 text-yellow-400'}`}>
//                 {course.courseState}
//               </span>
//               <span className="text-[10px] text-zinc-600 font-mono">ID: {course.id.slice(-4)}</span>
//             </div>
//           </Card>
//         ))}
//       </div>
//       {/* --- MODALS --- */}
//       <Dialog open={!!modalType} onOpenChange={(open) => !open && closeModal()}>
//         <DialogContent className="bg-zinc-900 border-zinc-800 text-white sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>
//               {modalType === 'create_course' && 'Create Virtual Lab Class'}
//               {modalType === 'assignment' && 'Create New Assignment'}
//               {modalType === 'students' && 'Student Roster'}
//             </DialogTitle>
//           </DialogHeader>
//           {/* 1. CREATE COURSE FORM */}
//           {modalType === 'create_course' && (
//             <div className="space-y-4 pt-4">
//                <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded text-xs text-blue-200">
//                   This will create a real Google Classroom course linked to this Metaverse account.
//                </div>
//                <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Class Name</label>
//                 <Input 
//                   value={newCourseName} 
//                   onChange={(e) => setNewCourseName(e.target.value)} 
//                   className="bg-black border-zinc-700"
//                   placeholder="e.g., CS101: Data Structures"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Section (Optional)</label>
//                 <Input 
//                   value={newCourseSection} 
//                   onChange={(e) => setNewCourseSection(e.target.value)} 
//                   className="bg-black border-zinc-700"
//                   placeholder="e.g., Lab Group A"
//                 />
//               </div>
//               <Button onClick={handleCreateCourse} className="w-full bg-green-600 hover:bg-green-500 font-bold">
//                 Create Classroom
//               </Button>
//             </div>
//           )}
//           {/* 2. ASSIGNMENT FORM */}
//           {modalType === 'assignment' && (
//             <div className="space-y-4 pt-4">
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Assignment Title</label>
//                 <Input 
//                   value={assignTitle} 
//                   onChange={(e) => setAssignTitle(e.target.value)} 
//                   className="bg-black border-zinc-700"
//                   placeholder="e.g., Lab Report 4"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Description</label>
//                 <textarea 
//                   value={assignDesc} 
//                   onChange={(e) => setAssignDesc(e.target.value)} 
//                   className="w-full h-24 bg-black border border-zinc-700 rounded-md p-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
//                   placeholder="Instructions for students..."
//                 />
//               </div>
//               <Button onClick={handleCreateAssignment} className="w-full bg-blue-600 hover:bg-blue-500">
//                 Publish Assignment
//               </Button>
//             </div>
//           )}
//           {/* 3. STUDENT LIST */}
//           {modalType === 'students' && (
//             <div className="pt-2 max-h-[300px] overflow-y-auto space-y-2">
//               {students.length === 0 ? (
//                 <div className="text-center py-6">
//                    <Users className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
//                    <p className="text-zinc-500 text-sm">No students enrolled yet.</p>
//                    <p className="text-xs text-zinc-600 mt-1">Share the Google Classroom code with students.</p>
//                 </div>
//               ) : (
//                 students.map((student) => (
//                   <div key={student.userId} className="flex items-center gap-3 p-2 bg-black/40 rounded border border-zinc-800">
//                     <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
//                       {student.profile?.name?.fullName?.[0] || "?"}
//                     </div>
//                     <div>
//                       <p className="text-sm font-bold text-zinc-200">{student.profile?.name?.fullName}</p>
//                       <p className="text-[10px] text-zinc-500">{student.profile?.emailAddress}</p>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
"use client";
;
;
;
;
;
;
;
;
function ClassroomPanel({ token, isTeacher }) {
    _s();
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- UI STATES ---
    // "view" replaces "modalType" for the main create actions to avoid nested dialogs
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    // MODAL STATES (For assignments/students only)
    const [activeCourseId, setActiveCourseId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalType, setModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Inputs
    const [newCourseName, setNewCourseName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newCourseSection, setNewCourseSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [assignTitle, setAssignTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [assignDesc, setAssignDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Student List
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClassroomPanel.useEffect": ()=>{
            loadCourses();
        }
    }["ClassroomPanel.useEffect"], []);
    const loadCourses = async ()=>{
        setLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].getCourses(token);
            setCourses(data);
        } catch (error) {
            console.error("Load Courses Error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error: " + error.message);
        } finally{
            setLoading(false);
        }
    };
    // 1. HANDLE CREATE COURSE
    const handleCreateCourse = async ()=>{
        if (!newCourseName) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Creating Classroom...");
        try {
            // PROVISIONED = Draft mode. ACTIVE = Live.
            await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].createCourse(token, newCourseName, newCourseSection || "NetVerse Lab");
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Classroom Created!");
            setView("list");
            setNewCourseName("");
            loadCourses();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            console.error("CREATE COURSE ERROR:", error);
            // Specific error handling for Personal Gmail accounts
            if (error.message?.includes("403") || error.message?.includes("PERMISSION_DENIED")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Permission Denied: Personal Gmail accounts cannot create classes via API. Please create it manually at classroom.google.com and refresh.");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to create course. Check console for details.");
            }
        }
    };
    // 2. HANDLE CREATE ASSIGNMENT
    const handleCreateAssignment = async ()=>{
        if (!activeCourseId || !assignTitle) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Publishing to Classroom...");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].createAssignment(token, activeCourseId, assignTitle, assignDesc);
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Assignment Created!");
            closeModal();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to create assignment");
        }
    };
    // 3. HANDLE VIEW STUDENTS
    const handleViewStudents = async (courseId)=>{
        setActiveCourseId(courseId);
        setModalType("students");
        setStudents([]);
        try {
            const list = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].getStudents(token, courseId);
            setStudents(list);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Could not fetch roster");
        }
    };
    const closeModal = ()=>{
        setActiveCourseId(null);
        setModalType(null);
    };
    // --- VIEW: CREATE COURSE FORM (Inline instead of Modal) ---
    if (view === "create_course") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 animate-in slide-in-from-right-10 fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            onClick: ()=>setView("list"),
                            className: "text-zinc-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                " Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white",
                            children: "Create Virtual Lab Class"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-zinc-900 border-zinc-800 p-6 max-w-lg mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-900/20 border border-blue-500/30 p-3 rounded text-xs text-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Note:"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this),
                                    " If using a personal Gmail account (@gmail.com), Google blocks API course creation. You must use a Workspace account or create the class manually."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 475,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-zinc-400",
                                        children: "Class Name"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: newCourseName,
                                        onChange: (e)=>setNewCourseName(e.target.value),
                                        className: "bg-black border-zinc-700 text-white",
                                        placeholder: "e.g., CS101: Data Structures"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 478,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-zinc-400",
                                        children: "Section (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: newCourseSection,
                                        onChange: (e)=>setNewCourseSection(e.target.value),
                                        className: "bg-black border-zinc-700 text-white",
                                        placeholder: "e.g., Lab Group A"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 487,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleCreateCourse,
                                className: "w-full bg-green-600 hover:bg-green-500 font-bold",
                                children: "Create Classroom"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 496,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
            lineNumber: 465,
            columnNumber: 7
        }, this);
    }
    // --- VIEW: LIST COURSES ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
                                        className: "w-6 h-6 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 511,
                                        columnNumber: 14
                                    }, this),
                                    " Active Classrooms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 510,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500",
                                children: "Manage your virtual labs and students"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 513,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: loadCourses,
                                disabled: loading,
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-4 h-4 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 518,
                                    columnNumber: 24
                                }, this) : "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 517,
                                columnNumber: 12
                            }, this),
                            isTeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: ()=>setView("create_course"),
                                className: "bg-green-600 hover:bg-green-500 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 523,
                                        columnNumber: 16
                                    }, this),
                                    " New Class"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 522,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: [
                    courses.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-full flex flex-col items-center justify-center py-12 text-zinc-500 border-2 border-dashed border-zinc-800 rounded-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
                                className: "w-12 h-12 mb-4 opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold",
                                children: "No active courses found."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this),
                            isTeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                onClick: ()=>setView("create_course"),
                                className: "text-blue-400",
                                children: "Create your first Virtual Lab Class"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 535,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this),
                    courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-zinc-950 border-zinc-800 p-4 flex flex-col justify-between hover:border-blue-500/50 transition-all group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-white truncate w-[80%]",
                                                    children: course.name
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: course.alternateLink,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "text-zinc-600 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-zinc-400 mb-4",
                                            children: course.section || "General"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this),
                                        isTeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2 mb-4 opacity-100 sm:opacity-40 group-hover:opacity-100 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "bg-zinc-800 hover:bg-zinc-700 text-xs h-8 border border-zinc-700",
                                                    onClick: ()=>handleViewStudents(course.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-3 h-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Roster"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "bg-blue-600 hover:bg-blue-500 text-xs h-8",
                                                    onClick: ()=>{
                                                        setActiveCourseId(course.id);
                                                        setModalType("assignment");
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-3 h-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Assign"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 555,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 544,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t border-zinc-900 flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${course.courseState === 'ACTIVE' ? 'bg-green-900/20 text-green-400' : 'bg-yellow-900/20 text-yellow-400'}`,
                                            children: course.courseState
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-zinc-600 font-mono",
                                            children: [
                                                "ID: ",
                                                course.id.slice(-4)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 574,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, course.id, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                            lineNumber: 543,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!modalType,
                onOpenChange: (open)=>!open && closeModal(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "bg-zinc-900 border-zinc-800 text-white sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: [
                                        modalType === 'assignment' && 'Create New Assignment',
                                        modalType === 'students' && 'Student Roster'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-zinc-500 text-xs",
                                    children: modalType === 'assignment' ? 'Post a new task to Google Classroom.' : 'View enrolled students.'
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 11
                        }, this),
                        modalType === 'assignment' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-zinc-400",
                                            children: "Assignment Title"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 602,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            value: assignTitle,
                                            onChange: (e)=>setAssignTitle(e.target.value),
                                            className: "bg-black border-zinc-700",
                                            placeholder: "e.g., Lab Report 4"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 601,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-zinc-400",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: assignDesc,
                                            onChange: (e)=>setAssignDesc(e.target.value),
                                            className: "w-full h-24 bg-black border border-zinc-700 rounded-md p-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none",
                                            placeholder: "Instructions for students..."
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 610,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleCreateAssignment,
                                    className: "w-full bg-blue-600 hover:bg-blue-500",
                                    children: "Publish Assignment"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 619,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                            lineNumber: 600,
                            columnNumber: 13
                        }, this),
                        modalType === 'students' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 max-h-[300px] overflow-y-auto space-y-2",
                            children: students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-8 h-8 text-zinc-700 mx-auto mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 630,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-500 text-sm",
                                        children: "No students enrolled yet."
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 631,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-zinc-600 mt-1",
                                        children: "Share the Google Classroom code with students."
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                        lineNumber: 632,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                lineNumber: 629,
                                columnNumber: 17
                            }, this) : students.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-2 bg-black/40 rounded border border-zinc-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400",
                                            children: student.profile?.name?.fullName?.[0] || "?"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 637,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold text-zinc-200",
                                                    children: student.profile?.name?.fullName
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-zinc-500",
                                                    children: student.profile?.emailAddress
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                            lineNumber: 640,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, student.userId, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                                    lineNumber: 636,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                            lineNumber: 627,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                    lineNumber: 586,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
                lineNumber: 585,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx",
        lineNumber: 507,
        columnNumber: 5
    }, this);
}
_s(ClassroomPanel, "n+pfdKDa/EBfIvgyy7sceAMZIy8=");
_c = ClassroomPanel;
var _c;
__turbopack_context__.k.register(_c, "ClassroomPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/google-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CalendarPanel({ token, isTeacher }) {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New Event State (Teacher Only)
    const [newEventTitle, setNewEventTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendarPanel.useEffect": ()=>{
            loadEvents();
        }
    }["CalendarPanel.useEffect"], []);
    const loadEvents = async ()=>{
        setLoading(true);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].getEvents(token);
            setEvents(data);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to sync calendar");
        } finally{
            setLoading(false);
        }
    };
    const handleCreateEvent = async ()=>{
        if (!newEventTitle) return;
        try {
            // Create a 1-hour event starting now
            const start = new Date();
            const end = new Date(start.getTime() + 60 * 60 * 1000); // +1 hour
            await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].addEvent(token, newEventTitle, "Created via NetVerse", start.toISOString(), end.toISOString());
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Event Added!");
            setNewEventTitle("");
            loadEvents();
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to create event");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white",
                                children: "Upcoming Schedule"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: loadEvents,
                                disabled: loading,
                                className: "text-zinc-400",
                                children: "Sync"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-[500px] overflow-y-auto",
                        children: [
                            events.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-500",
                                children: "No upcoming events."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 47
                            }, this),
                            events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-zinc-950 border border-zinc-800 rounded flex gap-4 hover:bg-zinc-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center bg-zinc-800 min-w-[50px] rounded p-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-zinc-400 uppercase",
                                                    children: event.start?.dateTime ? new Date(event.start.dateTime).toLocaleString('default', {
                                                        month: 'short'
                                                    }) : 'ALL'
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-bold text-white",
                                                    children: event.start?.dateTime ? new Date(event.start.dateTime).getDate() : 'DAY'
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-zinc-200",
                                                    children: event.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-500",
                                                    children: event.start?.dateTime ? new Date(event.start.dateTime).toLocaleTimeString([], {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    }) : 'All Day'
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                event.htmlLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: event.htmlLink,
                                                    target: "_blank",
                                                    className: "text-[10px] text-blue-500 hover:underline",
                                                    children: "View in Calendar"
                                                }, void 0, false, {
                                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, event.id, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            isTeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full md:w-80 bg-zinc-950 border border-yellow-500/20 p-4 rounded-xl h-fit",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-yellow-400 font-bold mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            " Schedule Lab"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Lab Session Title",
                                className: "bg-black border-zinc-700",
                                value: newEventTitle,
                                onChange: (e)=>setNewEventTitle(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500",
                                children: "Creates a 1-hour session starting now."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleCreateEvent,
                                className: "w-full bg-yellow-600 hover:bg-yellow-500 text-white",
                                children: "Add to Calendar"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(CalendarPanel, "kymu+xRYiXz6fgykQxKzRSEzpt4=");
_c = CalendarPanel;
var _c;
__turbopack_context__.k.register(_c, "CalendarPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SheetsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/google-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SheetsPanel({ token, isTeacher, user }) {
    _s();
    const [createdSheetUrl, setCreatedSheetUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleCreateAttendance = async ()=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Creating Spreadsheet...");
            // 1. Create Sheet
            const sheet = await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].createSheet(token, `NetVerse Attendance - ${new Date().toLocaleDateString()}`);
            const spreadsheetId = sheet.spreadsheetId;
            // 2. Add Header Row
            await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].appendData(token, spreadsheetId, "Sheet1!A1", [
                [
                    "Student Name",
                    "Email",
                    "Status",
                    "Timestamp"
                ]
            ]);
            // 3. Add Mock Data (In reality, you'd pull this from Firebase)
            await __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$google$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleAPI"].appendData(token, spreadsheetId, "Sheet1!A1", [
                [
                    user.displayName,
                    user.email,
                    "Present",
                    new Date().toISOString()
                ]
            ]);
            setCreatedSheetUrl(sheet.spreadsheetUrl);
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Attendance Sheet Created!");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss();
            __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to create sheet");
            console.error(error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-4 p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                        className: "w-8 h-8 text-blue-400 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-blue-100",
                                children: "Google Sheets Integration"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-300/70 mt-1",
                                children: "Data is synced securely. Teachers have write access; Students have read access."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            isTeacher ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-zinc-950 border-zinc-800 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-white mb-2",
                                children: "Automated Attendance"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-400 mb-4",
                                children: "Generate a new Google Sheet containing the current lobby attendance list."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleCreateAttendance,
                                className: "bg-green-700 hover:bg-green-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    " Export to New Sheet"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            createdSheetUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-2 bg-green-900/20 border border-green-500/30 rounded text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: createdSheetUrl,
                                    target: "_blank",
                                    className: "text-green-400 hover:underline text-sm font-bold",
                                    children: "Open Created Sheet →"
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-zinc-950 border-zinc-800 p-6 opacity-75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-white mb-2",
                                children: "Gradebook Sync"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-400 mb-4",
                                children: "Sync grades from Google Classroom to the master gradebook."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                disabled: true,
                                className: "w-full",
                                children: "Sync (Coming Soon)"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : // Student View
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center p-10 bg-zinc-950 border border-zinc-800 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                        className: "w-10 h-10 text-zinc-600 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-zinc-300",
                        children: "Restricted Access"
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-500 text-center max-w-md mt-2",
                        children: "As a student, you cannot create or edit academic sheets. Please ask your Professor to share the class performance link."
                    }, void 0, false, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(SheetsPanel, "GFGzy/1hWkD9axrdr3Q8ndcZrDY=");
_c = SheetsPanel;
var _c;
__turbopack_context__.k.register(_c, "SheetsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)");
// Reuse the panels we designed previously
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$dashboard$2f$ClassroomPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/ClassroomPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$dashboard$2f$CalendarPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/CalendarPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$dashboard$2f$SheetsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/dashboard/SheetsPanel.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function DashboardOverlay({ isOpen, onClose, token, isTeacher, user }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (val)=>!val && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-[90vw] h-[85vh] bg-black/95 border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden backdrop-blur-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-600 p-1.5 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            className: "text-white font-bold text-lg leading-none",
                                            children: "NetVerse OS"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-zinc-400 uppercase tracking-widest font-mono",
                                            children: isTeacher ? "Administrator Mode" : "Student Access"
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: onClose,
                            className: "hover:bg-red-900/20 hover:text-red-400 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden p-6",
                    children: !token ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col items-center justify-center text-zinc-500 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Google Access Token Not Found."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "Please logout and sign in again."
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: "classroom",
                        className: "h-full flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "bg-zinc-900 border border-zinc-800 w-fit mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "classroom",
                                        className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            " Classroom"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "calendar",
                                        className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            " Schedule"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "sheets",
                                        className: "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            isTeacher ? "Gradebook" : "Performance"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto pr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "classroom",
                                        className: "mt-0 h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$dashboard$2f$ClassroomPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            token: token,
                                            isTeacher: isTeacher
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "calendar",
                                        className: "mt-0 h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$dashboard$2f$CalendarPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            token: token,
                                            isTeacher: isTeacher
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                        value: "sheets",
                                        className: "mt-0 h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$dashboard$2f$SheetsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            token: token,
                                            isTeacher: isTeacher,
                                            user: user
                                        }, void 0, false, {
                                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = DashboardOverlay;
var _c;
__turbopack_context__.k.register(_c, "DashboardOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/hooks/useMultiplayer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMultiplayer",
    ()=>useMultiplayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useMultiplayer(roomId, myPos, myFacing, isMoving) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [otherPlayers, setOtherPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Throttle writes to avoid hitting DB limits (limit to 100ms)
    const lastUpdateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // 1. JOIN ROOM & HANDLE DISCONNECT
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMultiplayer.useEffect": ()=>{
            if (!user) return;
            const myRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `active_sessions/${roomId}/${user.uid}`);
            // Set initial data
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(myRef, {
                x: myPos.x,
                y: myPos.y,
                facing: myFacing,
                isMoving,
                username: user.displayName || "Anonymous",
                lastSeen: Date.now()
            });
            // Magic Line: If tab closes, remove me from DB
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDisconnect"])(myRef).remove();
            // Cleanup when component unmounts
            return ({
                "useMultiplayer.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])(myRef);
                }
            })["useMultiplayer.useEffect"];
        }
    }["useMultiplayer.useEffect"], [
        user,
        roomId
    ]); // Run once on join
    // 2. SYNC MOVEMENT (SEND)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMultiplayer.useEffect": ()=>{
            if (!user) return;
            const now = Date.now();
            // Only write if 100ms passed OR status changed significantly
            if (now - lastUpdateRef.current > 100) {
                const myRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `active_sessions/${roomId}/${user.uid}`);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(myRef, {
                    x: myPos.x,
                    y: myPos.y,
                    facing: myFacing,
                    isMoving,
                    username: user.displayName,
                    lastSeen: now
                }).catch({
                    "useMultiplayer.useEffect": (err)=>console.error("Sync failed", err)
                }["useMultiplayer.useEffect"]);
                lastUpdateRef.current = now;
            }
        }
    }["useMultiplayer.useEffect"], [
        myPos,
        myFacing,
        isMoving,
        user,
        roomId
    ]);
    // 3. LISTEN TO OTHERS (RECEIVE)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMultiplayer.useEffect": ()=>{
            if (!user) return;
            const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], `active_sessions/${roomId}`);
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onValue"])(roomRef, {
                "useMultiplayer.useEffect.unsubscribe": (snapshot)=>{
                    const data = snapshot.val();
                    if (!data) {
                        setOtherPlayers([]);
                        return;
                    }
                    // Convert Object { "uid1": {...}, "uid2": {...} } to Array [ {...}, {...} ]
                    const playersArray = Object.keys(data).filter({
                        "useMultiplayer.useEffect.unsubscribe.playersArray": (key)=>key !== user.uid
                    }["useMultiplayer.useEffect.unsubscribe.playersArray"]) // Remove MYSELF from the list
                    .map({
                        "useMultiplayer.useEffect.unsubscribe.playersArray": (key)=>({
                                id: key,
                                ...data[key]
                            })
                    }["useMultiplayer.useEffect.unsubscribe.playersArray"]);
                    setOtherPlayers(playersArray);
                }
            }["useMultiplayer.useEffect.unsubscribe"]);
            return ({
                "useMultiplayer.useEffect": ()=>unsubscribe()
            })["useMultiplayer.useEffect"];
        }
    }["useMultiplayer.useEffect"], [
        user,
        roomId
    ]);
    return {
        otherPlayers
    };
}
_s(useMultiplayer, "rqazSZhVmPvZfCU9fe/Wo9DzTqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NetVerseEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/game-config.ts [app-client] (ecmascript)");
// --- COMPONENTS ---
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Player.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Station$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Station.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$WorldMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/WorldMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$StationModalManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/StationModalManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$hud$2f$MiniMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/MiniMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$ChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/ChatModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Teacher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/Teacher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$hud$2f$TeacherDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/TeacherDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$hud$2f$DashboardOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/hud/DashboardOverlay.tsx [app-client] (ecmascript)"); // ✅ NEW IMPORT
// --- UI IMPORTS ---
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/ui/button.tsx [app-client] (ecmascript)"); // ✅ NEW IMPORT
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>"); // ✅ NEW IMPORT
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$hooks$2f$useMultiplayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/hooks/useMultiplayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/providers/AuthProvider.tsx [app-client] (ecmascript)");
// --- FIREBASE IMPORTS ---
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$firebase$2f$database$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/firebase/database/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/@firebase/database/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { GAME_CONFIG, STATIONS, GameStation, isTeacher } from "@/lib/game-config"; 
// // --- COMPONENTS ---
// import Player from "./Player";
// import Station from "./Station";
// import WorldMap from "./WorldMap";
// import StationModalManager from "./StationModalManager";
// import MiniMap from "@/components/hud/MiniMap";
// import ChatModal from "./ChatModal"; 
// import Teacher from "./Teacher"; 
// import TeacherDashboard from "@/components/hud/TeacherDashboard"; 
// import { RemotePlayer, useMultiplayer } from "@/hooks/useMultiplayer";
// import { useAuth } from "../providers/AuthProvider";
// // --- FIREBASE IMPORTS ---
// import { ref, set, onDisconnect } from "firebase/database";
// import { db } from "@/lib/firebase";
// import { Loader2 } from "lucide-react";
// export default function NetVerseEngine({ username }: { username: string }) {
//   const { user, loading } = useAuth(); // Get loading state
//   // RBAC Check using config function
//   const amITeacher = isTeacher(user?.email);
//   const getChatId = (uid1: string, uid2: string) => {
//     return [uid1, uid2].sort().join("_"); 
//   };
//   // --- 1. STATE ---
//   const [pos, setPos] = useState({ x: 1200, y: 1500 });
//   const [facing, setFacing] = useState<'left' | 'right' | 'up' | 'down'>('down');
//   const [isMoving, setIsMoving] = useState(false);
//   // Interaction State
//   const [activeStation, setActiveStation] = useState<GameStation | null>(null);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   // Chat State
//   const [closestPlayer, setClosestPlayer] = useState<RemotePlayer | null>(null);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [currentChatId, setCurrentChatId] = useState<string>("");
//   // Multiplayer Hook
//   const { otherPlayers } = useMultiplayer("campus-lobby", pos, facing, isMoving);
//   // --- 2. TEACHER IDENTITY LOCK ---
//   useEffect(() => {
//     // Only run this if NOT loading and user is confirmed teacher
//     if (!loading && amITeacher && user) {
//         console.log("🎓 RBAC: Teacher Mode Activated for", user.email);
//         // Force Position to Desk
//         setPos({ x: 2100, y: 1350 }); 
//         setFacing("down");
//         // Broadcast Online Status
//         const statusRef = ref(db, "game_state/professor_status");
//         set(statusRef, "online");
//         onDisconnect(statusRef).set("offline");
//     }
//   }, [loading, amITeacher, user]);
//   // --- 3. GAME LOOP ---
//   useEffect(() => {
//     if (loading) return; // Don't run loop while loading
//     let animationFrameId: number;
//     const keysPressed = new Set<string>();
//     const handleKeyDown = (e: KeyboardEvent) => keysPressed.add(e.key);
//     const handleKeyUp = (e: KeyboardEvent) => keysPressed.delete(e.key);
//     const handleBlur = () => { keysPressed.clear(); setIsMoving(false); };
//     const gameLoop = () => {
//       if (isDialogOpen) return; 
//       // 🛑 RBAC MOVEMENT LOCK
//       if (amITeacher) {
//          setIsMoving(false); // Teachers cannot move
//       } else {
//           // Normal Student Movement
//           const moving = keysPressed.size > 0;
//           setIsMoving(moving);
//           setPos((prev) => {
//             let { x, y } = prev;
//             const speed = GAME_CONFIG.playerSpeed;
//             if (keysPressed.has("ArrowUp") || keysPressed.has("w")) { y -= speed; setFacing('up'); }
//             if (keysPressed.has("ArrowDown") || keysPressed.has("s")) { y += speed; setFacing('down'); }
//             if (keysPressed.has("ArrowLeft") || keysPressed.has("a")) { x -= speed; setFacing("left"); }
//             if (keysPressed.has("ArrowRight") || keysPressed.has("d")) { x += speed; setFacing("right"); }
//             return {
//               x: Math.max(GAME_CONFIG.playerSize, Math.min(x, GAME_CONFIG.mapWidth - GAME_CONFIG.playerSize)),
//               y: Math.max(GAME_CONFIG.playerSize, Math.min(y, GAME_CONFIG.mapHeight - GAME_CONFIG.playerSize)),
//             };
//           });
//       }
//       // Find Closest Player
//       let closest: RemotePlayer | null = null;
//       let minDist = 100; 
//       for (const p of otherPlayers) {
//         const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
//         if (dist < minDist) { minDist = dist; closest = p; }
//       }
//       setClosestPlayer(closest);
//       // Chat Trigger
//       if (keysPressed.has("e") && closest && !isChatOpen && user) {
//         setCurrentChatId(getChatId(user.uid, closest.id));
//         setIsChatOpen(true);
//         keysPressed.delete("e"); 
//       }
//       // Station Logic
//       const nearby = STATIONS.find((s) => {
//         const dx = Math.abs(pos.x - s.x);
//         const dy = Math.abs(pos.y - s.y);
//         return dx < (s.interactionRadius || 80) && dy < (s.interactionRadius || 80); 
//       });
//       setActiveStation(nearby || null);
//       if (keysPressed.has("Enter") && nearby) {
//         setIsDialogOpen(true);
//         keysPressed.delete("Enter");
//       }
//       animationFrameId = requestAnimationFrame(gameLoop);
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);
//     window.addEventListener("blur", handleBlur);
//     animationFrameId = requestAnimationFrame(gameLoop);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//       window.removeEventListener("blur", handleBlur);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [pos, isDialogOpen, isChatOpen, otherPlayers, user, amITeacher, loading]); 
//   // ✅ 4. LOADING SCREEN (Prevents Glitch)
//   if (loading) {
//     return (
//       <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white gap-4">
//         <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
//         <p className="text-zinc-400 text-sm animate-pulse">Authenticating Identity...</p>
//       </div>
//     );
//   }
//   // ✅ 5. MAIN RENDER
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden relative">
//       {/* HUD Layer */}
//       <div className="absolute top-4 left-4 z-50">
//         <h1 className="text-white font-bold text-xl tracking-widest">NETVERSE <span className="text-blue-500">LABS</span></h1>
//         <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
//           <div className={`w-2 h-2 rounded-full animate-pulse ${amITeacher ? 'bg-yellow-500' : 'bg-green-500'}`}/>
//           Logged in as {username} {amITeacher && <span className="text-yellow-400 font-bold">(PROFESSOR)</span>}
//         </div>
//       </div>
//       {/* Interaction Prompts */}
//       {closestPlayer && !isChatOpen && (
//         <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
//           <div className="bg-black/80 text-white px-4 py-2 rounded-full border border-white/20 shadow-blue-900/50 shadow-lg flex items-center gap-2">
//             <span className="bg-white text-black w-5 h-5 flex items-center justify-center rounded text-xs font-bold">E</span>
//             <span className="text-sm font-medium">Chat with {closestPlayer.username}</span>
//           </div>
//         </div>
//       )}
//       {activeStation && !isDialogOpen && (
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
//           <div className="bg-black/90 text-white px-6 py-3 rounded-full border border-yellow-500/50 shadow-yellow-500/20 shadow-lg flex items-center gap-3">
//             <span className="bg-yellow-500 text-black w-6 h-6 flex items-center justify-center rounded text-xs font-bold">↵</span>
//             <span className="text-sm font-bold tracking-wide">
//               {activeStation.type === 'npc-teacher' ? "Talk to Professor" : `Open ${activeStation.label}`}
//             </span>
//           </div>
//         </div>
//       )}
//       <MiniMap playerPos={pos} />
//       {/* Game Viewport */}
//       <div 
//         className="relative overflow-hidden bg-slate-900 border-4 border-slate-800 rounded-xl shadow-2xl"
//         style={{ width: GAME_CONFIG.viewportWidth, height: GAME_CONFIG.viewportHeight }}
//       >
//         <motion.div
//           className="absolute origin-top-left"
//           animate={{
//             x: -pos.x + GAME_CONFIG.viewportWidth / 2,
//             y: -pos.y + GAME_CONFIG.viewportHeight / 2,
//           }}
//           transition={{ type: "tween", ease: "linear", duration: 0 }} 
//           style={{ width: GAME_CONFIG.mapWidth, height: GAME_CONFIG.mapHeight }}
//         >
//           <WorldMap />
//           {/* Other Players */}
//           {otherPlayers.map((p) => (
//             <Player 
//               key={p.id}
//               pos={{ x: p.x, y: p.y }}
//               facing={p.facing}
//               isMoving={p.isMoving}
//               username={p.username}
//             />
//           ))}
//           {/* Stations (Hide Professor NPC if I AM the professor) */}
//           {STATIONS.filter(s => s.type !== "npc-teacher").map((station) => (
//             <Station key={station.id} station={station} isActive={activeStation?.id === station.id} />
//           ))}
//           {/* Render Teacher NPC (Only if I am NOT the teacher) */}
//           {!amITeacher && STATIONS.filter(s => s.type === "npc-teacher").map(npc => (
//             <Teacher 
//                 key={npc.id}
//                 x={npc.x}
//                 y={npc.y}
//                 label={npc.label}
//                 status="online" 
//             />
//           ))}
//           {/* My Player */}
//           <Player pos={pos} facing={facing} username={username} isMoving={false} />
//         </motion.div>
//       </div>
//       <StationModalManager 
//         isOpen={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         activeStation={activeStation}
//       />
//       {user && closestPlayer && (
//         <ChatModal 
//           isOpen={isChatOpen}
//           onClose={() => setIsChatOpen(false)}
//           chatId={currentChatId}
//           myUsername={username}
//           partnerName={closestPlayer ? closestPlayer.username : "Student"}
//         />
//       )}
//       {/* TEACHER DASHBOARD (Only visible if RBAC confirms teacher) */}
//       {amITeacher && <TeacherDashboard />}
//     </div>
//   );
// }
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function NetVerseEngine({ username }) {
    _s();
    // 1. Get Auth Data (User + Token)
    // Note: Ensure your AuthProvider is updated to return accessToken as discussed
    const { user, loading, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // RBAC Check using config function
    const amITeacher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTeacher"])(user?.email);
    const getChatId = (uid1, uid2)=>{
        return [
            uid1,
            uid2
        ].sort().join("_");
    };
    // --- 2. STATE ---
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 1200,
        y: 1500
    });
    const [facing, setFacing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('down');
    const [isMoving, setIsMoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Interaction State
    const [activeStation, setActiveStation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDashboardOpen, setIsDashboardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // ✅ NEW STATE
    // Chat State
    const [closestPlayer, setClosestPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isChatOpen, setIsChatOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentChatId, setCurrentChatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Multiplayer Hook
    const { otherPlayers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$hooks$2f$useMultiplayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayer"])("campus-lobby", pos, facing, isMoving);
    // --- 3. TEACHER IDENTITY LOCK ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetVerseEngine.useEffect": ()=>{
            // Only run this if NOT loading and user is confirmed teacher
            if (!loading && amITeacher && user) {
                console.log("🎓 RBAC: Teacher Mode Activated for", user.email);
                // Force Position to Desk
                setPos({
                    x: 2100,
                    y: 1350
                });
                setFacing("down");
                // Broadcast Online Status
                const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "game_state/professor_status");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["set"])(statusRef, "online");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f40$firebase$2f$database$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDisconnect"])(statusRef).set("offline");
            }
        }
    }["NetVerseEngine.useEffect"], [
        loading,
        amITeacher,
        user
    ]);
    // --- 4. GAME LOOP ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetVerseEngine.useEffect": ()=>{
            if (loading) return; // Don't run loop while loading
            let animationFrameId;
            const keysPressed = new Set();
            const handleKeyDown = {
                "NetVerseEngine.useEffect.handleKeyDown": (e)=>keysPressed.add(e.key)
            }["NetVerseEngine.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "NetVerseEngine.useEffect.handleKeyUp": (e)=>keysPressed.delete(e.key)
            }["NetVerseEngine.useEffect.handleKeyUp"];
            const handleBlur = {
                "NetVerseEngine.useEffect.handleBlur": ()=>{
                    keysPressed.clear();
                    setIsMoving(false);
                }
            }["NetVerseEngine.useEffect.handleBlur"];
            const gameLoop = {
                "NetVerseEngine.useEffect.gameLoop": ()=>{
                    // ✅ STOP MOVEMENT IF DASHBOARD IS OPEN
                    if (isDialogOpen || isChatOpen || isDashboardOpen) {
                        setIsMoving(false);
                        // Keep requesting frames so animations don't freeze, but don't update position
                        animationFrameId = requestAnimationFrame(gameLoop);
                        return;
                    }
                    // 🛑 RBAC MOVEMENT LOCK
                    if (amITeacher) {
                        setIsMoving(false); // Teachers cannot move
                    } else {
                        // Normal Student Movement
                        const moving = keysPressed.size > 0;
                        setIsMoving(moving);
                        setPos({
                            "NetVerseEngine.useEffect.gameLoop": (prev)=>{
                                let { x, y } = prev;
                                const speed = __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].playerSpeed;
                                if (keysPressed.has("ArrowUp") || keysPressed.has("w")) {
                                    y -= speed;
                                    setFacing('up');
                                }
                                if (keysPressed.has("ArrowDown") || keysPressed.has("s")) {
                                    y += speed;
                                    setFacing('down');
                                }
                                if (keysPressed.has("ArrowLeft") || keysPressed.has("a")) {
                                    x -= speed;
                                    setFacing("left");
                                }
                                if (keysPressed.has("ArrowRight") || keysPressed.has("d")) {
                                    x += speed;
                                    setFacing("right");
                                }
                                return {
                                    x: Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].playerSize, Math.min(x, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapWidth - __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].playerSize)),
                                    y: Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].playerSize, Math.min(y, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapHeight - __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].playerSize))
                                };
                            }
                        }["NetVerseEngine.useEffect.gameLoop"]);
                    }
                    // Find Closest Player
                    let closest = null;
                    let minDist = 100;
                    for (const p of otherPlayers){
                        const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
                        if (dist < minDist) {
                            minDist = dist;
                            closest = p;
                        }
                    }
                    setClosestPlayer(closest);
                    // Chat Trigger
                    if (keysPressed.has("e") && closest && !isChatOpen && user) {
                        setCurrentChatId(getChatId(user.uid, closest.id));
                        setIsChatOpen(true);
                        keysPressed.delete("e");
                    }
                    // Station Logic
                    const nearby = __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIONS"].find({
                        "NetVerseEngine.useEffect.gameLoop.nearby": (s)=>{
                            const dx = Math.abs(pos.x - s.x);
                            const dy = Math.abs(pos.y - s.y);
                            return dx < (s.interactionRadius || 80) && dy < (s.interactionRadius || 80);
                        }
                    }["NetVerseEngine.useEffect.gameLoop.nearby"]);
                    setActiveStation(nearby || null);
                    if (keysPressed.has("Enter") && nearby) {
                        setIsDialogOpen(true);
                        keysPressed.delete("Enter");
                    }
                    animationFrameId = requestAnimationFrame(gameLoop);
                }
            }["NetVerseEngine.useEffect.gameLoop"];
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("keyup", handleKeyUp);
            window.addEventListener("blur", handleBlur);
            animationFrameId = requestAnimationFrame(gameLoop);
            return ({
                "NetVerseEngine.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    window.removeEventListener("keyup", handleKeyUp);
                    window.removeEventListener("blur", handleBlur);
                    cancelAnimationFrame(animationFrameId);
                }
            })["NetVerseEngine.useEffect"];
        }
    }["NetVerseEngine.useEffect"], [
        pos,
        isDialogOpen,
        isChatOpen,
        isDashboardOpen,
        otherPlayers,
        user,
        amITeacher,
        loading
    ]);
    // ✅ 5. LOADING SCREEN (Prevents Glitch)
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen bg-black flex flex-col items-center justify-center text-white gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-10 h-10 animate-spin text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-400 text-sm animate-pulse",
                    children: "Authenticating Identity..."
                }, void 0, false, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                    lineNumber: 438,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
            lineNumber: 436,
            columnNumber: 7
        }, this);
    }
    // ✅ 6. MAIN RENDER
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-black overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-50 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-white font-bold text-xl tracking-widest drop-shadow-md",
                        children: [
                            "NETVERSE ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-500",
                                children: "LABS"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                                lineNumber: 449,
                                columnNumber: 94
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-slate-400 text-xs mt-1 bg-black/50 px-2 py-1 rounded backdrop-blur-sm w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-2 h-2 rounded-full animate-pulse ${amITeacher ? 'bg-yellow-500' : 'bg-green-500'}`
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            "Logged in as ",
                            username,
                            " ",
                            amITeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 font-bold",
                                children: "(PROFESSOR)"
                            }, void 0, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                                lineNumber: 452,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>setIsDashboardOpen(true),
                    className: "bg-zinc-900/80 border border-zinc-700 hover:bg-blue-600 hover:border-blue-400 text-white backdrop-blur-md shadow-xl gap-2 transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            closestPlayer && !isChatOpen && !isDashboardOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/80 text-white px-4 py-2 rounded-full border border-white/20 shadow-blue-900/50 shadow-lg flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-white text-black w-5 h-5 flex items-center justify-center rounded text-xs font-bold",
                            children: "E"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: [
                                "Chat with ",
                                closestPlayer.username
                            ]
                        }, void 0, true, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 472,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                    lineNumber: 470,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 469,
                columnNumber: 9
            }, this),
            activeStation && !isDialogOpen && !isDashboardOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-50 animate-bounce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/90 text-white px-6 py-3 rounded-full border border-yellow-500/50 shadow-yellow-500/20 shadow-lg flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-yellow-500 text-black w-6 h-6 flex items-center justify-center rounded text-xs font-bold",
                            children: "↵"
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 480,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold tracking-wide",
                            children: activeStation.type === 'npc-teacher' ? "Talk to Professor" : `Open ${activeStation.label}`
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 481,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                    lineNumber: 479,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 478,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$hud$2f$MiniMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                playerPos: pos
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden bg-slate-900 border-4 border-slate-800 rounded-xl shadow-2xl",
                style: {
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportWidth,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportHeight
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute origin-top-left",
                    animate: {
                        x: -pos.x + __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportWidth / 2,
                        y: -pos.y + __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].viewportHeight / 2
                    },
                    transition: {
                        type: "tween",
                        ease: "linear",
                        duration: 0
                    },
                    style: {
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapWidth,
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GAME_CONFIG"].mapHeight
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$WorldMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 504,
                            columnNumber: 11
                        }, this),
                        otherPlayers.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                pos: {
                                    x: p.x,
                                    y: p.y
                                },
                                facing: p.facing,
                                isMoving: p.isMoving,
                                username: p.username
                            }, p.id, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)),
                        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIONS"].filter((s)=>s.type !== "npc-teacher").map((station)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Station$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                station: station,
                                isActive: activeStation?.id === station.id
                            }, station.id, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this)),
                        !amITeacher && __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$lib$2f$game$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIONS"].filter((s)=>s.type === "npc-teacher").map((npc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Teacher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                x: npc.x,
                                y: npc.y,
                                label: npc.label,
                                status: "online"
                            }, npc.id, false, {
                                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$Player$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            pos: pos,
                            facing: facing,
                            username: username,
                            isMoving: isMoving
                        }, void 0, false, {
                            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$StationModalManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDialogOpen,
                onClose: ()=>setIsDialogOpen(false),
                activeStation: activeStation
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            user && closestPlayer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$ChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isChatOpen,
                onClose: ()=>setIsChatOpen(false),
                chatId: currentChatId,
                myUsername: username,
                partnerName: closestPlayer ? closestPlayer.username : "Student"
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 546,
                columnNumber: 9
            }, this),
            amITeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$hud$2f$TeacherDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 556,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$hud$2f$DashboardOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isDashboardOpen,
                onClose: ()=>setIsDashboardOpen(false),
                token: accessToken,
                isTeacher: amITeacher,
                user: user
            }, void 0, false, {
                fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
                lineNumber: 559,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
_s(NetVerseEngine, "b0HAcBsD7W/wkVEwVIQu6f4oJDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$providers$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$hooks$2f$useMultiplayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMultiplayer"]
    ];
});
_c = NetVerseEngine;
var _c;
__turbopack_context__.k.register(_c, "NetVerseEngine");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$landing$2f$LobbyScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/landing/LobbyScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$NetVerseEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/components/game/NetVerseEngine.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [isGameActive, setIsGameActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "Student",
        role: "student"
    });
    const handleJoin = (name, role)=>{
        setUserData({
            name,
            role
        });
        setIsGameActive(true); // <--- Triggers the screen swap
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-black",
        children: !isGameActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$landing$2f$LobbyScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onJoin: handleJoin
        }, void 0, false, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/app/page.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, this) : // Pass the captured name to the engine
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$PROJECTS$2f$metaverse$2d$lab$2d$main$2f$metaverse$2d$lab$2d$main$2f$components$2f$game$2f$NetVerseEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            username: userData.name
        }, void 0, false, {
            fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/app/page.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/PROJECTS/metaverse-lab-main/metaverse-lab-main/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Home, "cu0akEf7bVbQ/UTn6y2RJfDI7a4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=PROJECTS_metaverse-lab-main_metaverse-lab-main_0635d40b._.js.map
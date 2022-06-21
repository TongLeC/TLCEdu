const OpenCC = require("opencc-js");
// 繁体转简体
// const converter = OpenCC.Converter({ from: "hk", to: "cn" });
// 简体转繁体
const restore = OpenCC.Converter({ from: "cn", to: "hk" });
function deepClone(target) {
    if (typeof target === "object" && target) {
        let cloneObj = {};
        for (const key in target) {
            const val = target[key];
            if (typeof val === "object" && val) {
                cloneObj[key] = deepClone(val);
            } else {
                if(typeof val === "string") {
                    cloneObj[key] = restore(val);
                } else {
                    cloneObj[key] = val;
                }
            }
        }
        return cloneObj;
    } else {
        return target;
    }
}

export default deepClone
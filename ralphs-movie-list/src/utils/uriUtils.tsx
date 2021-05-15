
export default function getIntVarFromPathName(pathText: string) {
    return parseInt(window.location.pathname.replace(pathText, ""));
}

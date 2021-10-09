export const isLogin = () => {
    if (localStorage.getItem("student")||localStorage.getItem("teacher")) {
        return true;
    }
    return false;
}
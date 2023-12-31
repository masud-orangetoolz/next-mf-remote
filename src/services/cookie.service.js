class CookieService {
    setCookie(c_name, c_value = "") {
        document.cookie = c_name + "=" + c_value + "; Secure; path=/";
    }

    getCookie(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie = (cname) => {
        const cookieInfo = this.getCookie(cname);
        return !!cookieInfo;
    };
}

export default new CookieService();

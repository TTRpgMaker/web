export enum METHOD {
    get = "get",
    post = "post",
}

export class Fetch {
    static async getData(url: string, method: METHOD, authorizationToken: string) {
        try {
            const response = await fetch(url, {
                method: method,
                referrerPolicy: "no-referrer",
                headers: new Headers({
                    'Authorization': authorizationToken
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response;
        } catch (error) {
            console.log(error);
            return;
        }
    }
}
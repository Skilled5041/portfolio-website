import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    return {
        ipAddress: event.request.headers.get("CF-Connecting-IP") ?? event.request.headers.get("CF-Connecting-IPv6")
    };
};

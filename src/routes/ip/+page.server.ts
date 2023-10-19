import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    return {
        ipAddress: event.getClientAddress()
    };
};
import { GetForestDetailHandler } from "./handlers/get-forest-detail.handler";
import { GetForestListHandler } from "./handlers/get-forest-list.handler";

export const forest_queries = [
    GetForestListHandler,
    GetForestDetailHandler
]
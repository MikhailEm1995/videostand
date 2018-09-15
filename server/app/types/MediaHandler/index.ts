import { IDBConnector } from "../DBConnector/index";

import { TMedia } from "../MediaType/index";

export type MediaOrder = {
    id: number;
    order: number;
}

export interface IMediaHandler extends IDBConnector {
    getAllUserMedias(user_id: number): Promise<TMedia[]>;
    createMedia(media: TMedia): Promise<TMedia>;
    updateMedia(media_id: number, media_info: TMedia): Promise<TMedia>;
    changeMediaOrder(order: MediaOrder | MediaOrder[]): Promise<MediaOrder[]>;
}

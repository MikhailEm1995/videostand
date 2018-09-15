import {IMediaHandler, MediaOrder} from "../../types/MediaHandler/index";
import { DBConnector } from "../DBConnector/index";

import { TMedia } from "../../types/MediaType/index";

import { TABLES } from "../../constants/db";

export class MediaHandler extends DBConnector implements IMediaHandler  {
    public getAllUserMedias(user_id: number): Promise<TMedia[]> {
        const query = 'SELECT * FROM ?.? WHERE user_id=?';

        return new Promise<TMedia[]>((resolve, reject) => {
            this.connection.query(query, [user_id, this.db, TABLES.MEDIA], (err: Error, result: TMedia[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    public updateMedia(media_id: number, media_info: TMedia): Promise<TMedia> {
        return new Promise<TMedia>((resolve, reject) => {

        });
    }

    public changeMediaOrder(order: MediaOrder | MediaOrder[]): Promise<MediaOrder[]> {
        return new Promise<MediaOrder[]>((resolve, reject) => {

        });
    }
}

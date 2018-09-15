export enum MediaTypes {
    PICTURE = 'picture',
    VIDEO = 'video'
}

export type TMedia = {
    id: number;
    title?: string;
    description?: string;
    duration?: number;
    imgURI: string;
    type: MediaTypes;
    order: number;
    isActive: boolean;
}

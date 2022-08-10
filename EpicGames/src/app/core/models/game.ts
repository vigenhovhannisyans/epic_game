export interface Game {
    id: number;
    image_url: string;
    title: string;
    about_game: string;
    price: number;
    sale?: number;
    category: string[];
    cover_image_path: string;
    is_epic: boolean;
    live_stream_url?: string;
    has_live: boolean;
    more_image_url: string[];
    operation_system: string[];
    processor: string[];
    ram: string[];
    video_card: string[];
    disc: string;
    directX: string[];
    internet: string;
    pve: string[];
    pvp: string[];
}

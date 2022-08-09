export interface Game {
    id: number;
    image_url: string;
    title: string;
    about_game: string;
    operation_system_id: number[];
    price: number;
    sale?: number;
    category: string[];
    cover_image_path: string;
    is_epic: boolean;
    live_stream_url?: string;
    has_live: boolean;
}

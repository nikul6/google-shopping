export type SearchParams = {
    pages?: string;
    sortBy: string;
    minPrice?: string;
    maxPrice?: string
}

type PageResult = {
    content: Content;
    created_at: string;
    update_at: string;
    page: number;
    url: string;
    job_id: string;
    status_code: string;
    parser_type: string;
}

type Content = {
    url: string;
    page: number;
    results: ResultOptions;
    last_visible_page: number;
    parse_status_code: number;
}

type Results = {
    paid: any[];
    filters: Filter[];
    organice: Organic[];
    search_information: {
        query: string;
        showing_results_for: number;
    }
}

type Filter = {
    name: string;
    values: Value[];
}

type Value = {
    url: string;
    value: string;
}

type Organice = {
    pos: number;
    url: string;
    type: string;
    price: number;
    title: string;
    currency: string;
    merchant: {
        url: string;
        name: string
    };
    price_str: string;
    pos_overall: number;
}
export interface tableProps {
    posts: any;
    setdata: (data: any) => void;
    rowperpage: (Number: number) => void;
    activePage: (Number: number) => void;
    filter:any,

}

export interface paginationProps {
    postsPerPage: number;
    totalPages: number;
    activePage: (Number: number) => void;
    currentpage: number;

}

export interface DataProps {
    product: any;
    length: any;
}
export interface tableProps {
posts: any;
loading: boolean;
}

export interface paginationProps{
postsPerPage: number;
totalPages: number;
activePage: (Number:number) => void;
currentpage: number;
}